---
title: 'OpenAI klaim buktikan Kakeya di semua dimensi, dan 145 GB model 3D diambil tanpa izin'
description: 'Rangkuman Hacker News 27 Oktober 2026: OpenAI mengumumkan tiga hasil riset — konjektur local smoothing dan Kakeya di semua dimensi, Exponential Time Hypothesis yang terbukti salah, dan bukti eksistensi QCD — dengan tiga cara rilis yang berbeda, crawler berlabel Roblox menarik 145,5 GB model 3D dari Open3DLab dan SmutBase, Python membuang JIT eksperimentalnya setelah PEP 836 ditarik, dan Wikipedia menyaring tulisan AI yang turun dari 20 persen ke 15 persen artikel baru.'
pubDate: 2026-10-27T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- **OpenAI mengumumkan tiga hasil** di matematika, ilmu komputer, dan fisika: bukti konjektur _local smoothing_ di semua dimensi (yang juga menyelesaikan Kakeya dan konjektur restriksi Stein), sanggahan terhadap **Exponential Time Hypothesis**, dan bukti eksistensi **QCD** serta penyelesaian Model Standar. **1.011 poin | 556 komentar**. _(openai.com)_
- **Crawler berlabel Roblox** membaca **18.926 halaman proyek** dalam 26.429 permintaan selama 34 jam, lalu mengunduh **1.027 berkas dari 712 proyek — 145,5 GB** — termasuk konten dewasa, tanpa memedulikan robots.txt, ToS, dan lisensi. **303 poin | 190 komentar**. _(open3dlab.com)_
- **Python membuang JIT eksperimentalnya.** PEP 836 ditarik pada 19 Oktober setelah dewan pengarah minta jaminan yang tidak bisa dipenuhi penulisnya. **129 poin | 60 komentar**. _(lwn.net)_
- **WikiProject AI Cleanup** memperkirakan **15–16 persen artikel dan draf baru** di Wikipedia bahasa Inggris masih tulisan AI pada awal 2026, turun dari sekitar 20 persen di akhir 2025. **123 poin | 59 komentar**. _(spectrum.ieee.org)_

## 🧮 Tiga hasil, tiga cara merilis

Postingan paling ramai hari ini datang dari OpenAI, dan bukan dalam bentuk peluncuran produk. Pada 26 Oktober 2026 mereka mengumumkan tiga hasil riset sekaligus, lalu — ini bagian yang tidak biasa — mengaku belum tahu cara terbaik mengumumkannya.

Kalimat pembukanya cukup jujur untuk ukuran pengumuman lab AI: _"Our release process continues to evolve in response to feedback from the associated academic communities."_ Mereka menyebut manuskrip-manuskrip itu **"a form of raw research data"** — data riset mentah — bukan temuan yang sudah matang.

Karena itu mereka menghubungi pakar luar dan meminta mereka jadi _shepherd_: mengorganisir kelompok untuk memahami hasilnya. Tiga pakar memberi tiga saran berbeda, dan OpenAI menjalankan ketiganya sekaligus sebagai eksperimen:

1. **Matematika** — rilis keluaran AI apa adanya, biarkan peneliti mengorganisir sendiri usaha menjelaskannya.
2. **Ilmu komputer** — bentuk kelompok kolaborator luar untuk menjelaskan hasil, sambil membuat keluaran AI terbuka untuk siapa pun.
3. **Fisika** — bentuk kelompok kolaborator luar dan **serahkan keputusan rilis bahan kepada mereka**.

Hasil pertama menyangkut **konjektur local smoothing** yang diajukan Sogge pada 1991: tentang perilaku gelombang saat mereka memusat. Intuisinya, pemusatan paling ekstrem harus berumur pendek — jumlah pemusatan pada waktu acak selalu jauh lebih kecil daripada kasus terburuk. Konjektur ini penting karena implikasinya lebar; ia menyiratkan **konjektur Kakeya** dan **konjektur restriksi Stein**.

