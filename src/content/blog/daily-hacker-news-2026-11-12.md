---
title: 'Tim Peters meninggal, dan Python kehilangan orang yang menulis Zen-nya'
description: 'Rangkuman Hacker News 12 November 2026: Tim Peters wafat dan meninggalkan Zen of Python serta Timsort, AWS merilis emulator lokal untuk API-nya sendiri, United Airlines melarang agen AI memesan tiket, alarm asap palsu hampir membunuh datacenter Jane Street, Gemini Decisions API menjawab tanpa menulis kalimat, dan CVE kritis di Apache HTTP Server.'
pubDate: 2026-11-12T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Python', 'AI', 'keamanan']
---

## 🔍 TL;DR

- **Tim Peters meninggal** pada 15 Juli 2026, dan kabarnya baru diumumkan Guido van Rossum di forum Python kemarin. Ia menulis **Zen of Python (PEP 20)** dan menciptakan **Timsort** pada 2002, algoritma yang kemudian dipakai Java dan Android. Thread-nya memuncaki Hacker News dengan **1.300 poin dan 153 komentar**. _(discuss.python.org)_
- AWS merilis **aws-emulator**, emulator lokal untuk API AWS. Kamu bisa menjalankan kode tanpa akun AWS, tanpa tagihan, dan tanpa koneksi ke cloud. **899 poin, 249 komentar**. _(github.com/aws)_
- **United Airlines melarang agen AI** memesan tiket atas nama penumpang, alasannya keamanan kredensial dan aturan federal soal verifikasi bagasi. **594 poin, 617 komentar** — salah satu diskusi paling ramai hari ini. _(CBS News)_
- Alarm asap palsu di gedung 1 New York Plaza memicu sistem yang mematikan pendingin datacenter Jane Street. Suhu sempat menyentuh **143,6 derajat Fahrenheit** sebelum listrik semua rak dicabut manual. _(michael.bacarella.com)_
- Google memperkenalkan **Gemini Decisions API**: satu model yang menilai sampai **1.000 pertanyaan ya/tidak** dalam satu lintasan, dengan latensi **150–250 ms** dan tarif **0,10 dolar per 1 juta token input**. _(blog.google)_
- **CVE-2026-119618**: race condition di modul HTTP/2 Apache HTTP Server yang bisa berujung RCE tanpa autentikasi. Perbaikannya ada di versi **2.4.71**. _(wiz.io)_

## 🐍 Tim Peters, 1952–2026: orang yang menulis aturan main Python

Guido van Rossum membuka thread di forum Python dengan kalimat yang berat: Tim Peters meninggal lebih awal tahun ini, pada 15 Juli. Pengumumannya baru muncul kemarin, dan reaksi di Hacker News langsung meledak — 1.300 poin, angka yang biasanya cuma didapat berita besar.

Buat kamu yang menulis Python tanpa pernah membaca dokumen PEP, nama Tim Peters mungkin tidak familiar. Tapi kamu hampir pasti pernah menjalankan `import this` dan melihat puisi pendek tentang "explicit is better than implicit". Itu tulisannya. Zen of Python, PEP 20, adalah dokumen paling sering dikutip di dunia Python, dan isinya bukan tutorial teknis — isinya soal selera, soal cara memilih, soal kapan berhenti menambahkan fitur.

Guido menulis hal yang lebih personal: sebelum Zen of Python ada, Tim sudah jadi mentor dan co-designer bahasa itu. Kontribusi pertamanya sederhana dan sangat praktis — ia meyakinkan Guido bahwa Python harus mendukung aritmetika campuran antara `int` dan `float`, karena itu yang diharapkan pengguna biasa. Keputusan itu terdengar sepele sekarang, tapi itulah yang membuat Python terasa ramah untuk pemula.

Di milis Python, Tim dikenal dengan julukan "Timbot" karena jumlah jawaban yang tidak masuk akal banyaknya, sabar, dan selalu diselingi humor kering bertanda `<wink>`. Pada 2002 ia menyumbang Timsort, algoritma pengurutan yang kemudian diadopsi Java dan Android. Kalau kamu pernah melihat error `ValueError: list is not ordered` dari Python modern, itu juga warisan pemikirannya soal invarian yang harus dijaga.

