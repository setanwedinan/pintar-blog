---
title: '🔒 Google Wajib Buka Lelang Iklan ke Rival 6 Tahun, Lapisan Keamanan Baru untuk Agen AI & Mac mini M5 Pro Hening 4 dB'
description: 'Hakim memerintahkan Google membuka lelang iklan dan berbagi data selama enam tahun, Google merilis Agent Anomaly Detection, agen keluarga CC masuk Google Labs, dan Mac mini M5 Pro tercatat hanya 4 dB saat idle.'
pubDate: 2026-09-18T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## TL;DR

- **Hakim membuka putusan 106 halaman** soal remedi perilaku kasus antitrust adtech Google: Google tidak perlu dipecah, tapi dilarang memberi perlakuan istimewa pada layanannya sendiri di lelang iklan, berlaku global selama **enam tahun**.
- **Agent Anomaly Detection** dari Google memantau agen AI yang berjalan di Agent Runtime, mendeteksi penyalahgunaan tool, loop tak berujung, dan perilaku menyimpang.
- **CC**, eksperimen Google Labs, adalah agen AI untuk **satu keluarga hingga enam orang** dengan akun Google sendiri, memori bersama, dan briefing "Your Day Ahead" setiap pagi.
- **Mac mini M5 Pro tercatat 4 dB** dan Mac Studio M5 Ultra 7 dB pada posisi operator saat idle, menurut laporan akustik Apple yang dibaca MacObserver.
- **Intern 2**, piramida AI seharga $299 dari Autonomous.ai, dijual dalam kondisi sudah terisi **Hermes atau OpenClaw**.

## ⚖️ Google Harus Buka Lelang Iklan ke Rival Selama Enam Tahun

Hakim federal yang menangani perkara antitrust adtech Google akhirnya membuka putusannya secara publik pada Rabu. Dokumen **106 halaman** itu memuat daftar remedi perilaku yang harus dijalankan Google, sebagaimana dirangkum Quartz, Business Insider, dan MediaPost.

Poin utamanya: Google **tidak perlu memecah bisnis adtech-nya**. Namun raksasa pencarian itu dilarang memberi perlakuan istimewa kepada layanannya sendiri dalam lelang iklan yang tampil di situs-situs di seluruh internet terbuka. Quartz menyebut putusan itu juga memerintahkan **interoperabilitas, berbagi data, dan kehadiran pemantau kepatuhan internal** di dalam perusahaan. MediaPost mencatat konsekuensinya berlaku sebagai pengawasan global selama enam tahun.

Tanggapan Google dikutip Business Insider: mereka menyatakan "sangat senang" karena pengadilan menolak usulan Departemen Kehakiman AS untuk memecah perkakas yang membantu usaha kecil menjangkau pelanggan baru. Artinya, perdebatan kini bergeser dari pertanyaan "apakah Google akan dipecah" menjadi "seberapa ketat aturan mainnya selama enam tahun ke depan".

## 🛡️ Agent Anomaly Detection: Audit untuk Agen AI yang Berperilaku Ganjil

Google memperkenalkan **Agent Anomaly Detection**, lapisan pengawasan dan audit berbasis penalaran untuk agen otonom yang dijalankan di **Agent Runtime** pada Gemini Enterprise Agent Platform dan dibangun dengan Agent Development Kit (ADK) untuk Python 1.2 atau lebih baru — Help Net Security menulis Google merekomendasikan ADK 2.1.0 ke atas. Fitur ini masih berada di tahap Private Preview.

Cara kerjanya: sistem mengevaluasi jejak (trace) yang dikeluarkan agen untuk menentukan apakah agen beroperasi di luar batas yang dimaksudkan. Ia menandai anomali perilaku, indikasi niat mencurigakan, dan pelanggaran kebijakan. Setiap temuan menyertakan tingkat keparahan, penjelasan dalam bahasa manusia, serta rekomendasi tindakan, lalu dipublikasikan ke Security Command Center agar bisa ditriase bersama temuan keamanan lain.

