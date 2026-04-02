#!/usr/bin/env node

/**
 * IDX Morning Market Intelligence
 *
 * Automated IDX market intelligence system with real data.
 * Collects, validates, and reports market-moving information.
 *
 * Usage (Agent): Call generateReport({ webSearch, webFetch })
 * Usage (CLI): node skills/idx-market-intel/index.js
 */

const fs = require('fs');
const path = require('path');

// Load config
const CONFIG_PATH = path.join(__dirname, 'config.json');
const HISTORY_PATH = path.join(__dirname, 'history.json');

let config;
try {
  config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
} catch (err) {
  console.error('Failed to load config:', err.message);
  process.exit(1);
}

/**
 * Validate if a data item meets criteria (Strict 48-hour window validation)
 *
 * ✅ Wajib ada URL sumber yang bisa diverifikasi + tanggal publikasi
 * ✅ Wajib identifikasi ticker/sektor IDX yang terdampak
 * ✅ Diberi impact score: arah (pos/neg/netral) × magnitude (high/med/low)
 * ❌ Tidak ada URL atau tanggal → item langsung dibuang (zero tolerance)
 */
function validateItem(item) {
  const errors = [];

  // Zero tolerance: Missing URL → reject immediately
  if (!item.sourceUrl) {
    errors.push('Missing source URL (zero tolerance)');
    return { valid: false, errors, item: null };
  }

  // Zero tolerance: Missing publication date → reject immediately
  if (!item.pubDate || !item.pubDateObj) {
    errors.push('Missing publication date (zero tolerance)');
    return { valid: false, errors, item: null };
  }

  // Check 48-hour window
  if (!item.isRecent) {
    errors.push(`Publication date (${item.pubDate}) is outside 48-hour window`);
    return { valid: false, errors, item: null };
  }

  // Wajib ada ticker atau sector IDX yang terdampak
  if (!item.ticker && !item.sector) {
    errors.push('Missing ticker/sector impact');
  }

  // Diberi impact score: arah × magnitude
  if (!item.impact || !item.impact.direction || !item.impact.magnitude) {
    errors.push('Missing or incomplete impact score');
  }

  return {
    valid: errors.length === 0,
    errors,
    item
  };
}

/**
 * Calculate impact score with emoji
 */
function calculateImpact(direction, magnitude) {
  const directionValue = {
    'positive': 1,
    'neutral': 0,
    'negative': -1
  };

  const magnitudeValue = {
    'high': 3,
    'medium': 2,
    'low': 1
  };

  const dir = directionValue[direction.toLowerCase()] || 0;
  const mag = magnitudeValue[magnitude.toLowerCase()] || 2;

  return {
    direction,
    magnitude,
    score: dir * mag,
    emoji: getImpactEmoji(dir, mag)
  };
}

function getImpactEmoji(direction, magnitude) {
  if (direction > 0) {
    if (magnitude >= 3) return '🟢🟢🟢';
    if (magnitude >= 2) return '🟢🟢';
    return '🟢';
  } else if (direction < 0) {
    if (magnitude >= 3) return '🔴🔴🔴';
    if (magnitude >= 2) return '🔴🔴';
    return '🔴';
  }
  return '⚪';
}

/**
 * Search for news using web_search tool
 */
async function searchNews(query, webSearch, maxResults = 5) {
  if (!webSearch) {
    console.warn('webSearch tool not available, using placeholder');
    return [];
  }

  try {
    const results = await webSearch({
      query: query,
      count: maxResults,
      freshness: 'day',
      search_lang: 'id',
      ui_lang: 'id-ID'
    });

    return results || [];
  } catch (err) {
    console.error(`Search error for "${query}":`, err.message);
    return [];
  }
}

/**
 * Parse publication date from search result
 * Returns Date object or null if not found/invalid
 *
 * FIXED (2026-03-11): Don't default to today if date not found
 * - Return null if date cannot be determined
 * - Validation will reject items with null dates
 */
