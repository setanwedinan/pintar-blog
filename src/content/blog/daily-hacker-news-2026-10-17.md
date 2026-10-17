---
title: 'Claude bongkar asal kurva ECDSA, DeepSeek V4.1 Flash mendarat, llama.cpp jalan di PS5'
description: 'Rangkuman Hacker News 17 Oktober 2026: Claude memecahkan misteri 25 tahun asal seed kurva ECDSA NIST dalam waktu kurang dari setengah jam, DeepSeek merilis V4.1 Flash 1017 dengan backbone 552B, llama.cpp berhasil dijalankan di PS5 yang sudah di-jailbreak, dan cara memahami transformer sebagai tumpukan penyimpanan memori.'
pubDate: 2026-10-17T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- **Claude** menemukan asal-usul seed kurva **ECDSA** NIST (P-192, P-224, P-256, P-384, P-521) dalam **kurang dari setengah jam**. Ternyata bukan hash frasa lucu seperti dugaan selama ini, tapi output generator angka acak `lrand48` yang di-seed dengan **timestamp Unix**. _(Anthropic Frontier Red Team)_
- **DeepSeek** merilis **V4.1 Flash 1017**, model sparse mixture-of-experts pertama mereka di arsitektur **Causal Encoder-Decoder**, dengan backbone **552 miliar parameter** tapi hanya **8B aktif di input** dan **16B di output**. Dua submission-nya masuk jajaran teratas HN hari ini. _(OpenRouter, Hugging Face)_
- **llama.cpp** berhasil dijalankan native di **PS5 yang sudah di-jailbreak** lewat proyek **PS5LM**, memakai GPU konsol via RADV dan mendapat akses **12 GiB direct memory**. Qwen 3.8 27B dimuat dalam 82 detik dan decode 9–21 token per detik. _(GitHub cobanov/PS5LM)_
- Tulisan **Alex Wang** mengubah cara pandang soal transformer: setiap lapisan adalah **toko memori**, dan kapasitasnya bisa dihitung. Dengan key 64 dimensi, kapasitas melompat dari sekitar **64 memori** di lapisan linear ke **2.700** di MLP, lalu **lebih dari sejuta** di self-attention. _(alexwang.ai)_

## 🔐 Misteri 25 Tahun Kurva ECDSA Akhirnya Pecah, dan yang Memecahkannya Claude

Ini cerita yang paling banyak dibicarakan di Hacker News hari ini: 932 poin dan 340 komentar. Sesuatu yang berbau konspirasi kriptografi selama seperempat abad ternyata berakhir dengan jawaban yang… membosankan. Dan justru itu kabar baiknya.

**ECDSA** adalah standar kriptografi kurva eliptik paling banyak dipakai di dunia. NIST mengadopsinya pada 2000 lewat **FIPS 186-2 Digital Signature Standard**, yang mencantumkan sekumpulan kurva standar di berbagai ukuran dan tingkat keamanan. Masalahnya ada di detail yang tampak sepele: untuk kurva di atas prime field dan binary field, spesifikasi mempublikasikan parameter **"seed"** yang nilai hash-nya dipakai untuk mendefinisikan koefisien **b** kurva. Seed itu diberikan oleh **NSA** tanpa penjelasan apa pun. _(Anthropic Frontier Red Team)_

Contohnya seed untuk kurva NIST P-256: `C49D3608 86E70493 6A6678E1 139D26B7 819F7E90`. Rangkaian heksadesimal itu muncul begitu saja di dokumen standar. Tidak ada keterangan dari mana asalnya.

Dan di dunia kriptografi, "tidak ada keterangan" adalah pintu masuk segala spekulasi. Kalau kamu bisa memilih parameter kurva secara diam-diam, kamu mungkin bisa menyisipkan **backdoor** — kelemahan yang hanya kamu tahu cara memanfaatkannya. Selama bertahun-tahun, sebagian peneliti memang mencurigai hal itu. _(Anthropic Frontier Red Team)_

**Neal Koblitz** dan **Alfred Menezes** menulis ringkasan bagus soal kontroversi ini berjudul "A Riddle Wrapped in an Enigma". Misteri ini juga memicu investigasi amatir soal asal seed, sampai ada **bounty** untuk siapa pun yang bisa menemukannya. _(Anthropic Frontier Red Team)_

### Dugaan terbaik selama ini ternyata salah

Versi cerita yang paling populer — dan paling sering dikutip — datang dari **Jerry Solinas**, pegawai lama NSA. Pada 2015 ia menyebut seed itu kemungkinan besar dibuat dari hash sebuah frasa lucu:

