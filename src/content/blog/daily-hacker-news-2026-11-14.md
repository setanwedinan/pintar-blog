---
title: 'Langit Amerika berhenti lebih dari empat jam, dan ggml akhirnya capai versi 1.0'
description: 'Ground stop nasional membatalkan lebih dari 7.000 penerbangan, sementara proyek ggml merilis 1.0.0 dan seorang peneliti membedah 600 eksperimen world model JEPA.'
pubDate: 2026-11-14T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- FAA menghentikan seluruh penerbangan keberangkatan di Amerika Serikat selama lebih dari empat jam pada Jumat, dan lebih dari 7.000 penerbangan batal.
- ggml, mesin di balik banyak aplikasi AI lokal, akhirnya menyentuh versi 1.0.0 dengan pembersihan API dan banyak optimasi backend.
- Jonathan Blow melempar pertanyaan yang mengganggu: kalau AI sudah bisa menulis kode, kenapa perangkat lunak yang kita pakai ngga terasa jauh lebih baik?
- Satu peneliti menghabiskan 600 eksperimen untuk membuktikan bahwa bottleneck world model JEPA bukan di prediksinya.
- Dan sebuah proyek hardware menunjukkan bahwa ponsel bekas sering kali lebih murah dan lebih lengkap daripada Raspberry Pi.

## ✈️ Empat jam langit Amerika berhenti

Jumat sore waktu setempat, FAA mengeluarkan perintah ground stop nasional untuk semua penerbangan keberangkatan. Pengumuman itu keluar pukul 15.54 ET dengan alasan "extraordinary circumstances and for reasons of safety", tanpa penjelasan tambahan selain bahwa semua lalu lintas keberangkatan harus tetap di darat sampai pemberitahuan berikutnya.

Perintah itu baru dicabut pukul 20.15 ET, lebih dari empat jam kemudian. Dalam rentang itu, lebih dari 7.000 penerbangan dibatalkan dan bandara di seluruh negeri penuh penumpang yang terjebak. Flightradar24 mencatat 4.042 penerbangan menuju tujuan Amerika sudah berada di udara saat perintah keluar, dan Menteri Transportasi Sean Duffy menyebut ada lebih dari 3.500 pesawat di udara pada saat itu.

Penyebabnya bukan serangan siber. Duffy menjelaskan bahwa sistem ATC yang sudah tua mengalami router yang "got overloaded with data", lalu memicu ketidakstabilan pada radar dan komunikasi di center serta TRACON di seluruh negara. Ketidakstabilan itu terdeteksi pukul 15.36, delapan belas menit sebelum ground stop diumumkan. FAA menegaskan pihaknya tidak kehilangan seluruh kemampuan telekomunikasi atau radar, tetapi memilih menghentikan penerbangan sebagai langkah kehati-hatian.

Menteri Keamanan Dalam Negeri Markwayne Mullin menyatakan tidak ada indikasi serangan siber dan publik tidak pernah dalam bahaya. Delta, United, dan American Airlines mulai menerbangkan kembali pesawat pada Jumat malam. Duffy memperkirakan ruang udara Amerika akan pulih sebelum lonjakan penumpang Thanksgiving, meski kru dan pesawat harus dikembalikan ke posisi semula lebih dulu.

Yang menarik dari diskusi di Hacker News: cerita ini bukan soal satu kegagalan teknis, tapi soal betapa tipisnya margin sistem yang dipakai puluhan ribu penerbangan setiap hari. Router yang kelebihan data terdengar seperti masalah yang bisa dicegah dengan anggaran pemeliharaan, bukan dengan AI.

## 🧱 ggml 1.0.0, dan arti versi satu

Proyek ggml merilis versi 1.0.0 pada 13 November. Bagi yang ngga mengikuti dunia AI lokal, ggml adalah library tensor yang jadi fondasi llama.cpp dan banyak aplikasi model bahasa yang jalan di laptop tanpa GPU mahal.

Rilis ini bukan sekadar nomor. Tim memangkas API yang sudah deprecated dan menghapus operasi lama `DIAG_MASK_INF` serta `DIAG_MASK_ZERO`, lalu menaikkan protokol RPC ke versi 9 supaya peer yang tidak kompatibel ditolak lebih awal. Ada juga fungsi baru untuk mengatur pembulatan koreksi YaRN, dukungan FP8, dan backward pass untuk operasi `TRI`.

