---
title: 'Karang memutih pulih dalam hitungan hari, game mau dijadikan milik bukan lisensi'
description: 'Rangkuman Hacker News 18 Oktober 2026: karang yang memutih pulih penuh dalam delapan minggu setelah menempel karang sehat dari individu yang sama, RUU Power To The Players Act mau mengubah pembelian game jadi hak milik, Lean 4.35 membawa empat kernel tambahan, dan DeepSeek menjual API pencarian 0,75 dolar per 1.000 request.'
pubDate: 2026-10-18T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- Karang yang sudah memutih bisa pulih penuh dalam **delapan minggu** asal ditempelkan ke karang sehat dari **individu yang sama**, menurut studi di _Science Advances_ yang diberitakan Nature pada 14 Oktober. Pada minggu kedua, populasi simbion di karang yang pulih berlipat dua setiap **empat hari**. _(Nature)_
- Anggota DPR AS **Ritchie Torres** dari distrik ke-15 New York mengajukan **Power To The Players Act**, yang memerintahkan FTC menyusun aturan agar pembelian game berarti **milik**, bukan lisensi, plus kewajiban menyediakan mode offline sebelum server dimatikan. _(Tom's Hardware)_
- **Furifont** menaruh furigana langsung di dalam file font lewat ligatur, jadi bacaan kanji muncul tanpa JavaScript, tanpa plugin, dan tanpa mengubah teks aslinya. _(furifont.antfu.me)_
- **Lean v4.35.0** sekarang membawa perintah `lake check` dan **empat kernel tambahan** — nanoda, lean4lean, con-leche, dan con-ron. Salah satunya, con-leche, ditulis dan dibuktikan konsisten oleh **Claude** di bawah pengawasan Joachim Breitner di Lean FRO. _(Leo de Moura)_
- **DeepSeek** membuka Search dan Fetch API dengan tarif **$0,75 per 1.000 request sukses**. Request gagal, hasil kosong, dan timeout tidak ditagih. _(DeepSeek API Docs)_

## 🪸 Karang yang hampir mati pulih karena menyentuh tetangganya yang sehat

Ini cerita paling banyak dibicarakan di Hacker News hari ini: **493 poin dan 105 komentar**. Dan kali ini judulnya ngga berlebihan.

Laut yang memanas membuat karang stres, lalu mengeluarkan alga simbiotik yang hidup di jaringannya — alga yang memberi warna sekaligus sebagian besar nutrisi. Prosesnya disebut _bleaching_. Tanpa alga, karang praktis kelaparan.

Tim peneliti menunjukkan proses itu bisa dibalik sepenuhnya, dan cepat. Hasilnya terbit di _Science Advances_ pada 14 Oktober.

Awalnya kecelakaan. Awal 2025, **Stephen Palumbi** dari Hopkins Marine Station di Pacific Grove, California, melihat dua fragmen karang di tangki tanpa sengaja bersentuhan. Di titik sentuhan itu, warna mulai merembes ke cabang yang pucat. Ia mengaku belum pernah melihat hal seperti itu sebelumnya, seperti dikutip Nature.

**Danny Collins**, yang saat itu meneliti penyebaran penyakit lewat kontak karang untuk disertasi doktornya di Stanford, lalu menguji apakah alga juga bisa menyebar.

Eksperimennya sederhana: sepuluh pasang fragmen **Pocillopora damicornis** dari individu yang sama. Lima pasang dibiarkan bersentuhan, lima pasang dipisahkan beberapa milimeter. Hasilnya:

- Pasangan yang bersentuhan **pulih dalam delapan minggu**.
- Pada minggu kedua, populasi simbion **berlipat dua setiap empat hari** — jauh lebih cepat dari pemulihan alami di laut yang tercatat di studi sebelumnya.
- Setelah menempel satu minggu, cabang yang memutih bisa **pulih sendiri** walau sudah dipisahkan dari karang sehat.
- Pasangan yang dipisahkan beberapa milimeter **mati setelah 20 minggu**.

Mikroskop menunjukkan dua fragmen itu **menyatu lewat jembatan jaringan**, dan lewat jembatan itulah simbion pindah. Syaratnya ketat: penyatuan hanya terjadi pada fragmen dari **genet yang sama** — individu dengan susunan genetik identik. Fragmen dari spesies berbeda, bahkan dari hewan lain di spesies yang sama, tidak menyatu dan tidak menolong.

"Temuan baru yang luar biasa ini — bahwa pemulihan cepat dan penuh mungkin terjadi pada karang yang memutih — bisa menginspirasi solusi yang pada akhirnya bisa diskalakan," kata **Fiorenza Micheli**, ekolog kelautan di Stanford Center for Ocean Solutions dan salah satu penulis studi.

**Tapi… ada tapinya.** Ini eksperimen laboratorium, satu spesies, dan hanya berhasil antar fragmen dari individu yang sama. Terumbu di alam adalah mosaik genetik, bukan koloni seragam. Jadi "pulih dalam hitungan hari" di judul berita sebenarnya merujuk pada warna yang mulai kembali; pemulihan penuh tetap delapan minggu. Tetap menarik, tapi jangan bayangkan bisa menambal terumbu rusak dengan lem karang.

## 🎮 Kalau beli bukan memiliki, RUU ini mau mengubahnya

**Ritchie Torres**, anggota DPR AS dari distrik ke-15 New York, mengajukan **Power To The Players Act**. RUU ini mengarahkan **FTC** untuk menyusun regulasi soal kepemilikan game, dengan dua poin utama:

1. Membeli game berarti konsumen **memiliki** game itu, bukan sekadar lisensi untuk memainkannya.
2. Game dengan fungsi online **wajib menyediakan mode offline** sebelum server pendukungnya dimatikan.

"Di bawah RUU ini, membeli video game akan memberi konsumen kepemilikan atas game tersebut, bukan lisensi untuk memainkannya," bunyi rilis yang dikutip Tom's Hardware.

Torres bukan yang pertama. Senator negara bagian Pennsylvania **John Kane** sudah lebih dulu mengajukan **Protect Our Games Act**, yang mewajibkan penerbit menyediakan mode offline, server komunitas, atau **refund minimal 25 persen**.

Contoh yang dipakai Torres jelas: **NBA 2K25**, yang ditarik dari toko digital dan servernya dimatikan hanya dua tahun setelah rilis. Sebelumnya ada **The Crew** dari Ubisoft pada 2024 — game balap yang wajib online, dimatikan servernya, dan jadi tidak bisa dimainkan bahkan oleh orang yang baru membelinya. Kampanye **Stop Killing Games** lahir dari kasus itu.

Di sisi lain, pengacara Sony dalam gugatan class action yang sedang berjalan berargumen bahwa menekan tombol "purchase" jelas tidak membuat konsumen merasa memperoleh hak permanen, melainkan lisensi yang bisa dicabut.

**Tapi… ada tapinya.** Definisi dan detail konkret RUU ini belum dirilis. Belum jelas apakah hak memindahtangankan yang disebut Torres berlaku untuk pembelian digital, atau hanya untuk salinan fisik. Dan RUU di Kongres AS jauh dari kata pasti lolos — ini baru satu langkah, bukan kemenangan.

## 🔤 Font yang menyimpan furigana di dalam dirinya

Kalau kamu pernah belajar bahasa Jepang, kamu tahu masalahnya: kanji tidak memberi tahu cara membacanya, dan furigana — huruf kecil di atas kanji — biasanya butuh HTML tambahan atau _ruby annotation_.

**Furifont** memindahkan pekerjaan itu ke dalam font. Dibangun dari Source Han Sans atau Serif, satu langkah _build_ membaca kamus berisi ribuan kata lalu menggambar furigana ke dalam glyph baru. Hasilnya file font biasa. Tanpa JavaScript, tanpa plugin, jalan di mana pun font kustom didukung.

Cara kerjanya elegan: setiap kata punya **ligatur**. Kata 今日 jadi satu glyph dengan きょう di atasnya. Pertukaran terjadi saat teks digambar, jadi teks aslinya tidak berubah — masih bisa dicari, disalin, dan dibaca mesin.

Beberapa keputusan desainnya rapi:

- **Kata terpanjang didahulukan**, jadi 日本語 dipilih sebelum 日本.
- Kanji tunggal hanya diberi furigana kalau satu bacaan jelas paling mungkin. 大人気 bisa dibaca だいにんき atau おとなげ, jadi tidak diberi furigana sama sekali.
- Ada _variation selector_ untuk memaksa bacaan: VS226 untuk bacaan pertama, VS227 untuk bacaan kedua, VS225 untuk menghapus furigana.
- Tersedia empat keluarga: Sans dan Serif, masing-masing dengan furigana hiragana atau romaji.

**Tapi… ada tapinya.** Okurigana — kana yang mengikuti kanji, seperti 来る dan 来ない — tidak bisa ditangani font karena browser membentuk tiap skrip secara terpisah. Untuk itu tetap perlu anotasi JavaScript opsional. Situs seperti X dan GitHub juga memblokir pemuatan font dari domain lain, jadi di sana font harus dipasang di komputer. Dan pengakuan jujur dari pembuatnya: furigana bisa salah karena batasan font itu sendiri.

## ✅ Lean sekarang membawa empat kernel tambahan, satu di antaranya ditulis dan dibuktikan Claude

**Leonardo de Moura** mengumumkan Lean v4.35.0 membawa `lake check`: satu perintah yang mengekspor development kamu dan memeriksanya ulang dengan **leanchecker**, kernel resmi Lean tanpa semua beban di sekitarnya. Seluruh proses jalan di dalam sandbox.

Yang lebih menarik: Lean sekarang mengirim **empat kernel tambahan** — **nanoda**, **lean4lean**, **con-leche**, dan **con-ron**. Perintah `lake check --paranoid` menjalankan semuanya.

**con-leche** adalah kernel pertama untuk Lean yang ditulis dalam Lean dan **dibuktikan konsisten**. Implementasi dan pembuktiannya dikerjakan **Claude** (Fable dan Opus) di bawah pengawasan ketat **Joachim Breitner** di Lean FRO. Konsisten di sini berarti setiap environment yang diterima con-leche punya model dalam teori himpunan, mengikuti model teori tipe Lean dari Mario Carneiro. Pembuktiannya sendiri diperiksa kernel resmi Lean, dengan asumsi teori himpunan yang dipakai konsisten.

Hasilnya bukan cuma formalitas: pada ekspor Mathlib penuh, con-leche mengeksekusi **0,69 kali instruksi kernel resmi** dan memeriksa seluruh library dalam sekitar **100 detik** dengan delapan thread.

Karena con-leche masih bergantung pada compiler dan runtime tempat ia dibangun, Joachim memakai AI untuk menerjemahkannya ke Rust, lalu memakai **Aeneas** untuk membuktikan versi Rust itu menyempurnakan algoritma con-leche. Itu **con-ron**. Logikanya: bug ketidak-soundness yang tersisa kemungkinan besar ada di compiler atau runtime Lean, dan sangat kecil kemungkinannya bug yang sama juga ada di compiler Rust. Memeriksa dengan keduanya memberi perlindungan berlapis.

Motivasinya masuk akal dan agak menakutkan: agen AI sangat efektif menemukan kerentanan di perangkat lunak, **termasuk kernel Lean** — ada dua postmortem pada 1 dan 24 Agustus. Skalanya juga bikin cara lama tidak lagi memadai: FLT dari Anthropic lebih dari **13 juta baris kode**, Mathlib **2,5 juta**, Tau Ceti sudah lewat **3 juta**, dan repo teorema Courtade–Kumar di atas **50 juta** baris.

## 🔎 DeepSeek jual search API 0,75 dolar per 1.000 request

**DeepSeek** membuka dua API baru: **Search** (`POST /v1/tools/search`) yang memakai mesin pencari internal mereka, dan **Fetch** (`POST /v1/tools/fetch`) yang mengambil satu halaman dan mengembalikannya sebagai Markdown. Keduanya JSON mentah dengan autentikasi bearer yang sama seperti API model.

Tarifnya **$0,75 per 1.000 request sukses** untuk masing-masing API. Yang penting: request hanya ditagih kalau mengembalikan HTTP 200 **dan** menghasilkan sesuatu — Search harus mengembalikan array `results` tidak kosong, Fetch harus mengembalikan konten halaman. Request gagal, hasil kosong, dan timeout tidak ditagih. Parameter `count` juga tidak memengaruhi harga.

Batasnya 5 QPS per akun untuk masing-masing API, dihitung terpisah, jadi traffic ke satu API tidak memakan kuota yang lain.

Satu catatan kecil yang gampang terlewat: kalau kamu memakai DeepSeek lewat **DeepSeek Harness, Claude Code, atau Codex**, panggilan tool di sisi server saat ini **gratis**, dan penagihan per request baru mulai 1 November 2026 pukul 00.00 waktu Beijing.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini justru bukan karangnya, tapi pola yang muncul berulang: **hal-hal yang dulu dianggap mustahil ternyata cuma menunggu alat yang tepat**.

Misteri seed kurva ECDSA pecah dalam setengah jam. Kernel Lean yang biasanya diperiksa manusia sekarang bisa diperiksa empat kernel lain sekaligus, dan salah satunya ditulis serta dibuktikan oleh model AI. Di sisi lain, agen AI juga yang menemukan celah di kernel itu. Pedangnya dua arah, dan itu justru tanda sistemnya sehat.

Untuk RUU game, saya optimis tapi hati-hati. Definisi "kepemilikan" adalah tempat semua RUU seperti ini biasanya mati. Kalau definisinya kabur, penerbit tinggal menambahkan satu klausul dan semuanya kembali seperti semula.

Untuk Furifont, saya kagum pada kesederhanaannya. Menyelesaikan masalah furigana tanpa JavaScript itu ide yang tidak terpikirkan banyak orang, dan hasilnya jalan di mana saja.

## Kalian sendiri bagaimana?

Kalau ada satu game yang servernya dimatikan dan kamu masih ingin memainkannya, game apa itu? Dan menurut kalian, RUU seperti Power To The Players Act realistis, atau cuma jadi bahan kampanye?

## 🔗 Sumber

- [Bleached corals thrive within days when touching healthy neighbour — Nature](https://www.nature.com/articles/d41586-026-03266-x)
- [Collins et al., Rapid coral bleaching recovery via symbiont transfer, Science Advances 12, eaeh1580 (2026)](https://doi.org/10.1126/sciadv.aeh1580)
- [New York rep announces game ownership bill — Tom's Hardware](https://www.tomshardware.com/video-games/new-york-rep-announces-game-ownership-bill-that-would-require-consumer-ownership-rather-than-sale-of-licenses-would-also-require-publishers-to-keep-the-game-functional-after-support-ends)
- [Furifont — furigana built into the font](https://furifont.antfu.me/)
- [Furifont di GitHub](https://github.com/antfu/furifont)
- [Lean now ships with verified kernels — Leonardo de Moura](https://leodemoura.github.io/blog/2026-10-15-lean-now-ships-with-verified-kernels/)
- [DeepSeek Search & Fetch API Docs](https://api-docs.deepseek.com/guides/search/)
- [Pele — Mermaid diagrams as themeable SVG](https://pele.run/)
- [Diskusi Hacker News](https://news.ycombinator.com/)
