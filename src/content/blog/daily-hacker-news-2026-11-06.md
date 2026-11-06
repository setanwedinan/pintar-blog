---
title: 'Alamat email ikut terkirim ke situs yang dibuka Claude Code'
description: 'Rangkuman Hacker News 6 November 2026: laporan kebocoran alamat email lewat Claude Code dan jawaban engineer Anthropic, CVE 8.1 di Paint yang bikin orang bertanya soal jalur jaringan, ASN Bank memblokir GrapheneOS lewat Play Integrity, UI Blender yang jadi library, dan Hackintosh yang hidup lagi karena AI.'
pubDate: 2026-11-06T13:00:00Z
tags: ['berita', 'Hacker News', 'keamanan', 'open source']
---

## 🔍 TL;DR

- Sebuah laporan bug di repo Claude Code menyebut alamat email akun ikut terkirim ke pihak ketiga lewat header `User-Agent` saat agen melakukan pencarian web, dan ceritanya memuncaki Hacker News dengan **1.318 poin dan 417 komentar** _(GitHub, Hacker News)_
- Seorang engineer Claude Code menjawab langsung di thread: alamat email akun akan dihapus dari konteks yang diberikan ke model, rilisnya pekan depan _(GitHub)_
- CVE-2026-83844 di Windows Paint tercatat sebagai _out-of-bounds read_ yang bisa dipakai eksekusi kode, skor CVSS **8.1**, vektor `AV:N` atau lewat jaringan _(NVD)_
- ASN Bank versi 1.36.3 memeriksa Google Play Integrity untuk pembayaran iDEAL | Wero, dan pengguna GrapheneOS berhenti bisa bayar sejak pembaruan itu _(laporan kompatibilitas PrivSec)_
- Proyek BUI memisahkan UI Blender jadi library untuk Python, Rust, dan React, sementara Hackintosh ramai lagi karena model AI dipakai membongkar driver _(GitHub, naut.ca)_

## 🔒 Satu header, dan ratusan email scam

Laporan itu dibuka 5 November di repo `anthropics/claude-code` oleh pengguna `taylor-edwards`, dengan judul yang tidak berbelit: pelanggaran privasi di header `User-Agent`. Versi yang dipakai 2.1.318 di macOS.

Isi laporannya sederhana dan cukup bikin merinding. Selama Claude Code melakukan pencarian web, alamat email pemilik akun ikut dikirim ke situs-situs yang dikunjungi, dan menurut pelapor itu terjadi tanpa izin. Efek yang dia alami: puluhan email scam per hari.

Dia tidak menuntut opsi opt-out. Dia menuntut fitur itu dihapus dari harness-nya sama sekali, dengan alasan yang masuk akal: header itu tidak membantu layanan yang memang tidak suka trafik agen, tidak menjaga anonimitas, dan jadi tambang emas buat penipu.

Di thread yang sama, beberapa orang melaporkan pola yang lebih spesifik: perilaku ini paling sering muncul saat agen menyentuh API SEC. Satu komentar menyebut dokumentasi API SEC memang meminta alamat email di `User-Agent` dan menolak permintaan tanpa itu. Kalau benar begitu, masalahnya bukan satu bug di satu tempat, tapi kebiasaan mengisi header dengan identitas asli supaya permintaan diterima.

Yang membuat thread ini berbeda dari keluhan privasi biasa: ada jawaban dari dalam.

Seorang engineer Claude Code menulis bahwa mereka sedang menghapus alamat email akun dari konteks yang diberikan ke model, dan pembaruannya akan sampai ke pengguna di rilis berikutnya, yang mestinya keluar awal pekan depan. Alasannya jujur: pengguna sempat mengeluh Claude mengarang nama untuk hal-hal seperti tag `@author` karena tidak tahu siapa pemilik akun, jadi email akun ditambahkan ke konteks. Dari situ, menurutnya, masalah ini menyebar lebih jauh dari yang dimaksud.

Ada juga jawaban kedua yang lebih teknis: sejak 2.1.317 ada mod bawaan bernama `cc-plugin-privacy` yang memblokir perilaku itu secara deterministik, dan bisa dimatikan lewat `/plugins`.

Perhatikan bedanya. Laporan aslinya soal header HTTP. Jawaban engineer-nya soal konteks model. Dua jalur berbeda, dan keduanya sama-sama membawa identitas ke tempat yang tidak kamu pilih.

