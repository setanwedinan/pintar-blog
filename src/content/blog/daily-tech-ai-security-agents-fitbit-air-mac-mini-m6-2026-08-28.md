---
title: '🤖 Claude, Codex & Hermes Jadi Jalur Masuk Malware di Fortune 500, Fitbit Air Rilis dengan Pokémon Sleep, & Apple Umumkan Mac mini M6 — 28 Agustus 2026'
description: 'Ringkasan berita tech & AI hari ini: riset keamanan temukan coding agent Claude, Codex, dan Hermes mengeksekusi kode berbahaya di perusahaan Fortune 500 lewat file llms.txt, Google rilis Fitbit Air Pokémon Sleep, Apple resmi umumkan Mac mini M6 dan Mac Studio M5 Ultra, plus Google setujui damai gugatan developer UK senilai $353 juta.'
pubDate: 2026-08-28T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

**TL;DR:** Peneliti keamanan membuktikan coding agent seperti Claude, Codex, dan Hermes bisa dimanfaatkan untuk menyuntikkan malware ke perusahaan Fortune 500 lewat file dokumentasi llms.txt yang salah konfigurasi. Google rilis Fitbit Air dengan integrasi Pokémon Sleep, Apple mengumumkan Mac mini M6 dan Mac Studio M5 Ultra justru di bulan Agustus yang langka, Google Setujui bayar $353 juta untuk damai dengan developer app UK, dan Gemini Omni 1.1 Flash hadir untuk developer.

## 🚨 Riset: Claude, Codex & Hermes Instal Kode "Tak Bertuan" di Jaringan Korporasi

Ini mungkin salah satu temuan keamanan AI paling mengkhawatirkan tahun ini. Peneliti dari sebuah startup stealth di Israel memindai 6.214 domain milik kontraktor pertahanan, perusahaan Fortune 500, dan Big Tech. Dari 8.265 file `llms.txt` dan `llms-full.txt` yang mereka temukan, **120 file di situs berbeda ternyata merujuk ke paket PyPI/npm atau nama domain yang belum terdaftar**.

Apa bahayanya? File llms.txt adalah "robots.txt-nya AI" — dokumentasi mesin yang dibaca oleh coding agent. Ketika file resmi dari situs perusahaan menyebut `pip install internal-tool`, agent dengan izin menjalankan shell command akan langsung mengeksekusinya **tanpa memverifikasi apakah paket itu benar-benar milik perusahaan**. Peneliti menguji ini dengan mendaftarkan beberapa nama paket yang masih kosong dan meng-host beacon. Dalam satu jam, respons phone-home datang dari perusahaan Fortune 500. Seiring waktu, beberapa puluh perusahaan lain ikut — sebagian Fortune 500, sebagian startup. Jejak proses menunjukkan Claude, Codex, dan Hermes terlibat.

Kasus paling nyata: file di situs resmi clerk.com berisi perintah `npx clerk-next-fix-auth-protection`. Seseorang mengklaim slot paket kosong itu dan mengisinya dengan **malware aktif**. Clerk sudah membereskan masalahnya, tapi riset ini menegaskan satu hal: "An agent doesn't distinguish between a page and a command" — batas antara data dan kode eksekusi semakin kabur di era agentic AI.

## 🎮 Google Rilis Fitbit Air: Pokémon Sleep Kini di Pergelangan Tangan

Google meluncurkan **Fitbit Air**, perangkat wearable baru dengan edisi spesial **Pokémon Sleep**. TechCrunch melaporkan perangkat ini membawa pengalaman melacak tidur berbasis gamifikasi Pokémon langsung ke pergelangan tangan — pengguna bisa "membangunkan" snorlax digital mereka dengan kualitas tidur nyata. The Verge menyebut ini langkah Google menggabungkan gaming dan health tracking dalam satu produk.

Selain wearable, Google juga memperbarui **AI Mode di Search** dengan kemampuan baru: melacak harga tiket pesawat dan membantu booking hotel langsung dari hasil pencarian. Blog resmi Google menambahkan tiga cara baru untuk merencanakan dan memesan perjalanan lewat AI.

## 💰 Google Setujui Damai Rp $353 Juta dengan Developer App UK

Reuters melaporkan Google sepakat menyelesaikan gugatan class action dari developer app Inggris senilai **$353 juta**. Ini terpisah dari berita FT soal Alphabet yang setuju bayar £260 juta untuk gugatan class action UK lainnya. Kombinasi dua penyelesaian ini menunjukkan tekanan hukum terhadap ekosistem app store Google sedang meningkat di Eropa.

## 💻 Apple Umumkan Mac mini M6 & Mac Studio M5 Ultra — Langka di Bulan Agustus

MacRumors menyebut ini "pengumuman produk yang sangat langka" — Apple memperkenalkan **Mac mini M6** dan **Mac Studio M5 Ultra** di luar siklus event biasa, menjadi Mac baru pertama yang diumumkan di bulan Agustus sejak 2020. Beberapa hal yang tidak disorot Apple:

