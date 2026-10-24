---
title: 'Kimi K3.1 Pro menyalip GPT-6 Astra di Terminal-Bench, dan tim Calif menjebol iPhone 18 Pro'
description: 'Rangkuman Hacker News 24 Oktober 2026: Moonshot merilis Kimi K3.1 Pro kelas 3T dengan konteks 1 juta token dan bobot penuh 4 November, tim Calif mendemokan eksploit satu klik lewat Signal dan iMessage di iPhone 18 Pro, OBS Studio 33 mengganti fondasi browser source, dan Dessa dilatih cuma dari suara manusia.'
pubDate: 2026-10-24T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- Moonshot merilis **Kimi K3.1 Pro**, model _open-weight_ kelas 3T dengan konteks 1 juta token; bobot penuhnya dijanjikan keluar 4 November. _(Kimi)_
- Di Terminal-Bench 4.0, K3.1 Pro mencetak **65,7 persen**, di atas GPT-6 Astra (58,2 persen) dan sedikit di bawah model 5.5 (66,4 persen). _(Kimi)_
- Tim Calif mendemokan **eksploit satu klik lewat Signal dan iMessage** pada iPhone 18 Pro di Hexacon, Paris. _(blog.calif.io)_
- **OBS Studio 33** mengganti CEF dari rilis Juli 2024 ke September 2026 dan merombak cara plugin dimuat. _(GitHub OBS)_
- **Dessa** dari Block dilatih hanya dari suara manusia, tanpa teks sama sekali, dan inference-nya jalan lokal di MacBook Pro M4 Max. _(Block)_

## 🧠 Kimi K3.1 Pro: bobot terbuka yang mulai mengejar model tertutup

Cerita paling ramai di Hacker News hari ini bukan peluncuran produk besar, tapi satu tech blog dari Moonshot. **975 poin dan 584 komentar** untuk Kimi K3.1 Pro.

Angkanya memang bikin orang berhenti scroll. K3.1 Pro adalah model _open-weight_ kelas 3T dengan jendela konteks 1 juta token. Menurut Artificial Analysis, model ini mendarat di peringkat keempat Intelligence Index, di belakang Opus 5.5 (max), Sonnet 5.5 (max), dan Muse Wonder Full (max). Artinya: satu model yang bobotnya dijanjikan terbuka duduk empat besar bersama model tertutup.

Yang menarik, ini bukan model baru dari nol. K3.1 Pro adalah versi _post-trained_ dari Kimi K3 dengan komputasi post-training yang jauh lebih besar. Moonshot menyebut mereka mengoptimasi hampir setiap lapisan stack supaya RL skala besar di ratusan domain bisa memberi hasil yang stabil.

Hasilnya kelihatan di beberapa benchmark:

- **Terminal-Bench 4.0:** 65,7 persen, di atas GPT-6 Astra (58,2 persen), sedikit di bawah model 5.5 (66,4 persen).
- **Kimi Code Bench 3.0 Long-horizon:** 61,2 persen, naik dari 55,95 persen di K3.
- **BenchCAD** (rekonstruksi 3D lewat pembuatan kode CAD): 92,7 persen dengan _tools_, mendekati model 5.5 (96,2 persen) dan GPT-6 Astra (95,9 persen).
- **OfficeQA Pro v2:** 64,4, disebut _state of the art_.

Contoh yang paling sering dikutip: K3.1 Pro diminta membangun simulator dinamika jalan manusia di atas model anatomi _open-source_ human-atlas, yang punya 296 komponen skeletal dan 402 komponen otot. Dari 167 misi dan 420 review independen, model itu mendiagnosis masalah, lalu menemukan dan memperbaiki 36 kesalahan perhitungan _moment-arm_ otot bahu sebelum melatih ulang controller. Hasil akhirnya: manusia simulasi yang tadinya jatuh dalam hitungan detik bisa berjalan 11,2 detik dengan langkah bergantian.

Ada juga keputusan yang jarang diambil lab model besar. Moonshot menyatakan mereka **mengidentifikasi dan menghapus data terkait cyber dari tahap mid-training dan RL** untuk rilis berbobot terbuka ini, dengan alasan mengurangi risiko penyalahgunaan sambil mempertahankan kemampuan coding umum. Di Kimi Hallu Bench Hard versi internal, tingkat halusinasi per klaim turun dari 23,4 persen (K3) ke 8,3 persen.

**Tapi… ada tapinya.** Semua angka itu berasal dari blog Moonshot sendiri. Bobot penuhnya belum ada di tangan siapa pun, dan tanggal 4 November masih janji. Simon Willison, yang mengutip peluncuran ini, mencatat modelnya sudah masuk Kimi API hari itu tapi belum berbobot terbuka. Jadi sampai file bobotnya benar-benar bisa diunduh dan diuji orang lain, angka-angka ini masih klaim penjual.

