---
title: "🤖 Gemini 3.7 Flash, DeepSeek 'Harness' Modular, dan Serangan DRAM Spaghettifying — Hacker News 14 Agustus 2026"
description: "Google meluncurkan Gemini 3.7 Flash dan langsung memicu diskusi terpanas Hacker News dengan 659 poin. DeepSeek membuka source code 'Harness' agent berbasis plugin, riset DRAM scrambling mengungkap cara membuka PSP dan microcode CPU, OpenAI+Cerebras menawarkan GPT-5.6 Sol 14x lebih cepat, plus Mistral OCR 4.1 dan studi link rot 657.607 tautan."
pubDate: 2026-08-14T13:00:00Z
tags: ["Daily Update", "Hacker News", "AI", "Tech"]
---

Hari ini, **Jumat 14 Agustus 2026**, Hacker News kembali ramai dengan berita-berita besar dari dunia AI dan keamanan sistem. Puncaknya: peluncuran **Gemini 3.7 Flash** oleh Google yang langsung menjadi cerita paling banyak dibicarakan — disusul **DeepSeek Harness** yang membuka source code, riset keamanan DRAM yang bikin merinding, dan kolaborasi OpenAI-Cerebras untuk model generasi token super cepat. Mari kita bahas satu per satu!

## 🤖 Gemini 3.7 Flash: Model "Workhorse" Baru Google

Cerita paling panas hari ini datang dari blog resmi Google: **Gemini 3.7 Flash** — model yang mereka sebut sebagai *"our most intelligent workhorse model yet for coding and agents"* — meroket ke puncak Hacker News dengan **659 poin dan 376 komentar**.

Yang menarik dari peluncuran ini adalah **posisinya yang agresif di sisi harga**: US$0,75 per juta token input dan US$3,75 per juta token output saat peluncuran. Ars Technica mencatat model ini hadir **hanya tiga minggu setelah Gemini 3.6 Flash**, dan The Decoder menyebut harganya **50% lebih murah dari pendahulunya** — sinyal bahwa Google sedang serius memenangkan perang harga model AI untuk beban kerja coding dan agen.

Diskusi komunitas banyak menyoroti strategi "workhorse model": alih-alih mengejar benchmark paling canggih, Google sepertinya fokus pada model yang paling praktis dan hemat biaya untuk dipakai developer sehari-hari — coding assistant, agentic workflow, dan otomasi. Beberapa komentator membandingkannya dengan keputusan OpenAI merilis GPT-5.6 Sol melalui jalur API yang lebih murah, dan menilai perang harga token kini benar-benar sudah menjadi medan pertempuran utama antar lab AI.

🔗 [Baca pengumuman resmi Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) — **659 poin | 376 komentar**

## 🔌 DeepSeek Harness: "Everything is a Plugin"

Dengan **582 poin dan 247 komentar**, **DeepSeek Harness** menjadi cerita favorit kedua komunitas. DeepSeek merilis *developer preview* untuk **agent harness** mereka — dan kali ini **source code ikut dibuka** di GitHub (deepseek-ai/deepseek-harness).

Filosofi desainnya tegas: **"Everything is a plugin"**. Setiap kapabilitas agen — model, tools, skills, sessions, sandboxes, storage, loops, scheduling, hingga UI — adalah plugin yang bisa ditukar, disusun ulang, atau diperluas tanpa menyentuh source code inti. Semua ini dibangun di atas **kernel Cordis** yang mengelola mounting, unmounting, dan dependency antar plugin.

Cara mencobanya cukup mudah: `npx @deepseek-ai/dsh web`. Komunitas langsung membandingkannya dengan pendekatan harness lain seperti Codex CLI dan Claude Code — dan banyak yang memuji modularitasnya sebagai angin segar, karena developer bisa mengganti satu komponen (misalnya sandbox atau model) tanpa mengganti seluruh stack. Ada juga topik khusus `dsh-plugin` di GitHub untuk plugin komunitas.

