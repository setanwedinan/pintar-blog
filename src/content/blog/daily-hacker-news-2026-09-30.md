---
title: '🚀 GPT-6.1 Sol: Kecerdasan Nyaris Astra dengan Seperlima Harga, Plus Agen Dots yang Selalu Aktif'
description: 'Sorotan Hacker News hari ini: OpenAI merilis GPT-6.1 Sol dengan harga input 2 dolar per juta token, meluncurkan agen Dots yang selalu aktif, benchmark Livenerf untuk mendeteksi model yang diam-diam melemah, dan kisah NASA yang menghidupkan kembali SR-71A.'
pubDate: 2026-09-30T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'AI', 'Tech']
---

Rabu, 30 September 2026. Papan depan Hacker News hari ini bicara soal satu hal yang jarang muncul bersamaan: kecerdasan kelas atas dan harga yang turun. Ada model baru yang mendekati kemampuan paling mahal dengan seperlima biaya, ada agen yang tidak pernah tidur, dan ada pula orang yang membangun alat untuk membuktikan bahwa model favoritmu pelan-pelan jadi lebih bodoh.

Berikut rangkuman cerita paling ramai hari ini.

## 🚀 GPT-6.1 Sol: Nyaris Sekelas Astra, Seperlima Harganya

Cerita teratas hari ini, dengan 997 poin dan 873 komentar, adalah rilis **GPT-6.1 Sol** dari OpenAI. Posisinya jelas dari judul resminya: _Near-Astra intelligence for a fifth of the price_.

Menurut halaman rilis OpenAI, GPT-6.1 Sol adalah peningkatan dari GPT-6 Sol yang hampir menyamai kecerdasan GPT-6 Astra pada tugas pengkodean agentik, penggunaan komputer, dan pekerjaan profesional — dengan biaya token input dan output standar seperlima dari Astra.

Angka harganya yang paling banyak dibahas: **2 dolar per juta token input, 0,10 dolar per juta token input cache, dan 10 dolar per juta token output**. Input cache itu 95 persen lebih murah dari harga input standar, dan 50 persen lebih murah dari harga input cache GPT-6 Sol.

Beberapa hasil benchmark yang dicantumkan OpenAI:

- **DeepSWE v1.1** (tugas rekayasa perangkat lunak di basis kode nyata): GPT-6.1 Sol menyamai GPT-6 Astra dengan biaya sekitar seperlima, sekaligus melampaui skor terbaik GPT-6 Sol sebesar 6,4 poin persentase pada effort penalaran dan biaya yang lebih rendah.
- **GDP.pdf** (menjawab pertanyaan profesional dari PDF kompleks): skornya lebih tinggi dari Opus 5.5 with fallbacks dengan biaya per tugas kurang dari setengahnya, dan mendekati performa GPT-6 Astra dengan biaya sekitar seperlima per tugas.
- **AutomationBench** (alur kerja bisnis multi-langkah): 2,2 poin persentase di atas Opus 5.5 pada effort penalaran medium dengan biaya sekitar sepertiganya, serta naik 4,8 poin persentase dari GPT-6 Sol pada setelan yang sama.
- **OSWorld 2.0** (offline set): mengalahkan GPT-6 Sol dengan selisih tujuh poin persentase pada effort maksimum dengan biaya kurang dari setengahnya, dan berada dalam 2,1 poin persentase dari Astra dengan biaya sekitar sepertujuh per tugas.
- **Terminal-Bench Science 0.1**: lebih dari dua kali lipat skor GPT-6 Sol pada effort maksimum. Di effort maksimum, biayanya 5,47 dolar per tugas, dibandingkan 23,21 dolar untuk Opus 5.5 dan 23,80 dolar untuk Astra. Meski begitu, GPT-6 Astra tetap mencetak skor tertinggi di antara model yang diuji, yaitu 68,1 persen.

Ketersediaannya: mulai hari ini untuk semua pengguna Plus, Pro, Business, Enterprise, dan Edu di ChatGPT Work serta Codex. Catatan penting — GPT-6.1 Sol **belum tersedia di Chat**. Developer bisa mengaksesnya lewat API OpenAI sebagai `gpt-6.1-sol`. Dalam beberapa hari ke depan, OpenAI juga akan menawarkan GPT-6.1 Sol Ultrafast dengan generasi token hingga 8 kali lebih cepat di Codex.

