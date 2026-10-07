---
title: '🧠 Daily Hacker News — 7 Oktober 2026: OpenAI Rilis 722 Manuskrip Matematika, Nobel Kimia untuk Teka-teki Cermin Molekul, dan JPEG XL Akhirnya Masuk Chrome'
description: 'Papan Hacker News hari ini didominasi rilis matematika OpenAI: 722 manuskrip yang diklaim menjawab ribuan soal terbuka, dengan 1.056 poin dan 1.080 komentar. Disusul Nobel Kimia 2026 untuk Henri Kagan dan Kenso Soai, serta Chrome 155 yang resmi mengirimkan decoder JPEG XL berbasis Rust.'
pubDate: 2026-10-07T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Tech']
---

Ada satu postingan yang hari ini menyerap hampir seluruh energi papan Hacker News: repo matematika OpenAI. Skornya **1.056 poin dengan 1.080 komentar** — rasio komentar-per-poin yang tidak biasa, tanda bahwa yang diperdebatkan bukan sekadar "keren atau tidak", melainkan "bisa dipercaya atau tidak". Di bawahnya ada Nobel Kimia dan satu kabar pelepasan fitur browser yang ditunggu web developer selama bertahun-tahun.

## 🧮 OpenAI Merilis 722 Manuskrip Matematika dari Model Internal

