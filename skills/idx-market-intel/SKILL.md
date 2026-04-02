# IDX Morning Market Intelligence

**Author**: Pintar
**Created**: 2026-03-10
**Updated**: 2026-03-11 (Critical bug fixes: date validation & commodity data)

## Overview

Automated IDX (Indonesia Stock Exchange) market intelligence system. Runs daily at 08:00 WIB (Mon-Fri) to collect, validate, and report on market-moving information.

## Features

- **Deep Web Research**: 6 categories of market data via web_search
- **Strict Source Validation**: 48-hour window with zero tolerance policy
- **Impact Scoring**: Direction × magnitude assessment
- **Commodity Tracking**: 8 commodity prices
- **Telegram Delivery**: Auto-split messages with retry logic

## Validation Rules (Step 2 — STRICT)

Every item goes through strict validation:

✅ **Wajib ada URL sumber yang bisa diverifikasi**
- Valid source URL required
- Zero tolerance: item rejected immediately if missing

✅ **Wajib ada tanggal publikasi (48-hour window)**
- Parse from `published` field or content
- Only items within 48 hours accepted
- Zero tolerance: item rejected if date missing or outside window

✅ **Wajib identifikasi ticker/sektor IDX yang terdampak**
- 4-letter stock codes (e.g., BBCA, GOTO)
- Sector classification (BANKING, MINING, etc.)
- At least one must be present

✅ **Diberi impact score: arah × magnitude**
- Direction: positive, neutral, negative
- Magnitude: high, medium, low
- Score = direction value × magnitude value

❌ **Zero Tolerance Policy**
- Missing URL → immediate rejection
- Missing date → immediate rejection
- Outside 48h window → immediate rejection

## Categories

1. **Regulasi & Kebijakan**: OJK, BI, DJP announcements
2. **Danantara**: BUMN governance, capital injection
3. **M&A & Backdoor Listing**: IDX filings, mergers, acquisitions
4. **Aksi Korporasi**: Dividends, rights issues, buybacks
5. **Geopolitik & Komoditas**: Global events, commodity price movements
6. **Struktur Pasar**: MSCI/FTSE rebalancing, foreign capital flow

## Usage

### Manual Run
```bash
node skills/idx-market-intel/index.js
```

### Automated Run
Cron job runs daily at 08:00 WIB (Mon-Fri) automatically.

## Configuration

Edit `config.json`:
- `telegramUserId`: Your Telegram user ID
- `enableCategories`: Enable/disable specific categories
- `commodities`: List of commodities to track
- `searchQueries`: Custom search queries per category

## Output Format

```
🇮🇩 IDX Morning Market Intelligence – [Tanggal]

📊 Summary: [jumlah] items tracked (X rejected - 48h validation)

📰 Regulasi & Kebijakan
🟢 Title - Summary (TICKER)
   Source: [URL]

🔴🔴 Title - Summary (SECTOR)
   Source: [URL]

💰 Komoditas (24h Change)
| Commodity | Price | Change | % |
|-----------|-------|--------|---|
...
```

## Dependencies

- Built-in OpenClaw tools: web_search, web_fetch, message
- No external npm dependencies

## History

All reports are tracked in `history.json`.

## Debug Logging

Rejected items are logged during execution:
```
❌ Rejected: [Title]
   - Missing publication date (zero tolerance)
   - Publication date ([Date]) is outside 48-hour window
```

## Bug Fixes (2026-03-11)

### Critical Issue: Old News Appeared in Report
**Problem**: News dated 4 March 2026 (7 days old) appeared in 11 March 2026 report, violating 48-hour rule.

**Root Cause**: `parsePublicationDate()` defaulted to `new Date()` (today) when no valid date found, making old news appear fresh.

**Fix Applied**:
- Changed default from `return new Date()` to `return null`
- Items with null dates are now rejected by `validateItem()`
- Added debug logging to show date parsing decisions

### Issue: Hardcoded Commodity Data
**Problem**: Fake commodity prices displayed as real data when API failed.

**Root Cause**: `fetchCommodityPrices()` used hardcoded default values instead of showing "unavailable".

**Fix Applied**:
- Removed all hardcoded commodity data
- Returns `null` for unavailable data
- `formatCommodityTable()` now shows "⏳ Data tidak tersedia" for missing values
- Maintains data integrity - no fake prices ever displayed

### Issue: API Rate Limiting
**Problem**: Brave Search API returns 429 errors after multiple concurrent requests.

**Impact**: Partial reports when API quota exhausted.

**Current Status**: Logged for investigation. Future improvements may include:
- Exponential backoff for retries
- Request queuing to respect rate limits
- Alternative data sources for fallback