Ini relevan karena agen AI kini mengakses tool, kredensial, dan sistem internal. Lapisan audit semacam ini adalah jawaban atas pertanyaan yang sering muncul di ruang CISO: bagaimana kita tahu agen kita tidak sedang melakukan sesuatu yang tidak kita minta?

## 💰 Pilot "AI Contribution": Google Mulai Bayar Situs yang Dikutip AI

Melalui program bernama **"AI contribution pilot"**, Google menguji pembayaran langsung kepada situs dan penerbit ketika konten mereka dipakai dalam hasil AI — demikian lapor 9to5Google. Panel di Google Search Console menampilkan angka pembayaran, dan halaman penjelasan Google menyebut pengguna dapat mengakumulasi penghasilan ketika konten mereka berkontribusi pada hasil AI.

Langkah ini menyentuh salah satu keluhan paling keras dari industri media: ringkasan AI (AI Overviews) mengambil nilai dari artikel jurnalistik tanpa mengirim trafik yang setara. Selama bertahun-tahun jawabannya adalah "tidak ada mekanisme bagi hasil". Pilot ini adalah sinyal pertama bahwa Google bersedia menguji mekanisme tersebut, meski skalanya masih terbatas sebagai eksperimen.

## 🌍 PBB Pakai Google agar Data Global Siap Dibaca Agen AI

PBB mengumumkan kerja sama dengan Google untuk membuat kumpulan statistik globalnya lebih mudah diakses dan digunakan sistem AI. Sistem bernama **UN System Data Commons** dibangun di atas platform open source **Data Commons** milik Google, dan memungkinkan orang mencari statistik lintas badan PBB dengan kueri bahasa alami — menggantikan portal UNData yang mengharuskan pengguna menelusuri menu secara manual, seperti dilaporkan TechCrunch.

Latar belakangnya menarik: TechCrunch menyebut pergeseran ini muncul setelah **tes UNICEF** menemukan model AI terkemuka kesulitan mengambil statistik pembangunan global secara akurat. Jadi persoalannya bukan sekadar kenyamanan pencarian, melainkan keandalan data ketika pertanyaan-pertanyaan kebijakan dijawab oleh mesin.

## 👨‍👩‍👧‍👦 CC: Agen AI yang Dirawat Satu Keluarga

Google Labs memperkenalkan eksperimen baru bernama **CC**. Menurut Ars Technica, ini adalah evolusi dari produk yang diumumkan Google pada 2025 — versi orisinalnya berkembang menjadi **Daily Brief** di Gemini — tetapi CC baru dirancang sebagai sumber daya bersama untuk **hingga enam orang dalam satu keluarga**.

CC punya akun Google sendiri, sehingga setiap anggota keluarga bisa berinteraksi atau tidak berinteraksi dengannya sesuai pilihan. Agen ini hanya melihat email dari pengguna yang terhubung jika dibagikan secara eksplisit — misalnya alamat surel jadwal sekolah — dan bisa dikirimi konten lewat email atau Google Chat. CC juga dapat memantau folder Google Drive bersama, tempat dokumen dan undangan bisa diletakkan. Setiap pagi, semua pengguna terdaftar menerima email bersama **"Your Day Ahead"** berisi agenda hari itu dan pembaruan tugas sebelumnya.

Google menyatakan setiap instance CC berjalan pada cloud instance terisolasi, ditenagai Antigravity dan model Gemini terbaru — saat ini Gemini 3.8 Flash. CC tidak terikat langganan berbayar Google, hanya kompatibel dengan akun Gmail pribadi untuk pengguna 18 tahun ke atas, dan pendaftaran masih melalui daftar tunggu.

## 🧠 Dream-RSI: Pangkas Panggilan Agen hingga 162x

Tim peneliti Google dan Google DeepMind bersama University of Maryland dan University of Virginia memperkenalkan **Dream-RSI**, sistem yang membiarkan agen "bermimpi" menelusuri loop eksplorasi dengan belajar dari percobaan sebelumnya. VentureBeat mengutip hasil pengujian mereka: Dream-RSI membutuhkan **hingga 162x lebih sedikit** panggilan agen penemuan dibandingkan SimpleTES, sistem discovery yang sudah ada.

