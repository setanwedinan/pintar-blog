---
title: 'PHP bocor sampai ke inti mesinnya, dan kunci CA eMudhra yang cuma sepanjang satu byte'
description: 'Rangkuman Hacker News 21 Oktober 2026: dua CVE dengan skor 9.2 memaksa PHP merilis patch darurat untuk semua versi sejak 5.4, delapan sertifikat intermediate eMudhra ternyata memakai private key 3 sampai 8 bit sehingga bisa dipecahkan dalam hitungan milidetik, Mistral merilis Voxtral 3, dan Permit Pending mengubah SimCity jadi drama perizinan.'
pubDate: 2026-10-21T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- PHP merilis 8.5.12, 8.4.27, 8.3.36, dan 8.2.35 untuk menutup dua CVE dengan skor 9.2 yang memungkinkan RCE tanpa autentikasi, dan semua versi sejak 5.4 kena _(php.net)_
- Delapan sertifikat intermediate eMudhra memakai private key P-384 yang isinya angka 4, 56, dan 115 saja — bisa dipecahkan kurang dari satu detik _(Scott Helme)_
- Mistral merilis Voxtral 3: model speech-to-text dan text-to-speech plus SDK voice agent untuk 50 lebih bahasa _(Mistral)_
- Permit Pending, game kota di browser yang membalik premis SimCity: kamu wali kota yang harus lolos hearing, gugatan, dan pemilu _(permit.petercai.com)_
- Josh Comeau menulis soal masa depan CSS, dan thread-nya jadi salah satu diskusi terpanas hari ini _(joshwcomeau.com)_

## 🐘 PHP: lubang di inti mesin, bukan di aplikasinya

Ini yang paling penting hari ini, terutama kalau kamu punya situs yang jalan di atas PHP.

PHP merilis patch darurat pada 21 Oktober 2026 untuk dua kerentanan yang diberi skor CVSS 9.2. Bukan bug di WordPress, bukan salah konfigurasi plugin. Lubangnya ada di mesin PHP itu sendiri, jadi berlaku untuk apa pun yang berjalan di atasnya.

Dua CVE-nya:

- **CVE-2026-109618** — RCE lewat korupsi saat kehabisan memori (OOM). Penanganan OOM bisa menghentikan PHP ketika data request internal baru terinisialisasi sebagian, lalu pembersihan request memperlakukan data tidak valid itu sebagai valid.
- **CVE-2026-109619** — RCE lewat state global yang basi. State internal milik satu request bisa bertahan setelah memorinya dibebaskan, lalu request berikutnya yang ditangani worker yang sama memakai state basi itu sebelum inisialisasi normal meresetnya.

Versi yang sudah diperbaiki: **8.5.12, 8.4.27, 8.3.36, dan 8.2.35**. PHP 8.1 dan yang lebih lama sudah tidak menerima pembaruan rutin dari proyek PHP, meski untuk kasus ini tim keamanan PHP tetap menyediakan source-backport minimal untuk 7.4, 8.0, dan 8.1 — ditujukan bagi yang membangun dari source atau tidak punya akses ke vendor LTS.

Satu catatan praktis dari pengumuman resminya: kalau kamu bergantung pada repositori `rpms.remirepo.net` yang dikelola sukarelawan, PHP menyarankan pindah ke paket distro atau build dari source, karena repo itu tidak akan punya pembaruan hari ini.

Yang bikin ini terasa mendesak: risikonya tidak merata. PHP menyebut ancaman tertinggi ada di **mod_php**, dengan demonstrasi exploit di mana satu request tanpa autentikasi bisa memicu serangan sebelum kode aplikasi mana pun berjalan. Artinya WAF dan validasi input di level aplikasi ngga banyak menolong.

Wiz, yang mengerjakan riset ini, menyebut cakupannya mundur sampai PHP 5.4 dan menilai temuannya sebagai salah satu kerentanan paling parah yang pernah ditemukan di PHP — bahkan salah satu yang paling parah dalam sejarah perangkat lunak. Menurut mereka, rantai langkah untuk membuktikan exploitability-nya sangat rumit, di batas kemampuan peneliti manusia. Model AI frontier yang memangkas hambatan itu.

Di bagian terima kasih, Wiz menyebut kerja sama dengan tim PHP, **Calif**, dan **OpenAI** untuk penemuan, koordinasi, dan verifikasi patch. Raluca Ada Popa, Head of Gemini Security di Google DeepMind, dikutip menyebut **Gemini 4 Argon** membantu menemukan dan menambal kerentanan ini. Wiz juga menyebut keterlibatan Google Cloud, Cloudflare, AWS, Microsoft, Automattic, Fastly, Akamai, Imperva, dan Vercel dalam menyiapkan panduan serta deteksi untuk pelanggan.

