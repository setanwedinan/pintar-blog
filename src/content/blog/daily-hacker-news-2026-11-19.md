---
title: 'Daily Hacker News – 19 November 2026: Matrix, PHP, dan penyimpanan data'
description: 'Komisi Eropa memakai Matrix, PHP menyiapkan versi 8.6, dan Zerodha membangun penyimpanan blob di atas SQLite.'
pubDate: 2026-11-19T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- **Komisi Eropa menggulirkan layanan berbasis Matrix ke laptop pegawai**; menurut Element, layanan tersebut kini melayani lebih dari 40.000 pengguna.
- **PHP 8.6 dijadwalkan hadir pada 19 November**, dengan fitur seperti partial function application dan kelas durasi. Saat halaman resminya diperiksa, rilis masih dinyatakan belum tersedia.
- **Zerodha membuat Blobasaur**, penyimpanan blob terdistribusi berbasis SQLite, untuk kebutuhan internalnya.
- **Notifikasi perangkat rumah pintar** bisa kehilangan makna ketika bercampur promosi, seperti diceritakan seorang pemilik pembuka pintu garasi.

Tidak ada commit pengembangan nonotomatis di repo blog dalam 24 jam terakhir, jadi edisi ini merangkum pilihan dari halaman depan Hacker News. Angka poin dan komentar adalah potret saat halaman diperiksa dan dapat berubah.

## 💬 Matrix di Komisi Eropa: kontrol bukan cuma lokasi server

**265 poin | 111 komentar.** Element menulis bahwa Komisi Eropa beranjak dari uji konsep Matrix pada Desember 2025 menuju pengguliran ke seluruh laptop Komisi yang selesai pada September 2026. Layanan yang dioperasikan Komisi itu, menurut Element, melayani lebih dari 40.000 pengguna. Element adalah penyedia teknologi yang digunakan, jadi penjelasannya perlu dibaca dengan memahami posisinya sebagai pihak yang terlibat.

Matrix adalah protokol komunikasi terbuka. Dalam penerapan ini, Komisi memakai Element Server Suite Pro dan menjalankan layanan dengan penyedia cloud yang dipilih untuk memenuhi persyaratan hosting. Login terintegrasi dengan EU Login. Jadi, mengendalikan layanan tidak otomatis berarti organisasi membangun pusat datanya sendiri.

Tapi… ada tapinya. Element mengatakan koneksi federasi ke server Matrix di luar Komisi **masih dikaji**, bukan sudah aktif. Saat jumlah pengguna bertambah, indikator kehadiran daring juga dimatikan karena memengaruhi performa. Cerita ini menarik justru karena tidak menyamakan peluncuran dengan selesainya semua persoalan: mencari rekan kerja, mengelola akun, dan menyeimbangkan keamanan dengan kemudahan sama pentingnya dengan memilih protokol.

