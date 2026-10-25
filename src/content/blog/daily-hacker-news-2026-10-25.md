---
title: 'Wikipedia lokal untuk jalan kaki setengah jam, dan argumen supaya software kita lebih ambisius'
description: 'Rangkuman Hacker News 25 Oktober 2026: Local Wikipedia cuma menampilkan entri yang bisa kamu jangkau dengan berjalan kaki setengah jam, Dan Luu mendorong software yang lebih ambisius, Cerebras memecah model 3 triliun parameter ke 59 wafer, bahasa Goose membuang heap, dan pemenang Nikon Small World in Motion kehilangan gelar karena AI.'
pubDate: 2026-10-25T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- **Local Wikipedia** cuma menampilkan entri Wikipedia yang punya koordinat dan berada dalam radius jalan kaki setengah jam dari posisi kamu. **1.619 poin | 251 komentar**. _(edjefferson.com)_
- **Dan Luu** menulis bahwa kita bisa jauh lebih ambisius dengan software yang dibangun, dan memakai pgrust sebagai contoh. **532 poin | 480 komentar**. _(danluu.com)_
- **Cerebras** menjelaskan cara memecah model 3 triliun parameter ke **59 wafer** WSE-3T, dengan throughput 1.000 sampai 2.000+ token per detik. **235 poin | 73 komentar**. _(Cerebras)_
- **Goose**, bahasa sistem tanpa heap allocator, garbage collector, atau anotasi lifetime, mencuri perhatian dengan **470 poin | 283 komentar**. _(aardappel.github.io)_
- Pemenang **Nikon Small World in Motion** dicabut gelarnya setelah penyelidikan internal menemukan pelanggaran aturan. **50 poin | 10 komentar**. _(TechSpot)_
- **Apricitas** menghitung lebih dari **200 ribu** lapangan kerja industri kreatif Amerika hilang dalam empat tahun terakhir. **408 poin | 436 komentar**. _(Apricitas)_

## 🗺️ Wikipedia yang cuma memuat hal-hal di sekitar kamu

Postingan paling ramai di Hacker News hari ini bukan peluncuran model AI. Ia sebuah situs kecil bernama **Local Wikipedia**, dengan 1.619 poin dan 251 komentar.

Idenya sesederhana namanya. Kamu buka situsnya, dan yang muncul cuma entri Wikipedia yang punya koordinat geografis serta berada dalam jarak jalan kaki setengah jam dari posisi kamu. Bukan artikel tentang Kekaisaran Romawi. Yang muncul gereja tua di ujung jalan, jembatan yang kamu lewati tiap pagi tanpa tahu sejarahnya, atau bekas pabrik yang sekarang jadi kafe.

Ada beberapa aturan teknis yang membuatnya tetap masuk akal di daerah sepi. Kalau di sekitar kamu ada kurang dari 25 tempat, situs ini mengambil 25 yang terdekat dalam radius sekitar 6 mil. Kalau ada lebih dari 500, cuma 500 terdekat yang dimasukkan. Isinya diambil langsung dari Wikipedia, hanya halaman yang sudah ter-geocode.

Soal privasi, lokasi kamu tetap di browser. Link yang kamu bagikan tidak membawa koordinat itu. Dan situs ini menulis sendiri bahwa mereka tidak punya afiliasi dengan Wikipedia sungguhan.

**Tapi… ada tapinya.** Ini proyek yang bergantung total pada seberapa rajin komunitas Wikipedia memetakan sesuatu. Di kota besar hasilnya bisa memuaskan. Di daerah yang entrinya sedikit, halaman itu akan terasa kosong, dan bukan karena tidak ada sejarah di sana, tapi karena tidak ada yang menuliskannya.

## 🛠️ Dan Luu dan argumen supaya kita lebih ambisius

Postingan kedua paling ramai: tulisan Dan Luu berjudul _We should be more ambitious with the software we build_. **532 poin, 480 komentar.**

Luu membuka dengan Michael Malis, orang di balik **pgrust**, proyek menulis ulang Postgres dengan Rust. Kalimat yang dia kutip dari Malis: kita seharusnya lebih ambisius dengan software yang kita bangun.

