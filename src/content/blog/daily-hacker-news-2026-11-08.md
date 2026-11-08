---
title: 'Tombol jangan tanya lagi menyimpan sandi di 1.122 repo, dan Discord membuktikan Electron bisa ditinggal'
description: 'Apiiro menemukan kredensial di 1.122 berkas konfigurasi Claude Code yang publik, Microsoft Research kehilangan grup AI Frontiers, dan klien Discord versi Rust memakai 290MB RAM.'
pubDate: 2026-11-08T13:00:00Z
tags: ['berita', 'Hacker News', 'keamanan', 'AI']
---

## 🔍 TL;DR

- Apiiro memindai 104.185 salinan publik `.claude/settings.local.json` di 103.617 repo dan menemukan **1.122 berkas memuat kredensial**, total 1.379 secret berbeda _(The Hacker News)_
- **215 dari berkas itu lolos** dari gitleaks maupun TruffleHog, karena scanner mencari pola kunci, bukan password di tengah baris perintah _(The Hacker News)_
- Rincian teknis grafik pengetahuan Mac sekarang terbuka: 51 database SQLite, 181 kelas entitas, 278 predikat, dan 144 fitur untuk menebak siapa keluarga _(Eighth Rank)_
- Grup AI Frontiers di Microsoft Research bubar setelah di-reorg ke Microsoft AI, dan pendirinya menulis sendiri alasan kepergiannya. _(hunch.net)_
- Klien Discord versi Rust memakai 290,2MB RAM dengan dua akun aktif, sementara klien Electron lama masih menampilkan layar Starting. _(Windows Latest)_

## 🕹️ Game balap lama yang hidup lagi di tab browser

Kabar paling banyak dipuji di Hacker News hari ini justru yang paling sederhana: Need for Speed Underground 2 bisa dimainkan langsung di browser lewat nfsu2.xyz.