Jalur sebelumnya: Guth, Wang, dan Zhang membuktikannya untuk dua dimensi spasial pada 2019, lalu Wang dan Zahl membuktikan konjektur Kakeya di tiga dimensi pada 2025. Menurut OpenAI, model mereka menghasilkan bukti konjektur local smoothing **di semua dimensi**, dan karena itu sekaligus menyelesaikan Kakeya serta restriksi Stein di semua dimensi. Buktinya berdiri di atas **persamaan diferensial parsial bantu** yang baru.

Tanggalnya disebut spesifik: keluaran AI diperoleh **18 Oktober 2026**, diformalkan di **Lean** sehari kemudian, dan baru setelah itu mereka menghubungi pakar. Baik tulisan bahasa alami maupun bukti Lean-nya dirilis di repo GitHub publik mereka.

Hasil kedua lebih provokatif. **Exponential Time Hypothesis (ETH)** adalah konjektur lama tentang kompleksitas komputasi satisfiability formula Boolean — masalah yang berkerabat dekat dengan P vs NP. ETH dianggap benar oleh banyak orang dan sudah dipakai di ratusan makalah untuk menurunkan hasil kekerasan komputasi bersyarat di berbagai bidang: teori graf, biologi komputasi, basis data, geometri komputasi.

Menurut OpenAI, sistem mereka **membuktikan ETH salah**, dan hasilnya diverifikasi di Lean. Kelompok yang akan memverifikasi dan menjelaskannya dipimpin **Russell Impagliazzo** dan **Ramamohan Paturi** (UC San Diego) serta **Ryan Williams** (MIT). Dua nama pertama, bersama Francis Zane, adalah pengusul asli ETH; Williams pernah menyanggah versi-versi kuat dari ETH.

Detail waktunya: sanggahan bahasa alami ditemukan **16 Oktober 2026**, diformalkan di Lean **17 Oktober**. Kelompok itu meminta seluruh data mentah dibuka, dan OpenAI setuju untuk membiayai sebuah konferensi guna membahas implikasi hasil ini bagi bidang tersebut.

Hasil ketiga ada di fisika: bukti eksistensi rigor secara matematis untuk teori medan kuantum berinteraksi yang mengandung medan gauge dan fermion di **empat dimensi**, termasuk **Quantum Chromodynamics (QCD)** dan penyelesaian terpadu Model Standar. Sebagai submasalah, pekerjaan ini juga memuat bukti eksistensi **teori Yang–Mills murni** — bagian dari Millennium Prize Problem di bidang itu. Dasarnya adalah pendekatan Balaban dalam teori medan kuantum konstruktif.

Kelompok yang memandu: **David Gross**, bersama Michael Douglas, Arthur Jaffe, Igor Klebanov, dan Nikita Nekrasov. Gross adalah salah satu penerima Nobel Fisika 2004 untuk kebebasan asimtotik dalam teori Yang–Mills — mekanisme yang justru menjadi kunci eksistensi teori-teori ini sebagai objek matematis yang rigor. Jaffe merumuskan masalah Millennium Yang–Mills bersama Witten.

Urutan kerjanya lebih panjang: bukti bahasa alami untuk eksistensi Yang–Mills keluar **9 September 2026**, bukti untuk QCD **18 September 2026**, dan formalisasi Lean-nya baru selesai **16 Oktober 2026**. Untuk hasil fisika ini, kelompoknya memilih **menahan** artefak buatan AI dan menulis ulang sendiri.

Keempat prinsip yang mereka sebut untuk kolaborasi ini: transparansi (tanpa NDA), **tidak mengambil kredit akademik** atas penemuan model internal, pengakuan bagi kelompok yang menyusun pemahaman, dan independensi (partisipasi sukarela dan tidak dibayar). Ada juga **5 juta dolar** ke Simons Foundation untuk lokakarya dan program yang membantu peneliti memahami hasil buatan AI.

**Yang paling layak diperhatikan justru pengakuannya sendiri.** OpenAI menulis bahwa memilih _shepherd_ awal "necessarily shapes who gets involved first and creates asymmetry of information" — memilih penjaga gerbang pertama otomatis menentukan siapa yang masuk lebih dulu dan menciptakan ketimpangan informasi. Itu bukan kalimat pemasaran.

