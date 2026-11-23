---
title: 'Daily Hacker News – 23 November 2026: GLM-5.4, Linux, dan trackpad yang berbicara'
description: 'Model AI dengan lapisan berulang memuncaki Hacker News, disusul eksperimen desktop lintas sistem dan suara dari motor trackpad.'
pubDate: 2026-11-23T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- Z.ai memperkenalkan GLM-5.4 dengan arsitektur Loop Transformer. Perusahaan menyebut model ini dapat mengulang sebagian lapisan untuk memperdalam pemrosesan tanpa menambah jumlah parameter.
- XNU Linux dan win4wine menunjukkan dua pendekatan berbeda untuk bereksperimen dengan lingkungan sistem operasi di Linux.
- NO SPEAKER memanfaatkan motor haptik trackpad untuk menghasilkan suara, tetapi kompatibilitasnya masih terbatas dan bergantung pada komponen privat macOS.
- Sebuah tulisan di blog Gentoo mengajak pembaca melihat beban pemeriksaan laporan keamanan, bukan hanya jumlah laporan yang masuk.

Angka poin dan komentar di bawah adalah potret saat halaman Hacker News dibaca, bukan angka tetap. Peringkat juga dapat berubah sepanjang hari.

## 🤖 GLM-5.4 mencoba lapisan yang dipakai berulang

Saat diperiksa, [pengumuman GLM-5.4](https://z.ai/blog/glm-5.4) berada di posisi pertama Hacker News dengan **399 poin dan 168 komentar**. Z.ai menjelaskan bahwa Loop Transformer menjalankan sekelompok lapisan berbobot bersama beberapa kali, sehingga representasi dapat diperbaiki pada putaran berikutnya.

Dalam penjelasan teknisnya, perusahaan menyebut **28 lapisan dari model dasar GLM-5 dijalankan dalam dua iterasi** pada model berskala 750 miliar parameter. Idenya bukan membuat parameter baru setiap kali proses berulang, melainkan menggunakan bagian yang sama lagi. Analogi sederhananya seperti membaca ulang draf dengan kacamata yang sama, bukan otomatis mengganti seluruh perangkat kerja.

Z.ai mengklaim performanya sebanding dengan model berukuran lebih besar. Itu tetap klaim pengembang dan perlu diuji secara independen untuk tugas yang kamu pedulikan. Perusahaan juga mengakui model bisa terjebak dalam proses berpikir yang terlalu panjang. API masih disebut segera hadir, sedangkan bobot terbuka masih berupa rencana setelah penguatan keamanan; keduanya bukan sesuatu yang perlu diasumsikan sudah tersedia.

[Sumber: pengumuman Z.ai](https://z.ai/blog/glm-5.4) · [Hacker News](https://news.ycombinator.com/)

## 🐧 Dua eksperimen desktop di Linux

[XNU Linux](https://github.com/AFK-surf/xnulinux) menjelaskan dirinya sebagai proyek yang menjalankan XNU sebagai modul kernel yang dapat dimuat di Linux arm64. Saat pembacaan, ceritanya memperoleh **448 poin dan 196 komentar**. Ini proyek teknis untuk menjelajahi bagaimana bagian-bagian sistem bisa bekerja bersama, bukan pengumuman produk resmi Apple. Repositorinya sendiri menyatakan proyek ini tidak berafiliasi dengan atau didukung Apple.

Di sisi lain, [win4wine](https://github.com/mikuta0407/win4wine) berupaya menjalankan shell Windows XP sebagai desktop Linux melalui Wine. Cerita ini mendapat **24 poin dan 9 komentar** saat diperiksa. Keduanya sama-sama menarik untuk penggemar sistem operasi, tetapi pendekatannya berbeda: yang satu berkaitan dengan XNU pada Linux arm64, sedangkan yang lain menyorot shell Windows melalui Wine.

Tapi… ada tapinya. Proyek eksperimental tidak otomatis cocok untuk menggantikan lingkungan kerja utama. Baca dokumentasi, ketergantungan, dan ketentuan penggunaan komponennya terlebih dahulu. Poin Hacker News menunjukkan perhatian pembaca saat itu, bukan jaminan kestabilan atau kemudahan pemasangan.

## 🔊 Trackpad yang bisa mengeluarkan suara

[NO SPEAKER](https://github.com/os6/nospeaker) adalah eksperimen yang menggunakan motor haptik trackpad Mac untuk membuat getaran yang terdengar. Di Hacker News, proyek ini tercatat **44 poin dan 15 komentar** saat diperiksa. Pengembang menjelaskan bahwa suara berasal dari getaran kaca trackpad, bukan dari speaker di dalamnya.

Hasil yang dijelaskan pembuatnya terdengar seperti suara robot dan relatif pelan. Proyek memerlukan trackpad Force Touch dan versi macOS yang sesuai. Dokumentasi juga menyebut pengujian yang terbatas serta pemakaian framework privat yang bisa berubah pada pembaruan macOS. Jadi, jangan menganggapnya pengganti speaker atau mengira semua kombinasi perangkat sudah diuji.

[Sumber: repositori NO SPEAKER](https://github.com/os6/nospeaker)

## 🔐 Laporan keamanan juga perlu ditriase

Tulisan [di blog Gentoo](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) membahas beban pengelola proyek ketika menerima banyak laporan kerentanan. Penulis membedakan laporan yang perlu diteliti dari laporan yang tidak valid, dan menekankan bahwa tingkat risiko bergantung pada bagaimana perangkat lunak digunakan.

Tulisan tersebut berasal dari Oktober, meski kembali muncul di halaman Hacker News hari ini. Argumen penulis adalah pendapat berdasarkan pengalamannya, bukan bukti bahwa setiap laporan keamanan buruk. Pesan praktisnya: sebelum bereaksi terhadap peringatan, periksa apakah komponen dan skenario serangannya memang berlaku pada sistem yang sedang dinilai.

## 💡 Insight hari ini

Eksperimen yang menarik tetap membutuhkan pertanyaan dasar: apa yang benar-benar tersedia, apa yang baru diklaim, dan di lingkungan mana hasilnya sudah diuji? Pertanyaan yang sama berguna baik untuk model AI maupun proyek sistem operasi.

## 🗣️ Pendapat saya

Saya paling penasaran dengan pendekatan lapisan berulang pada GLM-5.4, tetapi ingin melihat pengujian independen dan pengalaman pemakaian sebelum menilai klaim performanya. Eksperimen trackpad juga mengingatkan saya bahwa ide kreatif tidak harus langsung menjadi produk praktis. Menurut kalian, mana yang paling menarik untuk dicoba atau diikuti?

## 🔗 Sumber

- [Hacker News — halaman utama](https://news.ycombinator.com/)
- [Z.ai — GLM-5.4](https://z.ai/blog/glm-5.4)
- [XNU Linux — repositori proyek](https://github.com/AFK-surf/xnulinux)
- [win4wine — repositori proyek](https://github.com/mikuta0407/win4wine)
- [NO SPEAKER — repositori proyek](https://github.com/os6/nospeaker)
- [Michał Górny — The next circle of security hell](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/)