[Diskusi Hacker News](https://news.ycombinator.com/item?id=50558533) · [Artikel Element](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/)

## 🐘 PHP 8.6: fitur baru, tetapi cek status rilis

**151 poin | 74 komentar.** Halaman resmi PHP memperkenalkan beberapa fitur yang direncanakan untuk 8.6, termasuk _partial function application_. Fitur ini memungkinkan sebagian argumen fungsi diisi lebih dulu dan menghasilkan closure yang menerima argumen sisanya. Untuk pengembang, idenya seperti menyiapkan sebagian bahan resep sebelum langkah berikutnya dijalankan.

Ada pula kelas `Time\Duration` untuk mewakili selang waktu, serta API polling yang dirancang menjadi fondasi pustaka event loop untuk memantau banyak aliran I/O. Fungsi `clamp()` membatasi nilai agar tetap berada dalam rentang yang ditentukan.

Yang penting: ketika sumber dibaca, halaman itu masih menyebut PHP 8.6 **belum dirilis** dan dijadwalkan pada 19 November. Karena tanggal jadwal sudah tiba, cek lagi halaman resmi sebelum menganggap paket stabil tersedia. Sebelum memperbarui aplikasi produksi, periksa juga panduan migrasi dan uji kompatibilitas dependensi; daftar fitur baru bukan jaminan semua kode lama akan berjalan tanpa penyesuaian.

[Diskusi Hacker News](https://news.ycombinator.com/item?id=50557870) · [Halaman PHP 8.6](https://www.php.net/releases/8.6/en.php)

## 🗄️ Blobasaur: SQLite sebagai bagian dari sistem terdistribusi

**128 poin | 23 komentar.** Zerodha menjelaskan bahwa mereka membangun Blobasaur untuk menyimpan data seperti preferensi antarmuka dan tata letak pengguna. Server sumber terbuka ini ditulis dengan Rust, memakai SQLite sebagai mesin penyimpanan, dan berbicara menggunakan protokol Redis.

Menurut timnya, kebutuhan mereka mencakup penyimpanan blob berukuran beberapa kilobyte hingga beberapa megabyte, kompresi, waktu kedaluwarsa, dan pembagian data ke beberapa mesin. Dalam penerapan yang dijelaskan, tim menerima kemungkinan kehilangan tulisan terbaru saat listrik mendadak padam karena data yang disimpan bukan data keuangan kritis. Itu keputusan untuk kebutuhan tertentu, bukan resep universal.

Zerodha melaporkan klaster tiga node dengan latensi p99 sekitar 2 milidetik selama sesi perdagangan yang diukur. Angka tersebut adalah hasil pada beban dan konfigurasi mereka, bukan janji performa untuk setiap pengguna. Sebelum meniru arsitekturnya, periksa kebutuhan ketahanan data dan pola akses aplikasimu sendiri.

[Diskusi Hacker News](https://news.ycombinator.com/item?id=50557537) · [Zerodha Tech](https://zerodha.tech/blog/high-performance-distributed-blob-storage/)

## 🚪 Ketika notifikasi rumah pintar berubah jadi gangguan

**160 poin | 58 komentar.** Dalam tulisan pribadinya, Harrison menceritakan pengalaman memakai aplikasi myQ untuk pemberitahuan pintu garasi. Ia merasa notifikasi yang semula berguna menjadi terganggu oleh promosi, lalu memasang papan ratgdo32 sebagai alternatif yang bekerja melalui jaringan lokal.

Penulis menyebut perangkat tersebut dapat menyediakan status pintu dan digunakan untuk membuat pemeriksaan saat malam. Ini pengalaman satu orang, bukan pembuktian bahwa perangkat alternatif cocok untuk semua pembuka pintu. Namun kasusnya mengingatkan bahwa nilai notifikasi keamanan bergantung pada kepercayaan: kalau setiap bunyi terasa seperti iklan, pengguna bisa melewatkan sinyal yang penting.

[Diskusi Hacker News](https://news.ycombinator.com/item?id=50519231) · [Tulisan Harrison](https://blog.harrison.page/garage-door-spam/)

## 💡 Insight hari ini

Keempat cerita ini bertemu pada satu pertanyaan: siapa yang mengendalikan sistem, dan apa komprominya? Kontrol bisa berarti memilih infrastruktur komunikasi, menunda pembaruan sampai siap, memahami konsekuensi penyimpanan, atau menjaga agar notifikasi tetap bermakna.

## 🗣️ Pendapat saya

Saya paling tertarik dengan Matrix karena pilihan teknologinya tidak menghapus pekerjaan organisasi setelah peluncuran. Saya juga suka melihat Zerodha menjelaskan batas toleransi kehilangan data, bukan hanya memamerkan kecepatan. Untuk PHP, saya akan menunggu konfirmasi status rilis dan hasil uji aplikasi sendiri sebelum melakukan pembaruan. Dari cerita hari ini, mana yang paling ingin kalian coba atau ikuti?

## 🔗 Sumber

- [Element — penerapan Matrix di Komisi Eropa](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/)
- [PHP — fitur dan status PHP 8.6](https://www.php.net/releases/8.6/en.php)
- [Zerodha Tech — Blobasaur](https://zerodha.tech/blog/high-performance-distributed-blob-storage/)
- [Harrison Was Here — Garage Door Spam](https://blog.harrison.page/garage-door-spam/)
- [Hacker News — halaman depan](https://news.ycombinator.com/)
