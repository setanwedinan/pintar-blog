---
title: '🧠 Daily Hacker News — 11 Oktober 2026: Fisika GTA 1996, Nitter Diadili, dan Komputer Berbentuk Bohlam'
description: 'Prototipe fisika kendaraan yang menjadi cikal bakal GTA dipamerkan ulang untuk ulang tahunnya yang ke-30, Nitter mengaku kini tanpa penasihat hukum melawan X Corp, dan LineageOS 24.0 berbasis Android 17 resmi dirilis.'
pubDate: 2026-10-11T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🧠 TL;DR

- **2D Vehicles** memuncaki papan (529 poin, 106 komentar): Pat Kerr membuka ulang simulasi fisika yang ia tulis satu akhir pekan pada Agustus 1996 — cikal bakal sistem kendaraan di GTA.
- **The Lightbulb Computer** (492 poin, 72 komentar) mengusulkan komputer yang diproyeksikan dari soket lampu, bukan dikenakan di wajah.
- **Discretionary Review** (414 poin, 138 komentar) adalah game city-builder di mana kota justru berusaha menggagalkan pembangunan rumah Anda.
- **Nitter** mengumumkan dirinya tidak lagi punya penasihat hukum dalam sengketa dengan X Corp, dan sedang mencari pendanaan (200 poin, 76 komentar).
- **LineageOS 24.0** dirilis dengan basis Android 17, dan proyeknya menyambut ulang tahun ke-10 pada 24 Desember 2026.

## 🚗 2D Vehicles: Fisika GTA Ditulis di Atari ST, Satu Akhir Pekan 1996

Cerita paling banyak dipilih papan hari ini adalah sebuah halaman yang isinya bukan AI, bukan chip, melainkan arsip pribadi. **Pat Kerr** mempublikasikan **2D Vehicles**, rekam jejak proyek dari 1996 sampai 2026, di `patkerr.co.uk/2d-vehicles/`.

Pengakuannya sederhana dan langsung: **"One weekend in late August 1996, I wrote a 2D physics simulation which later became the basis of the vehicle system in the eventually popular game GTA."** Simulasi itu bermula sebagai demo wireframe yang ditulis dengan **GFA BASIC di Atari ST** miliknya, lalu dipindahkan ke **C** untuk dipakai di game sesungguhnya.

Untuk ulang tahunnya yang ke-30, ia membangun ulang prototipe itu dalam **JavaScript**, lengkap dengan mode **Car (1)**, **Ship (2)**, dan **Brick (3)**. Ada juga kontrol yang mungkin terdengar akrab bagi pemain lama: tombol **B** menyalakan-mematikan dinding pembatas, **G** mengaktifkan gravitasi vertikal, **Z** mengatur _dead zone_ kamera, dan **X** menyalakan zoom yang ikut menjauh saat kendaraan melaju cepat — "just like in GTA", tulisnya.

Yang membuat halaman ini menarik bukan sekadar nostalgia. Kerr menjelaskan alasan teknisnya: inti sistemnya adalah **simulasi rigid body 2D klasik**, pendekatan yang menurutnya belum lazim di game saat itu. Kebanyakan kendaraan game waktu itu, katanya, memakai "point physics" tingkat SMA (`F = ma`) dengan komponen rotasi yang ditangani berbagai "hack" yang serampangan.

Ia juga menuliskan disclaimer sukarela bahwa karya ini sepenuhnya independen dan tidak berafiliasi dengan waralaba **Grand Theft Auto**, penerbitnya **Take-Two**, maupun **Rockstar Games**.

## 💡 The Lightbulb Computer: Komputer yang Diproyeksikan ke Dinding

Alternatif kedua datang dari **Guillaume Ardaud** lewat proyek **The Lightbulb Computer**, dipublikasikan September 2026. Tesisnya menyerang tren yang ia anggap salah arah: visi interaksi manusia-komputer modern terlalu terpusat pada **kacamata pintar dan headset** — perangkat yang menurutnya membatasi sekaligus canggung secara sosial.

