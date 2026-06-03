---
title: 'Microsoft Scout Debut di Build 2026, Hermes Agent Desktop Dirilis, dan Android Deteksi Panggilan Palsu'
description: 'Microsoft meluncurkan Scout, asisten AI pribadi berbasis OpenClaw. Nous Research merilis Hermes Desktop, Google hadirkan deteksi fake call di Android, dan MacBook Neo pecahkan rekor penjualan.'
pubDate: 2026-06-03T11:30:00Z
tags: ['Daily Update', 'AI', 'OpenClaw', 'Google', 'Apple']
---

## 🔥 Microsoft Scout: Asisten AI Personal Berbasis OpenClaw

Microsoft resmi meluncurkan **Scout**, asisten AI pribadi yang selalu aktif dan dibangun di atas framework **OpenClaw** open-source. Diumumkan di Build 2026, Scout dirancang untuk menjadi _always-on agentic assistant_ yang bekerja di dalam ekosistem Microsoft 365.

### Apa itu Scout?

- **Dibangun di atas OpenClaw** — Microsoft menggunakan framework open-source OpenClaw sebagai fondasi, dan berkomitmen untuk berkontribusi _upstream_ ke proyek tersebut
- **Always-on** — Scout berjalan terus-menerus dan bisa menyelesaikan tugas secara otonom tanpa perlu diminta
- **Terintegrasi Microsoft 365** — Bekerja langsung dengan Outlook, Teams, OneDrive, dan layanan Microsoft lainnya
- **Sandbox security** — Berjalan di lingkungan sandbox yang terisolasi untuk keamanan

### OpenClaw di Windows Makin Aman

Selain Scout, Microsoft juga mengumumkan peningkatan keamanan untuk menjalankan OpenClaw di Windows PC. Ada _companion app_ baru yang menjalankan OpenClaw secara terkontainerisasi, mencegah AI agent mengakses sistem yang tidak seharusnya.

> "OpenClaw adalah salah satu proyek open-source dengan pertumbuhan tercepat yang pernah saya lihat." — Tim di Microsoft Build 2026

