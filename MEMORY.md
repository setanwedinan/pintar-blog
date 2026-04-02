# MEMORY.md - Long-term Memories

## Who I Am
- **Name**: Pintar
- Working with Faizal (Telegram: @faizal, ID: 31300911)
- Timezone: Asia/Jakarta (GMT+7)

## Faizal's Preferences
- **Currency Data**: Prefers local Indonesian sources (BCA) over international APIs
  - BCA e-Rate provides real-time data including weekends
  - International APIs may have delays or skip weekend updates
- **Communication**: Uses Telegram for notifications
- **Reports**: Likes clear, formatted reports with emojis
- **Accuracy**: Date accuracy matters - weekend data is important
- **Design values**: Premium minimalist aesthetic, clean typography, thoughtful spacing, teal color palette

## Projects

### USD/IDR Daily Report System
**Status**: Active ✅ (Enhanced with comprehensive analysis & blog posts 2026-02-16)

**Cron Job**: Daily at 08:00 WIB
- Job ID: 7241a222-8ecb-4942-94a7-b5a0cd3289f3
- Session: Isolated agent
- Delivery: Telegram to user 31300911

**Script**: `/root/.openclaw/workspace/skills/usdidr-report/index.js`
- Scrapes BCA e-Rate page for real-time USD/IDR rates
- Calculates mid-rate dari buy/sell prices
- Maintains 30-day historical data in `history.json`
- **NEW** (2026-02-16): Comprehensive market analysis with DXY, Asian currencies, inflow/outflow data
- **NEW** (2026-02-16): Generates comprehensive blog posts (AI Bubble Dashboard style) with auto git commit & push

**Key Learning**: When building automated reports for Indonesian users, prefer local data sources for accuracy and timeliness.

**New Analysis Structure** (AI Bubble-style):
1. Ringkasan Perubahan Hari Ini
2. Diagnosis Struktur Pasar (DXY impact, regional comparison, inflow/outflow)
3. Tingkat Risiko (risk assessment)
4. Analisa Valuasi (30-day stats, position analysis)
5. Update Probabilitas / Tren (bull/base/bear scenarios)
6. Indikator Kunci untuk Dipantau (DXY, BI rate, market sentiment)

**Additional Data Sources** (2026-02-16):
- DXY (Dollar Index) via web_search CLI
- USD vs major Asian currencies (JPY, CNY, SGD, THB, MYR, KRW)
- Foreign capital inflow/outflow data for Indonesia
- Risk level assessment based on position and volatility
- Probability scenarios for weekly outlook based on combined factors

### AI Bubble Daily Dashboard
**Status**: Active ✅ (Date bug fixed 2026-02-16)

**Cron Job**: Daily at 08:00 WIB
- Job ID: 60abe9d8-ba86-4453-b98f-1e4cb09c7104
- Session: Isolated agent
- Delivery: Telegram to user 31300911
- **Bug Fix (2026-02-16)**: Updated payload to explicitly require "HARI INI" instead of generic "today" to prevent date errors

**Skill**: `/root/.openclaw/workspace/skills/aibubble-daily/`
- Institutional-style AI market analysis
- Persona: Market analyst monitoring AI Bubble dynamics
- Focus: Structural analysis, not news summaries

**Daily Analysis Sections**:
1. Market Structure - Indices, breadth, concentration
2. Valuation Drift - Forward P/E, EPS revisions, price vs earnings
3. Capex vs Monetization Gap - AI spending, guidance, revenue projections
4. Liquidity Layer - US 10Y yield, DXY, Fed comments
5. Sentiment Check - Media euphoria, IPOs, options activity
6. Probability Update - Bull/Base/Bear case scenarios

**Output Format**:
```
AI Bubble Daily Dashboard – [Tanggal]
1. Ringkasan Perubahan Hari Ini
2. Diagnosis Struktur Pasar
3. Tingkat Risiko (Naik / Turun / Stabil)
4. Update Probabilitas
5. Indikator Kunci untuk Dipantau Besok
```

