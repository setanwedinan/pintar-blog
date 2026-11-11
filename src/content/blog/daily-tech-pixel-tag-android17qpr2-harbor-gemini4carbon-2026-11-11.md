---
title: 'Pixel Tag akhirnya dijual 29,99 dolar, dan Apple diam-diam menyiapkan server AI lokal bernama Harbor'
description: 'Google melepas Pixel Tag ke pasaran, Android 17 QPR2 datang sebulan lebih awal, dan Apple menyiapkan aplikasi Harbor untuk menjadikan beberapa Mac sebagai server AI pribadi.'
pubDate: 2026-11-11T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- Pixel Tag resmi dijual 29,99 dolar, pakai Bluetooth plus ultra-wideband, baterai CR2032 yang bisa diganti sendiri.
- Android 17 QPR2 keluar sebulan lebih awal bareng November Pixel Drop, membawa 33 perbaikan untuk Pixel.
- Apple sedang menggarap aplikasi bernama Harbor yang mengubah beberapa Mac jadi satu server AI pribadi.
- Gemini 4 Carbon masuk Antigravity, ditemani fitur `/swarm` yang menjalankan banyak agen sekaligus.
- Nous Research menambah plugin keamanan resmi untuk Hermes Agent.
- Google Cloud membawa Gemini ke urusan administrasi rumah sakit.

## 🏷️ Pixel Tag, dan harga yang akhirnya masuk akal

Google akhirnya menjual Pixel Tag mulai Selasa lalu. Harganya 29,99 dolar untuk satu unit, atau 99,99 dolar untuk paket isi empat. Perangkat ini sudah diumumkan sejak Agustus, tapi baru sekarang benar-benar bisa dibeli.

Secara fungsi, Pixel Tag mengerjakan hal yang sama dengan AirTag: menempel di kunci, dompet, atau tas, lalu bisa dicari lewat aplikasi Find Hub. Bedanya ada di bentuk. Google memilih bodi oval yang lebih ramping, lebar 1,1 inci dan tinggi 1,8 inci, dengan ketebalan 0,2 inci. AirTag sendiri lebarnya 1,26 inci dengan ketebalan 0,31 inci. Bobotnya 0,4 ons termasuk baterai.

Untuk pencarian presisi, Pixel Tag memakai kombinasi Bluetooth dan ultra-wideband, jadi panduannya bukan cuma "di sekitar sini" tapi arah dan jarak perkiraan. Ada speaker bawaan dengan volume maksimal sekitar 80 desibel, dan kamu bisa mengatur tiga tingkat kekerasan suara di Find Hub. Kalau ponselmu yang hilang, tekan tombol di tag dua kali untuk memanggil ponsel itu.

Satu hal yang sempat luput dari pengumuman Agustus: Pixel Tag ternyata punya NFC. Apple memakai NFC supaya orang yang menemukan AirTag bisa mengetuk dan melihat kontak pemiliknya. Google memakai gestur yang sama untuk membuka pengaturan perangkat. Untuk barang yang hilang di luar jangkauan, Pixel Tag menumpang jaringan crowdsourced yang menurut Google mencakup lebih dari satu miliar perangkat Android di seluruh dunia.

Baterainya CR2032 dan bisa diganti sendiri, dengan klaim daya tahan sampai satu tahun. Bodinya stainless steel, tahan air dan debu IP67, dan tersambung ke perangkat Android 9 ke atas lewat Fast Pair. Lokasinya bisa dibagikan ke maksimal 10 orang, yang berguna kalau yang dilacak adalah kunci mobil keluarga.

## 📱 Android 17 QPR2 keluar lebih cepat, dan 33 perbaikan itu bukan angka kosong

Android 17 QPR2 mulai disebar bersama November Pixel Drop dan patch keamanan November. Yang menarik, jadwalnya maju sekitar satu bulan dari perkiraan biasa.

Daftar perangkatnya panjang: Pixel 6a, Pixel 7, 7 Pro, 7a, Pixel Tablet, Pixel Fold, Pixel 8, 8 Pro, 8a, Pixel 9, 9 Pro, 9 Pro XL, 9 Pro Fold, 9a, Pixel 10, 10 Pro, 10 Pro XL, 10a, Pixel 11, 11 Pro, 11 Pro XL, dan 11 Pro Fold.

Perbaikannya tersebar di banyak bagian: aplikasi, audio, baterai dan pengisian, Bluetooth, kamera, konektivitas, tampilan, framework, performa, sensor, sistem, telepon, dan antarmuka. Beberapa yang paling terasa sehari-hari: keyboard virtual yang kadang ngga muncul di kolom pencarian, volume media yang tiba-tiba naik saat perintah suara dipicu, indikator pengisian yang menyala padahal tidak ada charger, sampai notifikasi yang sulit dibaca setelah tema warna tertentu dipasang.