Pos itu mengumpulkan **1.046 poin dan 259 komentar**, angka tertinggi di daftar top hari ini. Buat kamu yang tumbuh dengan game balap jalanan era 2000-an, ini bukan sekadar nostalgia. Ini bukti bahwa satu game utuh bisa dipindahkan ke tab browser tanpa instalasi apa pun, dan orang-orang masih mau menghabiskan waktu di dalamnya. ([nfsu2.xyz](https://nfsu2.xyz/), [diskusi HN](https://news.ycombinator.com/item?id=50403052))

## 🧬 Grafik Mac itu sekarang punya angka, dan angkanya banyak

Ini lanjutan dari cerita yang sudah dibahas kemarin, tapi sumber primernya sekarang terbuka lebih lebar. Tim Eighth Rank merilis rincian teknis penuh dari apa yang mereka sebut Personal Knowledge Graph milik Apple.

> Catatan: versi awal cerita ini sudah ditulis di [post Hacker News 7 November](https://pintar-blog.vercel.app/blog/daily-hacker-news-2026-11-07/). Bagian di bawah hanya memuat detail yang belum ada di sana.

Semua hasil kerja dua daemon itu disimpan di `~/Library/IntelligencePlatform`, berisi **51 database SQLite**. Berkasnya plaintext, tapi berada di zona yang dilindungi TCC Full Disk Access. Yang paling menarik adalah `graph.db`: sebuah _triple store_ dengan **181 kelas entitas dan 278 predikat**. Setiap baris berisi subjek, predikat, objek, plus tingkat keyakinan (_confidence_) antara 0 dan 1.

Dari 181 kelas itu, **57 di antaranya mendeskripsikan aktivitas**: tidur, olahraga, mindfulness, pergi tidur, perjalanan harian, makan. Hampir sepertiga kosakata grafik dipakai untuk mencatat apa yang sedang kamu lakukan, bukan siapa atau di mana kamu.

Apa saja yang masuk ke grafik itu? Kontak, wajah di Photos, judul dan peserta Calendar, Family Sharing (termasuk umur setiap anggota), kontak darurat Medical ID di aplikasi Health, orang yang ditemukan Siri Suggestions di Mail dan Messages, sampai daftar aplikasi terpasang. Di tabel terpisah ada log komunikasi (siapa, kapan, aplikasi apa, arahnya, tanpa isi pesan), data lokasi dan pergerakan, serta sinyal perangkat seperti layar terkunci, Wi-Fi, Bluetooth, dan status pengisian daya.

Bagian yang paling menarik perhatian ada di **dua model CoreML** bernama `EntityTagging_Family.mlmodelc` dan `EntityTagging_FamilyAndFriends.mlmodelc`. Keduanya klasifikasi XGBoost yang menerima **144 fitur**. Dua puluh fitur soal identitas, empat puluh soal pola komunikasi, dan delapan puluh empat soal foto tempat dua orang muncul bersama, dikondisikan pada hari dan jam.

Nama fiturnya ditulis apa adanya di `metadata.json`. Salah satunya `photosPersonPosteriorProbabilityGivenSaturdayNight`. Artinya, ada classifier yang dikirim ke laptopmu yang secara harfiah menimbang: seberapa besar kemungkinan orang ini keluarga, kalau dilihat dari seberapa sering dia muncul di fotomu pada Sabtu malam.

Skornya tidak masuk ke triple store, tapi ke tabel sendiri: `entityTagging.db`, satu baris per orang, dengan **17 kolom relasi** dari keluarga sampai rekan kerja, dihitung ulang tiap hari. Hanya dua dari 17 kolom itu yang punya model terkirim di baliknya.

Ada satu detail yang mudah dilewatkan. Grafik yang aktif memang "lupa": hapus satu kontak, dan jalankan ulang, tabelnya diganti utuh. Tapi di sebelahnya ada `expired_stable_graph`, tempat baris yang ditarik disimpan lengkap dengan confidence dan sumbernya. Penulisnya sendiri tidak bisa memastikan berapa lama data itu tinggal di sana. Di Mac-nya, baris lama masih terbaca.

Tim itu juga merilis **iKnow**, dashboard lokal open source untuk membaca grafikmu sendiri. Analisisnya dilakukan di macOS 26.6.2, dan tulisannya keluar 28 Oktober 2026. ([Eighth Rank](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph), [diskusi HN](https://news.ycombinator.com/item?id=50403097))

## 🔑 Satu klik "jangan tanya lagi", dan sandimu masuk repo publik

Apiiro memindai **104.185 salinan publik** berkas `.claude/settings.local.json` di 103.617 repo GitHub. Hasilnya: **1.122 berkas memuat setidaknya satu kredensial**, dengan total 1.379 secret berbeda.

Alurnya sederhana dan sangat manusiawi. Claude Code mengusulkan sebuah perintah yang mengandung kredensial, kamu setujui dengan "Yes, and don't ask again", dan aturan izin itu disimpan apa adanya, termasuk sandinya, ke `.claude/settings.local.json`. Berkas itu **tidak masuk .gitignore secara default**.

Isi kebocorannya didominasi hal yang menyakitkan: 379 password database, 122 service-role key Supabase, 43 kredensial SSH, 42 token GitHub/GitLab/npm, dan 23 kunci AWS. Dua pemindai secret populer, gitleaks dan TruffleHog, hanya menandai 564 dan 643 dari 1.122 berkas itu. **215 berkas lolos dari keduanya**, karena scanner mencari pola kunci yang dikenal, sementara ini password biasa di tengah baris perintah seperti `PGPASSWORD=` atau `sshpass -p`.

Yang paling ngga nyaman: dalam 539 dari 1.105 repo yang ditelusuri, berkas itu diubah oleh commit yang mencantumkan Claude sebagai co-author. Artinya bukan cuma manusia yang lalai, agent-nya sendiri ikut menyimpan jejak. ([The Hacker News](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html), [diskusi HN](https://news.ycombinator.com/item?id=50407882))

## 🧪 Microsoft Research kehilangan grup AI Frontiers, dan alasannya ditulis terbuka

John Langford menulis sendiri kabar bubarnya AI Frontiers di blog pribadinya. Grup itu dibentuk pada 2023 setelah ledakan ChatGPT, dengan sekitar **50 orang**, dan sempat melahirkan Autogen serta agen computer-use bernama Fara.

Pada awal September, grup itu di-reorg masuk ke Microsoft AI. Masalahnya bukan sekadar pindah atasan. Menurut Langford, filosofi kepemimpinan MAI yang berasal dari Inflection tidak cocok: fokusnya _scaling_, dan secara agresif bukan riset. Ia menyebut fokus scaling-saja itu "misdirected and not fun", lalu memilih pergi. Sebagian besar tim kepemimpinan pendiri AIF, tulisnya, sampai pada kesimpulan yang sama.

Ia juga menjawab pertanyaan yang wajar: kenapa ngga kembali ke MSR saja? Dua alasan. Pertama, ia ngga nyaman berada di perusahaan yang risetnya tidak punya jalur ke pemakaian nyata. Kedua, ia khawatir ada kerusakan pada "kesepakatan dasar" di MSR, yaitu bahwa kerja bagus akan berbuah hal baik.

Konsekuensi kecil yang disebut eksplisit: **tidak ada internship AI Frontiers tahun depan**. Pos ini jadi salah satu diskusi terpanas hari ini, 476 poin dan 290 komentar. ([hunch.net](https://hunch.net/?p=13764006))

## 💬 Discord membuktikan Electron bisa ditinggalkan

Klip 15 detik dari CTO Discord Stanislav Vishnevskiy jadi bahan perdebatan: klien Electron lama di kiri, klien baru berbasis Rust di kanan, dua-duanya _cold start_. Klien baru memuat daftar teman sebelum aplikasi lama selesai melewati layar pembuka. Videonya sudah 2,3 juta penayangan saat artikel ini ditulis.

Angka yang paling sering dikutip: **290,2MB RAM** di Task Manager untuk klien baru bernama Discord Phoenix, dan itu dengan **dua akun aktif bersamaan**. Sebagai pembanding, karyawan Discord sendiri pernah menyebut pemakaian normal di bawah 1GB pada Desember 2025. Klien baru juga melewati layar "Starting" sepenuhnya karena update berjalan di background.

Secara teknis, Discord memilih **GPUI**, framework UI GPU-accelerated untuk Rust dari pembuat editor Zed, bukan Tauri dan bukan WinUI. Webview tetap dipakai untuk hal yang memang butuh HTML, seperti embed YouTube. Login token disimpan di system keyring, yaitu Credential Manager di Windows.

Versi ini belum rilis publik. Direktur marketing Discord, Ryan K. Rigney, bilang mereka masuk private testing dulu. ([Windows Latest](https://www.windowslatest.com/2026/11/06/every-windows-11-app-should-kill-electron-and-discord-just-showed-why-no-starting-screen-and-70-less-ram-even-with-two-accounts-signed-in/), [diskusi HN](https://news.ycombinator.com/item?id=50403507))

## 🧾 Tapi… ada tapinya

Tiga dari empat cerita di atas bergantung pada satu angka dari satu snapshot.

Angka 290,2MB itu diambil dari satu klip, di dua laptop ThinkPad, dengan build awal yang belum stabil. Discord sendiri belum menerbitkan benchmark _like-for-like_ antara dua klien. Wartawan Windows Latest menuliskannya dengan jujur, dan itu penting: 70 persen lebih hemat bisa jadi benar, tapi belum diuji oleh pihak ketiga.

Di cerita Apple, penulisnya juga eksplisit soal batas pengetahuan mereka. Dari 17 kolom relasi di `entityTagging.db`, hanya dua yang punya model terkirim di baliknya. Lima belas sisanya tidak bisa mereka lacak. Dan lama penyimpanan `expired_stable_graph` cuma perkiraan sekitar 48 jam, sementara di Mac penulisnya sendiri masih ada baris jauh lebih lama.

Untuk Apiiro, perlu dicatat satu hal yang mereka sendiri tidak uji: **apakah kredensial itu masih berfungsi**. Mereka menemukan kunci dan password, bukan membuktikan bahwa semuanya masih hidup.

Dan game NFS Underground 2 di browser? Itu menyenangkan, tapi juga pengingat bahwa situs-situs seperti ini biasanya hidup dari antusiasme satu orang dan bisa hilang kapan saja.

## 🗣️ Pendapat saya

Yang bikin saya paling ngga tenang bukan angka 1.122 berkas di GitHub. Itu masalah teknis, dan solusinya jelas: masukkan `.claude/settings.local.json` ke template `.gitignore`, pindai folder agent di pre-commit, rotasi semua kunci yang pernah lewat.

Yang bikin saya berhenti adalah fitur `photosPersonPosteriorProbabilityGivenSaturdayNight`. Bukan karena nama variabelnya aneh, tapi karena nama itu menjelaskan cara mesin menilai hubungan manusia: dari siapa yang muncul di fotomu, hari apa, jam berapa. Itu pola yang ngga pernah kita sepakati untuk dibaca.

Saya ngga tahu harus bagaimana. Membaca grafik itu sendiri butuh Full Disk Access, artinya aplikasi lain yang kamu beri izin itu juga bisa membacanya. Dan alat seperti iKnow hanya membantu kamu _melihat_, bukan menghentikan pengumpulan.

Untuk Discord, saya termasuk yang senang. Tapi saya juga sadar bahwa satu perusahaan memilih Rust bukan karena idealism, melainkan karena memori jadi mahal. Kalau harga DRAM turun lagi, kita akan lihat berapa banyak aplikasi yang benar-benar pindah.

## 💬 Pertanyaan buat kalian

Kalian lebih takut pada grafik yang dibangun Apple tentang keluargamu, atau pada sandi database yang duduk manis di repo publik selama berbulan-bulan tanpa ada yang sadar?

## 🔗 Sumber

- [Need for Speed Underground 2 online in the browser](https://nfsu2.xyz/)
- [Diskusi HN: NFS Underground 2](https://news.ycombinator.com/item?id=50403052)
- [Anatomy of Apple's Personal Knowledge Graph — Eighth Rank](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph)
- [Diskusi HN: Apple Personal Knowledge Graph](https://news.ycombinator.com/item?id=50403097)
- [Claude Code's Don't Ask Again file exposes passwords — The Hacker News](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html)
- [Diskusi HN: Claude Code secrets](https://news.ycombinator.com/item?id=50407882)
- [The End of AI Frontiers — hunch.net](https://hunch.net/?p=13764006)
- [Diskusi HN: Microsoft Research AI Frontiers](https://news.ycombinator.com/item?id=50406563)
- [Every Windows 11 app should kill Electron — Windows Latest](https://www.windowslatest.com/2026/11/06/every-windows-11-app-should-kill-electron-and-discord-just-showed-why-no-starting-screen-and-70-less-ram-even-with-two-accounts-signed-in/)
- [Diskusi HN: Discord dan Electron](https://news.ycombinator.com/item?id=50403507)