Idenya adalah membangun **"historical discovery tree"** — pohon yang menyimpan setiap keputusan agen beserta hasilnya. Karena semua hasil eksekusi sudah tersimpan, mengevaluasi strategi baru cukup dengan membaca catatan lama, tanpa menjalankan ulang agen penemuan maupun evaluatornya. Dream-RSI berjalan sebagai lapisan orkestrasi ringan yang mengatur percabangan, eksplorasi paralel, dan kapan harus berhenti, tanpa mengubah agen coding di bawahnya.

## 📱 Android: "Continue activity", MagicOS 11, dan Edge 70

Android 17 menambahkan hub pengaturan **"Continue activity"** untuk mengelola handoff tugas, streaming aplikasi, dan sinkronisasi notifikasi. Chrome Unboxed mencatat fitur ini muncul menjelang peluncuran **Googlebook**, dengan pre-order dibuka 21 September — Google sedang menyalakan saklar sisi server di ponsel Android agar perangkat dan layanan langsung bicara satu sama lain sejak hari pertama.

Di sisi produsen, **Honor** memperlihatkan MagicOS 11, versi Android 17 mereka, dan merinci daftar perangkat yang akan kebagian pembaruan itu — 9to5Google menyebut tampilannya kental dengan gaya "Liquid Glass". Sementara **Motorola Edge 70** sudah menerima Android 17 stabil dengan stackable widgets, Live Updates, dan ringkasan notifikasi, menurut Android Authority.

## ⌚ Apple Watch Series 12 & Ultra 4: Review Pertama

Dua perangkat wearable baru Apple mulai diuji media. Engadget menulis review **Apple Watch Series 12** dengan judul "Catching up and catching heat", dan mencatat Apple menjelaskan bagaimana chip **S11** plus **Secure Exclave** khusus membuat fitur pemantauan kesehatan barunya lebih terjaga privasinya. Tom's Guide menguji **Apple Watch Ultra 4** dengan cara yang lebih ekstrem — berlari 22 mil — untuk menilai klaim akurasi sensor pada jam petualangan itu.

## 💸 Harga iPhone Terancam Naik karena Harga Memori 30-40%

Macworld melaporkan harga memori dari pemasok Apple melompat **30-40 persen**, dan Apple disebut menerima kesepakatan yang tidak menyenangkan itu. Konsekuensinya jelas: kenaikan harga iPhone yang lebih jauh untuk pembeli pada 2027 dan setelahnya. Ini melanjutkan kekhawatiran yang sudah muncul pekan ini, ketika Bank of America menilai kenaikan harga iPhone 18 sebagian besar masih terserap insentif operator.

## 🍎 Apple Longgarkan Layar Persetujuan Pelacakan di Eropa

Apple sepakat mengubah ketentuan aplikasi yang meminta izin melacak pengguna (App Tracking Transparency/ATT) di sebagian Eropa. TechCrunch menulis perubahan ini merupakan hasil penyelidikan antitrust bertahun-tahun oleh regulator persaingan usaha federal Jerman dan pihak lain, yang menilai sistem ATT menguntungkan Apple sendiri karena aplikasi internal Apple bisa memakai data ekosistem tanpa layar persetujuan. Kini pengembang mendapat keleluasaan lebih besar atas cara mereka meminta izin.

## 💻 M5 Ultra Cetak 360.019 Poin Metal, Mac mini M5 Pro Hening 4 dB

Di sisi silikon, BigGo Finance melaporkan kemunculan **M5 Ultra** di Geekbench dengan skor Metal **360.019 poin** — sekitar 41 persen lebih tinggi dari M3 Ultra yang mencetak 255.009 di konfigurasi Mac Studio. Sistem yang diuji memadukan CPU 36 inti, GPU 40 inti, dan memori terpadu 256 GB, serta melaporkan skor multi-core CPU lebih dari enam kali M1 generasi pertama. Catatan pentingnya: Metal bersifat khas Apple, jadi hasil ini tidak bisa dibandingkan langsung dengan Nvidia atau AMD.

