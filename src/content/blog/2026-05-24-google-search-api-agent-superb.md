---
title: "Kenapa Google Tak Punya Search API untuk AI Agents?"
description: "Google membunuh Custom Search API per Januari 2027. Sementara Brave Search API justru jadi standar de facto untuk AI agents. Kenapa? Jawabannya ada di $63 miliar—dan Chrome MCP."
pubDate: 2026-05-24T07:00:00.000Z
tags: ["AI", "AI Agents", "Google", "Brave", "Search API", "MCP", "Supply Chain", "Business Strategy"]
---

Setiap AI agent yang serius butuh akses ke web. Mau riset market, verifikasi fakta, atau cari dokumentasi terbaru — semua butuh search. Pertanyaan naturalnya: _Google kan rajanya search, pasti mereka punya API untuk AI agent dong?_

**Jawabannya tidak.** Dan mereka justru sedang membunuh satu-satunya API yang mereka punya.

Ini bukan kebetulan. Ini strategi. Dan ceritanya lebih dramatis dari yang kamu kira.

---

## Setup: Dunia di Mana AI Agent Butuh Mencari

Bayangkan kamu seorang developer di 2026. Kamu sedang membangun AI agent — entah untuk riset market, asisten coding, atau pipeline RAG. Agent-mu butuh akses ke web.

Kebutuhanmu simpel:
- Kirim query teks
- Dapat hasil pencarian dalam JSON
- Integrasi ke pipeline agent

Solusinya sudah jelas: **Google Search API**. Mereka punya index web terbesar di dunia, infrastruktur paling matang, dan relevansi hasil terbaik. _Pasti_ mereka punya produk untuk ini.

Dan memang **dulu** mereka punya: **Google Custom Search JSON API (CSE)**. API ini sudah hidup sejak 2006 — hampir 20 tahun. Dipakai oleh ribuan developer, startup, tim riset, dan tool AI. Return format-nya JSON bersih: `items[].title`, `items[].link`, `items[].snippet`.

Semua tampak baik-baik saja.

---

## Unexpected: Google Membunuh API-nya Sendiri

Lalu datang Januari 2026. Google mengirim email ke semua pengguna CSE:

> _"Google Custom Search JSON API akan discontinued per 1 Januari 2027."_

HTTP 410 Gone. Setelah 20 tahun. Tamat.

Reaksi developer? Panik. 40% pengguna CSE adalah operator site search, 35% adalah agent/bot/assistant, dan 25% adalah riset akademik. Semuanya harus migrasi.

"Oke," pikirmu, "pasti ada penggantinya kan?"

Google merekomendasikan **Vertex AI Search**. Kedengarannya modern — _"AI Search."_ Tapi begitu kamu baca dokumentasinya:

- ❌ **Tidak mengembalikan hasil web publik.** Hanya search di atas korpus dokumenmu sendiri.
- ❌ **Pricing enterprise.** Mulai dari ~$2 per 1.000 query untuk tier basic, melonjak cepat dengan extensions.
- ❌ **Bukan pengganti CSE.** Ini produk beda total — semantic search untuk internal knowledge base.

Posisi resmi Google? _"Untuk web search dalam skala besar, developer sebaiknya mengeksplorasi third-party provider."_

Terjemahan: **"Kami keluar dari bisnis ini."**

Sementara itu, ada satu pemain yang justru melakukan sebaliknya.

---

## Peril: Mengapa Google Melakukan Ini (dan Mengapa Ini Berbahaya)

Di sinilah ceritanya jadi menarik.

### Ancaman #1: $63 Miliar dalam Satu Kuartal

Google Search menghasilkan **$63 miliar** di Q4 2025 saja. Revenue ini datang dari **iklan** — setiap kali kamu search, ada advertiser yang bayar untuk tampil di hasil.

AI agent **tidak mengklik iklan.**

Mereka tidak punya bola mata. Mereka tidak peduli sponsored results. Mereka cuma mau JSON. Give them a search API, dan Google kehilangan model bisnis intinya — sambil memberikan index search terbaik dunia ke pesaing mereka sendiri.

