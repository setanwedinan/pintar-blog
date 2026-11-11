---
title: 'Rumah yang tetap hidup saat internet mati, dan 48 agen AI yang menemukan piramida Maya'
description: 'Rangkuman Hacker News 11 November 2026: aturan home automation yang tidak bergantung server vendor memuncaki daftar dengan 1.071 poin, Verisign membatalkan pemutusan 22.000 domain .name, AlphaProof Code memverifikasi protokol Signal secara formal, Val Town menutup layanan, dan Synaptics menghentikan driver DisplayLink lewat klaim paten.'
pubDate: 2026-11-11T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'AI', 'open source']
---

## 🔍 TL;DR

- Tulisan tentang aturan home automation yang tidak bergantung pada server vendor memuncaki Hacker News hari ini dengan **1.071 poin dan 380 komentar**. Aturan pertamanya sederhana: kalau internet mati, lampu di rumah tetap harus bisa dinyalakan. _(docodethatmatters.com)_
- Verisign membatalkan rencana mematikan **22.000 domain dan email redirect .name** setelah pertarungan panjang. Registrasi baru untuk domain tingkat ketiga tetap ditutup, tapi yang sudah ada bertahan tanpa batas waktu. _(neil.fraser.name)_
- Google DeepMind memperkenalkan **AlphaProof Code**, kerangka agen multi-LLM yang memformalkan verifikasi kode protokol Signal: **lebih dari enam juta baris Lean** dalam **empat minggu**, pekerjaan yang biasanya butuh bertahun-tahun. _(deepmind.google)_
- Val Town mengumumkan penutupan layanan. Billing dihentikan hari ini, langganan yang ada dilayani gratis, dan pengguna diberi panduan migrasi ke Cloudflare, Vercel, Netlify, atau Render. _(blog.val.town)_
- Synaptics mengirim surat cease-and-desist ke pengembang driver DisplayLink alternatif, melampirkan daftar **125 paten** tanpa menyebut mana yang dilanggar. _(lwn.net)_

## 🏠 Aturan nomor satu: kalau internet mati, lampu tetap nyala

Ini cerita yang paling banyak dibicarakan hari ini, dan alasannya masuk akal. Penulis blog Do Code That Matters memaparkan aturan rumah pintar yang ia pakai sekitar sepuluh tahun, dan aturan pertamanya bukan soal teknologi terbaru: **tidak ada hal inti di rumahnya yang bergantung pada server vendor**. Kalau internet mati, rumah tetap jalan.

Yang menarik adalah daftar kegagalan yang membentuk aturan itu. Integrasi Nest-nya berhenti bekerja saat Google mengubah API. Kulkas Samsung pernah menampilkan error sertifikat TLS di layarnya sendiri. Pengendali grill Camp Chef butuh Wi-Fi hanya untuk menampilkan suhu. Semuanya perangkat yang dibeli dengan asumsi "pintar", lalu jadi bodoh begitu pihak lain mengubah sesuatu di seberang sana.

Solusi yang ia pakai bukan hal eksotis: **Tasmota di board ESP, broker MQTT, dan Node-RED di Raspberry Pi**. Semua berjalan di perangkat yang ia miliki. Alexa tetap dipakai, tapi posisinya jelas — cuma cara lain untuk menekan saklar. Kalau Alexa mati, saklar dinding dan dashboard dinding tetap berfungsi.

Ada juga bagian yang jarang dibahas di panduan home automation: **segitiga trade-off** antara murah, mudah, dan privat. Kamera cloud itu murah dan cepat dipasang, tapi harganya privasi. Saklar yang di-flash sendiri butuh waktu lebih lama, tapi bisa dihubungkan ke apa saja. Penulis menyarankan memutuskan posisi perangkat di segitiga itu sebelum membeli, bukan setelah barangnya menumpuk di rumah.

## 📛 22.000 domain .name yang hampir hilang

Neil Fraser menulis kabar yang sudah lama ditunggu: **Verisign menarik rencananya mematikan 22.000 domain dan email redirect .name**. Registrasi baru untuk domain tingkat ketiga tetap ditutup, tapi semua domain yang sudah ada — termasuk situsnya sendiri — bertahan tanpa batas waktu.

Konteksnya penting buat siapa pun yang pernah memakai domain sebagai identitas jangka panjang. TLD kecil seperti .name gampang dianggap remeh sampai registrinya memutuskan berhenti melayani. Yang menyelamatkan di sini bukan teknologi, tapi tekanan publik dan proses keberatan yang panjang dan, menurut penulisnya, mahal.