MacObserver mengangkat sisi lain yang jarang disorot: laporan akustik Apple mencatat **Mac mini 2026 (M5 Pro) hanya 4 dB** dan **Mac Studio 2026 (M5 Ultra) 7 dB** pada posisi operator saat idle maupun saat menjelajah web — diukur sesuai standar ECMA-109. Perlu dicatat, kedua laporan hanya mencakup satu konfigurasi dan tidak mengukur beban kerja berat seperti render atau kompilasi. Sementara itu Macworld mencatat Mac mini M6 sudah dibuka pre-order dengan diskon langka $30, dan BigGo menyebut model Mac mini serta Mac Studio baru dijadwalkan meluncur 22 September 2026 dengan pasokan awal terbatas.

## 🖥️ Jalankan MoE 35B di Mac mini 24 GB dengan 20,4 tok/s

AutoArk merilis paper **Edge0** yang menyimpan bobot expert model mixture-of-experts 35B di SSD, lalu mendekode pada **20,4 tok/s dengan 2,9 GiB memori aktif** di Mac mini M4 Pro 24 GB, dibandingkan 3,9 tok/s dengan 18,2 GiB saat model sepenuhnya berada di memori — begitu ringkasan AI Weekly.

Kuncinya adalah **prerouter terlatih per layer** yang memprediksi routing expert layer berikutnya satu token lebih awal, sehingga pembacaan SSD bisa tumpang tindih dengan komputasi. AutoArk menyatakan framework, checkpoint, dan adapter dirilis terbuka. Untuk kelas workstation kecil yang jadi favorit lab AI, ini arah yang jelas: model besar, memori kecil, harga per token makin murah.

## 🐹 Intern 2: Piramida $299 yang Sudah Terisi Hermes atau OpenClaw

The Register melaporkan **Autonomous.ai** — produsen techno-toys dan workstation yang sudah sebelas tahun berdiri — merilis mesin kecil bernama **Intern 2** untuk menjalankan agen AI seperti **Hermes** atau OpenClaw. Perangkat berbentuk piramida 4,7 inci itu dijual $299 dan lebih terlihat seperti ornamen ketimbang komputer.

Autonomous.ai menjual perangkatnya dalam kondisi **sudah terkonfigurasi dengan Hermes atau OpenClaw**, atau akan memasang agen pilihan pembeli dengan tambahan $50. Di dalamnya ada mikrofon, speaker, dukungan USB-C, Wi-Fi 5, dan Bluetooth 5 di bawah tutup yang menyala. Dee Tran, kepala hardware AI perusahaan itu, mengatakan pengguna memanfaatkannya "untuk berbagai tugas dengan cara yang kreatif", dan kasus penggunaan paling umum adalah **cronjob berulang, loop, dan tugas terjadwal**. Perangkat ini tidak menjalankan model lokal, melainkan mengakses inferensi berbasis cloud — dan menawarkan lingkungan terisolasi untuk agen yang dijalankan.

## 💡 Insight Hari Ini

Tiga hal saling bersambung hari ini. Pertama, **regulasi mulai menyentuh mekanika internal** layanan digital: Google tidak dipecah, tapi selama enam tahun ia harus membuka lelang iklan dan berbagi data. Kedua, **agen AI naik kelas dari mainan menjadi infrastruktur**: ada lapisan audit (Agent Anomaly Detection), ada agen keluarga dengan memori bersama (CC), dan ada hardware $299 yang dikirim sudah terisi agen. Ketiga, **ekonomi AI mulai dihitung**: Dream-RSI memangkas panggilan agen hingga 162x, Edge0 membuat model 35B muat di Mac mini 24 GB. Efisiensi, pengawasan, dan tata kelola — tiga kata yang akan menentukan siapa yang menang di tahun-tahun berikutnya.

