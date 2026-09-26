---
title: '🛰️ Google Kirim Chip AI ke Orbit, Bocoran iPad mini 8, dan Botnet yang Memasang Framework Agen Hermes'
description: 'Google menyiapkan satelit Project Suncatcher di misi Transporter-18 SpaceX, kode Apple membocorkan iPad mini 8 dan HomePod mini 2, sementara peneliti menemukan botnet Carbonato yang memasang framework agen AI Hermes di host Docker yang terekspos.'
pubDate: 2026-09-26T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## TL;DR

- **Google** akan menerbangkan satelit **MVP** untuk uji Project Suncatcher di misi rideshare **Transporter-18** milik SpaceX, membawa empat Tensor Processing Unit ke orbit.
- Peneliti **ThreatDown** menemukan botnet **Carbonato** yang menyusup ke Docker daemon tanpa autentikasi, lalu memasang **framework agen AI Hermes** dengan agen bernama GH0ST.
- Kode Apple membocorkan **iPad mini 8 (A20 Pro)**, warna baru **HomePod mini 2**, dan **Apple TV 4K generasi keempat** — semuanya dijadwalkan hadir bulan Oktober.
- **Apple Intelligence** di macOS 27 bisa memakan **hingga 30 GB** penyimpanan, dan tombol untuk mematikannya sudah dihapus.
- **Android Dev Summit** kembali setelah absen sejak 2022, dengan agenda yang mulai menyebut **Android 18**.

## 🛰️ Google Kirim Chip AI ke Orbit Lewat SpaceX

Google menyatakan pada Kamis bahwa uji pertama Project Suncatcher di orbit akan diterbangkan pekan depan menggunakan misi rideshare **Transporter-18** milik SpaceX — menurut Teslarati dijadwalkan **1 Oktober**. Satelitnya bernama **MVP**, berukuran kira-kira sebesar lemari es, dan membawa **empat Tensor Processing Unit** — chip yang sama yang dipakai Google di pusat data daratnya.

Rencana awalnya adalah meluncurkan dua satelit khusus pada 2027. Google memilih bergerak lebih cepat dengan mengintegrasikan chipnya ke dalam satu satelit yang sudah ada. Panel surya MVP memasok sekitar **satu kilowatt** daya, dan Google akan menjalankan model Gemini di TPU tersebut hanya dalam ledakan singkat sekitar **15 menit** sebelum chip dimatikan agar radiator bisa membuang panas.

Google menyebut TPU Trillium-nya lolos uji getaran yang meniru beban peluncuran berkelanjutan hingga **10g**, dengan komponen individual menerima 50 sampai 100g, serta menahan dosis radiasi lebih besar dari yang akan diterima misi lima tahun. Google juga memegang sekitar **6 persen** saham SpaceX.

Yang menarik, Google tetap berhati-hati secara publik. Riset internalnya memperkirakan harga peluncuran harus turun di bawah sekitar **200 dolar per kilogram** sebelum pusat data orbit bisa bersaing dengan fasilitas darat dari sisi biaya energi — ambang yang diperkirakan baru tercapai sekitar pertengahan 2030-an. SpaceX sendiri mengejar gagasan serupa dengan satelit **AI1** berukuran sekitar 70 meter yang diturunkan dari perangkat Starlink V3 dan dirancang untuk **150 kW** daya komputasi puncak, sekitar 150 kali lipat MVP. Elon Musk pada Kamis menulis di X bahwa "jumlah komputasi di ruang angkasa jelas akan membulat menjadi 100 persen dari seluruh komputasi."

## 🚨 Botnet Carbonato Memasang Framework Agen AI Hermes di Docker

Ini cerita yang paling tidak nyaman hari ini. Perusahaan keamanan **ThreatDown** mendokumentasikan malware botnet bernama **Carbonato** yang menargetkan host dengan Docker daemon yang API-nya terekspos di **port 2375 tanpa autentikasi**.

Cara kerjanya: malware terhubung ke API tersebut dan memerintahkan daemon meluncurkan container berhak istimewa. Dari situ ia membuka terowongan SSH balik, memasang server SSH dengan kunci milik operator, dan melaporkan deployment baru lewat Telegram. Skrip pendukungnya menyiapkan cron job, timer systemd, `rc.local`, dan hook OpenRC agar tetap hidup setelah reboot.

Yang membuat kasus ini relevan bagi pembaca blog ini: ThreatDown menemukan bahwa **framework agen AI Hermes dipasang di host korban**, menggunakan agen bernama **GH0ST**, dengan instruksi yang menimpa file persona bawaan `SOUL.md`. Menurut peneliti, Hermes di sana menangani perintah tugas yang masuk lewat Telegram — mulai dari mengumpulkan AI API key, kredensial SSH, dan access token, menjalankan perintah, sampai mengirimkan hasilnya kembali. ThreatDown menyebut ini sebagai proses yang digerakkan operator melalui "interactive command loop": model menafsirkan tugas, menulis perintah terminal, membaca output, lalu memutuskan langkah berikutnya.

