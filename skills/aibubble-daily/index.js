#!/usr/bin/env node

/**
 * AI Bubble Daily Dashboard Generator
 * Creates daily institutional-style AI market analysis with Tavily Search
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import Tavily
const { tavily } = require("@tavily/core");

// Paths
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const POSTS_DIR = path.join(BLOG_DIR, 'src/content/blog');
const SKILL_DIR = '/root/.openclaw/workspace/skills/aibubble-daily';
const HISTORY_FILE = path.join(SKILL_DIR, 'history.md');

// Configuration
const TAVILY_API_KEY = process.env.TAVILY_API_KEY || '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';

// Initialize Tavily client
const tvly = tavily({ apiKey: TAVILY_API_KEY });

// Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').split('.')[0] + ' WIB';
}

function getToday() {
  // Return ISO 8601 format with time (01:00 UTC = 08:00 WIB for dashboard)
  const now = new Date();
  now.setUTCHours(1, 0, 0, 0);
  return now.toISOString();
}

function getDateLabel() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
}

function getDaySlug() {
  const dateStr = new Date().toISOString().split('T')[0];
  return `aibubble-dashboard-${dateStr}`;
}

function initHistory() {
  if (!fs.existsSync(HISTORY_FILE)) {
    const header = `# AI Bubble Daily Dashboard - History

Tracking all AI Bubble Daily Dashboard reports.

---
`;
    fs.writeFileSync(HISTORY_FILE, header);
  }
}

function appendHistory(entry) {
  const history = fs.readFileSync(HISTORY_FILE, 'utf-8');
  const content = `
## ${getTimestamp()}

**Title**: ${entry.title}
**Slug**: ${entry.slug}
**Status**: ${entry.status}

---
`;
  fs.writeFileSync(HISTORY_FILE, content + history);
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
 * Fetch market data using Tavily
 */
