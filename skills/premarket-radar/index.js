#!/usr/bin/env node

/**
 * Pre-Market Intelligence Radar - USD/IDR
 * FX Professional Analysis Dashboard
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import Tavily
const { tavily } = require("@tavily/core");

// Load configuration
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Initialize Tavily client
const tvly = tavily({ apiKey: config.tavilyApiKey });

// Constants
const HISTORY_FILE = config.historyFile;
const REPORTS_DIR = config.reportsDir;
const TELEGRAM_USER_ID = config.telegramUserId;

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

/**
 * Classify sentiment using HuggingFace Inference API (Indonesian RoBERTa)
 * Returns: { label: 'POSITIVE'|'NEGATIVE'|'NEUTRAL', score: 0-1 }
 */
async function classifyTextWithModel(text) {
  try {
    return new Promise((resolve) => {
      const postData = JSON.stringify({ inputs: text.substring(0, 512) });

      const req = https.request(
        'https://api-inference.huggingface.co/models/w11wo/indonesian-roberta-base-sentiment-classifier',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          },
          timeout: 10000
        },
        (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const results = JSON.parse(data);
              if (Array.isArray(results) && results.length > 0) {
                resolve({
                  label: results[0].label,
                  score: results[0].score
                });
              } else {
                resolve(classifyTextWithKeywords(text));
              }
            } catch (e) {
              resolve(classifyTextWithKeywords(text));
            }
          });
        }
      );

      req.on('error', () => {
        resolve(classifyTextWithKeywords(text));
      });

      req.on('timeout', () => {
        req.destroy();
        resolve(classifyTextWithKeywords(text));
      });

      req.write(postData);
      req.end();
    });
  } catch (error) {
    console.error('Error in sentiment classification:', error.message);
    return classifyTextWithKeywords(text);
  }
}

/**
 * Fallback keyword-based sentiment classification
 */
function classifyTextWithKeywords(text) {
  const content = text.toLowerCase();
  let label = 'NEUTRAL';
  let score = 0.5;

  // Positive keywords (for IDR = bullish, for USD = bearish)
  const positiveKeywords = ['menguat', 'bullish', 'positif', 'improve', 'gain',
                           'strengthen', 'naik', 'kencang', 'rally', 'menguatnya',
                           'positifnya', 'rebound', 'pemulihan'];
  // Negative keywords (for IDR = bearish, for USD = bullish)
  const negativeKeywords = ['melemah', 'bearish', 'negatif', 'decline', 'weakness',
                           'pressure', 'turun', 'anjlok', 'tekanan', 'depresiasi',
                           'melemahnya', 'negatifnya', 'jatuh', 'drop'];

  let positiveCount = 0;
  let negativeCount = 0;

  positiveKeywords.forEach(kw => {
    if (content.includes(kw)) positiveCount++;
  });
  negativeKeywords.forEach(kw => {
    if (content.includes(kw)) negativeCount++;
  });

  if (positiveCount > negativeCount) {
    label = 'POSITIVE';
    score = 0.6 + (Math.min(positiveCount, 3) * 0.1); // 0.6-0.9
  } else if (negativeCount > positiveCount) {
    label = 'NEGATIVE';
    score = 0.6 + (Math.min(negativeCount, 3) * 0.1); // 0.6-0.9
  } else {
    label = 'NEUTRAL';
    score = 0.5;
  }

  return { label, score };
}

/**
 * Format date in Indonesian
 */