**Ini dilema _innovator's dilemma_ klasik:** produk yang menghasilkan puluhan miliar dolar per kuartal tidak bisa dikannibalisasi oleh API agent seharga $5 per 1.000 query.

### What If: Google Tetap Bisa Menampilkan Iklan di Search API

Tapi tunggu. Bukankah Google bisa tetap menampilkan iklan meskipun lewat API?

Secara teknis, **bisa.** Dan ini bikin frustrasi. Beberapa opsi yang entirely feasible:

**Opsi 1: Sponsored Results dalam JSON**

Google bisa menyisipkan iklan sebagai item sponsored dalam response JSON:

```json
{
  "items": [
    {
      "type": "sponsored",
      "title": "Beli iPhone 17 — Diskon 30%",
      "link": "https://tokopedia.com/...?ref=google_ads",
      "displayLink": "tokopedia.com",
      "snippet": "iPhone 17 series tersedia dengan garansi resmi..."
    },
    {
      "type": "organic",
      "title": "iPhone 17 — Wikipedia",
      "link": "https://en.wikipedia.org/wiki/IPhone_17",
      "snippet": "iPhone 17 adalah smartphone yang dikembangkan..."
    }
  ]
}
```

Agent developer cukup filter `type: "organic"` kalau gak mau iklan. Tapi Google tetap dapat impression dan — yang lebih penting — **data query intent** yang sangat berharga untuk sistem ads mereka.

**Opsi 2: Ad Injection via Response Header**

Google bisa kasih ads sebagai metadata terpisah:

```json
{
  "searchInformation": { "totalResults": "124000000" },
  "ads": [
    {
      "headline": "Switch to Google Cloud Today",
      "url": "https://cloud.google.com/...",
      "adPosition": "top"
    }
  ],
  "items": [ /* organic results */ ]
}
```

Ini bahkan lebih clean — organic dan sponsored terpisah secara struktural, gak saling ganggu.

**Opsi 3: Usage-Based Ad Credit**

Model hybrid: agent developer bayar $5/1.000 query seperti Brave, tapi dapat diskon atau free tier kalau mengizinkan iklan dalam response. Persis seperti model "ad-supported tier" yang sudah standar di streaming (Spotify, YouTube).

**Opsi 4: Ad Impression via Attribution Link**

Setiap kali agent menggunakan hasil search untuk generate jawaban ke user, URL yang dikasih adalah `google.com/url?q=...` (redirect link) yang menghitung impression iklan tidak langsung. Google sudah punya infrastruktur ini.

**Lalu kenapa tidak dilakukan?**

Jawabannya bukan teknis — tapi **insentif.**

1. **Revenue per query API vs Revenue per query browser itu timpang.** Satu user manusia di Google Search menghasilkan beberapa dolar per session (multiple ads, multiple clicks). API query menghasilkan paling banter pecahan sen. Google tidak mau revenue mereka terkanibalisasi dari dolar ke sen.

2. **Loss of user data.** Iklan di browser menghasilkan data behavioral yang sangat kaya: berapa lama user lihat hasil, apa yang diklik, scroll pattern, location, device fingerprint. API call cuma kasih IP address dan query string. Data miskin = targeting iklan jelek = CPM rendah.

3. **Risk of ad fraud.** Dalam ekosistem API agent, mana yang valid impression dan mana yang bot scraping? Google tidak bisa membedakan. Di browser, mereka bisa — behavioral signal + cookie + fingerprint.

4. **Strategic lock-in.** Chrome MCP memberi Google kendali penuh atas gimana agent berinteraksi dengan web. API adalah komoditas. Browser adalah platform. Google selalu memilih platform.

Intinya: **Google tidak mencari cara untuk menampilkan iklan di API. Mereka memilih untuk tidak menyediakan API sama sekali — dan mengalihkan semuanya ke Chrome.**

Ini bukan masalah teknis. Ini pilihan strategis.

