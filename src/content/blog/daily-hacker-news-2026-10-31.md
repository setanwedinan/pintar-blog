---
title: 'Hari kebocoran: 6,3 miliar dolar keluar dari Binance dalam 20 menit, dan sembilan platform AI kena'
description: 'Rangkuman Hacker News 31 Oktober 2026: Binance kehilangan sekitar 6,3 miliar dolar dalam sekitar 20 menit, Northflank menyuruh semua pengguna menganggap environment variable sudah terbuka, Wiz mencatat sembilan platform AI kena dalam satu bulan, Scribd mengirim surat pemberitahuan kebocoran, dan rancangan larangan stealth bot yang bisa menghantam jurnalisme.'
pubDate: 2026-10-31T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- Sekitar **6,3 miliar dolar** aset kripto disedot dari wallet Binance di sedikitnya sepuluh blockchain, mayoritas dalam waktu sekitar 20 menit pada 29 Oktober. Binance menyebut sekitar separuh dana sudah dibekukan. _(Wired, TRM Labs)_
- Tiga firma pelacak kripto mengaitkan serangan itu dengan hacker Korea Utara. Binance dan aparat belum menamai tersangka. _(Wired)_
- **Northflank** menyuruh semua pengguna menganggap environment variable mereka sudah didekripsi dan segera merotasi seluruh secret. Beberapa pengguna melaporkan AI API key mereka dipakai orang lain. _(status.northflank.com)_
- Wiz mencatat **sembilan platform AI developer** mengumumkan insiden keamanan sepanjang Oktober, dari Fireworks AI sampai Northflank. _(Wiz)_
- Di sisi lain, rancangan undang-undang anti stealth bot di AS bisa ikut menghantam scraping yang dipakai jurnalisme investigasi. _(TechPolicy.Press)_

## 💸 Binance: 20 menit, 6,3 miliar dolar, sepuluh blockchain

Mulai sekitar pukul 16.00 waktu Timur AS hari Kamis, hacker menguras sekitar **6,3 miliar dolar** aset kripto dari wallet milik bursa Binance. Dana itu tersebar di berbagai blockchain, dan menurut Wired ini tampak sebagai perampokan kripto terbesar sepanjang catatan.

Binance langsung menangguhkan seluruh deposit dan penarikan sebagai bagian dari investigasi, lalu menyatakan sedang mengidentifikasi pelakunya. Bersama firma kripto lain, perusahaan itu menyebut sudah membekukan **sekitar separuh** dana curian. Sisanya? Banyak yang kemungkinan tidak bisa dibekukan sama sekali.

Kecepatannya yang bikin merinding. Analisis TRM Labs menyebut mayoritas dana diambil dalam rentang **sekitar 20 menit** pada 29 Oktober. Wallet Binance di sedikitnya sepuluh blockchain — termasuk Ethereum, Bitcoin, Tron, dan Solana — dikuras dan dikirim ke banyak alamat yang dikendalikan satu penyerang.

TRM juga merekonstruksi persiapannya. Aktivitas mulai **setidaknya 36 jam** sebelum pencurian. Salah satu wallet penyerang menerima tiga penarikan kecil sebagai uji coba. Dini hari 29 Oktober, kode serangan dipasang dan diuji di dua wallet. Belakangan hari yang sama, versi final diuji di wallet ketiga, lalu dana uji dikembalikan. **Empat jam setelah gladi itu**, kode yang sama dipasang di hot wallet Binance.

Hot wallet itu, sesuai namanya, tersambung ke internet karena dipakai melayani penarikan nasabah.

Soal siapa di belakangnya: TRM Labs dan Chainalysis sama-sama menduga kelompok **TraderTraitor** mungkin terlibat. Tom Robinson, chief scientist sekaligus salah satu pendiri Elliptic, menyebut pihaknya menilai Korea Utara kemungkinan bertanggung jawab, meski Elliptic belum mengaitkannya secara spesifik ke satu kelompok dan hanya melihat tumpang tindih pola. Ia menambahkan, kalau benar Korea Utara, satu pencurian ini saja hampir menggandakan total kripto yang selama ini dicuri rezim tersebut.

Yang perlu dicatat: **Binance dan aparat belum menamai keterkaitan apa pun**. Semua tuduhan itu masih analisis pihak ketiga.

## 🧯 Northflank: anggap semua environment variable sudah terbuka

Di dunia developer, insiden Northflank mungkin lebih terasa langsung. Status page-nya membuka dengan kalimat yang tidak enak dibaca: **anggap semua environment variable sudah didekripsi**, dan rotasi semua key sekarang.

