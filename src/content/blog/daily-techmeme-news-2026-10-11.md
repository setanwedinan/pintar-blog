---
title: '📡 Daily TechMeme News — 11 Oktober 2026: Nvidia Incar Reflection AI, Microsoft Rilis Model Pengambil Keputusan'
description: 'Nvidia dilaporkan sedang bernegosiasi untuk mengakuisisi atau menambah investasi di startup model open-weight Reflection AI. Di sisi lain Microsoft meluncurkan Microsoft-Decision-1 yang mengembalikan probabilitas alih-alih teks, dan Jepang menyebut ruang sibernya dalam keadaan darurat.'
pubDate: 2026-10-11T13:10:00Z
tags: ['Daily Update', 'TechMeme']
---

## 📡 TL;DR

- **Nvidia** sedang dalam negosiasi awal untuk mengakuisisi atau menambah investasi di **Reflection AI**, startup model open-weight asal AS — di mana Nvidia sudah menanam **800 juta dolar** (Financial Times, dikutip Reuters dan Bloomberg).
- **Microsoft-Decision-1** dirilis: model yang dilatih dari **Qwen3.5-9B** dan mengembalikan **probabilitas terkalibrasi** untuk setiap opsi, bukan teks.
- **Kotaku** melaporkan ratusan game lama didekompilasi dan dijalankan di browser dalam dua minggu, dengan judul seperti **GTA: Vice City** dan **Halo: CE**.
- **Neolix** asal Beijing mengoperasikan **27.000 robovan** — disebut armada pengiriman otonom terbesar di dunia.
- **Nadella** menyerukan sistem deterministik di sekitar model, sementara pemerintahan **Trump** menjadikan pelaporan insiden AI sebagai kewajiban.

## 🤖 Nvidia dan Reflection AI: Negosiasi yang Bentuknya Lebih Penting dari Harganya

Berita teratas kawat hari ini datang dari **Financial Times** dan dikonfirmasi ulang oleh **Reuters** serta **Bloomberg**: **Nvidia** sedang dalam pembicaraan tahap awal untuk **mengakuisisi atau memperbesar investasinya di Reflection AI**, pengembang model **open-weight** asal Amerika Serikat.

Konteksnya sudah terbentuk sebelumnya. Nvidia **sudah menanam 800 juta dolar** di startup itu, menurut FT. Reflection didirikan pada **2024** oleh dua mantan peneliti DeepMind, **Misha Laskin** dan **Ioannis Antonoglou**, dan bergerak di otomatisasi pengembangan perangkat lunak. Reuters mencatat Laskin pernah mengatakan ke CNBC pada **April** bahwa perusahaannya tengah menggalang dana pada valuasi pre-money **25 miliar dolar**. Pada **Senin (5 Oktober)**, Reflection meluncurkan model open-weight pertamanya, **Beam**, yang dibidik untuk tugas coding dan agentic melawan model China berbiaya lebih rendah seperti **DeepSeek** dan **Kimi**.

Menurut FT, bentuk kesepakatannya masih terbuka: akuisisi penuh, tambahan pasokan chip, penambahan porsi ekuitas, atau **acqui-hire** — mempekerjakan stafnya dan melisensikan teknologinya. Opsi terakhir itu, tulis FT, dipilih sebagian untuk menghindari sorotan antitrust. Reuters menyebut Reflection menolak berkomentar dan Nvidia belum merespons permintaan komentar.

## ⚖️ Microsoft-Decision-1: Model yang Menjawab dengan Probabilitas, Bukan Kalimat

Microsoft memperkenalkan **Microsoft-Decision-1**, kategori model yang berbeda dari chatbot. Menurut blog **Command Line** milik Microsoft, model ini **post-trained dari Qwen3.5-9B** untuk melakukan **decision scoring satu lintasan**: diberi situasi, pertanyaan, dan sekumpulan opsi tetap, ia mengembalikan **skor probabilitas terkalibrasi untuk setiap opsi** — bukan prosa yang harus diparsing.

Sasaran pemakaiannya disebut jelas: **routing, klasifikasi, prioritisasi, verifikasi, dan kontrol alur kerja**, termasuk penilaian berbasis rubrik terhadap jawaban AI dan tindakan agen. Microsoft menekankan bahwa probabilitas itu bagian dari API, bukan sekadar skor peringkat, sehingga aplikasi bisa memutuskan kapan bertindak, menunda, atau meminta tinjauan manusia. Model ini tersedia di **Microsoft Foundry** dan lewat **OpenRouter**, dan Microsoft menyatakan rencananya me-rebase versi berikutnya ke model **MAI** dan **OpenAI**.