## 🧮 AlphaProof Code memverifikasi protokol Signal

Google DeepMind mengumumkan **AlphaProof Code**, kerangka agen yang dipakai untuk membuktikan properti keamanan kode protokol Signal secara matematis. Ini bukan verifikasi desain di atas kertas — mereka mengklaim berhasil membuktikan bahwa **kode terkompilasi** memenuhi properti keamanan yang ditentukan, sampai ke kode yang benar-benar berjalan di perangkat.

Cara kerjanya dibagi seperti tim riset. Manusia dan model bersama-sama menerjemahkan tujuan keamanan Signal menjadi spesifikasi matematis, lalu agen berbasis **Gemini Carbon** mengerjakan pembuktiannya dan menghasilkan **lebih dari enam juta baris Lean**. Agen kemudian mengaudit hasilnya dan menandai area yang perlu dilihat manusia — sekitar **satu persen** dari basis kode. Sisanya diperiksa otomatis oleh Lean.

Waktunya yang bikin angka ini layak dibaca: **empat minggu**, dibandingkan pekerjaan serupa yang biasanya memakan bertahun-tahun. Untuk menguji apakah sistemnya bisa membedakan kode benar dan kode rusak, mereka memasukkan kembali dua bug nyata yang pernah diperbaiki ke salinan terisolasi kode Signal. Di kedua kasus, sistem menghasilkan bukti yang diperiksa mesin bahwa versi yang bug itu tidak aman.

Ehren Kret, CTO Signal, menyebut pendekatan menerjemahkan kode hidup menjadi teorema Lean yang valid sebagai terobosan besar. Tapi ada tapinya: ini verifikasi terhadap properti yang **dispesifikasikan manusia**. Kalau spesifikasinya kurang lengkap, bukti matematisnya tetap benar untuk hal yang salah.

## 🏚️ Val Town menutup layanan

Steve Krouse mengumumkan Val Town berhenti beroperasi. Kalimatnya jujur dan tidak dibungkus: mereka tidak bisa bersaing di ruang komputasi awan. Billing dihentikan hari ini, langganan yang ada tetap dilayani gratis, dan pelanggan yang sudah membayar paket tahunan akan mendapat refund sebagian.

Yang menarik, penutupan ini disertai panduan migrasi ke **Cloudflare, Vercel, Netlify, dan Render**, plus catatan bahwa LLM zaman sekarang cukup baik untuk membantu migrasi seperti ini. Tim empat tahun disebut satu per satu di pengumuman, termasuk investor Dan Levine.

## ⚖️ Paten Synaptics menghentikan driver DisplayLink

LWN menulis kasus yang jadi pelajaran soal paten di dunia open source. Mike Lothian punya dock Dell dengan chipset DisplayLink yang performanya buruk di Linux. Ia mencoba memperbaiki driver-nya dengan bantuan LLM, lalu menulis driver DRM/KMS berbasis Rust bernama **Vino** dan mengirim RFC ke daftar dri-devel pada 17 Juni.

Ia juga membuka issue di repositori EVDI, mengirim email ke Synaptics, dan menyusun korespondensi Juli sampai Oktober. Balasan yang datang bukan bantuan. Pada 20 Juli, Michal Lukaszek dari Synaptics menjelaskan bahwa DisplayLink bukan standar terbuka, protokol dan codec-nya dilindungi portofolio paten, dan implementasi clean-room pun tidak otomatis menghindari pelanggaran paten. Pada 17 Agustus, Andrew Bateman mengirim cease-and-desist dengan lampiran **125 paten** — tanpa menyebut mana yang dilanggar.

Poin yang bikin kasus ini penting: hak cipta dan paten adalah dua hal berbeda, dan komunitas open source jauh lebih terbiasa menghindari yang pertama. Menulis ulang kode dari nol menyelesaikan masalah hak cipta, bukan masalah paten.

## 🗿 48 agen AI, 1.200 kilometer persegi, dan piramida yang belum terdaftar

Pietro Miotti menulis diary tentang agen AI-nya yang menemukan situs Maya di Meksiko yang sejauh penelusuran belum pernah dilaporkan. Semuanya berawal dari pertanyaan iseng saat traveling di Peru: kalau Hiram Bingham punya alat zaman sekarang, apa yang akan ia lakukan?

