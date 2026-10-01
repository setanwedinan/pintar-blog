---
title: '🤖 Google Luncurkan Gemini 4 Argon, OpenClaw Bikin Edisi Enterprise Bareng OpenAI-Red Hat-Nvidia'
description: 'Google mengumumkan Gemini 4 Argon sebagai model frontier baru dengan harga pengantar 2 dolar per juta token input, OpenClaw Foundation merilis OpenClaw Enterprise bersama OpenAI, Red Hat dan Nvidia, plus peluncuran Apple 13 Oktober dan Galaxy Tab S12.'
pubDate: 2026-10-01T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

Rangkuman berita teknologi dan AI pilihan dari Google Alerts, Kamis 1 Oktober 2026. Hari ini ada dua poros besar: Google mengumumkan model frontier yang lama dinanti, dan ekosistem agen AI open source mencoba masuk ke kantor korporat lewat pintu depan.

## TL;DR

- **Google mengumumkan Gemini 4 Argon**, model frontier pertamanya sejak Februari, dengan harga pengantar **2 dolar per juta token input** dan **10 dolar per juta token output**.
- Batas output Argon naik ke **1 juta token**, dari sebelumnya 64 ribu token.
- **OpenClaw Foundation merilis OpenClaw Enterprise (OCE)**, control plane agen AI open source, dikembangkan bersama **OpenAI, Red Hat, dan Nvidia**.
- **NVIDIA** memakai Hermes Agent sebagai contoh integrasi native **NeMo Relay** untuk penelusuran perilaku harness agen.
- Apple dikabarkan menggelar peluncuran **13 Oktober** untuk smart home hub, HomePod mini baru, dan Apple TV 4K.
- Samsung mengumumkan **Galaxy Tab S12 Ultra dan Tab S12+**, mulai dijual 7 Oktober.

## 🧠 Gemini 4 Argon: Model Frontier Baru Google

Google resmi memperkenalkan **Gemini 4 Argon** lewat blog resminya. Model ini diposisikan sebagai era baru kecerdasan frontier yang dibangun untuk penalaran mendalam pada alur kerja kompleks dan berdurasi panjang, dengan fokus pada rekayasa perangkat lunak dunia nyata, pekerjaan pengetahuan enterprise seperti hukum dan keuangan, serta pertahanan siber.

Peluncurannya bertahap. Argon mulai digulirkan ke sekelompok **cyber defender terpercaya** lewat **Fairwind Program**, sambil Google mengikuti proses akses pra-rilis sukarela pemerintah Amerika Serikat. Artinya, mayoritas pengguna belum bisa memakainya hari ini.

Soal harga, Google menyebut Argon akan diluncurkan dengan **harga pengantar 2 dolar AS per juta token input dan 10 dolar AS per juta token output**, dengan token input yang di-cache dihargai **diskon 95 persen** dari harga input. Batas token output-nya naik signifikan ke **1 juta token** dari sebelumnya **64 ribu token** — angka yang disebut Google sebagai yang tertinggi di industri.

Google mengklaim Argon mencatat **state of the art baru di DeepSWE v1.1 dengan 77,9 persen**, sebuah tolok ukur untuk tugas rekayasa perangkat lunak berdurasi panjang, serta memimpin di **Vals Index** yang mengukur dampak ekonomi. Menurut rangkuman **VentureBeat** atas materi embargo Google, dari **18 tolok ukur** yang diungkap, Argon memimpin sendiri di **12** dan seri di posisi pertama pada **satu** kategori. **GPT-6 Astra** memimpin sendiri di tiga dan seri dengan Argon di satu, sedangkan **Claude Opus 5.5** memimpin sendiri di dua.

Sejumlah media menyoroti konteksnya. **Reuters** menyebut pengumuman ini datang setelah berbulan-bulan penundaan, sementara **Bloomberg** melaporkan Google juga berhadapan dengan skeptisisme karyawan sendiri menjelang peluncuran Gemini 4. **Ars Technica** menekankan hal yang paling praktis: Argon sudah diumumkan, tetapi belum bisa digunakan publik.

## 🏢 OpenClaw Enterprise: Kubernetes untuk Agen AI

Masuk akal kalau perusahaan memblokir platform agen AI. Itulah masalah yang coba dijawab **OpenClaw Enterprise (OCE)**, edisi korporat dari proyek OpenClaw yang kini berada di bawah naungan OpenClaw Foundation.

**The Register** mencatat proyek ini awalnya dibuat pengembang **Peter Steinberger**, yang kemudian direkrut OpenAI. Reputasinya sempat tercoreng: Gartner menyebut OpenClaw sebagai sumber **risiko keamanan siber yang tidak dapat diterima** bagi pengguna bisnis, dan tim tanggap darurat komputer China memperingatkan konfigurasi keamanan bawaannya yang sangat lemah.