Yang paling sering disebut di thread Hacker News bukan daftar pencapaiannya, tapi caranya berdebat. Beberapa komentator menyebut Tim tidak pernah membuang pendapat orang, selalu menjelaskan kenapa sesuatu bisa atau tidak bisa jalan. Di dunia open source yang sering bising, sikap itu yang bikin orang bertahan puluhan tahun.

## ☁️ AWS emulator, dan keinginan menjalankan cloud di laptop sendiri

Repo `aws/aws-emulator` muncul di halaman depan dengan 899 poin. Isinya sesuai namanya: emulator lokal untuk API AWS. Kamu jalankan programnya, arahkan environment variable SDK ke endpoint lokal itu, lalu kode kamu berjalan seperti biasa — tanpa akun AWS, tanpa kredensial, tanpa tagihan.

Ada tiga mode pemakaian yang disebut di README. Mode server untuk CLI dan SDK apa pun, mode container untuk Windows dan macOS, dan mode embedded di mana emulator dijalankan in-process sebagai dev-dependency, satu instance terisolasi per test. Yang terakhir ini yang paling menarik buat tim yang punya test suite besar: tidak ada URL endpoint, tidak ada sertifikat, tidak ada variabel lingkungan yang harus diatur.

AWS sendiri yang merilis ini, dan itu bagian yang bikin ceritanya aneh sekaligus masuk akal. Selama ini emulator AWS populer justru buatan pihak ketiga seperti LocalStack. Kalau vendor cloud resmi menyediakan emulator, artinya mereka mengakui satu hal: pengalaman developer lokal adalah bagian dari daya saing produk, bukan bonus.

Tapi ada tapinya, dan README-nya jujur soal ini. Emulator ini untuk membangun dan menguji, **bukan** untuk beban produksi dan bukan untuk menguji keamanan. Tingkat kesetiaan tiap layanan ke AWS asli juga berbeda-beda, dan mereka menerbitkan skor fidelity per rilis. Jadi kalau kamu berharap bisa menghapus akun AWS dan tetap yakin semuanya identik, itu harapan yang salah.

## ✈️ United Airlines melarang agen AI memesan tiket

Ini berita yang paling banyak dikomentari hari ini: 617 komentar untuk 594 poin, rasio yang menandakan perdebatan, bukan sekadar bacaan.

United Airlines mengumumkan bahwa agen AI tidak boleh lagi memesan tiket atas nama penumpang. Alasannya dua. Pertama, agen butuh akses ke data pribadi termasuk kredensial pembayaran, dan United menyebut berbagi kredensial akun dengan asisten AI pihak ketiga bisa membocorkan informasi sensitif atau memicu pembelian dan perubahan akun yang tidak diinginkan. Kedua, beberapa tindakan seperti check-in lewat agen bisa melanggar aturan federal, termasuk kewajiban penumpang memverifikasi langsung bahwa bagasinya tidak berisi barang terlarang.

Perusahaan menyatakan mereka membatasi akses langsung di platform digitalnya, dan juga lewat agensi travel serta aggregator. Kebijakan booking dan ticketing ikut diperbarui.

Analis penerbangan Henry Harteveldt dari Atmosphere Research Group memberi konteks yang lebih dingin ke CBS News: United pada dasarnya tidak ingin menambah perantara baru yang mungkin lebih kuat dari yang sudah ada — Google, situs pembanding harga, dan agen travel online. Pencarian tiket memakan biaya bagi maskapai, dan lonjakan pencarian oleh bot AI jelas bukan hal yang ingin mereka biayai.

Menariknya, arah maskapai lain berbeda. Southwest justru membuka inventaris penerbangannya ke pengguna ChatGPT lewat aplikasi AI itu. Dan tiket United tetap bisa dipesan lewat Kayak, Hopper, dan Google Flights. Jadi yang dilarang bukan otomatisasi secara umum, melainkan agen pribadi yang memegang kredensial akun pelanggan.

## 🚨 Alarm asap palsu yang hampir menenggelamkan datacenter Jane Street

Michael Bacarella menulis kisah dari dalam, dan tulisannya diberi keterangan bahwa seluruhnya ditulis tangan manusia. Ia dulu bagian dari tim sistem Jane Street, yang ia gambarkan sebagai programmer OCaml kerah biru: kalau ada yang rusak, mereka yang berlari di koridor.