## 📦 145,5 GB model 3D, diambil tanpa bertanya

Kisah kedua datang dari tiga situs komunitas 3D: Open3DLab, SFMLab, dan SmutBase. Pada 15 dan 16 Oktober 2026, menurut tulisan admin mereka, sebuah crawler berjalan melalui hampir seluruh katalog mereka.

Crawler itu memakai satu user agent di setiap permintaan: `trellis2-data-sourcing/1.0 (3D foundation model research; [redacted]@roblox.com)`. Semuanya dari satu alamat AWS.

Angka dari log mereka:

- **18.926 halaman proyek** dibaca — praktis seluruh katalog — dalam **26.429 permintaan** selama **34 jam**.
- **1.027 berkas dari 712 proyek** diunduh utuh: **145,5 GB**.
- Dari jumlah itu, **364 berkas (54,8 GB) dari 224 proyek** berasal dari SmutBase, situs yang isinya khusus konten dewasa.
- Dengan proyek SFMLab yang ditandai dewasa, **345 dari 712 proyek (62,6 GB)** adalah konten dewasa.
- **423 dari 712 proyek** berlisensi non-komersial saja.

Crawler itu mengambil robots.txt mereka, lalu mengabaikannya. Mengabaikan juga Terms of Service yang melarang scraping. Dan tidak membedakan konten dewasa dari yang lain — proporsi pengambilan konten dewasa setara dengan keseluruhan katalog. Faktor pembatasnya bukan etika, tapi sekadar kuota server unduhan gratis mereka.

Tim Open3DLab menyadarinya **18 Oktober** dan memblokir akses pagi itu juga. Crawler kembali **19 Oktober** — semua permintaan ditolak server. Ia tetap mencoba, dengan pola yang rapi mengikuti jam kerja: berhenti sebentar sekitar makan siang, selesai menjelang akhir hari kerja CEST. Pada **20 Oktober** ia kembali pukul 08.00 dan permintaan mereda perlahan sejak siang, seperti menguji batas rate limiting, lalu berhenti sekitar pukul 15.00. Dua email ke Roblox tidak dibalas.

Tulisan itu memisahkan spekulasi dari fakta, dan itu patut dihargai. Fakta: alamat email di user agent milik seorang peneliti yang termasuk di antara 40-an penulis makalah Cube — sistem generatif 3D/4D Roblox yang diperkenalkan Maret 2025, dengan model bentuk pertama dilatih pada sekitar **1,5 juta aset 3D** dari dataset berlisensi dan publik seperti Objaverse, plus aset Creator Store yang pembuatnya ikut (_opt-in_). Spekulasi mereka: crawler ini kemungkinan mengumpulkan data latih atau evaluasi untuk pekerjaan model fondasi 3D Roblox. Mereka menegaskan tidak bisa membuktikannya, dan tidak tahu apakah berkas itu masuk ke model.

Mereka juga tidak menyalahkan peneliti itu secara pribadi: "A data-collection run like this is a company's decision, and the responsibility for it is Roblox's."

**Bagian yang paling tidak nyaman** ada di paragraf mereka sendiri: lebih dari sepertiga pengguna harian Roblox berusia **di bawah 13 tahun** pada 2025 menurut angka perusahaan itu sendiri, sementara aturannya melarang konten seksual. Crawler itu mengambil 224 proyek dari situs yang khusus konten dewasa, dan 121 proyek lain yang ditandai dewasa di SFMLab. Kesimpulan mereka: bukan berarti Roblox sengaja mengumpulkan konten dewasa, tapi "as far as our logs show, nobody checked".