> "Saya percaya ada counter, bukan multiple hashing, tapi saya tidak tahu detailnya. Pesannya kira-kira 'Give Bob and Jerry a raise' atau 'Bob and Jerry rule' atau semacam itu. Bob Reiter yang sebenarnya menulis kodenya, dan dia juga tidak ingat detailnya. Kami juga tidak bisa menemukan arsip dari zaman itu. Kalau pun ada, sudah pasti ada di hard drive dekat Tabut Perjanjian." — **Jerry Solinas, 2015** _(Anthropic Frontier Red Team)_

Sayangnya Jerry meninggal pada 2023, dan kolega-koleganya saat itu tidak merespons. Pertanyaan soal asal seed tetap terbuka.

Beberapa karyawan Anthropic sempat mengejar petunjuk "hash frasa lucu" itu dan gagal. Ternyata petunjuk itu memang menyesatkan. Pada Oktober 2026, seorang karyawan penasaran bertanya ke model riset internal mereka apakah bisa mencari tahu bagaimana seed itu dibuat — tanpa memberi petunjuk apa pun soal dugaan frasa lucu tadi. _(Anthropic Frontier Red Team)_

**Dalam waktu kurang dari setengah jam**, Claude menemukan asal-usul seed NIST P-192, P-224, P-256, P-384, dan P-521. Tidak ada satu pun yang merupakan hasil algoritma hash. Semuanya adalah output generator angka acak pustaka C **`lrand48`**, yang di-seed dengan **timestamp Unix**. _(Anthropic Frontier Red Team)_

### Bagaimana caranya ketemu?

Claude mencoba sudut pandang yang berbeda: membayangkan bagaimana perangkat lunak pembuat kurva itu seharusnya bekerja, bukan menebak isi pesannya. Ia menduga perangkat lunak itu memakai **pseudorandom number generator (PRNG)** yang ikut terpasang di pustaka C era 1990-an. PRNG lama seperti itu cukup lemah untuk dikenali dari outputnya — dan kalau polanya dikenali, status inisialisasinya mungkin bisa dipulihkan. _(Anthropic Frontier Red Team)_

Claude lalu menulis pemindai yang menggeser satu bit demi satu bit di sepanjang setiap seed yang dipublikasikan, menguji apakah potongan-potongan yang berdekatan adalah output berurutan dari generator era 90-an. Pemindaian itu mencakup **34 kombinasi generator dan irisan output**. _(Anthropic Frontier Red Team)_

Di titik itu, sebuah pola muncul: bit teratas beberapa seed semuanya nol. Ditulis sebagai lima kata 32-bit, **empat dari sepuluh seed** punya angka 0 di bit teratas untuk semua 20 kata. Kalau itu kebetulan, peluangnya **1/5810**. Itu tanda tangan generator kongruen linear `lrand48`, yang hanya mengembalikan **31 bit teratas** dari status 48-bit. Untuk memulihkan status, Claude mengambil kata pertama, mencoba semua **2¹⁷ nilai dari 17 bit tersembunyi**, lalu memeriksa apakah empat kata berikutnya mengikuti. Cara itu berhasil untuk keempat seed tersebut. _(Anthropic Frontier Red Team)_

Untuk seed kurva prime, generatornya sama tapi bit yang disimpan lebih sedikit. Di sinilah Claude harus memulihkan status internal PRNG dari bit yang terpotong — dan ternyata itu masalah lattice klasik, diselesaikan dengan algoritma reduksi basis **Lenstra–Lenstra–Lovász (LLL)**. Claude tidak tahu bit mana yang mungkin tampil di seed, jadi ia menjalankan solver di setiap jendela kemungkinan. Hasilnya: lima seed kurva prime NIST plus lima lagi dari standar **ANSI X9.62** semuanya punya pola yang sama — `lrand48() >> 23`. _(Anthropic Frontier Red Team)_

Karena generator kongruen linear berjalan mundur semudah maju, untuk setiap seed Claude melangkah mundur sampai statusnya mencapai bentuk inisialisasi `srand48`, dengan 16 bit terbawah sama dengan `0x330E`. Untuk sepuluh seed kurva prime, setiap inisialisasi `srand48` adalah **timestamp Unix yang mewakili tanggal antara Mei 1997 dan April 1998**. Empat inisialisasi kurva biner terbaca sebagai **Februari 1984**. _(Anthropic Frontier Red Team)_