function parsePublicationDate(result) {
  // Try to get date from 'published' field (from web_search)
  if (result.published) {
    try {
      const date = new Date(result.published);
      if (!isNaN(date.getTime())) {
        console.log(`  ✓ Parsed date from 'published': ${date.toISOString()} (${result.published})`);
        return date;
      }
    } catch (err) {
      console.warn('Failed to parse published date:', result.published);
    }
  }

  // Try to extract date from title/snippet
  const text = (result.title || '') + ' ' + (result.snippet || '');

  // Common Indonesian date patterns
  const datePatterns = [
    /(\d{1,2})\s*(Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember)\s*(\d{4})/i,
    /(\d{4})-(\d{1,2})-(\d{1,2})/,
    /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
    /(\d{1,2})-(\d{1,2})-(\d{4})/
  ];

  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      try {
        let date;
        if (match[0].includes('2025') || match[0].includes('2026')) {
          date = new Date(match[0]);
        } else {
          // Assume current year if not specified
          const currentYear = new Date().getFullYear();
          const modifiedText = match[0].replace(/\b\d{4}\b/, currentYear.toString());
          date = new Date(modifiedText);
        }
        if (!isNaN(date.getTime())) {
          return date;
        }
      } catch (err) {
        // Continue to next pattern
      }
    }
  }

  // FIXED (2026-03-11): Return null instead of defaulting to today
  // Items without clear dates will be rejected by validation
  console.log(`  ⚠ No valid date found for: ${result.title?.substring(0, 50)}...`);
  return null;
}

/**
 * Check if item is within 48-hour window
 */
function isWithin48Hours(pubDate) {
  const now = new Date();
  const hoursDiff = (now - pubDate) / (1000 * 60 * 60);
  return hoursDiff <= 48;
}

/**
 * Analyze search result and extract IDX-relevant info
 *
 * FIXED (2026-03-11): Handle null dates properly
 * - If pubDateObj is null, validation will reject the item
 */
async function analyzeResult(result, categoryName) {
  const { title, url, snippet } = result;

  // Extract potential tickers (4-letter codes in all caps)
  const tickerRegex = /\b[A-Z]{4}\b/g;
  const tickers = (title + ' ' + (snippet || '')).match(tickerRegex) || [];

  // Extract sectors
  const sectors = extractSectors(title + ' ' + (snippet || ''));

  // Determine impact based on keywords
  const impact = analyzeImpact(title + ' ' + (snippet || ''), categoryName);

  // Parse publication date
  const pubDateObj = parsePublicationDate(result);

  // Format publication date (handle null)
  let pubDate = 'Unknown';
  let isRecent = false;

  if (pubDateObj && !isNaN(pubDateObj.getTime())) {
    pubDate = pubDateObj.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Check 48-hour window
    isRecent = isWithin48Hours(pubDateObj);
  } else {
    console.log(`  ❌ Date parsing failed for: ${title?.substring(0, 50)}...`);
  }

  return {
    title,
    summary: snippet || 'No summary available',
    url,
    tickers: tickers.slice(0, 3), // Max 3 tickers
    ticker: tickers[0] || null,
    sectors,
    sector: sectors[0] || null,
    sourceUrl: url,
    pubDate,
    pubDateObj,
    isRecent,
    impact
  };
}

/**
 * Extract sectors from text
 */