🔗 [Coba DeepSeek Harness](https://deepseek.com/harness/en/) | [GitHub: deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — **582 poin | 247 komentar**

## 🧨 Spaghettifying DRAM: Membuka "Semuanya" di CPU

Riset keamanan paling mengejutkan hari ini datang dari **xoreaxeaxeax** (Chris Gerlach) lewat proyek GitHub **skitter-creek-bath-salts** dengan **520 poin dan 143 komentar**. Judulnya menggoda: *"Unlocking everything on the CPU with DRAM scrambling — PSP, C6, microcode, SMM, and anything else the specs left out."*

Idenya: dengan "menggoreng" (spaghettifying) translasi alamat DRAM, peneliti bisa membuat sebuah alamat mendarat di mana pun yang diinginkan di memori fisik. Ini membuka **carveout DRAM yang dilindungi** — wilayah yang bahkan tak terlihat oleh kernel — dan menghancurkan primitif keamanan yang dibangun di atasnya: Platform Security Processor (PSP), System Management Mode (SMM), deep sleep C6, hingga microcode CPU.

Proyek ini dikembangkan dan diuji pada **CPU AMD Family 16h** — generasi terakhir yang datanya masih mendokumentasikan register translasi DRAM controller (dan menunjukkan register itu tak bisa dikunci). Penulis menekankan bahwa transformasi dasarnya mirip di banyak arsitektur, termasuk ARM dan RISC-V — "we show only how to begin," tulisnya. Diskusi di Hacker News langsung ramai soal implikasi besar riset ini terhadap asumsi keamanan hardware modern.

🔗 [Lihat proyek di GitHub](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) — **520 poin | 143 komentar**

## ⚡ GPT-5.6 Sol "Ultrafast": 14x Lebih Cepat, 750 Token per Detik

Kolaborasi **OpenAI dan Cerebras** menjadi bahan diskusi hangat berikutnya (**464 poin, 195 komentar**). OpenAI mem-preview **tier API "Ultrafast"** yang ditenagai infrastruktur Cerebras, menjalankan **GPT-5.6 Sol hingga 14× lebih cepat** dengan kecepatan hingga **750 token output per detik**.

Bagi developer, angka ini bukan sekadar pamer: throughput tinggi berarti latensi rendah untuk aplikasi real-time, streaming yang lebih mulus, dan biaya per token yang lebih efisien untuk beban kerja besar. Cerebras selama ini dikenal dengan pendekatan *wafer-scale engine* yang berbeda dari arsitektur GPU tradisional — dan hasil kerja sama ini menjadi bukti bahwa jalur alternatif untuk inferensi super cepat mulai matang. Komentar komunitas banyak membahas implikasi terhadap harga API dan apakah kecepatan sebesar ini benar-benar berdampak pada kualitas output (atau hanya memangkas waktu tunggu).

🔗 [Baca blog Cerebras](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai) — **464 poin | 195 komentar**

## 📄 Mistral OCR 4.1: Ekstraksi Dokumen Lebih Presisi

Mistral merilis **OCR 4.1**, pembaruan layanan OCR andalan mereka untuk *Document AI stack* (**268 poin, 106 komentar**). Versi baru ini membawa **ekstraksi bounding box tingkat paragraf**, **label blok struktural**, dan **confidence score per blok** — peningkatan signifikan untuk pemrosesan dokumen yang butuh struktur presisi, seperti faktur, kontrak, dan arsip scan.

Dari sisi harga: **€3,5 per 1.000 halaman** (atau €4,38 untuk halaman ber-anotasi), dengan dukungan API `/v1/ocr`, anotasi terstruktur, dan batching. Komunitas menyambutnya sebagai alternatif kuat untuk pipeline dokumen berbasis LLM, terutama karena kemampuan blok strukturalnya memudahkan *parsing* dokumen kompleks dibanding OCR konvensional yang hanya mengembalikan teks polos.

🔗 [Dokumentasi Mistral OCR 4.1](https://docs.mistral.ai/models/ocr-4-1) — **268 poin | 106 komentar**

## 💀 Ke Mana Perginya Web Lama? Menelusuri 657.607 Link

Cerita reflektif yang banyak dibicarakan: **"Where did the old web go?"** (**141 poin, 126 komentar**) — studi yang menelusuri **657.607 tautan** untuk mengukur seberapa cepat web "mati". Hasilnya menunjukkan fenomena *link rot* yang mengkhawatirkan: halaman-halaman yang dulu hidup perlahan menghilang, domain berganti pemilik, dan konten lama tak lagi bisa diakses.

Diskusi di Hacker News memperkaya temuan ini dengan anekdot personal — blog yang dihapus setelah pendirinya meninggal, forum yang ditutup diam-diam, hingga proyek arsip yang berjuang melawan biaya penyimpanan. Banyak komentator menilai studi ini sebagai pengingat bahwa web yang kita anggap permanen sebenarnya sangat rapuh, dan bahwa usaha preservasi digital (Internet Archive, Webrecorder, dan sejenisnya) layak mendapat lebih banyak dukungan.

🔗 [Baca studi lengkapnya](https://0.mk/blog/link-rot) — **141 poin | 126 komentar**

## 💡 Insight Hari Ini

Pola yang menonjol dari Hacker News hari ini: **persaingan AI bergeser dari "model terpintar" ke "model paling praktis dan murah"** — terlihat dari Gemini 3.7 Flash yang dipotong harganya 50% dan OpenAI yang menggandeng Cerebras demi kecepatan tinggi. Di sisi lain, riset **Spaghettifying DRAM** mengingatkan kita bahwa fondasi keamanan hardware yang selama ini dianggap kokoh bisa punya celah yang tak terduga. Dan DeepSeek Harness menunjukkan arah baru yang menarik: **membuka seluruh stack agent agar bisa dirakit sendiri** — sebuah visi "lego" untuk agen AI yang jelas disambut hangat oleh komunitas developer.