Jawaban dari beberapa agen seragam: **lidar**. Foto satelit tidak banyak membantu karena reruntuhan di hutan cuma terlihat seperti pepohonan, sementara lidar menembus celah kanopi dan memetakan tanah di bawahnya. Peru tidak tercakup dengan baik, jadi ia beralih ke wilayah Maya yang cakupan lidar publiknya jauh lebih rapi.

Prosesnya sederhana dan justru itu yang menarik: strip lidar seluas sekitar **1.200 kilometer persegi** diubah jadi gambar, lalu **48 agen** memeriksanya satu per satu seperti arkeolog yang sangat sabar, mencari piramida, platform, dan plaza sambil menyaring bukit alami, sinkhole, dan jalan. Tidak ada model khusus atau classifier — agen benar-benar melihat gambar dengan panduan yang presisi.

Hasilnya sebuah bukit di tepi jurang dengan tepi lurus dan sudut tajam, plaza yang diratakan, piramida oval setinggi **8 sampai 12 meter**, halaman berundak, dan cekungan berdasar datar yang mungkin dulu reservoir air. Dari ide sampai balasan resmi pemerintah Meksiko: **kurang dari 72 jam**.

## 📡 Starlink Mini 2 dan baterai yang bisa ditukar

SpaceX mengumumkan Starlink Mini 2, terminal satelit all-in-one yang sekarang menyatukan dish, router Wi-Fi, dan baterai dalam perangkat seukuran laptop. Klaimnya **sampai 4,5 jam** pemakaian penuh, bisa diperpanjang dengan menukar baterai tambahan yang dijual terpisah, atau dicolok ke sumber 60W lewat USB-C.

Harganya **999 dolar** menurut tangkapan layar undangan pemesanan yang dibagikan pengguna di X, termasuk langganan Roam Unlimited setahun yang menurut SpaceX bernilai 2.100 dolar. Perangkatnya justru lebih tipis dari Mini generasi pertama — **23,1 mm** dibanding 38,5 mm — meski lebih berat sekitar 3,5 pon karena baterai. Rating IP67 tetap ada. Preorder dibuka terbatas untuk pelanggan AS tertentu.

## 🗣️ Pendapat saya

Dua cerita hari ini sebenarnya bicara soal hal yang sama dari arah berlawanan. Rumah pintar yang tetap hidup saat internet mati itu soal **kepemilikan**: kamu punya perangkatnya, kamu punya jalur kontrolnya, dan tidak ada pihak lain yang bisa mematikannya dari jauh. Val Town yang menutup layanan adalah sisi lain dari koin yang sama — kode yang kamu tulis tetap milikmu, tapi tempat ia berjalan bisa hilang kapan saja.

Yang bikin saya agak geli, kasus Synaptics menunjukkan bahwa "tulis ulang sendiri" bukan jalan keluar ajaib. Selama bertahun-tahun komunitas open source diajari menghindari menyalin kode. Sekarang datang pengingat bahwa paten bisa menutup pintu yang bahkan tidak kamu ketuk. Dan itu terjadi pada orang yang justru mencoba memperbaiki pengalaman pengguna Linux di perangkat yang ia beli sendiri.

Untuk AlphaProof Code, saya ingin percaya angka empat minggu itu. Tapi verifikasi formal selalu punya pertanyaan yang sama: siapa yang menulis spesifikasinya, dan apa yang tidak masuk ke dalamnya. Membuktikan bahwa kode memenuhi definisi keamanan tertentu itu hebat. Membuktikan definisinya sudah lengkap itu pekerjaan lain, dan sejauh ini belum ada agen yang bisa menggantikannya.

## 💬 Pertanyaan buat kalian

Kalau internet di rumah kalian mati selama dua hari, apa yang masih berfungsi? Dan buat yang pernah menulis ulang sesuatu dari nol karena vendor berhenti mendukung: seberapa jauh kalian memikirkan paten sebelum mulai?

## 🔗 Sumber

- [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) — Hacker News, 1.071 poin
- [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) — Hacker News, 896 poin
- [Introducing AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) — Google DeepMind, 656 poin
- [Val Town is winding down](https://blog.val.town/winding-down) — Val Town Blog, 404 poin
- [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) — LWN.net, 434 poin
- [My AI Agents Found an Unmapped Maya Site](https://pietromiotti.com/latest/maya-site/) — Hacker News, 241 poin
- [Starlink Mini 2 adds a swappable battery](https://www.theverge.com/tech/1031028/spacex-starlink-mini-2-satellite-internet-terminal-hot-swap-battery) — The Verge, 454 poin
