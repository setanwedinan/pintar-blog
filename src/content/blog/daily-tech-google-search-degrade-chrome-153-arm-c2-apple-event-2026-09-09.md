---
title: "🔍 Google 'Menurunkan Kualitas' Search di Eropa Demi Denda DMA, Chrome 153 Bakar Ritme Rilis Jadi 2 Mingguan"
description: "Google keluarkan versi Search yang 'didegrade' di Eropa demi patuh DMA — denda €460 juta mendarat. Sementara Chrome 153 resmi masuk siklus rilis dua mingguan, Arm umumkan CPU C2 dan GPU Mali G2-Ultra NX, dan jam Apple berbisik sebelum event malam ini."
pubDate: 2026-09-09T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## TL;DR

Ronde teknologi pagi ini (9 September 2026) dipenuhi keputusan besar: Google mengeluh soal "degradasi produk" yang dipaksakan DMA setelah denda €460 juta untuk self-preferencing di Search, Chrome 153 mulai berlaku dengan siklus rilis baru **dua mingguan**, Arm mengumumkan CPU C2 dan GPU Mali G2-Ultra NX yang menjanjikan grafis "desktop-class" untuk ponsel, PL nuklir Iowa mendapat pinjaman $1,9 miliar dari DOE untuk dibangkitkan kembali, dan sinyal pra-event Apple mulai terlihat — Apple Watch SE 3 tiba-tiba "currently unavailable" dan Apple TV 4K berikutnya diduga membawa chip A19/A19 Pro.

## 🇪🇺 Google: "Ini penurunan kualitas terbesar dalam sejarah Search kami"

Komisi Eropa akhirnya menindaklanjuti dua keputusan non-kepatuhan DMA yang diumumkan 23 Juli 2026: **€460 juta** untuk self-preferencing di Google Search dan **€430 juta** untuk pembatasan steering di Google Play. Totalnya €890 juta, dengan tenggat kepatuhan 21 September 2026.

Menariknya, bagian yang paling berisik justru bukan angka dendanya — melainkan _cara_ Google memenuhi aturan. Dalam implementasi terbaru, Google menghapus harga real-time dan ketersediaan langsung untuk hotel, penerbangan, dan restoran dari hasil pencarian Eropa, menyisakan satu mesin pencari spesialis di atas hasil organik ditambah dua entri tanpa detail.

Ars Technica merilis kutipan dari Nick Fox (SVP Knowledge & Information di Google) yang menyebut ini sebagai "penurunan kualitas terbesar dalam sejarah Search" — framing yang dipakai Google untuk menekan Komisi agar merevisi implementasi. Engadget dan Reuters memberitakan hal serupa dari sudut berbeda, dengan Kent Walker (presiden global affairs Google) menegaskan bahwa kepatuhan memaksa mereka "membongkar fitur real-time yang dicintai orang Eropa".

Untuk pengguna biasa di Eropa, dampaknya nyata: mencari hotel atau tiket pesawat lewat Google kini tidak lagi menampilkan harga live seperti dulu. Apakah ini bentuk "patuh dengan sengaja dibuat menyakitkan" (compliance malpractice, dalam istilahkritik) atau memang satu-satunya cara memenuhi DMA, masih jadi perdebatan. Google menyatakan sedang menimbang banding.

## 🌐 Chrome 153: dari empat minggu jadi dua minggu

Google resmi menggeser Chrome ke **siklus rilis dua mingguan** mulai Chrome 153 — memangkas setengah dari cadensi empat minggu yang dipakai sejak 2021. Alasannya menarik: tim Chrome kini memakai alat AI berbasis Gemini untuk menemukan dan memperbaiki kerentanan keamanan, dan celah yang ditemukan AI perlu ditambal lebih cepat sebelum dieksploitasi.

PYMNTS menyoroti sisi lainnya: AI juga dimanfaatkan _para peretas_ untuk menemukan celah lebih cepat — jadi ini lomba lari antara AI pertahanan dan AI penyerang. Dengan rilis yang lebih sering, update juga jadi lebih kecil dan lebih mudah di-debug, menurut Google di forum Android Enterprise.