Sisi keamanannya juga besar. Patch 1 November menyelesaikan 135 isu, patch 5 November menambah 97, dan buletin khusus perangkat Google mencantumkan 166 perbaikan tambahan. Rentang kerentanannya dari high sampai critical. OTA-nya sudah tersedia untuk sideload kalau kamu tipe yang ngga sabar menunggu giliran.

## 💻 Harbor, dan Apple yang tiba-tiba serius soal AI lokal

Apple sedang mengerjakan aplikasi yang sekarang disebut Harbor. Bocorannya datang dari akun Aaronp613 di X, dan AppleInsider mengonfirmasi bahwa aplikasi ini masih berstatus private preview di bawah merek Claris milik Apple.

Fungsinya sederhana untuk dijelaskan, tapi lumayan ambisius untuk dijalankan: mengubah Mac jadi server inferensi AI pribadi. Model open-weight dijalankan langsung di perangkat, datanya ngga keluar dari hardware, dan ngga ada yang dikirim ke cloud. Kalau kamu punya lebih dari satu Mac, semuanya bisa disambung jadi klaster lewat Thunderbolt 5, lalu Harbor mendeteksinya otomatis dan menggabungkan memori terpadu antar perangkat.

Yang bikin ini berbeda dari proyek sejenis: proses pemasangannya diklaim cuma butuh beberapa menit, tanpa konfigurasi manual dan tanpa terminal. Harbor mengurus unduhan model dan penempatannya sendiri. Nama sebelumnya adalah Fabric, jadi ini bukan proyek sekali lewat.

Tapi… ada tapinya. Harbor belum bisa dipakai siapa pun sekarang. Statusnya private preview, dan Apple belum menyebut tanggal rilis. Biayanya juga bukan biaya perangkat lunak, tapi biaya hardware: menjalankan model besar secara lokal butuh Mac dengan memori besar, dan itu bukan angka yang ramah buat kebanyakan orang.

## 🐝 Gemini 4 Carbon dan /swarm, saat satu agen dianggap kurang

Google merilis Gemini 4 Carbon di dalam Antigravity, ditemani fitur `/swarm` yang masih berstatus preview. Carbon diposisikan sebagai model untuk eksplorasi mendalam, penalaran panjang, dan verifikasi berulang yang memakan lebih banyak token. Google mengklaim Carbon menempati posisi pertama di CursorBench 4.0 dan WANDR milik Perplexity.

`/swarm` mengubah cara kerja Antigravity. Alih-alih satu agen yang mengerjakan semuanya, prompt kamu diteruskan ke sekumpulan agen: satu koordinator yang memecah pekerjaan, beberapa worker paralel di git worktree terpisah supaya suntingan ngga saling menimpa, plus verifier yang tugasnya menyerang diff dan menjalankan tes. Semua agen berkomunikasi di papan pesan bersama yang hanya bisa ditambah, dan berhenti tanpa biaya token saat menganggur.

Transparansinya juga dijaga. Ada panel Swarm di sisi Antigravity, papan terminal penuh lewat `/swarm board`, daftar anggota yang bisa kamu masuki untuk mengarahkan agen tertentu, dan grafik waktu yang bisa diputar ulang untuk melihat bagaimana tim sampai ke kode final.

Google menyebut fitur ini sudah dipakai internal selama lima minggu untuk migrasi multi-paket, investigasi akar masalah lintas subsistem, dan desain ulang arsitektur. Peringatan mereka sendiri jujur: sistem multi-agen paralel menghabiskan kuota jauh lebih cepat daripada chat biasa. Aksesnya untuk pelanggan Google AI Ultra, dan perusahaan lewat Gemini for business.

## 🛡️ Hermes Agent dapat plugin keamanan resmi

Nous Research menambahkan plugin keamanan resmi untuk Hermes Agent. Namanya hermes-security, diumumkan 8 November 2026, dan fokusnya bukan sekadar menambal kode tapi menilai apakah sebuah temuan benar-benar bisa dieksploitasi.

Cara kerjanya berlapis. Pertama, agen membangun threat model repositori: bagian mana yang bisa dijangkau penyerang, dan input mana yang dipercaya. Setelah itu kode dibagi ke beberapa subagen paralel yang memeriksa bagian berbeda. Temuan kandidat lalu diuji balik ke kode asli, ditelusuri jalur serangnya, dan yang tidak masuk akal dibuang. Ini penting karena alat pemindai otomatis biasanya tenggelam di false positive.

Ada juga opsi konfirmasi lewat tes: Hermes bisa menulis reproduksi kecil dari dugaan kerentanan dan menjalankannya di salinan sementara repositori. Tapi lingkungan sementara itu bukan sandbox keamanan, karena kode tetap berjalan dengan hak akses pengguna.

Laporannya bisa diekspor ke Markdown, JSON, CSV, dan SARIF, jadi bisa masuk ke alur kerja keamanan yang sudah ada. Mode pemindaiannya ada tiga: standar, mendalam, dan diferensial untuk perubahan terbaru. Syaratnya Hermes versi 0.21.5 ke atas dan Python 3.11 ke atas, dipasang lewat `hermes plugins install hermes-security --enable` lalu restart agen.