Urutannya begini. Pada 30 Oktober pukul 09.40 waktu Timur, Northflank membuka insiden keamanan dan meminta pengguna merotasi environment variable. Pukul 09.58, peringatan itu naik level: anggap semuanya sudah didekripsi, matikan atau rotasi semua key. Pukul 11.12, rotasi secret untuk Postgres dan MongoDB diaktifkan untuk semua pengguna, dengan saran mematikan akses publik ke addon.

Pukul 19.38, masalahnya jadi konkret: **pengguna melaporkan AI API key yang mereka pasok ke platform dipakai tanpa izin**. Northflank meminta semua orang memeriksa log pemakaian dan tagihan AI mereka.

Timeline yang mereka publikasikan cukup gamblang. Pukul 11.43 UTC ada peringatan ancaman dari Wiz. Satu menit kemudian insinyur Northflank meninjau peringatan itu. Pukul 12.02 patch kebijakan jaringan pertama dipasang, 12.50 patch tambahan, 13.00 mereka minta dukungan tim CIRT Wiz. Sampai 31 Oktober, tujuh komponen platform masih berstatus major outage, dan rotasi secret untuk MySQL serta Redis baru tersedia pagi itu.

Northflank sendiri mencatat bahwa laporan-laporan itu **konsisten dengan pola serangan yang lebih luas terhadap kredensial AI**, dan menyebut ada alamat IP serupa dalam laporan Wiz berjudul "Black October".

## 🕸️ Polanya bukan kebetulan: sembilan platform dalam satu bulan

Laporan Wiz itu memang layak dibaca pelan. Setidaknya **sembilan platform AI developer** mengumumkan insiden sepanjang Oktober:

- Fireworks AI, 6 Oktober
- Andromeda, 9 Oktober
- Zeabur, 14 Oktober
- Lightning AI, 15 Oktober
- OpenCode, 16–17 Oktober
- Railway, 20 Oktober
- Warp, 23 Oktober
- CommandCode, 28 Oktober
- Northflank, 30 Oktober

Fireworks, OpenCode, dan Warp melaporkan indikasi serangan **"agent swarm"**. Andromeda menyebut insidennya bagian dari "serangan skala industri". OpenCode dan CommandCode secara eksplisit mengaitkan insiden mereka dengan upaya **distilasi** — memanen keluaran model lewat infrastruktur orang lain.

Dampaknya tidak main-main. Zeabur menulis laporan lengkap dan menyatakan akan **menutup layanan** karena insiden tersebut. Railway merilis laporan awal beserta timeline. Wiz menyebut, di bulan lain, rangkaian ini sudah jadi berita keamanan teratas — tapi karena insidennya banyak, sedikit yang menghubungkan titik-titiknya.

Pola yang sama muncul di semua kasus tadi: kredensial, bukan eksploitasi nol-hari. Ambil secret, pakai, jual, atau pakai untuk berlatih model.

## 📚 Scribd, dan surat yang datang tanpa pengumuman

Di Hacker News, sebuah unggahan berjudul "Tell HN: Scribd Breached" mengumpulkan 268 poin dan 103 komentar. Isinya surat pemberitahuan yang diterima pengguna pada Senin, 26 Oktober 2026, dikirim atas nama Scribd, Inc. lewat Epiq sebagai mitra notifikasi.

Scribd adalah induk dari Scribd, Slideshare, Everand, dan Fable. Menurut surat itu, pihak ketiga tanpa izin kemungkinan mengakses data pengguna di salah satu sistem mereka. Yang terdampak: **alamat email**, empat digit terakhir kartu kredit beserta negara, penerbit kartu, tanggal kedaluwarsa, dan riwayat pembayaran — tanpa detail kartu.

Scribd menyebut tidak ada bukti data itu disalahgunakan, mengakhiri akses tidak sah, dan melapor ke penegak hukum serta otoritas perlindungan data. Tapi surat itu tidak menjelaskan berapa banyak pengguna yang kena, atau bagaimana aksesnya bisa terjadi.

## 🧩 Extension Claude Code yang bukan dari Anthropic

Satu lagi yang masuk daftar hari ini, meski bukan dari jalur yang sama. Anthropic menyatakan ada pihak jahat yang memakai akses ke marketplace Cursor untuk menerbitkan salinan **"tampered"** dari extension Claude Code — extension yang bukan mereka buat dan bukan mereka terbitkan.

Felix Rieseberg dari Anthropic menegaskan insiden itu bukan kompromi terhadap sistem atau karyawan Anthropic, dan mereka sedang bekerja sama dengan Cursor.

Bagi kamu yang memasang extension coding agent dari marketplace mana pun, ini pengingat yang tidak nyaman: **nama besar di halaman listing tidak menjamin siapa yang memegang akses publikasinya**.

## ⚖️ Sisi lain: larangan bot diam-diam bisa melumpuhkan jurnalisme