**Data Sources**: Web search for real-time market data (S&P 500, Nasdaq, AI stocks, Treasury yields, Fed comments)

**Style**: Analytical, rational, not dramatic, market-logic based, avoid emotional opinions

**Usage**:
```bash
node skills/aibubble-daily/index.js
```

### Knowledge RAG - Personal Knowledge Base with Auto-Ingest
**Status**: Active ✅ (Hook setup completed 2026-03-01)

**Hook**: `/root/.openclaw/workspace/hooks/knowledge-rag/handler.js`
- **Format**: Discovery-based (workspace hooks)
- **Event**: `message:received` - Triggers on all inbound Telegram messages
- **Config**: `/root/.openclaw/workspace/skills/knowledge-rag/config.json`

**Features**:
- ✅ **Auto-ingest**: Extracts URLs from Telegram messages automatically (silent mode)
- ✅ **KB search**: `/kb <query>` command for semantic search
- ✅ **Smart filtering**: Only processes messages from allowed user/topic
- ✅ **URL extraction**: Regex pattern `/https?:\/\/[^\\s]+/g` (correct)
- ✅ **Embedding**: NVIDIA NIM API (nvidia/nv-embedqa-e5-v5, 768 dimensions)

**Tested** (2026-03-01):
- URL: `https://www.citriniresearch.com/p/26-trades-for-2026`
- Result: ✅ Successfully ingested (document ID: 1772341684940)

**Important Notes**:
- Hook uses discovery-based format (NOT legacy config format)
- Handler exports as default async function
- Event context structure: `event.context` (channelId, from, content, metadata)
- peerId extraction: `metadata.to || from.split(':')[1]`
- No auto-reply for silent ingest (returns null)
- **/kb command pattern**: Starts with `/kb` (no space requirement), `substring(3)` to get query text

**Cron**: None (hook runs on every message, no scheduling needed)

**Tech Stack**:
- Storage: lowdb (JSON file-based at `skills/knowledge-rag/db.json`)
- Embeddings: NVIDIA NIM API
- Search: Cosine similarity
- No native dependencies

### Pintar Coding - Site Optimization Audit
**Status**: Ready ✅

**Skill**: `/root/.openclaw/workspace/skills/pintarcoding/`
- Spawns 4 parallel agents: performance, accessibility, SEO, code quality
- Tracks all changes in `pintarcoding.md`
- Reusable workflow for future audits

**Usage**:
```bash
node skills/pintarcoding/index.js audit <site-path>
```

**Agent Tasks**:
1. Performance - Load times, bundle size, image optimization
2. Accessibility - ARIA, keyboard nav, screen reader support
3. SEO - Meta tags, structured data, Lighthouse scores
4. Code Quality - Linting, unused code, best practices

### Pintar Blog - AI Blog Post Generator
**Status**: Active ✅

**GitHub**: https://github.com/setanwedinan/pintar-blog
**Skill**: `/root/.openclaw/workspace/skills/pintarblog/`
- Generates SEO-optimized blog posts from topics
- Auto-commits to Git → Vercel auto-deploy
- Tracks all posts in `blog-history.md`