Claude juga menemukan asal sebagian **base point** kurva. Base point dari enam kurva yang dibuat Mei 1997 (P-192 dan lima kurva contoh ANSI X9.62) berasal dari generator angka acak di **FreeLIP**, paket aritmetika bilangan panjang milik **Arjen Lenstra**. Versi awal pustaka **NTL** milik **Victor Shoup** mengirim kode yang sama. Resepnya sederhana: seed generator dengan bilangan bulat kecil, buang tujuh output, lalu hasilkan kandidat koordinat-x dari output 26-bit yang direduksi modulo p, ulangi sampai x berada di kurva. Seed yang ditemukan: **20000** untuk P-192, **20420, 20507, 20509** untuk prime239v1 sampai v3, dan **20512, 20517** untuk prime192v2 dan v3. _(Anthropic Frontier Red Team)_

Tapi… ada tapinya, dan Anthropic sendiri yang menekankan ini. Temuan ini **bukan** serangan kriptografi baru, bukan kelemahan kurva ECDSA, dan **tidak ada yang perlu kamu ubah**. Justru sebaliknya: temuan ini membuat kita lebih yakin kurva itu dipilih **tanpa backdoor** atau kelemahan yang disengaja, karena seed-nya dibuat dengan cara yang sangat sederhana dan sekarang bisa direproduksi siapa pun. _(Anthropic Frontier Red Team)_

Masih ada pertanyaan yang belum terjawab. Tidak setiap kandidat seed 20-byte bisa menghasilkan kurva yang layak, dan mereka mengamati beberapa kurva yang sebenarnya layak justru dilewati. Untuk P-256, seed yang dipublikasikan adalah kandidat **1842**, padahal kandidat **876** dari run yang sama juga menghasilkan kurva berorde prima dengan ukuran yang tepat dan parameter yang dipilih dengan cara sama. Run P-224 melewati tiga kurva semacam itu, dan dua run di balik kurva contoh ANSI X9.62 melewati tujuh lagi. Kriteria apa yang dipakai — atau apakah ini artefak tak sengaja — belum diketahui. _(Anthropic Frontier Red Team)_

## 🧠 DeepSeek V4.1 Flash 1017: Kecil di Depan, Besar di Belakang

Dua submission soal model ini masuk jajaran teratas Hacker News hari ini — satu menuju halaman OpenRouter (370 poin, 151 komentar), satu lagi menuju kartu model di Hugging Face (281 poin, 107 komentar). _(Hacker News, per 17 Oktober 2026)_

**DeepSeek V4.1 Flash 1017** adalah snapshot 17 Oktober 2026 dari DeepSeek V4.1 Flash. Ini model sparse mixture-of-experts dan yang pertama dibangun di atas arsitektur **Causal Encoder-Decoder (CED)** milik DeepSeek. Angka yang paling menarik justru yang kecil: model ini mengaktifkan **8 miliar parameter di input** dan **16 miliar di output** dari backbone **552 miliar parameter**. Pembagian asimetris itu menjaga komputasi per token tetap rendah dibanding ukuran total model. _(OpenRouter)_

Pemahaman gambar dibangun native di arsitekturnya, dengan embedding visual dan teks dilatih bersama sejak awal pra-pelatihan — bukan ditempel belakangan seperti pada V4 Flash Vision Exp yang eksperimental. Konteksnya **1 juta token**, dan **compressed KV caching** memotong memori cache jadi sekitar **seperempat** generasi Flash sebelumnya. _(OpenRouter)_

Dari sisi harga, di OpenRouter model ini dipasang **$0,10 per 1 juta token input** dan **$0,50 per 1 juta token output**. DeepSeek memposisikannya sebagai tier hemat biaya di keluarga V4.1, dan mengklaim performanya melampaui **V4 Pro** dari sisi performa, kecepatan, maupun waktu penyelesaian tugas. _(OpenRouter)_

Klaim peningkatan itu cukup agresif kalau dibandingkan dengan V4.1 Flash sebelumnya. Di **HLE tanpa tools**, skornya **42,6** (44,0 untuk subset teks saja) versus **36,8** (39,1) pada V4.1 Flash. Di **Terminal-Bench 4.0** naik dari **31,2** ke **42,3**. Di **DeepSWE v1.1** dari **74,2** ke **77,0**, dan di **Automation-Bench v1.0.6** dari **54,8** ke **60,5**. Untuk **Agents' Last Exam** dari **31,8** ke **35,4**, sementara **Apex Bench v1.1** melompat dari **64,6** ke **72,1**. _(Hugging Face)_