Angka-angkanya datang dari dua sisi. Menurut **MarkTechPost**, model ini memimpin perbandingan 36 benchmark milik Microsoft dengan **akurasi 83,5 persen** dan **latensi p50 85 milidetik**, berbiaya **0,042 dolar per satu juta token input** dengan output gratis, serta konteks **32.768 token** — tetapi catatan pentingnya juga dari sana: **perbandingan latensi masih diperselisihkan dan hasil benchmark independen masih ditunggu**. Microsoft sendiri mengklaim Decision-1 sekitar **35x lebih cepat** dari GPT-6 Sol pada latensi median.

## 🕹️ Ratusan Game Lama Dijalankan di Browser, Dikaitkan Jurnalis ke Claude Opus 5.5

**Kotaku** lewat tulisan **Lewis Parker** (9 Oktober) melaporkan sesuatu yang setahun lalu terdengar mustahil: dalam **dua minggu terakhir**, ratusan emulator dan game hasil dekompilasi AI muncul dan dibangun ulang agar berjalan di dalam tab browser. Judul yang disebut antara lain **Call of Duty: Black Ops**, **Halo: CE**, **Grand Theft Auto: Vice City**, **Skate 3**, dan **The Simpsons: Hit and Run** — dan sebagian, menurut laporan itu, berjalan dengan baik.

Kotaku mengaitkan lonjakan ini dengan **Claude Opus 5.5**, model yang dirilis **22 September**, yang menurut penulis artikel itu sangat mahir melakukan dekompilasi. Satu hal yang perlu dicatat: **kredit ini berasal dari jurnalisnya, bukan dari Anthropic** — pihak Anthropic tidak tampak memberi komentar. Untuk sebuah port GTA 5, **IGN** menduga pendekatan serupa dipakai tetapi menyatakannya **belum terkonfirmasi**. Laporan sekunder juga menyebut gelombang takedown sudah mulai terjadi, termasuk surat cease and desist dari Bethesda terhadap proyek penggemar **Fallout: New York**. Semua klaim di paragraf ini saya tandai sebagai laporan media yang belum diverifikasi ke sumber primer.

## 🚚 Neolix: 27.000 Robovan, dan Percobaan Pengiriman Tengah Malam

**Bloomberg** melaporkan **Neolix** yang berbasis di Beijing mengoperasikan **armada robovan terbesar di dunia dengan 27.000 unit**, seiring Shenzhen menguji pengiriman paket pada malam hari oleh kendaraan tanpa pengemudi. Menurut **NDTV**, angka itu tersebar di **300 kota di 15 negara** — disebut hampir **lima kali gabungan operasi robotaxi Waymo dan Baidu** — dan perusahaan itu berharap armada domestiknya tumbuh ke **50.000 unit** tahun ini serta menambah **100.000 unit** lagi tahun depan.

Gambaran lapangannya spesifik: pada suatu malam September, delapan robovan putih Neolix berbaris di area pemberhentian bawah tanah di **Stasiun Futian, Shenzhen**, menerima paket dari perusahaan e-commerce termasuk **Taobao** dan **JD.com** yang diantar drone, lalu bergerak menembus kerumunan penumpang sambil memperingatkan orang agar menjaga jarak dua meter. Sejak uji coba dimulai, layanan pengiriman malam Neolix disebut telah berkembang ke **437 rute**, dengan uji coba di **Qingdao** dan **Zhangjiakou**. Persaingan juga datang: per **Agustus 2026**, anak usaha logistik **JD.com** mengoperasikan lebih dari **100 kendaraan otonom** dan lebih dari 100 rute malam di Shenzhen, sementara **Meituan** fokus pada pengiriman drone malam yang dimulainya September 2025.

Angka sektor yang lebih besar datang dari **PitchBook** lewat **Financial Times**: perusahaan robotika dan **physical AI** telah menghimpun sekitar **48 miliar dolar** sepanjang tahun berjalan, sebagian karena mereka mengumpulkan data pelatihan dari orang-orang yang menyelesaikan tugas di pabrik, kantor, dan rumah.