OCE dikembangkan bersama **Red Hat dan NVIDIA**, dan menurut **SDxCentral** sudah dipiloti di Red Hat maupun OpenAI. **Kevin Lin**, anggota tim teknis OpenAI, menyebut dalam unggahan pribadinya bahwa OCE akan menjadi bagi agen seperti Kubernetes bagi kontainer. Menurutnya, OpenAI sendiri sudah men-deploy agen OpenClaw dengan akses penuh ke basis kode dan plugin.

Lin mengakui bahwa adopsi agen persisten masih terbatas. Umpan balik utama dari organisasi, katanya, adalah kebutuhan standar keamanan, keselamatan, dan tata kelola yang lebih kuat — dan karena itu sikap bawaan tim TI di banyak organisasi adalah melarang platform agen seperti OpenClaw.

## 🧪 Hermes Agent Masuk Riset Observabilitas NVIDIA

Dua item yang jarang muncul sekaligus menyangkut Hermes Agent hari ini. Pertama, **AIMultiple** merilis perbandingan **Always-On Agents: Dots vs Grok Bot vs Muse** yang memasukkan lima agen selalu aktif: OpenAI Dots, Grok Bot, Meta Muse, **Hermes Agent**, dan OpenClaw. Catatan menariknya: Hermes Agent dan OpenClaw menyimpan memori sebagai berkas teks yang bisa dibuka dan diedit pengguna, sedangkan Dots menyimpan memorinya di sisi OpenAI. Nous Research juga disebut menghosting Hermes Agent di Hermes Cloud.

Kedua, dan ini yang lebih substantif, **blog developer NVIDIA** menerbitkan tutorial berjudul **Tracing Agent Harness Behavior with NVIDIA NeMo Relay**. NVIDIA menyebut **Hermes Agent sudah punya integrasi NeMo Relay native**, yang menghasilkan aliran peristiwa **ATOF**, trajektori langkah-demi-langkah **ATIF**, serta span **OpenTelemetry** dengan label OpenInference untuk diperiksa di alat seperti Arize Phoenix. Tutorial itu juga memuat studi kasus **Hermes ToolPerf** yang membandingkan revisi baseline dan revisi perbaikan pada **108 run**, dan menemukan bahwa **Qwen Coder 30B** memulihkan lebih banyak tugas tetapi menambah jumlah panggilan, data, dan latensi.

## 🍎 Apple: Peluncuran 13 Oktober dan Arah Baru di Bawah Ternus

**MacRumors** mengutip **Mark Gurman** dari Bloomberg: Apple berencana memperkenalkan **smart home hub yang benar-benar baru, HomePod mini generasi kedua, dan Apple TV 4K baru** pada **Selasa, 13 Oktober**. **Siri AI** diperkirakan menjadi fitur kunci perangkat-perangkat itu. Belum jelas apakah Apple akan memakai video acara penuh atau rangkaian siaran pers dan video pendek.

Ada juga tenggat lain: **iPhone Duo** diluncurkan **Jumat, 23 Oktober**, dengan pra-pemesanan dibuka **Senin, 12 Oktober**. Produk Apple lain yang diperkirakan hadir sebelum 2026 berakhir antara lain iPad mini dengan layar OLED, MacBook Pro 14 inci dan iMac dengan chip M6, serta MacBook Pro kelas atas dengan layar OLED dan desain lebih tipis.

Soal arah perusahaan, **GSMArena** mengutip Gurman bahwa CEO **John Ternus** ingin membentuk organisasi yang lebih ramping dan berfokus pada rekayasa. Artinya ada pemangkasan: jumlah posisi manajemen menengah dikurangi agar engineer punya jalur langsung ke eksekutif senior. Selama beberapa pekan terakhir Apple dilaporkan mengurangi jumlah engineering program manager — mereka tidak langsung diberhentikan, tetapi diberi waktu mencari posisi lain di Apple, dan yang tidak mendapatkannya akan terkena PHK akhir tahun ini.

Ternus juga dilaporkan membatalkan sejumlah produk yang sedang dikembangkan, memicu PHK kecil di beberapa tim termasuk tim yang menggarap Siri, proyek terkait AI, dan headset XR Apple Vision Pro. Satu rencana lain dibatalkan: Apple sempat ingin memangkas 5.000 karyawan AppleCare dan menggantinya dengan AI, tetapi berubah pikiran, setidaknya untuk sekarang. Ke depan, Ternus disebut ingin Apple lebih eksperimental dan lebih sering merilis produk, bahkan mungkin meninggalkan jadwal peluncuran besar setiap September. Ternus, **Eddy Cue**, dan CFO **Kevan Parekh** juga dilaporkan membahas layanan baru untuk menambah pendapatan.

## 📱 Samsung Galaxy Tab S12 dan Kabar Android