Konteks yang mereka tambahkan: sebulan sebelum menemukan crawler ini, **Meta-ExternalAgent** membuat sekitar **380.000 permintaan** ke situs mereka dan memuat **211.000 halaman proyek**; mereka sudah memblokirnya juga. Lalu daftar yang lebih besar — Meta disebut mengunduh sedikitnya **81,7 TB buku bajakan** lewat torrent menurut dokumen pengadilan; Nvidia dikabarkan menghubungi Anna's Archive untuk akses cepat koleksi buku bajakan menurut gugatan class action yang diamandemen Januari 2026; dan Anthropic mendapat persetujuan penyelesaian **1,5 miliar dolar** pada Juli 2026, sekitar **3.000 dolar per buku**.

Pertanyaan yang mereka ajukan ke Roblox ada enam, dan semuanya pantas ditanyakan ke perusahaan mana pun yang menjalankan crawler seperti ini: apakah kalian yang menjalankannya, untuk apa datanya, mengapa robots.txt dan ToS diabaikan, apakah ada yang memeriksa situs mana yang akan dikunjungi, apakah berkasnya akan dihapus, dan apakah lisensi pencipta akan dihormati mulai sekarang.

## 📖 Wikipedia, dan tulisan yang makin sulit dikenali

Kisah ketiga soal mesin pengenalan teks AI yang makin tumpul di sisi lain.

**WikiProject AI Cleanup** adalah usaha sukarela yang diluncurkan **2023** untuk menemukan dan menghapus materi buatan AI di Wikipedia yang melanggar pedoman situs itu. Salah satu pendirinya, **Ellia Lebleu** — kini menempuh PhD di bidang AI di Inria Center, University of Rennes, Prancis — berbicara dengan IEEE Spectrum.

Dulu, kata Lebleu, tulisan AI mudah dikenali dari klise yang mencolok. Sekarang tidak lagi, dan proyek itu bergerak ke bentuk yang lebih halus.

Angka yang paling konkret: Lebleu bekerja dengan perusahaan deteksi AI **Pangram** untuk memperkirakan proporsi konten buatan AI. Ia mengujinya pada konten Wikipedia dari sebelum ChatGPT dan tidak menemukan positif palsu, sehingga hasilnya bisa dianggap batas bawah yang konservatif. Pada **akhir 2025**, Pangram menandai sekitar **20 persen** artikel dan draf baru sebagai buatan AI. Pada **awal 2026**, angkanya turun ke **15–16 persen**.

Tapi Lebleu sendiri menahan kesimpulan: mereka belum tahu apakah penurunan itu efek kebijakan baru atau karena model makin kuat dan Pangram belum sempat beradaptasi. Wikipedia bahasa Inggris memang sudah melarang editor memakai LLM untuk menghasilkan artikel. Sebagian besar konten buatan AI, katanya, datang dari editor pemula — karena itu aturannya dibuat sangat terlihat di pesan selamat datang, bantuan penyuntingan, dan saran.

Visi jangka panjangnya tidak nostalgic: ia melihat hubungan simbiosis kuat antara Wikipedia dan model AI — "Yesterday, AI was something to clean up. Today, it's a tool to help us with the cleanup. Tomorrow, it will be the air we breathe."

## 🐍 Python membuang JIT-nya

Cerita keempat adalah kasus klasik fitur besar yang masuk tanpa jalur persetujuan.

JIT eksperimental CPython ditambahkan **Brandt Bucher** pada awal 2024 untuk rilis **3.13**. Biasanya fitur sebesar itu baru masuk setelah dewan pengarah menyetujui PEP jalur standar. Bucher memberi presentasi di sprint pengembang inti dan mengumumkan niatnya menggabungkan fitur — tapi belum menulis atau mengajukan PEP. Ia baru didorong melakukannya oleh anggota dewan pengarah **Thomas Wouters**, yang saat itu juga menjadi release manager Python 3.13.

Yang akhirnya terbit adalah **PEP 744**, sebuah PEP informasional — hanya memberi informasi, bukan konsensus formal untuk melanjutkan proyek.

Pada **Juni** tahun ini dewan pengarah meminta PEP jalur standar: jaminan, komitmen pemeliharaan, dan dampaknya bagi redistributor. Tenggatnya enam bulan; kalau gagal, kode JIT harus dihapus dari cabang utama CPython. Bucher, Savannah Ostrowski, dan Ken Jin menyusun **PEP 836** ("JIT Go Brrr: The Path to a Supported JIT Compiler for CPython") dan menerbitkannya 3 Juli.