Bobotnya dirilis dengan lisensi **MIT**, dan repo-nya menyertakan folder `encoding` berisi implementasi referensi Python mandiri untuk percakapan multi-turn, tool calling, thinking mode, dan konten gambar berselang. Untuk penggunaan produksi, DeepSeek juga merilis **deepseek-recipe**, kumpulan pustaka Rust dengan binding Python yang menangani format prompt yang sama. Parameter sampling yang direkomendasikan: temperature **1.0**, top*p **1.0**, context window **1 juta token**, max_tokens minimal **256K**. *(Hugging Face)\_

Tapi… ada tapinya. Ada satu angka di kartu Hugging Face yang tidak cocok dengan deskripsi OpenRouter: HF mencantumkan **763 miliar parameter** pada metadata modelnya, sementara OpenRouter menyebut backbone **552 miliar**. Bisa jadi perbedaan itu soal apa yang dihitung (bobot total termasuk komponen lain versus backbone saja), tapi sampai ada penjelasan resmi, angka mana pun sebaiknya diperlakukan sebagai indikasi, bukan patokan pasti. _(OpenRouter, Hugging Face)_

## 🎮 llama.cpp Jalan di PS5, dan Konsol Itu Punya 12 GiB Memori untuk Model

Kalau kamu punya PS5 yang sudah di-jailbreak dan menganggur, proyek ini mungkin alasan untuk menyalakannya lagi. **PS5LM** menjalankan **llama.cpp** secara native di konsol, memakai GPU PS5 lewat **RADV**, dan bisa memuat model **GGUF** apa pun. _(GitHub cobanov/PS5LM)_

Detail teknisnya menarik. Aplikasi ini bukan payload, melainkan **title** — dan justru karena itu ia mendapat **12 GiB direct memory** konsol plus akses GPU. Aplikasi `ps5/app` menautkan `llama-server` dengan **ggml-vulkan** terhadap build RADV dari proyek **PS5_Vulkan**. Dengan `radv_enable_unified_heap_on_apu`, RADV melaporkan satu device heap **11,44 GiB**. _(GitHub cobanov/PS5LM)_

Hasil ukurnya: **Qwen 3.8 27B** dengan kuantisasi UD-IQ2*XXS dimuat dalam **82 detik** dan decode **9 sampai 21 token per detik**, dengan chat di port 8081. Saran model di aplikasi kini mengarah ke **UD-Q2_K_XL**, yang menurut catatan pengembang memberi sekitar **20 token per detik** di konsol, lebih cepat dari IQ2_XXS yang sekitar **15 token per detik**, dan tetap mempertahankan konteks **64k**. *(GitHub cobanov/PS5LM)\_

Ada juga beberapa hal yang hanya perlu dilakukan kalau kamu membuat title, bukan payload: tidak boleh ada exit (SIGSYS), splash harus disembunyikan manual, HOME harus diset, exception dan RTTI harus aktif, dan kamu butuh implementasi sendiri untuk `isatty`, `getnameinfo`, `getaddrinfo`, `accept4`, dan impor lain yang hanya didefinisikan oleh modul stub mati. Aplikasinya punya ikon dan home screen art sendiri, digambar sebagai SVG. _(GitHub cobanov/PS5LM)_

Repositori ini berlisensi **GPL-3.0-or-later**, sudah punya **450 bintang** dan 25 fork saat dicek, dengan versi terbaru **v0.9.0** yang di-commit 16 Oktober 2026. Tidak ada file SDK Sony, key, firmware, atau bobot model di dalamnya, dan proyeknya menyatakan tidak berafiliasi dengan Sony Interactive Entertainment. _(GitHub cobanov/PS5LM)_

Tapi… ada tapinya, dan ini tapinya besar. Kamu butuh PS5 yang **sudah di-jailbreak**. Itu bukan hal sepele, bukan sesuatu yang dijamin berjalan di semua firmware, dan konsekuensi hukum maupun praktisnya jadi tanggung jawabmu sendiri. Angka 9–21 token per detik juga jujur saja lambat untuk pemakaian harian — ini proyek eksperimen dan edukasi, bukan pengganti PC dengan GPU besar. _(GitHub cobanov/PS5LM)_

## 🧩 Transformer sebagai Tumpukan Toko Memori, dan Kapasitasnya Bisa Dihitung

Ini tulisan yang bikin saya berhenti dan membaca ulang. **Alex Wang** menulis esai berjudul "You could have invented transformers from memory", dengan satu kalimat pembuka yang langsung menohok: **setiap lapisan adalah toko memori**. _(alexwang.ai)_