Latar belakangnya penting. Jane Street bersikeras menaruh ruang mesin dekat lantai trading, sebagian karena takut strategi mereka dicuri, sebagian karena ingin bisa mencabut kabel listrik dengan berlari menyeberang koridor kalau sistem trading mengamuk. Kebiasaan itu datang dari partner yang pernah bertugas di kapal selam nuklir.

Suatu hari kontraktor sedang memotong sesuatu di ruang persiapan sebelah datacenter. Debu beterbangan dan memicu alarm asap. Masalahnya bukan alarmnya. Sprinkler di gedung perkantoran tidak berisi air bertekanan sampai ada deteksi asap, dan yang benar-benar menyemprot adalah kepala sprinkler yang punya sumbat peka panas. Jadi selama tidak ada panas, tidak ada air.

Tapi ada satu rangkaian lagi: saat alarm asap aktif, sistem mematikan unit CRAC, pendingin ruangan, karena mengalirkan udara di ruangan berasap dianggap memperbesar api. Dan di situlah jebakannya. Ruangan penuh rak server butuh pendingin terus-menerus. Pendingin mati, suhu naik, dan pipa sprinkler yang sudah bertekanan tinggal menunggu satu kepala sprinkler melepas sumbatnya.

Misi Bacarella jadi jelas: sampai ke ruang mesin secepat mungkin dan cabut listrik semua perangkat sebelum suhu melewati 150 derajat Fahrenheit. Ia berlari di Water Street, menunggu lift naik 33 lantai, masuk ke ruangan yang terasa seperti sauna, lalu mencabut kabel daya rak demi rak dengan dua tangan. Suhu berhenti di 143,6 derajat Fahrenheit.

Pasar utama New York sedang tutup hari itu, jadi downtime-nya minim dan semuanya hidup lagi besok pagi. Keputusan setelah rapat: sprinkler tetap ada, prosedur dan pengawasan diperketat, dan server tetap tinggal di gedung kantor. Belakangan ia menulis monitor kecil di OCaml yang tiap menit menanyakan suhu ke setiap server Linux dan menghitung rata-ratanya, karena telemetri CRAC ternyata tidak cukup bisa dipercaya.

## 🧠 Gemini Decisions API: menjawab tanpa menulis kalimat

Google merilis Gemini Decisions API dengan model baru bernama Gemini Decision 1. Idenya sempit dan itu justru yang membuatnya menarik: bukan chatbot, bukan generator teks, tapi mesin untuk pertanyaan tertutup.

Kamu mengirim satu input multimodal — teks, gambar, audio, video, atau PDF sampai 256 ribu token — bersama sampai 1.000 pertanyaan ya/tidak, pilihan ganda, atau penilaian rubrik. Model tidak menulis jawaban token demi token. Ia memberi skor ke opsi yang kamu sediakan dalam satu forward pass, lalu mengembalikan probabilitas dan skor keyakinan.

Angka yang diklaim Google: latensi 150–250 ms end-to-end, tarif 0,10 dolar per 1 juta token input, dan token output tidak ditagih sama sekali. Mereka menyebutnya sekitar lima kali lebih murah dibanding Gemini 3.5 Flash-Lite lewat Interactions API pada rangkaian benchmark yang sama. Latensinya juga diklaim hampir datar dari 1 sampai 100 pertanyaan per request.

Kegunaan praktisnya jelas buat tim yang sedang membangun agen: memilih tool mana yang dipakai, memeriksa apakah sebuah jawaban melanggar kebijakan, merutekan query ke model yang tepat, atau menilai konteks sebelum masuk ke prompt panjang. Semua itu pekerjaan klasifikasi, dan klasifikasi memang tidak butuh model yang pandai menulis paragraf.

Tapi ada tapinya. Skor probabilitas hanya berguna kalau kalibrasinya bagus, dan klaim kalibrasi terbaik selalu datang dari benchmark internal vendor. Kalau keputusanmu punya konsekuensi mahal — menolak klaim asuransi, misalnya — kamu tetap perlu mengukur sendiri di data kamu.

## 🛡️ CVE-2026-119618: lubang kritis di Apache HTTP Server

Wiz mempublikasikan analisis tentang CVE-2026-119618, race condition di modul HTTP/2 Apache HTTP Server. Masalahnya ada di fungsi `assign_headers()`: sinkronisasi yang salah saat beberapa thread berbagi resource membuat penyerang bisa merusak heap memory, dan dari situ mengeksekusi kode secara remote tanpa autentikasi.

