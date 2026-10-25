---
title: 'iPhone Duo mulai retak di hari pertama, dan Google menempelkan nomor HP ke semua akunmu'
description: 'Beberapa pembeli iPhone Duo melaporkan layar dalam retak dalam hitungan jam setelah membuka lipatan, sementara AppleInsider mencatat toko belum kebanjiran perbaikan. Di hari yang sama terungkap bahwa Android sudah menempelkan nomor SIM ke setiap akun Google di perangkat sejak September 2025, dan ada lubang kritis di decoder Brotli yang dipakai Node.js sampai Python.'
pubDate: 2026-10-25T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Sejumlah pembeli iPhone Duo melaporkan layar dalam retak dalam hitungan jam** setelah perangkat sampai. Satu pemilik di Australia menyebut layarnya retak setelah dipakai sekitar enam jam dan dibuka kurang dari 20 kali. _(Notebookcheck via MacRumors)_
- **AppleInsider menyeimbangkan laporan itu**: toko belum kebanjiran perbaikan layar, dan uji bongkar oleh JerryRigEverything justru menunjukkan layar luar bertahan sampai level 7 skala Mohs. _(AppleInsider)_
- **Android sudah menempelkan nomor SIM ke setiap akun Google di perangkat** sejak September 2025, termasuk akun kerja dan akun sekunder. Banyak pengguna baru tahu sekarang karena email pemberitahuan dari Google. _(Engadget, Android Authority)_
- **CVE-2026-111497 di decoder Brotli** bisa membuat data terkompresi yang dibuat penyerang menimpa memori di luar buffer. Tim Imperva mendemonstrasikan eksekusi kode di satu build Node.js. _(The Hacker News)_
- **Apple menggelar acara Pro and tell 28 Oktober**, dan yang paling dinanti adalah MacBook Pro layar sentuh pertama. _(The Verge)_

## 📱 Retak di hari pertama, dan dua laporan yang saling menyeimbangkan

iPhone Duo resmi dijual 23 Oktober, dan di hari yang sama foto-foto layar retak mulai muncul di Reddit dan forum MacRumors. Seorang pemilik di Australia melaporkan layar dalam perangkatnya retak setelah sekitar enam jam pemakaian. Ia mengaku membuka lipatan kurang dari 20 kali sebelum merasakan ada yang aneh di sekitar engsel, lalu mendengar bunyi retak, dan kerusakan muncul di sepanjang lipatan. Menurut keterangannya, tidak ada kerusakan yang terlihat sebelumnya, dan Apple Store langsung mengganti unitnya.

Foto-foto lain menunjukkan garis horizontal terang yang membentang di sebagian layar dalam. Tapi konteks beberapa foto itu belum jelas, termasuk gambar yang disebut berasal dari unit demo di China.

Yang penting dicatat: **belum ada bukti ini cacat produksi yang meluas.** Jumlah unit yang bermasalah tidak diketahui, dan belum ada cukup bukti untuk menyimpulkan semua kasus punya penyebab yang sama.

Sisi seberangnya datang dari AppleInsider. Menurut mereka, toko-toko belum melihat lonjakan perbaikan layar. Uji yang dilakukan JerryRigEverything juga memberi gambaran yang lebih tenang: layar luar yang dilapisi Ceramic Shield bertahan sampai level 7 skala Mohs, dan layar dalam yang fleksibel tergores di level 2 — persis seperti foldable lain di pasar. Yang jadi catatan justru engselnya: setelah ditimbun pasir dan debu lalu dibuka-tutup berkali-kali, engsel tersumbat dan perangkat tidak bisa menutup rapat lagi.

Spesifikasinya, untuk konteks: layar OLED lipat 7,6 inci, layar luar 5,4 inci, harga mulai 1.999 dolar Amerika. Ini iPhone foldable pertama Apple.

