---
title: '🤖 Google Batasi Gemini Gratis ke Model Terlemah 9 Oktober, Bug Bounty Open Source Dibekukan karena Banjir Laporan AI Palsu'
description: 'Google memangkas akses model Gemini bagi pengguna akun pribadi tanpa langganan mulai 9 Oktober 2026, membekukan program bug bounty open source karena lonjakan laporan AI tidak valid, dan mulai memberlakukan aturan sideloading baru di empat negara termasuk Indonesia. Ditambah Musk yang mengubah nama unit AI SpaceX dan laporan bahwa John Ternus efektif memimpin desain Apple.'
pubDate: 2026-10-05T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 📋 TL;DR

Hari ini dunia teknologi didominasi satu pola yang sama: perusahaan besar menarik kembali sesuatu yang tadinya terbuka, lalu memasang penjaga di pintunya. Google memangkas akses model Gemini untuk pengguna gratis, membekukan program bug bounty open source karena kewalahan laporan palsu buatan AI, dan mempercepat aturan sideloading Android di Indonesia. Sementara itu Elon Musk mengganti nama unit AI SpaceX, dan sebuah laporan baru mengungkap bagaimana John Ternus sebenarnya sudah memimpin desain Apple sebelum resmi menyandang gelar CEO.

## 🚫 Gemini Gratis Dipangkas ke Model Terlemah Mulai 9 Oktober

Perubahan paling berdampak langsung bagi pengguna Indonesia adalah perombakan tier Gemini yang mulai berlaku **9 Oktober 2026**. Menurut dokumentasi resmi Google dan laporan The Decoder, pengguna akun pribadi **tanpa langganan apa pun** kini hanya akan mendapat akses ke model **3.5 Flash-Lite** — model terkecil dan paling lemah di jajaran Gemini.

Sebelumnya, tier gratis masih memberi akses ke **3.6 Flash** dan akses bervariasi ke **3.1 Pro**. Artinya ini pengurangan yang cukup signifikan.

Susunan tier baru menurut laporan tersebut:

- **Gratis (tanpa langganan):** hanya 3.5 Flash-Lite
- **AI Plus (USD 4,99/bulan):** hanya 3.5 Flash-Lite dan 3.6 Flash — **kehilangan akses ke Pro**
- **AI Pro (USD 19,99/bulan):** akses ketiga model
- **AI Ultra (USD 99,99 atau USD 199,99/bulan):** akses penuh

The Decoder mencatat dampak nyata dari perubahan ini kemungkinan kecil, karena sebagian besar pengguna kasual memang tidak tahu model apa yang sedang mereka pakai. Pengguna tingkat lanjut — beberapa persen dari total basis — diperkirakan sudah berlangganan. Namun ada pembacaan lain: Google mungkin sedang menyiapkan panggung untuk **Gemini 4 Argon**, model frontier yang biaya operasionalnya jauh lebih mahal.

Bagi pengguna di Indonesia yang selama ini mengandalkan akun Google personal gratis, ini saatnya memutuskan: tetap di Flash-Lite, atau membayar.