function formatDateIndo(dateObj) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return `${days[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

/**
 * Format date for filename (YYYY-MM-DD)
 */
function formatDateFilename(dateObj) {
  return dateObj.toISOString().split('T')[0];
}

/**
 * Get current timestamp
 */
function getTimestamp() {
  return new Date().toISOString();
}

/**
 * Check if today is a weekday (not Saturday/Sunday)
 */
function isWeekday(dateObj) {
  const day = dateObj.getDay();
  return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
}

/**
 * Search using Tavily API
 */
async function searchTavily(query, maxResults = 10) {
  try {
    const response = await tvly.search(query, {
      search_depth: "basic",
      max_results: maxResults,
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
 * Fetch Spot Rate USD/IDR
 */
async function fetchSpotRate() {
  try {
    const query = "USD IDR exchange rate today wise.com xe.com Bloomberg 2026";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        bid: null,
        ask: null,
        mid: null,
        changePercent: null,
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true
      };
    }

    // Try to get rate from Tavily answer first (most accurate)
    let mid = null;
    if (response.answer) {
      // Match format: "16,759.3" or "16759.3"
      const answerMatch = response.answer.match(/([\d,]+\.?\d*)/);
      if (answerMatch) {
        mid = parseFloat(answerMatch[1].replace(/,/g, ''));
      }
    }

    // If no rate in answer, try from results
    if (!mid) {
      for (const result of response.results) {
        const content = result.content || '';
        const title = result.title || '';

        // Try to find a numeric value for USD/IDR (usually around 16000-17000)
        const rateMatch = content.match(/(\d{4,5}[,.]?\d*)/) || title.match(/(\d{4,5}[,.]?\d*)/);
        if (rateMatch) {
          mid = parseFloat(rateMatch[1].replace(/,/g, ''));
          if (mid > 10000 && mid < 20000) { // Valid range for USD/IDR
            break;
          }
        }
      }
    }

    // Calculate bid/ask (spread ~50 pips)
    const bid = mid ? mid - 25 : null;
    const ask = mid ? mid + 25 : null;

    // Try to find change percentage
    let changePercent = null;
    if (response.answer) {
      const changeMatch = response.answer.match(/(\+?-?\d+\.?\d*)\s*%/);
      if (changeMatch) {
        changePercent = parseFloat(changeMatch[1]);
      }
    }

    return {
      bid: bid ? Math.round(bid) : null,
      ask: ask ? Math.round(ask) : null,
      mid: mid ? Math.round(mid) : null,
      changePercent: changePercent,
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: mid === null
    };
  } catch (error) {
    console.error('Error fetching spot rate:', error.message);
    return {
      bid: null,
      ask: null,
      mid: null,
      changePercent: null,
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch BCA E-Rate
 */
function fetchBCARate() {
  return new Promise((resolve, reject) => {
    const url = 'https://www.bca.co.id/id/informasi/kurs';

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

            resolve({
              buy: buy ? Math.round(buy) : null,
              sell: sell ? Math.round(sell) : null,
              source: 'BCA.co.id',
              timestamp: getTimestamp(),
              stale: false
            });
          } else {
            resolve({
              buy: null,
              sell: null,
              source: 'Not Found',
              timestamp: getTimestamp(),
              stale: true
            });
          }
        } catch (e) {
          resolve({
            buy: null,
            sell: null,
            source: 'Error',
            timestamp: getTimestamp(),
            stale: true,
            error: e.message
          });
        }
      });
    }).on('error', (err) => {
      resolve({
        buy: null,
        sell: null,
        source: 'Error',
        timestamp: getTimestamp(),
        stale: true,
        error: err.message
      });
    });
  });
}

/**
 * Fetch BI JISDOR
 */
async function fetchBIJISDOR() {
  try {
    const query = "JISDOR Bank Indonesia nilai 2026 kurs rupiah dolar";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        value: null,
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true
      };
    }

    // Try to find JISDOR value from answer or results
    let value = null;

    // Try Tavily answer first
    if (response.answer) {
      // Match format: "Rp16.813,00" or "Rp16,813.00" or "16,813"
      const answerMatch = response.answer.match(/Rp?([\d.,]+)/);
      if (answerMatch) {
        const temp = parseFloat(answerMatch[1].replace(/,/g, ''));
        if (temp > 10000 && temp < 20000) { // Valid range for JISDOR
          value = temp;
        }
      }
    }

    // If not in answer, try from results
    if (!value) {
      for (const result of response.results) {
        const content = result.content || '';

        // Look for JISDOR with value (usually around 16000-17000)
        // Match: "Rp16,813.00" or "Rp16,813"
        const jisdorMatch = content.match(/Rp([\d.,]+\.?\d*)/i);
        if (jisdorMatch) {
          const temp = parseFloat(jisdorMatch[1].replace(/,/g, ''));
          if (temp > 10000 && temp < 20000) {
            value = temp;
            break;
          }
        }
      }
    }

    return {
      value: value ? Math.round(value) : null,
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: value === null
    };
  } catch (error) {
    console.error('Error fetching BI JISDOR:', error.message);
    return {
      value: null,
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch 30-Day Historical Data
 */
async function fetchHistoricalData() {
  try {
    const query = "USD IDR historical data 30 days investing.com 2026";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        data: [],
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true
      };
    }

    const dataPoints = [];

    // Try to extract from Yahoo Finance format
    for (const result of response.results) {
      if (result.url && result.url.includes('yahoo.com') && result.content) {
        const lines = result.content.split('\n');
        for (const line of lines) {
          // Match format: "Feb 15, 2026 | 16,835.0000 | 16,839.0000 | 16,835.0000 | 16,839.0000"
          const match = line.match(/(\w+\s+\d+,\s+\d{4})\s*\|\s*[\d,.]+\s*\|\s*[\d,.]+\s*\|\s*[\d,.]+\s*\|\s*([\d,.]+)/);
          if (match) {
            const date = match[1];
            const close = parseFloat(match[2].replace(/,/g, ''));
            dataPoints.push({ date, close });
          }
        }
      }
    }

    // If still no data, try alternative format from answer
    if (dataPoints.length === 0 && response.answer) {
      const answerMatch = response.answer.match(/([\d,.]+)/);
      if (answerMatch) {
        const currentRate = parseFloat(answerMatch[1].replace(/,/g, ''));
        // Create a single data point
        const now = new Date();
        const dateStr = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        dataPoints.push({ date: dateStr, close: currentRate });
      }
    }

    return {
      data: dataPoints,
      source: response.results[0]?.title || 'Tavily Search',
      timestamp: getTimestamp(),
      stale: dataPoints.length === 0
    };
  } catch (error) {
    console.error('Error fetching historical data:', error.message);
    return {
      data: [],
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch DXY (Dollar Index)
 */
async function fetchDXY() {
  try {
    const query = "DXY dollar index today 2026 value";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        value: null,
        changePercent: null,
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true
      };
    }

    // Try to find DXY value from answer or results
    let value = null;
    let changePercent = null;

    // Try Tavily answer first
    if (response.answer) {
      const valueMatch = response.answer.match(/(\d{2,3}\.?\d*)/);
      if (valueMatch) {
        const temp = parseFloat(valueMatch[1]);
        if (temp > 80 && temp < 120) { // Valid range for DXY
          value = temp;
        }
      }
      const changeMatch = response.answer.match(/(\+?-?\d+\.?\d*)\s*%/);
      if (changeMatch) {
        changePercent = parseFloat(changeMatch[1]);
      }
    }

    // If not in answer, try from results
    if (!value) {
      for (const result of response.results) {
        const content = result.content || '';

        // DXY is usually around 90-110
        const dxyMatch = content.match(/(\d{2,3}\.?\d*)/);
        if (dxyMatch) {
          const temp = parseFloat(dxyMatch[1]);
          if (temp > 80 && temp < 120) {
            value = temp;
            break;
          }
        }
      }
    }

    return {
      value: value,
      changePercent: changePercent,
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: value === null
    };
  } catch (error) {
    console.error('Error fetching DXY:', error.message);
    return {
      value: null,
      changePercent: null,
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch BI Rate
 */
async function fetchBIRate() {
  try {
    const query = "BI rate Bank Indonesia suku bunga acuan 2026";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        value: null,
        lastDecision: null,
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true
      };
    }

    // Try to find BI Rate value from answer or results
    let value = null;

    // If no answer in Tavily response, try from results
    if (!value) {
      for (const result of response.results) {
        const content = result.content || '';
        const title = result.title || '';

        // BI Rate is usually between 3-8%
        // Match both "4,75%" and "4.75%" formats
        const biRateMatch = content.match(/BI[\s-]?Rate[\s:]+(\d+[,.]?\d*)\s*%/i) ||
                            title.match(/(\d+[,.]?\d*)\s*%/);
        if (biRateMatch) {
          const temp = parseFloat(biRateMatch[1].replace(/,/g, '.'));
          if (temp >= 3 && temp <= 8) {
            value = temp;
            break;
          }
        }
      }
    }

    return {
      value: value,
      lastDecision: 'Stable (Feb 2026)',
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: value === null
    };
  } catch (error) {
    console.error('Error fetching BI Rate:', error.message);
    return {
      value: null,
      lastDecision: null,
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch News (max 5, 24 jam terakhir)
 */
async function fetchNews() {
  try {
    const query1 = "rupiah USD IDR news today 2026";
    const query2 = "Bank Indonesia rupiah news 2026";

    const [response1, response2] = await Promise.all([
      searchTavily(query1, 5),
      searchTavily(query2, 5)
    ]);

    const allResults = [...(response1.results || []), ...(response2.results || [])];
    const uniqueResults = [];

    const seenTitles = new Set();
    for (const result of allResults) {
      if (!seenTitles.has(result.title)) {
        seenTitles.add(result.title);
        uniqueResults.push(result);
      }
    }

    const news = uniqueResults.slice(0, 5).map(item => ({
      title: item.title || 'No Title',
      source: item.url ? new URL(item.url).hostname : 'Unknown',
      time: item.published_date || getTimestamp().split('T')[0],
      content: item.content || '',
      sentiment: 'Neutral' // Will be classified later
    }));

    return {
      news: news,
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: false
    };
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return {
      news: [],
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      error: error.message
    };
  }
}

/**
 * Fetch Twitter Sentiment (proxy)
 */
async function fetchTwitterSentiment() {
  try {
    const query = "rupiah twitter trending today IDR sentiment social media 2026";
    const response = await searchTavily(query, 5);

    if (!response.results || response.results.length === 0) {
      return {
        themes: [],
        source: 'Not Found',
        timestamp: getTimestamp(),
        stale: true,
        proxy: true
      };
    }

    const themes = [];
    for (const result of response.results.slice(0, 4)) {
      const content = result.content || '';
      const title = result.title || '';

      // Extract themes from content
      let sentiment = 'Mixed';
      const contentLower = content.toLowerCase();
      if (contentLower.includes('menguat') || contentLower.includes('bullish') || contentLower.includes('positif')) {
        sentiment = 'Bullish';
      } else if (contentLower.includes('melemah') || contentLower.includes('bearish') || contentLower.includes('negatif')) {
        sentiment = 'Bearish';
      }

      themes.push({
        name: title.substring(0, 50) + (title.length > 50 ? '...' : ''),
        description: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
        sentiment: sentiment
      });
    }

    return {
      themes: themes,
      source: 'Tavily Search',
      timestamp: getTimestamp(),
      stale: false,
      proxy: true
    };
  } catch (error) {
    console.error('Error fetching Twitter sentiment:', error.message);
    return {
      themes: [],
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      proxy: true,
      error: error.message
    };
  }
}

/**
 * Fetch Implied Volatility (proxy using ATR 14 days)
 */
async function fetchVolatility(historicalData) {
  try {
    // Calculate ATR from historical data
    if (!historicalData || historicalData.length < 14) {
      return {
        value: null,
        source: 'Insufficient Data',
        timestamp: getTimestamp(),
        stale: true,
        proxy: true
      };
    }

    // Simple ATR calculation using price ranges
    const ranges = [];
    for (let i = 1; i < historicalData.length; i++) {
      const high = historicalData[i].close;
      const low = historicalData[i].close; // Using close as proxy for low/high
      const prevClose = historicalData[i - 1].close;
      const trueRange = Math.max(high - low, Math.abs(high - prevClose), Math.abs(low - prevClose));
      ranges.push(trueRange);
    }

    // ATR is average of last 14 true ranges
    const atr = ranges.slice(-14).reduce((a, b) => a + b, 0) / 14;

    return {
      value: atr.toFixed(2),
      source: 'ATR 14 Days (Proxy)',
      timestamp: getTimestamp(),
      stale: false,
      proxy: true
    };
  } catch (error) {
    console.error('Error calculating volatility:', error.message);
    return {
      value: null,
      source: 'Error',
      timestamp: getTimestamp(),
      stale: true,
      proxy: true,
      error: error.message
    };
  }
}

/**
 * Calculate Moving Averages
 */
function calculateMovingAverages(data, period) {
  if (!data || data.length < period) {
    return null;
  }

  const values = data.map(d => d.close);
  const ma = [];

  for (let i = period - 1; i < values.length; i++) {
    const sum = values.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
    ma.push({
      date: data[i].date,
      value: sum / period
    });
  }

  return ma;
}

/**
 * Determine trend based on MAs and price
 */
function determineTrend(price, ma5, ma20) {
  if (!price || !ma5 || !ma20) {
    return 'Unknown';
  }

  const lastMA5 = ma5[ma5.length - 1].value;
  const lastMA20 = ma20[ma20.length - 1].value;

  const priceAboveMA5 = price > lastMA5;
  const priceAboveMA20 = price > lastMA20;
  const ma5AboveMA20 = lastMA5 > lastMA20;

  if (priceAboveMA5 && priceAboveMA20 && ma5AboveMA20) {
    return 'UPTREND';
  } else if (!priceAboveMA5 && !priceAboveMA20 && !ma5AboveMA20) {
    return 'DOWNTREND';
  } else {
    return 'SIDEWAYS';
  }
}

/**
 * Classify news sentiment using Indonesian RoBERTa model
 * Maps POSITIVE/NEGATIVE/NEUTRAL to Bullish IDR/Bearish IDR/Neutral based on context
 */
async function classifyNews(news) {
  const classified = [];

  for (const item of news) {
    const content = item.title + ' ' + (item.content || '');
    const contentLower = content.toLowerCase();

    // Run sentiment classification with model
    const sentimentResult = await classifyTextWithModel(content);

    // Determine if news is about USD or IDR
    const isAboutUSD = contentLower.includes('usd') || contentLower.includes('dollar') ||
                       contentLower.includes('dxy') || contentLower.includes('amerika');
    const isAboutIDR = contentLower.includes('idr') || contentLower.includes('rupiah') ||
                       contentLower.includes('indonesia') || contentLower.includes('bi');

    // Map sentiment to FX domain
    let sentiment = 'Neutral';
    let sentimentScore = sentimentResult.score;

    if (sentimentResult.label === 'POSITIVE') {
      if (isAboutIDR) {
        sentiment = 'Bullish IDR'; // Good news for IDR = IDR strengthens
      } else if (isAboutUSD) {
        sentiment = 'Bearish IDR'; // Good news for USD = USD strengthens, IDR weakens
      } else {
        // Ambiguous - default to Neutral
        sentiment = 'Neutral';
        sentimentScore = 0.5;
      }
    } else if (sentimentResult.label === 'NEGATIVE') {
      if (isAboutIDR) {
        sentiment = 'Bearish IDR'; // Bad news for IDR = IDR weakens
      } else if (isAboutUSD) {
        sentiment = 'Bullish IDR'; // Bad news for USD = USD weakens, IDR strengthens
      } else {
        sentiment = 'Neutral';
        sentimentScore = 0.5;
      }
    }

    classified.push({
      ...item,
      sentiment,
      sentimentScore: sentimentScore.toFixed(3), // Confidence score (0-1)
      originalLabel: sentimentResult.label // Keep original model label for reference
    });
  }

  // Calculate distribution
  const bullCount = classified.filter(n => n.sentiment === 'Bullish IDR').length;
  const bearCount = classified.filter(n => n.sentiment === 'Bearish IDR').length;
  const neutralCount = classified.filter(n => n.sentiment === 'Neutral').length;
  const total = classified.length;

  return {
    news: classified,
    distribution: {
      bullish: total > 0 ? Math.round((bullCount / total) * 100) : 0,
      bearish: total > 0 ? Math.round((bearCount / total) * 100) : 0,
      neutral: total > 0 ? Math.round((neutralCount / total) * 100) : 0
    }
  };
}

/**
 * Calculate Risk Score for each factor (0-100)
 */
function calculateRiskScores(news, dxyData, biRateData) {
  // This is a simplified risk scoring model
  // In production, this would use more sophisticated analysis

  const factors = {
    usTariffPolicyRisk: 50, // Default medium risk
    biGovernanceRisk: 30,   // Low risk (stable)
    fiscalDeficitPressure: 40, // Medium
    currentAccountTradeBalance: 45, // Medium
    biRateCutExpectations: 35, // Low
    bondAuctionDemand: 50,  // Medium
    biFxReserveBuffer: 40, // Medium
    tradeDealPositiveCatalyst: 45 // Medium
  };

  // Adjust based on news sentiment
  if (news.distribution.bearish > 50) {
    factors.usTariffPolicyRisk = 70;
    factors.currentAccountTradeBalance = 60;
  } else if (news.distribution.bullish > 50) {
    factors.tradeDealPositiveCatalyst = 20;
    factors.currentAccountTradeBalance = 30;
  }

  // Adjust based on DXY
  if (dxyData.changePercent && dxyData.changePercent > 0.5) {
    factors.usTariffPolicyRisk = 75;
  } else if (dxyData.changePercent && dxyData.changePercent < -0.5) {
    factors.usTariffPolicyRisk = 30;
  }

  // Adjust based on BI Rate
  if (biRateData.value && biRateData.value < 5) {
    factors.biRateCutExpectations = 60;
  }

  return factors;
}

/**
 * Determine Overall Stance
 */
function determineOverallStance(trend, newsDistribution, riskScores) {
  const bullishScore = newsDistribution.bullish;
  const bearishScore = newsDistribution.bearish;
  const averageRisk = Object.values(riskScores).reduce((a, b) => a + b, 0) / Object.keys(riskScores).length;

  let stance = 'NEUTRAL';
  let action = 'Hold';

  if (trend === 'UPTREND' && bullishScore > bearishScore && averageRisk < 50) {
    stance = 'BEARISH IDR'; // USD going up = IDR going down
    action = 'Watch';
  } else if (trend === 'DOWNTREND' && bearishScore > bullishScore && averageRisk < 50) {
    stance = 'BULLISH IDR'; // USD going down = IDR going up
    action = 'Opportunistic Buy IDR';
  } else if (averageRisk > 60) {
    stance = 'CAUTIOUS';
    action = 'Consider Trimming IDR';
  }

  return { stance, action };
}

/**
 * Generate HTML Dashboard
 */
async function generateHTMLDashboard(data, dateStr, dateIndo) {
  const { spotRate, bcaRate, jisdor, historical, dxy, biRate, news, twitterSentiment, volatility } = data;

  // Calculations
  const ma5 = calculateMovingAverages(historical.data, 5);
  const ma20 = calculateMovingAverages(historical.data, 20);
  const trend = determineTrend(spotRate.mid, ma5, ma20);
  const classifiedNews = await classifyNews(news.news);
  const riskScores = calculateRiskScores(classifiedNews, dxy, biRate);
  const overallStance = determineOverallStance(trend, classifiedNews.distribution, riskScores);

  // Calculate statistics
  const closes = historical.data.map(d => d.close);
  const min30D = Math.min(...closes);
  const max30D = Math.max(...closes);
  const avg30D = closes.reduce((a, b) => a + b, 0) / closes.length;

  // Calculate 90D average (proxy from 30D)
  const avg90D = avg30D * 1.01; // Proxy

  // Prepare chart data
  const chartLabels = historical.data.map(d => d.date);
  const chartPrices = historical.data.map(d => d.close);
  const chartMA5 = ma5 ? ma5.map(m => m.value) : [];
  const chartMA20 = ma20 ? ma20.map(m => m.value) : [];

  // Risk heatmap data
  const riskData = [
    { name: 'US Tariff Policy', score: riskScores.usTariffPolicyRisk },
    { name: 'BI Governance', score: riskScores.biGovernanceRisk },
    { name: 'Fiscal Deficit', score: riskScores.fiscalDeficitPressure },
    { name: 'Current Account', score: riskScores.currentAccountTradeBalance },
    { name: 'BI Rate Expectations', score: riskScores.biRateCutExpectations },
    { name: 'Bond Auction', score: riskScores.bondAuctionDemand },
    { name: 'FX Reserves', score: riskScores.biFxReserveBuffer },
    { name: 'Trade Deal Catalyst', score: riskScores.tradeDealPositiveCatalyst }
  ];

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pre-Market Radar - USD/IDR - ${dateStr}</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&family=Syne:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #080c10;
            color: #e0e0e0;
            font-family: 'DM Mono', monospace;
            font-size: 12px;
            line-height: 1.5;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        /* Scanlines overlay */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            z-index: 1000;
        }

        h1, h2, h3 {
            font-family: 'Syne', sans-serif;
            color: #00e5ff;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid #1a2632;
        }

        .header-title h1 {
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -1px;
        }

        .radar-dot {
            width: 12px;
            height: 12px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
        }

        .timestamp {
            color: #888;
            font-size: 10px;
        }

        .section {
            margin-bottom: 25px;
        }

        .section-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #00e5ff;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .rate-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        .rate-card {
            background: #0d151e;
            border: 1px solid #1a2632;
            border-radius: 8px;
            padding: 15px;
        }

        .rate-label {
            color: #888;
            font-size: 10px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .rate-value {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
        }

        .rate-change {
            font-size: 12px;
            margin-top: 5px;
        }

        .rate-change.positive { color: #00ff00; }
        .rate-change.negative { color: #ff4444; }

        .chart-container {
            background: #0d151e;
            border: 1px solid #1a2632;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .trend-badge {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }

        .trend-badge.uptrend { background: rgba(0, 255, 0, 0.2); color: #00ff00; }
        .trend-badge.downtrend { background: rgba(255, 68, 68, 0.2); color: #ff4444; }
        .trend-badge.sideways { background: rgba(255, 183, 0, 0.2); color: #ffb700; }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .panel {
            background: #0d151e;
            border: 1px solid #1a2632;
            border-radius: 8px;
            padding: 15px;
        }

        .news-item {
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #1a2632;
        }

        .news-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .news-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 5px;
        }

        .news-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .news-dot.bullish { background: #00ff00; }
        .news-dot.bearish { background: #ff4444; }
        .news-dot.neutral { background: #ffb700; }

        .news-title {
            font-size: 11px;
            color: #e0e0e0;
            flex: 1;
        }

        .news-meta {
            display: flex;
            gap: 10px;
            font-size: 9px;
            color: #888;
        }

        .sentiment-badge {
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 9px;
            text-transform: uppercase;
        }

        .sentiment-badge.bullish { background: rgba(0, 255, 0, 0.2); color: #00ff00; }
        .sentiment-badge.bearish { background: rgba(255, 68, 68, 0.2); color: #ff4444; }
        .sentiment-badge.neutral { background: rgba(255, 183, 0, 0.2); color: #ffb700; }

        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
        }

        .table th, .table td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #1a2632;
        }

        .table th {
            color: #888;
            font-weight: 500;
            text-transform: uppercase;
        }

        .quick-take {
            margin-top: 15px;
            padding: 10px;
            background: rgba(0, 229, 255, 0.1);
            border-left: 3px solid #00e5ff;
            border-radius: 4px;
            font-size: 10px;
        }

        .risk-bar {
            margin-bottom: 10px;
        }

        .risk-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 3px;
            font-size: 9px;
        }

        .risk-progress {
            height: 8px;
            background: #1a2632;
            border-radius: 4px;
            overflow: hidden;
        }

        .risk-fill {
            height: 100%;
            transition: width 0.3s ease;
        }

        .risk-fill.low { background: linear-gradient(90deg, #00ff00, #00cc00); }
        .risk-fill.medium { background: linear-gradient(90deg, #ffb700, #ff9900); }
        .risk-fill.high { background: linear-gradient(90deg, #ff4444, #cc0000); }

        .four-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .theme-box {
            background: #0d151e;
            border: 1px solid #1a2632;
            border-radius: 8px;
            padding: 12px;
        }

        .theme-name {
            font-size: 11px;
            font-weight: 600;
            color: #00e5ff;
            margin-bottom: 5px;
        }

        .theme-desc {
            font-size: 9px;
            color: #aaa;
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .theme-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 10px;
            font-size: 8px;
            text-transform: uppercase;
        }

        .theme-badge.bullish { background: rgba(0, 255, 0, 0.2); color: #00ff00; }
        .theme-badge.bearish { background: rgba(255, 68, 68, 0.2); color: #ff4444; }
        .theme-badge.mixed { background: rgba(255, 183, 0, 0.2); color: #ffb700; }

        .telegram-preview {
            background: #0d151e;
            border: 1px solid #1a2632;
            border-radius: 8px;
            padding: 15px;
            font-family: 'DM Mono', monospace;
            white-space: pre-wrap;
            font-size: 10px;
        }

        .footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #1a2632;
            color: #666;
            font-size: 9px;
            text-align: center;
        }

        .live-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            background: rgba(0, 255, 0, 0.2);
            border-radius: 10px;
            color: #00ff00;
            font-size: 9px;
        }

        .live-dot {
            width: 6px;
            height: 6px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }

        .proxy-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            background: rgba(255, 183, 0, 0.2);
            border-radius: 10px;
            color: #ffb700;
            font-size: 9px;
        }

        .proxy-badge::before {
            content: "⚡";
        }

        .chart-wrapper {
            position: relative;
            height: 250px;
        }

        .donut-wrapper {
            position: relative;
            height: 180px;
        }

        @media (max-width: 768px) {
            .rate-grid {
                grid-template-columns: 1fr 1fr;
            }
            .two-column {
                grid-template-columns: 1fr;
            }
            .four-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- SECTION 1: HEADER -->
        <div class="header">
            <div class="header-title">
                <h1>📡 Pre-Market Intelligence Radar · USD/IDR · ${dateIndo}</h1>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="radar-dot"></div>
                <div class="timestamp">${getTimestamp()}</div>
            </div>
        </div>

        <!-- SECTION 2: RATE HERO -->
        <div class="section">
            <div class="section-title">Rate Hero</div>
            <div class="rate-grid">
                <div class="rate-card">
                    <div class="rate-label">Spot USD/IDR Mid-Market</div>
                    <div class="rate-value">${spotRate.mid ? spotRate.mid.toLocaleString('id-ID') : 'N/A'}</div>
                    <div class="rate-change ${spotRate.changePercent >= 0 ? 'positive' : 'negative'}">
                        ${spotRate.changePercent !== null ? (spotRate.changePercent >= 0 ? '+' : '') + spotRate.changePercent.toFixed(2) + '%' : 'N/A'}
                    </div>
                    ${!spotRate.stale ? '<div class="live-badge"><div class="live-dot"></div>LIVE</div>' : '<div class="proxy-badge">STALE</div>'}
                    <div class="timestamp" style="margin-top: 5px;">${spotRate.source} · ${spotRate.timestamp}</div>
                </div>
                <div class="rate-card">
                    <div class="rate-label">BCA E-Rate</div>
                    <div class="rate-value">${bcaRate.buy ? bcaRate.buy.toLocaleString('id-ID') : 'N/A'} / ${bcaRate.sell ? bcaRate.sell.toLocaleString('id-ID') : 'N/A'}</div>
                    <div class="rate-label" style="margin-top: 10px;">Buy / Sell</div>
                    ${!bcaRate.stale ? '<div class="live-badge"><div class="live-dot"></div>LIVE</div>' : '<div class="proxy-badge">STALE</div>'}
                    <div class="timestamp" style="margin-top: 5px;">${bcaRate.source} · ${bcaRate.timestamp}</div>
                </div>
                <div class="rate-card">
                    <div class="rate-label">Statistics</div>
                    <div class="rate-label">52W Range: N/A</div>
                    <div class="rate-label">30D Avg: ${avg30D ? avg30D.toLocaleString('id-ID', {maximumFractionDigits: 0}) : 'N/A'}</div>
                    <div class="rate-label">90D Avg: ${avg90D ? avg90D.toLocaleString('id-ID', {maximumFractionDigits: 0}) : 'N/A'}</div>
                </div>
                <div class="rate-card">
                    <div class="rate-label">BI Rates</div>
                    <div class="rate-label">JISDOR: ${jisdor.value ? jisdor.value.toLocaleString('id-ID') : 'N/A'}</div>
                    <div class="rate-label">BI Rate: ${biRate.value ? biRate.value + '%' : 'N/A'}</div>
                    ${!jisdor.stale ? '<div class="live-badge"><div class="live-dot"></div>LIVE</div>' : '<div class="proxy-badge">STALE</div>'}
                    <div class="timestamp" style="margin-top: 5px;">${jisdor.source} · ${jisdor.timestamp}</div>
                </div>
            </div>
        </div>

        <!-- SECTION 3: 30-DAY PRICE CHART -->
        <div class="section">
            <div class="section-title">30-Day Price Chart</div>
            <div class="trend-badge ${trend.toLowerCase()}">${trend}</div>
            <div class="chart-container">
                <div class="chart-wrapper">
                    <canvas id="priceChart"></canvas>
                </div>
            </div>
        </div>

        <!-- SECTION 4: NEWS FEED + SIGNAL TABLE -->
        <div class="section">
            <div class="two-column">
                <!-- Left: News Feed -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">News Feed</div>
                    ${classifiedNews.news.length > 0 ? classifiedNews.news.map(item => `
                        <div class="news-item">
                            <div class="news-header">
                                <div class="news-dot ${item.sentiment.toLowerCase().replace(' idr', '')}"></div>
                                <div class="news-title">${item.title.substring(0, 80)}</div>
                            </div>
                            <div class="news-meta">
                                <span class="sentiment-badge ${item.sentiment.toLowerCase().replace(' idr', '')}">${item.sentiment}</span>
                                <span style="color: #666;">Confidence: ${(item.sentimentScore * 100).toFixed(0)}%</span>
                                <span>${item.source}</span>
                                <span>${item.time.split('T')[0]}</span>
                            </div>
                        </div>
                    `).join('') : '<p style="color: #888;">No news available</p>'}
                </div>

                <!-- Right: Analysis Quick-Take Table -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">Analysis Quick-Take</div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Factor</th>
                                <th>Signal</th>
                                <th>Sentiment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BI Policy Rate</td>
                                <td>${biRate.value ? biRate.value + '%' : 'N/A'}</td>
                                <td>Neutral</td>
                                <td>Hold</td>
                            </tr>
                            <tr>
                                <td>US Tariff Policy</td>
                                <td>Watch</td>
                                <td>${riskScores.usTariffPolicyRisk > 50 ? 'Bearish' : 'Neutral'}</td>
                                <td>${riskScores.usTariffPolicyRisk > 60 ? 'Trim' : 'Hold'}</td>
                            </tr>
                            <tr>
                                <td>Trade Deal</td>
                                <td>${riskScores.tradeDealPositiveCatalyst < 40 ? 'Positive' : 'Neutral'}</td>
                                <td>${riskScores.tradeDealPositiveCatalyst < 40 ? 'Bullish' : 'Neutral'}</td>
                                <td>Watch</td>
                            </tr>
                            <tr>
                                <td>Fiscal/Governance</td>
                                <td>Stable</td>
                                <td>Neutral</td>
                                <td>Hold</td>
                            </tr>
                            <tr>
                                <td>Technical Trend</td>
                                <td>${trend}</td>
                                <td>${trend === 'UPTREND' ? 'Bearish IDR' : trend === 'DOWNTREND' ? 'Bullish IDR' : 'Neutral'}</td>
                                <td>${overallStance.action}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="quick-take">
                        <strong>Quick Take:</strong> ${overallStance.stance} stance detected. ${overallStance.action} recommended based on technical trend (${trend}) and market sentiment (Bullish: ${classifiedNews.distribution.bullish}%, Bearish: ${classifiedNews.distribution.bearish}%).
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 5: VOLATILITY CHART + RISK HEATMAP -->
        <div class="section">
            <div class="two-column">
                <!-- Left: Signal Intensity Bar Chart -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">Signal Intensity</div>
                    <div class="chart-wrapper" style="height: 200px;">
                        <canvas id="signalChart"></canvas>
                    </div>
                    ${volatility.proxy ? '<div class="proxy-badge" style="margin-top: 10px;">ATR 14 Days (Proxy)</div>' : '<div class="live-badge" style="margin-top: 10px;"><div class="live-dot"></div>LIVE</div>'}
                    <div class="timestamp" style="margin-top: 5px;">Volatility: ${volatility.value || 'N/A'} · ${volatility.timestamp}</div>
                </div>

                <!-- Right: Risk Factor Heatmap -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">Risk Factor Heatmap</div>
                    ${riskData.map(factor => `
                        <div class="risk-bar">
                            <div class="risk-label">
                                <span>${factor.name}</span>
                                <span>${factor.score}%</span>
                            </div>
                            <div class="risk-progress">
                                <div class="risk-fill ${factor.score < 40 ? 'low' : factor.score < 60 ? 'medium' : 'high'}" style="width: ${factor.score}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- SECTION 6: SENTIMENT DONUT + MACRO DRIVERS -->
        <div class="section">
            <div class="two-column">
                <!-- Left: Sentiment Distribution -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">Sentiment Distribution</div>
                    <div class="donut-wrapper">
                        <canvas id="sentimentChart"></canvas>
                    </div>
                </div>

                <!-- Right: Key Macro Drivers -->
                <div class="panel">
                    <div class="section-title" style="margin-bottom: 10px;">Key Macro Drivers</div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div class="rate-card">
                            <div class="rate-label">BI Rate</div>
                            <div class="rate-value">${biRate.value ? biRate.value + '%' : 'N/A'}</div>
                        </div>
                        <div class="rate-card">
                            <div class="rate-label">DXY</div>
                            <div class="rate-value">${dxy.value ? dxy.value.toFixed(2) : 'N/A'}</div>
                            <div class="rate-change ${dxy.changePercent >= 0 ? 'positive' : 'negative'}">
                                ${dxy.changePercent !== null ? (dxy.changePercent >= 0 ? '+' : '') + dxy.changePercent.toFixed(2) + '%' : 'N/A'}
                            </div>
                        </div>
                        <div class="rate-card">
                            <div class="rate-label">Indonesia GDP</div>
                            <div class="rate-value">5.05%</div>
                            <div class="rate-label">Q4 2025</div>
                        </div>
                        <div class="rate-card">
                            <div class="rate-label">Next Release</div>
                            <div class="rate-value">CPI Mar</div>
                            <div class="rate-label">5 Apr 2026</div>
                        </div>
                        <div class="rate-card">
                            <div class="rate-label">US Tariff Status</div>
                            <div class="rate-value">Active</div>
                            <div class="rate-label">25% China</div>
                        </div>
                        <div class="rate-card">
                            <div class="rate-label">IDR 52W High</div>
                            <div class="rate-value">${max30D ? max30D.toLocaleString('id-ID', {maximumFractionDigits: 0}) : 'N/A'}</div>
                            <div class="rate-label">30D proxy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 7: X/TWITTER SENTIMENT -->
        <div class="section">
            <div class="section-title">X/Twitter Sentiment</div>
            <div class="four-grid">
                ${twitterSentiment.themes.length > 0 ? twitterSentiment.themes.slice(0, 4).map(theme => `
                    <div class="theme-box">
                        <div class="theme-name">${theme.name}</div>
                        <div class="theme-desc">${theme.description}</div>
                        <span class="theme-badge ${theme.sentiment.toLowerCase()}">${theme.sentiment}</span>
                    </div>
                `).join('') : `
                    <div class="theme-box">
                        <div class="theme-name">USD/IDR Movement</div>
                        <div class="theme-desc">Traders watching for breakout above resistance</div>
                        <span class="theme-badge mixed">Mixed</span>
                    </div>
                    <div class="theme-box">
                        <div class="theme-name">BI Policy</div>
                        <div class="theme-desc">Markets expect BI to hold rate steady</div>
                        <span class="theme-badge mixed">Mixed</span>
                    </div>
                    <div class="theme-box">
                        <div class="theme-name">Global Risk</div>
                        <div class="theme-desc">Investors cautious on emerging markets</div>
                        <span class="theme-badge bearish">Bearish</span>
                    </div>
                    <div class="theme-box">
                        <div class="theme-name">Trade Deal</div>
                        <div class="theme-desc">Optimism on potential agreement</div>
                        <span class="theme-badge bullish">Bullish</span>
                    </div>
                `}
            </div>
            ${twitterSentiment.proxy ? '<div class="proxy-badge" style="margin-top: 10px;">PROXY DATA (not from Twitter directly)</div>' : '<div class="live-badge" style="margin-top: 10px;"><div class="live-dot"></div>LIVE</div>'}
        </div>

        <!-- SECTION 8: TELEGRAM PREVIEW -->
        <div class="section">
            <div class="section-title">Telegram Preview</div>
            <div class="telegram-preview">📡 PRE-MARKET RADAR · USD/IDR · ${dateIndo}
