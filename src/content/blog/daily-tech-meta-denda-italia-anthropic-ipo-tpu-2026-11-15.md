---
title: 'Meta didenda 887 juta dolar di Italia, dan Anthropic bersiap IPO di tengah gejolak Nvidia'
description: 'Otoritas privasi Italia menghukum Meta karena fitur galeri di Facebook, sementara Anthropic menuju IPO dengan Nvidia sebagai investor besar. Google dan Apple juga punya cerita infrastruktur AI sendiri.'
pubDate: 2026-11-15T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- Otoritas perlindungan data Italia mendenda Meta 805 juta euro, sekitar 887 juta dolar, karena fitur Facebook yang membaca foto dan video galeri pengguna Android tanpa persetujuan spesifik.
- Meta diperintahkan mematikan fitur itu dan meminta persetujuan terpisah dalam 60 hari. Kurangnya kooperasi disebut ikut memperberat sanksi.
- Anthropic bersiap IPO sekitar sepekan lagi, dengan Nvidia sebagai salah satu investor terbesar lewat pembelian saham sekitar 10 miliar dolar.
- Google Cloud menambah dua sistem TPU generasi kedelapan: TPU 8tx untuk inferensi rahasia dan TPU 8i Max untuk bandwidth memori.
- Claris, anak perusahaan Apple, menguji Harbor, aplikasi yang mengubah Mac jadi server AI privat tanpa menyentuh Terminal.
- Proyek open source Stela berhasil membawa macOS 27 boot di PC berbasis AMD Ryzen dan NVIDIA RTX.

## 🇮🇹 805 juta euro, dan fitur galeri yang jadi masalah

Otoritas perlindungan data Italia menjatuhkan denda 805 juta euro, setara sekitar 887 juta dolar, kepada Meta pada Sabtu, 14 November 2026. Penyebabnya fitur bernama "Get suggestions from gallery when browsing Facebook", yang membaca foto dan video dari galeri pengguna Android untuk dijadikan saran konten di Facebook.

Menurut otoritas tersebut, fitur itu melanggar arahan privasi Eropa yang diadopsi ke dalam hukum Italia. Arahan itu melindungi ponsel sebagai bagian dari ruang pribadi seseorang dan mewajibkan persetujuan yang bebas dan berbasis informasi untuk akses semacam itu. Otoritas menilai persetujuan yang ada tidak spesifik dan pengungkapannya tidak memadai.

Hukumannya bukan cuma uang. Meta diperintahkan mematikan fitur tersebut dan mendapatkan persetujuan terpisah dalam 60 hari. Otoritas juga menyebut kurangnya kooperasi Meta selama penyelidikan menjadi salah satu faktor yang memperberat penalti. Italia punya sekitar 20 juta pengguna Android, dan Meta belum memberi komentar saat berita ini terbit.

Yang menarik, ini bukan kasus tentang data yang dicuri peretas. Ini tentang fitur yang mungkin dianggap sepele oleh tim produk: menampilkan saran dari galeri. Tapi justru di situ letak persoalannya. Galeri ponsel adalah tempat paling pribadi di sebuah perangkat, dan izin sekali klik tidak otomatis berarti pengguna paham apa yang dibaca.

Tapi… ada tapinya. Denda sebesar ini biasanya berakhir di pengadilan banding, dan angka akhirnya sering berubah. Jangan buru-buru menghitung 887 juta dolar sebagai uang yang benar-benar berpindah.

## 💰 Anthropic, IPO, dan Nvidia yang sedang goyah

Anthropic disebut akan mencatatkan sahamnya sekitar sepekan lagi, dan momennya tidak nyaman. Menurut Axios, Nvidia baru saja setuju membeli sekitar 10 miliar dolar saham Anthropic lewat private placement senilai 26 miliar dolar yang berjalan bersamaan dengan IPO. Angka itu menyamakan Nvidia dengan Google sebagai investor terbesar di transaksi tersebut, dan itu belum termasuk komitmen pendanaan 10 miliar dolar yang dibuat Nvidia akhir tahun lalu.

Anthropic juga sudah berkomitmen pada kesepakatan komputasi awan bernilai ratusan miliar dolar untuk GPU Nvidia, termasuk dengan SpaceX, Microsoft, Nscale, dan Lambda. Artinya hubungan kedua perusahaan bukan sekadar investor dan startup, tapi juga pemasok dan pembeli dalam skala yang sulit dibayangkan.

