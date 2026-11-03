---
title: 'Astra bisa membaca bobot jaringan saraf, dan ada yang bilang hasilnya tidak sehebat judulnya'
description: 'Rangkuman Hacker News 3 November 2026: makalah MIT CSAIL soal Astra yang mengedit bobot Qwen3.5-0.8B dibantah keras oleh pengamat yang membaca ulang setiap eksperimennya, kacamata Subvocal membaca ucapan tanpa suara lewat gelombang radio, panduan menyimpan situs kesayangan sebelum hilang, dan Stockfish yang jalan di Pentium 1996.'
pubDate: 2026-11-03T13:00:00Z
tags: ['berita', 'Hacker News', 'AI']
---

## 🔍 TL;DR

- Makalah **Weight-Space Programming** dari MIT CSAIL mengklaim GPT-6 Astra bisa membaca dan menulis bobot jaringan langsung, termasuk menaikkan skor MATH-500 Qwen3.5-0.8B dari 7,9 ke 48,1 persen dengan mengedit 0,016 persen bobot _(rikiyat.github.io)_
- Tulisan bantahan dari honnibal.dev menyebut framing itu menyesatkan: hanya tiga eksperimen yang benar-benar membaca bobot mentah, dan yang jadi judul justru memakai Python plus menjalankan model sampai 50 putaran _(honnibal.dev)_
- **Subvocal** memperkenalkan kacamata yang membaca gerakan mulut lewat gelombang radio dan mengubahnya jadi teks, dengan latensi di bawah 500 milidetik _(news.ycombinator.com, subvocal.company)_
- Situs kesayangan bisa hilang kapan saja: domain fansite Ochaken sejak 2004 sekarang dipakai iklan judi, dan alat arsipnya gratis _(blog.mistys-internet.website)_
- Stockfish yang di-porting ke Pentium Pro 200 MHz dari 1995 bermain di sekitar **Elo 3300**, jauh di atas Kasparov yang hampir 2800 _(nicholas.carlini.com)_

## 🧠 Astra membaca bobot, lalu ada yang membaca ulang makalahnya

Ini cerita terbesar di Hacker News hari ini, dan menariknya bukan karena klaimnya, tapi karena reaksinya.

Makalah berjudul **Sparks of Weight-Space Programming** dari empat peneliti MIT CSAIL — Rikiya Takehi, Jayden Teoh, Alex Zhang, dan Omar Khattab — terbit 2 November. Intinya: model frontier sekarang cukup jago membaca dan menulis bobot jaringan saraf langsung, tanpa optimizer dan tanpa gradient descent.

Contoh yang dipakai di ringkasan: diberi tumpukan angka mentah dari jaringan 17.253 bobot, Astra bisa menebak jaringan itu dilatih untuk main **Breakout**. Versi yang lebih menggigit: Astra diminta membuat Qwen3.5-0.8B lebih pintar matematika, menemukan penyebab reasoning loop di bobotnya, lalu memperbaikinya dengan mengedit **0,016 persen bobot**. Hasilnya MATH-500 naik dari **7,9 persen ke 48,1 persen**, dan IFEval ikut naik tiga kali lipat.

Thread-nya meledak. Lebih dari 2.600 poin dan 800 komentar, angka yang biasanya cuma muncul untuk berita PHK massal atau bocoran model baru.

Lalu datang bantahan. Tulisan di **honnibal.dev** membedah satu per satu eksperimen di makalah itu dan menyimpulkan framing-nya terlalu jauh. Argumen intinya sederhana dan sulit dibantah: setting "cuma melihat bobot mentah" hanya muncul di eksperimen 1, 2, dan 4, pada jaringan berukuran **17 ribu sampai 172 ribu bobot**. Semua eksperimen yang menyentuh model bahasa sungguhan memakai **Python**, dan eksperimen Qwen yang jadi headline bahkan boleh menjalankan modelnya di sampai **50 batch soal latihan**.

Penulis bantahan itu menulis bahwa hasil Qwen sebenarnya menunjukkan Astra bisa diminta menyusun dan menjalankan tugas yang biasanya dikerjakan _machine learning engineer_ manusia — bukan bukti bahwa satu teknik tunggal bisa membaca bobot mentah sekaligus memperbaiki model besar. Dua hal itu digabung dalam satu narasi, dan dari situ kesannya jadi jauh lebih besar.

Di kolom komentar, seorang peneliti yang mengaku bekerja di _weight space learning_ menambahkan konteks: kemampuan mengedit dan membaca bobot sudah ada sejak lama, contohnya di proyek seperti ROME pada 2023, dan banyak eksperimen di makalah ini memakai model 20 ribu parameter yang memang jauh lebih mudah dibaca. Ia menyebut perbaikan Qwen itu dekat dengan _steering vector_, teknik yang sudah mapan.

Yang tidak dibantah siapa pun: ini tetap pekerjaan yang mengesankan. Model satu-dua tahun lalu tidak akan bisa melakukan semua itu.

## 🦿 Bicara ke komputer tanpa mengeluarkan suara