Luu sadar betul kenapa reaksi pertama banyak orang adalah curiga. Proyek tulis-ulang seperti ini jumlahnya banyak, dan hampir semuanya hasil _vibe slop_ yang tidak akan pernah jalan. Dia bilang kalau dia tidak mengenal Malis, dia akan berasumsi yang sama.

Yang membuat pgrust berbeda, menurut Luu, adalah pengujiannya. Malis menguji cukup dalam sampai menemukan bug asli di Postgres: bug numerik yang bisa membuat operasi SP-GiST yang valid gagal, bug format cache yang bisa menghasilkan keluaran JSONPath salah, bug pgcrypto yang membuat operasi berikutnya gagal, beberapa bug keamanan memori di loader dictionary, dan bug overflow pada tipe money. Luu menegaskan ini bukan berarti pgrust bebas bug, tapi menunjukkan ada pengujian serius di belakangnya.

Luu juga mengoreksi pilihan kata Malis. Kalau dia yang menulis, dia akan memakai "kita **bisa** lebih ambisius", bukan "kita **seharusnya**".

Bagian yang paling jujur justru datang dari komentar. Seorang pembaca berjanji akan menulis bantahan kalau tulisan itu diterbitkan: menurutnya kebanyakan orang sebaiknya **kurang** ambisius kalau membangun software dengan AI, karena banyak masalah tidak punya kriteria lulus-gagal yang jelas. Luu mengakuinya sebagian. Dia menulis bahwa dirinya sering menemukan bug dalam jumlah dua digit dalam satu menit saat membuka web chat sebuah lab AI besar.

Contoh konkret yang dia pakai: Peter Geoghegan membuat fungsi Neovim Lua untuk memformat kode sesuai preferensi yang sangat spesifik, menggabungkan clang-format dan pgindent, dengan tree-sitter untuk menentukan bagian mana yang perlu disalin balik. Geoghegan mengaku tidak paham betul cara kerjanya dan bahkan tidak bisa Lua. Tapi hasilnya jalan.

## ⚡ 59 wafer untuk satu model 3 triliun parameter

Cerebras menulis penjelasan teknis soal cara mereka menjalankan model frontier di chip wafer-scale. **235 poin, 73 komentar.**

Angka pembukanya menunjukkan masalahnya: satu wafer WSE-3T punya 44 GB memori on-chip, sementara model triliun parameter butuh satuan terabyte hanya untuk bobotnya.

Contoh yang mereka pakai Kimi K3, sekitar 3 triliun parameter, dengan 69 layer _linear-attention_ dan 24 layer _dense_, total 93 layer. Kalau semua parameter disimpan 4 bit, tiap layer butuh sekitar 16 GB. Karena satu wafer 44 GB, satu wafer bisa memuat lebih dari satu layer, tergantung tipenya. Hasil akhirnya: 35 wafer untuk layer linear dan 24 wafer untuk layer dense, total **59 wafer**.

Yang membuat ini efisien adalah letak bobotnya. Karena tiap layer muat di dalam SRAM on-chip, bobot model tidak perlu bergerak. Yang berpindah antar wafer cuma aktivasi, lewat RDMA over Ethernet, sekitar 2 mikrodetik per hop.

Sistemnya bekerja seperti lini perakitan. Wafer 1 menjalankan layer awal dan mengirim aktivasi ke wafer 2, dan seterusnya sampai wafer terakhir menghasilkan token berikutnya. Cerebras menegaskan pipeline-nya tidak menganggur menunggu giliran, karena tiap tahap bisa mengerjakan request yang berbeda sekaligus. Hasilnya throughput 1.000 sampai 2.000+ token per detik untuk model multi-triliun parameter.

## 🦢 Goose, bahasa sistem yang membuang heap

Di posisi keempat ada **Goose**, bahasa sistem _memory-safe_ tanpa heap allocator, garbage collector, atau anotasi lifetime. **470 poin, 283 komentar.**

Model memorinya sederhana dan cukup radikal. Setiap nilai dinamis hidup inline di _data stack_ yang dikelola compiler. Pertumbuhan cuma memajukan pointer. Memori dilepas saat scope-nya berakhir. Tidak ada alokasi heap sama sekali.