Tapi… ada tapinya. Apple sendiri yang mengangkat soal ketahanan engsel dan layar multilayer di materi produknya. Jadi ketika laporan retak muncul di 48 jam pertama, pertanyaannya bukan cuma "berapa unit", tapi juga "seberapa jujur ekspektasi yang dibangun".

## 🔢 Nomor HP kamu, dan kenapa dia ada di semua akun

Ini yang lebih pelan tapi lebih luas dampaknya.

Android sudah menempelkan nomor SIM ke setiap akun Google yang login di perangkat sejak lebih dari setahun lalu. Dokumentasi dukungan Google menyebut nomor diverifikasi otomatis saat setup dan ditambahkan ke semua akun di ponsel, termasuk akun kerja dan akun sekunder.

Menurut Engadget, dokumentasi itu diubah antara Agustus dan Oktober 2025 untuk menyatakan verifikasi aktif secara default, dan changelog Google Play services bertanggal 8 September 2025 mencantumkan verifikasi nomor berjalan otomatis saat setup. Banyak orang baru menyadarinya sekarang, setelah email tanpa diminta dari noreply-phone-verification@google.com berdatangan memberi tahu bahwa nomor mereka sudah diverifikasi.

Cakupannya lebih lebar dari yang mungkin kamu bayangkan. Halaman dukungan Google menyebut tautan itu berlaku untuk akun dan nomor yang sudah ada maupun yang akan datang. Akun yang ditambahkan belakangan ikut memungut semua nomor di ponsel. Ganti kartu SIM, nomor baru juga menempel ke semua akun. Google dan operator juga memverifikasi ulang secara berkala, dan itu bisa memicu biaya dari operator. Pengaturannya hanya bisa diubah dari ponsel itu sendiri.

Alasannya masuk akal di permukaan: verifikasi nomor menghidupkan pemulihan akun, RCS, login dengan nomor, pencarian perangkat hilang, layanan lokasi darurat, dan Quick Share. Tapi Google tidak menjelaskan kenapa nomornya harus ada di **setiap** akun, bukan hanya akun utama.

Ada satu detail yang bikin keputusanmu lebih berat. Kaspersky menyebut mematikan verifikasi berarti kehilangan chat RCS di Google Messages dan turun kembali ke SMS. Padahal RCS terenkripsi end-to-end antara Android dan iPhone baru mulai digulirkan sejak Mei. Dan nomor tanpa verifikasi tidak bisa dipakai untuk pemulihan akun cepat.

Kalau mau mematikannya: Settings > Google > All services, lalu di Privacy & security pilih Phone number verification dan matikan Verify phone numbers automatically. Di sebagian ponsel labelnya jadi Google services and preferences. Perlu diingat, mematikan tidak berlaku surut — nomor yang sudah menempel harus dihapus manual di Personal info > Phone pada tiap akun.

## 🧨 Brotli, dan bug yang sudah diperbaiki sejak Februari tapi ngga pernah dirilis

Brotli adalah format kompresi dari Google yang dipakai hampir di seluruh web untuk mengecilkan halaman dan trafik lain. Bug-nya ada di kode C yang membuka aliran Brotli, jadi ia ikut terbawa ke apa pun yang memakai ulang kode itu: runtime bahasa, proxy, sampai paket Python.

CVE-2026-111497 memungkinkan data terkompresi yang dibuat penyerang menimpa melewati ujung buffer dan merusak memori program. Efeknya bisa crash, kebocoran memori, atau eksekusi kode yang dikendalikan penyerang. Tim Red Team Imperva, yang menyebut pekerjaannya Node2Shell, berhasil menjalankan kode di build Node.js 24.22.0 untuk Linux ARM64 — dikirim sebagai respons hasil fetch() dan sebagai body request Express.

