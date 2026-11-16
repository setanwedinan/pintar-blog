---
title: 'Daily Coding Activity 16 November 2026: Tabel lebih mudah digeser dan tautan lebih jelas'
description: 'Catatan perubahan Pintar Blog untuk tabel Markdown yang dapat digeser dan tautan artikel yang lebih mudah dikenali.'
pubDate: 2026-11-16T13:00:00Z
tags: ['Daily Update', 'Coding']
---

## 🔍 TL;DR

Perubahan hari ini berfokus pada dua hal yang mudah terlewat saat membaca artikel: **tabel lebar** dan **tautan di dalam tulisan**. Commit `d449c28` menambahkan pembungkus tabel yang bisa digeser secara horizontal serta memperjelas tampilan tautan di area artikel.

## 📋 Apa yang berubah pada tabel?

Di `astro.config.mjs`, fungsi `wrapTables` menelusuri struktur elemen hasil pemrosesan Markdown. Saat menemukan elemen tabel, fungsi itu membungkusnya dalam sebuah `div` dengan kelas `table-scroll`. Fungsi tersebut didaftarkan sebagai plugin rehype dalam konfigurasi Markdown.

Di `src/styles/global.css`, kelas tersebut diberi batas lebar `max-inline-size: 100%` dan `overflow-x: auto`. Maksudnya, ketika tabel membutuhkan ruang lebih lebar daripada wadahnya, area pembungkus dapat menyediakan gulir horizontal. Tabel tetap menjadi tabel, bukan diubah menjadi daftar atau kartu.

Pembungkusnya juga memiliki `role: region`, label aksesibilitas **“Tabel data, geser untuk melihat seluruh kolom”**, dan `tabIndex: 0`. Atribut ini memberi area tersebut identitas dan memungkinkan area menerima fokus keyboard. Labelnya memberi petunjuk kepada pengguna teknologi bantu tentang fungsi area tersebut.

Tapi… ada tapinya: membaca perubahan kode saja belum membuktikan perilaku di semua browser, ukuran layar, atau pembaca layar. Untuk memastikan pengalaman nyata, tabel yang lebar tetap perlu dicoba dengan keyboard dan teknologi bantu pada halaman hasil build.

## 🔗 Tautan artikel lebih mudah dibedakan

Perubahan lain ada pada selector `.prose a` di stylesheet. Tautan pada area artikel diberi garis bawah, jarak garis bawah sebesar `0.15em`, serta ketebalan `0.08em`. Latar belakangnya diatur menjadi `none`.

Yang menarik, selector ini membatasi perubahan ke tautan di dalam `.prose`. Komentar pada kode menyebut tujuan pembatasan itu adalah membedakan tautan dalam teks artikel tanpa mengubah navigasi atau kartu. Artinya, fokus pekerjaan bukan mendesain ulang seluruh situs, melainkan memperjelas elemen yang berada di tengah bacaan.

Garis bawah memberi petunjuk visual tambahan bahwa sebuah potongan teks adalah tautan. Namun, apakah tampilannya nyaman pada seluruh tema dan keadaan interaksi tetap memerlukan pemeriksaan visual; diff tidak bisa menggantikan pengujian itu.

## 💡 Insight hari ini

Perbaikan kecil di lapisan presentasi bisa menyasar dua kebutuhan sekaligus: menjaga konten tetap dapat dibaca saat ruang terbatas, dan membuat elemen interaktif lebih mudah dikenali. Ada perbedaan penting antara **menambahkan dukungan dalam kode** dan **membuktikan pengalaman aksesibilitasnya** lewat pengujian. Keduanya perlu berjalan beriringan.

## 🗣️ Pendapat saya

Saya suka pendekatan yang tidak mengubah bentuk konten secara drastis. Tabel masih mempertahankan struktur aslinya, sementara pengunjung mendapat area khusus untuk menggesernya. Langkah berikutnya yang masuk akal adalah memeriksa contoh tabel panjang di layar sempit dan mencoba navigasi keyboard, bukan langsung menganggap pekerjaan aksesibilitas selesai.

Menurut kalian, bagian mana yang paling sering mengganggu saat membaca artikel di layar kecil: tabel lebar atau tautan yang sulit dibedakan?

## 🔗 Sumber

- [Commit d449c28: improve table scrolling and article links](https://github.com/setanwedinan/pintar-blog/commit/d449c28c81aa55534c979c0e5f14d8cf61206e73) — perubahan pada `astro.config.mjs` dan `src/styles/global.css`.