🔗 [Microsoft 365 Blog - Introducing Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026-06-02-introducing-microsoft-scout/) | [The Verge](https://www.theverge.com/news/2026-06-02-microsoft-scout-openclaw-personal-assistant) | [TechCrunch](https://techcrunch.com/2026/06/02/microsoft-launches-scout-openclaw-personal-assistant/)

---

## 🤖 NVIDIA NemoClaw: Blueprint untuk AI Agent Enterprise

NVIDIA meluncurkan **NemoClaw**, blueprint open-source untuk membangun AI agent yang aman dan berjalan lama (_long-running_). Beberapa perusahaan _industrial software_ besar sudah membangun AI engineer berbasis NemoClaw.

**Fitur utama NemoClaw:**

- **Secure runtime** — Runtime terisolasi untuk menjalankan agent dengan aman
- **Frontier model support** — Mendukung model frontier terbaru
- **Multi-channel** — Bisa dikoneksikan ke Slack, Outlook, dan platform lainnya
- **Self-evolving** — Agent bisa berkembang dan belajar dari interaksi sebelumnya

Salah satu penerapan menarik datang dari **Solomon**, perusahaan AI vision 3D yang mengintegrasikan NemoClaw untuk mengkoordinasikan _humanoid robot_ di COMPUTEX 2026.

🔗 [NVIDIA Developer Blog](https://developer.nvidia.com/blog/deploy-self-evolving-agents/) | [Computerworld](https://www.computerworld.com/article/2254242/microsoft-unveils-scout-autonomous-ai-agent-openclaw.html)

---

## 💻 Hermes Agent Desktop: Keluar dari Terminal

**Nous Research** merilis **Hermes Desktop** dalam _public preview_, membawa Hermes Agent dari terminal CLI ke aplikasi native untuk macOS, Windows, dan Linux. Ini adalah langkah besar untuk membuat AI agent lebih mudah diakses oleh pengguna non-developer.

Sebelumnya, NVIDIA juga menunjukkan demo deploy _self-evolving agent_ menggunakan kombinasi NemoClaw dan Hermes Agent, membuktikan bahwa ekosistem AI agent open-source semakin matang dan interoperabel.

🔗 [Startup Fortune - Nous Research brings Hermes Agent out of the terminal](https://startupfortune.com/2026/06/nous-research-brings-hermes-agent-out-of-terminal/)

---

## 📱 Android June 2026 Drop: Fitur Keamanan dan Kesehatan

Google merilis **Android June Feature Drop** dengan fokus utama pada keamanan. Fitur paling menonjol adalah **deteksi panggilan palsu** (_fake call detection_) yang melindungi pengguna dari penipuan _impersonation_ menggunakan AI deepfake.

### Cara Kerja Fake Call Detection

- Kedua penelepon harus menggunakan **Phone by Google** dengan RCS aktif
- Saat menerima panggilan, perangkat pengirim mengirim **sinyal konfirmasi diam-diam** secara real-time
- Jika sinyal tidak cocok, Android akan menampilkan peringatan
- Tersedia untuk **Android 12 ke atas**, mulai dari Pixel

### Fitur Lain di June Drop

- **Circle to Search multi-object outfit identification** — Bisa mengidentifikasi seluruh outfit, bukan satu item saja
- **Google Photos Wardrobe** — Fitur baru untuk mengatur pakaian digital
- **AirDrop expansion** — Quick Share kini tersedia di lebih banyak perangkat Android
- **Google June security patch** — 124 kerentanan diperbaiki, termasuk satu yang aktif dieksploitasi

🔗 [Google Blog](https://blog.google/products/android/android-safety-fake-call-detection/) | [9to5Google](https://9to5google.com/2026/06/02/google-phone-app-fake-call-detection/) | [Engadget](https://www.engadget.com/android/android-will-now-warn-you-if-a-caller-is-impersonating-someone-you-know-183012456.html)

---

## 🏛️ Parlemen Eropa Tinggalkan Google untuk Qwant

Mulai **4 Juni 2026**, Parlemen Eropa akan mengganti Google dengan **Qwant**, mesin pencari asal Prancis, sebagai _default search engine_ di semua komputer resmi. Keputusan ini diambil karena **kekhawatiran privasi**, meskipun Qwant sudah menjadi pilihan alternatif sejak 2019.

> "Qwant akan menggantikan Google sebagai default search engine di komputer Parlemen Eropa," kata pejabat kepada anggota parlemen.

Langkah ini mengikuti tren regulator Eropa yang semakin keras terhadap dominasi Big Tech, terutama setelah implementasi Digital Markets Act (DMA).

🔗 [Euractiv](https://www.euractiv.com/section/digital/news/european-parliament-to-ditch-google-for-european-alternative/)

---

## 🖥️ Microsoft Surface RTX Spark Dev Box: Saingan Mac Mini

Di Computex 2026, Microsoft meluncurkan **Surface RTX Spark Dev Box** — mini PC dengan 128 GB RAM dan GPU NVIDIA RTX Spark yang secara langsung menantang dominasi Mac Mini di segmen AI development.

- **128 GB RAM** — Jauh melampaui Mac Mini standar
- **NVIDIA RTX Spark GPU** — Dirancang untuk menjalankan model AI besar secara lokal
- **1,000 lubang ventilasi** — Desain unik untuk cooling yang optimal
- **Thunderbolt 4** — Konektivitas penuh untuk peripheral eksternal

Meski begitu, Apple dilaporkan menghadapi **kekurangan pasokan Mac Mini** karena permintaan tinggi dari developer AI dan pengguna OpenClaw. "Customer recognition bahwa Mac Mini dan Mac Studio adalah platform yang luar biasa untuk AI dan agentic tools sedang terjadi," menurut sumber internal Apple.

Sementara itu, **Acer** merilis **Veriton RA110 AI Mini Workstation** dengan AMD Ryzen AI Max+ 395 dan hingga 128 GB RAM, dan **Qualcomm** akhirnya meluncurkan mini PC pertama dengan Snapdragon X2 Elite.

🔗 [MacRumors - Mac Mini supply constraints](https://www.macrumors.com/2026/06/02/apple-mac-mini-supply-constraints/) | [TechPowerUp - Surface RTX Spark Dev Box](https://www.techpowerup.com/272423/microsoft-introduces-new-surface-rtx-spark-dev-box)

---

## 📊 MacBook Neo Pecahkan Rekor

Dalam kuartal debutnya, **MacBook Neo** berhasil **melampaui penjualan semua model Mac lainnya**. Ini adalah pencapaian yang belum pernah terjadi sebelumnya untuk produk Mac baru, menandakan bahwa strategi Apple untuk menggabungkan AI capabilities dengan desain hardware yang menarik terbukti berhasil.

🔗 [MacRumors - MacBook Neo outsold every other Mac](https://www.macrumors.com/2026/06/02/macbook-neo-outsold-every-other-mac/)

---

## 🍎 Apple Menjelang WWDC 2026

Semakin dekat dengan **WWDC 2026** pekan depan, Apple sudah mengkonfirmasi beberapa hal:

- **Apple Design Awards 2026** sudah diumumkan, dengan 12 app dan game yang dihargai
- **Silo Season 3** trailer pertama dirilis untuk premiere Juli di Apple TV+
- **iOS 26.5.1** dirilis eksklusif untuk iPhone 17 Series dan iPhone Air, memperbaiki bug charging
- **Apple Watch 2027** dikabarkan akan menggunakan teknologi OLED backplane baru yang lebih hemat energi
- **Apple Music free tier** dikabarkan sedang dipertimbangkan untuk bersaing dengan Spotify dan YouTube Music

🔗 [MacRumors - Apple Design Awards](https://www.macrumors.com/2026/06/02/apple-design-awards-2026-winners/) | [MacRumors - macOS Big Bear](https://www.macrumors.com/2026/06/02/macos-emerald-to-macos-big-bear/) | [Collider - Silo Season 3](https://www.collider.com/)

---

## 🔍 Gemini Spark: Impresif dan Meneror

The Verge memberikan review mendalam untuk **Gemini Spark**, platform agentic AI baru dari Google. Disebut sebagai "pengalaman AI paling impresif dan paling meneror yang pernah saya alami," Gemini Spark bisa menyelesaikan tugas di web dan segera di perangkat Anda.

> "Gemini Spark, platform agentic AI baru dari Google, bisa menyelesaikan tugas di sekitar web dan bahkan segera di perangkat Anda. Ini bekerja dengan cara yang menakjubkan."

Review ini penting karena Gemini Spark adalah model yang akan digunakan Apple untuk menggerakkan **Siri baru** di iOS 27, sehingga keberhasilannya juga menjadi kabar baik bagi pengguna Apple.

🔗 [The Verge - Gemini Spark review](https://www.theverge.com/news/2026/06/02/gemini-spark-google-agentic-ai-review)

---

**Sumber:** Microsoft 365 Blog, The Verge, TechCrunch, Computerworld, NVIDIA Developer Blog, Google Blog, 9to5Google, Engadget, MacRumors, Euractiv, Startup Fortune, Collider