function extractSectors(text) {
  const sectorMap = {
    'bank': 'BANKING', 'bpr': 'BANKING', 'bpd': 'BANKING',
    'saham': 'MARKET', 'ihsg': 'MARKET', 'idx': 'MARKET',
    'tambang': 'MINING', 'batubara': 'MINING', 'emas': 'MINING', 'nikel': 'MINING',
    'pln': 'INFRASTRUCTURE', 'tol': 'INFRASTRUCTURE', 'jalan tol': 'INFRASTRUCTURE',
    'telkom': 'TELECOM', 'internet': 'TELECOM', 'data center': 'TELECOM',
    'unilever': 'CONSUMER', ' indofood': 'CONSUMER', 'sampoerna': 'CONSUMER',
    'astra': 'AUTOMOTIVE', 'toyota': 'AUTOMOTIVE', 'honda': 'AUTOMOTIVE',
    'palm': 'PLANTATION', 'kelapa sawit': 'PLANTATION', 'cpo': 'PLANTATION',
    'properti': 'PROPERTY', 'perumahan': 'PROPERTY', 'apartemen': 'PROPERTY'
  };

  const sectors = [];
  const lowerText = text.toLowerCase();

  for (const [keyword, sector] of Object.entries(sectorMap)) {
    if (lowerText.includes(keyword) && !sectors.includes(sector)) {
      sectors.push(sector);
    }
  }

  return sectors.length > 0 ? sectors : ['MARKET'];
}

/**
 * Analyze impact direction and magnitude
 */
function analyzeImpact(text, categoryName) {
  const lowerText = text.toLowerCase();

  // Positive indicators
  const positiveWords = ['naik', 'tinggi', 'positif', 'tumbuh', 'untung', 'catat', 'raih', 'capai', 'bagus', 'optimis', 'baik', 'sukses', 'lancar'];
  // Negative indicators
  const negativeWords = ['turun', 'rendah', 'negatif', 'rugi', 'jatu', 'ancam', 'khawatir', 'buruk', 'penurunan', 'gagal', 'bermasalah'];

  let direction = 'neutral';
  let positiveCount = 0;
  let negativeCount = 0;

  for (const word of positiveWords) {
    if (lowerText.includes(word)) positiveCount++;
  }

  for (const word of negativeWords) {
    if (lowerText.includes(word)) negativeCount++;
  }

  if (positiveCount > negativeCount) {
    direction = 'positive';
  } else if (negativeCount > positiveCount) {
    direction = 'negative';
  }

  // High magnitude indicators
  const highMagnitudeWords = ['pencapaian', 'rekor', 'pertama', 'terbesar', 'besar', 'signifikan', 'drastis', 'mendadak'];
  const lowMagnitudeWords = ['sedikit', 'sedikit saja', 'kecil', 'ringan'];

  let magnitude = 'medium';
  for (const word of highMagnitudeWords) {
    if (lowerText.includes(word)) {
      magnitude = 'high';
      break;
    }
  }
  if (magnitude === 'medium') {
    for (const word of lowMagnitudeWords) {
      if (lowerText.includes(word)) {
        magnitude = 'low';
        break;
      }
    }
  }

  return calculateImpact(direction, magnitude);
}

/**
 * Format commodity table
 *
 * FIXED (2026-03-11): Handle null values gracefully
 * - Shows "⏳ Data tidak tersedia" when price is null
 * - No fake/hardcoded values
 */
function formatCommodityTable(commodities) {
  const headers = '| Commodity   | Price   | Change  | %       |';
  const separator = '| ----------- | ------- | ------- | ------- |';

  const rows = commodities.map(c => {
    if (!c.price) {
      return `| ${c.name}   | ⏳ Data tidak tersedia | -       | -       |`;
    }

    const price = c.price || '-';
    const change = c.change || '-';
    const pct = c.pct || '-';

    // Parse numeric values for emoji
    const changeNum = parseFloat(String(c.change).replace(/[+,]/g, ''));
    const pctNum = parseFloat(String(c.pct).replace(/[+%]/g, ''));
    const changeDisplay = changeNum > 0 ? `+${change}` : change;
    const pctDisplay = pctNum > 0 ? `+${pct}%` : `${pct}%`;
    const emoji = pctNum > 0 ? '🟢' : pctNum < 0 ? '🔴' : '⚪';

    return `| ${c.name}   | ${price}  | ${changeDisplay} | ${pctDisplay}  |`;
  });

  return [headers, separator, ...rows].join('\n');
}