Pertanyaannya sederhana dan justru itu yang bikin penasaran. Model bahasa hari ini bisa mengingat fakta-fakta samar dari seluruh penjuru dunia. Bagaimana caranya mereka mengingat begitu banyak informasi? Dan **seberapa banyak** sebenarnya yang bisa mereka simpan? _(alexwang.ai)_

Untuk menjawab itu, Wang memperkenalkan satu besaran yang jadi tulang punggung seluruh tulisan: **interference-to-signal ratio**. Semakin banyak memori yang disimpan, semakin besar gangguan antar-memori saat kita mencoba mengingat satu di antaranya. Jumlah memori yang bisa ditampung sebelum gangguan itu sebesar sinyalnya disebut **kapasitas**. _(alexwang.ai)_

Dimulai dari yang paling dasar: **toko memori outer product**, di mana bobot W adalah penjumlahan dari hasil kali luar antara value dan key. Untuk menyimpan memori baru, cukup tambahkan satu hasil kali luar ke bobot yang ada. Ini bukan abstraksi ngawur — bentuk yang sama dipakai untuk state **linear attention**, yang juga disebut **fast weights**. _(alexwang.ai)_

Masalahnya muncul saat mengingat. Kalau key-nya ortonormal, gangguan nol dan recall-nya sempurna. Tapi ruang berdimensi dk hanya punya **dk arah ortogonal**, jadi recall sempurna mustahil begitu jumlah memori melebihi dimensi key. Dengan key acak, rasio gangguan terhadap sinyal tumbuh sekitar **akar(M/dk)**, dan kapasitasnya mentok di sekitar **M ≈ dk**. Artinya: simpan memori sebanyak dimensi key-mu, dan gangguannya sudah sebesar sinyalnya. _(alexwang.ai)_

Dari situ Wang membangun tangga. Kalau memori disimpan lebih hati-hati — dengan menyelesaikan masalah regresi linear alih-alih menambah hasil kali luar tanpa memedulikan yang lain — kita dapat **toko memori linear optimal**, yang kapasitasnya **dua kali lipat**, sekitar **2dk**. Kalau recall dibuat lebih selektif lewat nonlinearitas, kita sampai ke **MLP** dan akhirnya **self-attention**. _(alexwang.ai)_

Angka lompatannya yang bikin saya berhenti membaca: dengan key berdimensi **64**, kapasitas naik dari sekitar **64 memori** di lapisan linear, ke sekitar **2.700** di MLP, lalu **lebih dari sejuta** di self-attention. _(alexwang.ai)_

Yang membuat tulisan ini terasa istimewa adalah caranya menutup: Wang menyertakan aplikasi interaktif di mana kamu bisa menggeser jumlah memori yang disimpan dan melihat sendiri batang-batang gangguan menumpuk sampai recall-nya gagal. Ada juga kode di GitHub. _(alexwang.ai)_

Tapi… ada tapinya, dan ini penting untuk kamu yang bukan peneliti. Tulisan ini soal **intuisi dan heuristik**, bukan hasil pengukuran model produksi. Angka kapasitas itu diturunkan dari asumsi key dan value acak dengan panjang serupa, dan Wang sendiri mencatat bahwa untuk kasus yang lebih longgar — misalnya memilih token yang paling mungkin, bukan mengembalikan vektor value yang bersih — kapasitas sebuah matriks d×d bisa mencapai sekitar **d²** fakta. Jadi pakai angka-angka itu sebagai kerangka berpikir, bukan spesifikasi. _(alexwang.ai)_

## 📌 Kenapa Tiga Hal Ini Nyambung

Kalau dibaca berurutan, tiga cerita di atas sebenarnya satu tema: **apa yang tersimpan, dan seberapa bisa dipercaya**.

Kurva ECDSA adalah cerita tentang parameter yang tersimpan tanpa jejak asal-usul, dan kekhawatiran itu baru hilang setelah jejaknya ditemukan. DeepSeek V4.1 Flash adalah cerita tentang model yang menyimpan kapasitas besar di balik komputasi kecil per token. Dan tulisan Alex Wang memberi kerangka untuk memikirkan keduanya: memori selalu punya kapasitas, dan di atas kapasitas itu, gangguan mulai mengalahkan sinyal.

Bedanya, pada kriptografi kita menuntut jawaban yang bisa diverifikasi sampai bit terakhir. Pada model bahasa, kita masih menebak-nebak seberapa besar gangguannya.