Diskusinya panjang. Dewan menilai PEP itu menjawab semua pertanyaan mereka, "although perhaps some less convincingly than others", lalu memberi daftar sepuluh poin yang ingin dilihat dijelaskan atau setidaknya didiskusikan dan ditolak — dari dampak memori sampai keamanan. Dua keberatan yang paling konkret: PEP menyebut tinjauan kompatibilitas baru pada kandidat rilis **Python 3.17**, sekitar **Agustus 2028**, dan dewan menilai itu "way, way too late" — harus jadi proses berkelanjutan sejak sekarang. Dewan juga khawatir keputusan desain diambil tanpa tinjauan kritis dari kelompok pengembang yang lebih luas.

Pada **19 Oktober**, Ostrowski mengumumkan PEP ditarik. Alasannya bukan penolakan teknis: "The Steering Council rightly sets a high bar for a proposal of this scope, and we don't feel we have the personal bandwidth to carry the current version forward." Implementasi referensinya akan tetap tersedia dan ditautkan dari PEP yang ditarik itu.

## ⚙️ Hukum Brooks, versi agen AI

Dua tulisan lain yang naik hari ini sebenarnya bicara soal hal yang sama dari dua arah.

**Jan van den Berg** menulis di j11g.com tentang hukum Brooks di era agen AI. Ia mengutip hukum aslinya dari buku Frederick P. Brooks Jr. tahun **1975**, _The Mythical Man-Month_, yang lahir dari pengalamannya mengelola proyek IBM OS/360: _"Adding manpower to a late software project makes it later."_

Pertanyaannya: apakah masih berlaku kalau "manpower" bisa berarti agen? Sekilas tidak — onboarding selesai dalam milidetik, tidak ada stand-up, tidak ada politik kantor. Tapi van den Berg berargumen hukum itu tidak hilang, hanya bermutasi: _"Baby Problem"_ tetap ada — sembilan agen tetap tidak bisa melahirkan bayi dalam satu bulan. Overhead tidak lenyap, hanya berpindah: dari mengelola orang menjadi mengelola agen. Seseorang masih harus mendefinisikan "selesai", meninjau kode, menangkap halusinasi, dan menyambung potongannya. Orang itu kamu.

Usulan pembaruannya untuk 2026: _"Adding agents to a project with unclear requirements gets you the wrong answer faster."_

**Jake Voytko** di bitlog.com mengambil sisi lain: software memang memburuk, tapi dulu jauh lebih buruk. Argumennya, kalau produksi kode naik 10x tanpa penurunan tingkat kesalahan 10x, aplikasi produksimu memang lebih buggy. Tapi nostalgia "software dulu lebih baik" salah alamat. Ia mengingatkan bahwa Windows pernah mencapai pangsa pasar sekitar **95 persen**, dan Blue Screen of Death adalah bagian hidup sehari-hari — satu driver periferal yang buruk cukup untuk meruntuhkan sistem. Dulu ada lantai kualitas karena software cuma punya satu kesempatan dikirim: masuk floppy, dibakar ke CD, dikirim lewat pos, dan versi itu harus jalan.

Ada anekdot yang bagus soal ini. Saat ia bergabung dengan tim Google Docs pada **2010**, mereka memasang instrumentasi pada pintasan Ctrl+S — hanya untuk mencatat berapa kali ditekan, karena pintasan itu tidak melakukan apa pun, Docs menyimpan otomatis. Hasilnya: Ctrl+S masuk **lima besar aksi non-editing**, persis di belakang hal-hal seperti memindahkan kursor dengan tombol panah. Itu trauma kolektif satu generasi pengguna komputer, terlihat di metrik.

## Tapi… ada tapinya

Empat cerita di atas, kalau dibaca bersama, membentuk satu pola yang agak mengganggu.