/**
 * Fetch real commodity prices from web
 *
 * FIXED (2026-03-11): Removed hardcoded defaults
 * - Now returns null for unavailable data instead of fake values
 * - Report will show "⏳ Data tidak tersedia" for missing commodities
 */
async function fetchCommodityPrices(webSearch, webFetch) {
  // Try to get real commodity prices via search
  const queries = [
    'gold price today spot',
    'oil price WTI today',
    'oil price Brent today',
    'nickel price Indonesia today',
    'palm oil price CPO today',
    'copper price today',
    'coal price Indonesia today',
    'natural gas price today'
  ];

  const commodities = config.commodities;
  const results = [];

  for (let i = 0; i < Math.min(queries.length, commodities.length); i++) {
    try {
      console.log(`  🔍 Fetching ${commodities[i]}...`);

      const searchResults = await searchNews(queries[i], webSearch, 1);

      if (searchResults && searchResults.length > 0) {
        // Extract price from search snippet if possible
        const snippet = searchResults[0].snippet || '';
        const priceMatch = snippet.match(/(\$|Rp)?\s*[\d,]+\.?\d*/g);
        const price = priceMatch ? priceMatch[0] : null;

        if (price) {
          results.push({
            name: commodities[i],
            price: price,
            change: '-',
            pct: '-'
          });
          console.log(`    ✓ ${commodities[i]}: ${price}`);
        } else {
          results.push({
            name: commodities[i],
            price: null,
            change: null,
            pct: null
          });
          console.log(`    ⚠ ${commodities[i]}: No price found`);
        }
      } else {
        // Return null if no search results
        results.push({
          name: commodities[i],
          price: null,
          change: null,
          pct: null
        });
        console.log(`    ⚠ ${commodities[i]}: No search results`);
      }
    } catch (err) {
      console.error(`    ❌ Error fetching ${commodities[i]}:`, err.message);
      // Return null on error
      results.push({
        name: commodities[i],
        price: null,
        change: null,
        pct: null
      });
    }
  }

  return results;
}

/**
 * Main function - generate report with real data
 */