Perlu dicatat dengan tegas: yang diretas bukan framework-nya, melainkan **host Docker yang membuka API manajemennya ke internet tanpa autentikasi**. Carbonato juga punya kemampuan mirip worm — ia memindai jaringan yang terhubung ke host setiap lima menit, dan setiap kompromi baru menarik implant dari registry yang sama. ThreatDown menemukan jejaknya di sebuah registry Docker tanpa autentikasi berisi hampir 60 repositori dan 4,3 GB data image, dengan bukti operasional dari **Oktober 2024 hingga Agustus 2026**. Mereka belum bisa mengaitkan Carbonato dengan klaster ancaman yang dikenal, tetapi menunjuk Kosta Rika sebagai kemungkinan lokasi operatornya.

Artikel yang sama juga mengingatkan bahwa Hermes sudah berkali-kali disalahgunakan dalam operasi siber berbahaya belakangan ini, termasuk operasi card-skimming berskala besar yang didokumentasikan perusahaan keamanan **Gambit** dan mencuri **600.000** detail kartu kredit.

## 🍎 Bocoran: iPad mini 8, HomePod mini 2, dan Apple TV 4K

Kontributor MacRumors **Aaron Perris** menemukan beberapa gambar resmi produk yang belum diumumkan di dalam kode Apple. Hasilnya cukup lengkap untuk memastikan keberadaan tiga perangkat sekaligus.

**iPad mini berikutnya** akan memakai chip **A20 Pro**, sistem speaker baru, dan kamera depan yang dipindah ke orientasi lanskap. Rumor sebelumnya menyebut layar OLED sebagai peningkatan utamanya. **HomePod mini 2** muncul dalam lima warna: green, pink, blue, white, dan black, dengan desain bulat yang tetap sama. Ada pula bukti model **Apple TV 4K generasi keempat** — perangkat yang sudah empat tahun tidak disentuh.

Dari sisi lain, MacRumors juga mengonfirmasi spesifikasi **iPad 12** dari kode Apple: chip **A19**, **8 GB RAM**, chip jaringan **N1**, dan modem **C1X**. Lompatan terpentingnya bukan sekadar performa: A19 mendukung Apple Intelligence, sehingga iPad generasi ke-12 akan mendapat seluruh fitur AI dan Siri yang justru tidak ada di iPad 11 dengan A16. Modem C1X mendukung 5G sub-6GHz dan lebih efisien daripada modem Qualcomm di iPad saat ini, sementara N1 membawa Wi-Fi 7, Bluetooth 6, dan Thread. Untuk iPad 12 sendiri Apple belum mengumumkan tanggal, dan MacRumors memperkirakan baru hadir sekitar musim semi 2027 — sedangkan iPad mini dikabarkan menyusul sebelum akhir Oktober.

## 💻 Apple Intelligence Makan Hingga 30 GB di macOS 27

Masih soal macOS 27. Setelah Anda memasangnya dan terhubung ke internet, **Apple Intelligence datang entah Anda memintanya atau tidak**. Model on-device diunduh otomatis, dan tidak ada lagi saklar induk untuk menghentikannya.

Dokumen dukungan Apple sendiri menyebut fitur terbarunya memerlukan hingga **14 GB** pada Mac berchip M3 atau lebih baru dengan minimal 12 GB unified memory, dan hingga **8 GB** pada Mac kompatibel lainnya. Angka di dunia nyata sering lebih tinggi. **MacRumors** mencatat 20,67 GB untuk Apple Intelligence di Mac mini M4 Pro. **Ars Technica** melihat 22,42 GB di MacBook Air M3 setelah pemasangan bersih macOS 27.0 beta 7. Pengguna Reddit melaporkan angka yang lebih besar lagi: **30,16 GB** pada pemasangan Release Candidate dan 24,35 GB di MacBook Pro M3 Pro.

Yang berubah di macOS 27 dan iOS 27 adalah hilangnya toggle yang dulu bisa mematikan Apple Intelligence sekaligus menghapus file yang sudah diunduh. Siri AI kini diperlakukan sebagai komponen sistem inti. Sebuah celah tak resmi yang diuji **AppleInsider** adalah menghapus folder generative models utama dari Recovery. Dalam pengujian itu, Storage semula menampilkan 27,59 GB lalu turun jadi 3,07 GB, dan ruang tersedia bertambah sekitar 14 GB. Metodenya tidak resmi, modelnya bisa kembali terpasang sendiri, dan sebaiknya Anda mencadangkan data dulu.

## 📱 Android Dev Summit Kembali, Android 18 Mulai Disebut

Google menghidupkan lagi **Android Dev Summit** pada 2026, setelah konferensi pengembang terakhirnya pada 2022. Acaranya berjalan dua hari di kantor pusat Google di Mountain View, ditambah acara satelit **"Extended"** di London.

Agendanya memuat keynote bersama jajaran pimpinan Android dan empat jalur konferensi: **AI experiences, Android XR, Apps foundation, serta Tools and performance**. Yang paling menarik, ini adalah kemunculan pertama nama **Android 18** — antara lain lewat sesi yang menjanjikan "powerful new graphics features". Satu sesi menyebut kemampuan grafis baru di Jetpack Compose dan Android 18, dari mesh gradient sampai progressive blur, tanpa mengorbankan daya baterai atau frame rate.