Detail yang paling sering dibahas: paling banyak satu nilai yang bisa membesar hidup per stack, dan nilainya selalu di posisi teratas. Karena itu pertumbuhan tidak pernah memindahkan apa pun dan tidak perlu mengecek kapasitas. Referensi tetap valid meski array sudah tumbuh sejuta elemen.

Setiap referensi dan slice punya _root_ statis, yaitu variabel yang membatasi umur targetnya. Compiler menyimpulkan root itu sendiri, jadi tidak ada anotasi yang harus kamu tulis. Tidak ada aturan aliasing atau eksklusivitas.

Di benchmark repo mereka sendiri, Goose disebut lebih cepat dari C++ dan Rust dengan memori lebih sedikit. **Tapi… ada tapinya**, dan ini penting: itu benchmark milik penulis bahasanya, dijalankan di repo yang sama. Sampai ada orang luar yang mereproduksi angkanya, klaim "lebih cepat dari Rust" masih klaim penjual.

## 🔬 Foto mikroskop yang menang, lalu kehilangan gelar

Kisah yang paling tidak nyaman hari ini datang dari kontes foto sains paling bergengsi. **50 poin, 10 komentar.**

Nikon Small World in Motion edisi ke-16 terbuka untuk semua video atau foto time-lapse digital yang diambil lewat mikroskop. Pemenangnya tahun ini Dr. Ning Xu dari Tsinghua University, dengan video yang merekam silia berdenyut di saluran napas seorang anak dengan _primary ciliary dyskinesia_, kelainan pernapasan langka.

Kecurigaan muncul dari komunitas ilmiah. Sejumlah peneliti menyebut ada keanehan pada struktur dan ukuran sel, serta fitur yang muncul dan hilang dengan cara yang tidak terjadi di biologi sel. Seorang associate professor di University of Florida menyebut sebagian struktur "muncul dan hilang dari keberadaan" dan silianya "datang dari entah mana" — pola khas video hasil AI.

Temuan yang lebih memberatkan datang dari Ian Donovan, mahasiswa PhD di UT Southwestern Medical Center. Menurutnya gambar sumbernya mengandung watermark yang menandakan hasil AI. Dua mantan juri kontes juga mempertanyakan keaslian klip itu.

Dalam unggahan LinkedIn yang sudah dihapus, Xu mengaku memakai AI, tapi hanya untuk "membedakan dan memvisualisasikan fitur pada gambar grayscale hasil rekonstruksi dari pencitraan optik super-resolusi" saat pascaproses. Dia menegaskan AI tidak dipakai untuk menghasilkan video, silia, atau gerakannya, dan merasa tidak melanggar aturan. Penyelidikan Nikon menyimpulkan sebaliknya. Gelarnya dicabut, posisi pertama diberikan ke Nguyen Nam Nhat dari Vietnam dengan video cacing kecil dan organisme bersel satu. Nikon menyatakan akan meninjau ulang aturan dan prosedur penilaian.

## 🎨 200 ribu pekerjaan kreatif yang hilang, dan berapa banyak karena AI

Tulisan Apricitas karya Joseph Politano terbit 27 September, tapi masih ramai dibahas sampai hari ini. **408 poin, 436 komentar.**

Angka utamanya: Amerika kehilangan lebih dari **200 ribu** lapangan kerja di industri kreatif dalam empat tahun terakhir, sekitar 50 ribu di antaranya dalam setahun terakhir. Politano menyebut ini salah satu periode terburuk untuk lapangan kerja media dalam sejarah modern Amerika, dengan intensitas dan durasi yang setara hanya pada resesi 2001 dan 2008.

Yang paling parah Hollywood. Industri film dan TV kehilangan lebih dari **100 ribu** pekerjaan, hampir sepertiga total sektor itu. Penerbitan turun lebih dari 70 ribu. Payroll surat kabar sudah turun hampir 85 persen dari sekitar setengah juta orang, majalah memangkas 66 persen staf sejak era 90-an, penerbit buku 40 persen.

Politano sendiri menolak menyederhanakan sebabnya. Menurutnya membuktikan berapa banyak dari angka itu akibat AI sangat sulit, karena perusahaan media sengaja tidak transparan soal penggunaan AI mereka. Datanya juga bercampur dengan konsolidasi Hollywood, _offshoring_ produksi konten, dan pergeseran ke kreator media sosial. Bukti terkuat yang dia ajukan justru perbandingan: semua subsektor seni digital kehilangan pekerjaan, sementara hiburan tatap muka masih tumbuh sehat.

