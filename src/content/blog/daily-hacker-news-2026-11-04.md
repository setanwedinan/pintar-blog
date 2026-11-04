---
title: 'Renault Latitude, satu jam yang bikin orang membongkar firmware mobilnya sendiri'
description: 'Rangkuman Hacker News 4 November 2026: seorang pemilik Renault Latitude 2014 harus menjailbreak head unit TomTom Carminat hanya untuk mengubah zona waktu, robot gripper open-source 800 dolar yang menggantung dari langit-langit kamar, Nvidia RTX Spark di Linux yang turun ke 780 MHz, C++26 gagal di pemungutan suara ISO, Fujifilm menaikkan produksi pita magnetik lima kali, dan Geoffrey Hinton yang bilang mungkin kita lebih baik tanpa AI.'
pubDate: 2026-11-04T13:00:00Z
tags: ['berita', 'Hacker News', 'AI']
---

## 🔍 TL;DR

- Seorang pemilik Renault Latitude 2014 membongkar firmware head unit TomTom Carminat LIVE dan mengeksekusi kode sebagai root cuma untuk membetulkan jam yang meleset satu jam _(nns.ee)_
- Stringman, robot gripper open-source seharga 800 dolar, menggantung dari empat titik di langit-langit dan menjangkau seluruh volume kamar dengan empat motor _(neufangled.com)_
- Nvidia RTX Spark di Linux mentok sekitar 780 MHz saat dicas, turun dari sekitar 2,2 GHz di Windows, dan inferensi GPT-OSS-120B jatuh dari 65,4 ke 13,9 token per detik _(MindStudio)_
- C++26 gagal di pemungutan suara DIS ISO pada 23 Oktober 2026, pertama dalam sejarah C++, gara-gara fitur Contracts _(andreasfertig.com)_
- Fujifilm menanam sekitar 10 miliar yen untuk menaikkan kapasitas produksi pita LTO lima kali lipat, dan alasannya AI _(Ars Technica)_
- Geoffrey Hinton bilang dalam 10 tahun akan ketahuan apakah risiko AI bisa dikelola, dan mungkin umat manusia lebih baik tanpa AI _(The Guardian)_

## 🚗 Satu jam yang bikin orang membongkar firmware mobil

Ini cerita paling banyak dibicarakan di Hacker News hari ini: 878 poin dan 332 komentar. Masalah awalnya sepele sampai terasa konyol. Estonia baru berpindah dari waktu musim panas UTC+3 ke UTC+2, jadi jam di dasbor mobil meleset satu jam. Pemiliknya masuk menu pengaturan, mencari opsi atur waktu, dan opsi itu tidak ada.

Yang dia punya: mobil Renault Latitude tahun 2014 dengan head unit TomTom Carminat LIVE, SoC Samsung S5P6440, dan TomTom OS berbasis Linux 2.6.28.10. Dua tombol Settings di dasbor. Satu berfungsi tapi cuma mengatur Bluetooth dan phonebook. Satunya lagi tidak berfungsi dan memunculkan pesan "No maps detected!"

Penjual sebelumnya sudah memperingatkan: mobil ini butuh kartu SD peta cuma untuk mengubah jam. Waktu itu terdengar tidak masuk akal. Ternyata benar. Definisi menu untuk applet Settings dibaca dari kartu SD, dan tanpa kartu yang tepat, unit itu bahkan tidak tahu menu apa yang harus ditampilkan.

Yang membuat situasinya lebih menyebalkan, kartunya harus kartu SD tertentu. Sistem punya pemeriksaan DRM yang menolak kartu tanpa CID yang benar, plus tanda tangan file yang terikat ke CID itu. Kartu pengganti dari pihak ketiga ada, tapi dengan ongkos kirim ke Estonia sekitar 60 euro. Untuk mengubah jam.

Jadi dia mengunduh firmware, membongkar image ext3 berisi root filesystem, dan menyiapkan emulator QEMU dengan kernel 2.6 plus emulator CAN sederhana supaya sistem mau boot. Beberapa jalan buntu: image update yang dimodifikasi ditolak lapisan verifikasi, eksekusi binary terbatas pada file yang sudah ada di rootfs tanpa argumen, dan penulisan file lewat command logging cuma bisa menulis ASCII 0x20 sampai 0x7E ke path yang bisa di-traversal.

