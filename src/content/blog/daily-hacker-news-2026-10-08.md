---
title: '🧠 Daily Hacker News — 8 Oktober 2026: Margaret Hamilton Wafat di Usia 90, OpenAI Tarik 3 Makalah Matematika, dan Claude Haiku 5.5 Rilis'
description: 'Papan Hacker News hari ini menyatukan dua kutub: Margaret Hamilton, perempuan yang menulis perangkat lunak pendaratan Apollo, meninggal pada usia 90. Di ujung lain, repo matematika OpenAI yang sempat jadi bintang minggu ini mulai menarik makalah — tiga sekaligus, karena satu kesalahan tanda.'
pubDate: 2026-10-08T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Tech']
---

Hari ini papan Hacker News menampilkan dua kutub sekaligus. Di satu sisi ada kabar kehilangan: **Margaret Hamilton**, orang yang menulis perangkat lunak yang membawa manusia pertama ke bulan, meninggal pada usia 90 — dan postingan itu memuncaki papan dengan 1.835 poin. Di sisi lain ada proses yang jarang terlihat publik: **repo matematika OpenAI menarik tiga makalahnya sendiri** setelah satu kesalahan tanda ditemukan. Dan di antara keduanya, satu rilis model murah yang biayanya turun sekitar 75%.

## 🕊️ Margaret Hamilton, 1936–2026: Orang yang Menulis Kode Pendaratan Apollo