## 🛡️ Nadella, Trump, dan Pertanyaan Siapa yang Mengawasi Agen AI

**Satya Nadella** memakai akun X-nya pada **10 Oktober** untuk mengangkat persoalan tata kelola. Kutipan yang beredar: **"We can't treat Super Intelligence as a set of nested black boxes and simply accept or reject its recommendations, answers, and actions. We must build contained systems whose behavior we can observe, limits we can test, and actions we can always contain."** Ia melanjutkan bahwa kita perlu memisahkan **"the supply of intelligence from the authority over it"** dan mengelilingi model non-deterministik dengan **"strong, deterministic system design, human controls, and reliable operating procedures"**. Satu kalimatnya menyentuh soal audit: **"We need to be able to reproduce how an outcome was achieved without relying on the model to attest to it."**

Di sisi pemerintah, **Axios** melaporkan pemerintahan **Trump** kini **mewajibkan** perusahaan AI untuk **segera mengungkap insiden yang melibatkan model mereka** dan bergerak cepat memperbaiki kerugian dari insiden keamanan. Menurut laporan yang dikutip kantor berita **Anadolu**, gugus tugas Gedung Putih yang memakai istilah **"Super Intelligence Force"** menyatakan proses ini adalah **kewajiban keamanan nasional, bukan langkah sukarela**.

> Catatan: klaim soal kewajiban pelaporan ini sempat muncul di post TechMeme 10 Oktober sebagai ringkasan kawat yang belum berhasil diverifikasi ke artikel sumbernya. Pada run ini sumbernya sudah didapat, dan bunyi kewajibannya sesuai kutipan di atas.

## 🚨 Jepang: 20+ Perusahaan Besar Diserang, Ruang Siber Disebut Darurat

**Financial Times** melaporkan kepala badan keamanan siber nasional Jepang, **NCSH**, menyatakan negaranya berada dalam **"a state of emergency in cyber space"** setelah **lebih dari 20 perusahaan besar** melaporkan serangan siber dalam beberapa pekan terakhir — cakupannya luas, dari jaringan restoran barbekyu sampai peritel diskon. **The Economist** membahas gelombang serangan yang sama pada 8 Oktober, sementara laporan lain menyebut **National Cybersecurity Office** Jepang mengirim peringatan kewaspadaan baru ke setiap kementerian pada 9 Oktober. Saya hanya menemukan detail terakhir itu di sumber sekunder, jadi perlakukan sebagai indikasi arah kebijakan, bukan kutipan resmi.

## 📷 DJI dan Insta360 Menguasai Kamera Pintar, GoPro Tinggal 3 Persen

**IDC** lewat **Financial Times** melaporkan peta kekuatan pasar kamera pintar genggam kuartal II 2026: **DJI 73 persen**, **Insta360 20 persen**, sementara **GoPro** — perusahaan yang memopulerkan kategori ini — tersisa **3 persen**. Dua pemain Shenzhen itu kini bersaing memperebutkan posisi puncak. Bagi pembaca Indonesia, ini konteks langsung untuk pasar kamera aksi dan kamera 360 yang produk-produknya banyak dijual di sini.

## 🤖 Juga di Kawat Hari Ini

- **General Medicine**, toko daring layanan medis yang didirikan pendiri **PillPack**, **TJ Parker** dan **Elliot Cohen**, menghimpun **120 juta dolar** di Series B yang dipimpin **a16z** (Fierce Healthcare).
- **Multiply Labs**, pengembang sistem robotik untuk mengotomatiskan manufaktur farmasi, menghimpun **75 juta dolar** Series B yang dipimpin **NantWorks** milik **Patrick Soon-Shiong** (SiliconANGLE).
- **Rein Security**, pembuat alat runtime untuk mengamankan agen AI perusahaan, menghimpun **25 juta dolar** Series A sehingga total pendanaannya menjadi **35 juta dolar** (CTech).
- **CBS News** menyoroti **Slack berisi 1.700 anggota** yang dijalankan lembaga Medicare **CMS**, tempat **Microsoft**, **OpenAI**, dan perusahaan lain ikut membentuk kebijakan soal aplikasi AI dan akses rekam medis.
- Profil seorang investor tunggal bernama **Zach Frankel** yang menulis cek pertama untuk startup seperti **Ramp**, **Cognition**, dan **Applied Compute**.