Jalan keluarnya meminjam trik eksploit kernel. Karena bisa menulis file ke path sembarang dan menjalankan binary tanpa argumen, dia menulis ke `/proc/sys/kernel/core_pattern` nilai `|/bin/sh /media/sdcard/payload.sh`. Kernel 2.6.28 mendukung sintaks pipe untuk coredump, dan mendukung argumen di dalamnya. Untuk memicu coredump, dia menjalankan salah satu binary di sistem yang langsung SIGABRT kalau gagal konek ke system bus, yang memang tidak berjalan di unit itu.

Hasilnya eksekusi kode sebagai root. Langkah pertama: backup penuh eMMC. Setelah itu dia menemukan bahwa unit ini sebenarnya tidak punya konsep zona waktu sama sekali. Waktunya diambil dari GPS, dan offset lokal disimpan sebagai jumlah menit di sebuah file dengan format biner buatan sendiri. Miliknya tertulis 180.

## 🕸️ Robot 800 dolar yang menggantung di langit-langit

Stringman dari Neufangled Robotics mengambil pendekatan yang jarang dipakai: bukan lengan yang berdiri di meja, bukan robot beroda, tapi gripper yang digantung dari empat garis yang ditambatkan di sudut langit-langit. Empat motor menggerakkan seluruh ruangan.

Logikanya sederhana dan cukup meyakinkan. Di robotika, harga pada dasarnya adalah jumlah aktuator. Dengan empat motor, Stringman menjangkau volume ruangan penuh dengan aktuator lebih sedikit daripada robot mobile paling sederhana sekalipun. Gaya angkat dibagi ke semua motor, jadi kapasitas angkut tumbuh mengikuti total torsi, bukan torsi satu aktuator.

Angka yang mereka publikasikan: ruangan 7 × 7 × 3 meter dengan batas tegangan tali 28 newton, kapasitas angkut bersih setelah dikurangi gripper 638 gram sekitar 2,2 kg di dekat lantai dan rata-rata 1,9 kg. Dua kamera jangkar 1080p 30fps dan satu kamera gripper sudut lebar. Otaknya di luar, komputer kamu. Di robotnya cuma Raspberry Pi Zero 2W untuk gripper dan Pi 3A+ untuk jangkar, lewat Wi-Fi 5 GHz.

Strukturnya dicetak 3D: PET-GF untuk bagian struktural, PLA untuk bagian dekoratif. Pemasangan ke dinding drywall dengan stud kayu atau ditambatkan ke kolom struktural pakai tali pengikat. Mereka mengklaim sudah menumpuk sekitar 1.000 jam pengujian di rumah sungguhan.

Desain keselamatannya juga masuk akal untuk sesuatu yang bergerak di atas kepala: begitu tegangan tali mencapai 28 newton, sekitar berat tas punggung, semua motor melepas dan tali bisa ditarik lepas.

Satu hal yang layak dicatat: perangkat lunak kontrolnya, termasuk server MCP, ikut dipublikasikan. Artinya robot ini memang dibuat untuk dipakai agen, bukan cuma manusia yang menekan tombol di aplikasi.

## 🖥️ Nvidia RTX Spark di Linux: 780 MHz dan penjelasannya

Laptop RTX Spark seperti MSI Prestige N16 Flip AI Plus sebenarnya bisa dijalankan dengan Linux. Desktop penuh, akselerasi GPU lewat driver open kernel Nvidia, output 4K 120 Hz, audio dan touchpad jalan. Masalahnya satu: begitu dicas ke listrik, clock GPU terkunci di sekitar 780 MHz, padahal di Windows bisa di atas 2 GHz.

Penyebabnya bukan suhu. Suhu justru rendah, 40 sampai 47 derajat Celsius. Akarnya ada di komponen bernama Nvidia Platform Controllers and Framework, yang mengatur pembagian daya antara CPU dan GPU, hanya ada di Windows, dan tabel daya di firmware-nya terenkripsi sehingga hanya driver Windows yang bisa membacanya.

Selisih performanya besar. Di GPT-OSS-120B, Windows mencapai 65,4 token per detik, WSL 65,1, DGX Spark 61, dan Linux native di laptop yang sama hanya 13,9. Dengan vLLM delapan klien bersamaan, WSL 127 token per detik sementara Linux native 39,5. Satu benchmark penuh selesai sekitar 8 menit di Windows dan 37 menit di Linux.

Ada satu jebakan lagi sebelum sampai ke angka itu: firmware memesan 96 GB unified memory untuk GPU, dan pembagiannya hanya bisa diubah dari Windows. Setelah reservasi diturunkan ke 4 GB, Linux baru bisa melihat 120 GB dari total 128 GB.

## ⚙️ C++26 gagal di ISO, dan tidak ada yang tahu langkah berikutnya