Satu angka yang menarik: sekitar 32 persen pekerja di sektor seni, hiburan, dan rekreasi memakai AI generatif sampai batas tertentu, jauh di bawah rata-rata 62 persen lintas industri. Tapi itu tetap cukup untuk membuat hampir setiap proyek media besar punya AI di suatu titik alurnya.

Dan Politano menutup dengan pengingat yang jarang muncul di diskusi seperti ini: enam tahun terakhir justru mencatat lonjakan penjualan buku cetak sebesar 70 persen, dan penyebabnya TikTok lewat fenomena BookTok. Prediksi linier soal teknologi dan seni, katanya, sering salah.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan angka 200 ribu itu, tapi kombinasi dua postingan: Local Wikipedia di posisi teratas dan tulisan Dan Luu di posisi kedua.

Local Wikipedia itu software bagus yang hampir tidak mungkin dibuat sepuluh tahun lalu dengan biaya wajar. Bukan karena teknologinya sulit, tapi karena tidak ada yang mau membayar seseorang untuk mengerjakannya. Sekarang satu orang bisa membuatnya dalam waktu yang masuk akal, dan hasilnya sesuatu yang membuat orang keluar rumah.

Dan itu, menurut saya, persis poin Luu. Bukan "AI bikin semua orang jadi sepuluh kali lebih produktif", tapi "ada kelas software yang dulu terlalu mahal untuk dibuat, dan sekarang tidak".

Saya juga suka bahwa Luu menyertakan bantahannya sendiri di dalam tulisan. Kebanyakan orang yang menulis soal AI memilih satu sisi. Dia menaruh argumen bahwa kebanyakan orang sebaiknya kurang ambisius, lalu mengakui bahwa dirinya sendiri sering menemukan bug berlimpah di produk lab AI terbesar. Itu bukan sikap orang yang sedang menjual sesuatu.

Soal Goose, saya belum menjalankan benchmark-nya sendiri, jadi saya ngga bisa bilang klaim "lebih cepat dari Rust" itu benar atau tidak. Yang bisa saya bilang: model memori tanpa heap dengan referensi stabil itu ide yang layak diuji, bukan cuma trik marketing.

Dan soal kasus Nikon, bagian yang paling mengganggu bukan bahwa seseorang memakai AI. Yang mengganggu adalah bahwa dia hampir menang. Yang menyelamatkan kontes itu komunitas ilmuwan yang cukup teliti untuk melihat silia yang muncul dari ketiadaan.

## Kalau kamu, pilih mana?

Kalau ada alat yang bisa menunjukkan semua sejarah dalam radius jalan kaki dari rumah kamu, kamu akan benar-benar memakainya, atau cuma buka sekali lalu lupa? Dan menurut kalian, apakah "lebih ambisius dengan software" itu nasihat yang bagus untuk semua orang, atau cuma untuk orang yang memang punya waktu menguji hasilnya?

## 🔗 Sumber

- Local Wikipedia — https://edjefferson.com/localwiki/
- Diskusi HN Local Wikipedia (1.619 poin) — https://news.ycombinator.com/item?id=50202285
- Dan Luu, We should be more ambitious with the software we build — https://danluu.com/ambitious/
- Diskusi HN Dan Luu (532 poin) — https://news.ycombinator.com/item?id=50225695
- Cerebras, How we deploy trillion-parameter frontier models — https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras
- Diskusi HN Cerebras (235 poin) — https://news.ycombinator.com/item?id=50227356
- Goose Programming Language — https://aardappel.github.io/goose/
- Diskusi HN Goose (470 poin) — https://news.ycombinator.com/item?id=50224100
- TechSpot, Nikon photography contest winner loses title — https://www.techspot.com/news/114171-nikon-photography-contest-winner-loses-title-after-scientists.html
- Diskusi HN Nikon (50 poin) — https://news.ycombinator.com/item?id=50229827
- Apricitas, AI and the Fall of the Creative Class — https://www.apricitas.io/p/ai-and-the-fall-of-the-creative-class
- Diskusi HN Apricitas (408 poin) — https://news.ycombinator.com/item?id=50226419