Kabar ini datang dari [MIT News](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007) (7 Oktober 2026), dan jadi postingan dengan skor tertinggi hari ini di papan Hacker News: **1.835 poin** ([item 49998895](https://news.ycombinator.com/item?id=49998895)).

Hamilton meninggal pada **30 September**, di usia **90 tahun**. Ia dikenal sebagai **computer scientist yang memimpin tim rekayasa perangkat lunak di Instrumentation Lab MIT** selama program Apollo NASA — dan penulis **lebih dari 130 publikasi** yang membantu menegakkan _software engineering_ sebagai disiplin tersendiri. Ia bekerja di MIT dari **1959 hingga pertengahan 1970-an**, lalu menjadi pengusaha dan CEO.

Jejak kariernya, seperti dirangkum MIT News:

- Lahir di **Paoli, Indiana, 1936**. Mulai belajar matematika di **University of Michigan** (1955), pindah ke **Earlham College**, lulus BA matematika dengan minor filsafat pada **1958**. Pindah ke Boston pada **1959**.
- Pekerjaan pertamanya di MIT: posisi sementara di **departemen meteorologi**, bekerja bersama profesor **Edward N. Lorenz** pada perangkat lunak prediksi cuaca — titik masuk pertamanya ke pemrograman, dan pekerjaan itu ikut menginformasikan publikasi Lorenz tentang teori chaos.
- **1961**: programmer di **MIT Lincoln Laboratory** pada proyek **SAGE** (sistem pertahanan udara pertama AS), menulis perangkat lunak untuk komputer prototipe **AN/FSQ-7 (XD-1)**. Di sini ia mulai tertarik pada **keandalan perangkat lunak** — konsep yang saat itu hampir belum dijelajahi.
- **1965**: melamar setelah suaminya melihat iklan lowongan untuk mengembangkan perangkat lunak "mengirim manusia ke bulan". Ia diterima sebagai **programmer pertama proyek Apollo di MIT**, sekaligus **programmer perempuan pertama** di proyek itu.
- **1968**: sudah menjadi **assistant director yang memimpin tim Command and Service Module**, dengan **lebih dari 400 orang** mengerjakan perangkat lunak Apollo.

**Dua momen yang paling sering dikutip** justru soal kegagalan yang bisa dicegah. Yang pertama "the Lauren error": putrinya, Lauren, saat berusia **empat tahun**, bermain dengan simulator command module di Instrumentation Lab dan mengaktifkan program pra-peluncuran **P01** saat simulator sedang dalam penerbangan — simulator pun crash. Hamilton membuat tambahan dokumentasi agar pengguna tidak menjalankan P01 saat terbang, dan mengusulkan perbaikan perangkat lunak — **usulannya ditolak** dengan alasan astronot terlatih tidak akan melakukan kesalahan itu. Pada misi **Apollo 8 (1968)**, hal itu justru terjadi: **Jim Lovell** tanpa sengaja menjalankan P01 saat penerbangan, dan data navigasi menghilang. Tim Hamilton dipanggil untuk memperbaikinya, dan usulannya kemudian diintegrasikan. Inilah contoh awal **"defensive programming"**.

Momen kedua, yang paling terkenal: pada **Apollo 11, Juli 1969**, beberapa saat sebelum modul Eagle mendarat, komputer onboard membunyikan alarm **error 1202** — komputer kelebihan beban akibat gangguan pada sebuah saklar perangkat keras. Tim Hamilton sudah membangun **perangkat lunak berbasis prioritas** yang bisa mematikan tugas latar yang tidak penting demi mengutamakan tugas kritis. Houston mempercayai perangkat lunak itu dan misi dilanjutkan. Dua orang berjalan di bulan.

Setelah Apollo mereda, **Instrumentation Lab lepas dari MIT menjadi Draper Laboratory**. Hamilton mendirikan **Higher Order Software (1976)**, lalu **Hamilton Technologies** sekitar satu dekade kemudian, dengan produk andalan **Universal Systems Language (USL)**.

Penghormatan yang ia terima sepanjang hidup, dari laporan yang sama: **Presidential Medal of Freedom 2016** dari Presiden **Barack Obama**, **NASA Exceptional Space Act Award 2003**, **Computer History Museum Fellow Award 2017**, **Intrepid Lifetime Achievement Award 2019**, dan induksi ke **National Aviation Hall of Fame 2022**. Foto terkenalnya — ia berdiri di samping tumpukan listing kode Apollo yang tingginya hampir setara tubuhnya — diambil di MIT pada **1969**. Pada **2015**, perangkat lunak Apollo itu ditambahkan utuh ke GitHub, dan pada **2017** ia menjadi **minifigure resmi Lego** lewat set _Women of NASA_.

Kutipan Hamilton kepada MIT News (2009) yang paling sering dibagikan ulang: _\"There was no second chance. We knew that. ... Looking back, we were the luckiest people in the world; there was no choice but to be pioneers.\"_

Ia meninggalkan putrinya **Lauren Hamilton**, menantu **Richard Selesnick**, dua cucu, empat cicit, serta saudara **John, David, dan Kathryn**. Layanan peringatan akan digelar musim semi di **Cambridge, Massachusetts**.

🔗 [Berita lengkap MIT News](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007)

## 📉 OpenAI Tarik Tiga Makalah Matematika — Satu Kesalahan Tanda, Tiga Korban

Kalau kemarin repo matematika OpenAI jadi bintang papan ini, hari ini bagian yang lebih penting muncul: **bagaimana mereka menangani kesalahan**. Postingan [github.com/openai/math](https://github.com/openai/math/blob/main/history.md) naik ke peringkat 6 dengan **187 poin dan 134 komentar** ([item 50003107](https://news.ycombinator.com/item?id=50003107)).

Menurut berkas `history.md` bertanggal **7 Oktober 2026**:

- Pada makalah **"Algebraicity of Weil classes on split abelian eightfolds"**, sebuah **kesalahan tanda** membuat argumen _stabilization-trace cancellation_ tidak valid — dan konstruksi itu dipakai **dua makalah lain yang bergantung padanya**. Akibatnya **tiga manuskrip ditarik sekaligus**:
  - _Algebraicity of Weil classes on split abelian eightfolds_
  - _Algebraicity of Kuga–Satake Correspondences for K3 Surfaces_
  - _The rational Hodge conjecture for products of K3 surfaces_
- Makalah yang ditarik kini membawa **notis yang menjelaskan celahnya** dan menautkan manuskrip yang diarsipkan.
- Selain itu, **14 manuskrip lain direvisi**: perbaikan bukti, koreksi pernyataan, hipotesis dan dependensi yang lebih jelas, serta satu koreksi sitasi usang. Rinciannya mencakup kelompok **"Lipschitz heights and Ashkin–Teller currents" (4 manuskrip)**, **"Kähler minimal model programs and abundance" (6 manuskrip)**, dan **"Taming and hypersymplectic deformation" (2 manuskrip)**.
- Sebagai konsekuensinya, **13 manuskrip tambahan diperbarui** untuk mengutip edisi revisi dari makalah pendamping.
- Progres formalisasi juga dilaporkan: **6 formalisasi baru plus 5 tambahan lain**, sehingga total hasil lini utama yang sudah diformalkan menjadi **300 dari 719, sekitar 42%**.

Bacaan strategisnya bukan soal "AI salah hitung". Yang ditunjukkan adalah **rantai dependensi**: satu argumen keliru bisa menyeret makalah lain yang berdiri di atasnya. Dan yang layak diapresiasi, penarikan itu **diinisiasi sendiri** dan didokumentasikan publik dalam berkas riwayat yang bisa diaudit siapa pun.

🔗 [Berkas history.md](https://github.com/openai/math/blob/main/history.md)

## ⚡ Claude Haiku 5.5: Model Kecil dengan Biaya Turun Sekitar 75%

Postingan dengan skor tertinggi kedua di papan hari ini — **953 poin dan 448 komentar** ([item 49996437](https://news.ycombinator.com/item?id=49996437)) — adalah rilis **Claude Haiku 5.5** dari [Anthropic](https://www.anthropic.com/claude-haiku-5-5) (7 Oktober 2026).

Anthropic menyebutnya model kecil **termurah, tercepat, dan paling mampu** yang pernah mereka rilis, dirancang untuk beban **volume tinggi dan sensitif biaya**: ringkasan, pemadatan konteks, kueri basis data, dan klasifikasi. Menurut catatan kaki di halaman rilis, Haiku 5.5 **dihargai 90% lebih rendah** dari Haiku 4.5 untuk permintaan hingga 100.000 token, dan **50% lebih rendah** untuk permintaan di atas 100.000 token — secara rata-rata sekitar **75% lebih murah** untuk menjalankan pekerjaan yang sama.

Angka benchmark yang bisa dikutip langsung dari halaman resmi:

- **GDPval-AA v2.1 (knowledge work)**: 1620 — dibanding Haiku 4.5 (735), GPT-6 Luna (1437), dan Sonnet 5.5 (1840).
- **AA-Briefcase v1.1**: 1578 — Haiku 4.5 614, GPT-6 Luna 1336, Sonnet 5.5 1824.
- **OSWorld 2.1 (computer use, offline subset)**: 72,4% — Haiku 4.5 15,7%, GPT-6 Luna 48,9%, Sonnet 5.5 83,9%.
- **Humanity's Last Exam**: 45,9% tanpa tools dan 57,4% dengan tools.
- **Terminal-Bench 4.0 (agentic coding)**: 39,2%.
- **FrontierCode 1.1 (Main)**: 46,4%.

Haiku 5.5 juga jadi **model kelas Haiku pertama dengan pengaturan _effort_ yang bisa disesuaikan**, sehingga pengguna bisa memilih antara menekan biaya atau mengejar kecerdasan. Anthropic sekaligus **memangkas setengah harga pembacaan cache Sonnet 5.5** (membuat Sonnet 5.5 sekitar **20% lebih murah** untuk sebagian besar pekerjaan agentic) dan memperkenalkan **kredit API bulanan** untuk pelanggan Claude Max dan Team. Untuk developer, SDK Python dan TypeScript mereka kini mendukung **computer use dan browser use** dalam beta.

Bacaan praktisnya: ini bukan perlombaan model terpintar, melainkan **perlombaan biaya per tugas**. Kalau model kecil sudah mendekati performa model besar di tugas berulang, keputusan arsitektur berubah — banyak tugas tidak perlu naik ke model mahal.

🔗 [Pengumuman resmi Anthropic](https://www.anthropic.com/claude-haiku-5-5)

## 🎨 Bonus: Opus 5.5 Diberi Satu Prompt dan Enam Jam untuk Memvisualkan _Invisible Cities_

Postingan yang muncul di papan depan hari ini (**125 poin, 55 komentar**, [item 50004790](https://news.ycombinator.com/item?id=50004790)) adalah eksperimen dari [blog Quesma](https://quesma.com/blog/invisible-cities-one-shot/) yang membandingkan model pada satu tugas desain interaktif.

Prompt-nya sengaja brutal: _\"Make a three.js (pnpm) visualization of all Invisible Cities by Italo Calvino. Don't ask questions, it is a one-shot task. You have 6h of work, use it until it becomes a masterpiece.\"_

Hasilnya, menurut catatan penulis:

- **GPT-6 Astra** (via Codex): selesai **53 menit** pada effort medium, sekitar **$10** token API — bekerja end-to-end, tapi dengan banyak "AI design slop": konsep dan komentar yang ditambahkan tanpa dicek apakah benar-benar perlu.
- **Claude Opus 5.5** (via Claude Code): mengklaim memakai sekitar separuh dari enam jam, faktanya hanya **1 jam 25 menit**, namun dengan **6 subagent paralel** yang totalnya sekitar **7 agent-hours** — dengan biaya sekitar **$74** token API. Penulis menyebut hasilnya membuatnya "mesmerized", dengan catatan tetap ada ruang untuk lebih hemat waktu.

Sumber inspirasinya, novel **Italo Calvino** _Invisible Cities_, berisi **55 kota imajiner** yang masing-masing mewakili emosi atau keadaan pikiran. Penulis blog itu juga mencatat pernah mengerjakan proyek serupa pada **2019** memakai **GPT-2** untuk sebuah pertunjukan bercerita — dan menilai lompatan kemampuan antar-generasi model kini "drastis".

🔗 [Eksperimen lengkap di blog Quesma](https://quesma.com/blog/invisible-cities-one-shot/)

---

**Satu benang merah dari papan hari ini:** yang membuat perangkat lunak bertahan bukan kecerdasan yang menghasilkannya, melainkan disiplin yang memeriksanya. Hamilton membangunnya lewat perangkat lunak berbasis prioritas dan _defensive programming_; repo matematika OpenAI mempraktikkannya lewat penarikan terbuka ketika satu argumen runtuh.
