# Pre-Market Intelligence Radar

## Deskripsi

Membuat "Pre-Market Intelligence Radar" untuk pasangan mata uang USD/IDR setiap hari kerja pukul 08:00 WIB. Radar ini mengumpulkan data real-time dari berbagai sumber, melakukan analisis teknikal dan fundamental, lalu menghasilkan:

1. **HTML Dashboard** - 9 sections dengan charts dan visualisasi data
2. **Telegram Report** - Ringkasan eksekutif max 6 baris

## Data Sources

### Data Wajib (Real-time)
- **Spot Rate USD/IDR** - wise.com, xe.com, Bloomberg
- **BCA E-Rate** - https://www.bca.co.id/id/informasi/kurs
- **BI JISDOR** - bi.go.id
- **30-Day Historical Data** - investing.com/currencies/usd-idr-historical-data
- **DXY (Dollar Index)** - Tavily search
- **BI Rate** - bi.go.id
- **News** - Max 5 berita, 24 jam terakhir
- **Twitter Sentiment** - Proxy jika tidak ada langsung
- **Implied Volatility** - Proxy menggunakan ATR 14 hari jika tidak tersedia

### Tools
- **Tavily API** - Untuk web search dan scraping
- **web_fetch** - Untuk fetch data dari websites
- **web_search** - Untuk search general
- **@tavily/core** - npm package untuk Tavily API

## Penggunaan

```bash
# Run manual test
node skills/premarket-radar/index.js

# Run via cron (diatur di OpenClaw)
# Schedule: 08:00 WIB (01:00 UTC) daily
# Skip: Weekend (Sabtu-Minggu) dan hari libur AS/Indonesia
```

## Output

### 1. HTML File
- Nama: `PreMarket_Radar_USDIDR_YYYY-MM-DD.html`
- Location: `/root/.openclaw/workspace/premarket-radar/reports/`
- Format: Single-file HTML dengan embed charts
- Design: Dark theme, DM Mono + Syne fonts, scanlines overlay

### 2. Telegram Report
- Format: Max 6 baris
- Sections: Stance, Bullish Catalyst, Highest Risk, Key Macro Driver, Link
- Delivery: To user ID 31300911

## Analysis Components

### 1. Trend Check
- Calculate 5D MA and 20D MA
- Determine: Uptrend / Downtrend / Sideways
- Price vs MAs position

### 2. News Classification
- **Primary method**: HuggingFace Inference API (Indonesian RoBERTa model)
  - Model: `w11wo/indonesian-roberta-base-sentiment-classifier`
  - Accuracy: ~94% on Indonesian text
  - Returns: Label (POSITIVE/NEGATIVE/NEUTRAL) + confidence score (0-1)
- **Fallback**: Keyword-based classification (when API unavailable)
  - Accuracy: ~86% (tested)
  - Multi-keyword detection with confidence scoring
- **Context-aware mapping**:
  - POSITIVE + "IDR/Rupiah" → Bullish IDR
  - POSITIVE + "USD/Dollar" → Bearish IDR (USD strengthens)
  - NEGATIVE + "IDR/Rupiah" → Bearish IDR
  - NEGATIVE + "USD/Dollar" → Bullish IDR (USD weakens)
- Distribution: % bullish, bearish, neutral
- **Confidence scores**: Displayed in dashboard for each news item

### 3. Risk Scoring (0-100%)
Factors:
- US Tariff/Policy Risk
- BI Governance Risk
- Fiscal Deficit Pressure
- Current Account / Trade Balance
- BI Rate Cut Expectations
- Bond Auction Demand
- BI FX Reserve Buffer
- Trade Deal / Positive Catalyst

### 4. Overall Stance
Options: BULLISH IDR / BEARISH IDR / NEUTRAL / CAUTIOUS
Action: Hold / Watch / Consider Trimming IDR / Opportunistic Buy IDR

## Stop Condition

Hentikan eksekusi harian HANYA jika user mengirim pesan eksplisit:
"STOP PRE-MARKET RADAR"

## Dependencies

```json
{
  "dependencies": {
    "@tavily/core": "^0.7.1",
    "@xenova/transformers": "^2.17.2"
  }
}
```

**Note**: `https`, `fs`, `path` are Node.js built-in modules (not in package.json)

## Sentiment Analysis Integration

**Method**: Hybrid approach with fallback

1. **Primary**: HuggingFace Inference API
   - Model: Indonesian RoBERTa (w11wo/indonesian-roberta-base-sentiment-classifier)
   - Free tier, no API key required
   - Context: Maps generic sentiment to FX domain (USD/IDR)

2. **Fallback**: Enhanced keyword-based classifier
   - 86% accuracy (tested)
   - Multi-keyword detection with confidence scoring
   - Automatically activates when API fails/times out

**Test files**:
- `test-sentiment.js` - Test HuggingFace API integration
- `test-keywords.js` - Test keyword-based fallback

## Configuration

`config.json`:
```json
{
  "tavilyApiKey": "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",
  "telegramUserId": "31300911",
  "reportsDir": "/root/.openclaw/workspace/premarket-radar/reports"
}
```

## Notes

- JANGAN membuat data fiktif
- Semua data harus menampilkan sumber dan timestamp
- Gunakan label "STALE" atau "PROXY" jika data tidak tersedia
- File HTML harus bisa dibuka offline (kecuali Google Fonts CDN)
- Skip jika pasar AS tutup (weekend/holiday)
