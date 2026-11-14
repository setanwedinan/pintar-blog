---
title: 'Gemini sekarang bisa baca rekening bank, dan kunci rumah di Google Wallet akhirnya jalan'
description: 'Google mengizinkan Gemini tersambung ke rekening bank lewat Google Wallet untuk pertanyaan keuangan, sementara kunci rumah berbasis standar Aliro mulai tersedia di Wallet. Di sisi lain, 1,3 juta Android TV box ditemukan membawa backdoor pabrik.'
pubDate: 2026-11-14T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Gemini** sekarang bisa dihubungkan ke rekening bank lewat **Google Wallet**, untuk pertanyaan soal keuangan pribadi. Sifatnya opt-in dan hanya bisa membaca, bukan memindahkan uang.
- **Google Wallet** mulai mendukung kunci rumah digital berbasis standar **Aliro**, jadi Android bisa membuka pintu tanpa menempelkan ponsel.
- **Apple** merilis **tvOS 27.2.1** yang membawa Siri AI ke Apple TV 4K generasi kedua dan ketiga, tapi pembeli Apple TV 4K baru sempat kena error YouTube.
- **Google Threat Intelligence** menemukan **1,3 juta** Android TV box yang membawa backdoor terpasang dari pabrik.
- **Gmail** mulai memakai tampilan pengaturan Material 3 Expressive, dan **Pixel Weather** dapat tombol untuk melaporkan prakiraan yang meleset.

## 🏦 Gemini masuk ke rekening, dan batas yang dijaga

Google mengumumkan bahwa pengguna Gemini kini bisa menyambungkan chatbot itu ke rekening bank melalui integrasi dengan **Google Wallet**. Ini bukan platform belanja tempat chatbot membeli barang atas perintah, melainkan cara agar pengguna mendapat jawaban yang lebih sesuai soal keuangan pribadi.

Setelah tersambung, pengguna bisa bertanya soal isi rekening. Contoh yang diberikan Google: Gemini menemukan kenaikan harga pada langganan tertentu. Pengguna juga bisa meminta Gemini menyusun anggaran untuk periode tertentu, lengkap dengan grafik arus kas dan alokasi aset.

Yang penting dicatat, fitur ini hanya membaca. Gemini tidak bisa memindahkan, mengelola, atau menginvestasikan uang. Semuanya opt-in, dan bisa dinyalakan atau dimatikan lewat pengaturan. Google juga menyebut kerja sama dengan perusahaan fintech **Plaid** untuk memperdalam analisis, meski belum ada rincian soal bentuk kerja samanya.

Peluncurannya berjalan sekarang di web dan aplikasi mobile. Konteksnya, ini bagian dari yang Google sebut **Personal Intelligence**, yaitu menghubungkan informasi dari aplikasi yang sudah dipakai pengguna.

Tapi ada tapinya. Memberi chatbot akses ke data rekening berarti menambah satu permukaan lagi yang bisa salah. Google menekankan fitur ini read-only, dan itu memang mengurangi risiko terburuk. Namun kesalahan membaca transaksi tetap mungkin terjadi, dan keputusan finansial tetap ada di tangan pengguna, bukan di model.

## 🔑 Kunci rumah di Wallet, dan standar yang akhirnya dipakai

Di hari yang sama, Google mengumumkan kunci rumah digital di **Google Wallet** yang dibangun di atas **Aliro**, standar smart lock baru yang resmi dirilis awal 2026. Fitur ini sudah mulai digulirkan ke pengguna Public Preview di Google Home.

Cara kerjanya mirip Apple Home Keys. Ponsel Android bisa membuka pintu dengan menempel (NFC), dan pada kunci yang mendukung ultrawideband, pintu bisa terbuka saat pengguna mendekat. Kunci yang sudah kompatibel antara lain **Schlage Sense Pro** (394,98 dolar), **Aqara U400** (269,99 dolar), dan **Nuki Keypad 2 NFC** (179 dolar).

Satu kunci bisa dipakai di beberapa pintu, dan kunci digital tersinkron antar perangkat yang kompatibel. Anggota keluarga lain bisa menambahkan kunci mereka sendiri. Bedanya dengan Apple, tamu tidak mendapat kunci digital sementara, melainkan harus memakai kode.

Syaratnya cukup berlapis: ponsel Android dengan NFC dan Android 9 ke atas, plus hub Google yang mendukung Matter dengan Thread Border Router, misalnya Nest Hub Max, Nest Wifi Pro, atau Google TV Streamer. Artinya fitur ini belum benar-benar plug and play untuk rumah yang perangkatnya campur aduk.