Satu detail yang gampang terlewat: perbaikannya juga menyentuh **PHP-FPM, Apache dengan mod_php, php-cgi, FrankenPHP, dan LiteSpeed**. Kalau kamu mengelola server, cek juga paket distro — vendor LTS sudah menerima patch lebih dulu, jadi repositori mungkin sudah menyediakan versi barunya.

## 🔑 Kunci CA sepanjang satu byte, dan kenapa itu mimpi buruk

Kalau cerita PHP bikin panik karena dampaknya luas, cerita eMudhra bikin panik karena sebabnya bodoh.

Private key pada kurva P-384 seharusnya berupa angka acak 384 bit, sekitar 2^384 kemungkinan. Kunci milik delapan sertifikat intermediate eMudhra terlihat seperti ini:

```
d = 0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004
```

Itu 47 byte nol, lalu satu byte berisi angka 4. Kunci lain isinya 56, dan 115. Entropinya cuma **3 sampai 8 bit** — untuk kunci paling besar pun ruang pencariannya hanya 256 kemungkinan. Scott Helme memulihkan semuanya dari sertifikat publik di laptopnya dalam waktu kurang dari satu detik.

Kronologinya:

- **Sabtu, 17 Oktober** — seorang peneliti melaporkan ke Apple, Google, Microsoft, Mozilla, dan eMudhra. Chrome mendorong pembaruan CRLSet yang memblokir sertifikat itu malam harinya, Mozilla menyusul lewat OneCRL beberapa jam kemudian.
- **Selasa, 20 Oktober** — Mozilla mengumumkan publik dan mengirim pembaruan NSS yang mencabut root eMudhra. Chrome memastikan root-nya masuk Chrome Root Store v43.
- Di perangkat Apple, sertifikat itu diblokir sejak 19 Oktober; di platform Microsoft sejak 20 Oktober.

Delapan sertifikat tersebut terdiri dari enam CA penerbit TLS (DV, OV, EV, dua generasi masing-masing) dan dua CA code-signing, semuanya dibuat April 2025 dan ikut di-cross-sign oleh root AAA Certificate Services milik Sectigo pada Mei 2025.

**Tapi… ada tapinya.** Pencabutan lewat OneCRL, CRLite, dan CRLSet hanya menolong klien yang benar-benar membaca informasi revocation. eMudhra sendiri sudah mencabut sertifikatnya, tapi banyak klien lain butuh pembaruan perangkat lunak, bukan sekadar daftar cabut. Kalau kamu punya perangkat atau library yang trust store-nya jarang di-update, sertifikat itu masih dipercaya di sana. Situs we-have-a-problem.com menyediakan skrip curl untuk mengecek apakah klienmu masih percaya atau tidak.

## 🎙️ Voxtral 3 dan janji voice agent yang benar-benar jalan

Mistral merilis Voxtral 3: keluarga model speech-to-text dan text-to-speech plus SDK voice agent yang menyatukan mendengar, berpikir, memanggil tool, dan berbicara dalam satu pipeline streaming real-time.

Yang ditawarkan: transkripsi akurat lintas bahasa dan aksen, sintesis suara yang bisa menyesuaikan emosi, dan integrasi tool untuk alur kerja bertingkat. Dukungannya 50 lebih bahasa. Tersedia lewat API Mistral yang di-hosting di EU atau bisa di-deploy sendiri, jadi soal kedaulatan data jadi bagian dari jualannya.

Contoh yang mereka tampilkan cukup membumi: seorang pengguna menelepon, menyebut nomor rujukan dokter dalam bahasa Prancis, agen memanggil fungsi untuk mengecek rujukan itu, membacakan isinya, lalu menawarkan slot janji temu berikutnya dan memesankannya. Semua dalam satu percakapan.

Thread-nya dapat 727 poin dan 180 komentar. Reaksinya campur: ada yang antusias karena akhirnya ada alternatif Eropa untuk pipeline suara, ada juga yang menanyakan hal biasa — latensi, harga, dan seberapa bagus model ini di kondisi nyata seperti suara bising dan orang yang saling memotong.

## 🏙️ SimCity, tapi harus lewat hearing dan gugatan

Yang paling menyenangkan hari ini: **Permit Pending**, game kota di browser yang muncul di Hacker News sebagai Show HN dari akun `pcai`, dengan domain permit.petercai.com.

Premisnya sederhana dan langsung kena. Kamu bukan dewa. Kamu wali kota terpilih. Setiap blok apartemen, jalur bus, dan pabrik harus melewati hearing, review, keberatan warga, gugatan, dan banding. Ekonominya nyata, tetangganya tidak selalu rasional.

Situsnya memuat contoh kasus yang terasa familiar: bulan pertama boom teknologi menaikkan sewa, bulan ketiga kamu mengubah zonasi lahan kosong untuk gedung 12 lantai, bulan keempat berkasnya digugat pemilik rumah sekitar soal parkir dan karakter lingkungan, bulan ketujuh hearing dan kamu menukar ketinggian dengan parkir sehingga gedungnya jadi 6 lantai, bulan kedelapan proyek yang lebih kecil itu tidak lagi layak secara ekonomi.

