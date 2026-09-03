---
title: "⚖️ Google Lolos dari Pembubaran Bisnis Iklan, Gemini 3.8 Flash Rilis, & Apple Bilang 'Tinggalkan Intel' — 3 September 2026"
description: 'Rangkuman tech & AI 3 September 2026: Hakim Brinkema menolak membubarkan bisnis ad tech Google meski monopoli terbukti, Google meluncurkan Gemini 3.8 Flash dan varian Cyber untuk pembela siber, Apple memberi kebebasan developer meninggalkan Mac Intel, celah .git-config yang mengincar agen AI coding, dan pembahasan Decrypt soal OpenClaw 2.0 vs Hermes Agent.'
pubDate: 2026-09-03T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

**TL;DR:** Google menang besar di pengadilan — hakim Leonie Brinkema memutuskan bisnis ad tech-nya tak perlu dijual meski monopoli sudah terbukti. Gemini 3.8 Flash debut dengan varian khusus keamanan siber. Apple resmi melonggarkan syarat dukungan Mac Intel bagi developer. Di sisi keamanan, riset Manifold Security membongkar celah konfigurasi .git yang bisa membuat agen AI coding menjalankan kode penyerang — dan Hermes Agent termasuk yang belum diperbaiki. Ditutup dengan analisis Decrypt soal OpenClaw 2.0 dan posisi Hermes Agent di lanskap agen AI open-source.

## ⚖️ Google Lolos dari Pembubaran Bisnis Ad Tech

Kemenangan antitrust terbesar Google tahun ini: Hakim Leonie Brinkema memutuskan Google **tidak wajib menjual bisnis ad tech-nya**, termasuk AdX, meskipun sebelumnya terbukti secara hukum mengoperasikan monopoli di pasar periklanan digital (AdExchanger, Courthouse News).

Poin-poin kunci dari putusan ini:

- **Pembubaran dibatalkan, tapi praktik harus berubah** — News/Media Alliance mencatat putusan remedies tetap mewajibkan Google mengubah praktik bisnis ad tech-nya, hanya saja tanpa divestiture.
- **Kekalahan ketiga pemerintah AS** — Reuters via WTVB menyebut ini kekalahan ketiga AS dalam kasus antitrust Big Tech dalam beberapa tahun terakhir.
- **Pola yang sama** — Financial Times mengingatkan putusan setahun lalu soal search: Hakim Amit Mehta juga menolak divestiture Chrome meski Google dinyatakan monopoli. Business Insider merangkum: Google selamat lagi, tapi tetap menghadapi paket remedies.

Meski menang, jangan salah baca — pengadilan tetap menemukan Google melanggar hukum. Yang berubah hanyalah bentuk hukumannya: koreksi perilaku, bukan bedah bisnis. Bagi penerbit dan pengiklan yang selama ini menuntut perombakan struktural, ini kabar pahit.

## 🤖 Gemini 3.8 Flash Debut, Plus Varian 'Cyber' untuk Pembela Siber

Google meluncurkan **Gemini 3.8 Flash** dan **Gemini 3.8 Flash Cyber**. The Verge melaporkan model baru ini menyorotkan perbaikan di penalaran (reasoning), software engineering, dan kapabilitas AI agentic.

Yang menarik adalah varian Cyber-nya: The AI Insider mencatat peluncuran ini bagian dari gelombang bersama — Google, Anthropic, dan OpenAI di hari yang sama mengumumkan model AI untuk keamanan siber. Gemini 3.8 Flash Cyber ditujukan untuk "trusted defenders", sementara OpenAI menyatakan model Astra-nya mencapai threshold kemampuan critical cybersecurity mereka.

Ini sinyal industri yang jelas: model AI untuk ofensif digital sudah lama dibicarakan, sekarang pager utama dipindah ke sisi bertahan. Untuk tim SOC dan researcher keamanan, persaingan "cyber model" baru saja dimulai.

## 🍎 Apple ke Developer: Saatnya Meninggalkan Intel

Hampir enam tahun setelah chip M1 debut, Apple resmi mengirim sinyal pamungkas bagi era Intel. AppleInsider dan Macworld melaporkan Apple memberi tahu developer bahwa mereka **tidak lagi diwajibkan membuat aplikasi yang kompatibel dengan Mac Intel**.

- PCMag melaporkan hal sama, dan mengingatkan konteksnya: jajaran Mac baru (termasuk Mac mini 2026 yang dibandingkan dengan versi 2024) kini sepenuhnya berbasis Apple Silicon dengan fokus AI.
- Computerworld menerbitkan ulasan mendalam tentang relasi Apple dengan Intel dan TSMC — dua pemasok chip yang perannya kini praktis dibalik: Intel mantan pemasok utama, TSMC jadi tulang punggung silicon Apple.

Bagi pengguna Mac Intel lama, ini tanda-mata: dukungan ekosistem mulai beranjak. Kalau upgrade sedang dipertimbangkan, jadwal rilis Mac mini M5 Pro dan Mac Studio M5 Max/Ultra yang mulai dikirim bulan ini (Macworld) bisa jadi pertimbangan.

## 🛡️ Celah .git Config: Agen AI Coding Bisa Dieksekusi Penyerang

Riset keamanan yang relevan bagi siapa pun yang memakai agen coding CLI: **Manifold Security membongkar delapan celah di tujuh agen coding AI berbasis command line** (The Hacker News). Mekanismenya elegan tapi berbahaya:

