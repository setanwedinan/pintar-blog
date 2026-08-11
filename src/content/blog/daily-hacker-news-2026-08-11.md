---
title: "📰 Telemarketing Dilarang di Prancis, Meta Kembali ke AI Terbuka, dan Memori Internet yang Memudar — Hacker News 11 Agustus 2026"
description: "Prancis siap melarang telemarketing tanpa izin yang bikin netizen heboh, Mark Zuckerberg menyerang rival AI 'tertutup' sambil mengembalikan Meta ke model open-source, dan sebuah esai viral soal bagaimana AI menggerus memori kolektif internet. Plus Needle2, LLM agenik 14MB untuk perangkat kecil, dan H3-metal dari antirez untuk Apple Silicon."
pubDate: 2026-08-11T13:00:00Z
tags: ["Daily Update", "Hacker News"]
---

Halo! Selamat datang di ringkasan harian Hacker News edisi **Selasa, 11 Agustus 2026**. Hari ini komunitas Hacker News lagi ramai-ramainya membahas regulasi telemarketing di Prancis, pertarungan model AI terbuka vs tertutup, sampai esai mendalam soal masa depan memori internet. Yuk, kita bedah satu per satu!

## 🇫🇷 Prancis Larang Telemarketing Tanpa Izin

Berita paling populer hari ini datang dari Prancis. Pemerintah Prancis resmi mengumumkan larangan telemarketing (telepon penawaran) tanpa izin — alias sistem **opt-in penuh** — yang membuat warga Prancis lega dan netizen di seluruh dunia iri.

**594 poin | 328 komentar**

Selama ini praktik telemarketing di banyak negara menganut sistem opt-out: perusahaan boleh menelepon selama kamu belum mendaftar ke daftar penolakan. Prancis membalik logikanya — perusahaan **wajib mendapat persetujuan eksplisit** sebelum menghubungi konsumen. Ini langkah besar dalam perlindungan konsumen digital, dan diskusi di Hacker News ramai membandingkannya dengan regulasi serupa di negara lain, termasuk GDPR dan aturan robocall di Amerika Serikat yang dinilai jauh lebih lemah.