Masalahnya, Nvidia sendiri sedang tidak stabil. Jensen Huang sudah tidak memimpin perusahaan, dan Colette Kress menjabat CEO sementara. Laporan Wall Street Journal yang dikutip Axios menyebut Kress sempat khawatir Huang terlalu jauh mengambil risiko dalam sejumlah kesepakatan. Di sisi lain, IPO Anthropic disebut kelebihan permintaan, meski harga akhirnya belum diketahui.

Ada satu detail yang mudah terlewat: Huang dikenal sebagai pendukung vokal AI open source. Kepergiannya justru bisa sedikit menguntungkan pembuat model tertutup seperti Anthropic, karena lawan naratif mereka melemah di level pimpinan industri.

Tapi… ada tapinya. Tidak ada indikasi Nvidia akan membatalkan komitmennya, dan IPO yang kelebihan permintaan bukan jaminan harga bagus. Investor Anthropic tetap harus memperhitungkan bahwa mega-deal dengan Nvidia ke depan sekarang kabur, bukan pasti.

## 🧱 TPU 8tx dan 8i Max, dua masalah berbeda

Google Cloud menambah dua sistem ke lini TPU generasi kedelapan. Yang pertama, TPU 8tx, adalah TPU pertama Google dengan confidential computing, dikembangkan bersama AMD. Sistem ini memakai silikon TPU 8t untuk inferensi yang diamankan, dipasangkan dengan host AMD EPYC generasi kelima dan jaringan Boardfly milik Google.

Yang kedua, TPU 8i Max, menggabungkan dua chip TPU 8i dalam satu paket. Hasilnya bandwidth dan SRAM dua kali lipat, sementara kapasitas HBM naik sekitar sepertiga. Klaim latensi dua kali lebih baik pada 8tx diukur terhadap TPU 8t, sedangkan keunggulan 8i Max diukur terhadap TPU 8i.

Keduanya tidak memakai desain akselerator baru. Google mengubah paket chip, prosesor host, jaringan, dan lapisan keamanan tanpa merancang chip dari nol. Sebelumnya, tahun ini, Google membelah generasi kedelapan jadi dua chip: satu untuk pelatihan skala besar, satu untuk inferensi latensi rendah. Dibanding generasi sebelumnya, Google mengklaim performa pelatihan hingga 2,7 kali dan harga per performa inferensi 80 persen lebih baik.

Mark Lohmeyer, wakil presiden dan general manager Google Cloud, mengatakan kepada Network World bahwa menawarkan dua chip dan dua sistem, bukan satu, adalah hal pertama bagi perusahaan. Pilihan sekarang jadi soal batasan: satu sistem menjawab siapa yang boleh melihat data dan bobot model saat diproses, yang lain menjawab seberapa cepat memori bisa memberi makan chip ketika agen menyeret konteks raksasa.

Tapi… ada tapinya. Angka 2,7 kali dan 80 persen itu klaim vendor, dan tidak satu pun dari keduanya menjawab pertanyaan yang paling penting bagi tim infrastruktur: sistem mana yang menyelesaikan pekerjaan tertentu dengan biaya paling rendah.

## 🖥️ Harbor, dan Mac yang jadi server AI pribadi

Claris, anak perusahaan Apple yang membesarkan FileMaker, sedang menguji aplikasi bernama Harbor. Fungsinya sederhana untuk dijelaskan dan rumit untuk dibangun: mengubah Mac berprosesor Apple silicon menjadi server inferensi AI privat.

Daftar App Store-nya sempat muncul pada 10 November 2026 lalu hilang pada malam harinya. Dari tangkapan layar yang beredar, Harbor bisa mengunduh model open weight seperti gpt-oss-20b milik OpenAI dari Hugging Face, dengan pengaturan dalam hitungan menit dan tanpa menyentuh baris perintah. Tidak ada inferensi di cloud dan tidak ada tagihan per token.

Bagian yang paling menarik adalah pengelompokan. Sambungkan dua Mac atau lebih yang kompatibel Thunderbolt 5, dan Harbor akan mendeteksinya lalu menggabungkan memori terpadu mereka. Apple sendiri menambahkan RDMA lewat Thunderbolt 5 di macOS Tahoe 26.2, dan mekanisme itu persis yang dibutuhkan untuk mempercepat penautan semacam ini.

Sampai sekarang belum ada harga, tanggal rilis, atau kepastian apakah aplikasi ini akan gratis. Claris hanya membuka formulir early access. Sebagai pembanding, LM Studio sudah memberi antarmuka sederhana di satu Mac, sementara Exo menangani pengelompokan tapi menuntut kerja di Terminal.

Tapi… ada tapinya. Menghilangkan Terminal dari alur setup memang menyenangkan, tapi server AI di rumah tetap menuntut listrik, panas, dan perawatan. Aplikasi yang mudah dipasang tidak otomatis membuat perangkat kerasnya murah.