Yang menemukan bukan satu pihak. Anthropic dan tim Vulnerability Research Google Cloud menemukannya secara independen. Saat tulisan Wiz diterbitkan, belum ada exploit publik dan belum ada laporan eksploitasi di lapangan.

Perbaikannya ada di Apache HTTP Server 2.4.71 atau lebih baru. Kalau kamu memakai build mod_h2 terpisah dari GitHub, versinya harus lebih baru dari 2.0.42. Kalau belum bisa patch, matikan dukungan HTTP/2 sementara.

Data Wiz bikin angka ini terasa mendesak: 64 persen lingkungan cloud yang mereka amati punya resource yang rentan, dan 51 persen punya instance yang terekspos publik. Catatan pentingnya, angka itu tidak memperhitungkan konfigurasi — jadi belum tentu semuanya benar-benar bisa dieksploitasi. Tapi kalau kamu punya Apache dengan HTTP/2 menyala dan menghadap internet, hari ini bukan hari yang tepat untuk menunda patch.

## 🗣️ Pendapat saya

Dari enam cerita di atas, yang paling saya pikirkan justru yang paling sepi secara teknis: tulisan Jane Street. Bukan karena ceritanya seru — meski memang seru — tapi karena keputusan akhirnya terasa jujur. Setelah hampir kehilangan datacenter, mereka tidak pindah. Mereka memperketat prosedur dan menulis monitor suhu sendiri. Itu keputusan yang tidak akan menang di presentasi vendor mana pun.

Soal Tim Peters, saya nggak punya anekdot pribadi. Saya cuma pernah membaca Zen of Python dan menganggapnya wajar, padahal kalimat seperti "readability counts" itu hasil perdebatan bertahun-tahun, bukan kutipan motivasi. Yang bikin saya agak sedih: kabar wafatnya baru sampai ke publik empat bulan kemudian. Orang yang pengaruhnya sebesar itu tetap bisa pergi tanpa riuh.

Untuk United Airlines, saya condong setuju pada larangannya, tapi bukan karena alasan yang mereka tulis. Kredensial akun yang dipegang agen pihak ketiga memang mimpi buruk keamanan, dan itu masalah desain yang belum selesai. Tapi kalau maskapai bisa memblokir bot karena pencarian memakan biaya, maka dalam beberapa tahun kita akan melihat dua kelas pelanggan: yang punya agen dan yang harus mengisi form sendiri.

Dan soal AWS emulator, saya senang ada, tapi saya nggak akan buru-buru memakainya untuk test suite utama. Skor fidelity per layanan itu pengakuan bahwa emulator selalu ketinggalan dari API aslinya. Selama test-nya masih hijau di emulator dan merah di produksi, nilainya cuma sebatas mempercepat iterasi, bukan menjamin kebenaran.

## 💬 Pertanyaan buat kalian

Kalau agen AI kamu dilarang memesan tiket pesawat, apakah kalian akan kembali mengisi form sendiri, atau pindah ke maskapai yang mengizinkannya? Dan buat yang sudah pakai emulator cloud lokal: seberapa sering test kalian lolos di emulator tapi gagal di AWS asli?

## 🔗 Sumber

- In Memoriam: Tim Peters 1952–2026 — https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028
- Diskusi Hacker News Tim Peters — https://news.ycombinator.com/item?id=50450488
- aws/aws-emulator di GitHub — https://github.com/aws/aws-emulator
- Diskusi Hacker News AWS emulator — https://news.ycombinator.com/item?id=50456631
- United Airlines bans AI agents from booking flights (CBS News) — https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/
- Diskusi Hacker News United Airlines — https://news.ycombinator.com/item?id=50458900
- How a false smoke alarm almost drowned Jane Street only NYC datacenter — https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/
- Diskusi Hacker News Jane Street — https://news.ycombinator.com/item?id=50455394
- Gemini Decisions API (Google) — https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
- Diskusi Hacker News Gemini Decisions API — https://news.ycombinator.com/item?id=50456791
- Critical RCE Vulnerability in Apache HTTP Server (Wiz) — https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability
- Diskusi Hacker News CVE-2026-119618 — https://news.ycombinator.com/item?id=50462177