## 🎨 Paint, CVE 8.1, dan pertanyaan yang salah tempat

Cerita kedua terlihat seperti lelucon sampai kamu membaca skornya. CVE-2026-83844, tercatat di NVD sebagai _out-of-bounds read_ di Windows Paint yang memungkinkan penyerang tanpa otorisasi mengeksekusi kode **lewat jaringan**.

Skornya 8.1, kategori tinggi. Vektornya `CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H`. Artinya: bisa dari jaringan, kompleksitas tinggi, tanpa privilese, dan tanpa interaksi pengguna. CVE ini dipublikasikan 13 Oktober 2026, dengan satu rujukan resmi ke panduan MSRC.

Reaksi Hacker News, 609 poin dan 226 komentar, hampir seragam: sejak kapan Paint punya jalur jaringan?

Pertanyaan itu wajar, dan advisory-nya memang tidak menjawab. Yang dibahas di thread justru hal-hal praktis. Satu komentator menyebut versi yang diperbaiki adalah 11.2605.91.0 dan dia harus mengambilnya dari Microsoft Store karena Windows Update tidak menampilkan apa pun. Komentator lain mencatat versi lama di luar rentang terdampak mungkin aman, tapi menambahkan bahwa di Windows dia tidak yakin.

Sisanya adalah lelucon yang cukup tajam, termasuk satu orang yang menunggu tulisan Raymond Chen soal asal-usul bug ini.

Aplikasi yang dulu tidak pernah menyentuh jaringan sekarang menyentuhnya, dan model ancamannya ikut berubah tanpa ada yang benar-benar memperbarui asumsi soal aplikasi mana yang "cuma alat gambar".

## 🏦 Bank yang memutuskan ponselmu tidak aman

Di Belanda, ASN Bank merilis versi 1.36.3 pada pertengahan Oktober. Sejak versi itu, aplikasinya memeriksa Google Play Integrity sebelum pembayaran iDEAL | Wero dijalankan. Pengguna GrapheneOS di Pixel 9 melaporkan pembayaran berhenti bekerja, dengan pesan bahwa perangkatnya tidak memenuhi syarat keamanan.

Laporan ini hidup di repo `PrivSec-dev/banking-apps-compat-report`, issue nomor 105, dan sudah 80 komentar. Diskusi Hacker News-nya 341 poin dan 208 komentar.

Salah satu komentator membongkar nama metode yang memanggil pemeriksaan itu: `nl.devolksbank.mobile.banking.security.data.wero.IntegrityRepository#requestIntegrityToken`. Dari namanya, itu kode ASN sendiri, bukan SDK dari Wero. Komentator yang sama menyebut token integritasnya dikirim ke server ASN.

ASN bukan satu-satunya bank di Belanda, dan itu justru bagian yang paling mengganggu. Di thread yang sama, pengguna Triodos, N26, bunq, dan Fortuneo melaporkan pembayaran Wero masih jalan di GrapheneOS. Jadi ini bukan keterbatasan teknis dari sistem pembayaran, tapi keputusan per bank.

EPI, perusahaan di belakang Wero dan iDEAL, menjawab salah satu pengadu. Inti jawabannya: mereka fokus pada platform dan perangkat mobile banking yang paling banyak dipakai, dan mengakui pendekatan itu bisa mengecualikan sebagian pengguna. Soal Play Integrity, EPI menulis bahwa attestation hardware saja tidak cukup karena tidak memverifikasi integritas aplikasi pemanggil dan sistem operasi yang berjalan.

Pengguna GrapheneOS membalas bahwa klaim itu keliru, dan menunjuk panduan kompatibilitas attestation milik GrapheneOS. Ada juga yang menyorot ironi yang lebih besar: sistem pembayaran yang dipromosikan sebagai kedaulatan digital Eropa bergantung pada layanan verifikasi milik perusahaan Amerika.

Satu pengadu sudah mengajukan keluhan resmi ke ASN dan mendapat balasan tertulis yang isinya menyebut perangkatnya tidak lolos pemeriksaan karena sistem operasinya tidak disertifikasi Google. Balasan itu, menurutnya, tidak menyisakan jalan lain selain eskalasi.

## 🧩 UI Blender, dipisahkan dari Blender

