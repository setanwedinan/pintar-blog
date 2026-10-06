---
title: '🖥️ Daily Hacker News — 6 Oktober 2026: Nobel Fisika untuk IceCube, Mistral 1T Parameter "le Chonk", dan Polars 2.0 Menyalip DuckDB'
description: 'Papan Hacker News hari ini dibuka oleh Nobel Fisika 2026 untuk Francis Halzen dan IceCube, disusul peluncuran Mistral Large 4 yang dijuluki "le Chonk", Polars 2.0 yang mengklaim mengalahkan DuckDB di TPC-H, dan JetBrains yang mencatat rugi bersih pertama dalam sejarahnya.'
pubDate: 2026-10-06T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Tech']
---

Hari ini papan Hacker News punya campuran yang jarang: satu penghargaan Nobel, satu model bahasa raksasa dari Eropa, satu pelepasan versi yang mengubah peta mesin analitik data, dan satu tanda tanya soal ekonomi perusahaan alat pengembang. Berikut ceritanya, lengkap dengan angka poin dan komentar saat snapshot diambil.

## 🏅 Nobel Fisika 2026 untuk Francis Halzen dan IceCube

Nobel Prize in Physics 2026 diberikan kepada **Francis Halzen** dengan kutipan resmi dari NobelPrize.org:

> _"for decisive contributions to the IceCube Neutrino Observatory and the discovery of high-energy neutrinos of astrophysical origin."_ — **Prize share: 1/1**

Artinya seluruh hadiah tahun ini jatuh ke satu nama, bukan dibagi. Yang dihargai bukan satu penemuan sesaat, melainkan sebuah observatorium: **IceCube Neutrino Observatory**, fasilitas yang dibangun untuk menangkap neutrino — partikel nyaris tanpa massa yang lewat begitu saja menembus materi tanpa jejak.

Nuansa yang menarik: tahun lalu, Nobel Kedokteran atau Fisiologi 2026 jatuh ke bidang optogenetika (dibahas di post HN kami sebelumnya), dan sekarang fisika astropartikel yang naik. Dua tahun berturut-turut sains "tak terlihat" mendapat sorotan.

**244 poin | 75 komentar** — salah satu skor tertinggi hari ini.

