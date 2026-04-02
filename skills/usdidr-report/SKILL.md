# USD/IDR Daily Report Skill

Fetches USD/IDR exchange rate data and generates daily reports with Tavily Search integration.

## Usage

Run report generator:
```bash
node skills/usdidr-report/index.js
```

## Data Sources

**Primary (BCA e-Rate):**
- Endpoint: `https://www.bca.co.id/en/informasi/kurs`
- Real-time data including weekends
- Preferred by users for accuracy and timeliness

**Secondary (via Tavily API):**
- DXY (Dollar Index) - Current rate and trend
- Asian Currencies - USD/JPY, USD/CNY, USD/SGD, USD/THB, USD/MYR, USD/KRW
- Foreign Capital Inflow/Outflow - Indonesia allocation data
- Rate Limits: 100 RPM (dev), 1,000 RPM (production)

## Configuration

Set TAVILY_API_KEY environment variable:
```bash
export TAVILY_API_KEY="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"
node skills/usdidr-report/index.js
```

## Report Format

Returns JSON with:
- `report`: Formatted markdown report for Telegram
- `rate`: Current USD/IDR rate
- `date`: Report date
- `source`: Data source (BCA e-Rate)
- `stats`: 30-day statistics (highest, lowest, average)
- `change`: Change from yesterday (value and percentage)
- `trend`: Weekly trend (Naik/Turun/Stabil)
- `position`: Rate position (high/low/mid-range)

## Features

1. **Real-time BCA Data**: Scrapes BCA e-Rate HTML for current rates
2. **Historical Analysis**: Maintains 30-day history for statistics and trend analysis
3. **Market Context**: Uses Tavily API to fetch DXY, Asian currencies, and capital flow data
4. **Blog Generation**: Automatically generates comprehensive blog post with:
   - Ringkasan perubahan
   - Diagnosis struktur pasar
   - Analisa valuasi
   - Tingkat risiko
   - Update probabilitas/tren
5. **Git Integration**: Auto-commits and pushes to GitHub
6. **Vercel Deployment**: Auto-deploys via Vercel (~30-60s)

## Benefits of Tavily Integration

- ✅ Higher rate limits (100-1,000 RPM vs Brave unknown)
- ✅ No more rate limit errors during cron jobs
- ✅ Real-time market data for better analysis
- ✅ Consistent data across multiple searches

## Schedule

**Cron Job**: Daily at 08:00 WIB
- Job ID: 7241a222-8ecb-4942-94a7-b5a0cd3289f3
- Session: Isolated agent
- Delivery: Telegram to user 31300911