**Pertama, soal verifikasi.** Tiga hasil OpenAI semuanya diformalkan di Lean, dan itu memang lebih baik daripada PDF berisi klaim. Tapi formalisasi Lean membuktikan bahwa bukti itu valid terhadap pernyataan yang diformalkan — bukan bahwa pernyataan yang diformalkan itu persis konjektur yang dimaksud, dan bukan bahwa hasilnya sudah melewati tinjauan sejawat. Yang paling jujur soal ini justru OpenAI sendiri: mereka menyebut manuskripnya "raw research data", dan untuk fisika mereka menyerahkan keputusan rilis ke kelompok luar yang memilih menahan artefak AI-nya.

**Kedua, soal siapa yang memeriksa.** Kasus Open3DLab bukan skandal tentang satu peneliti. Ini tentang proses yang berjalan otomatis tanpa ada yang bertanya "situs apa ini" sebelum crawler diarahkan. Kalau sebuah perusahaan yang platformnya dipakai puluhan juta anak bisa mengunduh 62,6 GB konten dewasa karena tidak ada yang memfilter di tahap pengumpulan, maka filter di tahap produk adalah satu-satunya yang tersisa — dan itu bukan jaminan, itu penutup lubang.

**Ketiga, soal siapa yang menanggung biaya.** Model AI makin pintar menulis, dan yang pertama terdampak bukan perusahaan besar, tapi situs komunitas kecil dengan server unduhan gratis — yang koneksinya tersumbat beberapa hari, dan yang berkasnya tetap ada di dataset meski proyeknya sudah dihapus dari situs.

Dan **keempat**, soal JIT Python: kadang keputusan teknis yang benar bukan soal performa, tapi soal siapa yang punya waktu untuk memeliharanya selama bertahun-tahun. Itu jawaban yang jarang masuk headline, tapi paling sering menentukan umur sebuah proyek.

Pertanyaan buat kalian: kalau sebuah lab AI merilis bukti matematika yang sudah diformalkan mesin, apakah itu cukup untuk kalian anggap "terbukti" — atau tetap butuh manusia yang membacanya dari awal sampai akhir? Dan untuk kasus Roblox: sanksi seperti apa yang masuk akal untuk pengambilan data yang melanggar robots.txt, kalau pemilik situsnya bukan perusahaan besar?

## 🔗 Sumber

- OpenAI, Working with academic communities to build scientific understanding (26 Oktober 2026) — https://openai.com/index/building-scientific-understanding-with-academic-communities/
- Diskusi HN "Three new discoveries in mathematics, computer science, and physics" (1.011 poin) — https://news.ycombinator.com/item?id=50251344
- Open3DLab, Roblox downloaded 145 GB of models from our sites (26 Oktober 2026) — https://open3dlab.com/news/roblox-downloaded-145-gb-of-models-from-our-sites/
- Diskusi HN kasus Roblox (303 poin) — https://news.ycombinator.com/item?id=50256985
- IEEE Spectrum, Inside Wikipedia's Cleanup of AI-Generated Content (21 Oktober 2026) — https://spectrum.ieee.org/wikipedia-wikiproject-ai-writing-cleanup
- Diskusi HN Wikipedia AI Cleanup (123 poin) — https://news.ycombinator.com/item?id=50257326
- LWN, Python's experimental JIT to be removed — https://lwn.net/SubscriberLink/1102102/0c00e4d550f25f8c/
- Diskusi HN Python JIT (129 poin) — https://news.ycombinator.com/item?id=50257419
- Jan van den Berg, The Mythical Man-Month in the age of AI (27 Oktober 2026) — https://j11g.com/the-mythical-man-month-in-the-age-of-ai
- Diskusi HN Mythical Man-Month (274 poin) — https://news.ycombinator.com/item?id=50255298
- Jake Voytko, Software may be getting worse, but it used to be horrible (27 Oktober 2026) — https://www.bitlog.com/2026/10/27/software-may-be-getting-worse-but-it-used-to-be-horrible/
- Diskusi HN bitlog (138 poin) — https://news.ycombinator.com/item?id=50257548