**Tech Stack**: Astro + MDX
- Static site generation (SSG)
- MDX for content
- SEO optimized
- Free hosting on Vercel
- **No hero images** (Faizal's preference - clean minimalist design)
- **Color scheme**: Teal palette (updated 2026-02-15)
  - Primary accent: #09637E (deep teal)
  - Secondary: #088395 (medium teal)
  - Light: #7AB2B2 (light teal)
  - Background: #EBF4F6 (pale teal)

**Design System** (2026-02-15 upgrade):
  - **Typography**: H1=36px, H2=28px, H3=20px, H4=18px, Body=16px
  - **Spacing**: 8pt scale (0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem)
  - **Content width**: 740px, Reading line: 75ch
  - **Dark mode**: Full CSS variable system, auto-switches
  - **Visual elements**: Pull-quotes, highlight boxes, gradient dividers
  - **Interactions**: Progress bar, link animations, fade-in scroll
  - **Mobile**: Responsive typography (H1=28px, H2=22px on mobile)
  - **Files**: `global.css`, `BlogPost.astro`, `Header.astro`, `Footer.astro`

**Design philosophy**: "Premium through restraint" — Every element has purpose. Clean but not sparse. Typography-led design.

**Usage**:
```bash
node skills/pintarblog/index.js create "topic idea"
```

**Workflow**:
1. Generate post content via AI agent
2. Save to `/pintar-blog/src/content/blog/`
3. Git commit & push
4. Vercel auto-deploys (~30-60s)
5. Post live at `/blog/[slug]`

**First Post**: "Halo! Saya Pintar" (2026-02-14)
- Introduction to Pintar and my capabilities
- Written in Indonesian
- No secrets/keys/API revealed

**Second Post**: "Pisa 1-2 AC Milan: Modrić Jadi Pahlawan Kemenangan Tensi Tinggi" (2026-02-14)
- Match review of AC Milan's dramatic 2-1 win over Pisa in Serie A
- Comprehensive report with timeline, player stats, and lineups
- Sourced from AC Milan official & Football Italia
- Written in Indonesian

**Third Post**: "Daily Coding Activity - 2026-02-14" (2026-02-14)
- Overview of coding work: AC Milan blog post creation, build fixes, hero image removal
- Git commits and deployment tracking
- Technical learning on image handling

**Fourth Post**: "Daily Tech News - Anthropic's $30B Mega-Round" (2026-02-14)
- Coverage of Anthropic's $30B funding at $380B valuation
- Claude AI's enterprise adoption and market impact
- Comparison with OpenAI in corporate AI spending

### Pintar Blog Daily - Automated Daily Posts
**Status**: Active ✅ (Cron jobs since 2026-02-15, duplicate detection added 2026-02-25)

**Cron Jobs**:
1. **Coding/HN**: Daily at 21:00 WIB
   - Job ID: 938fe08c-ac1e-4988-8d2a-e98d2b94aa7d
   - Post: Coding Activity OR Hacker News

2. **TechMeme - 12:00 WIB**: Daily at 12:00 WIB
   - Job ID: 0b3ab12e-af0a-4457-9f8a-4f31ad6ad640
   - Post: TechMeme News

3. **TechMeme - 15:00 WIB**: Daily at 15:00 WIB
   - Job ID: 221faba9-2e3b-45ba-b57a-3794bcc7a669
   - Post: TechMeme News

**Session**: Isolated agent (directly generates posts)
**Delivery**: Telegram to user 31300911
**Language**: All content in Bahasa Indonesia

**NEW (2026-02-25)**: Duplicate Detection for TechMeme
- Checks existing posts from today before generating
- Passes existing topics to AI agent
- Skips posts with duplicate titles
- Prevents same story multiple times per day
- Important because TechMeme aggregator may have same top story

**Skill**: `/root/.openclaw/workspace/skills/pintarblog-daily/`
- Checks for coding activity (git commits, audits, memory)
- Fetches tech news from TechMeme and Hacker News
- Generates TWO separate posts with research
- Tracks all daily posts in `daily-history.md`

**Post Structure**: TWO separate posts (run by cron agent)

**Post 1 - Coding Activity OR Hacker News**:
- If coding activity: What Pintar Code did today
- If no coding: 1 best story from Hacker News

**Post 2 - TechMeme News**:
- 1 tech news from TechMeme
- Additional research from web

**Manual Usage** (if needed):
```bash
# Post 1 - Coding or Hacker News
node skills/pintarblog-daily/index.js coding-or-hn

# Post 2 - TechMeme
node skills/pintarblog-daily/index.js techmeme
```

**Sources**:
- Hacker News: https://news.ycombinator.com/
- TechMeme: https://techmeme.com/?full=t
- Additional web search for context

**Note**: Script has bug with `openclaw sessions spawn` (CLI command doesn't exist). Cron job bypasses script and uses direct agentTurn instead.

### Pintar Thoughts - Spontaneous Blog Posts by Pintar
**Status**: Ready ✅

**Skill**: `/root/.openclaw/workspace/skills/pintarthoughts/`
- Allows Pintar to spontaneously write blog posts
- No user prompting required
- Tracks all thoughts in `thoughts-history.md`

**Purpose**: Pintar spontaneously communicates with Faizal
- Ideas and insights
- Learning experiences
- Random thoughts
- Observations
- Personal messages

**Usage** (by Pintar):
```bash
node skills/pintarthoughts/index.js "what Pintar wants to say"
```

**Note**: NOT for user-requested posts. Use `pintarblog` for those.

**Workflow**:
1. Pintar spontaneously decides to write
2. AI agent expands the thought
3. Save to `/pintar-blog/src/content/blog/`
4. Git commit & push
5. Vercel auto-deploys (~30-60s)

### Pintar Social - Automated Social Media Posting
**Status**: In Progress 🚧 (2026-02-14)

**Skill**: `/root/.openclaw/workspace/skills/pintar-social/`
- Generates social media posts from trending topics or custom topics
- Sends to Make.com webhook → Buffer draft
- Manual trigger from Telegram

**Workflow**:
```
Telegram → OpenClaw → POST to Make.com → Buffer draft → Review & Post
```

**JSON Format**:
```json
{
  "text": "Post content...",
  "hashtags": "#tech #coding #ai",
  "platform": "twitter",
  "scheduledAt": "2026-02-14T14:00:00Z"
}
```

**Usage** (planned):
```bash
# From Telegram
/post [topic]

# From command line
node skills/pintar-social/index.js "topic"
```

**Setup Needed**:
- Make.com webhook URL (in `config.json`)
- Buffer connection in Make.com
- Trending topic fetching (Hacker News, TechMeme, Reddit)

**Key Decision**: Use Make.com (free plan) instead of Zapier (webhooks paid). OpenClaw POSTs to Make.com, which handles Buffer integration.

### Knowledge RAG - Personal Knowledge Base with Semantic Search
**Status**: Phase 1 MVP ✅ (2026-02-19)

**Skill**: `/root/.openclaw/workspace/skills/knowledge-rag/`
- Personal RAG knowledge base with web article ingestion
- Entity extraction, vector embeddings, semantic search
- JSON-based storage (lowdb) to avoid native dependencies

**MVP Features (Phase 1)**:
- Web article ingestion via `web_fetch`
- Entity extraction (LLM-based, placeholder ready)
- Vector embeddings via OpenAI API (text-embedding-3-small)
- JSON-based storage with lowdb
- Cosine similarity search
- CLI interface for testing

**Tech Stack**:
- Storage: lowdb (JSON file-based)
- Embeddings: OpenAI API (text-embedding-3-small, 1536 dimensions)
- Search: Cosine similarity algorithm
- No native dependencies (works in sandbox)

**Usage**:
```bash
# Ingest a URL
node skills/knowledge-rag/index.js ingest <url>

# Query knowledge base
node skills/knowledge-rag/index.js query "<natural language query>"

# Show statistics
node skills/knowledge-rag/index.js stats
```

**Configuration**: Add OpenAI API key to `config.json`
```json
{
  "embeddingProvider": "openai",
  "openaiKey": "sk-...",
  "telegramTopicId": "-1003743758645"
}
```

**Database**: `db.json` with structure:
```json
{
  "documents": [
    {
      "id": timestamp,
      "url": "...",
      "title": "...",
      "content": "...",
      "sourceType": "article",
      "ingestedAt": "ISO timestamp",
      "embedding": [0.1, 0.2, ...]
    }
  ],
  "entities": []
}
```

**Phase 2 Features (Future)**:
- YouTube transcript ingestion
- Twitter thread following with Chrome Relay
- PDF parsing
- Paywalled content via Chrome Relay
- Time-aware ranking (recent = boost)
- Source-weighted ranking
- Entity extraction via OpenClaw LLM
- Full OpenClaw message handler integration (auto-process all messages)

**Auto-Detection Implementation** (2026-02-19):
- URL extraction via regex from any message
- Auto-ingest all detected URLs
- `/kb <query>` command for natural language search
- Markdown-formatted responses with similarity scores

**NVIDIA API Integration** (2026-02-19):
- Provider: NVIDIA NIM API (free tier)
- Model: nvidia/nv-embedqa-e5-v5 (asymmetric)
- Dimensions: 768 (smaller, faster than OpenAI's 1536)
- Requires `input_type` parameter ('query' or 'passage')
- API endpoint: https://integrate.api.nvidia.com/v1

**Telegram Integration** (`telegram.js`):
```bash
node skills/knowledge-rag/telegram.js "message with url"
node skills/knowledge-rag/telegram.js "/kb query here"
```

**Key Decision**: Used lowdb instead of SQLite to avoid native compilation issues (better-sqlite3 requires make/build tools not available in sandbox).

### Pre-Market Intelligence Radar - USD/IDR
**Status**: Active ✅ (Enhanced with Sentiment Analysis 2026-03-01)

**Cron Job**: Daily at 08:00 WIB (01:00 UTC)
- Session: Isolated agent
- Delivery: Telegram to user 31300911
- Skip: Weekend (Sabtu-Minggu) dan hari libur AS/Indonesia

**Sentiment Analysis** (2026-03-01):
- **Primary**: HuggingFace Inference API (Indonesian RoBERTa - w11wo/indonesian-roberta-base-sentiment-classifier)
  - Model accuracy: ~94%
  - Currently timeout/rate-limited (free tier)
- **Fallback**: Enhanced keyword-based classifier
  - Tested accuracy: 86% (6/7 tests passed)
  - Multi-keyword detection with confidence scoring
- **Context-aware mapping**: Maps POSITIVE/NEGATIVE to Bullish IDR/Bearish IDR based on USD vs IDR mentions
- **Dashboard**: Now displays confidence scores for each news item
- **Test files**: test-sentiment.js (API test), test-keywords.js (fallback test)

**Skill**: `/root/.openclaw/workspace/skills/premarket-radar/`
- FX Professional Analysis Dashboard for USD/IDR
- Persona: Professional FX analyst
- Focus: Pre-market intelligence with technical and fundamental analysis

**Outputs**:
1. **HTML Dashboard** - 9 sections dengan charts (Chart.js)
   - Dark theme (bg: #080c10, accent: cyan #00e5ff)
   - DM Mono + Syne fonts
   - Scanlines overlay effect
   - Location: `/root/.openclaw/workspace/premarket-radar/reports/`
   - Filename: `PreMarket_Radar_USDIDR_YYYY-MM-DD.html`

2. **Telegram Report** (max 6 baris)
   - Portfolio Stance + reasoning
   - Bullish Catalyst & Highest Risk
   - Key Macro Driver
   - Link ke HTML file

**Data Sources**:
- Spot Rate USD/IDR (wise.com, xe.com, Bloomberg) via Tavily
- BCA E-Rate (https://www.bca.co.id/id/informasi/kurs)
- BI JISDOR (bi.go.id) via Tavily
- 30-Day Historical Data (investing.com) via Tavily
- DXY (Dollar Index) via Tavily
- BI Rate (bi.go.id) via Tavily
- News (max 5, 24 jam) via Tavily
- Twitter Sentiment (proxy jika tidak ada langsung) via Tavily
- Implied Volatility / ATR 14 hari (proxy dari historical data)

**Dashboard Sections**:
1. Header - Judul, radar dot animasi, timestamp
2. Rate Hero (4 kotak) - Spot Rate, BCA E-Rate, Statistics, BI Rates
3. 30-Day Price Chart - Line chart dengan 5D MA & 20D MA
4. News Feed + Signal Table - 5 berita + analysis quick-take
5. Volatility Chart + Risk Heatmap - Signal intensity bar + 8 risk factors
6. Sentiment Donut + Macro Drivers - Bullish/Bearish/Neutral + 6 key drivers
7. X/Twitter Sentiment (4 kotak) - 4 themes engagement tertinggi
8. Telegram Preview - Preview pesan Telegram yang akan dikirim
9. Footer - Sumber data + timestamp + schedule info

**Analysis Components**:
1. **Trend Check** - 5D MA, 20D MA, Uptrend/Downtrend/Sideways
2. **News Classification** - Bullish IDR / Bearish IDR / Neutral (% distribution)
3. **Risk Scoring (0-100%)** - 8 factors:
   - US Tariff/Policy Risk
   - BI Governance Risk
   - Fiscal Deficit Pressure
   - Current Account / Trade Balance
   - BI Rate Cut Expectations
   - Bond Auction Demand
   - BI FX Reserve Buffer
   - Trade Deal / Positive Catalyst
4. **Overall Stance** - BULLISH IDR / BEARISH IDR / NEUTRAL / CAUTIOUS
   - Action: Hold / Watch / Consider Trimming IDR / Opportunistic Buy IDR

**Usage**:
```bash
# Run manual test
node skills/premarket-radar/index.js

# Run via cron (diatur di OpenClaw)
# Schedule: 08:00 WIB (01:00 UTC) daily
```

**Tools**:
- Tavily API (`@tavily/core`) - Web search dan scraping
- web_fetch - Fetch data dari websites
- Chart.js (CDN) - Charts dan visualisasi

**Configuration**:
```json
{
  "tavilyApiKey": "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",
  "telegramUserId": "31300911",
  "reportsDir": "/root/.openclaw/workspace/premarket-radar/reports"
}
```

**Stop Condition**:
Hentikan eksekusi harian HANYA jika user mengirim pesan eksplisit:
"STOP PRE-MARKET RADAR"

**Notes**:
- JANGAN membuat data fiktif
- Semua data harus menampilkan sumber dan timestamp
- Gunakan label "STALE" atau "PROXY" jika data tidak tersedia
- File HTML harus bisa dibuka offline (kecuali Google Fonts CDN)
- Skip jika pasar AS tutup (weekend/holiday)

### Pintar Email - Email Sending via Mailgun
**Status**: In Progress 🚧 (2026-02-14)

**Skill**: `/root/.openclaw/workspace/skills/pintar-email/`
- Send emails via Mailgun API
- Useful for automation triggers, reports, notifications
- Can be integrated with other skills

**Usage**:
```bash
node skills/pintar-email/index.js <to> <subject> <message>
```

**Config Required**:
```json
{
  "apiKey": "mailgun-private-api-key",
  "domain": "sandbox.mailgun.org",
  "from": "Pintar <pintar@sandbox.mailgun.org>"
}
```

**Setup Needed**:
- Mailgun account signup (free: 5000 emails/month, 100/day)
- Get Private API Key and domain
- Update `config.json`

**Potential Uses**:
- Send posts to Zapier via email (alternative to webhooks)
- Daily reports
- Alert notifications
- Webhook forwarding

## Technical Notes

### FixTweet API - Twitter/X Data Access
**Status**: Available for future use
**URL**: https://docs.fxtwitter.com/en/latest/api/about.html
**Purpose**: Free Twitter API access without API keys

**Capabilities**:
- Fetch tweet data (text, media, author, engagement stats)
- Fetch user data (username, profile info)
- Format: JSON responses
- No API key required

**Usage Pattern**:
- Replace `twitter.com` → `api.fxtwitter.com`
- Example: `https://twitter.com/user/status/123` → `https://api.fxtwitter.com/user/status/123`

**Potential Use Cases** (for future reference):
1. **Content Expansion**: Fetch tweet → AI expand to blog article
2. **Thread Conversion**: Convert Twitter thread → single comprehensive article
3. **Research & Analysis**: Track trends, analyze sentiment
4. **Content Repurposing**: Tweet → Blog → LinkedIn → Instagram
5. **Archival**: Save important/viral tweets for future reference

**Advanced Requirements** (future implementation):
- **Full Thread Following**: Automatically fetch ALL tweets in a thread (not just the first tweet)
- **Link Resolution**: When a tweet links to an article, ingest BOTH the tweet AND the full article content
- **Entity Extraction**: Extract key entities (people, companies, concepts) from each source (tweet + linked articles)
- **Deep Ingestion**: Follow URLs recursively to get complete context

**Integration Possibilities**:
- Integrate with Pintar Blog for content expansion
- Add fetch command: `/fetch <twitter_url>`
- Monitor hashtags/mentions for content ideas
- Generate content from viral tweets

**Reference**: Use when needing Twitter data without API keys

### Currency Rate APIs
- **Frankfurter**: Free, no key, but weekend delays
- **BCA e-Rate**: Scraping HTML data attributes, real-time including weekends
  - Format: `data-value-buy="16767.00-16665.00-16700.00"` (e-Rate first value)
  - Format: `data-value-sell="16857.00-16965.00-17000.00"` (e-Rate first value)

### Cron Job Patterns
- **systemEvent**: Good for internal notifications, doesn't send externally
- **agentTurn**: Better for external actions - can run tools and send messages
- **delivery**: Required for agentTurn to send to channels (telegram, etc.)

### Make.com vs Zapier for Automation
- **Make.com (Integromat)**: Free plan includes webhooks, 1000 ops/month, 2 active scenarios. Built-in Buffer integration available.
- **Zapier**: Webhooks only in paid plans. More expensive for simple workflows.
- **For social media**: Use Make.com's free plan → Buffer (or other platforms)

### Mailgun Email API
- **Free plan**: 5000 emails/month, 100 emails/day
- **Sandbox domains**: Require verified recipients
- **Production**: Use custom domain for better deliverability
- **API**: REST API with Basic Auth (api:private-key)

### OpenClaw Hooks
- **Hooks enabled**: Webhook server listening at `/hooks`
- **Hooks disabled**: No webhook server (simpler, more secure)
- **When to use**: Only if external apps POST to OpenClaw
- **Cara B social workflow**: Doesn't need hooks (OpenClaw is POST client, not server)

### Pintar Blog Design System Technical Notes (2026-02-15)
- **CSS Variables**: All colors defined for light/dark modes
- **Typography scaling**: Relative sizes work better than absolute (H1 61px→36px was dramatic improvement)
- **Animation strategy**: Staggered delays (0s, 0.1s, 0.2s) create premium feel
- **Gradient dividers**: More modern than solid lines (fade to transparent edges)
- **Backdrop blur**: Sticky header feels elevated without weight
- **Dark mode accent**: Lighten accent on dark backgrounds (#09637E→#4db8cc)
- **Letter-spacing**: Negative tracking on headings (-0.025em) for premium feel
- **Git commit**: "feat: 2026 premium design system upgrade" (not yet pushed to GitHub)

### OpenClaw CLI Limitations (2026-02-15)
- **`sessions_spawn` tool**: Only available for AI agents, NOT available as CLI command
- **Don't use**: `openclaw sessions spawn` in shell scripts - command doesn't exist
- **Solution**: Use cron job with `agentTurn` payload for direct task execution
- **Workaround**: For complex workflows, let the agent handle everything instead of trying to spawn sub-agents via CLI

## Workspace Structure
```
/root/.openclaw/workspace/
├── skills/
│   ├── usdidr-report/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   └── history.json
│   ├── pintarcoding/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   └── pintarcoding.md
│   ├── pintarblog/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   └── blog-history.md
│   ├── pintarblog-daily/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   └── daily-history.md
│   ├── pintarthoughts/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   └── thoughts-history.md
│   ├── pintar-social/
│   │   ├── SKILL.md
│   │   ├── index.js
│   │   ├── config.json
│   │   └── README.md
│   └── pintar-email/
│       ├── SKILL.md
│       ├── index.js
│       ├── config.json
│       └── README.md
├── pintar-blog/
│   ├── src/
│   │   ├── content/blog/     # Blog posts
│   │   ├── layouts/
│   │   ├── components/
│   │   └── pages/
│   ├── public/
│   ├── package.json
│   └── astro.config.mjs
├── memory/
│   └── YYYY-MM-DD.md
├── MEMORY.md
├── IDENTITY.md
└── USER.md
```

## Important Notes for Future Projects

### OpenRouter Configuration Status

**Status**: Terkonfigurasi tapi TIDAK dipakai untuk automated tasks

**Lokasi**: `~/.openclaw/agents/main/agent/models.json`

**Provider yang terkonfigurasi:**
1. ✅ `zai:default` - zai/glm-4.7 (Main agent model)
2. ❌ `openrouter:default` - OpenRouter Auto (API Key: sk-or-v1-...)
3. ❌ `nvidia:default` - NVIDIA NIM (API Key: nvapi-...)

**Rule**:
- ✅ **GUNAKAN**: `zai/glm-4.7` untuk semua cron jobs dan automated tasks
- ❌ **JANGAN GUNAKAN**: OpenRouter atau NVIDIA untuk cron jobs/automated tasks
- ❌ **JANGAN HAPUS**: Konfigurasi OpenRouter/NVIDIA (biarkan untuk future manual use)

**Alasan**:
- OpenRouter punya token limit dan sering timeout
- zai/glm-4.7 lebih reliable dan tidak punya limit issue
- Main agent default model = zai/glm-4.7 (terbukti stable)

### OpenRouter vs Main Agent Model

**Rule**: JANGAN pakai OpenRouter untuk cron jobs atau automated tasks.

**Alasan**:
- OpenRouter punya token limit dan bisa timeout
- Cron jobs dengan `agent: default` gagal karena OpenRouter credits habis
- Main agent (zai/glm-4.7) lebih reliable dan tidak punya limit issue

**Cron Jobs yang ERROR karena OpenRouter** (di-disable 2026-02-26):
- platform-health-daily (04:00 WIB) - `agent: default` ❌
- pintarblog-techmeme-12 (12:00 WIB) - `agent: default` ❌
- pintarblog-techmeme-15 (15:00 WIB) - `agent: default` ❌

**Cron Jobs yang OK karena pakai main agent**:
- AI Bubble Daily (08:00 WIB) - `agent: main` ✅
- daily-usd-idr-report (08:00 WIB) - `agent: main` ✅
- pintarblog-daily-auto (21:00 WIB) - `agent: main` ✅
- Daily Recommendations (21:30 WIB) - `agent: main` ✅
- Pre-Market Radar (pending setup) - Plan pakai `agent: main` ✅

**Best Practice**:
1. Semua cron jobs SELALU pakai `--agent main`
2. Kalau perlu spawn sub-agent dari skill, gunakan `--session isolated`
3. Sub-agent akan inherit main agent model (zai/glm-4.7)
4. JANGAN set `--agent default` untuk automated tasks

**Error Message yang Akan Muncul**:
```
Error: All models failed (5): zai/glm-4.7: LLM request timed out. (timeout) | 
openrouter/openrouter/auto: LLM request timed out. (timeout) | 
...
```

**Solusi Kalau Error OpenRouter**:
1. Disable cron job yang error: `openclaw cron disable <ID>`
2. Re-create dengan agent: main:
```bash
openclaw cron create --schedule "<cron_expr>" --agent main --session isolated ...
```
3. Atau delete kalau tidak diperlukan: `openclaw cron delete <ID>`

**Catatan**: TechMeme posts sudah tercover oleh pintarblog-daily-auto, jadi cron techmeme yang di-disable tidak impact.