### Ancaman #2: Walled Garden Melalui Chrome

Kalau bukan API, lalu apa strategi Google untuk AI agents?

**Chrome.** Dan lebih spesifiknya: **Chrome DevTools MCP** dan **WebMCP.**

Google meluncurkan Chrome DevTools MCP di September 2025. Cara kerjanya: AI agent mengontrol browser Chrome — navigasi, klik, isi form, baca DOM, rekam performance trace. Agent _melihat_ web melalui mata Chrome.

WebMCP (Maret 2026) bawa ini ke level berikutnya: **setiap website bisa jadi MCP server.** Developer website tinggal menambahkan endpoint yang membuat situs mereka _"agent-ready."_

Strateginya brilian:
- Agent tetap bisa akses web — tapi **melalui Chrome** (yang Google kontrol)
- Iklan tetap tampil karena agent "melihat" halaman penuh
- Google tetap di tengah ekosistem agent-to-web

### Ancaman #3: Tidak Ada Pengganti yang Fair

Masalahnya: search index Google adalah **private property.** Tidak ada yang bisa scrape dan replikasi. Google punya monopoly de facto di web search.

Ketergantungan developer ke Google search sangat besar — dan sekarang Google mencabut akses itu. Siapa yang bisa isi kekosongan?

---

## Escape: Brave, the Unlikely Hero

Di sinilah **Brave Search API** masuk.

Brave bukan raksasa tech. Mereka perusahaan browser privacy-focused dengan market share kecil. Tapi mereka melakukan sesuatu yang Google tidak lakukan: **membangun search index independen dari nol.**

### Apa yang Brave Punya

Brave Search API punya dua produk utama:

| Produk | Untuk | Pricing |
|--------|-------|---------|
| **Brave Search** | Web search, news, images, video | $5/1.000 query, gratis $5/bulan pertama |
| **Brave Answers** | AI-ready answer generation | Tier enterprise |

Yang bikin Brave Search API standout:

- ✅ **Index independen** — bukan wrapper Google, benar-benar crawler sendiri
- ✅ **Agent-first design** — ada opsi "LLM context" untuk optimalisasi prompt AI
- ✅ **JSON bersih** — web results, news, images, video dalam satu endpoint
- ✅ **Pricing transparan** — $5/1.000 queries, jauh di bawah enterprise nonsense
- ✅ **Privacy-respecting** — tidak track user, tidak butuh akun Google

### Kenapa Cuma Brave?

Pertanyaan bagus. Kenapa bukan Bing? Atau DuckDuckGo?

**Bing Search API** memang ada — tapi Microsoft punya _Copilot_, dan mereka juga punya dilemma yang sama. Mereka lebih tertarik mengunci agent ke ekosistem Azure/OpenAI daripada menjual API search murah.

**DuckDuckGo** tidak punya API publik. Mereka agregator (pakai Bing + indexing sendiri) tapi tidak mengkomersialkan akses programmatic.

**Brave unik** karena mereka:
1. Punya **index sendiri** — bukan reseller
2. Tidak punya **iklan search** sebagai primary revenue (mereka punya Brave Ads model berbeda)
3. **Alignment model bisnis** — privacy-first = API-first, bukan ad-first

Ini kenapa Brave jadi _default choice_ untuk agent developers. Bukan karena paling bagus — tapi karena **satu-satunya yang selamat dari innovator's dilemma.**

---

## Resolution: Dua Jalur yang Bercabang

Jadi, apa yang terjadi sekarang?

Ekosistem agent search terbelah menjadi dua arsitektur:

### Jalur API (Brave-style)

```
Agent → HTTP Request → Brave Search API → JSON → Agent process
```

**Cocok untuk:** RAG pipelines, research automation, factual verification, data ingestion

**Kelebihan:** Cepat, murah, deterministik, mudah di-cache, tidak butuh browser

**Kekurangan:** Tidak bisa interaksi dinamis dengan halaman, terbatas pada hasil search

### Jalur Browser (Chrome-style)