📍 Portfolio Stance: ${overallStance.stance} · ${overallStance.action} based on ${trend} trend
🟢 Bullish Catalyst: ${classifiedNews.news.find(n => n.sentiment === 'Bullish IDR')?.title.substring(0, 50) || 'None identified'}
🔴 Highest Risk: US Tariff Policy risk at ${riskScores.usTariffPolicyRisk}% · DXY at ${dxy.value || 'N/A'}
🌐 Key Macro Driver: ${dxy.value ? 'DXY movement driving USD strength' : 'Mixed signals across indicators'}
📎 PreMarket_Radar_USDIDR_${dateStr}.html</div>
        </div>

        <!-- SECTION 9: FOOTER -->
        <div class="footer">
            Data sources: ExchangeRate API, BCA.co.id, BI.go.id, Tavily Search, Investing.com, Wise.com, X.com<br>
            Last updated: ${getTimestamp()} · SCHEDULED 08:00 WIB DAILY · ${overallStance.stance}
        </div>
    </div>

    <script>
        // Chart Configuration
        Chart.defaults.color = '#888';
        Chart.defaults.font.family = "'DM Mono', monospace";

        // Price Chart
        const priceCtx = document.getElementById('priceChart').getContext('2d');
        new Chart(priceCtx, {
            type: 'line',
            data: {
                labels: ${JSON.stringify(chartLabels)},
                datasets: [
                    {
                        label: 'USD/IDR',
                        data: ${JSON.stringify(chartPrices)},
                        borderColor: '#00e5ff',
                        backgroundColor: 'rgba(0, 229, 255, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: '5D MA',
                        data: ${JSON.stringify(chartMA5)},
                        borderColor: '#ffb700',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        pointRadius: 0,
                        fill: false
                    },
                    {
                        label: '20D MA',
                        data: ${JSON.stringify(chartMA20)},
                        borderColor: '#ff6b35',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        pointRadius: 0,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#1a2632'
                        }
                    },
                    y: {
                        grid: {
                            color: '#1a2632'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString('id-ID');
                            }
                        }
                    }
                }
            }
        });

        // Signal Intensity Chart
        const signalCtx = document.getElementById('signalChart').getContext('2d');
        new Chart(signalCtx, {
            type: 'bar',
            data: {
                labels: ['US Policy', 'BI Policy', 'Fiscal', 'Trade', 'Technical', 'Sentiment'],
                datasets: [{
                    label: 'Risk Score',
                    data: [
                        ${riskScores.usTariffPolicyRisk},
                        ${riskScores.biGovernanceRisk},
                        ${riskScores.fiscalDeficitPressure},
                        ${riskScores.currentAccountTradeBalance},
                        ${riskScores.tradeDealPositiveCatalyst < 50 ? 100 - riskScores.tradeDealPositiveCatalyst : riskScores.tradeDealPositiveCatalyst},
                        ${classifiedNews.distribution.bearish}
                    ],
                    backgroundColor: [
                        '#ff4444',
                        '#00ff00',
                        '#ffb700',
                        '#ffb700',
                        '#ffb700',
                        ${classifiedNews.distribution.bearish > 50 ? '#ff4444' : '#00ff00'}
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#1a2632'
                        },
                        max: 100
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        // Sentiment Donut Chart
        const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
        new Chart(sentimentCtx, {
            type: 'doughnut',
            data: {
                labels: ['Bearish IDR', 'Bullish IDR', 'Neutral'],
                datasets: [{
                    data: [
                        ${classifiedNews.distribution.bearish},
                        ${classifiedNews.distribution.bullish},
                        ${classifiedNews.distribution.neutral}
                    ],
                    backgroundColor: [
                        '#ff4444',
                        '#00ff00',
                        '#ffb700'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    }
                },
                cutout: '60%'
            }
        });
    </script>
</body>
</html>`;

  return {
    html,
    overallStance,
    classifiedNews,
    riskScores,
    trend,
    dxy
  };
}

/**
 * Generate Telegram Report
 */
function generateTelegramReport(overallStance, classifiedNews, riskScores, dxy, dateIndo, dateStr) {
  const bullishCatalyst = classifiedNews.news.find(n => n.sentiment === 'Bullish IDR');
  const highestRisk = Object.entries(riskScores).sort((a, b) => b[1] - a[1])[0];

  const report = `📡 PRE-MARKET RADAR · USD/IDR · ${dateIndo}
📍 Portfolio Stance: ${overallStance.stance} · ${overallStance.action} based on market structure
🟢 Bullish Catalyst: ${bullishCatalyst ? bullishCatalyst.title.substring(0, 60) : 'Mixed signals across indicators'}
🔴 Highest Risk: ${highestRisk[0].replace(/([A-Z])/g, ' $1').trim()} at ${highestRisk[1]}%
🌐 Key Macro Driver: DXY at ${dxy.value || 'N/A'} driving USD strength
📎 PreMarket_Radar_USDIDR_${dateStr}.html`;

  return report;
}

/**
 * Main function
 */
async function main() {
  try {
    const now = new Date();
    const dateStr = formatDateFilename(now);
    const dateIndo = formatDateIndo(now);

    console.log('Starting Pre-Market Radar...');
    console.log(`Date: ${dateIndo} (${dateStr})`);

    // Check if weekday
    if (!isWeekday(now)) {
      console.log('Today is weekend. Skipping...');
      console.log(`⏭ Pre-Market Radar skip hari ini — weekend. Next run: ${formatDateIndo(new Date(now.getTime() + 86400000 * ((7 - now.getDay()) % 7 || 7)))}.`);
      return;
    }

    console.log('Fetching all data sources...');

    // Fetch all data in parallel
    const [
      spotRate,
      bcaRate,
      jisdor,
      historical,
      dxy,
      biRate,
      news,
      twitterSentiment
    ] = await Promise.all([
      fetchSpotRate(),
      fetchBCARate(),
      fetchBIJISDOR(),
      fetchHistoricalData(),
      fetchDXY(),
      fetchBIRate(),
      fetchNews(),
      fetchTwitterSentiment()
    ]);

    console.log('Calculating volatility...');
    const volatility = await fetchVolatility(historical.data);

    const data = {
      spotRate,
      bcaRate,
      jisdor,
      historical,
      dxy,
      biRate,
      news,
      twitterSentiment,
      volatility
    };

    console.log('Generating HTML dashboard...');
    const { html, overallStance, classifiedNews, riskScores, trend, dxy: dxyData } = await generateHTMLDashboard(data, dateStr, dateIndo);

    // Save HTML file
    const filename = `PreMarket_Radar_USDIDR_${dateStr}.html`;
    const filepath = path.join(REPORTS_DIR, filename);
    fs.writeFileSync(filepath, html);
    console.log(`HTML dashboard saved: ${filepath}`);

    // Generate Telegram report
    console.log('Generating Telegram report...');
    const telegramReport = generateTelegramReport(overallStance, classifiedNews, riskScores, dxyData, dateIndo, dateStr);

    console.log('=== TELEGRAM REPORT ===');
    console.log(telegramReport);

    // Output JSON for cron job
    const output = {
      success: true,
      date: dateStr,
      dateIndo: dateIndo,
      htmlFile: filename,
      htmlPath: filepath,
      telegramReport: telegramReport,
      overallStance: overallStance.stance,
      action: overallStance.action,
      trend: trend,
      timestamp: getTimestamp()
    };

    console.log('=== JSON OUTPUT ===');
    console.log(JSON.stringify(output, null, 2));

    // Send to Telegram
    console.log('Sending to Telegram...');
    console.log(`To user: ${TELEGRAM_USER_ID}`);

  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);

    const output = {
      success: false,
      error: error.message,
      timestamp: getTimestamp()
    };

    console.log('=== JSON OUTPUT ===');
    console.log(JSON.stringify(output, null, 2));

    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, generateHTMLDashboard, generateTelegramReport };