async function fetchMarketData() {
  log('Fetching market data via Tavily...', 'cyan');

  const marketData = {
    indices: null,
    aiStocks: null,
    treasuryYield: null,
    dxy: null,
    fedComments: null,
    techNews: null
  };

  try {
    // Fetch S&P 500 and Nasdaq
    const indicesQuery = "S&P 500 index level today Nasdaq performance 2026";
    const indicesResponse = await searchTavily(indicesQuery);
    if (indicesResponse.results && indicesResponse.results.length > 0) {
      const content = indicesResponse.results[0].content || '';
      const sp500Match = content.match(/S&P\s*500[\s:]+(\d+,?\d*)/i);
      const nasdaqMatch = content.match(/Nasdaq[\s:]+(-?\d+\.?\d*%)/i);
      
      marketData.indices = {
        sp500: sp500Match ? parseFloat(sp500Match[1]) : null,
        nasdaq: nasdaqMatch ? parseFloat(nasdaqMatch[1]) : null
      };
      log(`✅ Indices: S&P 500 ${marketData.indices.sp500 || 'N/A'}, Nasdaq ${marketData.indices.nasdaq || 'N/A'}`, 'green');
    }

    // Fetch AI stocks performance
    const stocksQuery = "NVIDIA NVDA Microsoft MSFT GOOGL META AMDB stock price performance today 2026";
    const stocksResponse = await searchTavily(stocksQuery);
    if (stocksResponse.results && stocksResponse.results.length > 0) {
      const stocks = {};
      for (const result of stocksResponse.results) {
        const content = result.content || '';
        
        // Try to extract stock prices/changes
        const nvdaMatch = content.match(/NVIDIA|NVDA[\s:]+\$?(\d+\.?\d*)/i);
        const msftMatch = content.match(/Microsoft|MSFT[\s:]+\$?(\d+\.?\d*)/i);
        const googlMatch = content.match(/Google|GOOGL[\s:]+\$?(\d+\.?\d*)/i);
        const metaMatch = content.match(/Meta|META[\s:]+\$?(\d+\.?\d*)/i);
        const amdMatch = content.match(/AMD|AMDB[\s:]+\$?(\d+\.?\d*)/i);

        if (nvdaMatch) stocks.NVIDIA = nvdaMatch[1];
        if (msftMatch) stocks.Microsoft = msftMatch[1];
        if (googlMatch) stocks.Google = googlMatch[1];
        if (metaMatch) stocks.Meta = metaMatch[1];
        if (amdMatch) stocks.AMD = amdMatch[1];
      }
      
      marketData.aiStocks = stocks;
      log(`✅ AI Stocks: NVIDIA ${stocks.NVIDIA || 'N/A'}, Microsoft ${stocks.Microsoft || 'N/A'}, Google ${stocks.Google || 'N/A'}, Meta ${stocks.Meta || 'N/A'}, AMD ${stocks.AMD || 'N/A'}`, 'green');
    }

    // Fetch US 10Y Treasury Yield
    const yieldQuery = "US 10 year treasury yield today 2026 current rate";
    const yieldResponse = await searchTavily(yieldQuery);
    if (yieldResponse.results && yieldResponse.results.length > 0) {
      const content = yieldResponse.results[0].content || '';
      const yieldMatch = content.match(/(\d+\.\d+)%/);
      
      if (yieldMatch) {
        marketData.treasuryYield = parseFloat(yieldMatch[1]);
        log(`✅ Treasury Yield: ${marketData.treasuryYield}%`, 'green');
      }
    }

    // Fetch DXY
    const dxyQuery = "DXY Dollar Index current rate today 2026";
    const dxyResponse = await searchTavily(dxyQuery);
    if (dxyResponse.results && dxyResponse.results.length > 0) {
      const content = dxyResponse.results[0].content || '';
      const dxyMatch = content.match(/(\d{3}\.?\d*)/);
      
      if (dxyMatch) {
        marketData.dxy = parseFloat(dxyMatch[1]);
        log(`✅ DXY: ${marketData.dxy}`, 'green');
      }
    }

    // Fetch latest Fed comments
    const fedQuery = "Federal Reserve latest comments interest rate Powell 2026";
    const fedResponse = await searchTavily(fedQuery);
    if (fedResponse.results && fedResponse.results.length > 0) {
      marketData.fedComments = fedResponse.results[0].title;
      log(`✅ Fed Comments: ${marketData.fedComments}`, 'green');
    }

    // Fetch TechMeme news
    const techQuery = "https://techmeme.com/?full=t";
    try {
      const techResponse = await fetch(techQuery);
      const techHtml = await techResponse.text();
      
      // Extract top AI/tech news
      const aiNewsMatch = techHtml.match(/<a[^>]+class=["'][^>]+>([^<]+AI|artificial intelligence|machine learning|NVIDIA|OpenAI|Anthropic)[^<]*<\/a>/gi);
      
      if (aiNewsMatch) {
        const headlines = aiNewsMatch.map(m => m.replace(/<[^>]+>/g, '')).slice(0, 5);
        marketData.techNews = headlines.join('; ');
        log(`✅ TechMeme News: ${headlines.slice(0, 100)}...`, 'green');
      }
    } catch (techError) {
      log(`⚠️  Failed to fetch TechMeme: ${techError.message}`, 'yellow');
    }

  } catch (error) {
    log(`⚠️  Error fetching market data: ${error.message}`, 'yellow');
  }

  return marketData;
}

/**
 * Generate AI Bubble Daily Dashboard via isolated agent
 */
async function generateDashboard() {
  const today = getToday();
  const dateLabel = getDateLabel();

  log(`\n📊 AI Bubble Daily Dashboard Generator - ${getTimestamp()}`, 'cyan');
  log(`📅 Tanggal: ${dateLabel}\n`, 'blue');

  // Fetch market data using Tavily
  const marketData = await fetchMarketData();

  // Build task with pre-fetched data
  let dataSection = '';
  
  if (marketData.indices) {
    dataSection += `
**Market Indices (Tavily Data):**
- S&P 500: ${marketData.indices.sp500 || 'N/A'}
- Nasdaq: ${marketData.indices.nasdaq || 'N/A'}
`;
  }

  if (marketData.aiStocks && Object.keys(marketData.aiStocks).length > 0) {
    dataSection += `
**AI Stocks Performance (Tavily Data):**
- NVIDIA: ${marketData.aiStocks.NVIDIA || 'N/A'}
- Microsoft: ${marketData.aiStocks.Microsoft || 'N/A'}
- Google: ${marketData.aiStocks.Google || 'N/A'}
- Meta: ${marketData.aiStocks.Meta || 'N/A'}
- AMD: ${marketData.aiStocks.AMD || 'N/A'}`;
  }

  if (marketData.treasuryYield) {
    dataSection += `
**US 10Y Treasury Yield (Tavily Data):**
- Yield: ${marketData.treasuryYield}%
`;
  }

  if (marketData.dxy) {
    dataSection += `
**DXY Dollar Index (Tavily Data):**
- DXY: ${marketData.dxy}`;
  }

  if (marketData.fedComments) {
    dataSection += `
**Fed Comments (Tavily Data):**
- Latest: ${marketData.fedComments}`;
  }

  if (marketData.techNews) {
    dataSection += `
**TechMeme News (Fetched):**
- Top headlines: ${marketData.techNews}`;
  }

  // Task template
  const taskTemplate = `You are an institutional market analyst monitoring AI Bubble dynamics daily. Your task is to create an "AI Bubble Daily Dashboard" based on the PRE-FETCHED MARKET DATA BELOW.

TODAY'S DATE: ${today}

---

## 1. MARKET STRUCTURE

Analysis:
- Performance of major indices (S&P 500: ${marketData.indices?.sp500 || 'N/A'}, Nasdaq: ${marketData.indices?.nasdaq || 'N/A'})
- Is rise/fall concentrated in top 5-7 largest AI stocks (${Object.keys(marketData.aiStocks || {}).join(', ')})?
- How is market breadth (advance vs decline)?

Answer: Is today's market structure becoming more fragile or healthier?

${dataSection}

---

## 2. VALUATION DRIFT

Analysis:
- Changes in forward P/E of major AI stocks (check if any significant moves mentioned above)
- Analyst EPS revisions (up / down / stagnant)
- Are prices moving faster than earnings?

Answer: Is there multiple expansion without fundamental support?

---

## 3. CAPEX VS MONETIZATION GAP

Analysis:
- Check AI stocks performance above for capex signals
- Any capex guidance mentioned in tech news?
- AI revenue projections

Compare capex growth vs revenue growth. Answer: Is the gap widening or narrowing?

---

## 4. LIQUIDITY LAYER

Analysis:
- Current US 10Y Yield: ${marketData.treasuryYield || 'N/A'}%
- Dollar Index (DXY): ${marketData.dxy || 'N/A'}
- Latest Fed comments: ${marketData.fedComments || 'N/A'}

Answer: Does liquidity support high valuations or is it starting to pressure them?

---

## 5. SENTIMENT CHECK

Analysis:
- Check TechMeme headlines: ${marketData.techNews || 'No news available'}
- Is media narrative becoming more euphoric?
- Are there new AI IPOs or AI SPAC launches?

Answer: Is sentiment heading towards extremes?

---

## 6. PROBABILITY UPDATE

Provide probability estimates for today:

- Bull Case: [X%] - [scenario explanation]
- Base Case: [Y%] - [scenario explanation]
- Bear Case: [Z%] - [scenario explanation]

Mention whether probabilities changed compared to before and why.

---

## OUTPUT FORMAT

Create a concise report with this structure:

**AI Bubble Daily Dashboard – [Date]**

### 1. Ringkasan Perubahan Hari Ini
[3-5 sentences about significant changes today based on S&P 500, Nasdaq, and AI stocks performance]

### 2. Diagnosis Struktur Pasar
[Structure analysis - fragile/healthy? Why?]

### 3. Tingkat Risiko
[Naik / Turun / Stabil] - [brief explanation]

### 4. Update Probabilitas
Bull: [X%] | Base: [Y%] | Bear: [Z%]
[Change commentary]

### 5. Indikator Kunci untuk Dipantau Besok
- [Indicator 1]
- [Indicator 2]
- [Indicator 3]

---

**Style requirements:**
- Analytical
- Rational
- Not dramatic
- Market-logic based
- Avoid emotional opinions

**DATA SOURCE:**
All market data above has been PRE-FETCHED via Tavily API. Use this data for your analysis - do NOT make additional web_search calls.

Generate dashboard now with the latest available data. Return ONLY markdown content with proper frontmatter for a blog post.

**IMPORTANT: Your frontmatter MUST use this exact format:**

Start with three dashes (---), then:
- title: "AI Bubble Daily Dashboard – ${dateLabel}"
- description: "Analisis harian dinamika pasar AI bubble dan probabilitas skenario"
- pubDate: ${today}
- tags: ["AI Market", "Daily Dashboard", "Market Analysis"]

Then three dashes to close frontmatter.

After frontmatter, write the dashboard content in markdown.`;

  // Write task to temp file
  const tempTaskFile = path.join(SKILL_DIR, 'task.txt');
  fs.writeFileSync(tempTaskFile, taskTemplate, 'utf-8');

  log(`🤖 Task prepared with pre-fetched Tavily data (${taskTemplate.length} chars)`, 'yellow');

  try {
    // Use openclaw agent to generate dashboard
    const result = execSync(
      `openclaw agent --json --message 'Generate AI Bubble Daily Dashboard. Analyze pre-fetched Tavily data: S&P 500, Nasdaq, AI stocks, Treasury yield, DXY, Fed comments, TechMeme. Create markdown frontmatter: title: "AI Bubble Daily Dashboard – ${dateLabel}", description: "Analisis harian dinamika pasar AI bubble dan probabilitas skenario", pubDate: ${today}, tags: ["AI Market", "Daily Dashboard", "Market Analysis"]. Analyze: Market Structure, Valuation Drift, Capex vs Monetization Gap, Liquidity Layer, Sentiment Check, Probability Update. Bull/Base/Bear percentages.' --timeout 600`,
      {
        encoding: 'utf8',
        timeout: 600000,
        maxBuffer: 10 * 1024 * 1024
      }
    );

    let content = result.toString().trim();

    // Try to parse as JSON first
    try {
      const jsonData = JSON.parse(content);
      if (jsonData.message) {
        content = jsonData.message;
      } else if (jsonData.reply) {
        content = jsonData.reply;
      } else if (jsonData.output) {
        content = jsonData.output;
      } else {
        log(`⚠️  JSON parsed but no message field found`, 'yellow');
        log(`📄 JSON keys: ${Object.keys(jsonData).join(', ')}`, 'yellow');
      }
    } catch (e) {
      log(`📄 Not JSON output, using as-is`, 'cyan');
    }

    if (!content || content.length < 100) {
      log(`❌ Generated content too short or empty`, 'red');
      log(`📄 First 500 chars: ${content.substring(0, 500)}`, 'yellow');
      throw new Error('Generated content is invalid');
    }

    // Clean up temp file
    fs.unlinkSync(tempTaskFile);

    log(`✅ Dashboard generated successfully`, 'green');
    return content;

  } catch (error) {
    log(`❌ Error generating dashboard: ${error.message}`, 'red');
    // Clean up temp file if it exists
    if (fs.existsSync(tempTaskFile)) {
      fs.unlinkSync(tempTaskFile);
    }
    throw error;
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    initHistory();

    // Generate dashboard via agent
    const markdownContent = await generateDashboard();

    // Save to blog file
    const slug = getDaySlug();
    const filepath = path.join(POSTS_DIR, `${slug}.md`);

    if (fs.existsSync(filepath)) {
      log(`⚠️  Post for today already exists, updating...`, 'yellow');
    }

    fs.writeFileSync(filepath, markdownContent);

    log(`✅ Post saved to: ${slug}.md`, 'green');

    // Add to git
    log(`📝 Committing to Git...`, 'yellow');

    execSync(`git add "${filepath}"`, { cwd: BLOG_DIR });

    const commitMsg = `blog: add AI Bubble Daily Dashboard - ${getToday()}`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: BLOG_DIR });

    // Push to GitHub
    log(`🚀 Pushing to GitHub...`, 'yellow');

    execSync(`git push origin main`, { cwd: BLOG_DIR });

    log(`✅ Pushed to GitHub`, 'green');

    // Update history
    appendHistory({
      title: `AI Bubble Daily Dashboard – ${getDateLabel()}`,
      slug,
      status: 'Published ✅'
    });

    log(`\n📊 Summary:`, 'blue');
    log(`─`.repeat(50), 'blue');
    log(`Post URL: https://pintar-blog.vercel.app/blog/${slug}/`, 'green');
    log(`File: ${slug}.md`, 'cyan');
    log(`Deploy: Auto via Vercel (~30-60s)`, 'cyan');
    log(`Type: AI Bubble Daily Dashboard`, 'cyan');
    log(`─`.repeat(50), 'blue');

    log(`\n🎉 AI Bubble Daily Dashboard published!\n`, 'cyan');

    process.exit(0);

  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');

    appendHistory({
      title: `AI Bubble Daily Dashboard – ${getDateLabel()}`,
      slug: getDaySlug(),
      status: `Failed: ${error.message}`
    });

    process.exit(1);
  }
}

// CLI interface
const args = process.argv.slice(2);

if (args[0] === '--help' || args[0] === '-h') {
  console.log(`
📊 AI Bubble Daily Dashboard - Institutional AI Market Analysis with Tavily

Usage:
  node index.js

This generates a daily AI Bubble analysis blog post with:
- Market Structure analysis
- Valuation Drift monitoring
- Capex vs Monetization Gap
- Liquidity Layer assessment
- Sentiment Check
- Probability Update (Bull/Base/Bear cases)

Data is fetched via Tavily API to avoid Brave Search rate limits.

The post is automatically committed to git and deployed via Vercel.
`);
  process.exit(0);
}

// Export functions for testing
module.exports = {
  getTimestamp,
  getToday,
  getDateLabel,
  getDaySlug,
  initHistory,
  appendHistory,
};

// Only run main if this file is executed directly (not required as a module)
if (require.main === module) {
  main();
}
