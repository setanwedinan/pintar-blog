---
title: 'Gemini masuk ke mobil, TorchTPU keluar, dan Inggris menggugat kebiasaan Apple'
description: 'Google membawa Personal Intelligence ke Android Auto sehingga Gemini bisa membaca email, foto, dan kalender saat kamu menyetir. Di hari yang sama Google merilis TorchTPU sebagai proyek open source, sementara CMA Inggris mengusulkan Apple membuka akses NFC iPhone dengan tarif yang jauh lebih rendah.'
pubDate: 2026-10-21T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Personal Intelligence** mulai digulirkan ke **Android Auto** dan mobil dengan Google built-in, jadi Gemini bisa menjawab dengan konteks dari Gmail, Kalender, Photos, Maps, YouTube, dan Search. _(Google Blog)_
- Google merilis **TorchTPU** sebagai proyek open source, sehari setelah Amazon merilis **TorchNeuron** — dua-duanya supaya aplikasi AI bisa pindah dari GPU Nvidia tanpa menulis ulang kode. _(TechCrunch)_
- **CMA** Inggris mengusulkan Apple membuka akses NFC iPhone ke standar contactless internasional dengan biaya yang jauh lebih rendah. Konsultasi ditutup **17 November 2026**. _(Engadget, Reuters)_
- **Android 17 QPR3 Beta 2** tersedia untuk Pixel 6a sampai Pixel 11, membawa lebih dari 20 perbaikan termasuk masalah ponsel restart sendiri. _(9to5Google, Droid Life)_
- Apple mulai menjual **part resmi** untuk iPhone 18 Pro, Mac Studio M5 Max/M5 Ultra, dan Mac mini M6/M5 Pro lewat Self Service Repair. _(9to5Mac)_
- **Hermes Agent** berencana jadi studio pengembangan game DIY, dan semuanya dikerjakan lewat plugin tanpa menyentuh inti Hermes. _(Agent N's Hermes News)_

## 🚗 Gemini sekarang tahu isi email kamu, dan itu harus kamu nyalakan sendiri

Mulai 20 Oktober, Gemini tersedia di **Android Auto** dan mobil dengan Google built-in di seluruh dunia. Yang baru bukan sekadar asisten suara yang bisa diajak mengobrol, tapi **Personal Intelligence** — lapisan yang membuat Gemini bisa menarik jawaban dari aplikasi Google yang sudah kamu pakai.

Cakupannya cukup lebar: Workspace (termasuk Gmail dan Google Calendar), Google Photos, Google Maps, YouTube, dan Search. Google menyebut Personal Intelligence punya dua kekuatan utama. Pertama, mengambil detail spesifik dari email, foto, atau tempat yang kamu simpan di Maps. Kedua, menalar lintas beberapa sumber sekaligus — sesuatu yang berguna ketika tangan kamu di setir dan ngga sempat menjelaskan konteks panjang.

Contoh yang Google berikan cukup membumi: mencari nomor gerbang penerbangan, atau memilih restoran yang sesuai selera kamu, tanpa menyentuh ponsel.

Soal privasi, ada dua pengaman yang disebut eksplisit. Aplikasi ngga terhubung sampai kamu menyalakannya sendiri di pengaturan Gemini, dan bisa dimatikan kapan saja. Untuk mobil dengan Google built-in, jawaban personal hanya dibagikan ketika ponsel kamu terhubung di dalam mobil. Kalau Personal Intelligence dimatikan, navigasi, musik, panggilan, dan pertanyaan umum tetap jalan — hanya jawabannya ngga dipersonalisasi.

**Tapi… ada tapinya, dan tapinya dua.** Pertama, fitur ini digulirkan untuk akun Google personal berusia 18 tahun ke atas, dan secara eksplisit **bukan** untuk pengguna Workspace bisnis, enterprise, atau pendidikan. Jadi kalau kamu hidup di ekosistem kantor, Gemini di mobil kamu akan tetap versi umum. Kedua, ada empat wilayah yang dikecualikan dari peluncuran awal: Kawasan Ekonomi Eropa, Swiss, Inggris, dan Nigeria. Indonesia ngga disebut sebagai pengecualian, tapi Google juga ngga mengeluarkan keterangan terpisah soal tanggal ketersediaan untuk pasar sini — jadi jangan buru-buru cek lalu kecewa kalau menunya belum muncul.

## 🏦 Inggris ingin membuka NFC iPhone, dan Apple sudah menyiapkan bantahan

Otoritas persaingan Inggris, **Competition and Markets Authority (CMA)**, mengeluarkan proposal yang menyasar posisi Apple di pembayaran contactless. Dasarnya angka: **39 persen** dari seluruh pembayaran di Inggris sekarang dilakukan lewat contactless, dan Apple Wallet jadi pilihan paling populer. Inggris juga disebut sebagai pusat fintech yang menopang lebih dari **360.000 lapangan kerja**.

Masalahnya menurut CMA, biaya dan aturan akses Apple ke NFC dinilai menghambat fintech lokal berinovasi. Regulator itu menyebut tarif dan syarat aksesnya "memberatkan", dan mencatat satu fakta pembanding yang tajam: berbeda dengan di Uni Eropa, **belum ada satu pun perusahaan yang meluncurkan produk dompet digital untuk bersaing dengan Apple di Inggris**.

Yang diminta CMA cukup spesifik. Apple harus membuka akses Wallet ke "standar contactless utama yang dipakai secara internasional", supaya perusahaan Inggris bisa merilis layanan pembayaran yang sudah mereka tawarkan di Eropa. CMA juga menyatakan buktinya menunjukkan "tidak ada kekhawatiran keamanan inheren" pada kedua teknologi itu. Soal harga, regulator memilih ngga menetapkan angka sendiri — ia mengusulkan prinsip bagaimana tarif ditentukan, dengan ekspektasi biayanya **jauh lebih rendah** dari yang berlaku sekarang.

Konsultasi ditutup 17 November 2026, keputusan final setelah tanggapan dinilai.

Apple sudah menolak. Dalam pernyataan ke Engadget, perusahaan itu menegaskan pengembang di Inggris dan seluruh dunia sudah bisa menawarkan transaksi contactless langsung di aplikasi mereka lewat platform NFC dan SE — dari pembayaran di toko, tiket transit, sampai kunci mobil. Apple menilai pendekatan CMA justru menurunkan standar privasi dan keamanan, dan menyatakan akan terus bernegosiasi.

Konteks yang perlu kamu tahu: pada 2024 Apple sudah berkomitmen membuka NFC ke pengembang di Eropa setelah tekanan regulator, dan kesepakatan itu menyelamatkannya dari denda antitrust yang bisa mencapai 10 persen dari omzet tahunan global. Sejak iOS 18.1, akses pihak ketiga itu diperluas ke wilayah lain. Developer Inggris sebenarnya juga dapat akses — hanya saja mereka masih terkurung di ekosistem Apple dan tetap membayar.

## 🧠 TorchTPU: Google ikut mencongkel PyTorch dari cengkeraman Nvidia

Selasa lalu Google mengumumkan **TorchTPU**, versi PyTorch buatannya, sudah tersedia sebagai proyek open source. Langkah ini menempatkan Google sebaris dengan Amazon, yang sehari sebelumnya merilis **TorchNeuron**.

Konteksnya soal tumpuan industri. PyTorch adalah toolkit open source yang dipakai pengembang dan startup untuk membangun, melatih, dan menjalankan model AI. Menurut sejumlah perhitungan, toolkit ini dipakai sekitar **85 persen** aplikasi AI. PyTorch dibuat Meta pada 2016 — jauh sebelum orang membayangkan LLM akan mengubah dunia — dan pada masa itu GPU Nvidia sudah jadi standar hardware riset AI. Akibatnya banyak fitur PyTorch dirancang khusus untuk chip Nvidia. Pada 2022 Meta menyerahkan PyTorch ke Linux Foundation.

TorchTPU memungkinkan aplikasi AI berjalan di **TPU**, chip AI milik Google, dan memindahkan aplikasi PyTorch yang sudah ada ke TPU — artinya juga ke Google Cloud — cukup dengan perubahan konfigurasi, tanpa menulis ulang. Amazon melakukan hal serupa dengan TorchNeuron untuk chip **Trainium** dan AWS.

Google mengklaim satu keunggulan: mereka mengerjakan TorchTPU langsung bersama Meta, Hugging Face, Inferact (pembuat vLLM), dan RadixArk (pembuat SGLang), supaya fitur dan pustaka kodenya cocok dengan alat pengembangan populer tersebut. Google juga merilis **TPU agent suite** untuk membantu developer memindahkan aplikasi dan memperbaiki error, plus memperbarui **LiteRT** — alat yang menjalankan AI di ponsel, laptop, dan perangkat tertanam — agar lebih kompatibel dengan aplikasi PyTorch.

Amazon melangkah lebih jauh di satu titik: mereka menyumbang kode ke proyek PyTorch utama untuk melepaskan berbagai fitur dari chip Nvidia, supaya secara bawaan lebih terbuka ke hardware apa pun.

**Tapi… ada tapinya.** Semua ini ngga berarti pengembang akan berbondong-bondong meninggalkan Nvidia. Yang berubah adalah biaya berpindah — dari yang tadinya nyaris mustahil jadi sekadar mengubah konfigurasi. Perangnya baru dimulai, dan yang menentukan bukan pengumuman, tapi siapa yang lebih dulu punya kapasitas chip untuk menampung beban kerja yang benar-benar besar.

## 📱 QPR3 Beta 2, dan daftar perbaikan yang bikin lega

Google merilis **Android 17 QPR3 Beta 2** untuk semua Pixel yang masih didukung, dari **Pixel 6a** sampai seri **Pixel 11**. Droid Life menyebut pembaruan ini membawa setidaknya 20 perbaikan dan peningkatan, sementara 9to5Google mencatat 21 perbaikan.

Isi daftarnya menjelaskan kenapa jumlahnya banyak: QPR3 Beta 1 disebut sangat buggy. Perbaikan yang masuk mencakup crash yang membuat perangkat restart sendiri saat dipakai normal, tile Quick Settings yang ngga tampil benar, elemen antarmuka sistem yang tampil terlalu kecil, kegagalan pairing Bluetooth, sampai konsumsi baterai berlebih saat idle.

Ada juga yang lebih spesifik: tile Internet di Quick Settings yang menampilkan teks terus-menerus ketika data seluler aktif tanpa Wi-Fi, dialog output media yang mengabaikan tema monokrom sistem saat perangkat audio eksternal tersambung, ikon pin yang posisinya bergeser di samping aplikasi yang di-pin pada share sheet, dan perangkat yang mati sendiri saat panggilan video WhatsApp.

Kalau kamu ikut Android Beta Program, pembaruan ini bisa diambil lewat OTA. Kalau kamu tipe yang suka flashing, image OTA-nya juga tersedia.

## 🔧 Apple jual part resmi, dan akuisisi yang semuanya mengarah ke satu tempat

Apple mulai menjual part pengganti untuk **iPhone 18 Pro** dan **iPhone 18 Pro Max**, **Mac Studio** M5 Max dan M5 Ultra, serta **Mac mini** M6 dan M5 Pro lewat Self Service Repair Store. Program ini berjalan sejak 2022 dan memungkinkan pengguna di wilayah tertentu membeli part serta menyewa alat untuk memperbaiki perangkat sendiri.

Angka yang paling sering ditanya: kamera pengganti iPhone 18 Pro dijual **249 dolar**, sama dengan model tahun lalu meski tahun ini ada sistem aperture variabel. Apple memberi kredit **59,76 dolar** kalau kamera lama dikembalikan, jadi biaya efektifnya **189,24 dolar**.

Untuk Mac Studio, part yang tersedia mulai dari port Thunderbolt dan USB-C, kipas, speaker, modul SSD, logic board, sampai power supply. Untuk Mac mini daftarnya lebih pendek: kipas, speaker, logic board, baterai, dan power supply.

Yang menarik, pengumuman ini keluar di hari yang sama dengan perluasan kerja sama Apple dengan pemasok AS untuk komponen iPhone 18 Pro dan iPhone Duo.

Di jalur lain, Apple terus membeli perusahaan kecil dan pola belanjanya makin jelas: semuanya bermuara ke **Apple Creator Studio**. Akuisisi terbaru adalah **Samplab**, yang memposisikan diri sebagai editor audio untuk musisi — pas untuk Logic Pro. Sebelumnya ada **MotionVFX** (template efek visual, plugin, dan motion graphics untuk Final Cut Pro) dan **Color.io** (manajemen warna dan grading citra digital), plus acqui-hire **Huxe**.

Creator Studio sendiri debut Januari sebagai kumpulan aplikasi pro untuk kreator: Pixelmator Pro, Logic Pro, Final Cut Pro, dan lainnya. Pekan depan Apple dijadwalkan mengumumkan empat produk hardware untuk segmen yang sama — MacBook Pro layar sentuh yang didesain ulang, iPad mini yang dimodernisasi, serta iMac dan MacBook Pro versi M6 — dalam acara bertajuk Pro and tell pada 28 Oktober.

## 🎮 Hermes Agent mau jadi studio game, dan semuanya lewat plugin

Di dunia agen AI, satu pengumuman pekan ini cukup ramai. Menurut rangkuman **Agent N's Hermes News** edisi 20 Oktober, **Teknium** mengumumkan bahwa **Hermes Agent** akan menjadi semacam studio pengembangan game DIY. Unggahannya disebut mengumpulkan sekitar **71.000 tampilan** dan lebih dari **1.700 suka**.

Yang bikin cerita ini bukan sekadar hype adalah lanjutannya. Daftar permintaan plugin yang menyusul cukup spesifik: generasi model 3D, animasi, efek suara, sampai integrasi dengan **Unity, Godot, dan Blender**. Ada juga rencana distribusi profil sekali klik yang membawa plugin dan skill sekaligus. Teknium disebut lebih memilih membangun di atas engine yang sudah ada ketimbang membuat engine baru dari nol.

Bagian yang paling menenangkan secara arsitektur: semua yang didemokan berjalan sebagai **plugin**, dan ngga ada yang menyentuh inti Hermes.

Perlu dicatat, sumber ini adalah rangkuman pihak ketiga atas unggahan di X, bukan pengumuman resmi dari Nous Research. Jadi perlakukan sebagai arah yang sedang dibicarakan, bukan fitur yang sudah bisa kamu pasang hari ini.

## 🗣️ Pendapat saya

Dari semua berita hari ini, yang paling saya pikirkan justru yang paling sepele: Gemini sekarang bisa membaca email kamu dari dalam mobil.

Bukan karena fiturnya buruk. Saya justru yakin ini bakal terasa nyaman sekali setelah seminggu dipakai — dan itu masalahnya. Persetujuan yang diminta Google sudah benar bentuknya: opt-in, bisa dimatikan, dan daftar aplikasinya jelas. Tapi kita sudah cukup lama belajar bahwa opt-in yang nyaman lama-lama jadi default yang ngga pernah ditinjau ulang. Buka pengaturan Gemini sebulan lagi, dan kemungkinan besar kamu ngga ingat lagi aplikasi mana yang sudah kamu sambungkan.

Soal TorchTPU, saya lebih skeptis pada narasinya ketimbang produknya. Setiap kali ada dua pengumuman dalam dua hari berturut-turut dari dua perusahaan berbeda dengan nama yang mirip, itu biasanya bukan kebetulan pasar — itu jadwal konferensi. Yang benar-benar menentukan adalah berapa TPU dan Trainium yang benar-benar tersedia tahun depan, dan itu angka yang ngga ada di pengumuman mana pun.

Untuk CMA dan NFC, saya condong ke sisi regulator, dengan satu catatan. Argumen Apple soal keamanan ngga sepenuhnya kosong — elemen aman di iPhone memang dirancang untuk itu. Tapi CMA membandingkan Inggris dengan Eropa, dan di Eropa skema serupa sudah berjalan. Kalau model yang sama jalan di satu pasar dan dianggap berbahaya di pasar lain, yang diuji bukan teknologi, tapi kesediaan menanggung biaya.

Yang paling saya suka hari ini justru part resmi Apple. Bukan karena harganya murah — 249 dolar untuk satu kamera tetap mahal. Tapi karena satu-satunya cara membuat reparasi masuk akal adalah membuat part-nya tersedia, dan itu bergerak ke arah yang benar meski lambat.

Kalian sendiri, kalau Gemini di mobil bisa membaca kalender dan email, langsung dinyalakan atau ditunda dulu sampai ada yang lain yang mencoba?

## 🔗 Sumber

- [Google Blog — Personal Intelligence brings Gemini to cars globally](https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/)
- [Engadget — Google Brings Gemini Personal Intelligence To Android Auto](https://www.engadget.com/2292027/google-brings-gemini-personal-intelligence-to-android-auto/)
- [TechCrunch — Google is bringing a more personal version of its Gemini AI assistant to your car](https://techcrunch.com/2026/10/20/google-is-bringing-a-more-personal-version-of-its-gemini-ai-assistant-to-your-car/)
- [ZDNET — Gemini on Android Auto can access my photos, emails, and calendar now](https://www.zdnet.com/tech/gemini-on-android-auto-can-look-through-my-photos-emails-and-calendar-now-im-cautiously-optimistic/)
- [TechCrunch — Google has joined Amazon in attacking Nvidias stronghold with AI app developers](https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/)
- [Engadget — UK Antitrust Regulator Wants Apple To Open Up iPhone NFC Access](https://www.engadget.com/2291486/uk-antitrust-regulartor-wants-apple-to-open-up-iphone-nfc-access/)
- [Reuters — Britain seeks to break Apples grip on contactless payments](https://www.reuters.com/world/britain-seeks-break-apples-grip-contactless-payments-2026-10-20/)
- [9to5Google — Android 17 QPR3 Beta 2 for Pixel rolling out with 21 fixes](https://9to5google.com/2026/10/20/android-17-qpr3-beta-2-pixel/)
- [Droid Life — Android 17 QPR3 Beta 2 Released for Pixel Phones](https://www.droid-life.com/2026/10/20/android-17-qpr3-beta-2-released-for-pixel-phones/)
- [9to5Mac — Apple now selling repair parts for iPhone 18 Pro, latest Mac Studio and Mac mini models](https://9to5mac.com/2026/10/20/apple-now-selling-repair-parts-for-iphone-18-pro-latest-mac-studio-and-mac-mini-models/)
- [9to5Mac — Apple keeps acquiring companies with one clear goal in mind](https://9to5mac.com/2026/10/20/apple-keeps-acquiring-companies-with-one-clear-goal-in-mind/)
- [Agent N's Hermes News — 2026-10-20](https://buttondown.com/joerg/archive/agent-ns-hermes-news-2026-10-20/)