Bagi pengguna biasa, artinya fitur baru tiba tiap dua minggu, bukan tiap bulan. Bagi admin IT, artinya jadwal patching perlu disesuaikan — dokumen resmi Google sudah tersedia untuk Enterprise.

## 🖥️ Arm C2 + Mali G2-Ultra NX: "desktop-class" di ponsel

Arm mengumumkan platform "CSS for Mobile 2" yang berisi:

- **CPU C2** (C2-Ultra dan C2-Pro) — naik hingga 15% performa single-thread, 12% lebih cepat buka aplikasi, dan 1,7x lebih kencang untuk model AI dibanding cluster C1
- **GPU Mali G2-Ultra NX** — GPU Mali pertama yang "AI-native", dengan neural accelerator langsung di dalam pipeline grafis. Arm mengklaim performa kelas desktop, 24% lebih tinggi di benchmark, dan ray tracing 70% lebih efisien dibanding G1-Ultra

9to5Google mencatat bahwa target utamanya adalah gaming mobile — judulnya saja sudah bicara: "desktop-class games, more AI power". Bagi pabrikan ponsel Android seperti MediaTek atau Qualcomm yang melisensi desain Arm, ini jadi fondasi chip flagships 2027 ke depan.

## ⚛️ PL nuklir Iowa dapat hidup kedua lewat pinjaman $1,9 M

Departemen Energi AS (DOE) menutup pinjaman **hingga $1,9 miliar** untuk NextEra Energy guna menghidupkan kembali **Duane Arnold Energy Center** di Iowa — PLTN 615 megawatt yang sudah offline sejak 2020. Target restart: 2029, dengan syarat masih harus lolos lisensi Nuclear Regulatory Commission.

Yang membuat cerita ini relevan: Google dilaporkan sedang mempertimbangkan membangun beberapa pusat data di dekat PLTN tersebut. TechCrunch menyebut ini sebagai pinjaman federal kedua sejenis — sebelumnya ada $1 miliar untuk Constellation Energy guna merestart reaktor Three Mile Island. Polanya jelas: energi nuklir jadi jawaban atas kelaparan listrik dari data center AI.

## ☁️ Google Cloud × Accenture: unit khusus Gemini Enterprise

TechCrunch melaporkan pembentukan **"Accenture Gemini Enterprise Business Group"** — unit bisnis gabungan yang akan menyertakan _forward-deployed engineers_ untuk membantu perusahaan besar mengadopsi AI agenik Google di lingkungan enterprise. Ini langkah mengejar ketertinggalan Google Cloud di "perang deployment AI" melawan kompetitor yang lebih dulu punya kemitraan konsultansi serupa.

## 🍎 Sinyal pra-event Apple: Watch SE 3 menghilang, Apple TV 4K bocor chip A19

Malam ini Apple menggelar event **"Surprise and Shine"**, dan dua sinyal pra-event menarik perhatian:

**Pertama, Apple Watch SE 3 tiba-tiba "currently unavailable"** di seluruh varian, warna, dan ukuran di Apple Store online — demikian laporan Macworld (Michael Simon, 8 September). Pola seperti ini biasanya jadi pertanda model lama dipensiunkan atau digantikan malam ini. Series 11 dan Ultra 3 masih bisa dibeli normal.

**Kedua, kode dalam software Apple membocorkan chip untuk Apple TV 4K berikutnya.** MacRumors (via MacHash dan 9to5Mac) menemukan indikasi bahwa perangkat baru akan membawa chip **A19 atau A19 Pro** dengan RAM naik ke 8GB atau 12GB dari 4GB sebelumnya — lompatan yang cukup besar untuk perangkat streaming, dan mendukung rumor bahwa Apple TV berikutnya akan lebih fokus ke AI/Siri.

Catatan menarik dari artikel 9to5Mac tentang iPhone lipat: artikel itu menyebut Tim Cook sebagai **"former Apple CEO"** — konsisten dengan transisi kepemimpinan ke John Ternus yang sudah resmi berlaku akhir Agustus, dengan Cook kini jadi Executive Chairman. Era baru Apple resmi dimulai malam ini.