## 📱 iPhone 18 Pro dijebol di Hexacon, satu ketukan di Signal

Di posisi kedua, dengan **958 poin dan 619 komentar**, ada postingan blog Calif yang judulnya sesederhana niatnya: _Today, we hacked what we'd set out to hack: the iPhone._

Isinya bukan tulisan teknis panjang. Isinya rangkaian demo yang mereka tampilkan di Hexacon, Paris, menurut unggahan bertanggal 16 Oktober 2026 itu. Empat di antaranya:

1. **Signal 1-click** pada iPhone 18 Pro.
2. **iMessage 1-click** pada iPhone 18 Pro — dengan catatan pedas dari mereka: buat apa repot soal aplikasi pihak ketiga kalau semua orang pakai iMessage.
3. Satu demo berjudul _Can you iPhone do this?_
4. **iPhone 18 Pro Persistent Jailbreak**, dengan lelucon di judulnya: APT singkatan dari _Apple Persistent Threat_.

Blog itu menutup dengan kalimat yang sengaja menggantung: semuanya akan dirilis "pada waktunya". Tidak ada detail rantai eksploit, tidak ada CVE, tidak ada tanggal patch.

**Tapi… ada tapinya.** Ini demo video, bukan makalah. Tanpa detail teknis, ngga ada cara buat memverifikasi apakah yang direkam memang eksekusi penuh atau sebagian rantai yang dipotong. Dan karena semua bahan belum dirilis, pemilik iPhone 18 Pro cuma bisa menunggu — sambil berharap Apple sudah dihubungi lebih dulu.

## 🎬 OBS Studio 33: mesin browser source diganti, plugin dirapikan

Buat yang sering _live streaming_, ini rilis yang perlu dibaca changelog-nya. **OBS Studio 33.0.0** naik ke HN dengan 265 poin.

Perubahan terbesarnya ada di fondasi: CEF (Chromium Embedded Framework) yang dipakai untuk _browser source_ dan dock di-upgrade dari rilis **127/6533 (Juli 2024)** ke **150/7871 (September 2026)**. Tim OBS menyebut ini kerja backend yang seharusnya tidak terlihat pengguna, tapi mereka minta siapa pun yang menemukan keanehan pada browser source untuk melapor.

Yang kedua: **overhaul cara plugin dimuat.** Plugin pihak pertama sekarang ada di folder baru bernama `core`, sementara plugin pihak ketiga pindah lokasi dan struktur folder. Plugin lama masih bisa dimuat dari lokasi legacy sampai OBS Studio 34.0.

Sisanya perbaikan yang terasa di pemakaian harian: snapping source sekarang mengikuti seluruh sumbu, bukan cuma saat benar-benar bersentuhan; source yang tersembunyi tidak lagi jadi target snapping; input angka tidak lagi "misterius" memblokir ketikan; NVENC aktif di Arm64; dan Safe Mode tidak lagi menyalakan WebSocket Server.

**Tapi… ada tapinya.** Dukungan Ubuntu 24.04 dicabut di rilis ini. Kalau server streaming kamu masih di 24.04, ini bukan pembaruan yang bisa diklik tanpa mikir.

## 🗣️ Dessa: model yang belajar ngobrol tanpa satu pun huruf

Ini yang paling aneh dan paling menarik hari ini. Block merilis **Dessa**, model percakapan _full-duplex_ yang dilatih **hanya dari suara manusia** — tanpa teks, tanpa model pretrained. 423 poin, 158 komentar.

Klaimnya sederhana dan sulit: kalau model bahasa butuh jumlah kata yang luar biasa banyak, Dessa belajar bahasa dari kata yang jauh lebih sedikit karena semua informasinya datang sebagai audio. Nada, jeda, napas, sarkasme, tawa, suara yang pecah karena sedih — semuanya ikut jadi data, bukan dibuang saat diubah jadi transkrip.

Karena _full-duplex_, model ini mendengar dan bicara bersamaan, jadi bisa memotong pembicaraan dan memberi _backchannel_ ("iya", "oh gitu") di waktu yang tepat. Inference-nya lebih cepat dari real time dan jalan lokal di **MacBook Pro M4 Max** atau lebih tinggi. Latihannya sendiri, menurut Block, cukup di satu **NVIDIA GB200 NVL72**.

Lab-nya kecil: tim Dessa dibentuk dari mantan anggota Dessa, startup deep learning asal Toronto, dan melapor langsung ke Jack Dorsey. Lead-nya Ragavan Thurairatnam. Mereka juga membuka akses awal untuk peneliti keselamatan AI yang mau mencari risiko yang belum terpikirkan.

