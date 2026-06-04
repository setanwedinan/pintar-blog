---
title: 'Gemma 4 12B Bisa Jalan di Laptop 16GB, Apple Vision Air Dilaporkan Dibatalkan, dan Perang AI Agent Makin Memanas'
description: 'Google merilis Gemma 4 12B yang efisien untuk laptop biasa, Apple dilaporkan membunuh proyek Vision Air, Alphabet galang $85 miliar untuk AI, dan Microsoft perkenalkan MXC sandbox untuk keamanan AI agent.'
pubDate: 2026-06-04T11:30:00Z
tags: ['Daily Update', 'AI', 'Google', 'Apple', 'Microsoft']
---

## 🤖 Gemma 4 12B: AI Open-Source yang Bisa Jalan di Laptop 16GB

Google merilis **Gemma 4 12B**, model AI open-source terbaru yang mengisi celah kosong di lineup Gemma 4. Jika sebelumnya Google hanya punya model kecil untuk mobile (E2B, E4B) dan model besar untuk server (26B MoE, 31B Dense), model 12B ini menemukan sweet spot yang tepat: **cukup ringan untuk laptop biasa, tapi hampir sekuat model 26B**.

Yang bikin menarik, Gemma 4 12B cuma butuh **16GB RAM** — alias bisa jalan di hampir semua laptop konsumer modern tanpa GPU khusus. Setengah dari kebutuhan RAM model 26B MoE, dengan performa benchmark yang nyaris identik.

Ada dua teknologi baru yang membuat ini mungkin:

- **Multi-Token Prediction (MTP)** — Model memanfaatkan siklus prosesor yang nganggur untuk menghitung token berikutnya secara paralel, bikin inferensi lebih cepat dan efisien
- **Streamlined Multimodality** — Input gambar dan audio diproses tanpa encoder terpisah yang biasanya bikin berat. Gambar pakai single-matrix multiplication, audio langsung diproyeksikan ke token teks tanpa encoding sama sekali

Model ini bisa diunduh gratis di LM Studio, Google AI Edge Gallery, Kaggle, dan Hugging Face dengan lisensi Apache 2.0.