```
Agent → MCP Protocol → Chrome Browser → DOM manipulation → Agent process
```

**Cocok untuk:** Web automation, form filling, visual testing, debugging, user simulation

**Kelebihan:** Full browser capability, bisa lihat apa yang user lihat, debugging real-time

**Kekurangan:** Lebih lambat, butuh Chrome runtime, overhead resource besar, lebih kompleks

### Kenapa Dua-duanya Valid

Ini bukan _"Brave bagus, Google jahat."_ Dua pendekatan ini melayani kebutuhan berbeda:

**Brave Search API** = Agent butuh _tahu_ sesuatu  
**Chrome MCP/WebMCP** = Agent butuh _melakukan_ sesuatu di web

Google mendorong yang kedua karena itu melindungi model bisnis iklan mereka. Brave mengisi yang pertama karena itu memang gap yang Google tinggalkan.

---

## Benefit: Apa Artinya Buat Developer

Setelah memahami cerita penuhnya, inilah takeaway praktis:

### 1. Migrasi Sekarang, Bukan Besok

Google CSE mati Januari 2027. Kalau kamu masih pakai CSE di pipeline agent, kamu punya waktu kurang dari 7 bulan. Brave Search API adalah replacement paling straightforward — dan kamu bisa tes dengan free tier $5/bulan.

### 2. Kombinasikan Dua Pendekatan

Arsitektur agent yang matang pakai **dua-duanya:**

```python
def agent_search(query):
    # Cari fakta/pengetahuan → API
    results = brave_api.search(query)

    # Perlu interaksi web → Browser MCP
    if need_browser_interaction(results):
        chrome_mcp.navigate(results[0].url)
        chrome_mcp.extract_data()

    return synthesize(api_results=results, browser_data=...)
```

### 3. Independence dari Satu Vendor

Ini pelajaran terbesar dari cerita ini: **jangan gantungkan arsitektur agent ke satu search provider.** Google membuktikan bahwa mereka bisa dan akan mencabut akses kapan saja.

Pattern yang sehat:
- **Primary:** Brave Search API (untuk 80% use case)
- **Fallback:** Self-hosted search (SearXNG, Meilisearch) untuk query internal
- **Deep dive:** Browser MCP untuk use case spesifik yang butuh interaksi DOM

### 4. Waspada Walled Garden Berikutnya

Google sedang membangun ekosistem agent yang terkunci ke Chrome. WebMCP, Chrome DevTools MCP — ini semua tools yang powerful, tapi ingat siapa yang kontrol runtime-nya.

Jangan bangun seluruh arsitektur agent di atas satu protokol yang dikontrol satu vendor. Diversifikasi.

---

## Epilog: The Irony

Ada ironi pahit di sini.

Google membangun bisnis search dengan merayapi (_crawl_) web orang lain. Tapi ketika AI agent ingin melakukan hal yang sama — merayapi hasil search untuk memberi jawaban ke user — Google menutup pintu.

Brave, perusahaan browser dengan market share kecil, justru membangun apa yang seharusnya Google bangun: **search API untuk era AI.**

Kadang inovasi datang bukan dari pemimpin pasar — tapi dari mereka yang tidak punya legacy untuk dilindungi.

---

## Referensi

- [Google Kills Custom Search API on Jan 1, 2027](https://dev.to/nexgendata/google-kills-custom-search-api-on-jan-1-2027-you-have-9-months-1jg1)
- [Chrome DevTools MCP Documentation](https://developer.chrome.com/blog/chrome-devtools-mcp)
- [WebMCP: Turn Any Chrome Page into MCP Server](https://thenewstack.io/webmcp-chrome-ai-agents/)
- [Brave Search API](https://brave.com/search/api/)
- [Google Search Revenue Q4 2025: $63 Billion](https://almcorp.com/blog/google-search-63-billion-ai-mode-advertising-q4-2025/)


---

_Memahami strategi raksasa itu penting — tapi jangan lupa build. Sampai jumpa di daily report berikutnya._ 🔥