**Tapi… ada tapinya.** Semua demo yang dipublikasikan adalah rekaman percakapan yang dipilih dan disunting timnya sendiri, dan pendaftarannya masih lewat _waitlist_. Belum ada benchmark independen, belum ada angka _word error rate_, dan belum ada bukti bahwa model yang cuma dengar suara tidak lebih mudah dibohongi daripada model yang punya teks.

## 🗄️ Dua belas tahun SQLite yang didistribusikan

Satu lagi yang layak dibaca pelan-pelan: Philip O'Toole menulis sejarah **rqlite** yang dia mulai September 2014 — SQLite dengan log Raft di depannya. 264 poin.

Tulisannya rapi memetakan tiga sudut desain yang muncul berurutan. Pertama **consensus**: rqlite dan dqlite (Canonical, 2017), satu leader, konsistensi kuat, cluster. Kedua **streaming**: Litestream dari Ben Johnson (2021), satu penulis, pemulihan murah, tanpa cluster. Ketiga **merge**: cr-sqlite dan libSQL/Turso (2022), banyak penulis, konsistensi eventual.

Yang bikin tulisan ini jujur: dia menyebut pendahulu yang jarang dikutip, seperti Bedrock milik Expensify (dirilis 2016) dan ActorDB. Dan dia menutup dengan pengamatan yang agak pahit — uangnya pergi ke platform, bukan ke proyek open source-nya. Turso diakuisisi Supabase pada 2026, sementara rqlite, dqlite, dan Litestream tetap gratis.

## 🍎 Bonus: halaman 404 Apple Music yang bikin orang nostalgia

Satu item ringan: `music.apple.com/this-url-doesnt-exist` — halaman "Page Not Found" dengan tulisan _Give this a spin instead_ — naik ke 820 poin dan 246 komentar.

Isinya cuma halaman error. Tapi komentator HN menghabiskan ratusan balasan membahas tampilannya yang disebut meniru antarmuka iPod _click wheel_, lengkap dengan easter egg yang diklaim ada di dalamnya. Ada juga yang mengingatkan bahwa di suatu tempat, seorang engineer Apple mungkin sedang kena page karena lonjakan 404 yang mendadak.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan benchmark Kimi, tapi jarak antara dua berita yang muncul berdampingan: satu model open-weight yang diklaim mendekati frontier, dan satu tim yang mengklaim bisa menjebol iPhone dengan satu ketukan.

Keduanya bergerak di arah yang sama — kemampuan yang makin murah dan makin mudah diakses. Bedanya, yang satu dirayakan dengan 975 poin, yang lain cuma demo tanpa detail. Saya ngga tahu mana yang akan lebih cepat berdampak, dan saya rasa belum ada yang tahu.

Soal Dessa, saya jujur belum dengar satu pun rekamannya. Saya cuma membaca klaim bahwa model itu tertawa di tengah kalimat, bukan menunggu giliran. Kalau benar, itu bukan peningkatan kecil — itu beda kelas pengalaman. Tapi saya juga ngga mau percaya sebelum ada yang mengukur, bukan cuma yang mendemokan.

Dan soal OBS: saya termasuk yang bakal menunda update. Bukan karena fiturnya buruk, tapi karena plugin yang saya pakai belum tentu siap dengan struktur folder baru. Rilis besar pertama biasanya lebih baik ditunggu seminggu.

Kalau kalian, mana yang lebih bikin penasaran: model yang bobotnya dijanjikan terbuka 4 November, atau iPhone yang katanya bisa dijebol lewat satu pesan?

## 🔗 Sumber

- Kimi K3.1 Pro — https://www.kimi.ai/blog/kimi-k3-1-pro
- Diskusi HN Kimi K3.1 Pro — https://news.ycombinator.com/item?id=50212065
- Calif, "iPhone" (Hexacon demos) — https://blog.calif.io/p/iphone
- Diskusi HN iPhone — https://news.ycombinator.com/item?id=50211474
- OBS Studio 33.0.0 release notes — https://github.com/obsproject/obs-studio/releases/tag/33.0.0
- Diskusi HN OBS Studio 33 — https://news.ycombinator.com/item?id=50218430
- Dessa (Block) — https://block.xyz/dessa
- Diskusi HN Dessa — https://news.ycombinator.com/item?id=50213925
- Twelve years of distributed SQLite — https://philipotoole.com/twelve-years-of-distributed-sqlite/
- Diskusi HN distributed SQLite — https://news.ycombinator.com/item?id=50217500
- Apple Music 404 — https://music.apple.com/this-url-doesnt-exist
- Diskusi HN Apple Music 404 — https://news.ycombinator.com/item?id=50207910
- Artificial Analysis, Kimi K3.1 Pro — https://artificialanalysis.ai/models/kimi-k3-1-pro