## 🔗 Sumber

- [Quartz — Judge's full ruling reveals Google must open ad auctions to rivals for six years](https://qz.com/google-ad-tech-remedies-ruling-unsealed-091726)
- [Business Insider — Google has to make big changes to its advertising empire](https://www.businessinsider.com/what-googles-adtech-behavioral-remedies-ruling-means-in-plain-english-2026-9)
- [MediaPost — Google Faces 6 Years Of Global Oversight](https://www.mediapost.com/publications/article/418087/google-faces-6-years-of-global-oversight.html)
- [Help Net Security — Google's new agent security system detects tool misuse, loops and rogue behavior](https://www.helpnetsecurity.com/2026/09/17/google-agent-anomaly-detection-audit-layer/)
- [9to5Google — Google 'AI contribution pilot' tests paying websites when they're used in AI results](https://9to5google.com/2026/09/17/google-ai-contribution-pilot-tests-paying-websites-when-theyre-used-in-ai-results/)
- [TechCrunch — UN turns to Google to make its global data ready for AI agents](https://techcrunch.com/2026/09/17/un-turns-to-google-to-make-its-global-data-ready-for-ai-agents/)
- [Ars Technica — Google announces new experimental "CC" AI agent for families](https://arstechnica.com/google/2026/09/google-announces-new-experimental-cc-ai-agent-for-families/)
- [VentureBeat — Google's Dream-RSI cuts discovery-agent calls up to 162x](https://venturebeat.com/orchestration/googles-dream-rsi-cuts-discovery-agent-calls-up-to-162x-by-replaying-searches-it-already-ran)
- [Chrome Unboxed — Android 17 adds new 'Continue activity' settings hub ahead of Googlebook launch](https://chromeunboxed.com/android-17-adds-new-continue-activity-settings-hub-ahead-of-googlebook-launch/)
- [9to5Google — Honor confirms list of devices getting its Liquid Glass-filled Android 17 update](https://9to5google.com/2026/09/17/honor-android-17-magicos-11-update-device-list/)
- [Android Authority — Another Motorola phone just picked up its big Android 17 update](https://www.androidauthority.com/motorola-edge-70-android-17-update-3712422/)
- [Engadget — Apple Watch Series 12 review: Catching up and catching heat](https://www.engadget.com/2260989/apple-watch-series-12-review-hrv-new-health-sensing-gesture/)
- [Tom's Guide — Apple Watch Ultra 4 review](https://www.tomsguide.com/wellness/smartwatches/apple-watch-ultra-4-review)
- [Macworld — More iPhone price hikes loom as Apple reportedly accepts brutal memory deal](https://www.macworld.com/article/3237776/more-iphone-price-hikes-loom-as-apple-reportedly-accepts-brutal-memory-deal.html)
- [TechCrunch — Apple will let EU apps use less-alarming tracking-consent screens](https://techcrunch.com/2026/09/17/apple-will-let-eu-apps-use-less-alarming-tracking-consent-screens/)
- [BigGo Finance — Apple's M5 Ultra Posts 360019 Metal Score, a 41% Leap Over M3 Ultra](https://finance.biggo.com/news/3be29459-b687-48b3-9820-061af4fed82c)
- [MacObserver — M5 Pro Mac mini idles at 4 dB and M5 Ultra Mac Studio at 7 dB, per Apple](https://www.macobserver.com/news/m5-pro-mac-mini-idles-4-db-m5-ultra-mac-studio-7-db/)
- [AI Weekly — AutoArk's Edge0 Serves 35B MoE From SSD at 20 tok/s on 24GB Mac](https://aiweekly.co/alerts/autoarks-edge0-serves-35b-moe-from-ssd-at-20-toks-on-24gb-mac)
- [The Register — If a Mac mini is agentic overkill, try this glowing pyramid that runs personal bots](https://www.theregister.com/personal-tech/2026/09/17/if-a-mac-mini-is-agentic-overkill-try-this-glowing-pyramid-that-runs-personal-bots/5296964)