Itu bukan cerita fiksi. Itu ringkasan dari kenapa kota-kota susah membangun.

Game ini gratis, jalan di browser, dan dapat 856 poin dengan 392 komentar. Banyak komentar memuji satu hal: game ini membuat orang merasakan biaya politik dari keputusan yang secara ekonomi sudah jelas benar.

## 🎨 CSS punya masa depan, dan diskusinya ramai

Josh Comeau menulis esai soal masa depan CSS, dan thread-nya dapat 486 poin dengan 200 komentar. Judul aslinya "The Future of CSS", dengan subjudul yang jelas: sepuluh pilihan teratasnya untuk Interop 2027.

Konteksnya penting. Beberapa tahun terakhir, vendor browser besar — Google, Apple, Microsoft, Mozilla, plus Igalia dan Bocoup — bekerja bareng di proyek **Interop** untuk memperbaiki dukungan fitur web yang seragam. Hasilnya cukup terbukti: begitu sebuah area fokus masuk Interop, dukungannya sering mencapai hampir 100 persen di semua browser utama dalam setahun. Subgrid adalah contohnya — sudah ada di Firefox sejak 2019, tapi baru benar-benar tersedia luas setelah masuk Interop 2023.

Sekarang Interop 2027 sedang disusun, dan tim Mozilla membuat sistem peringkat supaya publik bisa memberi suara untuk fitur yang paling diminta.

Satu contoh dari daftar Comeau: **CSS functions**, proposal untuk mendefinisikan fungsi langsung di CSS. Per Oktober 2026 status dukungannya belum merata — sudah ada di Chrome 155 dan Edge 154, belum di Firefox 157 dan Safari 27.

Buat yang menulis CSS tiap hari, ini pengingat bahwa lanskapnya bergerak cukup cepat. Hal-hal yang dulu jadi alasan memasang tool tambahan pelan-pelan jadi bawaan browser.

## 🗣️ Pendapat saya

Dari semua yang saya baca hari ini, cerita PHP yang paling membuat saya tidak nyaman — bukan karena skornya 9.2, tapi karena jenis lubangnya. Ini bukan bug logika di satu fitur. Ini dua keputusan arsitektur yang dibuat lebih dari satu dekade lalu, yang baru ketahuan bisa dieksploitasi setelah ada model AI yang cukup sabar untuk merangkai rantai langkahnya. Artinya di kode lama yang kita anggap "sudah teruji waktu", masih ada kemungkinan besar hal serupa menunggu.

Yang juga saya catat: komentar Wiz bahwa exploitability-nya ada "di batas kemampuan peneliti manusia". Itu kalimat yang akan kita baca makin sering. Bukan karena peneliti manusia jadi lebih bodoh, tapi karena biaya menemukan bug kelas ini turun drastis. Dan biaya turun biasanya diikuti jumlah temuan naik.

Untuk eMudhra, saya ngga punya penjelasan yang memuaskan. Kunci 4 bit bukan kesalahan yang lolos karena terburu-buru. Itu kegagalan di tingkat proses pembuatan kunci, dan fakta bahwa delapan sertifikat bisa lolos audit sampai dipakai lebih dari setahun membuat saya bertanya-tanya seberapa banyak pengecekan yang kita anggap ada padahal cuma ada di dokumen.

Soal Voxtral 3, saya belum dengar sendiri hasilnya, jadi saya ngga mau bilang ini bagus atau biasa saja. Yang saya percaya: pasar voice agent sekarang penuh demo yang memukau di video dan gagal di telepon sungguhan. Sampai ada yang mengukur latensi dan akurasi di panggilan nyata, klaim 50 bahasa itu masih janji.

Kalian sendiri, kalau punya situs atau server yang jalan di PHP, sudah cek versinya hari ini?

## 🔗 Sumber

- [Upcoming Critical PHP Security Release](https://news-web.php.net/php.announce/509) — php.net
- [PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35](https://www.php.net/index.php) — php.net
- [PHP2Shell: AI uncovers critical RCE vulnerabilities](https://www.wiz.io/blog/php2shell-php-rce) — Wiz
- [Eight Bits of Trust; eMudhra's CA keys cracked in milliseconds](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) — Scott Helme
- [eMudhra Intermediate CA Compromise](https://emudhra.we-have-a-problem.com/) — halaman koordinasi disclosure
- [Voxtral 3: Voice Agent SDK & Speech Models in 50+ Languages](https://mistral.ai/news/voxtral-3/) — Mistral
- [Permit Pending](https://permit.petercai.com/) — Show HN (permit.petercai.com)
- [The Future of CSS](https://www.joshwcomeau.com/css/interop-2027/) — Josh Comeau
- [Diskusi Hacker News 21 Oktober 2026](https://news.ycombinator.com/) — Hacker News
