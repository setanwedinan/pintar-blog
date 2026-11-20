---
title: 'Hermes masuk Teams, Android perluas verifikasi, dan Gemini mulai memakai Mac'
description: 'Hermes Agent hadir di lingkungan Microsoft, sementara Google menyiapkan verifikasi Android global dan memperkenalkan computer use di Mac.'
pubDate: 2026-11-20T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Hermes Agent** masuk Microsoft Teams dan berjalan di sandbox Azure, menurut laporan TokenPost. _(TokenPost)_
- Google akan memperluas **verifikasi pengembang Android** secara global mulai Januari 2027, secara bertahap ke semua sumber instalasi. _(Android Developers)_
- Gemini di Mac bisa mengerjakan tugas lintas aplikasi, tetapi peluncurannya masih terbatas di Amerika Serikat. _(Google)_
- Google memilih roket Blue Origin untuk peluncuran khusus satelit Project Suncatcher yang ditargetkan pada 2029. _(The Verge)_

## 🤖 Hermes Agent menuju ruang kerja bersama

Hermes Agent kini punya jalur menuju percakapan kerja di Microsoft Teams. TokenPost melaporkan bahwa botnya dapat menjawab pesan langsung, beroperasi di kanal, dan membuat ringkasan rapat. Untuk konten rapat, laporan itu menyebut akses dilakukan melalui Microsoft Graph.

Di belakang layar, tugas dan kode dijalankan dalam sandbox Azure Container Apps. **Sandbox adalah lingkungan yang diisolasi** untuk membatasi tempat sebuah tugas berjalan. Ini berbeda dari memberi agen akses tanpa batas ke seluruh sistem perusahaan. Namun, keberadaan sandbox sendiri bukan jaminan bahwa setiap konfigurasi dan izin otomatis aman.

TokenPost juga melaporkan peluncuran Hermes Enterprise, yang ditujukan untuk organisasi dan dapat dipasang di tenant Azure milik pelanggan. Klaim privasi dan lokasi data tetap perlu dibaca bersama rincian konfigurasi, akses, dan kebijakan penyimpanan masing-masing organisasi. Berita ini menarik karena fokusnya bergeser dari asisten pribadi ke alur kerja yang digunakan bersama oleh satu tim.

## 📱 Verifikasi Android meluas, sideload tetap punya jalur khusus

Google menyatakan perluasan global verifikasi pengembang dimulai **Januari 2027**. Perlindungannya kemudian diperluas bertahap selama beberapa bulan ke seluruh sumber instalasi pada perangkat Android bersertifikasi. Jadi, ini bukan berarti semua perubahan aktif serentak pada awal Januari.

Menurut Google, perlindungan tersebut sudah mulai berlaku pada 30 September di toko yang berpartisipasi di Brasil, Indonesia, Singapura, dan Thailand. Pengembang perlu memverifikasi identitas dan mendaftarkan aplikasi agar pengguna tetap mendapat pengalaman instalasi normal di wilayah yang menerapkan perlindungan tersebut.

Tapi… ada tapinya: perubahan ini juga menyentuh aplikasi di luar Play Store. Google menyediakan **advanced flow** bagi pengguna berpengalaman yang memilih memasang aplikasi yang belum terdaftar dan menerima risikonya. Untuk mahasiswa dan penghobi, akun distribusi terbatas dapat berbagi ke maksimal 50 perangkat resmi tanpa biaya pendaftaran atau verifikasi identitas pemerintah, menurut Google.

Bagi kamu yang memakai aplikasi dari sumber alternatif, perbedaan antara aplikasi terdaftar dan tidak terdaftar menjadi hal yang perlu diperhatikan. Bagi pengembang, cek status paket yang juga diedarkan di luar Play Store, bukan hanya aplikasi di toko utama.

## 💻 Gemini mulai mengoperasikan Mac

Google memperkenalkan fitur _computer use_ untuk aplikasi Gemini di Mac. Pengguna dapat menjelaskan tugas, lalu Gemini menavigasi menu, mengetik, dan mengisi formulir di aplikasi maupun web. Google mencontohkan pengambilan informasi dari PDF lokal untuk membantu mengisi formulir pengiriman.

Google mengatakan pekerjaan berjalan di jendela latar terisolasi dengan pratinjau langsung. Pengguna memilih aplikasi yang boleh diakses, dapat menjeda pekerjaan, dan menyetujui tindakan penting. Kendali ini relevan karena pekerjaan otomatis tetap dapat keliru memahami konteks; hasilnya perlu diperiksa sebelum tindakan yang berdampak dijalankan.

**Ketersediaannya belum global:** fitur ini diluncurkan dalam bahasa Inggris di Amerika Serikat untuk akun pribadi berusia 18 tahun ke atas dengan paket Google AI Plus, Pro, atau Ultra. Syarat perangkatnya adalah Mac dengan Apple Silicon dan macOS Sequoia 15.0 atau lebih baru. Jadi pengguna Indonesia belum bisa langsung menganggap fitur ini tersedia untuk akunnya.

## 🛰️ Suncatcher mendapat rencana peluncuran baru

The Verge melaporkan bahwa Google memilih roket New Glenn milik Blue Origin untuk membawa satelit berprosesor TPU pada **kuartal pertama 2029**. Ini merupakan rencana peluncuran khusus angkut berat pertama untuk Project Suncatcher, bukan bukti bahwa jaringan pusat data orbit sudah beroperasi penuh.

Sebagai pembaruan dari [kabar prototipe yang sudah mengirim respons](/blog/daily-techmeme-news-2026-11-01/), perkembangan barunya adalah pemilihan penyedia peluncuran dan target waktunya. Menurut laporan itu, kapasitas komputasi satelit yang direncanakan kira-kira setara sebuah rak pusat data. Jadwal tetaplah target dan bisa berubah.

## 🗣️ Pendapat saya

Saya paling tertarik pada pertanyaan tentang kendali. Agen yang bisa bekerja di Teams atau mengklik aplikasi Mac memang terdengar praktis, tetapi izin yang mudah dipahami dan cara menghentikan tindakan sama pentingnya dengan kemampuan otomatisasinya. Sandbox membantu membatasi lingkungan, bukan menggantikan pemeriksaan konfigurasi.

Untuk Android, saya ingin keamanan meningkat tanpa membuat pengembang kecil dan pengguna aplikasi alternatif kehilangan pilihan. Jalur lanjutan adalah kompromi yang patut diperhatikan, tetapi pengalaman nyatanya baru bisa dinilai ketika perluasan berjalan.

**Menurut kalian, fitur mana yang paling berguna: agen di tempat kerja, Gemini di Mac, atau perubahan keamanan Android?**

## 🔗 Sumber

- [TokenPost — Hermes Agent, Teams, dan Azure](https://www.tokenpost.com/news/technology/61709)
- [Android Developers — perluasan verifikasi pengembang](https://developer.android.com/blog/posts/android-developer-verification-2027)
- [Google — computer use di Gemini untuk Mac](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/)
- [The Verge — peluncuran Project Suncatcher](https://www.theverge.com/tech/1037535/google-blue-origin-project-suncatcher-2029)
