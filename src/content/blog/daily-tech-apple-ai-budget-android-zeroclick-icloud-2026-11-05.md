---
title: 'Apple memotong jatah AI karyawannya, dan 216 celah Android ditambal dalam satu bulan'
description: 'Apple membatasi belanja AI sebagian engineer jadi 200 dolar per hari dan menyiapkan pemotongan lagi, sementara buletin keamanan Android November memperbaiki 216 celah termasuk zero-click RCE yang tidak akan sampai ke 43,6 persen perangkat aktif.'
pubDate: 2026-11-05T00:00:00Z
tags: ['berita', 'Apple', 'Android', 'Google', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Apple** memotong anggaran pemakaian AI internal: sebagian engineer dibatasi **200 dolar per hari**, turun dari 300 dolar, dan ada rencana menurunkannya lagi ke 100 dolar. _(Bloomberg via MacRumors)_
- Buletin keamanan **Android November 2026** memperbaiki **216 celah**, salah satunya _zero-click remote code execution_ di komponen Framework dengan kode **CVE-2026-58868**. _(Cybernews, Android Security Bulletin)_
- **43,6 persen** perangkat Android aktif masih jalan di Android 13 atau lebih lama, jadi tidak akan menerima tambalan ini. _(Cybernews)_
- Penasihat hukum **Mahkamah Uni Eropa** mendukung penerbit dalam sengketa melawan **Gemini**, tapi menyatakan pelatihan model dengan materi berhak cipta tetap diizinkan. _(RTE)_
- Mulai **iOS 27.3**, item iCloud yang dibagikan lewat tautan publik akan diperiksa Apple untuk konten berbahaya, dan tautan itu tidak lagi terenkripsi end-to-end. _(The Verge)_

## 💸 Apple menghitung token karyawannya

Bloomberg melaporkan Apple sedang mengurangi anggaran pemakaian AI di kalangan karyawan sebagai bagian dari upaya menekan biaya. Bulan Oktober, sebagian engineer dibatasi **200 dolar per hari**, turun dari 300 dolar. Pemotongan berikutnya sudah disiapkan: jatah harian sebagian engineer bisa turun lagi ke **100 dolar**, dan beberapa tim disebut akan dibatasi **25 dolar** per hari.

Apple membiarkan karyawannya memakai Claude, ChatGPT, Gemini, dan model lain. Karena coding menghabiskan token paling banyak, engineer mendapat jatah terbesar. Tapi menurut sebagian karyawan yang bicara ke Bloomberg, hampir tidak ada yang benar-benar menghabiskan jatah 300 dolar, jadi penghematan yang didapat mungkin tidak sebesar yang terlihat di dokumen anggaran.

Yang menarik, Apple juga meminta sebagian tim memakai model yang lebih murah atau beralih ke AI on-device. Permintaan kenaikan anggaran masih bisa diajukan ke eksekutif. Apple juga mendatangkan konsultan produktivitas eksternal untuk beberapa divisi, dan kombinasi keduanya memicu kekhawatiran soal restrukturisasi.

John Ternus mengambil alih jabatan CEO pada 1 September 2026. Menurut laporan, ia ingin mengurangi lapisan hierarki dan beban organisasi supaya bisa menyelesaikan lebih banyak hal dengan orang yang lebih sedikit.

## 🛡️ 216 celah, dan separuh HP yang tidak akan pernah dapat tambalannya

Buletin keamanan Android November 2026 memperbaiki **216 kerentanan** dalam dua level patch. Yang paling parah ada di komponen Framework: sebuah _heap buffer overflow_ yang menyebabkan out-of-bounds write, dilacak sebagai **CVE-2026-58868**. Google menyebut celah ini bisa berujung pada eksekusi kode jarak jauh tanpa hak istimewa tambahan dan tanpa interaksi pengguna sama sekali.

Kode rentannya ada di `FrameDecoder.cpp`, bagian Android yang membuat gambar pratinjau seperti thumbnail video dan foto. Artinya celah ini menyentuh rutinitas yang berjalan terus-menerus, bukan menu yang harus dibuka dulu. Celah tersebut memengaruhi Android 14 sampai 17. Buletin tidak menyebut apakah versi lama yang sudah habis masa dukungan juga rentan, tapi komponennya sendiri berasal dari 2017, jadi kemungkinannya ada.

Masalahnya bukan tambalannya, tapi siapa yang menerimanya. Data distribusi Android menunjukkan **43,6 persen** perangkat aktif masih memakai Android 13 atau lebih lama. Dukungan keamanan untuk versi itu sudah berakhir, jadi tambalan November tidak akan pernah datang. Untuk perangkat yang lebih baru, tiap produsen harus membangun dan mengirim patch sendiri, dan HP murah yang sudah lewat janji update-nya bisa ikut tertinggal.

## ⚖️ Penasihat Mahkamah Uni Eropa: Gemini bisa melanggar hak penerbit, pelatihan model tidak

Advokat Jenderal **Maciej Szpunar** memberi pendapat di hadapan Mahkamah Uni Eropa dalam perkara yang dibawa operator situs Hungaria, **Like Company**, melawan chatbot Gemini milik Google. Intinya: ketika chatbot yang digerakkan model bahasa besar mengambil terbitan pers, memakainya untuk menyusun jawaban, lalu menyajikan jawaban itu ke pengguna, hak penerbit bisa dilanggar dalam kondisi tertentu.

Kondisi yang dimaksud Szpunar: kalau chatbot mengakses terbitan dengan menembus paywall atau penghalang teknis lain, atau kalau ia memakai ulang bentuk ekspresi terbitan itu secara mudah dikenali. Aturan hak cipta tidak melindungi fakta yang dilaporkan, hanya bentuk ekspresinya.

Tapi… ada tapinya, dan tapinya besar. Szpunar justru menyatakan pemakaian materi berhak cipta untuk melatih model **diizinkan secara bebas** di bawah pengecualian text and data mining. Google menyambut bagian ini dan menegaskan Gemini mempelajari pola bahasa untuk menghasilkan keluaran orisinal, dengan kontrol opt-out bagi pemegang hak.

Pendapat advokat jenderal tidak mengikat, meski mahkamah biasanya mengikuti mayoritasnya. Putusan diperkirakan keluar dalam beberapa bulan ke depan.

## ☁️ Tautan iCloud publik akan diperiksa, dan tidak lagi terenkripsi penuh

Apple menyatakan mulai versi **27.3** di iOS, iPadOS, macOS, dan visionOS, setiap item iCloud yang dibagikan dengan izin **Anyone with the Link** akan bisa diakses Apple untuk diperiksa konten berbahayanya. Dokumen dukungan Apple tidak mendefinisikan apa yang dimaksud konten berbahaya.

Konsekuensi teknisnya lebih penting daripada urusan definisi. Berbagi lewat tautan publik berarti item itu **tidak lagi terenkripsi end-to-end**. Apple menyatakan berhak memindahkan, menolak, mengubah, menghapus, atau menghilangkan konten berbahaya, memblokir akun, mencegah pembuatan akun baru, dan bila perlu melibatkan aparat hukum.

Langkah ini menyusul desakan demonstran agar Apple bertindak tegas terhadap materi pelecehan seksual anak yang tersimpan di iCloud. Beta developer 27.3 sudah dirilis, dan versi finalnya direncanakan Desember.

## 💻 Dua sinyal dari lini Mac

DigiTimes melaporkan pemasok komponen menerima proyeksi pengiriman **MacBook Neo** generasi kedua sebesar **16 juta unit** untuk 2027, dua kali lipat dari 8 juta unit di jalur 2026. Perbandingan itu tidak sepenuhnya adil: MacBook Neo baru diumumkan Maret, jadi angka 2026 mencakup sepuluh bulan, bukan setahun penuh. Generasi kedua diperkirakan memakai chip A19 dengan kemungkinan memori 12GB.

Di sisi lain, Mark Gurman menulis di buletin Power On bahwa Apple kemungkinan akan memusatkan jajaran MacBook Pro kelas atas pada model layar sentuh. Apple masih menjual M5 Pro dan M5 Max versi non-sentuh berdampingan dengan varian sentuh yang lebih mahal 400 dolar. Beban mengembangkan, memproduksi, dan memasarkan dua lini paralel itulah yang ia soroti. Gurman juga menyebut Apple akan merilis generasi berikutnya dari MacBook Pro layar sentuh pada 2027 dengan chip M7 Pro dan M7 Max.

## 🗣️ Pendapat saya

Yang paling saya pikirkan dari empat berita ini bukan soal fiturnya, tapi soal siapa yang menanggung risikonya.

Di Android, tambalan sudah tersedia hari ini dan tetap tidak berarti apa-apa buat hampir separuh perangkat aktif. Itu bukan kegagalan Google menulis patch. Itu konsekuensi dari rantai pasok yang memutus dukungan setelah dua atau tiga tahun, sementara HP-nya masih dipakai lima tahun. Selama modelnya begitu, angka 216 celah per bulan cuma jadi statistik.

Untuk Apple, pemotongan anggaran AI ini saya baca sebagai pengakuan tidak langsung bahwa belanja token sudah jadi pos biaya nyata. Tapi saya ngga yakin pemotongan ini soal efisiensi. Kalau hampir tidak ada yang menghabiskan 300 dolar, memotong plafon ke 100 dolar bukan penghematan besar, melainkan sinyal ke organisasi bahwa AI bukan lagi barang bebas. Efeknya ke budaya kerja bisa lebih besar daripada efeknya ke neraca.

Soal iCloud, saya justru ingin angka: berapa tautan publik yang diperiksa, berapa yang diblokir, dan bagaimana cara bandingnya. Tanpa itu, kebijakan ini benar secara niat dan kabur secara praktik. Dan kalimat bahwa tautan publik tidak lagi terenkripsi end-to-end itu, menurut saya, bagian yang paling perlu dibaca ulang oleh setiap orang yang pernah mengirim folder foto lewat iCloud.

## 💬 Pertanyaan buat kalian

HP Android yang kalian pakai sekarang masih dapat tambalan keamanan bulan ini, atau sudah lewat masa dukungnya? Dan kalau harus memilih, kalian lebih takut kehilangan enkripsi end-to-end atau lebih takut konten berbahaya dibiarkan beredar?

## 🔗 Sumber

- [Bloomberg via MacRumors — Apple is Putting Employees on an AI Budget](https://www.macrumors.com/2026/11/04/apple-reducing-employee-ai-spending/)
- [Reuters — Apple cuts employee AI budgets in cost-control push](https://www.reuters.com/business/retail-consumer/apple-cuts-employee-ai-budgets-cost-control-push-bloomberg-news-reports-2026-11-04/)
- [Cybernews — Android zero-click flaw fixed, but many phones may miss patch](https://cybernews.com/security/google-patches-critical-android-security-flaws)
- [Android Security Bulletin November 2026](https://source.android.com/docs/security/bulletin/2026/2026-11-01)
- [RTE — EU court adviser backs publishers in AI case vs Google](https://www.rte.ie/news/europe/2026/1103/1597874-eu-court-backs-publishers-google/)
- [The Verge — Apple will check shared iCloud links for harmful content](https://www.theverge.com/tech/1026604/apple-icloud-links-harmful-content-27-3)
- [Apple Support — dokumen dukungan iCloud dan konten berbahaya](https://support.apple.com/en-us/149168)
- [AppleInsider — MacBook Neo shipments to double for second-gen model](https://appleinsider.com/articles/26/11/04/apple-is-reportedly-doubling-orders-for-a-new-macbook-neo)
- [MacRumors — Apple May Phase Out Non-Touch High-End MacBook Pros](https://www.macrumors.com/2026/11/04/apple-may-phase-out-non-touch-macbook-pros/)
