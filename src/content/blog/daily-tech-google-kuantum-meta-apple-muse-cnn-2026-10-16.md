---
title: 'Google pecahkan kemacetan kuantum, Meta dan Apple kerja sama bawa Muse Spark ke Mac Studio'
description: 'Google memublikasikan terobosan magic state cultivation di chip Willow dengan galat turun sekitar 40 kali, Meta dan Apple berkolaborasi menjalankan model Muse Spark Open 816 miliar parameter di Mac Studio, CNN gandeng Google untuk konten berita di produk AI, plus Universal Cart dan perluasan peringatan gempa Android.'
pubDate: 2026-10-16T00:00:00Z
tags: ['berita', 'Tech', 'AI', 'Google', 'Apple', 'Android']
---

## 🔍 TL;DR

- **Google Quantum AI** membuktikan teknik **magic state cultivation** berjalan di prosesor **Willow**, menekan galat sekitar **40 kali** lebih rendah. Hasilnya diterbitkan di jurnal **Science** pada 15 Oktober 2026. _(Google Blog, Scientific American)_
- **Meta** meluncurkan **Muse Spark Open** — model open-weight **816 miliar parameter** (42 miliar aktif) yang bisa dijalankan lokal di **dua M5 Ultra Mac Studio** berbekal kerangka **MLX** Apple. _(The Verge, AppleInsider)_
- **CNN** dan **Google** menandatangani kemitraan multi-tahun agar artikel CNN ikut memberi konteks pada jawaban AI Google, dengan kompensasi untuk CNN. _(CNN Press Room, Variety)_
- **Universal Cart** mulai diluncurkan di Amerika Serikat lewat Google Search dan aplikasi Gemini — keranjang belanja lintas toko yang memantau harga dan promo. _(ZDNet, 9to5Google)_
- **Peringatan gempa Android** meluas dari 98 menjadi **lebih dari 200 wilayah**, dengan tampilan **Be Ready** yang kini menampilkan peta radius guncangan dan estimasi magnitudo. _(9to5Google)_
- **Sony** membatalkan update **Android 17** untuk **Xperia 10 VI** meski sudah menjanjikannya, sementara **Apple** mengirim undangan acara media **28 Oktober** untuk MacBook layar sentuh, iPad mini baru, dan Mac berchip **M6**. _(9to5Google, MacRumors)_

## 🔬 Google Pecahkan Kemacetan Kuantum di Chip Willow

Google Quantum AI mengumumkan bahwa mereka berhasil menjalankan **magic state cultivation** di prosesor **Willow**, dan menekan galat sekitar **40 kali** lebih rendah dibanding tanpa teknik itu. Makalahnya terbit di **Science** pada 15 Oktober 2026. _(Google Blog, Scientific American)_

Kenapa ini penting? Untuk menjalankan program kuantum yang benar-benar berguna, kamu butuh satu operasi tambahan yang disebut **non-Clifford gate** — paling sering gerbang **T**. Gerbang ini tidak bisa ditiru komputer biasa, dan cara membuatnya adalah lewat **magic state**, kondisi kuantum yang disiapkan dengan sangat presisi. _(Scientific American)_

Masalahnya, resep standar untuk membuat magic state namanya **distillation**, dan ia sangat boros. Emma Rosenfeld, peneliti Google Quantum AI sekaligus penulis utama studi ini, menyebutkan bahwa **hingga 95 persen** kapasitas sebuah komputer kuantum bisa habis hanya untuk memproduksi magic state berfidelitas tinggi. _(Scientific American)_

Cultivation membalik pendekatan itu. Alih-alih menyaring banyak state jelek, tim Google menyuntikkan satu state kasar ke area kecil chip, lalu menjalankan rangkaian pengukuran terkoordinasi untuk memeriksa galat. State yang lolos diuji dengan pertanyaan yang berbeda dari biasanya: bukan “kamu 0 atau 1?”, melainkan “kamu magic state yang benar, ya atau tidak?”. _(Scientific American)_

Eksperimen itu memakai **54 qubit fisik** dari total **105 qubit** yang dimiliki Willow. Tanpa cultivation, sekitar **4 dari 1.000** percobaan menghasilkan state rusak. _(Scientific American)_

Tapi… ada tapinya. Ini masih jauh dari komputer kuantum yang bisa dipakai memecahkan masalah nyata. Cultivation menyelesaikan satu kemacetan saja, dan seluruh mesin masih butuh koreksi galat, jumlah qubit yang jauh lebih besar, serta waktu yang tidak singkat. Kenneth Brown dari Duke Quantum Center menilai eksperimen Google menunjukkan cultivation bekerja dalam praktik — itu saja, bukan bahwa kuantum praktis sudah di depan mata. _(Scientific American)_