🔗 [Ars Technica](https://arstechnica.com/google/2026/06/googles-new-gemma-4-open-ai-model-is-sized-for-your-laptop/) | [Google Developers Blog](https://developers.googleblog.com/gemma-4-12b-the-developer-guide/)

---

## 🍎 Apple Vision Air Dilaporkan Dibatalkan oleh CEO Baru John Ternus

Menurut laporan AppleInsider, rencana Apple untuk smart glasses bernama **Vision Air** dilaporkan sudah **dibatalkan** — dan orang di balik keputusan ini adalah CEO baru Apple, **John Ternus** sendiri.

Proyek headset AR/VR Apple sepertinya makin menyusut. Vision Pro yang diluncurkan 2024 belum mencapai adopsi massal, dan kini kabar tentang penerusnya (Vision Air) juga muncul kabar pembatalan. Fokus Apple sepertinya bergeser ke kacamata pintar konvensional yang diumumkan untuk 2027 — sesuatu yang lebih realistis dari sisi harga dan adopsi.

Sementara itu, **MacBook Neo** terus laris luar biasa. Menurut analisis Ming-Chi Kuo, Apple kabarnya sudah **menggandakan produksi** MacBook Neo karena respons pelanggan yang "off the charts" menurut Tim Cook. Ini bikin kekurangan chip memory makin parah — IDC melaporkan kelangkaan memory juga mulai menghantam pasar PC secara keseluruhan.

Di sisi software, Apple sudah mengkonfirmasi bahwa **macOS 27 tidak akan kompatibel** dengan beberapa Mac lama. macOS 26 Tahoe adalah versi terakhir untuk Mac berbasis Intel, jadi pengguna Mac Intel perlu mulai memikirkan upgrade.

Dalam hal regulasi, Apple setuju untuk **membuka data pendapatannya di India** demi menghindari denda antitrust sebesar $38 miliar. India jadi salah satu pasar paling penting bagi Apple, di mana iPhone menguasai 9% pasar smartphone negara itu.

🔗 [AppleInsider](https://appleinsider.com/articles/26/06/03/short-sighted-john-ternus-behind-apple-vision-project-ref) | [MacRumors - MacBook Neo](https://www.macrumors.com/2026/06/03/macbook-neo-production-doubled-says-kuo/) | [MacRumors - macOS 27](https://www.macrumors.com/2026/06/03/macos-27-wont-run-on-these-macs/) | [9to5Mac - India](https://9to5mac.com/2026/06/03/apple-agrees-to-reveal-india-revenue-in-order-to-avoid-massive-38b-fi)

---

## 💰 Alphabet Galang $85 Miliar — Sinyal Terkuat untuk Era AI

Alphabet melakukan sesuatu yang belum pernah terjadi: **galang dana $85 miliar** lewat penawaran saham publik. Menurut TechCrunch, ini "sinyal paling kuat" bahwa Google serius dengan ambisi AI mereka.

Sundar Pichai sebelumnya menyebutkan bahwa Alphabet berencana menghabiskan **$180-190 miliar untuk capital expenditure** — sebagian besar untuk infrastruktur AI — di tahun ini saja. Angka $85 miliar ini adalah penguatan modal yang luar biasa, menunjukkan bahwa pasar percaya Google bukan sekadar bicara soal AI.

Namun, regulasi mulai mengetat. **Watchdog Inggris (CMA) memerintahkan Google** untuk menempatkan link yang lebih jelas di AI Overviews dan mengizinkan publisher Inggris untuk opt-out jika konten mereka digunakan untuk powering fitur AI seperti AI Overviews dan AI Mode. Ini bisa jadi preseden penting untuk regulasi AI search di seluruh dunia.

EU Parlemen bahkan sudah memutuskan untuk **migrasi dari Google ke Qwant**, mesin pencari asal Prancis, sebagai bagian dari dorongan kedaulatan teknologi Eropa.

🔗 [TechCrunch - Alphabet $85B](https://techcrunch.com/2026/06/03/alphabets-record-breaking-85b-raise-for-googles-ai-business-is-a-h) | [Ars Technica - UK Google AI Rules](https://arstechnica.com/tech-policy/2026/06/google-ordered-to-put-clearer-links-in-ai-search-and-let) | [The Guardian - EU Parliament Qwant](https://www.theguardian.com/business/2026/jun/03/what-does-uk-watchdog-new-google-ai-results-rule-me)

---

## 🛡️ Microsoft MXC: Sandbox OS-Level untuk AI Agent

Di Build 2026, Microsoft meluncurkan **MXC** — sandbox level OS yang dirancang khusus untuk AI agent. Ini adalah infrastruktur keamanan yang memungkinkan AI agent berjalan terisolasi dari sistem operasi utama, mencegah agent mengakses data yang tidak seharusnya.

Microsoft menamai lima partner awal: **OpenAI, NVIDIA, Manus, Nous Research (pembuat Hermes Agent), dan OpenClaw**. Setiap partner mengintegrasikan platform AI agent mereka ke dalam sandbox MXC. Ini menunjukkan komitmen Microsoft untuk menjadikan Windows sebagai platform utama untuk AI agent — sekaligus mengakui bahwa keamanan adalah masalah kritis.

Selain MXC, Microsoft juga memperkenalkan:

- **Solara** — OS berbasis Android yang dirancang khusus untuk perangkat AI agent, dengan UI dinamis yang dibuat agent secara otomatis berdasarkan ukuran layar
- **Majorana 2** — prosesor quantum computing baru yang 1.000x lebih stabil dari pendahulunya, menargetkan komputer quantum komersial pada 2029
- **Surface RTX Spark Dev Box** — komputer developer dengan GPU NVIDIA RTX Spark, dirancang untuk menjalankan model AI secara lokal

🔗 [VentureBeat - MXC](https://venturebeat.com/security/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-opena) | [Ynet - Solara](https://www.ynetnews.com/tech-and-digital/article/hjut0ntxfl)

---

## 🔧 Lain-Lain: Tencent, Alibaba, dan ByteDance Perang Skill Store

Ekosistem OpenClaw makin ramai. Menurut laporan 36Kr, **Tencent, Alibaba, dan ByteDance** sedang terlibat dalam "pertempuran sengit" untuk dominasi Skill Store — toko plugin/ekstensi untuk AI agent berbasis OpenClaw.

Pengguna bisa deploy OpenClaw di web dengan satu klik dan mengakses library skill, lalu langsung menginstal dan memanggil berbagai skill dari developer. Battle ini mirip dengan era awal app store, di mana platform mana yang menguasai ekosistem skill akan menentukan dominasi di ranah AI agent.

Di sisi lain, Google meluncurkan **Dreambeans** — aplikasi AI eksperimental yang mengubah kehidupan sehari-hari menjadi kartun. Fitur baru Google Home kini juga bisa memanfaatkan Gemini untuk monitoring hewan peliharaan — misalnya mengecek apakah anjing sudah naik ke sofa melalui kamera doorbell.

Google juga dilaporkan sedang **membeli kode dari developer Android** di Play Store untuk melatih model AI mereka. Program ini bersifat rahasia, tapi 404 Media berhasil mengungkapnya.

🔗 [36Kr - Skill Store Battle](https://eu.36kr.com/en/p/3837292043484033) | [TechCrunch - Dreambeans](https://techcrunch.com/2026/06/03/googles-dreambeans-its-weirdest-named-ai-tool-to-date-will-turn-yo) | [404 Media - Google Buying Code](https://www.404media.co/google-is-quietly-buying-code-from-play-store-developers-to-train-ai/)