Pekerjaan performanya tersebar di banyak backend sekaligus: matmul kuantisasi untuk baris sedikit dan fusi MoE di CUDA serta Metal, jalur FlashAttention prefill di Vulkan, penjadwal MoE di sisi perangkat untuk SYCL, FlashAttention Adreno yang didekomposisi di OpenCL, kernel WebGPU baru, dan cakupan operasi Hexagon yang diperluas. Scheduler juga sekarang melewati upload input yang tidak dibaca.

Kenapa ini penting? Karena hampir semua cerita "model besar jalan di hardware kecil" bergantung pada lapisan ini. Setiap persen efisiensi di sini berarti satu model yang tadinya butuh server sekarang bisa jalan di mesin yang kamu punya. Angka 321 poin dan 50 komentar di HN menunjukkan komunitas menyadari bobot rilis ini.

## 🎮 Pertanyaan Blow yang belum terjawab

Di urutan atas Hacker News ada video Jonathan Blow berjudul "If AI solved coding, why is my software still the same?" dengan 366 poin dan 498 komentar. Isi ceramahnya ngga akan dikarang di sini, tapi pertanyaannya sendiri sudah cukup tajam.

Premis yang beredar selama dua tahun terakhir: model bahasa sekarang bisa menulis kode, jadi produksi perangkat lunak seharusnya meledak. Kenyataannya, aplikasi yang kita pakai sehari-hari masih lambat, masih kehilangan data, masih bikin kita menunggu spinner. Kalau alatnya benar-benar revolusioner, kenapa hasilnya ngga kelihatan di layar?

Ada beberapa jawaban yang masuk akal. Pertama, menulis kode bukan bagian tersulit dari rekayasa perangkat lunak; memahami masalah, memilih batasan, dan memelihara sistem bertahun-tahun itu yang berat. Kedua, kode yang dihasilkan lebih cepat juga harus dibaca, diuji, dan diperbaiki manusia, dan di situ biayanya pindah, bukan hilang. Ketiga, organisasi punya inersia: menambah kecepatan menulis kode ngga otomatis mempercepat keputusan produk.

496 komentar untuk satu video adalah sinyal bahwa banyak orang merasakan hal yang sama. Alatnya makin pintar, tapi rasa sakitnya belum pindah ke tempat lain.

## 🧠 600 eksperimen, dan temuan yang membalik asumsi

Haddy Alchaer menulis catatan panjang dari 600 eksperimen pada LeWM, world model berbasis JEPA yang salah satu penulisnya Yann LeCun. Benchmark-nya Push-T: robot mendorong balok berbentuk T ke posisi target yang ditunjukkan lewat gambar.

Asumsi awalnya sederhana: kalau prediksi model masih lemah, ganti predictor-nya dengan fisika simulator yang sempurna, lalu lihat seberapa besar lompatan performanya. Hasilnya justru sebaliknya. Pada 250 tugas long-horizon dengan target 75 langkah ke depan dan subgoal setiap 25 langkah, LeWM biasa berhasil 78 persen. Versi dengan fisika sempurna berhasil 77 persen.

Artinya, untuk jalur yang mirip dengan data latihannya, prediksi LeWM sudah setara fisika sempurna. Bottleneck-nya bukan di kualitas prediksi, tapi di cara model itu dipakai untuk merencanakan. Dari situ eksperimennya bergeser: bukan melatih model lebih besar, tapi mengubah cara planner memecah tugas.

Ini pengingat yang berguna di tengah obsesi menambah parameter. Kadang masalahnya bukan model yang kurang pintar, tapi cara kita memakainya. Batas yang masih nyata, menurut penulisnya, adalah model belum bisa memilih subgoal sendiri di wilayah yang tidak ada demonstrasinya.

## 📱 Ponsel bekas versus Raspberry Pi

Satu tulisan lain yang naik cepat di HN: kenapa membeli Raspberry Pi mahal kalau ada ponsel lama? Penulisnya sedang membangun proyek yang butuh kamera resolusi tinggi, GPS, penyimpanan, dan mikrokontroler untuk lampu.