Satu catatan penting yang disebut Tekedia: kode sumber yang diperiksa tetap dikirim ke penyedia model yang kamu pakai, dan informasi dependensi bisa dibagikan ke basis data kerentanan eksternal. Untuk organisasi dengan kode rahasia, ini harus diputuskan sebelum plugin dinyalakan, bukan sesudah.

## 🏥 Gemini masuk ke urusan kertas rumah sakit

Google Cloud mengumumkan Gemini for healthcare, dan sekarang statusnya preview. Arahnya bukan mendiagnosis pasien, tapi merapikan pekerjaan administratif yang selama ini menumpuk.

Gemini di sini dibangun di atas agen Gemini universal dan tersambung ke sistem pihak ketiga: rekam medis, platform penagihan, dan pedoman resmi. Ia juga bisa mengakses data Medicare dan Medicaid untuk menyarankan langkah berikutnya dan menyusun alur kerja bertahap. Google menyebut keputusan yang berdampak besar tetap di tangan tenaga ahli, dan platformnya dirancang patuh HIPAA.

Mitra peluncurannya bukan nama kecil: Blue Cross Blue Shield of Massachusetts, Hartford HealthCare, HCA Healthcare, Highmark Health, Northwell Health, Optum, dan Stanford School of Medicine. Thomas Kurian, CEO Google Cloud, menyebut masalah utama di layanan kesehatan bukan kekurangan informasi, melainkan gesekan saat mengubah data jadi tindakan di ekosistem yang sangat diatur.

## 🗣️ Pendapat saya

Yang paling saya tunggu dari minggu ini sebenarnya bukan Pixel Tag. Itu produk yang sudah jelas bentuknya sejak Agustus, tinggal tunggu tanggal jual. Yang menarik justru Harbor, karena itu pertama kalinya Apple terlihat menyiapkan jalan pintas untuk orang yang ngga mau datanya lewat cloud.

Tapi saya ngga yakin Apple akan membuka Harbor lebar-lebar. Pola mereka selama ini: fitur yang menyentuh hardware mahal biasanya dijual sebagai alasan untuk membeli hardware mahal. Kalau Harbor akhirnya cuma jalan mulus di Mac dengan memori 128 GB ke atas, maka yang berubah bukan aksesibilitas AI lokal, melainkan daftar belanja.

Soal `/swarm`, saya lebih hati-hati lagi. Gagasan banyak agen paralel dengan verifier adversarial itu masuk akal secara teknis, dan pengakuan Google sendiri bahwa kuota terbakar lebih cepat justru tanda mereka jujur. Tapi biaya token yang naik berkali-kali lipat sementara hasilnya belum tentu lebih baik dari satu agen yang dipandu rapi itu pertukaran yang belum terbukti untuk pekerjaan sehari-hari.

Yang saya suka dari plugin keamanan Hermes adalah pendekatannya yang menolak percaya pada pola kode mencurigakan. Membuang temuan yang ngga bisa dieksploitasi itu pekerjaan yang membosankan dan justru paling menentukan apakah sebuah alat keamanan dipakai lagi atau ditinggalkan setelah dua minggu.

## 💬 Pertanyaan buat kalian

Kalau harga Pixel Tag dan AirTag hampir sama, kalian pilih yang mana: ekosistem yang sudah terbukti, atau yang bentuknya lebih ramping dan bisa dipakai di Android apa saja? Dan soal AI lokal, kalian rela beli mesin mahal demi data yang ngga keluar rumah, atau tetap pilih cloud dan terima risikonya?

## 🔗 Sumber

- [Pixel Tag, Google's $30 Android-ready answer to Apple's AirTag, is now available — TechCrunch](https://techcrunch.com/2026/11/10/pixel-tag-googles-30-android-ready-answer-to-apples-airtag-is-now-available/)
- [Android 17 QPR2 November update rolling out with 33 Pixel fixes — 9to5Google](https://9to5google.com/2026/11/10/android-17-qpr2-november-pixel-update/)
- [Harbor is Apple's in-development private local AI server — AppleInsider](https://appleinsider.com/articles/26/11/10/apples-harbor-app-will-make-running-local-ai-across-multiple-macs-trivial)
- [Gemini 4 Carbon and /swarm — Google Antigravity Blog](https://antigravity.google/blog/gemini-4-carbon-in-google-antigravity/)
- [Nous Research Adds Official Security Plugin to Hermes Agent — Tekedia](https://www.tekedia.com/nous-research-adds-official-security-plugin-to-hermes-agent-expanding-ai-powered-code-protection/)
- [Google turns Gemini towards medical paperwork — Engadget](https://www.engadget.com/2312279/google-turns-gemini-towards-medical-paperwork/)