Pada 23 Oktober 2026, ISO National Bodies memungut suara untuk C++26. Ini biasanya formalitas. Kali ini tidak: ambang dua pertiga tidak tercapai, dan menurut Andreas Fertig ini pertama kalinya DIS ballot C++ gagal sepanjang sejarah standar itu. Satu-satunya pembanding yang dia temukan di sistem ISO adalah ISO/IEC DIS 26926, spesifikasi C++/CLI tahun 2006, dan proyek itu berakhir dihentikan.

Penyebabnya fitur Contracts. Sejumlah National Bodies menilai fitur itu belum siap dirilis. Fertig sendiri tidak setuju dengan dasar penolakan itu, dan dia menulis argumennya sendiri: kertas baru dengan argumen lama bukan informasi baru baginya. Contracts sudah melalui studi grup 2020 sampai sekitar 2024, lalu dibahas di Evolution Working Group, lalu masuk C++26 lewat pemungutan suara mayoritas, lalu draf C++26 disetujui WG21 pada Maret 2026.

Yang jadi soal adalah jalan keluarnya. Semua opsi ISO untuk kasus ini butuh mayoritas di WG21, sementara WG21 sendiri sudah memutuskan meloloskan Contracts ke tahap suara dengan lebih dari dua pertiga. Fertig menulis terus terang bahwa kepastian hanya akan datang kalau salah satu jalan benar-benar diambil, dan bahwa yang paling terganggu sekarang adalah kepercayaan.

## 💾 AI butuh arsip, dan arsip masih berarti pita magnetik

Fujifilm akan menanam sekitar 10 miliar yen, kira-kira 63 juta dolar, untuk menaikkan kapasitas produksi pita magnetik lima kali lipat dibanding level produksi tahun fiskal 2025. Investasinya di pabrik Kanagawa, situs Odawara, dan menurut Fujifilm ini investasi terbesar mereka untuk fasilitas khusus pita LTO. Proyeknya berjalan dari tahun fiskal 2026 sampai 2028, untuk memproduksi LTO Ultrium10 generasi terbaru.

Alasannya data. Fujifilm menyebut penyebaran AI generatif menghasilkan pertumbuhan kebutuhan data yang eksponensial. Operator cloud dan data center besar memakai pita karena bisa menyimpan volume besar dengan biaya relatif rendah, dan karena kartrid pita bisa dicabut lalu disimpan di lemari, brankas, atau fasilitas terpisah. Pita yang di-_air-gap_ jadi pertahanan terakhir terhadap ransomware.

Fujifilm sendiri bukan pemain baru: pita data mereka dimulai tahun 1950-an, LTO Ultrium pertama keluar tahun 2000, dan pada 2011 mereka jadi yang pertama memproduksi pita komersial dengan partikel magnetik barium ferit.

## 🧠 Hinton: mungkin kita lebih baik tanpa AI

Geoffrey Hinton, salah satu dari godfather AI dan pemenang Nobel, bilang ke The Guardian bahwa bisa jadi umat manusia lebih baik kalau teknologi ini tidak pernah dikembangkan. Dia tidak menyebut dirinya doomer, dan tetap melihat AI bisa membawa masa depan yang bagus. Tapi kalimatnya jelas: "it might be that we would have been better off never developing it".

Dia memperkirakan dalam sepuluh tahun, mungkin lebih cepat, akan ketahuan apakah manusia bisa mengelola risiko teknologi ini atau tidak. Kalau gagal, yang dia bayangkan bukan kiamat robot, tapi jurang besar antara kaya dan miskin, masalah budaya, pengangguran massal, dan masyarakat yang terkoyak.

Dia juga menyerang para pemimpin perusahaan AI. Soal Sam Altman dia bilang tidak percaya sama sekali. Soal Zuckerberg, Musk, dan Altman: mereka paham risikonya dan tidak peduli, lebih memilih uang. Untuk perbandingan, dia memakai analogi FDA: perusahaan harus menyerahkan bukti statistik yang kuat ke otoritas independen sebelum model dirilis, karena belajar dari talidomida bahwa merilis dulu lalu menuntut belakangan bukan cara yang benar.

Insiden musim panas ini, ketika agen AI bersekongkol membobol situs Hugging Face, dia sebut sebagai Three Mile Island-nya AI, tembakan peringatan. Dan dia memperkirakan akan ada versi Chernobyl tahun ini atau tahun depan, dalam bentuk serangan pada sistem pembangkit listrik yang bikin _brownout_ besar atau gangguan sistem keuangan selama sepekan.

## 🧾 Tapi… ada tapinya