Usulannya: sebuah perangkat berbentuk **bohlam besar** yang menggabungkan **proyektor** dengan **computer vision**. Bentuk bohlam dipilih karena soket Edison hampir universal — bisa dipasang di dudukan lampu portabel untuk dipindah-pindah, atau disekrup ke soket di dinding dan langit-langit untuk pemasangan permanen berskala ruangan. Langit-langit, tulisnya, adalah titik pandang bagus untuk melihat seluruh ruangan sekaligus memproyeksikan ke mana saja.

Kemampuannya disebut mencakup **merespons perintah suara**, **melihat ke arah yang Anda tunjuk**, menganalisis apa yang dilihatnya, serta memproyeksikan konten dan menandai objek di dunia nyata. Skenario pemakaiannya sengaja membumi: widget resep dan timer di dapur supaya tangan yang berlumur tepung tidak perlu menyentuh ponsel, jawaban atas pertanyaan saat membaca tanpa harus membuka layar, dan peta raksasa saat merencanakan perjalanan bersama orang lain.

## 🏗️ Discretionary Review: Game Membangun Kota yang Tidak Ingin Anda Menang

Judul aslinya sudah menyampaikan seluruh premisnya: **"A city-building game in which the city would prefer you didn't."** Di `housing.over.pizza`, Anda memainkan seorang pengembang di **San Francisco, Januari 2015** — kota yang kekurangan rumah di tengah ledakan teknologi, dan sebagian besar lahannya dibatasi **ketinggian 40 kaki**.

Antarmukanya bergaya city-builder retro, tetapi angka yang ditampilkan adalah angka nyata sebuah proyek properti: kas awal, **burn rate bulanan**, suku bunga pinjaman, jumlah unit yang dibangun, unit yang sudah disetujui tapi belum dibangun, dan unit yang masih menunggu tinjauan. Ada tiga tingkat kesulitan yang juga berfungsi sebagai sindiran: **Trust fund** (modal paling besar, investor paling sabar), **Developer** (pengalaman yang dimaksudkan), dan **True believer** (modal paling sedikit, kesabaran paling tipis) _(housing.over.pizza)_.

Detail yang paling disukai papan komentar adalah janji di halaman itu: setiap lokasi di peta adalah pertarungan nyata, dan ketika Anda menyelesaikannya, game memberi tahu **apa yang sebenarnya terjadi di tempat itu**. Judulnya sendiri mengambil nama dari **Discretionary Review**, mekanisme di San Francisco yang memungkinkan warga meminta komisi perencanaan meninjau ulang proyek yang sebenarnya sudah memenuhi standar — sesuatu yang bisa Anda cek langsung di `sfplanning.org`. Papan berita dalam game pun menampilkan baris seperti **"Commission hearing enters seventh hour; item 14 of 22 called"**, yang bagi siapa pun yang pernah mengikuti rapat perencanaan kota terasa seperti dokumenter, bukan fiksi.

## 🗄️ Yandex dan Cloudflare: Ketika Bot Menghilang Bersamaan dengan Data Center

Dua utas di papan hari ini sebenarnya satu cerita. Yang pertama adalah data **Cloudflare Radar** untuk jaringan Yandex (AS13238), yang menunjukkan **lalu lintas bot dari jaringan itu merosot tajam** (364 poin, 136 komentar). Yang kedua adalah utas berjudul **"3rd Yandex Cloud Data Center Was Hit"** dengan 389 komentar — jumlah komentar terbesar di papan hari ini.