Ini cerita utamanya. OpenAI menerbitkan posting **["Sharing AI progress in mathematics"](https://openai.com/index/sharing-ai-progress-in-mathematics/)** (tertanggal 6 Oktober 2026), dan melepas seluruh materi pendukungnya ke repo publik [github.com/openai/math](https://github.com/openai/math). Diskusi HN-nya ada di [item 49984923](https://news.ycombinator.com/item?id=49984923).

Angka yang bisa dikutip langsung dari halaman resmi dan README repo:

- Katalog saat ini berisi **722 manuskrip** yang dikelompokkan menjadi **372 families** — satu "family" bisa memuat hasil utama, argumen pendamping, konsekuensi, atau pembuktian alternatif.
- Model internal yang belum dirilis dipakai untuk menghasilkan hampir semua hasil ini. Rata-rata **satu hasil memakai komputasi setara sekitar tiga jam "thinking" ChatGPT Pro**. Sepanjang evaluasi, model diberi **sekitar 4.000 soal**.
- Sebagian pembuktian **diformalkan di Lean**, bahasa pemrograman yang memungkinkan pembuktian matematika diperiksa komputer. README menegaskan tidak semua manuskrip punya formalisasi, dan mereka akan menambahkannya bertahap.
- Sepuluh **ringkasan penalaran** model ikut dipublikasikan, mencakup topik seperti eksponen irasionalitas π, konjektur Mahler, dugaan Kaplansky dalam karakteristik dua, formula Mézard–Parisi untuk spin glass, hingga sistem Vlasov–Maxwell relativistik tiga dimensi.
- Ada pengecualian dari prosedur tetap, antara lain pekerjaan pada **zero-free region fungsi zeta Riemann** dan pembuktian **Hodge Conjecture untuk varietas abelian CM**. Tulisan untuk zero-free region **Re(s) > 11/12** diedit manusia agar lebih mudah dibaca.

**Poin pentingnya justru soal kejujuran rilis.** README-nya menyatakan sendiri bahwa koleksi ini "memuat hasil pada tahap verifikasi yang berbeda" dan bahwa **"beberapa hasil yang belum diformalkan bisa memiliki masalah"** — dengan janji akan segera diperbaiki. OpenAI juga menyebut mereka berkonsultasi dengan **Advisory Group on Mathematics and Artificial Intelligence** di Institute for Advanced Study untuk menyusun praktik rilis, dan sedang menjajaki repositori alternatif yang dikelola komunitas.

Itulah kenapa thread komentarnya jauh lebih besar dari biasanya. Yang jadi pertanyaan bukan apakah modelnya bisa menghasilkan matematika baru, melainkan **siapa yang memverifikasi, seberapa lama, dan dengan standar apa**. Repo itu sendiri memberi alat untuk menjawab: folder `preprints/`, library `lean/`, katalog `formalization.yaml`, plus petunjuk Comparator untuk pemeriksaan tambahan.

🔗 [Posting resmi OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) | [Repo GitHub openai/math](https://github.com/openai/math) | [Diskusi HN](https://news.ycombinator.com/item?id=49984923)

## 🏅 Nobel Kimia 2026: Kagan dan Soai Menjawab Misteri "Cermin" Molekul

Posting NobelPrize.org ini mengumpulkan **133 poin | 16 komentar** — skor tinggi dengan rasio komentar rendah, pola khas berita penghargaan: orang mengapresiasi, bukan berdebat.

Menurut [siaran pers resmi The Royal Swedish Academy of Sciences](https://www.nobelprize.org/prizes/chemistry/2026/press-release/), Nobel Kimia 2026 jatuh kepada:

- **Henri B. Kagan** — Université Paris-Sud, Prancis. Lahir 1930 di Boulogne-Billancourt. PhD 1960 dari Collège de France. Professor Emeritus.
- **Kenso Soai** — Tokyo University of Science, Jepang. Lahir 1950 di Hiroshima. PhD 1979 dari University of Tokyo. Professor Emeritus.

Dengan kutipan resmi: _*"for the discovery of non-linear effects and autocatalysis in asymmetric organic synthesis"*_. Hadiah tahun ini **12 juta krona Swedia**, dibagi sama rata antara keduanya.

**Masalah yang mereka pecahkan, dengan analogi tangan.** Sebagian molekul — seperti asam amino — hadir dalam dua versi yang merupakan cerminan satu sama lain, seperti tangan kiri dan tangan kanan. Kimia kehidupan bersifat **homokiral** (dari bahasa Yunani: "tangan yang sama"): protein di sel Anda hanya memakai satu versi, yang satunya hampir tidak pernah muncul di alam. Ketika kimiawan mencoba membuat reaksi yang bisa memproduksi keduanya, hasilnya selalu **proporsi yang sama persis**. Ini bukan sekadar keingintahuan akademis — untuk obat-obatan, hanya satu cerminan yang punya efek yang diinginkan.

Kronologinya, menurut siaran pers Nobel:

- **1986** — Kagan mengambil langkah pertama, menemukan cara baru memanipulasi reaksi kimia sehingga bisa menghasilkan kelebihan satu cerminan **lebih besar dari yang sebelumnya dianggap mungkin**.
- **1995** — Soai menerbitkan publikasi kunci yang mendesain reaksi kimia **pertama** yang berpotensi homokiral.
- **2003** — Soai akhirnya berhasil: sebuah reaksi yang hanya membentuk **satu** dari dua cerminan yang mungkin. NobelPrize.org menulisnya tegas — **selain kehidupan itu sendiri, tidak ada yang pernah mencapai ini sebelumnya**.

Kutipan ketua Komite Nobel untuk Kimia, **Heiner Linke**: _"Henri Kagan dan Kenso Soai telah memberikan solusi atas misteri kimia yang berusia lebih dari satu abad: bagaimana homokiralitas bisa muncul secara spontan. Reaksi kimia yang mereka kembangkan spektakuler."_

🔗 [Siaran pers Nobel Kimia 2026](https://www.nobelprize.org/prizes/chemistry/2026/press-release/) | [Diskusi HN](https://news.ycombinator.com/item?id=49990470)

## 🖼️ Chrome 155 Akhirnya Mengirim JPEG XL — Decoder-nya Ditulis Ulang di Rust

Posting blog Chrome for Developers ini mengumpulkan **189 poin | 94 komentar**, skor tertinggi kedua hari ini. Yang menarik: ini bukan fitur yang tiba-tiba muncul, tapi hasil tekanan komunitas web developer yang bertahun-tahun.

Dari [blog resmi Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) (tertanggal 6 Oktober 2026), ditulis **Luca Versari**, **Moritz Firsching**, dan **Philip Jägenstedt**:

- Chrome mulai mengirim dukungan dekode untuk format gambar **JPEG XL (`.jxl`) sejak Chrome 155**.
- Keunggulannya yang disebut di blog: **kompresi 30–50% lebih baik dari JPEG**, kompresi lossless, dukungan HDR bawaan, dan transcoding JPEG tanpa kehilangan data.
- Tim Chrome menyarankan **mencoba AVIF dan JPEG XL keduanya**; JPEG XL menurut mereka paling berguna untuk kompresi high-fidelity atau lossless, terutama foto, atau saat dekode progresif bertingkat dibutuhkan.
- Alasan jeda panjang di balik keterlambatannya: decoder gambar adalah **salah satu permukaan serangan paling kritis** di browser modern karena memproses data biner dari jaringan langsung di dalam proses renderer. Decoder warisan C++ rentan pada out-of-bounds read, heap overflow, dan use-after-free.
- Solusinya: **`jxl-rs`**, implementasi decoder JPEG XL **murni Rust**. Untuk tetap cepat, mereka memakai SIMD lewat fitur `target_feature_11` yang harus distabilkan lebih dulu, plus lapisan abstraksi `jxl_simd` yang terinspirasi library C++ Highway.
- Hasil pengujian mereka, termasuk fuzzing dan AI review kode: **tidak ditemukan satu pun bug memory safety** sepanjang riwayat implementasi.
- Sisi ekosistem: keputusan mengirim JPEG XL **berbasis feedback developer**, terlihat dari Interop Process di mana ini jadi proposal populer pada 2026.

Kalimat yang paling sering dikutip di thread: bahwa decoder memory-safe yang **kira-kira** secepat alternatif non-memory-safe jauh lebih masuk akal daripada menukar keamanan dengan performa besar. Itu inti dari lima bulan pekerjaan yang tersembunyi di balik satu baris changelog.

🔗 [Blog resmi Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) | [Diskusi HN](https://news.ycombinator.com/item?id=49981381)

## 🎮 Angka Pendukung: Playground Google dan Proyek Iseng yang Menghibur

Dua postingan menengah hari ini layak dicatat singkat karena datanya jelas.

**Google Playground** ([blog.google](https://blog.google/innovation-and-ai/technology/ai/playground-experimental-gaming-platform/)) mendapat **35 poin | 19 komentar** — platform pembuatan game berbasis browser tanpa kode, memakai Gemini, Nano Banana, dan Lyria. Cerita yang sama juga naik ke daftar TechMeme hari ini.

**"Write Like It's 1866: LLMs Relearn Telegraphese"** ([fiveminutesforward.com](https://fiveminutesforward.com/post/2026-10-04-telegraph-test/)) mengumpulkan **27 poin | 17 komentar**. Premisnya sederhana namun menarik: bahasa telegraf era 1866 — yang dibatasi biaya per kata dan karenanya sangat padat — dipakai sebagai batasan untuk menguji seberapa efisien LLM menyampaikan informasi. Rasio komentar yang tinggi terhadap skor kecil biasanya menandakan thread yang isinya lelucon cerdas, bukan perdebatan teknis.

---

**Catatan metodologi:** skor, jumlah komentar, dan judul diambil dari API resmi Hacker News (`hacker-news.firebaseio.com`) pada saat snapshot run ini. Seluruh klaim faktual — kutipan Nobel, angka manuskrip, dan detail teknis Chrome — disalin dari halaman resmi yang ditautkan di atas, bukan dari ingatan. Jika ada perbedaan angka antar sumber, sumber resmi (NobelPrize.org, openai.com, developer.chrome.com) yang kami utamakan.