Di sisi lain, **Android 17 QPR2 Beta 6** sudah mulai digulirkan ke penguji Pixel dengan perbaikan reboot tak terduga dan kernel crash sebagai fokus utama, dan Pixel 11 dilaporkan mulai menguji fitur **Call for Me** yang membiarkan Gemini menelepon atas nama Anda. Google Messages juga mulai menggelindingkan gestur baru untuk akses timestamp dan balasan langsung.

## 🖼️ Adobe Bawa Photoshop dan Lightroom Masuk ke Dalam Gemini

**Adobe** mengumumkan bahwa mereka membawa perangkat lunaknya langsung ke dalam platform AI **Google Gemini**. Langkah ini menyusul integrasi serupa ke ChatGPT, Claude, Slack, dan Copilot.

Lewat integrasi bernama Adobe in Gemini, pengguna bisa meminta Gemini mengerjakan berbagai tugas memakai alat profesional dari **Photoshop, Lightroom, Express, dan Firefly** — semuanya lewat percakapan. Contohnya: mengunggah sekumpulan foto dan meminta Gemini memberi tampilan serta warna yang konsisten, mengoptimalkan pencahayaan, memotong gambar ke format tertentu, atau membuat template Express khusus sesuai kebutuhan. Adobe menyebut ini sebagai "langkah pertama" dalam kemitraannya dengan Google, dan fungsinya sudah mulai digulirkan di semua paket Gemini — pengguna hanya perlu akun Adobe. Sisi praktisnya cukup jelas: bagi banyak orang, membuka Photoshop penuh jadi tidak lagi wajib untuk pekerjaan edit ringan.

## 💡 Inti Hari Ini

Tiga dari lima berita hari ini sebenarnya bicara soal hal yang sama dari sudut berbeda: **komputasi dan model AI makin mahal untuk "dititipkan"**. Google sampai harus menaruh chipnya di orbit untuk mencari energi murah. Apple menitipkan model on-device ke SSD pengguna tanpa bisa dimatikan. Dan di sisi gelap, framework agen open source jadi alat yang menarik justru karena kemampuannya membaca output dan mengambil keputusan sendiri. Yang terakhir itu pengingat paling praktis hari ini: jika Anda menjalankan Docker atau agen AI di server, tutup API manajemen Anda dari internet. Port 2375 tanpa autentikasi adalah pintu depan yang terbuka lebar.

## Sumber

- [Google just picked SpaceX for its first step into orbital AI — Teslarati](https://www.teslarati.com/google-suncatcher-spacex-orbital-ai/)
- [New Carbonato malware uses AI agents to hijack exposed Docker hosts — BleepingComputer](https://www.bleepingcomputer.com/news/security/new-carbonato-malware-uses-ai-agents-to-hijack-exposed-docker-hosts/)
- [iPad Mini With A20 Pro, New HomePod Mini Colors, and New Apple TV 4K All Just Leaked — MacRumors](https://www.macrumors.com/2026/09/25/new-ipad-mini-homepod-mini-apple-tv-leaked/)
- [Apple Code Confirms iPad 12 Specs: A19, 8GB RAM, N1, C1X Modem — MacRumors](https://www.macrumors.com/2026/09/25/ipad-12-feature-leak/)
- [Leaks reveal a new Apple HomePod mini, iPad mini, and Apple TV 4K — The Verge](https://www.theverge.com/tech/1000772/apple-code-leak-homepod-mini-2-ipad-mini-8-apple-tv-4k)
- [Apple Intelligence is eating up to 30GB on some Macs after macOS 27 — MacDailyNews](https://macdailynews.com/2026/09/25/apple-intelligence-is-eating-up-to-30gb-on-some-macs-after-macos-27/)
- [Apple has big October coming for new hardware and software, here is the lineup — 9to5Mac](https://9to5mac.com/2026/09/25/apple-has-big-october-coming-for-new-hardware-and-software-heres-the-lineup/)
- [Google brings back Android Dev Summit with Android 18 powerful new graphics features tease — 9to5Google](https://9to5google.com/2026/09/25/android-dev-summit-android-18/)
- [Android 17 QPR2 Beta 6 is rolling out — Android Central](https://www.androidcentral.com/apps-software/android-os/android-17-qpr2-beta-6-is-rolling-out-unexpected-reboots-and-kernel-crash-fixes-lead-the-way)
- [Google Messages rolls out new swipe for timestamps, reply gesture — 9to5Google](https://9to5google.com/2026/09/25/google-messages-timestamps-reply/)
- [You Can Edit Your Photos With Lightroom and Photoshop Inside Google Gemini — PetaPixel](https://petapixel.com/2026/09/25/you-can-edit-your-photos-with-lightroom-and-photoshop-inside-google-gemini/)
- [Qualcomm is reportedly building official drivers to bring PC game emulation to Android phones — TweakTown](https://www.tweaktown.com/news/113745/qualcomm-is-reportedly-building-official-drivers-to-bring-pc-game-emulation-to-android-phones/index.html)