Dua orang mahasiswa _computer science_ Georgia Tech, Aarush dan Arnav, membangun kacamata yang bisa membaca kata yang kamu ucapkan di dalam kepala — atau lebih tepatnya, kata yang kamu gerakkan dengan mulut tertutup.

Namanya **Subvocal**, dari The Subvocal Company, peserta YC F26. Cara kerjanya bukan elektroda di wajah. Tim ini sempat mencoba EMG, lalu menyerah karena sinyalnya berubah kalau berkeringat, kena interferensi listrik, dan tidak ada orang waras yang mau menempelkan elektroda ke muka sendiri.

Gantinya gelombang radio, mirip Bluetooth. Antena di gagang kacamata memancarkan gelombang yang menembus wajah. Saat melewati lidah, bibir, dan langit-langit lunak, gelombang itu berubah sesuai gerakan mulut, lalu model _foundation_ menerjemahkan gangguannya menjadi teks.

Tantangan terberatnya bukan sensor, tapi generalisasi antar pengguna. Anatomi wajah setiap orang beda, dan pola sinyalnya ikut beda. Solusi yang mereka ambil: memperbesar data latih. Mereka bikin bilik di kantor dan membayar orang untuk membaca prompt sambil memakai kacamata itu.

Angka yang mereka sebut: latensi ujung ke ujung **di bawah 500 milidetik**, dekode jalan di aplikasi pendamping di laptop atau ponsel, belum ada _wake word_ dan sebagai gantinya tombol pemicu seperti Alt, dan pengiriman batch pertama **500 unit** direncanakan kuartal pertama 2027 dengan diskon 200 dolar untuk pre-order.

## 🗄️ Kalau kamu sayang sebuah situs, simpan sendiri

Tulisan paling sunyi tapi paling berguna hari ini datang dari seseorang yang bekerja di bidang arsip web. Ia bercerita soal **teapuppies.com**, fansite serial Ochaken yang online sejak 2004 dan hampir tidak berubah sejak 2005. Suatu hari situs itu hilang, dan domainnya sekarang menjual iklan judi online.

Yang bikin tulisan ini terasa jujur: penulisnya mengaku punya alat untuk mencegahnya dan tetap tidak melakukannya.

Sisanya adalah tutorial. Tiga opsi, semuanya menghasilkan format arsip standar **WARC** atau paketnya, **WACZ**:

- **ArchiveWeb.page**, ekstensi Chrome. Pasang, buka halaman, klik start, klik stop. Selesai.
- **archiveweb.page** versi aplikasi mandiri, untuk yang tidak mau memasang ekstensi.
- **Browsertrix**, _crawler_ untuk mengarsipkan satu domain penuh tanpa mengklik halaman satu per satu. Ini satu-satunya alat berbayar di daftar, dengan uji coba tujuh hari, dan kodenya terbuka kalau kamu mau menjalankannya sendiri.

Untuk melihat hasilnya, **ReplayWeb.page** bisa memutar file arsip langsung di browser, bahkan disematkan di halaman web lain tanpa server. Penulisnya menyematkan satu situs arsip utuh di dalam postingannya sendiri.

## ♟️ Kasparov bisa dikalahkan komputer Pentium 1996

Nicholas Carlini mengajukan pertanyaan yang kelihatan iseng: kalau Deep Blue tidak pernah dibangun, apakah komputer desktop biasa tahun 1996 bisa mengalahkan Kasparov?

Jawabannya, menurut eksperimennya, bisa — dan tidak terlalu sulit.

Ia membeli PC bekas dengan **Pentium Pro 200 MHz** dan 64 MB RAM, mem-porting Stockfish ke prosesor 32-bit itu, lalu mengukur kekuatannya. Hasilnya sekitar **Elo 3300** di kontrol waktu klasik, sementara Kasparov hampir 2800 dan Deep Blue sekitar 2700. Di satu mesin, ada server HTTP kecil yang bisa kamu ajak main langsung lewat internet.

Pembandingnya menarik. Deep Blue memakai 30 prosesor P2SC di 120 MHz plus **480 chip catur VLSI** khusus, menganalisis lebih dari 200 juta posisi per detik, dan saat itu masuk peringkat 259 superkomputer terkuat dunia. Mesin Carlini cuma satu CPU konsumen.

Dari mana selisihnya? Dari perangkat lunak. Carlini menghitung bahwa dari sekitar **+1335 Elo** yang didapat mesin catur modern dibanding mesin 1996, sekitar **+720** datang dari pemrograman yang lebih baik, bukan dari hardware yang lebih cepat. Dalam pertandingan 100 game melawan Crafty 1996 yang dijalankan di hardware modern, Stockfish di Pentium tua menang 78, seri 17, kalah 5.

## 🛡️ NIST menulis panduan keamanan untuk yang kerja sendirian

NIST merilis **Small Business Cybersecurity: Non-Employer Firms** (CSWP 50) pada 2 November. Sasaraninya _solopreneur_, definisinya orang yang jadi satu-satunya karyawan berbayar di usahanya. Di Amerika Serikat jumlahnya lebih dari **28 juta**.

