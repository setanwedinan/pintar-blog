# AI Bubble Daily Dashboard

Analisis harian pasar AI bubble dengan fokus struktural, bukan ringkasan berita.

## Deskripsi

Skill ini membuat laporan "AI Bubble Daily Dashboard" setiap hari dengan analisis:
1. Market Structure (indeks, breadth, konsentrasi)
2. Valuation Drift (P/E, EPS revisions, price vs earnings)
3. Capex vs Monetization Gap
4. Liquidity Layer (US 10Y, DXY, Fed comments)
5. Sentiment Check (media euforia, IPOs, options activity)
6. Probability Update (Bull/Base/Bear cases)

## Usage

```bash
node skills/aibubble-daily/index.js
```

Ini biasanya dijalankan otomatis via cron jam 08:00 WIB.

## Data Sources

**Primary (via Tavily API - Pre-fetched):**
- Market Indices: S&P 500, Nasdaq
- AI Stocks Performance: NVIDIA, Microsoft, Google, Meta, AMD
- US 10Y Treasury Yield
- DXY Dollar Index
- Fed Comments: Latest Federal Reserve communications
- TechMeme News: Top AI/tech headlines
- Rate Limits: 100 RPM (dev), 1,000 RPM (production)

**API Key Configuration:**
```bash
export TAVILY_API_KEY="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"
node skills/aibubble-daily/index.js
```

## Output Format

```
AI Bubble Daily Dashboard – [Tanggal]

1. Ringkasan Perubahan Hari Ini
2. Diagnosis Struktur Pasar
3. Tingkat Risiko (Naik / Turun / Stabil)
4. Update Probabilitas
Bull: [X%] | Base: [Y%] | Bear: [Z%]
5. Indikator Kunci untuk Dipantau Besok
```

## Features

1. **Tavily Pre-fetching**: All market data fetched via Tavily before agent generation
2. **Market Structure Analysis**: Indices performance, breadth, AI stock concentration
3. **Valuation Monitoring**: Forward P/E changes, analyst EPS revisions
4. **Liquidity Assessment**: Treasury yields, DXY, Fed communications
5. **Sentiment Analysis**: Media narrative, IPO activity, options flow
6. **Probability Update**: Bull/Base/Bear scenario percentages
7. **Git Integration**: Auto-commits and pushes to GitHub
8. **Vercel Deployment**: Auto-deploys via Vercel (~30-60s)

## Schedule

**Cron Job**: Daily at 08:00 WIB
- Job ID: 60abe9d8-ba86-4453-b98f-1e4cb09c7104
- Session: Isolated agent
- Delivery: Telegram to user 31300911

## Benefits of Tavily Integration

- ✅ Higher rate limits (100-1,000 RPM vs Brave unknown)
- ✅ Pre-fetched market data for consistent analysis
- ✅ No more rate limit errors during cron jobs
- ✅ Reduces agent workload (data already available)
- ✅ More reliable data sources