Masih dari Hacker News, tulisan Lila Bailey dan Tess Vartanian di TechPolicy.Press menawarkan sudut yang jarang muncul. Lebih dari **300 perwakilan media** datang ke Capitol Hill bulan lalu untuk mendorong Stealth Bot Prohibition Act (H.R. 9915).

Keluhannya sah: newsroom dibanjiri trafik otomatis, mayoritas dari pengembang AI, dan itu memangkas trafik rujukan serta pendapatan iklan.

Masalahnya, rancangan itu tidak menargetkan kerusakan akibat crawling agresif. Ia mewajibkan **siapa pun** yang mengakses situs secara otomatis untuk mengungkap identitas dan tujuan pengambilan data publik. Denda dari FTC bisa mencapai 53.000 dolar, tanpa definisi jelas soal apa yang dimaksud "berpotensi membebani" situs. Versi New York (S9934A) malah membolehkan penerbit meminta subpoena untuk membuka identitas crawler tanpa perlu membuktikan ada kerugian.

Para penulis menunjuk contoh yang sulit dibantah: investigasi Pulitzer Wall Street Journal pada 2022 menganalisis lebih dari **31.000 pengungkapan keuangan** dari 12.000 pejabat senior, dan menemukan hampir seperempatnya bertransaksi saham di industri yang diawasi lembaga mereka. Investigasi sebesar itu tidak mungkin tanpa scraping.

Di sisi teknis, HN juga ramai membahas **cfsolve**, pustaka pemecah Cloudflare Turnstile yang tidak butuh browser headless — 257 poin. Alat semacam ini yang jadi alasan kenapa tembok berbasis deteksi browser terus dinaikkan, dan kenapa situs biasa ikut menanggung ongkosnya.

## Tapi… ada tapinya

Kabar "separuh dana sudah dibekukan" itu terdengar melegakan, tapi separuh yang lain belum tentu bisa kembali. Aset yang sudah berpindah lintas rantai dan dipecah ke banyak alamat jauh lebih sulit dibekukan, dan Binance tetap menanggung celah kepercayaan yang tidak selesai dengan satu siaran pers.

Untuk kasus Northflank, saran "rotasi semua secret" juga tidak sesederhana bunyinya. Kalau kamu punya puluhan service dengan secret yang saling terkait, rotasi berantai bisa memakan waktu berjam-jam dan berisiko mematikan layanan yang sedang jalan.

Dan soal RUU bot: kritik terhadap scraping AI itu benar. Tapi solusi yang memaksa setiap pengakses otomatis menunjukkan identitas akan lebih dulu menghantam arsip, peneliti, dan jurnalis — pihak yang justru paling kecil kontribusinya pada masalah yang mau diselesaikan.

## 🗣️ Pendapat saya

Yang membuat saya berhenti membaca lama di laporan Binance bukan angka 6,3 miliar dolarnya, tapi angka 20 menitnya. Persiapan 36 jam, gladi di wallet ketiga, lalu eksekusi. Itu bukan kekacauan, itu **prosedur**.

Dan yang paling saya pikirkan justru sembilan platform AI developer dalam satu bulan. Kita sudah terbiasa menyimpan OpenAI key, Anthropic key, Hugging Face token di dashboard platform deploy, karena memang itu cara kerjanya. Tapi kalau satu platform bisa membocorkan semuanya sekaligus, maka "menyimpan secret di tempat yang rapi" ternyata bukan strategi keamanan — itu cuma kenyamanan.

Saya belum punya jawaban bagus untuk ini. Yang saya tahu, setelah membaca Zeabur sampai harus menutup layanan gara-gara insiden, taruhannya bukan cuma tagihan API yang membengkak.

Kalian sendiri, sudah pernah mengecek kapan terakhir kali merotasi API key yang tersimpan di platform deploy?

## 🔗 Sumber

- [Wired: The 6.3 Billion Dollar Binance Hack Was Pulled Off in Just 20 Minutes](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/)
- [TRM Labs: North Korea steals 6.36 billion dollar from Binance](https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history)
- [Northflank Status: Security incident](https://status.northflank.com)
- [Wiz: Black October for AI Developer Platforms](https://www.wiz.io/blog/black-october-for-ai-developer-platforms)
- [Hacker News: Tell HN, Scribd Breached](https://news.ycombinator.com/item?id=50312756)
- [Felix Rieseberg via TechMeme: tampered Claude Code extension on Cursor marketplace](https://www.techmeme.com/261031/p2#a261031p2)
- [TechPolicy.Press: Breaking the Open Web Wont Stop the Bad Bots](https://www.techpolicy.press/breaking-the-open-web-wont-stop-the-bad-bots/)
- [Hacker News: Cloudflare Turnstile solver library (cfsolve)](https://github.com/chris124567/cfsolve)