## 🤝 Meta dan Apple Berbaikan Demi Muse Spark Open di Mac Studio

Ini kombinasi yang tidak biasa. **Meta** mengumumkan model **Muse Spark Open** dan menyebutnya sebagai “model open-weight Amerika paling mumpuni sampai sekarang”. Yang bikin berbeda: Meta mengklaim Muse Spark Open adalah model **pertama di kelasnya** yang bisa dijalankan di desktop memakai **dua Apple M5 Ultra Mac Studio** dengan kerangka **MLX** terbaru. _(The Verge)_

Angkanya besar. Model ini punya **816 miliar parameter total**, dengan **42 miliar** di antaranya aktif saat pemrosesan. Bobot terkompresinya saja menempati sekitar **493 GB** sebelum ditambah memori kerja saat proses berjalan, jadi satu mesin tidak cukup — kamu butuh **dua** Mac Studio berkonfigurasi **512 GB unified memory** masing-masing, atau **empat** mesin berkonfigurasi **256 GB**. _(AppleInsider)_

Apple sendiri yang mengurus sisi eksekusinya. MLX diperbarui untuk mendukung Muse Spark Open, termasuk perbaikan komunikasi antar-Mac dan dukungan **GPU Neural Accelerators** milik M5 Ultra. Komunikasinya lewat **Thunderbolt 5** dengan **remote direct memory access (RDMA)**. Dalam pengujian Apple, empat M5 Ultra Mac Studio menghasilkan lebih dari **36 token per detik** pada konteks 8.192 token. _(AppleInsider)_

Yang bikin ramai justru nada kedua perusahaan. CEO Meta **Mark Zuckerberg** menulis di X bahwa model itu berjalan bagus di Mac Studio baru berkat kerja sama dengan **John Ternus** dan Apple. Ternus — kini CEO Apple — membalas dengan ucapan selamat dan memuji efisiensi menjalankan model sekelas itu langsung dari meja kerja. Chief AI Officer Meta, **Alexandr Wang**, menyebut ke publikasi bahwa ia senang “mommy dan daddy” akhirnya akur lagi. _(The Verge)_

Tapi… ada tapinya, dan ini tapinya besar: harganya. M5 Ultra Mac Studio mulai dari **5.499 dolar**, dan konfigurasi memori yang dibutuhkan untuk Muse Spark Open membuat pengaturan multi-mesin masuk ke puluhan ribu dolar. Artinya model ini masuk akal untuk tim pengembangan dan riset, bukan untuk pemakaian sesekali. _(AppleInsider)_

## 📰 CNN Gandeng Google, Konten Berita Masuk Jawaban AI

**CNN** mengumumkan kemitraan strategis multi-tahun dengan **Google**. Lewat perjanjian ini CNN memberikan hak konten yang diperluas, supaya Google bisa menguji fitur eksperimental yang memakai AI generatif untuk mendorong keterlibatan audiens terhadap jurnalisme CNN. _(CNN Press Room)_

Sam Felix, Senior Vice President Strategic Partnerships and Business Development CNN, menyebut perjanjian ini membuka jalur baru bagi audiens untuk mengakses jurnalisme CNN sekaligus memastikan perusahaan **dikompensasi** atas penggunaan kekayaan intelektual mereka di produk AI. Dalam surel internal ke staf CNN yang dibaca Variety, Felix menjelaskan bahwa artikel CNN akan ikut memberi konteks pada jawaban AI Google untuk pertanyaan seputar berita, dengan kredit ke masing-masing artikel. _(Variety)_

Konteksnya penting: CNN menggugat **Perplexity AI** beberapa bulan sebelumnya setelah kedua pihak gagal mencapai kesepakatan lisensi. Jadi langkah ini bukan sekadar soal teknologi, tapi juga soal model bisnis penerbit. Perjanjian dengan CNN masuk dalam program pilot Google yang sebelumnya sudah melibatkan **Der Spiegel, El País, The Guardian, The Times of India, Washington Examiner, dan Washington Post**. _(Variety)_

Tapi… ada tapinya. Google juga baru mengumumkan bahwa **400 publikasi** kini ikut dalam program pilot News AI mereka, dan pada saat yang sama banyak penerbit mengeluh bahwa ringkasan AI di mesin pencari memakan trafik situs mereka. Kesepakatan seperti ini menguntungkan yang bisa bernegosiasi — dan tidak semua penerbit punya posisi tawar itu. _(Variety, Google Blog)_