Proyek BUI melakukan sesuatu yang sudah lama ditunggu orang: mengambil antarmuka Blender dan menjadikannya library mandiri. Repo-nya `ppmpreetham/BUI`, dan deskripsinya lugas, "Blender GPU Accelerated UI, decoupled from its original codebase".

Yang bisa dipakai: Python lewat paket `blenderui`, Rust lewat crates.io, JavaScript termasuk React lewat `@blender-ui/react`, plus C, C++, dan Dear ImGui. Lisensinya GPL-2.0-or-later. Repo dibuat 26 Agustus 2026 dan sudah 640 bintang saat cerita ini ditulis.

Klaim di judul, "dua kali lebih baik dari GPUI", jelas klaim penulisnya sendiri. Yang menarik justru kenapa orang peduli. UI Blender dibangun dan dioptimalkan selama puluhan tahun, hemat memori, dan cepat. Melepasnya dari Blender berarti proyek lain bisa memakai hasil kerja itu tanpa membawa seluruh aplikasi 3D-nya.

Di Hacker News, 385 poin dan 157 komentar, pujian pertama bukan soal performa. Beberapa orang memuji README-nya karena langsung menjelaskan apa yang sedang dilihat dan kenapa orang mungkin tertarik.

Tapi ada tapinya, dan tapinya cukup serius. Satu komentator menuduh proyek ini tidak jujur: menurutnya yang terjadi bukan pemisahan kode UI Blender, melainkan implementasi ulang UI immediate-mode, dan agen AI-nya tidak benar-benar membaca kode aslinya. Buktinya operasi standar yang dikenal setiap pengguna Blender gagal, termasuk drag vertikal untuk mengedit beberapa field angka sekaligus, fitur yang justru dipromosikan di halaman utama proyek.

Belum ada pengujian independen atas klaim itu. Tapi kalau benar, ada pelajaran yang lebih besar dari proyeknya: "dipisahkan dari Blender" dan "ditulis ulang menyerupai Blender" adalah dua hal yang sangat berbeda, dan README yang bagus tidak bisa membedakan keduanya untukmu.

## 🍏 Hackintosh hidup lagi, dan penyebabnya agen

macOS 27 dengan nama Golden Gate dirilis tahun ini dan tidak lagi mendukung x86. Di atas kertas, itu akhir riwayat Hackintosh.

Kenyataannya, menurut tulisan di naut.ca tanggal 5 November, komunitasnya justru sedang ramai. Penulisnya sendiri baru pertama kali membuat aplikasi iOS: dia memasang macOS 26 di ThinkPad T490, memakai Xcode 26, dan menurut dia aplikasinya jalan dalam sehari tanpa menulis satu baris kode. Xcode 26 punya integrasi Claude Code dan OpenAI Codex.

Dari pengalaman itu, dia menyusun daftar kemajuan komunitas beberapa pekan terakhir: macOS 27 yang jalan di laptop Snapdragon, macOS 27.2 beta di papan ARM RK3588 dengan driver Mali, iOS 17 di Nintendo Switch OLED, dukungan GPU Nvidia seri 50 lewat proyek bernama nullmoth, AirDrop, decode video terakselerasi, sampai macOS 27 hasil translasi yang jalan di x86.

Salah satu kalimat yang dia kutip dari orang lain cukup menggambarkan metodenya: ini seperti kekuatan Claude Code dengan Ghidra, alat reverse engineering, dalam dosis besar.

Diskusi di Hacker News, 352 poin dan 197 komentar, langsung berbelok ke arah yang tidak diduga penulisnya. Banyak komentator tidak membahas Hackintosh, tapi mengeluh bahwa mereka justru ingin Linux di perangkat Mac, dan menunggu Asahi Linux sampai ke chip M5.

## 🌍 Catatan pendek dari meja sebelah

**Kugelblitz**, aplikasi macOS untuk menjelajah Bumi sebagai globe 3D, dapat 142 poin. Ukurannya 77 MB, butuh macOS 27 dan Apple silicon, dan mengambil data dari tile server OpenStreetMap-nya sendiri tanpa akun. Ada juga mode yang mengirim globe ke Apple Vision Pro dari Mac.

## 🧾 Tapi… ada tapinya