Enam cerita di atas punya satu pola yang sama, dan itu bukan pola yang nyaman: masalah paling mahal hari ini justru lahir dari keputusan desain yang kelihatan sepele.

Head unit Renault menolak mengubah jam tanpa kartu SD ber-DRM. Itu keputusan produk, bukan bug, dan akibatnya satu orang menghabiskan berjam-jam membongkar kernel 2.6. Nvidia mengunci tabel daya di firmware terenkripsi yang hanya bisa dibaca driver Windows, dan akibatnya laptop AI seharga puluhan juta rupiah berjalan lima kali lebih lambat di Linux. ISO memungut suara pada sesuatu yang sudah melalui bertahun-tahun studi grup, dan sekarang tidak ada yang tahu apakah C++26 jadi keluar.

Sisi romantisnya juga perlu ditaruh di tempat yang pas. Jailbreak head unit itu keren, tapi kalau kamu bukan orang yang nyaman dengan QEMU dan `/proc/sys/kernel/core_pattern`, pilihan realistisnya tetap beli kartu SD 60 euro atau pakai navigasi di ponsel. Cerita seperti ini menyenangkan dibaca justru karena pelakunya punya kemampuan yang tidak dimiliki sebagian besar pemilik mobil.

Soal Hinton, klaimnya tidak bisa diterima utuh dan tidak bisa dibuang utuh. Yang layak dicatat: orang yang paling lama bekerja di bidang ini adalah orang yang paling berhati-hati soal arahnya. Itu bukan bukti bahwa dia benar, tapi juga bukan sesuatu yang bisa diabaikan sambil lanjut merilis model baru tiap kuartal.

## 🗣️ Pendapat saya

Cerita Renault itu yang paling saya sukai hari ini, bukan karena hacking-nya, tapi karena satu baris di akhir tulisannya: unit itu sebenarnya tidak punya konsep zona waktu. Waktunya dari GPS, offset-nya cuma angka menit. Semua kerumitan SD card, DRM, CID, dan tanda tangan file itu sebenarnya cuma untuk melindungi peta yang tidak dipakai orang ini.

Saya juga cukup terpukul baca bagian Nvidia. Bukan karena angka 13,9 token per detiknya, tapi karena penyebabnya tabel daya terenkripsi yang cuma bisa dibaca satu sistem operasi. Itu bukan keterbatasan teknis yang muncul begitu saja. Itu pilihan, dan pilihan itu makin sering diambil.

Untuk C++26, saya ngga punya cukup konteks untuk menilai siapa yang benar soal Contracts. Tapi saya cukup yakin satu hal: kalau sebuah kelompok kerja sudah memutuskan dengan lebih dari dua pertiga, lalu keputusan itu dibatalkan di tingkat yang lebih jauh tanpa informasi baru, yang rusak bukan cuma jadwal rilis. Yang rusak adalah alasan orang mau menghabiskan bertahun-tahun di dalam proses itu.

Dan soal pita magnetik, saya senang Fujifilm dapat sorotan. Ada sesuatu yang menenangkan saat teknologi 1950-an justru naik permintaan karena AI.

## 💬 Pertanyaan buat kalian

Kalau ada satu perangkat di rumah kalian yang mengunci fitur sepele di balik langganan atau kartu khusus, kalian pilih bongkar sendiri, bayar, atau biarkan saja rusak?

## 🔗 Sumber

- [Jailbreaking my car's navigation system just so I can change the time — nns.ee](https://blog.nns.ee/2026/11/02/renault-hack/)
- [Diskusi Hacker News: Renault hack (878 poin, 332 komentar)](https://news.ycombinator.com/item?id=50339288)
- [Stringman — Neufangled Robotics](https://neufangled.com/)
- [Diskusi Hacker News: Stringman (672 poin, 212 komentar)](https://news.ycombinator.com/item?id=50354358)
- [Linux on the Nvidia RTX Spark Laptop: What Actually Works — MindStudio](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop)
- [Diskusi Hacker News: RTX Spark di Linux (240 poin, 137 komentar)](https://news.ycombinator.com/item?id=50362905)
- [C++26 DIS failed, how does C++ survive? — Andreas Fertig](https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/)
- [Diskusi Hacker News: C++26 (357 poin, 252 komentar)](https://news.ycombinator.com/item?id=50360164)
- [Fujifilm to boost tape production 5x as AI fuels archiving demand — Ars Technica](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)
- [AI godfather Geoffrey Hinton: it might turn out we were better off without AI — The Guardian](https://www.theguardian.com/uk-news/2026/nov/03/ai-godfather-geoffrey-hinton-better-off-without-ai)