## 📺 tvOS 27.2.1, Siri AI di Apple TV lama, dan YouTube yang sempat rusak

Apple merilis **tvOS 27.2.1** untuk Apple TV 4K dan **HomePod 27.2.1** untuk HomePod. Nomor versinya terlihat minor, tapi isinya cukup besar: Siri AI sekarang tersedia di Apple TV 4K generasi kedua dan ketiga, bukan hanya model generasi keempat yang baru meluncur.

Untuk HomePod, catatan rilis Apple hanya menyebut perbaikan bug. Ada dugaan Siri AI ikut masuk karena HomePod mini 2 dijanjikan mendapatkannya lewat pembaruan berikutnya, tapi bocoran dari akun pdfu menyebut Siri AI tidak termasuk di versi ini.

Sementara itu, pembeli Apple TV 4K baru langsung menghadapi masalah di hari pertama. Saat unit pertama tiba, aplikasi YouTube hanya menampilkan layar hitam dengan kode QR dan pesan bahwa YouTube belum tersedia di perangkat itu. Sebagian pengguna melihat aplikasi berjalan, tapi ada bilah merah transparan bertuliskan bahwa aplikasi YouTube hanya disetujui untuk pengujian perangkat, bukan untuk produksi.

Perbaikannya: pasang tvOS 27.2 lalu reboot. Untuk sebagian orang, termasuk editor The Verge Tom Warren, langkah itu belum cukup dan aplikasi YouTube harus di-uninstall lalu dipasang ulang. Ini bukan kerusakan hardware, tapi tetap merepotkan untuk perangkat yang harganya di atas rata-rata pesaingnya.

## 🦠 1,3 juta Android TV box, dan backdoor dari pabrik

Laporan **Google Threat Intelligence Group** pada 2 November menyimpulkan, dengan keyakinan tinggi, bahwa sebuah produsen perangkat sengaja menanam perangkat lunak tersembunyi di dalam hardware streaming. Operasi ini melibatkan **Videostrong Technology**, perusahaan berbasis di China yang memproduksi perangkat Android untuk berbagai merek.

Perangkat lunak jahat itu disebut **XCPE**. Google menilai Videostrong menjalankan backdoor tersebut secara sengaja untuk keuntungan finansial, lalu menjual akses ke perangkat yang sudah terinfeksi kepada afiliasi kriminal. Afiliasi itu memasang malware tambahan dan menjadikan perangkat korban bagian dari botnet.

Peneliti mengidentifikasi lebih dari **1,3 juta** perangkat terdampak di seluruh dunia. Sebagian besar berupa Android TV box, meski operasinya juga menyentuh perangkat terhubung lain. Salah satu contoh perangkat yang diperiksa adalah **MECOOL KM9PRO Max**.

Yang paling mengganggu: sebagian produk terdampak lolos proses sertifikasi keamanan Google. Jadi pengguna bisa melakukan semua hal dengan benar dan tetap mendapat hardware yang sudah dikompromikan. Kemampuan malware-nya bukan main-main, mulai dari menjadikan perangkat bagian dari jaringan proxy residensial, menghasilkan aktivitas iklan palsu, mengambil tangkapan layar, menyuntikkan ketikan, sampai mengumpulkan informasi akun.

## 📱 Gmail, Pixel Weather, dan Android 17 QPR3 Beta 4

Di sisi Android, **Gmail** mulai menggulirkan tampilan pengaturan baru dengan gaya **Material 3 Expressive**. Ikon berwarna, kartu membulat, kontrol lebih besar, dan bagian yang lebih rapi: notifikasi, kustomisasi inbox, preferensi email, sampai bantuan penulisan. Pengaturan Smart Compose, Smart Reply, dan Proofread kini berkumpul di satu tempat. Versi aplikasi yang memuatnya adalah 2026.11.02.1020540846, dan karena digulirkan dari sisi server, memasang versi terbaru belum tentu langsung memunculkannya.

**Pixel Weather** mendapat kartu **Report current weather** di versi 1.1.20261012. Pengguna bisa memilih suhu terasa lebih hangat, lebih dingin, atau sudah akurat, lalu memilih kondisi seperti berawan, cerah, hujan, hujan es, atau badai petir. Google menyebut umpan balik, lokasi perangkat, dan sebagian informasi diagnostik akan dikumpulkan, tapi tidak dikaitkan dengan akun Google. Perlu dicatat, fitur ini masih berasal dari kode yang sedang dikerjakan, jadi bisa saja belum dirilis stabil.