## 🛒 Universal Cart Mulai Diluncurkan di Amerika Serikat

**Google** mulai meluncurkan **Universal Cart** di Amerika Serikat, tersedia lewat Google Search dan aplikasi Gemini. Ini keranjang belanja pintar yang sudah dipratinjau pada Mei lalu: satu tempat untuk menyimpan produk dari berbagai toko, memantau penurunan harga dan restok, serta menarik kode promo yang relevan. _(ZDNet)_

Keranjang ini dibangun di atas **Shopping Graph** Google yang memuat lebih dari **60 miliar** daftar produk yang terus diperbarui. Karena itu Universal Cart bisa mengirim notifikasi saat harga turun tanpa kamu memeriksa apa pun. Fitur lain: Universal Cart memakai **Google Wallet**, jadi ia bisa membantu memilih metode pembayaran mana yang memberi keuntungan paling besar untuk transaksi tertentu. _(ZDNet)_

Google juga merilis **When to Buy Guide**, laporan yang menganalisis pola promosi historis, tren pencarian, dan data diskon di merchant Amerika. Isinya antara lain kapan waktu terbaik membeli parfum, kenapa disarankan berpikir ulang sebelum membeli tas pada Black Friday, dan kenapa barang perjalanan seperti koper sebaiknya dibeli lebih awal. _(ZDNet)_

Tapi… ada tapinya. Universal Cart baru tersedia di Amerika Serikat, dan belum ada keterangan kapan masuk ke Indonesia. Kalau kamu berharap belanja lintas toko dalam satu keranjang di sini, jawabannya belum bisa dipastikan. _(ZDNet)_

## 🌎 Peringatan Gempa Android Meluas, Sony Batalkan Android 17

Sistem **peringatan gempa Android** kini aktif di **lebih dari 200 wilayah** di seluruh dunia, naik dari **98** sebelumnya. Google menyebut **Panama** dan **Guatemala** sebagai contoh wilayah baru. Sistem ini diluncurkan pada 2021 dan memakai sensor di ponsel Android untuk mendeteksi tanda-tanda awal gempa, memberi peringatan beberapa detik sebelum guncangan merusak. Google mengklaim sistem ini sudah mengirim lebih dari **satu miliar** peringatan. _(9to5Google)_

Selain perluasan wilayah, tampilan peringatannya juga diperbarui. Tahap **Be Ready** kini memberi informasi lebih banyak: peta radius area yang terdeteksi bergetar, estimasi magnitudo, saran tindakan, dan tombol untuk membaca informasi lanjutan saat datanya masuk. _(9to5Google)_

Kabar kurang menyenangkan datang dari **Sony**. Perusahaan itu membatalkan update **Android 17** untuk **Xperia 10 VI**, padahal saat peluncuran 2024 mereka menjanjikan **tiga upgrade OS Android**. Alasan resminya: keterbatasan konfigurasi penyimpanan perangkat membuatnya tidak mendukung pengalaman Android 17 yang dianggap memadai. Sony meminta maaf dan memastikan komitmen update keamanan empat tahun tetap berlaku, serta menegaskan masalah ini spesifik pada Xperia 10 VI dan tidak memengaruhi model lain. _(9to5Google)_

## 🍎 Apple Kirim Undangan untuk Acara 28 Oktober

**Apple** mulai mengirim undangan ke sejumlah media untuk acara peluncuran produk di **Los Angeles pada Rabu, 28 Oktober 2026**. Menurut laporan **Mark Gurman** dari Bloomberg, acara itu berupa “all-day product launch experience” untuk **MacBook layar sentuh**, **iPad mini baru**, dan **Mac berchip M6**. _(MacRumors)_

MacBook layar sentuh yang dimaksud diperkirakan berupa model **MacBook Pro 14 inci dan 16 inci** dengan desain ulang, layar **OLED**, **Dynamic Island**, dan bodi yang jauh lebih ringan. Selain itu Apple diperkirakan memperkenalkan versi **M6** untuk MacBook Pro 14 inci dan **iMac**. iPad mini baru disebut mendapat layar **OLED**, kamera depan yang diposisikan untuk panggilan video mode lanskap, dan sistem speaker yang didesain ulang. _(MacRumors)_

## 🗣️ Pendapat saya