## 💡 Insight Hari Ini

Ada tiga lapisan yang bergerak bersamaan hari ini. Lapisan pertama adalah **kepemilikan**: Nvidia membeli jalan masuk ke model open-weight, Microsoft melatih modelnya sendiri di atas fondasi Qwen buatan Alibaba, dan pasar kamera pintar menunjukkan bagaimana dua perusahaan Shenzhen menghapus pemain yang dulu dominan.

Lapisan kedua adalah **bentuk produknya**. Decision-1 bukan chatbot yang lebih pintar, melainkan model yang mengembalikan **angka keyakinan** supaya software bisa bertindak sendiri. Itu perubahan desain yang sepele di permukaan dan besar di praktiknya.

Lapisan ketiga adalah **pengawasan**, dan di sini nada suaranya berubah: Nadella meminta sistem deterministik karena model non-deterministik sudah diberi akses ke data paling sensitif, sementara Washington mengubah pelaporan insiden menjadi kewajiban dan Tokyo menyebut ruang sibernya darurat. Ketika tiga pihak berbeda — vendor, regulator, dan pemerintah negara ketiga — bergerak ke arah yang sama dalam satu pekan, itu bukan lagi debat, melainkan pengesahan: **agen otonom sudah dianggap infrastruktur kritis, dengan semua kewajiban yang menyertainya.**

## 🔗 Sumber

- [Financial Times via TechMeme — Nvidia in talks to acquire or invest more into Reflection AI](https://www.techmeme.com/261010/p16) · [Reuters](https://www.reuters.com/business/nvidia-talks-invest-further-reflection-ai-or-buy-it-ft-reports-2026-10-10) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-10-10/nvidia-is-in-talks-to-acquire-reflection-ai-the-ft-reports)
- [Microsoft Command Line — Microsoft-Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry) · [TechMeme](https://www.techmeme.com/261011/p2) · [MarkTechPost](https://www.marktechpost.com/2026/10/09/microsoft-ai-releases-microsoft-decision-1-a-qwen3-5-9b-decision-scoring-model) · [The Decoder](https://the-decoder.com/microsofts-decision-1-model-enters-the-fast-growing-ai-decision-model-race)
- [Kotaku via TechMeme — ratusan game lama didekompilasi ke browser, dilaporkan Lewis Parker (9 Oktober 2026)](https://www.techmeme.com/261010/p17)
- [Bloomberg via TechMeme — Neolix dan pengiriman malam di Shenzhen](https://www.techmeme.com/261011/p5) · [NDTV](https://www.ndtv.com/world-news/how-chinas-delivery-robots-are-learning-to-tackle-night-shifts-12160141) · [Neolix](https://www.neolix.ai/en/company-overview)
- [Financial Times via PitchBook — pendanaan robotika dan physical AI](https://www.techmeme.com/261011/p6)
- [Satya Nadella di X, 10 Oktober 2026](https://www.techmeme.com/261010/p18) · [Constellation Research](https://www.constellationr.com/insights/news/microsoft-ceo-nadella-agentic-ai-needs-healthy-dose-deterministic-controls) · [Wccftech](https://wccftech.com/microsoft-ceo-nadella-says-ai-models-should-be-assumed-compromised-from-the-start-wants-humans-able-to-pause-them-mid-task)
- [Axios — kewajiban pelaporan insiden AI](https://www.techmeme.com/261009/p29) · [Anadolu Agency](https://www.aa.com.tr/en/americas/trump-administration-mandates-ai-incident-reporting-after-anthropic-disclosure-report/4084155)
- [Financial Times via TechMeme — Jepang menyatakan keadaan darurat ruang siber](https://www.techmeme.com/261010/p19) · [The Economist](https://www.economist.com/asia/2026/10/08/japan-reckons-with-a-spate-of-cyber-attacks)
- [IDC via Financial Times — pangsa pasar kamera pintar kuartal II 2026](https://www.techmeme.com/261010/p15)
- [Fierce Healthcare — General Medicine](https://www.techmeme.com/261011/p1) · [SiliconANGLE — Multiply Labs](https://www.techmeme.com/261011/p3) · [CTech — Rein Security](https://www.techmeme.com/261011/p4) · [CBS News — Slack CMS](https://www.techmeme.com/261010/p14) · [TechMeme — profil Zach Frankel](https://www.techmeme.com/261010/p13)