Konteksnya datang dari luar HN. **BBC** melaporkan Yandex menyatakan **dua dari lima data center-nya** terkena serangan drone Ukraina dalam dua hari, dengan fasilitas di **Sasovo, wilayah Ryazan**, "seriously damaged" dan operasinya "completely suspended". Yandex juga menyampaikan ke kantor berita Tass bahwa **sebagian fungsi chatbot AI-nya sempat tidak tersedia** dan perangkat smart home bisa mengalami gangguan. United24 Media melaporkan fasilitas di **Kaluga** — yang dirancang sebagai data center terbesar Yandex di Rusia, mulai beroperasi paruh kedua 2023 dengan rencana kapasitas daya sekitar 63 megawatt — ikut terdampak _(United24 Media)_.

Pelajaran yang bisa diambil dari sudut infrastruktur: infrastruktur yang tampak "virtual" punya titik fisik yang bisa dipukul, dan efeknya langsung terlihat di metrik pihak ketiga seperti Radar.

## 🕊️ Nitter: Proyek Tanpa Pengacara, di Bawah Tekanan Hukum

**Nitter** — front-end alternatif untuk X/Twitter — memakai halaman depannya untuk pembaruan tertanggal **10 Oktober**. Isinya tidak enak dibaca. Menurut pengelola proyek, **X Corp mengirim surat cease and desist pada 24 Agustus 2026**, menuntut penghapusan permanen instans Nitter dan repositori proyek, lalu **mengirim surat kedua pada 8 September 2026** dengan tuntutan dan ancaman hukum yang sama.

Bagian yang paling jujur: pembaruan **7 September** sebelumnya menyatakan proyek akan lanjut dengan pendampingan hukum. Pengelola sekarang menulis bahwa pernyataan itu **berdasarkan jaminan yang ia terima dan percayai, yang ternyata tidak benar**, dan ia meminta maaf atas informasi yang menyesatkan tersebut. Status sekarang: **Nitter tidak punya penasihat hukum**, dan pengelolanya mencari **pendanaan dan bantuan hukum**. Halaman itu juga memuat kanal donasi serta catatan bahwa dana yang masuk dipakai lebih dulu untuk biaya hukum.

## 📱 LineageOS 24.0, Talorys, dan Catatan Kecil Lainnya

**LineageOS 24.0** resmi dirilis (218 poin, 67 komentar) dengan basis **Android 17**. Changelog-nya menyebut patch keamanan **Agustus 2025 sampai Oktober 2026** sudah digabung ke LineageOS 18.1 hingga 24.0, sementara cabang legacy 15.1, 16.0, dan 17.1 mendapat patch sampai November 2025. Proyek ini juga mengingatkan bahwa pada **24 Desember 2026** LineageOS genap **10 tahun**.

**Talorys** (304 poin, 140 komentar) menawarkan hal yang jarang di kategori agen AI: **agen pribadi yang berjalan sepenuhnya di akun Cloudflare Anda sendiri**, dipasang dengan satu perintah `npx create-talorys@latest`. Fiturnya mencakup chat, memori yang bisa dilihat dan dihapus, tugas dan catatan, serta otomasi berbasis alarm Durable Object. Rancangannya sengaja **single-user tanpa pendaftaran**, dan pengembangnya menegaskan tidak ada server atau basis data milik mereka — juga tanpa telemetri.

Di kolom "juga di papan hari ini":

- **Microsoft Execution Containers (MXC)** sudah tersedia umum (204 poin). Menurut blog Windows Developer tertanggal 7 Oktober, MXC memberi pengembang dan admin IT cara mendefinisikan berkas dan tujuan jaringan yang boleh diakses agen, lalu menegakkan kebijakan itu saat runtime.
- **DDR4 kembali dari masa pensiun** (110 poin, 100 komentar). The Verge melaporkan Gigabyte menyatakan dua lini motherboard-nya akan mendukung prosesor "yang akan datang" di soket **Intel LGA 1700** — soket yang debut 2021 bersama Alder Lake, lalu ditinggalkan Intel demi DDR5 pada 2024. Chip LGA 1700 baru itu diperkirakan meluncur awal 2027.
- **Knuth reward check** (207 poin). Thomas Huehn menceritakan kesalahan yang ia temukan di buku _Computer Modern Typefaces_ — di halaman 1, kata pertama — dan cek penghargaan dari Donald Knuth sebesar **2,88 dolar**, ditambah 32 sen untuk usulan lain yang sebenarnya salah tapi dianggap berguna _(Thomas Huehn)_.
- **"I paid people to try and follow my README"** (101 poin). Terence Eden membayar **25 euro per jam** kepada beberapa orang — total sekitar **150 euro** — untuk mengikuti panduan instalasi perangkat lunaknya sambil bersuara, dan mencatat semua asumsi salah yang ia buat _(Terence Eden)_.

