#!/usr/bin/env node

/**
 * USD/IDR Daily Report Generator
 * Fetches current rate from BCA and generates analysis with Tavily Search
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import Tavily
const { tavily } = require("@tavily/core");

// Configuration
const HISTORY_FILE = path.join(__dirname, 'history.json');
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const TAVILY_API_KEY = process.env.TAVILY_API_KEY || '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';

// Initialize Tavily client
const tvly = tavily({ apiKey: TAVILY_API_KEY });

/**
 * Format date for Indonesian locale
 */
function formatDateIndo(dateStr) {
  const date = new Date(dateStr);
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Generate ISO date with time (WIB timezone)
 * USDIDR report runs at 08:00 WIB = 01:00 UTC
 */
function getPubDate(dateStr) {
  // Parse date (YYYY-MM-DD)
  const date = new Date(dateStr);
  // Set time to 01:00 UTC (08:00 WIB)
  date.setUTCHours(1, 0, 0, 0);
  // Return ISO format
  return date.toISOString();
}

/**
 * Search using Tavily API
 */
async function searchTavily(query) {
  try {
    const response = await tvly.search(query, {
      search_depth: "basic",
      max_results: 10,
      include_images: false,
      include_answer: true
    });

    return response;
  } catch (error) {
    console.error(`Tavily search error for "${query}":`, error.message);
    throw new Error(`Tavily search failed: ${error.message}`);
  }
}

/**
 * Fetch DXY (Dollar Index) data from Tavily
 */
async function fetchDXY() {
  try {
    const query = "DXY Dollar Index current rate today 2026";
    const response = await searchTavily(query);

    if (!response.results || response.results.length === 0) {
      return {
        value: null,
        trend: 'Tidak tersedia',
        analysis: 'Data DXY tidak tersedia dari hasil pencarian.'
      };
    }

    // Extract DXY value from search results
    const firstResult = response.results[0];
    const content = firstResult.content || '';

    // Try to find a numeric value (DXY is usually around 100-110)
    const dxyMatch = content.match(/(\d{3}\.?\d*)/);
    const dxyValue = dxyMatch ? parseFloat(dxyMatch[1]) : null;

    // Determine trend based on content analysis
    let trend = 'Stabil';
    if (content.toLowerCase().includes('strengthen') || content.toLowerCase().includes('rises') || content.toLowerCase().includes('gains')) {
      trend = 'Naik - USD menguat';
    } else if (content.toLowerCase().includes('weakens') || content.toLowerCase().includes('falls') || content.toLowerCase().includes('declines')) {
      trend = 'Turun - USD melemah';
    }

    return {
      value: dxyValue,
      trend: trend,
      analysis: `DXY berada pada level ${dxyValue || 'N/A'} dengan tren ${trend.toLowerCase()}.`
    };
  } catch (error) {
    console.error('Error fetching DXY:', error.message);
    return {
      value: null,
      trend: 'Error',
      analysis: `Gagal mengambil data DXY: ${error.message}`
    };
  }
}

/**
 * Fetch a single Asian currency rate from Tavily
 */
async function fetchSingleCurrency(code, currencyName) {
  try {
    const query = `USD to ${currencyName} (${code}) exchange rate today 2026`;
    const response = await searchTavily(query);

    // Try to parse from Tavily answer first
    if (response.answer) {
      const answer = response.answer;

      // Multiple pattern matching for reliability
      // Pattern 1: "156 JPY" or "156 Japanese Yen" (value before code/name)
      // Pattern 2: "to JPY is 156" or "to CNY is 6.86" (value after "is")
      // Pattern 3: "JPY=X 156" (trading symbol format)
      // Pattern 4: "USD to CNY 6.86" (value after currency code)
      // Pattern 5: "is 156.4700" (value after "is" without currency)
      // Use number pattern that handles commas (e.g., 1,439)
      const numberPattern = `(\\d{1,5}(?:[.,]\\d+)?)`;
      
      const patterns = [
        new RegExp(`${numberPattern}\\s+${code}\\b`, 'i'),  // Value before code (e.g., "156 JPY")
        new RegExp(`to\\s+${code}\\s+(?:is|:)\\s+${numberPattern}`, 'i'),  // After "is" (e.g., "to JPY is 156")
        new RegExp(`${code}[=X]\\s+${numberPattern}`, 'i'),  // Trading symbol (e.g., "JPY=X 156")
        new RegExp(`USD\\s+to\\s+${code}\\s+${numberPattern}`, 'i'),  // After "USD to JPY"
        new RegExp(`equals\\s+${numberPattern}\\s+${currencyName}\\b`, 'i'),  // "equals 156 Japanese Yen"
        new RegExp(`${numberPattern}\\s+${currencyName}\\b`, 'i'),  // Value before full name
        new RegExp(`${code}\\s+(?:exchange rate|rate|is|:)?\\s*(?:on|as|for)?\\s*[^.]*?\\s+(?:is|:)\\s*${numberPattern}`, 'i'),  // "JPY exchange rate... is 156"
        new RegExp(`(?:on|as|for)\\s+[^.]*?\\s+(?:is|:)\\s+${numberPattern}`, 'i')  // "on March 2, 2026, is 156.4700" (standalone "is" pattern)
      ];

      for (const pattern of patterns) {
        const match = answer.match(pattern);
        if (match) {
          let value = parseFloat(match[1].replace(/,/g, ''));
          // Sanity check: JPY should be 100-200, CNY 5-10, SGD 1-2, THB 30-40, MYR 3-5, KRW 1000-1500
          const expectedRanges = {
            'JPY': { min: 100, max: 200 },
            'CNY': { min: 5, max: 10 },
            'SGD': { min: 1, max: 2 },
            'THB': { min: 30, max: 50 },
            'MYR': { min: 3, max: 6 },
            'KRW': { min: 1000, max: 1500 }
          };

          if (expectedRanges[code]) {
            const range = expectedRanges[code];
            if (value >= range.min && value <= range.max) {
              return { code, value };
            }
          } else {
            return { code, value };
          }
        }
      }
    }

    // Fall back to parsing results
    if (response.results && response.results.length > 0) {
      for (const result of response.results.slice(0, 2)) {
        const content = result.content || '';
        const title = result.title || '';

        const numberPattern = `(\\d{1,5}(?:[.,]\\d+)?)`;

        const patterns = [
          new RegExp(`${code}\\s*[=:]+\\s*${numberPattern}`, 'i'),
          new RegExp(`${numberPattern}\\s+${code}\\b`, 'i'),
          new RegExp(`USD\\s*/\\s*${code}\\s*[=:]+\\s*${numberPattern}`, 'i'),
          new RegExp(`equals\\s+${numberPattern}\\s+${currencyName}\\b`, 'i')
        ];

        for (const pattern of patterns) {
          const match = (content.match(pattern) || title.match(pattern));
          if (match) {
            let value = parseFloat(match[1].replace(/,/g, ''));
            return { code, value };
          }
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching ${code}:`, error.message);
    return null;
  }
}

/**
 * Fetch Asian currencies data from Tavily (individual queries)
 */
async function fetchAsianCurrencies() {
  try {
    const currencyMap = {
      'JPY': 'Japanese Yen',
      'CNY': 'Chinese Yuan',
      'SGD': 'Singapore Dollar',
      'THB': 'Thai Baht',
      'MYR': 'Malaysian Ringgit',
      'KRW': 'South Korean Won'
    };

    const currencies = [];

    // Fetch each currency in parallel
    const promises = Object.entries(currencyMap).map(([code, name]) =>
      fetchSingleCurrency(code, name)
    );

    const results = await Promise.all(promises);

    // Filter out null results and add to currencies array
    for (const result of results) {
      if (result) {
        currencies.push(result);
      }
    }

    const analysis = currencies.length > 0
      ? `Data ${currencies.length} mata uang Asia berhasil diambil dari hasil pencarian.`
      : 'Data kurs mata uang Asia tidak tersedia dari hasil pencarian.';

    return { currencies, analysis };
  } catch (error) {
    console.error('Error fetching Asian currencies:', error.message);
    return {
      currencies: [],
      analysis: `Gagal mengambil data mata uang Asia: ${error.message}`
    };
  }
}

/**
 * Fetch capital inflow/outflow data from Tavily
 */
async function fetchInflowOutflow() {
  try {
    const query = "Indonesia foreign capital inflow outflow investment today 2026";
    const response = await searchTavily(query);

    let inflow = null;
    let outflow = null;

    // First try to parse from Tavily answer
    if (response.answer) {
      const answer = response.answer;

      // Look for inflow patterns: "$1.6 billion in foreign capital inflows"
      const inflowMatch = answer.match(/[\$](\d+\.?\d*)\s*(?:billion|trillion)\s*(?:in\s*)?(?:foreign\s*)?inflows?/i);
      if (inflowMatch) {
        inflow = parseFloat(inflowMatch[1]);
      }

      // Look for outflow patterns
      const outflowMatch = answer.match(/outflows?\s*of\s*\$?(\d+\.?\d*)\s*(?:billion|trillion)/i);
      if (outflowMatch) {
        outflow = parseFloat(outflowMatch[1]);
      }
    }

    // If answer didn't provide data, fall back to parsing results
    if (inflow === null && outflow === null && response.results && response.results.length > 0) {
      for (const result of response.results.slice(0, 3)) {
        const content = result.content || '';

        // Look for inflow patterns
        const inflowMatch = content.match(/[\$](\d+\.?\d*)\s*(?:billion|trillion)\s*(?:in\s*)?(?:foreign\s*)?inflows?/i);
        if (inflowMatch && inflow === null) {
          inflow = parseFloat(inflowMatch[1]);
        }

        // Look for outflow patterns
        const outflowMatch = content.match(/outflows?\s*(?:of\s*)?[\$]?(\d+\.?\d*)\s*(?:billion|trillion)/i);
        if (outflowMatch && outflow === null) {
          outflow = parseFloat(outflowMatch[1]);
        }
      }
    }

    // Calculate net
    const net = inflow !== null && outflow !== null ? inflow - outflow : null;
    let netAnalysis = '';
    if (net !== null) {
      if (net > 0) {
        netAnalysis = 'Net inflow positif - modal asing masuk ke Indonesia.';
      } else if (net < 0) {
        netAnalysis = 'Net outflow negatif - modal asing keluar dari Indonesia.';
      } else {
        netAnalysis = 'Net inflow/outflow seimbang.';
      }
    }

    const analysis = `${inflow !== null ? `Inflow: $${inflow} billion` : 'Inflow: N/A'}, ${outflow !== null ? `Outflow: $${outflow} billion` : 'Outflow: N/A'}${net !== null ? `, Net: $${net} billion` : ''}. ${netAnalysis}`;

    return {
      inflow,
      outflow,
      net,
      analysis
    };
  } catch (error) {
    console.error('Error fetching inflow/outflow:', error.message);
    return {
      inflow: null,
      outflow: null,
      net: null,
      analysis: `Gagal mengambil data alokasi modal: ${error.message}`
    };
  }
}

/**
 * Fetch USD/IDR rate from BCA e-Rate
 */
function fetchBCARate() {
  return new Promise((resolve, reject) => {
    const url = 'https://www.bca.co.id/en/informasi/kurs';

    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          // Extract USD e-Rate from HTML data attributes
          const buyMatch = data.match(/data-value-buy="([^"]+)"/);
          const sellMatch = data.match(/data-value-sell="([^"]+)"/);

          if (buyMatch && sellMatch) {
            // Format: "buy-ttcounter-banknotes" or "buy1-buy2-buy3"
            // First value is e-Rate
            const buyValues = buyMatch[1].split('-');
            const sellValues = sellMatch[1].split('-');

            const buy = parseFloat(buyValues[0]);
            const sell = parseFloat(sellValues[0]);
            const midRate = (buy + sell) / 2;

            // Use current date for report (not BCA page date)
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const dateDisplay = formatDateIndo(dateStr);

            resolve({
              rate: Math.round(midRate),
              buy: Math.round(buy),
              sell: Math.round(sell),
              date: dateStr,
              dateDisplay: dateDisplay,
              source: 'BCA e-Rate'
            });
          } else {
            reject(new Error('USD rate not found in BCA response'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Load historical data
 */
function loadHistory() {
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error loading history:', e.message);
  }
  return [];
}

/**
 * Save historical data
 */
function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

/**
 * Generate simple report for Telegram
 */
function generateSimpleReport(current, history, dxyData, asianData, inflowData) {
  // Add current to history (in memory, for analysis)
  const withCurrent = [...history, current];

  // Get last 30 days
  const last30Days = withCurrent.slice(-30);

  // Calculate stats
  const rates = last30Days.map(h => h.rate);
  const highest = Math.max(...rates);
  const lowest = Math.min(...rates);
  const average = rates.reduce((a, b) => a + b, 0) / rates.length;
  const previousDay = history.length > 0 ? history[history.length - 1] : null;

  // Calculate change
  let change = 0;
  let changePercent = 0;
  let previousRate = null;

  if (previousDay) {
    previousRate = previousDay.rate;
    change = current.rate - previousRate;
    changePercent = (change / previousRate) * 100;
  }

  // Determine trend
  const ratePercentile = (current.rate - lowest) / (highest - lowest) * 100;
  const isHighPosition = ratePercentile >= 80;
  const isLowPosition = ratePercentile <= 20;
  const isNearAverage = Math.abs(current.rate - average) / average < 0.01;

  // Trend analysis
  let trend = 'Stabil - Pergerakan sideways';
  if (history.length >= 2) {
    const recentRates = history.slice(-7).map(h => h.rate);
    const isRising = recentRates.every((r, i) => i === 0 || r >= recentRates[i - 1]);
    const isFalling = recentRates.every((r, i) => i === 0 || r <= recentRates[i - 1]);

    if (isRising && Math.abs(current.rate - recentRates[0]) / recentRates[0] > 0.005) {
      trend = 'Naik - Uptrend terlihat';
    } else if (isFalling && Math.abs(current.rate - recentRates[0]) / recentRates[0] > 0.005) {
      trend = 'Turun - Downtrend terlihat';
    }
  }

  // Build analysis lines
  const analysisLines = [
    `➡️ Trend mingguan: ${trend}`
  ];
  if (isNearAverage) analysisLines.push('✅ Rate mendekati rata-rata - Normal');
  if (isHighPosition) analysisLines.push('🔴 Rate di posisi tinggi (top 20%) dari range historis');
  if (isLowPosition) analysisLines.push('🟢 Rate di posisi rendah (bottom 20%) dari range historis');

  // Build report
  let additionalLines = [];
  if (dxyData.value) {
    additionalLines.push(`📊 DXY: ${dxyData.value} (${dxyData.trend})`);
  }
  if (inflowData.inflow !== null) {
    additionalLines.push(`💰 Alokasi Modal: Inflow $${inflowData.inflow}B / Outflow $${inflowData.outflow}B (Net: $${inflowData.net}B)`);
  }

  const report = `💵 USDIDR Daily Report
📅 ${current.dateDisplay} (${current.source})
📊 Rate Saat Ini: ${current.rate.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
📉 Buy/Sell: ${current.buy.toLocaleString('id-ID')} / ${current.sell.toLocaleString('id-ID')}
📉 Perubahan: ${change >= 0 ? '+' : ''}${change.toFixed(2)} (${changePercent.toFixed(2)}%)
${previousRate ? `Kemarin: ${previousRate.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}` : 'Kemarin: -'}
📈 Statistik (30 hari terakhir):
Tertinggi: ${highest.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
Terendah: ${lowest.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
Rata-rata: ${average.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
🔍 Analisis:
${analysisLines.join('\n')}
${additionalLines.length > 0 ? '\n' + additionalLines.join('\n') : ''}
🔮 Prediksi Minggu Depan: Kemungkinan sideways dengan volatilitas terbatas
Watch level support/resistance terdekat`;

  return {
    report,
    rate: current.rate,
    date: current.date,
    source: current.source,
    stats: { highest, lowest, average },
    change: { value: change, percent: changePercent },
    trend,
    position: { ratePercentile, isHighPosition, isLowPosition, isNearAverage }
  };
}

/**
 * Generate comprehensive blog post
 */
function generateBlogPost(current, result, analysisLines, dxyData, asianData, inflowData) {
  // Additional analysis with Tavily data
  let dxyAnalysis = dxyData.value
    ? `DXY berada pada level **${dxyData.value}** dengan tren **${dxyData.trend.toLowerCase()}**. ${dxyData.analysis}`
    : `Data DXY tidak tersedia. ${dxyData.analysis}`;

  // Build Asian currencies analysis
  let asianCurrenciesAnalysis = '';
  if (asianData.currencies.length > 0) {
    const currencyLines = asianData.currencies.map(c => `- USD/${c.code}: ${c.value.toFixed(2)}`);
    asianCurrenciesAnalysis = `**Perbandingan Regional**:\n${currencyLines.join('\n')}\n\n${asianData.analysis}`;
  } else {
    asianCurrenciesAnalysis = `**Perbandingan Regional**:\nData tidak tersedia. ${asianData.analysis}`;
  }

  // Build inflow/outflow analysis
  let inflowOutflowAnalysis = '';
  if (inflowData.inflow !== null) {
    inflowOutflowAnalysis = `**Alokasi Modal Asing**:\n${inflowData.analysis}`;
  } else {
    inflowOutflowAnalysis = `**Alokasi Modal Asing**:\nData tidak tersedia. ${inflowData.analysis}`;
  }

  // Risk level analysis
  let riskLevel = 'Sedang (Moderate)';
  let riskAnalysis = 'Pergerakan kurs masih dalam range normal dengan volatilitas terkontrol.';
  if (result.position.isHighPosition) {
    riskLevel = 'Tinggi (High)';
    riskAnalysis = 'Rate berada di level tinggi historis, berpotensi koreksi turun. Waspada jika DXY melemah signifikan.';
  } else if (result.position.isLowPosition) {
    riskLevel = 'Rendah (Low)';
    riskAnalysis = 'Rate berada di level rendah historis, berpotensi rebound naik. Peluang bagi yang ingin buy USD.';
  }

  // Prediction based on trend and position
  const bullTarget = Math.round(result.rate * 1.01);
  const bearTarget = Math.round(result.rate * 0.99);
  let prediction = '';
  if (result.trend.includes('Naik')) {
    prediction = `- **Bull Case (40%):** DXY tetap kuat, sentimen emerging market negatif → USD/IDR bisa tembus ${bullTarget}\n- **Base Case (40%):** Pergerakan sideways di sekitar ${result.rate} ±50 poin\n- **Bear Case (20%):** DXY melemah, capital inflow → USD/IDR bisa turun ke ${bearTarget}`;
  } else if (result.trend.includes('Turun')) {
    prediction = `- **Bull Case (20%):** Risk-off global, DXY kuat → USD/IDR bisa naik ke ${bullTarget}\n- **Base Case (40%):** Pergerakan sideways di sekitar ${result.rate} ±50 poin\n- **Bear Case (40%):** DXY melemah, sentimen positif → USD/IDR bisa turun ke ${bearTarget}`;
  } else {
    prediction = `- **Bull Case (30%):** Geopolitical tension, risk-off → USD/IDR bisa naik ke ${bullTarget}\n- **Base Case (50%):** Pergerakan sideways di sekitar ${result.rate} ±50 poin\n- **Bear Case (20%):** DXY melemah, data ekonomi positif → USD/IDR bisa turun ke ${bearTarget}`;
  }

  // Rupiah perspective
  const rupiahChange = result.change.value * -1; // Opposite of USD/IDR change
  const rupiahChangePercent = result.change.percent * -1;
  const rupiahDirection = rupiahChange > 0 ? 'menguat' : rupiahChange < 0 ? 'melemah' : 'stabil';

  const blogContent = `---
title: "USDIDR Daily Report – ${current.dateDisplay}"
description: "Laporan harian kurs USD/IDR dengan analisis komprehensif pasar"
pubDate: ${getPubDate(current.date)}
tags: ["Daily Report", "USDIDR", "Market Analysis"]
---

**USDIDR Daily Report – ${current.dateDisplay}**

### 1. Ringkasan Perubahan Hari Ini

Rate USD/IDR saat ini berada pada level **${current.rate}** dengan ${result.change.percent >= 0 ? 'kenaikan' : 'penurunan'} **${Math.abs(result.change.percent).toFixed(2)}%** (${result.change.value >= 0 ? '+' : ''}${result.change.value.toFixed(2)} poin) dari hari kemarin. Pergerakan hari ini menunjukkan **${result.trend.toLowerCase()}**.

${rupiahChange !== 0 ? `Dari perspektif rupiah, mata uang Indonesia **${rupiahDirection}** sebesar **${Math.abs(rupiahChangePercent).toFixed(2)}%** terhadap dolar AS.` : 'Dari perspektif rupiah, mata uang Indonesia bergerak stabil terhadap dolar AS.'}

### 2. Diagnosis Struktur Pasar

**Data Dasar USD/IDR:**
- Buy/Sell BCA: ${current.buy} / ${current.sell}
- Mid-Rate: ${current.rate}
- Perubahan: ${result.change.value >= 0 ? '+' : ''}${result.change.value.toFixed(2)} (${result.change.percent.toFixed(2)}%)

**Pergerakan Mingguan:**
${analysisLines.join('\n')}

**DXY & USD Strength:**
${dxyAnalysis}

${asianCurrenciesAnalysis}

${inflowOutflowAnalysis}

### 3. Tingkat Risiko

**Risk Level:** ${riskLevel}
${riskAnalysis}

### 4. Analisa Valuasi

**Statistik 30 Hari:**
- Tertinggi: ${result.stats.highest.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
- Terendah: ${result.stats.lowest.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
- Rata-rata: ${result.stats.average.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
- Posisi saat ini: ${result.position.isHighPosition ? 'Top 20% (tinggi)' : result.position.isLowPosition ? 'Bottom 20% (rendah)' : 'Mid-range'}

Rate saat ini **${result.position.isNearAverage ? 'mendekati rata-rata dan tergolong normal' : 'berada di posisi ekstrem'}**.

### 5. Update Probabilitas / Tren Minggu Depan

**Probabilitas Skenario:**
${prediction}

**Indikator Kunci untuk Dipantau:**
- Pergerakan DXY untuk indikasi dolar kuat/lemah
- Laporan inflasi BI dan suku bunga acuan
- Sentimen pasar terhadap emerging markets
- Level support/resistance teknikal di chart USD/IDR

---

*Disclaimer: Analisis ini berbasis data historis, indikator makroekonomi, dan pencarian web via Tavily. Tidak merupakan saran investasi.*`;

  return blogContent;
}

/**
 * Main function
 */
async function main() {
  try {
    // Load history first to check for stale data
    const history = loadHistory();
    const previousDay = history.length > 0 ? history[history.length - 1] : null;

    console.log('Fetching USD/IDR rate from BCA...');
    let current;
    let source = 'BCA e-Rate';

    try {
      current = await fetchBCARate();
      console.log(`BCA rate: ${current.rate} (${current.date})`);

      // Check if BCA data is stale (same as yesterday's rate)
      // Only fall back if it matches yesterday AND rate hasn't changed for multiple days
      if (previousDay && current.rate === previousDay.rate) {
        // Check how many consecutive days have had this rate
        let consecutiveDays = 1;
        for (let i = history.length - 2; i >= 0; i--) {
          if (history[i].rate === current.rate) {
            consecutiveDays++;
          } else {
            break;
          }
        }

        if (consecutiveDays >= 2) {
          console.log(`BCA rate is stale (same for ${consecutiveDays} consecutive days), trying fallback sources...`);
          throw new Error('BCA data stale');
        }
      }
    } catch (e) {
      console.log(`BCA fetch failed or stale: ${e.message}`);
      throw new Error(`BCA fetch failed: ${e.message}`);
    }

    console.log(`Final rate: ${current.rate} from ${source}`);
    current.source = source;

    // Fetch additional market data using Tavily
    console.log('Fetching DXY data via Tavily...');
    const dxyData = await fetchDXY();
    console.log(`DXY: ${dxyData.value || 'N/A'} (${dxyData.trend})`);

    console.log('Fetching Asian currencies via Tavily...');
    const asianData = await fetchAsianCurrencies();
    console.log(`Asian currencies: ${asianData.currencies.length} found`);

    console.log('Fetching inflow/outflow via Tavily...');
    const inflowData = await fetchInflowOutflow();
    console.log(`Inflow/Outflow: ${inflowData.inflow}/${inflowData.outflow}`);

    // Generate simple report for Telegram
    const result = generateSimpleReport(current, history, dxyData, asianData, inflowData);

    // Save to history (update if exists, otherwise append)
    const existingIndex = history.findIndex(h => h.date === current.date);
    if (existingIndex >= 0) {
      history[existingIndex] = current;
      console.log('Updated existing entry in history');
    } else {
      history.push(current);
      console.log('Added new entry to history');
    }
    saveHistory(history);

    // Generate analysis lines for blog
    const analysisLines = [
      `➡️ Trend mingguan: ${result.trend}`
    ];
    if (result.position.isNearAverage) analysisLines.push('✅ Rate mendekati rata-rata - Normal');
    if (result.position.isHighPosition) analysisLines.push('🔴 Rate di posisi tinggi (top 20%) dari range historis');
    if (result.position.isLowPosition) analysisLines.push('🟢 Rate di posisi rendah (bottom 20%) dari range historis');

    // Generate blog post
    console.log('Generating blog post...');
    const blogContent = generateBlogPost(current, result, analysisLines, dxyData, asianData, inflowData);

    // Save blog post
    const blogFilename = `usdidr-report-${current.date}.md`;
    const blogPath = path.join(BLOG_DIR, 'src/content/blog', blogFilename);
    fs.writeFileSync(blogPath, blogContent);
    console.log(`Blog post saved: ${blogFilename}`);

    // Git operations for blog
    try {
      execSync(`git add "src/content/blog/${blogFilename}"`, { cwd: BLOG_DIR });
      const blogCommitMsg = `blog: add USDIDR report - ${current.date}`;
      try {
        execSync(`git commit -m "${blogCommitMsg}"`, { cwd: BLOG_DIR });
        execSync(`git push origin main`, { cwd: BLOG_DIR });
        console.log('Blog post committed and pushed');
      } catch (gitError) {
        // Git commit might fail if no changes detected
        if (gitError.message.includes('nothing to commit')) {
          console.log('No changes to commit (content already up to date)');
        } else {
          console.log('Git warning:', gitError.message);
        }
      }
    } catch (gitError) {
      console.log('Git operations failed:', gitError.message);
      // Don't fail the whole script if git fails
    }

    // Output JSON for cron job (for Telegram)
    console.log(JSON.stringify(result, null, 2));

  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, generateSimpleReport, fetchBCARate };