Dari semua berita hari ini, yang paling saya pikirkan justru bukan yang paling ramai. Kerja sama Meta dan Apple itu menarik secara politis, tapi saya ngga bisa berhenti memikirkan angka **493 GB** bobot model itu. Kita bicara soal AI yang “cukup dijalankan lokal”, tapi syaratnya puluhan ribu dolar perangkat. Itu bukan demokratisasi AI — itu AI untuk studio dan lab yang sudah punya anggaran.

Yang menurut saya paling penting sebenarnya berita kuantum. Saya ngga paham penuh detail fisika di balik magic state, dan saya ngga akan pura-pura paham. Tapi saya paham artinya kalau **95 persen** kapasitas sebuah mesin habis cuma untuk menyiapkan bahan bakar operasinya. Itu definisi kemacetan. Memangkas galat 40 kali di satu titik seperti itu adalah jenis kemajuan yang ngga kelihatan di berita viral, tapi menentukan apakah kuantum praktis datang dalam lima tahun atau lima puluh tahun.

Soal CNN dan Google, saya melihatnya dengan campuran rasa. Bagus ada penerbit yang dibayar. Tapi saya juga ngga bisa mengabaikan bahwa pada saat yang sama Google mengumumkan 400 publikasi lain masuk program yang sama — dan sebagian dari mereka mengeluh trafiknya tergerus ringkasan AI. Kesepakatan yang bagus untuk CNN belum tentu kesepakatan yang bagus untuk penerbit kecil.

Dan Sony membatalkan update yang sudah dijanjikan? Itu pengingat bahwa janji update OS di Android masih bisa berubah setelah perangkatnya kamu beli.

Kalau kalian harus memilih satu saja untuk diikuti serius tahun depan — kuantum, AI lokal, atau pergeseran bisnis berita — kalian pilih yang mana?

## 🔗 Sumber

- [Bringing the magic: Google breaks open a bottleneck in quantum computing — Google Blog](https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/)
- [Google's quantum Willow chip may be able to grow 'magic states' — Scientific American](https://www.scientificamerican.com/article/googles-quantum-willow-chip-may-be-able-to-grow-magic-states/)
- [Google demonstrates quantum computing breakthrough, cuts errors 40-fold — Investing.com](https://www.investing.com/news/stock-market-news/google-demonstrates-quantum-computing-breakthrough-cuts-errors-40fold-4952450)
- [Meta and Apple team up to make Muse AI models run better on Macs — The Verge](https://www.theverge.com/news/1012293/meta-apple-muse-spark-open-ai-model-mlx)
- [Apple and Meta partner to bring powerful AI to Mac Studio — AppleInsider](https://appleinsider.com/articles/26/10/15/unlikely-apple-meta-team-up-brings-powerful-local-ai-to-mac-studio)
- [Meta launches new Muse Spark Open model, optimized to run on Mac Studio — 9to5Mac](https://9to5mac.com/2026/10/15/meta-launches-new-muse-spark-open-model-optimized-to-run-on-mac-studio/)
- [CNN Announces AI Partnership with Google — CNN Press Room](https://cnnpressroom.blogs.cnn.com/2026/10/15/cnn-announces-ai-partnership-with-google/)
- [CNN and Google Strike Multiyear Partnership to Embrace Generative AI — Variety](https://variety.com/2026/biz/news/cnn-google-multiyear-partnership-embrace-generative-ai-1236913151/)
- [400 publications are now partnering with us on our News AI pilot program — Google Blog](https://blog.google/products-and-platforms/products/news/news-ai-pilot-update-publishers/)
- [Google's new Universal Cart tracks prices on items you want now — ZDNET](https://www.zdnet.com/tech/google-universal-cart-when-to-buy-guide/)
- [Google rolling out Universal Cart that lets you shop the web with Gemini and Search — 9to5Google](https://9to5google.com/2026/10/15/google-rolling-out-universal-cart-that-lets-you-shop-the-web-and-find-deals-with-gemini-search/)
- [Google updates Android earthquake alerts with more info, expands to 200+ regions — 9to5Google](https://9to5google.com/2026/10/15/android-earthquake-alerts-update-regions/)
- [Sony cancels a promised Android 17 update for an Xperia phone — 9to5Google](https://9to5google.com/2026/10/15/sony-xperia-android-17-canceled-update/)
- [Apple Now Inviting Media to October 28 'Launch Experience' — MacRumors](https://www.macrumors.com/2026/10/15/apple-inviting-media-to-october-28-experience/)
- [Touchscreen MacBook Pro Could Launch on November 6 — MacRumors](https://www.macrumors.com/2026/10/15/touchscreen-macbook-pro-november-6/)