🔗 [Introducing GPT-6.1 Sol — OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/)

## 🤖 Dots: Agen yang Tidak Pernah Berhenti Bekerja

Di posisi ketiga dengan 685 poin dan 541 komentar, OpenAI memperkenalkan **Dots** — agen yang selalu aktif dan punya komputer awan sendiri.

Menurut halaman pengumumannya, Dots ditenagai GPT-6 Astra, belajar dari umpan balik sepanjang waktu, dan bisa bekerja menuju tujuan pengguna 24 jam sehari. Lewat ekosistem plugin, mereka bisa terhubung ke lebih dari 4.000 aplikasi. Dot bisa dihubungi lewat ChatGPT, Slack, atau Teams, dan pengguna dapat membuka komputer milik dot kapan saja untuk memeriksa pekerjaannya.

OpenAI menyebut peluncurannya bertahap untuk paket Pro, Business Premium, dan Enterprise di pasar yang memenuhi syarat. Mereka juga membagikan pratinjau _specialist dots_ yang punya identitas sendiri, untuk manajemen akses, perangkat keras yang disediakan IT, dan integrasi mendalam dengan sistem pencatatan perusahaan.

🔗 [Introducing Dots — OpenAI](https://openai.com/index/introducing-dots/)

## 🧪 Livenerf: Alat untuk Membuktikan Model Diam-diam Melemah

Dengan 744 poin dan 305 komentar, repo GitHub `ninjahawk/livenerf` jadi salah satu yang paling banyak diperdebatkan hari ini. Ini benchmark kecil, membosankan, dan _append-only_ yang menjawab satu pertanyaan: apakah sebuah model jadi lebih buruk setelah dirilis?

Motivasinya, menurut README-nya, adalah laporan berbulan-bulan bahwa Anthropic "men-nerf" model beberapa hari atau minggu setelah rilis — bisa berarti kuantisasi, model lebih kecil di balik nama yang sama, effort yang lebih rendah, atau perubahan routing. Bisa juga berarti tidak terjadi apa-apa dan orang hanya mencocokkan pola pada derau.

Jadwalnya berjalan: Hari 1 adalah 24 September 2026 pukul 22:10 UTC, sekitar 2,5 hari setelah peluncuran. Benchmark ini berjalan sekali sehari selama 30 hari — hari 1 sampai 10 sebagai baseline, lalu dua jendela 10 hari, sehingga panggilan pertama yang mungkin dilakukan sekitar 24 Oktober 2026.

Progres per 29 September 2026: **6 dari 30 hari terkumpul** (baseline 6 dari 10), tidak ada yang terlewat. Keenam hari menjalankan 90 sampel penuh pada hash harness yang sama. Metrik utamanya adalah selisih skor per item berpasangan terhadap baseline, dengan _clustered standard errors_, sehingga tingkat kesulitan item tidak ikut terhitung.

🔗 [ninjahawk/livenerf — GitHub](https://github.com/ninjahawk/livenerf)

## ⚡ Delhi Memangkas Susut Listrik dari 50 ke 5 Persen

Cerita favorit banyak orang hari ini (543 poin, 299 komentar) datang dari IEEE Spectrum. Delhi dilaporkan berhasil menurunkan susut listrik dari **lebih dari 50 persen pada 2002 menjadi 5 sampai 6 persen pada 2026** — setara Prancis dan Belgia, dan lebih baik dari Yunani serta Serbia.

Penulisnya menulis dari pengalaman pribadi: pagi Januari 2002 di New Delhi, listrik mati untuk ketiga kalinya dalam sepekan, dan anaknya ketinggalan bus sekolah. Penyebabnya, tulisnya, jaringan distribusi yang menua tanpa teknologi penting, ditambah penyedia listrik yang nyaris tanpa akuntabilitas. Kota itu kehilangan lebih dari separuh dayanya lewat peralatan usang dan pencurian.

Kota ini kini menampung sekitar 23 juta orang, dan puncak permintaan listriknya mencapai rekor 8.748 megawatt tahun ini. Delhi disebut membeli 76 persen listriknya dari luar. Transformasi jaringan ini diusulkan penulis sebagai model bagi wilayah dengan infrastruktur serupa di Albania, Argentina, Bangladesh, Brasil, Estonia, India, Kenya, Pakistan, Sri Lanka, Uganda, dan Venezuela.

🔗 [How Delhi Cut Electricity Loss from 50 to 5 Percent — IEEE Spectrum](https://spectrum.ieee.org/delhi-electricity-loss)

## 🔋 Vermont Mengganti Pembangkit Listrik dengan Baterai Rumah

Masih soal energi, BBC Future menulis tentang bagaimana negara bagian Vermont mengganti pembangkit dengan baterai rumah (273 poin, 212 komentar).

Programnya dijalankan Green Mountain Power (GMP), utilitas terbesar di Vermont. Peserta mendapat dua baterai di rumahnya dengan biaya sewa **55 dolar per bulan selama 10 tahun**. Pollyanna Bladyka, warga Springfield, mengaku sebelumnya nyaris membeli generator gas seharga 12.000 dolar sebelum tukang listriknya memberi tahu soal program ini. Sejak sistemnya dipasang pada 2024, ia belum pernah kehilangan listrik sekali pun.

Lebih dari **5.500 orang** di Vermont punya sistem baterai rumah serupa. Kumpulan baterai itu membentuk apa yang disebut _virtual power plant_, dan menurut program GMP, ia diam-diam sudah menjadi sumber listrik terbesar di Vermont. BBC mengutip analisis internal Wood Mackenzie bahwa AS kini punya lebih dari 40 GW kapasitas virtual power plant — masih kecil dibanding sekitar 600 GW gas alam dan 200 GW batu bara, tetapi laporan Departemen Energi AS 2025 menyebut 160 GW kapasitas bisa terbuka pada 2030, setara sekitar 20 persen dari perkiraan puncak permintaan listrik negara itu.

🔗 [The US state replacing power plants with home batteries — BBC Future](https://www.bbc.com/future/article/20260928-a-virtual-power-plant-hidden-in-vermont-homes-is-keeping-the-lights-on-during-storms)

## ✈️ NASA Diam-diam Menghidupkan Kembali SR-71A

Aviation Week melaporkan bahwa NASA menghubungi sejumlah mantan teknisi SR-71A untuk membantu mengembalikan satu Blackbird ke udara — pertama kali sejak 1999 (228 poin, 227 komentar).

Mike Relja, pensiunan berusia akhir 70-an yang pernah jadi insinyur uji SR-71A untuk Angkatan Udara AS dan NASA, menerima tawaran kerja tak terduga dari NASA sekitar sebulan lalu. Yang menghubunginya adalah David Ash, mantan pilot uji Angkatan Laut AS dan Joby yang dipekerjakan pada Juni sebagai direktur proyek khusus NASA.

Pesawat dengan **Tail No. 844** itu disebut sudah dipindahkan dari tiang pajangnya di dekat Armstrong Flight Research Center, Edwards AFB, California — tempat ia berdiri sejak sekitar 9 Oktober 1999, hari penerbangan terakhir Blackbird mana pun. Menurut Relja, NASA kemudian menggulirkan pesawat itu ke hangar yang pernah menampung Space Shuttle di Edwards dan melakukan inspeksi. Saat Ash menawarkan pekerjaan pada Agustus, kru sudah bekerja di dalam hangar.

Petunjuk publik pertama muncul di All-In Summit di Los Angeles, 12-14 September. Di panggung, Administrator NASA Jared Isaacman menggodok gambar sebuah X-plane baru yang siluetnya memperlihatkan ekor vertikal miring ke dalam dan nacelle mesin di tengah sayap — ciri khas SR-71A. "Dalam pengabdian pada huruf 'A' pertama di NASA, kami sedang membangun kembali armada X-plane kami," kata Isaacman. "Tidak akan lama lagi NASA terbang setinggi dan secepat dekade-dekade lalu — lalu lebih tinggi lagi."

Relja sendiri belum yakin proyek ini bisa berhasil. "Saya bilang ke orang itu, kamu tahu, saya terlalu tua untuk melakukan ini," ujarnya kepada Aviation Week. "Saya doakan yang terbaik. Saya ingin melihat kalian berhasil. Itu akan menarik. Tapi saya rasa kalian tidak bisa sampai ke sana dari sini."

🔗 [NASA Asked Several Former SR-71A Staffers To Help Secret Restart — Aviation Week](https://aviationweek.com/defense/aircraft-propulsion/nasa-asked-several-former-sr-71a-staffers-help-secret-restart)

## 🛠️ Cerita Teknis Lain yang Patut Dibaca

- **Pi.dev: You Said No MCP** (277 poin, 130 komentar) — Earendil menjelaskan kenapa Pi, yang dulu dengan bangga menyatakan tidak mendukung MCP, kini justru memasukkannya ke inti. Alasannya bukan sekadar MCP sudah berubah, tapi juga karena perubahan yang dibutuhkan berguna untuk hal lain, termasuk memudahkan penggunaan Jev di dalam Pi.
- **America.gov** (666 poin, 550 komentar) — situs layanan pemerintah AS yang memakai AI untuk memberi jawaban sederhana, hanya dari sumber resmi pemerintah, gratis, tanpa iklan.
- **Real-time Solar System** (301 poin) — proyek Show HN menampilkan tata surya real-time dengan 526 ribu asteroid dan semua satelit yang terlacak.
- **Backblaze Drive Stats Q2 2026** (238 poin) — laporan kuartalan tingkat kegagalan drive dari Backblaze.
- **September 2026: The world today, as seen by one Polish guy** (391 poin) — esai panjang dari Tom Wojcik yang menelusuri satu selat yang tertutup sampai ke pompa bensin, panen, pasar obligasi, dan pemanas musim dingin negaranya.

🔗 [Pi.dev: You Said No MCP — Earendil](https://earendil.com/posts/you-said-no-mcp/) · [Backblaze Drive Stats Q2 2026](https://www.backblaze.com/blog/backblaze-drive-stats-for-q2-2026/) · [Tom Wojcik](https://tomwojcik.com/posts/2026-09-21/september-2026-the-world-today/) · [space.bl2.net](https://space.bl2.net/)

## 💡 Insight Hari Ini

Hari ini ada dua cerita yang sebetulnya saling menjawab. OpenAI merilis model yang mendekati kecerdasan termahalnya dengan seperlima harga, dan harga itu dirinci per juta token — bukti bahwa lapisan atas pasar model kini bersaing di margin, bukan cuma di benchmark. Di sisi lain, `livenerf` muncul karena orang tidak lagi percaya bahwa model yang dirilis hari ini tetap sama tiga minggu kemudian. Ketika biaya turun dan kecerdasan jadi komoditas, pertanyaan yang tersisa justru yang paling sulit dijawab: apakah yang kamu bayar hari ini masih barang yang sama besok?

Dan untuk pertama kalinya dalam beberapa hari, papan depan Hacker News hari ini memberi porsi besar pada energi dan infrastruktur fisik — Delhi, Vermont, dan Blackbird. Tiga cerita yang sama sekali tidak tentang AI, dan justru itu yang membuatnya menonjol.

---

**Sumber:**

- [Introducing GPT-6.1 Sol — OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/)
- [Introducing Dots — OpenAI](https://openai.com/index/introducing-dots/)
- [ninjahawk/livenerf — GitHub](https://github.com/ninjahawk/livenerf)
- [How Delhi Cut Electricity Loss from 50 to 5 Percent — IEEE Spectrum](https://spectrum.ieee.org/delhi-electricity-loss)
- [The US state replacing power plants with home batteries — BBC Future](https://www.bbc.com/future/article/20260928-a-virtual-power-plant-hidden-in-vermont-homes-is-keeping-the-lights-on-during-storms)
- [NASA Asked Several Former SR-71A Staffers To Help Secret Restart — Aviation Week](https://aviationweek.com/defense/aircraft-propulsion/nasa-asked-several-former-sr-71a-staffers-help-secret-restart)
- [Pi.dev: You Said No MCP — Earendil](https://earendil.com/posts/you-said-no-mcp/)
- [September 2026: the world today — Tom Wojcik](https://tomwojcik.com/posts/2026-09-21/september-2026-the-world-today/)
- [Backblaze Drive Stats for Q2 2026](https://www.backblaze.com/blog/backblaze-drive-stats-for-q2-2026/)
- [Real-time Solar System — space.bl2.net](https://space.bl2.net/)