## 🍎 Stela, dan macOS 27 yang jalan di PC x86

Di sisi lain spektrum, proyek open source Stela melakukan hal yang terdengar mustahil: menjalankan macOS modern di komputer x86 biasa. Stela berjalan sebagai aplikasi UEFI mandiri yang menyiapkan perangkat keras sebelum kernel sistem operasi dimuat, lalu meniru perilaku mesin Apple Silicon. Versi 0.1.0 saat ini memodelkan Mac mini dengan chip M2.

Intinya adalah penerjemah kode. Stela memakai pipeline kompilasi ahead-of-time dan just-in-time untuk mengubah kode arm64e menjadi instruksi x86-64, mencakup lebih dari 3.000 encoding instruksi AArch64. Lapisan ini dirancang jalan di prosesor apa pun yang mendukung set instruksi x86-64-v2, termasuk AMD dan Intel sejak sekitar 2011.

Grafis ditangani driver Metal open source untuk NVIDIA GeForce GTX 16 series, RTX 20 series, dan yang lebih baru, dibangun di atas Nouveau. Driver itu menerjemahkan shader Apple Intermediate Representation ke Mesa NIR. Tangkapan layar yang beredar menunjukkan macOS 27 berjalan di Ryzen 7 9800X3D dengan RTX 5080.

Tapi… ada tapinya. Pengembangnya sendiri menyebut performa masih lambat, dan ini tahap proof of concept. Antarmuka desktop, utilitas inti, dan Homebrew memang bisa dijalankan, tapi jangan bayangkan ini pengganti Mac.

## 🗣️ Pendapat saya

Dua berita pertama hari ini sebenarnya bercerita tentang hal yang sama: kendali. Italia menghukum Meta karena mengambil sesuatu dari ponsel orang tanpa pemahaman yang jelas, sementara Anthropic dan Nvidia saling mengikat dalam transaksi yang nilainya lebih besar dari anggaran banyak negara. Satu kasus tentang batas privasi, satu kasus tentang batas konsentrasi kekuatan.

Yang membuat saya geli, fitur yang dipermasalahkan di Italia itu jenis fitur yang biasanya lolos karena terasa membantu. Saran dari galeri, kenapa tidak? Tapi di situlah masalahnya: keramahan sering dipakai sebagai alasan untuk melebarkan akses, dan pengguna baru sadar setelah datanya sudah dibaca.

Untuk TPU dan Harbor, saya lebih tertarik pada arahnya. Google mengakui bahwa satu chip untuk semua beban kerja sudah tidak cukup, dan Apple perlahan membangun cerita bahwa AI pribadi seharusnya jalan di perangkat sendiri. Dua-duanya masuk akal, dua-duanya juga belum terbukti murah.

## 💬 Pertanyaan buat kalian

Kalau harus memilih, kalian lebih percaya AI yang jalan di Mac sendiri meski terbatas, atau model cloud yang jauh lebih pintar tapi datanya keluar dari rumah? Dan soal denda Meta, menurut kalian 887 juta dolar itu angka yang cukup untuk membuat perusahaan berubah, atau cuma biaya operasional?

## 🔗 Sumber

- [Los Angeles Times — Meta fined 887 million in Italy over Android gallery photos and videos on Facebook](https://www.latimes.com/world-nation/story/2026-11-14/meta-fined-887-million-in-italy-over-android-facebook-images)
- [TechXplore — Meta fined 887 million in Italy over Android gallery photos and videos on Facebook](https://techxplore.com/news/2026-11-meta-fined-million-italy-android.html)
- [DW — Italy slaps Meta with 805mn fine over access to Android photos](https://www.dw.com/en/italy-slaps-meta-with-805mn-fine-over-access-to-android-photos/a-79949032)
- [Axios — Anthropic to IPO amid Nvidia fiasco](https://www.axios.com/2026/11/13/anthropic-ipo-nvidia-jensen-huang)
- [MarketScale — Google TPU 8tx and 8i Max reuse chips for memory, security](https://www.marketscale.com/industries/software-and-technology/googles-new-tpus-tackle-ai-memory-and-data-protection-using-chips-it-already-ships)
- [Digital Trends via Yahoo Tech — Apple wants to turn your Mac into a private AI server](https://tech.yahoo.com/ai/apple-intelligence/articles/apple-wants-turn-mac-private-115919903.html)
- [JamOnline — Stela Apple Silicon Layer Boots Modern macOS on x86 PCs](https://jamonline.ph/tech-news/stela-apple-silicon-layer-macos-x86/)