Sebuah program hanya terpapar kalau ia membuka data Brotli yang dikendalikan orang lain. Di Node.js dan Bun, itu terjadi saat fetch() bawaan membaca respons ber-Content-Encoding: br, atau saat kode body request seperti Express 5 dan body-parser 2 membuka unggahan Brotli. Di Python, risikonya datang dari paket Brotli atau brotlicffi yang terpasang: begitu ada, klien HTTP seperti requests, urllib3, httpx, dan aiohttp otomatis membuka respons Brotli — jadi aplikasi bisa terpapar tanpa pernah mengimpor Brotli sendiri.

Vercel menambahkan aturan firewall di hari pengungkapan, tapi mengakui aturan itu tidak mencakup respons yang di-fetch fungsi kamu dari server lain. Untuk jalur itu, hanya memperbarui runtime atau library yang menutup lubangnya.

Skornya berbeda-beda tergantung siapa yang menilai. Google memberi 9,2 atau kritis di CVSS 4.0. Node.js menyebutnya high. Red Hat memberi 8,1 atau important. CISA pada 23 Oktober mencatat eksploitasi sebagai "none", dan belum ada laporan serangan nyata.

Yang paling menarik justru riwayat perbaikannya. Perubahan yang menutup celah itu sudah masuk ke kode sumber Brotli pada 27 Februari, tapi tidak ada rilis Brotli baru yang membawanya sampai 21 Oktober. OpenAI, lewat tim Codex Security yang melaporkan temuan ini, menyebut akar masalahnya memang sudah diperbaiki di kode sumber pada Februari — hanya saja saat itu belum diketahui bahwa itu memunculkan kerentanan, dan tidak ada rilis Brotli yang lebih baru.

## 🖥️ 28 Oktober, dan MacBook Pro dengan layar sentuh

Apple menggelar acara bertajuk Pro and tell pada 28 Oktober pukul 13.00 waktu Los Angeles. Menurut The Verge, yang paling mungkin muncul adalah MacBook Pro layar sentuh yang sudah jadi bahan rumor sejak awal 2023.

Kalau benar, ini laptop layar sentuh pertama dan laptop OLED pertama Apple. Nama MacBook Ultra sempat beredar, tapi Apple disebut tidak mungkin mengganti nama lini laptop andalannya. Perangkat ini kabarnya memakai Dynamic Island mirip iPhone, tanpa merombak antarmuka macOS secara dramatis — bukan hibrida iPad. Tambahannya sebatas efek pembesaran saat layar disentuh dan kontrol gestur baru di aplikasi bawaan.

Chip-nya masih seri M5, khususnya M5 Pro dan M5 Max. M6 Pro atau Max mungkin tidak ada, dan Apple diperkirakan menunggu M7 tahun depan. Model dasar MacBook Pro justru bisa naik ke M6 setelah chip itu debut di Mac mini Agustus lalu, dengan sedikit perubahan desain termasuk kamera model lubang. Sayangnya, kenaikan harga ikut diperkirakan karena kelangkaan komponen.

Selain itu ada iPad mini OLED dan pembaruan M6 untuk iMac, yang terakhir direvisi hampir dua tahun lalu dan tampaknya melewati M5 sepenuhnya.

## 🤖 ColorOS 17 jalan lebih cepat dari jadwal

OnePlus dan Oppo mengirim update stabil ColorOS 17 berbasis Android 17 lebih cepat dari target 29 Oktober. OnePlus 15 memimpin: update stabilnya sedang digulirkan di India dengan firmware CPH2745_17.0.0.102(EX01). Penguji beta dapat patch 540MB, sementara pengguna yang langsung dari ColorOS 16 menghadapi unduhan 3,5GB.

Oppo mengejar dengan tempo yang sama. ColorOS 17 aktif digulirkan ke seluruh lini Find X9 — Find X9, Find X9 Pro, Find X9 Ultra, dan Find X9s — di India, Indonesia, dan Malaysia. Foldable Oppo Find N6 menerimanya di Thailand. Ukuran filenya sekitar 500MB untuk peserta beta dan 3,5GB untuk non-beta. Realme tinggal satu-satunya merek besar di bawah payung perangkat lunak yang sama yang belum bergerak.