Kalau dibaca berurutan, lima cerita hari ini punya satu benang yang sama: keputusan teknis kecil yang efeknya jauh lebih besar dari yang dibayangkan pembuatnya.

Menambahkan email ke konteks model supaya tag `@author` tidak dikarang adalah keputusan kecil yang masuk akal. Hasilnya, sebagian pengguna menerima puluhan email scam per hari. Memanggil Play Integrity untuk pembayaran adalah satu baris pemeriksaan tambahan. Hasilnya, sebagian warga kehilangan akses ke infrastruktur pembayaran yang makin wajib dipakai. Memisahkan UI Blender terdengar seperti pekerjaan arsitektur. Hasilnya, kalau kritik di thread itu benar, kita dapat tiruan yang belum tentu setara.

Dan soal Paint: skor 8.1 dengan vektor jaringan pada aplikasi yang kita anggap alat gambar lokal seharusnya jadi alarm bahwa daftar "aplikasi yang menyentuh internet" di kepala kita sudah basi.

Yang menghibur, satu-satunya cerita yang paling terbuka soal kelemahannya adalah yang paling spekulatif. Penulis blog Hackintosh tidak mengklaim apa pun soal keamanan atau stabilitas, dia hanya menunjukkan apa yang berhasil dijalankannya.

## 🗣️ Pendapat saya

Yang paling saya pikirkan dari cerita Claude Code bukan emailnya, tapi kecepatan jawabannya. Engineer Anthropic masuk ke thread publik, mengakui alasannya, menyebut tanggal rilis, dan tidak menyalahkan pengguna. Itu standar yang jarang, dan saya menghargainya.

Tapi saya juga ngga bisa mengabaikan bahwa perbaikannya datang setelah laporan itu jadi berita, bukan setelah laporan pertama soal konteks email yang menurut komentator sudah ada sejak Mei 2026. Selisih waktunya yang jadi soal, bukan niatnya.

Soal ASN, ini jenis cerita yang bikin saya ngga nyaman karena solusinya bukan teknis. GrapheneOS bisa membuktikan integritas boot-nya dengan kunci hardware. Yang tidak bisa dia berikan adalah sertifikasi dari Google. Jadi yang diperiksa bukan keamananmu, tapi keanggotaanmu di daftar yang disetujui satu perusahaan.

Dan soal BUI, saya termasuk orang yang langsung ingin mencobanya karena UI Blender memang enak dipakai. Tapi komentar yang menuduh proyek itu hasil implementasi ulang, bukan hasil pemisahan kode, adalah peringatan yang tepat. Repo yang ramah dibaca bukan bukti arsitektur yang bersih.

## 💬 Pertanyaan buat kalian

Kalau aplikasi bank kalian menolak jalan di ponsel yang kalian anggap lebih aman, kalian akan pindah bank, tetap pakai aplikasi versi lama, atau mulai menagih regulator?

## 🔗 Sumber

- [Bug Report: Privacy violation in User-Agent header — GitHub issue 107757](https://github.com/anthropics/claude-code/issues/107757)
- [Diskusi Hacker News: Claude Code sends your email address to websites (1.318 poin, 417 komentar)](https://news.ycombinator.com/item?id=50385272)
- [CVE-2026-83844 — NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-83844)
- [Panduan MSRC untuk CVE-2026-83844](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-83844)
- [Diskusi Hacker News: MS Paint Remote Code Execution (609 poin, 226 komentar)](https://news.ycombinator.com/item?id=50384233)
- [ASN Bank — PrivSec banking apps compat report, issue 105](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105)
- [Diskusi Hacker News: ASN blocks non-Google Android (341 poin, 208 komentar)](https://news.ycombinator.com/item?id=50390124)
- [BUI — Blender UI as a library](https://github.com/ppmpreetham/BUI)
- [Diskusi Hacker News: Blender UI and Runtime (385 poin, 157 komentar)](https://news.ycombinator.com/item?id=50389333)
- [The Hackintosh Reborn... with AI — naut.ca](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/)
- [Diskusi Hacker News: The Hackintosh Reborn (352 poin, 197 komentar)](https://news.ycombinator.com/item?id=50383057)
- [Kugelblitz — Metaebene Applications](https://apps.metaebene.me/en/kugelblitz)
- [Diskusi Hacker News: Kugelblitz (142 poin, 43 komentar)](https://news.ycombinator.com/item?id=50389370)