Sumber: [The Decoder](https://the-decoder.com/googles-new-gemini-tiers-cut-free-users-to-its-weakest-model-and-lock-5-month-subscribers-out-of-pro/), [TechMeme](https://techmeme.com/)

## 🐛 Google Bekukan Bug Bounty Open Source karena Laporan AI Palsu

Bulan lalu TechCrunch melaporkan bahwa para ahli keamanan siber sudah memperingatkan bahaya **AI slop** bagi program bug bounty. Sekarang peringatan itu jadi kenyataan di Google.

Google resmi **menghentikan penerimaan laporan produk baru** untuk **Open Source Software Vulnerability Rewards Program (OSS VRP)** per **1 Oktober 2026**, dengan janji akan memberi pembaruan pada **kuartal pertama 2027**. Alasannya tertulis jelas dalam pengumuman mereka: sebuah "kenaikan signifikan dalam pengajuan otomatis, yang sebagian besar besar tidak valid."

Menurut laporan Tom's Hardware yang dikutip TechCrunch, para engineer Google dan maintainer open source kewalahan oleh laporan yang tidak valid atau mengandung **halusinasi**. Ini adalah ironi yang cukup telak — AI dipakai untuk mencari kelemahan perangkat lunak, tapi justru membanjiri prosesnya dengan sampah.

Selama masa jeda, Google mengarahkan peserta ke program bug bounty mereka yang lain.

Sumber: [TechCrunch](https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/), [Neowin](https://www.neowin.net/), [Google Bug Hunters](https://bughunters.google.com/)

## 📱 Aturan Sideloading Android Baru Mulai Berlaku di Indonesia

Ini yang paling relevan untuk pembaca di Tanah Air. Google mulai **memberlakukan alur sideloading baru secara resmi di empat negara**: **Brasil, Indonesia, Singapura, dan Thailand**.

Mekanismenya: setiap pengguna perangkat **Android 7 atau lebih baru** kini perlu melewati apa yang Google sebut _advanced flow_ untuk memasang aplikasi pihak ketiga dari pengembang yang belum terverifikasi. Laporan Notebookcheck menyebutkan alurnya mengharuskan pengguna mengaktifkan pengaturan baru di **Developer options** dan **menunggu 24 jam** sebelum aplikasi bisa dipasang.

Pengecualiannya: jika pengembang atau tim di balik aplikasi tersebut sudah terdaftar di Google, pengguna bisa memasangnya seperti biasa.

Selain Play Store, toko aplikasi yang saat ini sudah diotorisasi antara lain **Samsung Galaxy Store, Honor App Market (Huawei), Oppo App Market, Xiaomi GetApps, vivo V-Appstore, dan Transsion Palm Store**.

Google beralasan langkah ini mengurangi penipuan lewat aplikasi berbahaya dan mencegah skenario jangka panjang di mana sebuah aplikasi membangun kepercayaan lalu berganti kepemilikan diam-diam. Uji sesungguhnya baru datang pada **2027**, saat Google berencana memperluas verifikasi secara global ke semua aplikasi di perangkat tersertifikasi.

Sumber: [Notebookcheck](https://www.notebookcheck.net/Google-implements-Android-s-new-mandatory-sideloading-rules-officially-in-four-countries.1415672.0.html), [Google Android Developers Blog](https://developer.android.com/blog/posts/android-developer-verification-rolling-out-to-all-developers-on-play-console-and-android-developer-console)

## 🗣️ Pichai Turun Tangan Setelah Kreator OpenClaw Mengeluh di X

Sebuah kisah menarik soal jalur eskalasi. **Peter Steinberger**, pembuat proyek open source **OpenClaw**, secara publik bertanya di X apakah ada di antara jaringannya yang punya kontak di Google untuk membantu mempercepat tinjauan aplikasi Android OpenClaw yang sudah lebih dari sepekan tertahan.

Balasan datang dari level paling atas: **Sundar Pichai**, CEO Alphabet, membalas langsung di utas tersebut dengan pesan singkat, **"Ack, will follow up."** Tidak lama setelahnya Steinberger mengonfirmasi bahwa pembaruannya sudah live.

Menurut laporan BigGo Finance, pertukaran itu mengumpulkan sekitar **2,1 juta views**. OpenClaw sendiri dimulai sebagai proyek pribadi Steinberger pada **November 2025**, telah melampaui **387.000 bintang GitHub** dengan sekitar 81.000 fork, dan timnya berkembang menjadi 10 orang. **Steinberger bergabung dengan OpenAI pada Februari**, dan proyek itu direncanakan bergerak menjadi yayasan nirlaba independen.

Sumber: [BigGo Finance](https://finance.biggo.com/news/2d2ea1d9-038a-48d7-9969-d27fad034414)

## 🚀 Musk Ganti Nama Unit AI SpaceX Jadi SpaceXSI

Dalam balasan di X pada 4 Oktober 2026, **Elon Musk** menyatakan bahwa SpaceX akan mengganti nama unit AI-nya dari **SpaceXAI** menjadi **SpaceXSI**. Perubahan ini mengikuti dorongan Presiden Trump untuk mengganti istilah "artificial intelligence" dengan "super intelligence". Musk sebelumnya sudah memberi sinyal persetujuannya terhadap preferensi tersebut.

The Information melaporkan perubahan nama ini sebagai briefing tersendiri, sementara Gizmodo dan sejumlah media teknologi lain ikut memberitakannya.

Sumber: [The Information](https://www.theinformation.com/briefings/musk-change-spacexais-name-spacexsi), [Gizmodo](https://gizmodo.com/), [Forbes](https://www.forbes.com/)

## 🏛️ Trump Bentuk Super Intelligence Force

Masih di ranah kebijakan AI: Presiden Trump mengumumkan pembentukan **Super Intelligence Force**, sebuah gugus tugas Gedung Putih yang akan menyusun laporan soal risiko dan peluang AI dalam **120 hari**.

Yang memimpin bukan hanya satu orang. Laporan menyebut **Direktur Intelijen Nasional Jay Clayton** sebagai salah satu tokoh yang memimpin, bersama **Ketua FTC Andrew Ferguson**, **Emil Michael** dari Kementerian Pertahanan, dan **Scott Kupor** dari Kantor Manajemen Personalia. Jay Clayton sebelumnya dilaporkan juga akan mengetuai gugus tugas AI tersebut.

Sumber: [TechCrunch](https://techcrunch.com/), [Washington Post](https://www.washingtonpost.com/), [Bloomberg](https://www.bloomberg.com/), [Reuters](https://www.reuters.com/)

## 💻 John Ternus Dilaporkan Efektif Memimpin Desain Apple

Sebuah laporan baru mengungkap bahwa **John Ternus** — yang kini menjabat CEO Apple — secara efektif sudah menjadi **kepala desain** perusahaan, dengan bekerja langsung di studio beberapa kali dalam sepekan.

Menurut laporan yang dikutip sejumlah media Apple, dua pemimpin desain Apple saat ini — **Molly Anderson** (desain industri) dan **Steve Lemay** (desain antarmuka manusia) — kini melapor langsung ke Ternus.

Cerita ini berjalan seiring dengan bocoran soal **MacBook Pro layar sentuh OLED** generasi baru yang disebut akan memiliki desain **jauh lebih ringan** dibanding model saat ini.

Sumber: [9to5Mac](https://9to5mac.com/2026/10/04/john-ternus-is-taking-a-more-hands-on-role-in-apples-design-teams-as-ceo-report/), [AppleInsider](https://appleinsider.com/articles/26/10/04/touch-screen-macbook-pro-will-be-significantly-lighter), [TechMeme](https://techmeme.com/)

## 📌 Sumber Lengkap

- [The Decoder — Gemini tiers](https://the-decoder.com/googles-new-gemini-tiers-cut-free-users-to-its-weakest-model-and-lock-5-month-subscribers-out-of-pro/)
- [TechCrunch — OSS bug bounty dibekukan](https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/)
- [Notebookcheck — sideloading 4 negara](https://www.notebookcheck.net/Google-implements-Android-s-new-mandatory-sideloading-rules-officially-in-four-countries.1415672.0.html)
- [BigGo Finance — Pichai dan OpenClaw](https://finance.biggo.com/news/2d2ea1d9-038a-48d7-9969-d27fad034414)
- [The Information — SpaceXSI](https://www.theinformation.com/briefings/musk-change-spacexais-name-spacexsi)
- [9to5Mac — Ternus dan desain Apple](https://9to5mac.com/2026/10/04/john-ternus-is-taking-a-more-hands-on-role-in-apples-design-teams-as-ceo-report/)
- [TechMeme](https://techmeme.com/?full=t)