## 💸 10 juta dolar untuk token, dalam satu bulan

Pete Steinberger, pembuat OpenClaw, mengatakan dirinya menghabiskan 10 juta dolar untuk token AI bulan lalu. Angka itu ia sampaikan ke CEO Cloudflare Dane Knecht di Cloudflare Connect 2026 di San Francisco, dan dikutip The Register.

Knecht menyebut Steinberger punya "anggaran token yang praktis tanpa batas, yang tidak semua orang di ruangan ini punya". Jawaban Steinberger: "Yang orang tidak selalu paham, tidak semua dari itu berguna."

Ia juga mempertanyakan kecukupan infrastruktur perusahaan, dengan pertanyaan retoris soal kenapa hal ini masih memakai komputernya sendiri dan bukan sepenuhnya di cloud. InfoWorld mencatat Steinberger kini bekerja untuk OpenAI.

## 🗣️ Pendapat saya

Soal iPhone Duo, saya lebih percaya pada ketiadaan data daripada pada foto-foto yang beredar. Beberapa unit retak di hari pertama itu normal secara statistik untuk peluncuran sebesar apa pun — yang tidak normal adalah kalau Apple diam saja sampai berminggu-minggu. Yang saya tunggu bukan pernyataan resmi, tapi angka perbaikan. Kalau dalam dua minggu tidak ada angka, itu sendiri sudah jawaban.

Soal nomor HP, ini yang paling mengganggu saya. Bukan karena penomorannya, tapi karena mekanismenya berjalan diam-diam selama lebih dari setahun dan baru terasa ketika email pemberitahuan datang. Kalau sebuah fitur butuh email untuk memberi tahu pengguna bahwa fitur itu sudah aktif, mungkin desainnya memang bukan untuk pengguna.

Brotli saya baca sebagai pengingat yang bagus: perbaikan yang benar tapi tidak pernah dirilis sama saja dengan tidak ada perbaikan. Februari sampai Oktober itu delapan bulan celah yang terbuka karena proses rilis, bukan karena kode.

Dan soal 10 juta dolar token, saya ngga tahu harus iri atau ngeri. Tapi kalimat Steinberger sendiri yang paling jujur di seluruh berita hari ini: tidak semua dari pengeluaran itu berguna.

Kalian sendiri bagaimana — kalau harus pilih satu, mana yang lebih mengganggu: layar 2.000 dolar yang retak, atau nomor HP yang sudah nempel di semua akun tanpa kamu sadari?

## 🔗 Sumber

- Notebookcheck — [Apple foldable iPhone reportedly cracks within hours](https://www.notebookcheck.net/Apple-s-2-000-foldable-iPhone-reportedly-cracks-within-hours-as-owners-report-display-failures.1432971.0.html)
- AppleInsider — [Apple Stores aren't flooded with iPhone Duo screen repairs](https://appleinsider.com/articles/26/10/24/youtubers-break-the-iphone-duo-but-stores-arent-seeing-broken-displays)
- Engadget — [Google is quietly linking your phone number to other Android accounts](https://www.engadget.com/2292018/google-quietly-linking-phone-number-to-android-accounts/)
- The Hacker News — [Brotli Decoder Flaw Behind Node.js RCE](https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html)
- The Verge — [What to expect from Apple Pro and tell event](https://www.theverge.com/tech/1018169/what-to-expect-apple-pro-and-tell-event-touchscreen-macbook-pro)
- Nokiamob — [OnePlus and Oppo Launch Stable ColorOS 17 Ahead of Schedule](https://nokiamob.net/2026/10/24/coloros-17-rolling-out-now-how-to-update-your-oneplus-or-oppo-eligible-devices/)
- InfoWorld — [OpenClaw creator spent 10 million on AI tokens last month](https://www.infoworld.com/article/4239758/openclaw-creator-spent-10-million-on-ai-tokens-last-month.html)
