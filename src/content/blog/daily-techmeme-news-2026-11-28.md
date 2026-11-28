---
title: 'Daily TechMeme News 28 November 2026: robot AI, pembayaran, dan keamanan kode'
description: 'Embo mengembangkan model dunia untuk robot, Trustly mendapat pendanaan, dan SAP menyelidiki aktivitas mencurigakan.'
pubDate: 2026-11-28T13:10:00Z
tags: ['Daily Update', 'TechMeme']
---

## 🔍 TL;DR

- Embo mengumumkan pendanaan awal **US$110 juta** untuk mengembangkan model AI bagi robot.
- Trustly memperoleh **US$60 juta** dari investor yang sudah ada dan berencana mempercepat pengembangan produk berbasis AI.
- SAP mengonfirmasi adanya aktivitas mencurigakan; rincian dugaan akses kode berasal dari laporan media, bukan seluruhnya dari konfirmasi SAP.
- Perdebatan mengenai perilaku agen AI menunjukkan pentingnya membedakan kesalahan, dugaan, dan bukti yang bisa diuji.

Pilihan berita berikut berasal dari daftar TechMeme dan sumber yang ditautkannya. Tanggal penerbitan sumber bisa berbeda dari tanggal rangkuman ini.

## 🤖 Embo ingin mengajari robot memahami dunia

Embo mengumumkan pendanaan seed sebesar **US$110 juta**, dipimpin Andreessen Horowitz, untuk mengembangkan model AI bagi robot. Dalam pengumumannya, perusahaan menjelaskan rencana melatih model dengan video internet dalam jumlah besar agar dapat mempelajari objek, interaksi fisik, dan urutan tugas.

Gagasannya adalah menggunakan _world model_ atau model dunia sebagai lingkungan latihan: sistem memprediksi dan berlatih menghadapi beragam situasi sebelum berinteraksi dengan dunia nyata. Embo juga menyebut rencana menggabungkan prapelatihan dengan pengalaman robot dan pembelajaran penguatan.

Ini masih merupakan **rencana dan pendekatan yang dijelaskan perusahaan**. Pengumuman pendanaan tidak dengan sendirinya membuktikan bahwa robot sudah andal di segala situasi. Untuk menilai hasilnya nanti, yang perlu dicari adalah demonstrasi, batas kemampuan, dan pengujian yang bisa diperiksa secara independen.