Perbandingan harganya cukup brutal. Redmi 13C 5G dan Huawei Mate 30 5G bekas dijual sekitar 300 sampai 500 yuan, kira-kira 45 sampai 75 dolar AS, dan sudah membawa kamera 50MP atau 40MP plus telefoto, GPS, penyimpanan, baterai, layar sentuh, dan koneksi seluler. Rangkaian setara dengan Pi 4 4GB, kamera Arducam 64MP, GPS HAT, dan microSD sudah menembus 222 dolar, dan versi lengkap dengan layar sentuh, RTC, UPS, serta modem 4G bisa melewati 347 dolar.

Penulisnya sudah membuka bootloader dan root Redmi tersebut, menguji kameranya, dan membuatnya tidur serta bangun sesuai jadwal. Huawei lebih sulit di-root, tapi masih bisa dipakai untuk aplikasi kiosk. Pertanyaan yang belum terjawab bukan soal teknis, melainkan pasokan: mencari dua ponsel bagus itu mudah, mencari beberapa ratus unit dengan baterai sehat dan perilaku kamera yang konsisten jauh lebih sulit.

## 🗣️ Pendapat saya

Ground stop FAA itu pengingat yang ngga nyaman. Kita menghabiskan miliaran dolar untuk membangun model yang bisa menulis puisi, sementara router di sistem penerbangan Amerika kelebihan data dan mematikan langit selama empat jam. Bukan berarti AI salah prioritas, tapi kita jelas sedang mengabaikan infrastruktur yang sudah lama berjalan karena dianggap membosankan.

Untuk ggml 1.0.0, saya senang nomor versinya akhirnya naik. Bukan karena angka satu punya kekuatan magis, tapi karena itu sinyal bahwa API-nya dianggap cukup stabil untuk dijanjikan. Selama ini orang membangun aplikasi di atas fondasi yang bergerak setiap minggu.

Soal pertanyaan Blow, saya kira jawabannya membosankan: AI mempercepat bagian yang paling mudah diukur, dan bagian tersulit dari perangkat lunak justru yang paling sulit diukur. Itu sebabnya alatnya terasa ajaib di demo dan biasa saja di pekerjaan nyata.

Tapi ada tapinya untuk cerita ponsel bekas. Murah di harga satuan bukan berarti murah di skala. Baterai ponsel bekas menua, sistem operasinya berhenti dapat pembaruan, dan mengelola ratusan perangkat yang tidak seragam bisa menghabiskan semua penghematan. Untuk satu proyek hobi, idenya brilian. Untuk produksi, saya masih ragu.

## 💬 Pertanyaan buat kalian

Kalau kalian punya anggaran terbatas untuk proyek hardware, kalian akan pilih Raspberry Pi yang rapi dan terdokumentasi, atau ponsel bekas yang lebih murah tapi penuh kejutan? Dan untuk yang mengikuti dunia AI lokal: menurut kalian, versi 1.0 ggml ini benar-benar stabil, atau cuma label?

## 🔗 Sumber

- NBC News, "FAA lifts ground stop hours after stranding thousands of flights across the U.S." — https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247
- Hacker News, diskusi ground stop FAA — https://news.ycombinator.com/item?id=50489641
- GitHub, ggml v1.0.0 release — https://github.com/ggml-org/ggml/releases/tag/v1.0.0
- Hacker News, diskusi ggml v1.0.0 — https://news.ycombinator.com/item?id=50493062
- YouTube, Jonathan Blow, "If AI solved coding, why is my software still the same?" — https://www.youtube.com/watch?v=IRK8h67ol7Q
- Hacker News, diskusi video Jonathan Blow — https://news.ycombinator.com/item?id=50484658
- Haddy Alchaer, "After 600 experiments, here's what I discovered about JEPA world models" — https://haddyalchaer.com/jepa
- Hacker News, diskusi JEPA — https://news.ycombinator.com/item?id=50487185
- so.long.thanks.fish, "Why get an expensive Pi when I have an old phone?" — https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/
- Hacker News, diskusi ponsel bekas — https://news.ycombinator.com/item?id=50440709