🔗 [Nobel Prize in Physics 2026](https://www.nobelprize.org/prizes/physics/2026/) | [Diskusi HN](https://news.ycombinator.com/item?id=49976265)

## 🐈 Mistral Large 4: Model 1 Triliun Parameter yang Dijuluki "le Chonk"

Postingan berjudul **"Mistral Large 4"** di docs.mistral.ai duduk di puncak papan hari ini dengan **304 poin | 130 komentar** — skor tertinggi yang kami catat pada run ini. Ada juga thread terpisah untuk [pengumuman resmi Mistral](https://news.ycombinator.com/item?id=49978116) (**79 poin | 9 komentar**).

Dari halaman resmi Mistral, ini fakta-fakta yang bisa dikutip:

- **ML4 adalah model 1 triliun parameter natively multimodal dengan 49 miliar parameter aktif.** Arsitekturnya MoE (Mixture of Experts) — "open-weight hybrid instruct-and-reasoning" yang menyatukan kemampuan instruksi, penalaran, dan agentic dalam satu model.
- Julukan tidak resminya adalah **"le Chonk"** (dari meme kucing gendut); sebutan resminya tetap Mistral Large 4.
- Mistral mengklaim ML4 **"significantly outperforming any open-weight model developed in the US or Europe"**, dan pada beberapa domain seperti **visual grounding** mereka menyebutnya melampaui model tertutup kelas frontier.
- **Pelatihan dilakukan from scratch di 3.800 GPU NVIDIA Grace Blackwell**, di datacenter Mistral sendiri di Eropa. Sebagian besar data latihnya multibahasa, mencakup **lebih dari 160 bahasa**, termasuk semua bahasa resmi Uni Eropa.
- **Bobot (weights) baru akan dirilis akhir bulan ini.** Saat ini statusnya **public preview** — bisa dicoba lewat Mistral Studio.
- Harga yang tertera di halaman model: **$1,36 per juta token input** dan **$4,18 per juta token output**.
- Angka yang agak berbeda antar sumber: TechMeme mengutip The Deep View yang menyebut **4.000 GPU Grace Blackwell**, sementara halaman resmi Mistral menulis **3.800 GPU**. Kami catat keduanya apa adanya — sumber resmi cenderung lebih akurat, tapi perbedaannya kecil dan mungkin mencerminkan revisi.

Yang menarik dari sisi strategi: Mistral menjual narasi **"AI sovereignty"** — model ini disajikan di infrastruktur milik mereka sendiri, di bawah hukum Eropa, dan dirancang agar organisasi bisa menjalankannya sendiri. Mistral menyebut kasus keamanan siber secara spesifik: penolakan di level penyedia bisa memblokir riset kerentanan yang sah, dan kehilangan akses ke kapabilitas di tengah insiden justru jadi risiko keamanan tersendiri.

🔗 [Dokumentasi resmi Mistral Large 4](https://docs.mistral.ai/models/mistral-large-4-0) | [Pengumuman resmi](https://mistral.ai/news/mistral-large-4/) | [Diskusi HN](https://news.ycombinator.com/item?id=49977979)

## 📊 Polars 2.0: SQL Jadi Warga Kelas Satu, dan Klaim Menyalip DuckDB

**"Release of Polars 2.0"** (**108 poin | 17 komentar**) adalah pelepasan versi yang ditulis langsung oleh pencipta Polars, **Ritchie Vink**, pada 6 Oktober 2026.

Poin-poin yang disebut di posting itu:

- **Dukungan out-of-core (spill-to-disk) versi awal sudah aktif** — artinya dataset yang lebih besar dari RAM bisa diproses lewat disk.
- **SQL diperlakukan sebagai first class citizen.** Optimalisasi engine-nya diperbaiki: join reordering, common-subplan elimination yang lebih baik, serta dynamic predicates dan bloom filters.
- Klaim benchmark: Polars menyebut dirinya **memimpin DataFusion dan DuckDB di benchmark TPC-H dan TPC-DS**, diuji terhadap **DuckDB 1.5.6**, **DuckDB 2.0 alpha** (`2.0.0.dev2610011535`), dan **DataFusion 54.0.0**.
- Metodologi yang mereka tulis: dijalankan di **c7a.4xlarge (16 vCPU, 32 GB RAM)** dan **c7a.metal (192 vCPU, 384 GB RAM)**, setiap query 5 kali dalam kondisi hot, proses terpisah per query, timeout 60 detik, cache file dibersihkan antar engine.
- Catatan kejujuran dari mereka sendiri: DataFusion **timeout di TPC-DS q72** (dan sekali di q67) serta **kehabisan memori di TPC-H q18** pada c7a.4xlarge, sehingga query-query itu dikeluarkan dari hasil untuk semua engine.
- Angka skalabilitas: dari 16 ke 192 vCPU di SF100, Polars **3,8x lebih cepat di TPC-H** dan **2,2x di TPC-DS**; DuckDB 1.5.6 hanya 3,2x dan 1,9x.
- Peringatan yang mereka tulis sendiri: benchmark ini **tidak sebanding dengan hasil TPC-H/TPC-DS resmi** karena tidak memenuhi ketentuan benchmark tersebut.

Pelepasan ini juga membawa **dtype `Map`** baru dan sikap yang lebih ketat soal dtype serta eksplisititas — dengan alasan yang menarik: feedback lebih cepat berarti iterasi dengan AI jadi lebih cepat juga.

🔗 [Polars 2.0 release post](https://pola.rs/posts/release-polars-2/)

## 💸 JetBrains Mencatat Rugi Bersih Pertama dalam Sejarah Terlacak

**"JetBrains reported a net financial loss first time in its tracked history"** (**212 poin | 232 komentar**) — thread ini punya jumlah komentar tertinggi kedua di papan hari ini, tanda bahwa komunitas developer punya banyak hal untuk dikatakan.

Sumbernya adalah **Helgi Library**, yang menyusun data dari **laporan keuangan statutori JetBrains s.r.o. yang diajukan ke Czech business register** (bukan laporan konsolidasi), dalam mata uang **CZK juta** dengan standar **Czech GAAP**, mencakup 2005–2025.

Angka pendapatan yang terlihat di halaman tersebut — **16.008 CZK juta pada 2025**, naik dari 15.065 pada 2024, 13.400 pada 2023, 11.907 pada 2022, dan 9.926 pada 2021. Jadi pendapatannya masih tumbuh. Yang jadi sorotan komunitas adalah baris laba: untuk pertama kalinya dalam rentang data yang terlacak, hasilnya negatif.

Konteks perusahaan yang dicatat Helgi Library: **JetBrains s.r.o., kantor pusat di Praha, Ceko, didirikan 2002, nomor registrasi 26502275**.

Angka pertumbuhan lain yang ada di tabel: **Total Equity Growth 2025 tercatat -47,0%**, sementara **Total Liabilities Growth 2025 sebesar 27,7%**. Kami sebutkan apa adanya sebagai data tabel, bukan tafsir.

🔗 [Helgi Library — JetBrains](https://www.helgilibrary.com/companies/jetbrains) | [Diskusi HN](https://news.ycombinator.com/item?id=49977072)

## 🌊 Sains: Alam Jauh Lebih Rapuh dari yang Kita Kira

Posting **"Nature's capacity to 'bounce back' when species are lost is vastly overestimated"** (**91 poin | 33 komentar**) membawa temuan dari studi yang diterbitkan di jurnal **_Nature Ecology & Evolution_**.

Menurut siaran phys.org, riset ini dipimpin **King's College London dan Imperial College London**, bersama **Natural History Museum** dan **The Alan Turing Institute**. Skalanya disebut yang terbesar sejenis:

- **423 studi** yang sudah dipublikasikan digabungkan,
- **222.829 titik data** dari ekosistem darat, air tawar, laut, dan estuari,
- database akhirnya **lebih dari dua kali lipat** upaya terbesar sebelumnya,
- mencakup **23 kategori** jasa dan fungsi ekosistem.

Kesimpulannya: gagasan bahwa ekosistem punya "cadangan" cukup banyak sehingga kehilangan sedikit spesies tidak berdampak besar — disebut **functional redundancy** — **ternyata dilebih-lebihkan**. Alih-alih mendatar setelah beberapa spesies hadir, manfaat biodiversity naik terus seiring bertambahnya spesies. Studi itu memperingatkan bahwa hilangnya biodiversity bisa mengancam ketahanan pangan dan perlindungan iklim, karena ekosistem yang beragam menyediakan penyerbukan, pemurnian air, penyimpanan karbon, dan pengendalian hama alami.

Detail yang paling sering dikutip: **laut disebut berpotensi jadi pihak yang paling banyak kehilangan.**

🔗 [phys.org](https://phys.org/news/2026-10-nature-capacity-species-lost-vastly.html)

## 🦀 Bonus: Gleam Tidak Lagi Mengompilasi ke Source Erlang

**"Gleam doesn't compile to Erlang source anymore"** (**119 poin | 36 komentar**) merayakan **Gleam v1.19.0**. Ditulis oleh **Louis Pilfold** pada 5 Oktober 2026.

Perubahan intinya: code generator Erlang Gleam ditulis ulang total oleh **Giacomo Cavalieri**. Kalau sebelumnya Gleam menghasilkan **source code Erlang**, sekarang ia menghasilkan **_Erlang abstract forms_** — representasi antara yang dipakai compiler Erlang, dikodekan dengan **external term format** biner, sehingga kode bisa dimuat langsung dan melewati separuh depan compiler Erlang.

Tiga konsekuensi yang mereka sebutkan:

1. **Build time turun signifikan** — benchmark `langcompilebench` (100 modul × 100 fungsi) membandingkan v1.17.0 dengan v1.19.0.
2. **Metadata lokasi kini akurat ke source Gleam asli**, bukan ke source Erlang hasil generate. Artinya nomor baris di BEAM crash report dan stacktrace jadi tepat, bukan sekadar menunjuk fungsi terdekat.
3. **Istilah "transpiler" sebagai hinaan tidak berlaku lagi** — mereka bahkan memberi catatan kaki khusus soal ini.

🔗 [Gleam v1.19.0](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)

## 📌 Cerita Lain yang Layak Dibuka

- **Meta's Muse Is an Adorable Privacy and Security Dumpster Fire** (**67 poin | 17 komentar**) — [Techdirt](https://www.techdirt.com/2026/10/06/metas-muse-is-an-adorable-privacy-and-security-dumpster-fire/) merangkum rentetan masalah produk agen AI Meta, Muse: dari zero-day yang memungkinkan pengintaian pengguna Mac, agen yang menjual barang Marketplace jauh di bawah harga wajar dan membocorkan alamat rumah penjualnya, sampai Muse yang bisa ditipu memberi akses root hanya dengan berpura-pura menjadi agen Muse. Persoalan akses pesan pribadi dilaporkan sampai membuat **Apple mengubah pengaturan privasi macOS** untuk membatasi penyalahgunaan Full Disk Access oleh agen AI.
- **Show HN: Jotbus** (**4 poin | 1 komentar**) — [jotbus.com](https://jotbus.com/), scratchpad terenkripsi bersama untuk coding agent. Masih sepi suara, tapi konsepnya menarik untuk diikuti.
- **Show HN: Parseable** (**3 poin**) — [parseable.com](https://www.parseable.com), observability datalake open source yang disebut menangani 100 juta time-series per menit.
- **Tapo (Rust/Python) kini berbicara protokol TPAP TP-Link** (**6 poin**) — [mihai.dinculescu.dev](https://mihai.dinculescu.dev/posts/tapo-speaks-tpap/), untuk yang ingin mengontrol perangkat TP-Link tanpa aplikasi resmi.

## 💡 Insight Hari Ini

Ada pola yang aneh dan menarik di papan hari ini: **lima cerita teratas semuanya soal kekuatan yang tersembunyi di balik permukaan.**

Nobel Fisika diberikan bukan karena melihat sesuatu, tapi karena membangun alat untuk menangkap partikel yang **tidak terlihat** — neutrino. Mistral merilis model 1 triliun parameter yang dari luar hanya terasa seperti API biasa. Polars 2.0 menang bukan dengan tampilan baru, tapi dengan **optimizer** — bagian yang tidak pernah dilihat pengguna. JetBrains angkanya tumbuh di pendapatan, tapi berbalik di laba: bagian yang tidak pernah diperiksa orang sampai ada yang memeriksanya. Dan studi biodiversity hari ini bilang hal yang sama soal alam: **cadangan yang kita asumsikan ada di balik layar ternyata jauh lebih tipis dari perkiraan.**

Kalau ada satu pelajaran praktis untuk hari ini: periksa asumsi yang tidak pernah kamu periksa. Di benchmark, di laporan keuangan, di ekosistem — maupun di arsitektur sistem yang kamu bangun.

## 📌 Sumber Lengkap

- [Nobel Prize in Physics 2026 — Francis Halzen](https://www.nobelprize.org/prizes/physics/2026/)
- [Mistral — Introducing Mistral Large 4](https://mistral.ai/news/mistral-large-4/)
- [Mistral — dokumentasi model ML4](https://docs.mistral.ai/models/mistral-large-4-0)
- [Polars — Release of Polars 2.0](https://pola.rs/posts/release-polars-2/)
- [Helgi Library — JetBrains](https://www.helgilibrary.com/companies/jetbrains)
- [phys.org — Nature's capacity to 'bounce back'](https://phys.org/news/2026-10-nature-capacity-species-lost-vastly.html)
- [Gleam — doesn't compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)
- [Techdirt — Meta's Muse](https://www.techdirt.com/2026/10/06/metas-muse-is-an-adorable-privacy-and-security-dumpster-fire/)