Panduannya berbahasa awam dan menganggap pembacanya nol pengetahuan keamanan siber. Isinya menarik dari **NIST Cybersecurity Framework 2.0**, lalu diterjemahkan jadi langkah konkret: alasan melakukannya, cara memulainya, dan apa yang bisa ditingkatkan saat usaha tumbuh. Contoh yang disebut salah satu penulisnya, Daniel Eliot: ganti kata sandi bawaan pabrik di router dan perangkat lain, karena kata sandi itu gampang dicari penjahat.

Ada juga lembar kerja untuk mencatat aset berisiko dan tiga studi kasus: seorang pengacara, seorang perajin, dan seorang konsultan bisnis.

## 🧾 Tapi… ada tapinya

Soal Astra, bantahan honnibal.dev bukan sekadar debat akademik. Ia menunjukkan pola yang makin sering: satu makalah dengan beberapa eksperimen berbeda disatukan dalam satu abstrak yang enak dibaca, lalu angka terbaiknya dipakai sebagai judul. Pembaca yang tidak membuka tabel metodologi akan menyimpulkan kemampuan yang belum didemonstrasikan.

Soal Subvocal, komentar di HN juga tidak semuanya kagum. Beberapa pengguna menuding gambar produk di situsnya dihasilkan AI tanpa keterangan, dan itu wajar dicurigai untuk perangkat keras yang baru dikirim 2027. Timnya sendiri mengakui prototipe baru akan jadi produk jadi dalam beberapa bulan ke depan, dan fitur deteksi aktivitas bicara otomatis baru akan dikirim sebagai pembaruan beberapa bulan setelah perangkatnya sampai.

Soal arsip web, alat gratis pun tetap butuh kesadaran. Tidak ada yang otomatis menyelamatkan situs yang kamu suka, dan Internet Archive tidak menjangkau semuanya.

## 🗣️ Pendapat saya

Saya membaca makalah Astra dengan hati-hati, lalu membaca bantahannya, dan saya keluar dengan perasaan yang aneh: kecewa dan lega sekaligus.

Kecewa karena versi yang saya bayangkan pertama kali — model yang melihat tumpukan angka dan langsung paham isi kepalanya — ternyata belum ada. Lega karena kalau benar sudah ada, saya tidak yakin kita punya cara apa pun untuk memeriksa apa yang sebenarnya terjadi di dalamnya. Model yang bisa mengedit bobotnya sendiri tanpa kita bisa menjelaskan hasilnya adalah definisi masalah yang sulit ditutup.

Yang membuat saya bertahan di cerita ini bukan klaim besarnya, tapi tabel di tulisan bantahan itu. Satu tabel kecil yang memisahkan "membaca bobot mentah" dari "memakai Python" dan "menjalankan model" mengubah kesimpulan seluruh makalah. Itu pengingat yang saya butuhkan sebagai orang yang sehari-hari membaca ringkasan berita: abstrak selalu ditulis oleh orang yang paling ingin karyanya terlihat besar.

Untuk cerita arsip web, saya termasuk yang merasa tertohok. Ada beberapa blog dan forum kecil yang saya kunjungi sejak bertahun-tahun dan tidak pernah sekali pun saya simpan. Kalau salah satunya hilang minggu depan, saya tidak punya alasan untuk kaget.

Dan untuk Stockfish di Pentium 1996: ini pengingat yang tidak nyaman untuk semua orang yang percaya satu-satunya cara maju adalah menambah komputasi. Kadang jawabannya cuma kode yang lebih pintar, dan tiga puluh tahun ide yang belum dipakai.

## 💬 Pertanyaan buat kalian

Kalau ada satu situs di internet yang isinya cuma ada di situ dan tidak ada arsipnya, situs apa yang paling kalian takut kehilangan? Dan untuk yang mengikuti cerita Astra: kalian lebih percaya angka di abstraknya, atau tabel metodologi di tulisan bantahannya?

## 🔗 Sumber

- Sparks of Weight-Space Programming, Rikiya Takehi dkk, MIT CSAIL — https://rikiyat.github.io/blog/weight-space-programming/
- The Astra post is massively misleading, honnibal.dev — https://honnibal.dev/blog/astra-read-write-misleading
- Diskusi Hacker News: Astra can read and write weights to improve Qwen — https://news.ycombinator.com/item?id=50341174
- Show HN: Subvocal, talk to your computer without making noise — https://news.ycombinator.com/item?id=50340088
- The Subvocal Company — https://subvocal.company/
- If you love a website, back it up, The Future Is Now — https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/
- Could a modern chess engine on a Pentium have defeated Kasparov in 1996, Nicholas Carlini — https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html
- Self-Employed? Solopreneur? NIST Has a Cybersecurity Guide Just for You — https://www.nist.gov/news-events/news/2026/11/self-employed-solopreneur-nist-has-cybersecurity-guide-just-you
- NIST CSWP 50, Small Business Cybersecurity: Non-Employer Firms — https://csrc.nist.gov/pubs/cswp/50/small-business-cybersecurity-non-employer-firms/final