## 🤖 Android: Sony rilis Android 17 ke Xperia 1 VIII, keluhan display Z Fold 8

Sony mulai menggelarkan **Android 17** ke Xperia 1 VIII — update besar pertama dari empat janji upgrade OS. Fitur unggulannya: **Desktop mode** yang mengubah ponsel jadi pengganti PC saat disambung ke monitor, keyboard, dan mouse, plus perbaikan screen recording (bisa rekam per-aplikasi) dan preset baru untuk AI Camera Assistant. Update sudah live di Jerman dan Inggris, versi 73.1.A.2.61 (± 1,2 GB).

Sementara itu di sisi Samsung, Android Police melaporkan kegelisahan pemilik **Galaxy Z Fold 8**: sudut layar dalam bisa tertekan masuk sampai di bawah permukaan frame dengan tekanan ringan. Sebagian mengkhawatirkan build quality, sebagian lagi menganggap ini normal untuk layar lipat. Belum ada tanggapan resmi Samsung.

## 🔗 Sumber

- [Ars Technica — Google says Europe is making it roll out degraded travel search results](https://arstechnica.com/gadgets/2026/09/google-says-europe-is-making-it-roll-out-degraded-travel-search-results/)
- [Engadget — Google will degrade Search in Europe to avoid EU fines](https://www.engadget.com/2253229/google-will-degrade-search-in-europe-to-avoid-eu-fines/)
- [Komisi Eropa — Commission fines Google €890 million for breaches of the DMA](https://digital-markets-act.ec.europa.eu/commission-fines-google-eur890-million-breaches-digital-markets-act-2026-07-23_en)
- [Engadget — Chrome will now release updates every two weeks](https://www.engadget.com/2252455/google-chrome-updates-every-two-weeks-to-better-tackle-security-threats)
- [PYMNTS — Google accelerates Chrome updates to outrun fast-moving AI hackers](https://www.pymnts.com/cybersecurity/2026/google-accelerates-chrome-updates-outrun-fast-moving-ai-hackers/)
- [9to5Google — Arm's new CPU cores and GPUs for Android chips promise 'desktop-class' games](https://9to5google.com/2026/09/08/arms-new-cpu-cores-and-gpus-for-android-chips-promise-desktop-class-games-more-ai-power/)
- [CNX Software — Arm CSS for Mobile 2: C2-Ultra/C2-Pro cores, Mali G2-Ultra NX GPU](https://www.cnx-software.com/2026/09/08/arm-css-for-mobile-2-ai-native-platform-arm-c2-ultra-and-c2-pro-cpu-cores-mali-g2-ultra-nx-gpu/)
- [TechCrunch — Google's revived nuclear power plant gets $1.9B loan from US government](https://techcrunch.com/2026/09/08/googles-revived-nuclear-power-plant-gets-1-9b-loan-from-us-government/)
- [TechCrunch — Google Cloud races to catch up in the AI deployment wars with Accenture deal](https://techcrunch.com/2026/09/08/google-cloud-races-to-catch-up-in-the-ai-deployment-wars-with-accenture-deal/)
- [Macworld — Something strange is happening with the Apple Watch SE 3](https://www.macworld.com/article/3229555/something-strange-is-happening-with-the-apple-watch-se-3.html)
- [MacHash/MacRumors — Next Apple TV's chip revealed in latest leak](https://machash.com/macrumors/416219/next-apple-tvs-chip-revealed-latest-leak)
- [9to5Mac — How Tim Cook shaped Apple's foldable iPhone and what it may cost](https://9to5mac.com/2026/09/08/how-tim-cook-shaped-apples-foldable-iphone-and-what-it-may-cost/)
- [Notebookcheck — Sony Xperia 1 VIII gets Android 17 with desktop mode](https://www.notebookcheck.net/Sony-Xperia-1-VIII-gets-Android-17-with-desktop-mode-camera-upgrade-and-more.1392409.0.html)
- [Android Police — Samsung Galaxy Z Fold 8 fans have noticed a worrying display issue](https://www.androidpolice.com/z-fold-8-fans-have-noticed-a-worrying-display-issue/)