async function generateReport(tools = {}) {
  const { webSearch, webFetch } = tools;

  console.log('🇮🇩 IDX Morning Market Intelligence starting...');
  console.log(`📡 Tools available: webSearch=${!!webSearch}, webFetch=${!!webFetch}`);

  const today = new Date();
  const dateStr = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Initialize report
  const report = {
    date: dateStr,
    categories: {},
    commodities: [],
    summary: {
      totalItems: 0,
      highImpact: 0,
      mediumImpact: 0,
      lowImpact: 0,
      rejectedItems: 0
    }
  };

  // Categories configuration
  const categories = {
    'regulasi': {
      emoji: '📰',
      title: 'Regulasi & Kebijakan',
      queries: config.searchQueries.regulasi
    },
    'danantara': {
      emoji: '🏛️',
      title: 'Danantara',
      queries: config.searchQueries.danantara
    },
    'ma': {
      emoji: '🔄',
      title: 'M&A & Backdoor Listing',
      queries: config.searchQueries.ma
    },
    'aksi-korporasi': {
      emoji: '📋',
      title: 'Aksi Korporasi',
      queries: config.searchQueries['aksi-korporasi']
    },
    'geopolitik-komoditas': {
      emoji: '🌍',
      title: 'Geopolitik & Komoditas',
      queries: config.searchQueries['geopolitik-komoditas']
    },
    'struktur-pasar': {
      emoji: '📊',
      title: 'Struktur Pasar',
      queries: config.searchQueries['struktur-pasar']
    }
  };

  // Process each category
  for (const [key, cat] of Object.entries(categories)) {
    if (!config.enableCategories.includes(key)) continue;

    console.log(`  🔍 ${cat.title}...`);

    const items = [];

    // Search for each query in the category
    for (const query of cat.queries) {
      const searchResults = await searchNews(query, webSearch, 3);

      for (const result of searchResults) {
        const analyzed = await analyzeResult(result, cat.title);
        const validated = validateItem(analyzed);

        if (validated.valid) {
          items.push(validated.item);

          // Update summary
          if (validated.item.impact.magnitude >= 3) report.summary.highImpact++;
          else if (validated.item.impact.magnitude >= 2) report.summary.mediumImpact++;
          else report.summary.lowImpact++;

          report.summary.totalItems++;
        } else {
          // Increment rejected counter
          report.summary.rejectedItems++;

          // Log rejected items for debugging
          console.log(`  ❌ Rejected: ${analyzed.title}`);
          validated.errors.forEach(err => console.log(`     - ${err}`));
        }
      }
    }

    // Limit to top 5 items per category
    report.categories[key] = {
      emoji: cat.emoji,
      title: cat.title,
      items: items.slice(0, 5)
    };
  }

  // Fetch commodity data
  console.log('📊 Fetching commodity data...');
  report.commodities = await fetchCommodityPrices(webSearch, webFetch);

  // Generate report text
  console.log('📝 Generating report...');

  let reportText = `🇮🇩 IDX Morning Market Intelligence – ${dateStr}\n`;
  reportText += `⚡ Auto-generated · Mon-Fri 08:00 WIB\n\n`;

  // Summary
  reportText += `📊 Summary: ${report.summary.totalItems} items tracked`;
  reportText += report.summary.highImpact > 0 ? ` | ${report.summary.highImpact} high impact` : '';
  reportText += report.summary.mediumImpact > 0 ? ` | ${report.summary.mediumImpact} medium impact` : '';
  reportText += report.summary.rejectedItems > 0 ? ` (${report.summary.rejectedItems} rejected - 48h validation)` : '';
  reportText += '\n\n';

  // Categories
  for (const [key, cat] of Object.entries(report.categories)) {
    if (!config.enableCategories.includes(key) || cat.items.length === 0) continue;

    reportText += `${cat.emoji} ${cat.title}\n`;

    for (const item of cat.items) {
      const impactEmoji = item.impact.emoji;
      const tickerDisplay = item.ticker ? `[${item.ticker}]` : item.sector ? `[${item.sector}]` : '';
      reportText += `${impactEmoji} ${item.title} - ${item.summary} ${tickerDisplay}\n`;
      reportText += `   Source: ${item.sourceUrl}\n`;
    }

    reportText += '\n';
  }

  // Commodities
  reportText += `💰 Komoditas (24h Change)\n`;
  reportText += '```\n';
  reportText += formatCommodityTable(report.commodities);
  reportText += '\n```\n';

  reportText += `\n📅 Next update: Tomorrow 08:00 WIB\n`;

  // Save to history
  console.log('💾 Saving to history...');

  let history = [];
  if (fs.existsSync(HISTORY_PATH)) {
    try {
      history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
    } catch (err) {
      console.error('Failed to parse history:', err.message);
    }
  }

  history.unshift({
    date: dateStr,
    timestamp: today.toISOString(),
    summary: report.summary,
    commodityCount: report.commodities.length
  });

  // Keep last 30 days
  history = history.slice(0, config.maxHistoryDays);

  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));

  console.log('📤 Report ready for delivery...');

  return {
    success: true,
    report: reportText,
    summary: report.summary,
    reportData: report
  };
}

// Run if executed directly (CLI mode - placeholder)
if (require.main === module) {
  generateReport({})
    .then(result => {
      console.log('=== REPORT START ===');
      console.log(result.report);
      console.log('=== REPORT END ===');
      console.log('\n✅ Success:', JSON.stringify(result.summary, null, 2));
    })
    .catch(err => {
      console.error('❌ Error:', err.message);
      process.exit(1);
    });
}

// Export for use as skill (with tools)
module.exports = { generateReport, validateItem, calculateImpact, formatCommodityTable };