**Android 17 QPR3 Beta 4** juga sudah digulirkan ke Pixel, dari Pixel 6a sampai Pixel 11 Pro Fold, plus Android Emulator. Ini menyusul peluncuran stabil QPR2 yang datang lebih awal.

Terakhir, **Google Messages** menambah opsi **Enhanced protection**. Fitur ini memakai model Gemini di cloud untuk menilai apakah pengirim yang tidak ada di kontak sedang mencoba menipu, ditambah pemeriksaan tautan dengan Gemini Nano di perangkat. Google menyebut Scam Detection yang sudah berjalan menandai lebih dari 5 juta panggilan dan pesan terduga penipuan setiap bulan. Survei Google bersama YouGov di AS, Kanada, dan Australia menemukan 40 persen pengguna ponsel sangat atau amat sangat khawatir soal penipuan mobile.

## 🗣️ Pendapat saya

Yang paling saya perhatikan hari ini bukan fitur barunya, tapi pola yang muncul berulang: perusahaan menambahkan akses ke hal-hal yang paling sensitif, lalu menambahkan lapisan pengaman di belakangnya.

Gemini ke rekening bank adalah contoh paling jelas. Secara teknis masuk akal, dan read-only memang pilihan yang tepat. Tapi manfaat praktisnya sebagian besar bisa didapat dari membuka aplikasi bank dan melihat mutasi. Nilai tambahnya ada di kemampuan menyusun anggaran dan menemukan langganan yang naik harga, dan itu berguna. Pertanyaannya, apakah manfaat itu sebanding dengan menyerahkan riwayat transaksi ke model yang bisa salah membaca?

Untuk kunci rumah di Wallet, saya lebih optimistis. Standar terbuka seperti Aliro memang lambat, dan syarat hub Matter plus Thread Border Router bikin awal adopsinya berantakan. Tapi arahnya benar: satu standar, banyak merek, bukan ekosistem yang dikunci satu pabrikan.

Soal 1,3 juta Android TV box, ini pengingat yang mahal. Perangkat murah yang lolos sertifikasi pun bisa datang dengan backdoor. Kalau kamu punya streaming box dari merek yang tidak jelas asal-usulnya, ini saat yang tepat untuk memeriksa apakah perangkatmu masuk daftar yang dilaporkan.

Dan Apple TV 4K baru dengan error YouTube itu, menurut saya, cermin kecil dari masalah yang lebih besar: peluncuran hardware yang terburu-buru, dengan software yang belum siap di hari pertama.

## 💬 Pertanyaan buat kalian

Kalau Gemini bisa membaca rekening kalian dengan aman dan hanya read-only, kalian akan menyalakannya atau tetap memilih membuka aplikasi bank sendiri? Dan untuk kunci rumah digital, kalian lebih percaya pada kunci fisik, kode PIN, atau ponsel sebagai kunci utama?

## 🔗 Sumber

- [Google now lets people connect Gemini to their bank accounts — Engadget](https://www.engadget.com/2316384/google-now-lets-people-connect-gemini-to-their-bank-accounts/)
- [Google Catches Up to Apple, With Digital Wallet Keys for Your Physical Home Lock — CNET](https://www.cnet.com/home/security/google-aliro-digital-wallet-keys-home-locks/)
- [Apple releases tvOS 27.2.1 and HomePod 27.2.1, here is what is new — 9to5Mac](https://9to5mac.com/2026/11/13/apple-releases-tvos-27-2-1-and-homepod-27-2-1-heres-whats-new/)
- [The new Apple TV has a YouTube problem — The Verge](https://www.theverge.com/tech/1033076/apple-tv-4k-youtube-error)
- [Google uncovers Android TV box malware infecting 1.3 million devices — Fox News](https://www.foxnews.com/tech/android-tv-box-malware-found-devices)
- [Gmail Material 3 Expressive settings redesign starts rolling out — Android Authority](https://www.androidauthority.com/gmail-material-3-expressive-settings-redesign-rollout-3734964/)
- [Pixel Weather now lets you report inaccurate conditions — Android Authority](https://www.androidauthority.com/google-pixel-weather-inaccurate-forecast-user-report-apk-teardown-3734890/)
- [Google rolling out Android 17 QPR3 Beta 4 for Pixel — 9to5Google](https://9to5google.com/2026/11/12/android-17-qpr3-beta-3-pixel-2/)
- [Google Messages has a new scam protection feature — Android Police](https://www.androidpolice.com/google-messages-new-scam-protection-why-how-turned-it-on/)