Sumber: [France to ban unsolicited telemarketing calls — Le Monde](https://www.lemonde.fr/en/france/article/2026/08/06/france-to-ban-unsolicited-telemarketing-calls/)

## 🤖 Zuckerberg Serang Rival AI "Tertutup", Meta Kembali ke Model Terbuka

Mark Zuckerberg kembali menjadi pusat perhatian setelah menyerang habis-habisan pendekatan "tertutup" (closed-source) yang dipakai sebagian besar rival AI-nya, sekaligus mengumumkan kembalinya Meta secara penuh ke model open-source.

**555 poin | 526 komentar**

Dalam wawancara dengan Financial Times, Zuckerberg menyebut pendekatan closed AI sebagai strategi yang keliru jangka panjang dan memposisikan Meta sebagai pembela ekosistem terbuka. Diskusi di Hacker News langsung terbelah dua: sebagian mendukung argumen Meta soal transparansi dan akses, sebagian lain mengingatkan bahwa "open" versi Meta tetaplah model bisnis — dengan data pengguna sebagai komoditasnya. Ini jadi salah satu thread paling panas hari ini, dengan 526 komentar yang membahas motivasi, lisensi, hingga implikasi regulasi.

Sumber: [Mark Zuckerberg attacks 'closed' AI rivals as Meta returns to open models — FT](https://www.ft.com/content/4e3957f8-ea7c-4c46-a3de-cdce8e526878)

## 🕸️ Saat AI Melahap Web, Memori Kolektif Internet Mulai Hilang

Esai panjang dari The Walrus berjudul "As AI eats the web, the internet's collective memory is disappearing" berhasil menembus peringkat atas Hacker News — dan memantik diskusi filosofis yang dalam.

**523 poin | 611 komentar — thread terkomentari hari ini**

Argumen utamanya: ketika semakin banyak konten internet dikonsumsi (dan digantikan) oleh AI, jejak digital yang menjadi "memori kolektif" umat manusia — forum, blog pribadi, halaman-halaman kecil yang tidak lagi dirawat — perlahan menghilang. Mesin pencari yang dulunya mengindeks web secara luas kini lebih sering menyajikan ringkasan AI, sehingga trafik organik ke situs-situs kecil menurun drastis dan banyak yang akhirnya mati.

Komentar di Hacker News menambahkan perspektif menarik: ini bukan sekadar soal SEO, tapi soal **arsitektur pengetahuan manusia**. Ada yang berbagi pengalaman menyelamatkan forum komunitas lama, ada juga yang mempertanyakan apakah "memori kolektif" yang dimaksud memang benar-benar hilang atau hanya bergeser bentuknya.

Sumber: [As AI eats the web, the internet's collective memory is disappearing — The Walrus](https://thewalrus.ca/google-search-is-dying/)

## 📱 Needle2: LLM Agenik 14MB untuk Ponsel, Wearable, dan Robot

Show HN hari ini menghadirkan sesuatu yang mengesankan: **Needle2**, model bahasa agenik (agentic LLM) berukuran hanya **14MB** yang dirancang untuk berjalan di perangkat kecil — ponsel, wearable, smart home, hingga robot.

**419 poin | 155 komentar**

Ukuran 14MB itu sangat kecil dibanding model AI mainstream yang biasanya bermiliar-biliar parameter. Konsepnya: tidak semua tugas butuh model raksasa di cloud — banyak tugas agen (menyalakan lampu, menjawab perintah suara sederhana, mengontrol perangkat rumah) bisa dijalankan sepenuhnya secara lokal dengan model kecil dan cepat. Ini sejalan dengan tren **on-device AI** dan edge computing yang makin populer.

Komunitas HN antusias membahas trade-off antara ukuran, kualitas, dan kasus penggunaan nyata — plus apakah model sekecil ini benar-benar bisa diandalkan untuk tugas agenik yang kompleks. Kreatornya, Cactus Compute, memamerkan demo yang menarik perhatian banyak developer.

Sumber: [Show HN: Needle2 — 14MB agentic LLM for phones, wearables, smart home and robots](https://cactuscompute.com/needle)

## 🍎 H3-metal: Inferensi MiniMax-H3 Native untuk Apple Silicon

Pengembang terkenal **antirez** (pencipta Redis) kembali beraksi dengan proyek baru: **H3-metal**, implementasi native untuk menjalankan model MiniMax-H3 di Apple Silicon.

**354 poin | 77 komentar**

MiniMax-H3 adalah arsitektur hybrid yang menggabungkan keunggulan model linear attention dan transformer konvensional, dan versi native untuk Apple Silicon ini menjanjikan inferensi yang jauh lebih efisien di perangkat Mac. antirez dikenal karena menulis kode yang bersih dan mudah dipelajari — repository-nya selalu jadi bahan belajar favorit developer.

Thread ini menarik perhatian komunitas yang tertarik dengan **local inference**: menjalankan model AI sepenuhnya di perangkat sendiri, tanpa cloud. Banyak yang bertanya soal performa di M-series, dukungan quantization, dan perbandingannya dengan llama.cpp.

Sumber: [H3-metal – Native MiniMax-H3 inference for Apple Silicon — GitHub](https://github.com/antirez/h3.c)

## 🏷️ Cara Claude Menandai Konten Buatan AI

Anthropic merilis dokumentasi resmi soal bagaimana Claude menandai konten yang dihasilkan AI — topik yang makin relevan di tengah perdebatan global soal watermark dan transparansi konten sintetis.

**273 poin | 245 komentar**

Dokumentasi ini menjelaskan mekanisme pelabelan konten AI yang diterapkan Anthropic, termasuk pendekatan teknisnya. Diskusi di Hacker News membahas efektivitas watermark terhadap manipulasi, apakah penandaan bisa dengan mudah dilewati, dan bagaimana pendekatan Anthropic dibandingkan dengan OpenAI maupun kebijakan platform lain.

Ini bagian dari tren industri yang lebih besar: **transparansi konten AI** kini menjadi tuntutan regulasi di berbagai yurisdiksi, dan cara teknis setiap vendor menerapkannya menjadi bahan perbandingan yang menarik.

Sumber: [How Claude marks AI-generated content — Anthropic Support](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content)

## 💡 Insight Hari Ini

Ada pola menarik dari lima cerita teratas hari ini: **regulasi dan kepercayaan** jadi tema dominan. Larangan telemarketing Prancis, serangan Zuckerberg ke closed AI, esai tentang memori internet, sampai penandaan konten AI — semuanya berputar di sekitar satu pertanyaan besar: *bagaimana kita menjaga kontrol manusia di tengah laju otomatisasi?*

Sementara itu, tren teknis di balik layar tak kalah seru: model kecil (Needle2 14MB), inferensi lokal (H3-metal), dan on-device AI menunjukkan bahwa masa depan AI tidak selalu soal model raksasa di data center — **efisiensi dan kedaulatan pengguna** justru makin jadi nilai jual.

Sampai jumpa di ringkasan Hacker News besok! 🚀

## 🔗 Sumber

- [France to ban unsolicited telemarketing calls — Le Monde](https://www.lemonde.fr/en/france/article/2026/08/06/france-to-ban-unsolicited-telemarketing-calls/)
- [Mark Zuckerberg attacks 'closed' AI rivals — Financial Times](https://www.ft.com/content/4e3957f8-ea7c-4c46-a3de-cdce8e526878)
- [As AI eats the web, the internet's collective memory is disappearing — The Walrus](https://thewalrus.ca/google-search-is-dying/)
- [Show HN: Needle2 — Cactus Compute](https://cactuscompute.com/needle)
- [H3-metal – Native MiniMax-H3 inference for Apple Silicon — GitHub](https://github.com/antirez/h3.c)
- [How Claude marks AI-generated content — Anthropic](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content)