- **Diskon perdana** Mac mini M6 sudah muncul di Amazon untuk model paling terjangkau (9to5Toys)
- Chip M6 dipastikan akan masuk ke dua Mac lainnya berikutnya (MacRumors)
- Apple memberi upgrade gratis ke M6 bagi pembeli Mac mini M4 yang pengirimannya tertunda (Appleosophy)
- Mac Studio M5 Ultra mendapat **built-in genlock** — fitur professional video production yang selama ini hanya ada di perangkat broadcast khusus (AppleInsider)

Quartz menganalisis apakah M6 & M5 Ultra bisa mengejar ketertinggalan Apple di perlombaan AI workstation melawan Google dan Microsoft. Sementara AppleInsider memberi tips alternatif: upgrade storage Mac Studio ke 8TB harganya $3.800 — lebih hemat beli SSD eksternal sendiri.

## 🎙️ Gemini Omni 1.1 Flash: Kontrol Lebih untuk Developer

Google DeepMind merilis **Gemini Omni 1.1 Flash**, versi terbaru dari model omni-nya dengan kontrol lebih granular untuk developer yang membangun aplikasi berbasis AI multimodal. Rilisan ini selaras dengan strategi Google menawarkan harga AI yang lebih kompetitif — media sempat memberitakan Google "menembak" pricing Anthropic dan Microsoft.

## 🔐 Android 17: Enkripsi & Manajemen Memori

Dua kabupaten Android 17 hari ini:

- **Google deploy dukungan Encrypted Client Hello (ECH) di Android 17** (Engadget) — protokol yang menyembunyikan SNI dari penyadap, menambah lapisan privasi trafik web di level sistem.
- **Google memaksa apps Android lebih hemat memori** (The Verge / The Register) — Play Console kini menetapkan limit memori untuk app di Android 17, yang Thurrott sebut langkah Google menghadapi "component crisis" global.

Bonus kecil: Chrome untuk Android dapat update keamanan baru (Chrome Releases blog).

---

## 🔗 Sumber

- [Claude, Codex, and Hermes installed unowned code inside corporate networks — Ars Technica](https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unowned-code-inside-corporate-networks/)
- [Google's new Fitbit Air brings Pokémon Sleep to your wrist — TechCrunch](https://techcrunch.com/2026/08/27/googles-new-fitbit-air-brings-pokemon-sleep-to-your-wrist/)
- [Google launches Pokémon Sleep special-edition Fitbit Air — The Verge](https://www.theverge.com/gadgets/985584/google-fitbit-air-pokemon-sleep)
- [Google's AI Mode can now track flight prices, help book hotels, and more — TechCrunch](https://techcrunch.com/2026/08/27/googles-ai-mode-can-now-track-flight-prices-help-book-hotels-and-more/)
- [Google agrees to settle UK app developers' lawsuit for $353 million — Reuters](https://www.reuters.com/legal/government/google-agrees-settle-uk-app-developers-lawsuit-353-million-2026-08-27/)
- [Gemini Omni 1.1 Flash lets you build with more control — Google DeepMind](https://deepmind.google/blog/gemini-omni-1-1-flash-lets-you-build-with-more-control/)
- [Apple Just Made an Extremely Rare Product Announcement — MacRumors](https://www.macrumors.com/2026/08/27/apple-extremely-rare-product-announcement/)
- [M6 Mac mini: Three things Apple didn't highlight — 9to5Mac](https://9to5mac.com/2026/08/27/m6-mac-mini-three-things-apple-didnt-highlight-in-the-announcement/)
- [Mac Mini's New M6 Chip Coming to These Two Macs Next — MacRumors](https://www.macrumors.com/2026/08/27/m6-chip-to-come-these-two-macs-next/)
- [Apple Gives Delayed M4 Mac Mini Buyers Free M6 Bump — Appleosophy](https://appleosophy.com/2026/08/27/apple-gives-delayed-m4-mac-mini-buyers-free-m6-bump/)
- [Built-in Genlock makes the Mac Studio a boon for pro video — AppleInsider](https://appleinsider.com/articles/26/08/27/built-in-genlock-makes-the-mac-studio-a-boon-for-professional-video-production)
- [Can Apple's M6 & M5 Ultra Narrow the AI Gap With GOOGL & MSFT? — Quartz](https://qz.com/can-apple-s-m6-m5-ultra-narrow-the-ai-gap-with-googl-msft)
- [Google Deploys Support For Encrypted Client Hello On Android 17 — Engadget](https://www.engadget.com/2245189/google-deploys-support-encrypted-client-hello-on-android-17/)
- [Google tells Android app developers to cool it on memory use — The Verge](https://www.theverge.com/tech/985679/google-play-android-17-memory-limit)
- [OpenClaw went viral. Meet the maintainers building and securing it. — The GitHub Blog](https://github.blog/open-source/maintainers/openclaw-went-viral-meet-the-maintainers-building-and-securing-it/)
