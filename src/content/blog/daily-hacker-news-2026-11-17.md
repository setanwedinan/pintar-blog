---
title: 'Daily Hacker News 17 November 2026: Kuliah komputer gratis dan arsip kode lawas'
description: 'Sorotan Hacker News tentang evaluasi AI, kuliah Carnegie Mellon, arsip Visual Basic, dan pilihan desain database.'
pubDate: 2026-11-17T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

Hacker News hari ini mempertemukan diskusi soal independensi evaluasi AI dengan kabar yang lebih praktis untuk pembelajar: Carnegie Mellon menyediakan rekaman kuliah komputer gratis. Ada juga galeri proyek Visual Basic lawas dan penjelasan mengapa database berbasis baris dan kolom cocok untuk pekerjaan berbeda.

Peringkat dan jumlah interaksi di bawah adalah potret saat halaman Hacker News diperiksa, bukan angka tetap sepanjang hari.

## Perdebatan evaluasi AI di peringkat pertama

Saat diperiksa, cerita teratas mengarah ke unggahan Kevin Bass yang mempertanyakan independensi METR dalam kaitannya dengan Anthropic. Unggahan tersebut berisi tuduhan tentang hubungan pendanaan dan pengaruh regulasi. **Ini adalah tuduhan penulis, bukan kesimpulan yang telah diverifikasi secara independen dalam tulisan ini.** Unggahan aslinya tertanggal September, jadi kemunculannya di halaman depan juga bukan bukti bahwa tuduhan tersebut baru muncul hari ini.

Untuk membaca diskusinya, bedakan tiga hal: hubungan pendanaan yang benar-benar terdokumentasi, penafsiran atas hubungan itu, dan kesimpulan tentang apakah evaluasi tertentu menjadi bias. Ketiganya memerlukan bukti yang berbeda. Posisi teratas di forum tidak otomatis membuktikan salah satunya.

Tapi… ada tapinya: sumber yang tersedia di sini adalah unggahan orang yang mengajukan tuduhan, bukan putusan regulator ataupun pemeriksaan independen menyeluruh. Karena itu angka dan rincian tuduhannya tidak diulang sebagai fakta. [Baca unggahan](https://nitter.cf/kevinnbass/status/2099621874279817638) dan [diskusi Hacker News](https://news.ycombinator.com/item?id=50530450).

## Kuliah komputer Carnegie Mellon terbuka untuk ditonton

Carnegie Mellon membuka halaman [CS Learn](https://www.cs.cmu.edu/learn/) yang menautkan rekaman kuliah lengkap ke YouTube untuk ditonton gratis. Ketika halaman diperiksa, **Principles of Computing** dan **Machine Learning with Large Datasets** sudah bertanda bisa ditonton. Halaman yang sama mencantumkan jadwal tayang untuk materi lain, termasuk **AI Agents** pada 19 November.

Bagi kamu yang ingin belajar terstruktur, mulailah dari daftar putar yang sesuai kemampuan, lalu catat istilah yang belum dipahami. Kuliah tentang prinsip komputasi bisa menjadi titik awal; materi sistem pembelajaran mesin lebih cocok jika kamu memang ingin mendalami topik itu.

Perlu dibedakan: halaman tersebut menjanjikan akses gratis ke video kuliah, sementara opsi untuk memperoleh kredensial resmi ditautkan secara terpisah. Jadi jangan langsung menganggap menonton video berarti otomatis mendapat ijazah atau sertifikat resmi. CS Learn juga menyebut materi belajar mandiri dan tutor AI sebagai rencana berikutnya, bukan fitur yang pasti sudah tersedia.

## Membuka galeri Visual Basic lama

[Visual Basic World](https://visualbasic.world/) menampilkan galeri 2.242 proyek saat diperiksa, lengkap dengan kategori, tahun, dan tangkapan layar. Koleksinya mencakup aplikasi, permainan, grafis, hingga basis data. Ini semacam museum antarmuka: kamu bisa melihat bagaimana pembuat aplikasi memecahkan masalah dan menampilkan fitur pada masa yang berbeda.

Gunakan filter kategori atau tahun kalau jumlah proyeknya terasa terlalu banyak. Misalnya, lihat kategori aplikasi lengkap untuk menemukan contoh antarmuka inventaris, atau kategori grafis untuk menjelajahi eksperimen visual. Tangkapan layar membantu orientasi, tetapi tidak dengan sendirinya menjamin kode lama aman atau cocok dijalankan di lingkungan sekarang.

## Baris atau kolom: pilih sesuai pertanyaan

Artikel [Spiral tentang row store dan column store](https://spiraldb.com/blog/rows-vs-columns) menjelaskan perbedaan susunan fisik data. Penyimpanan berbasis baris mengelompokkan nilai milik satu rekaman; penyimpanan berbasis kolom mengelompokkan nilai dari kolom yang sama.

Dalam contoh artikel, menghitung rata-rata durasi perjalanan hanya memerlukan kolom durasi. Sebaliknya, mengambil semua detail satu perjalanan memerlukan seluruh kolom dari rekaman tersebut. Pilihan yang efisien bergantung pada pola akses, bukan pada label bahwa satu pendekatan selalu lebih modern atau lebih cepat.

Untuk proyek sendiri, pertanyaan awalnya sederhana: apakah aplikasi sering membaca dan memperbarui beberapa rekaman lengkap, atau merangkum sedikit kolom dari banyak rekaman? Ukur kebutuhan sebenarnya sebelum mengganti teknologi. Artikel tersebut juga menjelaskan bahwa contoh struktur di memori merupakan pendekatan untuk membantu pemahaman, bukan gambaran persis semua implementasi database.

## 💡 Insight hari ini

Akses ke materi dan alat yang menarik itu penting, tetapi konteks sama pentingnya: bedakan tuduhan dari bukti, video gratis dari kredensial, dan contoh konseptual dari hasil pengujian pada sistem sendiri.

## 🗣️ Pendapat saya

Saya paling tertarik dengan CS Learn karena daftar putarnya memberi jalur belajar yang jelas tanpa harus langsung mengambil program formal. Untuk galeri kode lama, saya akan memperlakukannya sebagai bahan belajar dan inspirasi, bukan langsung memasukkannya ke proyek produksi.

Kalau kalian memilih satu untuk dibuka malam ini, mau mulai dari kuliah, galeri Visual Basic, atau artikel database?

## 🔗 Sumber

- [Hacker News](https://news.ycombinator.com/)
- [Unggahan Kevin Bass](https://nitter.cf/kevinnbass/status/2099621874279817638)
- [Carnegie Mellon CS Learn](https://www.cs.cmu.edu/learn/)
- [Visual Basic World](https://visualbasic.world/)
- [Spiral: Rows vs Columns](https://spiraldb.com/blog/rows-vs-columns)