## 💡 Insight Hari Ini

Papan hari ini menawarkan kontras yang menarik. Di satu sisi ada kekuatan besar yang mengerahkan hukum dan drone: **X Corp** menekan proyek komunitas sampai kehilangan pengacara, dan **data center** — beton dan server — bisa dihentikan dengan serangan fisik. Di sisi lain, hampir semua cerita yang paling banyak dipilih justru berasal dari satu orang dengan satu ide: fisika 2D yang ditulis di Atari ST, bohlam yang jadi komputer, game kota yang menolak Anda.

Polanya konsisten: nilai tahan lama jarang datang dari pengumuman korporat. Ia datang dari sesuatu yang cukup kecil untuk diuji satu orang, cukup jujur untuk mengakui kesalahannya, dan cukup berguna untuk dipakai orang lain tanpa izin siapa pun.

## 🔗 Sumber

- [2D Vehicles — Pat Kerr](https://patkerr.co.uk/2d-vehicles/) · [Diskusi HN](https://news.ycombinator.com/item?id=49991852)
- [The Lightbulb Computer](https://lightbulbcomputer.com/) · [Diskusi HN](https://news.ycombinator.com/item?id=50029487)
- [Discretionary Review](https://housing.over.pizza/) · [Diskusi HN](https://news.ycombinator.com/item?id=50036864)
- [Cloudflare Radar — AS13238](https://radar.cloudflare.com/bots/as13238?dateRange=7d) · [Diskusi HN](https://news.ycombinator.com/item?id=50041619)
- [Status Yandex Cloud — insiden 2136](https://status.yandex.cloud/en/incidents/2136) · [Diskusi HN](https://news.ycombinator.com/item?id=50040547)
- [BBC — Russian search engine Yandex struggles after Ukrainian strikes on data centres](https://www.bbc.com/news/articles/c68xzqqn4ekro) · [United24 Media](https://united24media.com/war-in-ukraine/yandex-takes-a-second-data-center-hit-in-48-hours-now-its-biggest-russian-site-is-damaged-23277)
- [Nitter — UPDATE Oct 10th](https://nitter.net) · [Diskusi HN](https://news.ycombinator.com/item?id=50041682)
- [LineageOS — Changelog 32](https://lineageos.org/Changelog-32/) · [Diskusi HN](https://news.ycombinator.com/item?id=50040276)
- [Talorys](https://github.com/rociiu/talorys) · [Diskusi HN](https://news.ycombinator.com/item?id=50031614)
- [Microsoft Execution Containers](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/) · [Diskusi HN](https://news.ycombinator.com/item?id=50016956)
- [The Verge — Decade-old RAM is making a comeback](https://www.theverge.com/games/1009140/ram-shortage-intel-amd-ddr4-comeback) · [Diskusi HN](https://news.ycombinator.com/item?id=50028647)
- [Knuth reward check — Thomas Huehn](https://www.thomas-huehn.com/knuth-reward-check/) · [Diskusi HN](https://news.ycombinator.com/item?id=50034081)
- [I paid people to try and follow my README — Terence Eden](https://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/) · [Diskusi HN](https://news.ycombinator.com/item?id=50042219)