- **Vektor:** konfigurasi Git milik repositori sendiri (seperti `core.fsmonitor`, setting yang nilainya berupa perintah yang dijalankan Git) diarahkan menjalankan kode penyerang di mesin developer.
- **Syarat:** repositori harus tiba sebagai file dengan direktori `.git` utuh — lewat arsip, shared drive, folder sinkronisasi, atau flashdisk. Clone biasa tidak rentan.
- **Kondisi terburuk:** pada Claude Code dan Hermes Agent, payload menyala **sebelum prompt workspace-trust diterima**; pada Qwen Code, sebelum user autentikasi; pada Grok Build, di ketukan pertama. Eksekusi berlangsung di luar sandbox dan tanpa prompt persetujuan.
- **Status patch:** perbaikan sudah terkirim untuk goose, Claude Code, dan Cursor. Hermes Agent, Qwen Code, Grok Build, plus satu jalur kedua di Claude Code **masih belum diperbaiki** per pengetesan ulang Manifold pada 1 September.
- OpenAI pada hari yang sama menerbitkan tiga CVE untuk kelas celah identik di Codex, dengan kredit untuk tiga grup riset independen.

Praktisnya: jangan pernah mengekstrak arsip proyek dari sumber tak dikenal dan membukanya dengan agen coding. Tunggu patch agent kamu, atau verifikasi isi `.git/config` sebelum membuka repositori curiga.

## 🦞 Decrypt Bedah OpenClaw 2.0 — dan Posisi Hermes Agent

Decrypt menerbitkan analisis menyeluruh rilis OpenClaw 2.0: apa yang berubah, mengapa pengembangannya butuh dua bulan, dan bagaimana posisinya dibanding pesaing. Beberapa poin yang menonjol:

- **Ekosistem vs arsitektur** — Decrypt merangkum consensus sepanjang tahun ini: OpenClaw unggul di ekosistem dan komunitas, sementara pesaing menawarkan pendekatan teknis yang berbeda.
- **Hermes Agent dari Nous Research** — pertama di-tag Maret, dibangun dengan pitch yang persis kebalikan OpenClaw: _procedural memory_ yang mengubah alur kerja sukses jadi komponen yang bisa dipakai ulang, dengan conversation loop, tool dispatch, dan memory yang dipadatkan dalam satu arsitektur.

Dikombinasikan dengan cerita keamanan di atas, pekan ini adalah pengingat menantang bagi kategori "personal AI agent": pertumbuhan pesat, tapi permukaan serangannya — dari prompt injection sampai eksekusi kode via .git — masih terus diuji.

## 💡 Insight Hari Ini

Tiga cerita besar hari ini punya benang merah: **batas kekuasaan dan tanggung jawab**. Google lolos dari bedah bisnis tapi tidak dari kewajiban mengubah perilaku. Apple melepas developer dari kewajiban Intel — kebebasan yang sebenarnya menandai pengucilan generasi hardware lama. Dan riset .git-config menunjukkan bahwa agen AI yang kita percaya penuh akses ke mesin, ternyata bisa dipakai melawan kita lewat celah sekecil file konfigurasi. Teknologi berkembang lebih cepat dari aturan mainnya — entah itu putusan pengadilan, kebijakan platform, atau kebiasaan keamanan kita sendiri.

## 🔗 Sumber

- [AdExchanger — Google Won't Have To Break Up Its Ad Tech Business, Judge Brinkema Rules](https://www.adexchanger.com/antitrust/google-wont-have-to-break-up-its-ad-tech-business-judge-brinkema-rules/)
- [Courthouse News — Google dodges antitrust breakup of ad tech business](https://www.courthousenews.com/articles/google-dodges-antitrust-breakup-of-ad-tech-business)
- [WTVB/Reuters — Google escapes ad tech breakup in third Big Tech antitrust loss for US](https://wtvbam.com/2026/09/02/google-defeats-us-bid-to-force-ad-tech-sale/)
- [News/Media Alliance — Statement on Google Ad Tech Remedies Ruling](https://www.newsmediaalliance.org/google-ad-tech-remedies-ruling/)
- [Business Insider — Google Avoids a Breakup in Judge's Adtech Ruling, but Faces Remedies](https://www.businessinsider.com/google-avoids-adtech-breakup-in-federal-judge-ruling-2026-9)
- [Financial Times — Google spared break-up of online advertising monopoly](https://www.ft.com/content/75c3179a-5c42-42fd-94e9-6f0c3dfc0c70)
- [The Verge — Google says its new Gemini 3.8 Flash model 'works harder' but might cost more](https://www.theverge.com/)
- [Android Headlines — Google Launches Gemini 3.8 Flash & Cyber Variants](https://www.androidheadlines.com/2026/09/google-debuts-gemini-3-8-flash-cyber-variants.html)
- [The AI Insider — Google, Anthropic, and OpenAI Unveil Cyber AI Models](https://theaiinsider.tech/2026/09/02/google-launches-ai-design-tool-and-rolls-out-new-gemini-powered-android-a)
- [AppleInsider — Developers can stop supporting Intel Macs, says Apple](https://appleinsider.com/articles/26/09/02/developers-can-stop-supporting-intel-macs-says-apple)
- [Macworld — Apple to Mac developers: It's time to let go of Intel](https://www.macworld.com/article/3225932/apple-to-mac-developers-its-time-to-let-go-of-intel.html)
- [PCMag — Apple Tells Developers They Can Now Drop Support for Intel Macs](https://www.pcmag.com/)
- [The Hacker News — Malicious .git Configs Can Make Claude, Codex, Cursor, and Other AI Agents Run Attacker Code](https://thehackernews.com/2026/09/malicious-git-configs-can-make-claude.html)
- [Decrypt — OpenClaw 2.0 Is Here: What Changed, Why It Took Two Months, and How It Stacks Up](https://decrypt.co/377135/openclaw-2-0-is-here-whats-new)