[Sumber: pengumuman Embo](https://embo.com/introducing-embo) · [TechMeme](https://www.techmeme.com/261128/p1#a261128p1)

## 💳 Trustly menambah modal untuk produk AI

Tech.eu melaporkan Trustly menyelesaikan pendanaan **US$60 juta** dari pemegang saham yang sudah ada. Menurut laporan tersebut, Trustly memanfaatkan teknologi open banking agar pelanggan dapat membayar langsung dari rekening bank tanpa perlu menggunakan kartu atau aplikasi.

Perusahaan mengatakan dana tersebut akan dipakai untuk mempercepat pengembangan produk baru berbasis AI. Tech.eu juga menyebut total pendanaan Trustly telah melampaui US$450 juta. Keduanya adalah angka pendanaan yang berbeda: yang pertama adalah putaran terbaru, sedangkan yang kedua merupakan total yang dilaporkan.

Bagi pengguna, pertanyaan praktisnya bukan hanya apakah AI ditambahkan, tetapi juga bagaimana data pembayaran dipakai dan informasi apa yang tersedia untuk menjelaskan keputusan layanan. Laporan pendanaan ini tidak merinci seluruh fitur produk yang nantinya dirilis, jadi manfaat spesifiknya masih perlu dibuktikan.

[Sumber: Tech.eu](https://tech.eu/2026/11/24/trustly-completes-60m-funding-raise/) · [TechMeme](https://www.techmeme.com/261128/p3#a261128p3)

## 🔐 SAP menyelidiki aktivitas mencurigakan

SAP mengatakan kepada SecurityWeek bahwa perusahaan mendeteksi aktivitas mencurigakan dan mengambil langkah untuk melindungi pelanggan serta mengamankan layanannya. Berdasarkan penyelidikan hingga saat pernyataan itu, SAP menyatakan belum menemukan bukti akses tanpa izin ke data bisnis pelanggan.

SecurityWeek juga mengutip laporan Der Spiegel yang menyebut pelaku memperoleh token autentikasi karyawan dan dapat menyalin serta mengubah kode di GitHub. **Tapi… ada tapinya:** rincian tersebut adalah laporan yang dikutip, sementara SAP tidak mengungkap detail serangan kepada SecurityWeek. Belum jelas apakah kode berpemilik diakses, dan laporan yang ditinjau SecurityWeek tidak menyatakan kode yang diubah masuk ke perangkat lunak yang dikirim kepada pelanggan.

Kabar ini menjadi pengingat untuk membedakan apa yang diketahui, apa yang dilaporkan sumber lain, dan apa yang belum diketahui. Bagi tim pengembang, memeriksa hak akses serta prosedur penanganan token adalah langkah kehati-hatian yang relevan, tanpa perlu menyimpulkan detail insiden yang belum terkonfirmasi.

[Sumber: SecurityWeek](https://www.securityweek.com/sap-confirms-cyberattack-source-code-reportedly-compromised/) · [TechMeme](https://www.techmeme.com/261127/p9#a261127p9)

## 🧪 Agen AI dan dugaan sabotase

Drew Breunig membahas sejumlah klaim pengguna bahwa Claude diam-diam menyabotase proyek. Dalam tulisannya, Breunig menilai tuduhan sabotase aktif belum terbukti dan menunjukkan bahwa perilaku proaktif agen juga bisa menghasilkan perubahan yang tidak diinginkan pengguna.

Ia menceritakan pengalamannya ketika agen mengubah beberapa variabel dalam eksperimen, lalu menjelaskan bahwa instruksi metode ilmiah yang lebih jelas membantu mengurangi masalah itu. Ini adalah pengalaman dan analisis penulis, bukan bukti bahwa setiap kesalahan agen memiliki penyebab yang sama.

Kalau kamu memakai agen untuk pekerjaan penting, langkah yang masuk akal adalah mencatat perubahan, membatasi ruang kerja, dan menguji hasilnya. Jawaban agen tentang alasan tindakannya tetap perlu diperiksa terhadap jejak pekerjaan, bukan diterima sebagai bukti tunggal.

[Sumber: Drew Breunig](https://www.dbreunig.com/2026/11/27/proactivity-can-read-as-sabotage.html) · [TechMeme](https://www.techmeme.com/261127/p14#a261127p14)

## 🗣️ Pendapat saya

Saya paling tertarik dengan pertanyaan tentang bukti. Pendanaan besar memberi sebuah tim kesempatan mengejar tujuan, tetapi ngga menggantikan hasil yang dapat diuji. Begitu juga saat agen AI membuat kesalahan: menurut saya, mencatat langkah dan membandingkan hasil jauh lebih berguna daripada langsung menyimpulkan niat di baliknya.

Menurut kalian, mana yang lebih mendesak untuk diperbaiki: keterandalan robot, keamanan akses pengembang, atau transparansi tindakan agen AI?

## 🔗 Sumber

- [Embo — pengumuman perusahaan dan pendanaan](https://embo.com/introducing-embo)
- [Tech.eu — pendanaan Trustly](https://tech.eu/2026/11/24/trustly-completes-60m-funding-raise/)
- [SecurityWeek — penyelidikan insiden SAP](https://www.securityweek.com/sap-confirms-cyberattack-source-code-reportedly-compromised/)
- [Drew Breunig — proaktivitas agen dan tuduhan sabotase](https://www.dbreunig.com/2026/11/27/proactivity-can-read-as-sabotage.html)
- [TechMeme — feed berita](https://www.techmeme.com/feed.xml)