Samsung akhirnya mengumumkan **Galaxy Tab S12 Ultra** dan **Galaxy Tab S12+** di hari terakhir September. Menurut **Android Police**, Tab S12 Ultra adalah tablet tertipis Samsung dengan ketebalan **5,1 mm** (Tab S12+ **5,3 mm**), layar 2X Dynamic AMOLED dengan kecerahan hingga **1.600 nits**. Tab S12 Ultra memakai layar **14,6 inci** resolusi 2960 x 1848 dan refresh rate 120Hz, sedangkan Tab S12+ layar **12,6 inci** resolusi 2800 x 1752. Keduanya memakai prosesor **MediaTek Dimensity 9500**, mendukung pengisian 45W (0-100 persen dalam 95 menit), dan menyertakan S Pen. Tab S12 Ultra mulai **1.399,99 dolar AS** dan Tab S12+ mulai **1.199,99 dolar AS**, mulai dijual **7 Oktober**.

Di sisi Android, **9to5Google** melaporkan munculnya bug **NFC** di sejumlah model Pixel yang mengganggu pembayaran tap-to-pay, serta bug **Android Auto** yang menghalangi panggilan keluar dari ponsel lipat saat perangkat tertutup. Ada juga **Apple Music 7.0 beta** yang membawa desain ulang bergaya **Liquid Glass** ke Android. Dari sisi perangkat, **The Register** mengutip iFixit: **AirPods 5** akhirnya mendapat skor keterbaikan **2 dari 10** — angka kecil, tetapi ini pertama kalinya AirPods tidak bernilai nol.

## 🔍 Catatan

Satu hal yang perlu ditegaskan soal Argon: pengumuman bukan berarti ketersediaan. Google menyebut Argon akan tersedia lebih luas bagi pengembang, perusahaan, dan konsumen "secepat mungkin", dimulai dari pelanggan API berbayar dan pelanggan Google AI Ultra. Sampai itu terjadi, klaim benchmark-nya adalah klaim Google sendiri yang diulas media, bukan hasil uji independen.

## 🔗 Sumber

- [Gemini 4 Argon: our next era of frontier intelligence — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
- [Google unveils Gemini 4 Argon, retaking benchmark lead — VentureBeat](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release)
- [Google announces Gemini 4 flagship AI model after months of delays — Reuters](https://www.reuters.com/legal/litigation/google-announces-gemini-4-flagship-ai-model-after-months-delays-2026-09-30/)
- [Google Grapples With Employee Skepticism About New Gemini Model — Bloomberg](https://www.bloomberg.com/news/articles/2026-09-30/google-grapples-with-employee-skepticism-about-new-gemini-model)
- [Google announces Gemini 4 Argon AI model, but you can not use it yet — Ars Technica](https://arstechnica.com/google/2026/09/google-announces-gemini-4-argon-ai-model-but-you-cant-use-it-yet/)
- [OpenClaw slips on a suit to evade widespread business bans — The Register](https://www.theregister.com/ai-and-ml/2026/09/30/openclaw-slips-on-a-suit-to-evade-widespread-business-bans/5299962)
- [OpenClaw goes straight with enterprise focused AI agents — SDxCentral](https://www.sdxcentral.com/news/openclaw-goes-straight-with-enterprise-focused-ai-agents/)
- [Always-On Agents: Dots vs Grok Bot vs Muse — AIMultiple](https://aimultiple.com/always-on-agents)
- [Tracing Agent Harness Behavior with NVIDIA NeMo Relay — NVIDIA Developer Blog](https://developer.nvidia.com/blog/tracing-agent-harness-behavior-with-nvidia-nemo-relay/)
- [Apple's Next Launch is October 13 — MacRumors](https://www.macrumors.com/2026/09/30/apple-next-launch-is-october-13/)
- [CEO John Ternus wants Apple to be leaner and more experimental — GSMArena](https://www.gsmarena.com/ceo_john_ternus_wants_apple_to_be_leaner_more_experimental_and_to_launch_products_faster-news-74833.php)
- [Samsung reveals ultrathin Galaxy Tab S12 series — Android Police](https://www.androidpolice.com/samsung-reveals-ultrathin-galaxy-tab-s12-series-and-nearly-a-full-day-of-battery-life/)
- [Some Pixel models experiencing NFC bug that breaks tap-to-pay — 9to5Google](https://9to5google.com/2026/09/30/google-pixel-experiencing-nfc-bug-breaking-tap-to-pay/)
- [Apple Music 7.0 beta brings Liquid Glass redesign to Android — 9to5Google](https://9to5google.com/2026/09/30/apple-music-7-0-redesign-liquid-glass/)
- [Apple makes the AirPods 5 slightly less hostile to repair — The Register](https://www.theregister.com/personal-tech/2026/09/30/apple-makes-the-airpods-5-slightly-less-hostile-to-repair/5300042)
