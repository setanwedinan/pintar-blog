---
title: '🖥️ Daily Hacker News — 5 Oktober 2026: 8,8 Juta Warga Denmark Bocor, Nobel Obat untuk Optogenetika, dan Qwen 125B di RTX 4090'
description: 'Papan Hacker News hari ini dibuka oleh kebocoran data CPR Denmark yang mengekspos 8,8 juta orang, disusul Nobel Kedokteran 2026 untuk optogenetika, skrip yang mematikan Apple Intelligence demi mengembalikan ruang disk, dan demo menjalankan model 125B di satu kartu konsumen.'
pubDate: 2026-10-05T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Tech']
---

Hacker News hari ini punya kombinasi yang khas: satu bencana data yang skalanya nasional, satu penghargaan sains paling bergengsi, dan sederet proyek teknis yang bikin orang membuka terminal. Berikut cerita yang paling banyak dibicarakan, lengkap dengan angka poin dan komentarnya.

## 🇩🇰 Kebocoran Data CPR Denmark Mengekspos 8,8 Juta Orang

Cerita dengan skor tertinggi kedua hari ini datang dari Denmark. **Det Centrale Personregister (CPR)** — register kependudukan pusat Denmark — mengumumkan apa yang mereka sebut sebagai _"alvorlig sikkerhedshændelse"_ alias insiden keamanan serius.

Modusnya bukan peretasan brutal, melainkan penyalahgunaan akses yang sah. Menurut pernyataan resmi CPR, pihak yang tidak berwenang **menyalahgunakan akses legal sebuah perusahaan Denmark** untuk mencari informasi di sistem CPR, lalu mendapatkan **nama, alamat, dan nomor CPR sekitar 8,8 juta warga terdaftar**.

Dua detail penting yang disebut CPR sendiri:

- **Tidak semua orang terdampak.** Warga yang memilih mendaftar dengan **perlindungan nama dan alamat** tidak termasuk dalam data yang diakses.
- **Akses perusahaan tersebut sudah dihentikan**, dan CPR-administration bersama spesialis serta otoritas terkait sedang memetakan jalannya insiden. Kasus sudah dilaporkan ke Datatilsynet (otoritas perlindungan data Denmark) dan diselidiki kepolisian bersama instansi terkait.

Skalanya luar biasa: 8,8 juta orang hampir menyamai seluruh populasi Denmark. Yang membuat diskusi di HN panas adalah pertanyaannya — bagaimana satu perusahaan bisa diberi kunci akses yang jika disalahgunakan bisa membuka data hampir seluruh bangsa?

**278 poin | 222 komentar** — thread-nya penuh perdebatan soal desain kontrol akses, audit trail, dan prinsip _least privilege_.

🔗 [Pengumuman resmi CPR](https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger) | [Diskusi HN](https://news.ycombinator.com/item?id=49964882)

## 🏅 Nobel Kedokteran 2026 untuk Optogenetika

Nobel Prize in Physiology or Medicine 2026 diberikan **bersama-sama kepada tiga peneliti: Karl Deisseroth, Peter Hegemann, dan Georg Nagel**, dengan alasan kutipan resmi _"for their discoveries concerning light-gated ion channels and optogenetics."_

Menurut rilis resmi NobelPrize.org, **Peter Hegemann dan Georg Nagel** menemukan protein luar biasa bernama **channelrhodopsin** pada alga bersel tunggal. **Karl Deisseroth**, yang berafiliasi dengan **Howard Hughes Medical Institute dan Stanford University, USA**, kemudian mengubah protein tersebut menjadi alat yang bisa dipakai peneliti.

Hasilnya adalah **optogenetika** — metode yang memungkinkan ilmuwan menunjukkan bagaimana sel saraf membentuk ingatan, perasaan, dan perilaku di otak yang hidup. NobelPrize.org menjelaskan konteksnya: sepanjang abad ke-20 para peneliti sudah menyelidiki area otak mana yang memengaruhi fungsi mana, tetapi metode yang ada saat itu tidak bisa membuktikan hubungan sebab-akibat. Peta otak yang mereka susun, tulis rilis itu, lebih mirip sketsa penuh tanda tanya.

**63 poin | 19 komentar** — skornya sedang, tapi HN selalu jadi tempat bagus untuk mendengar penjelasan dari orang-orang yang benar-benar bekerja di lab.

🔗 [Rilis resmi Nobel](https://www.nobelprize.org/prizes/medicine/2026/press-release/) | [Diskusi HN](https://news.ycombinator.com/item?id=49963226)

## 🧠 Qwen 125B Berjalan di RTX 4090 — 100 Token per Detik

Ini cerita berskor tertinggi hari ini. Proyek bernama **Strata** di GitHub (Niko1221/Strata) memamerkan klaim di judulnya: **"Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s."**

Artinya bukan model kecil yang diringankan sampai kehilangan kemampuan, melainkan model berukuran **125 miliar parameter** dijalankan di satu **RTX 4090** — kartu grafis kelas konsumen, bukan deretan GPU pusat data. Klaim throughput-nya **100 token per detik**, angka yang untuk model sebesar itu biasanya butuh perangkat keras berkali-kali lipat harganya.

**850 poin | 383 komentar** — skor tertinggi hari ini, dan komentarnya jadi tempat orang berdebat soal teknik offloading, kuantisasi, dan berapa banyak dari kecepatan itu datang dari optimasi kernel versus trik memori.

🔗 [Repo Strata](https://github.com/Niko1221/Strata) | [Diskusi HN](https://news.ycombinator.com/item?id=49961858)

## 💾 Skrip Kecil untuk Menghapus Apple Intelligence di macOS 27

Salah satu proyek paling praktis hari ini: **RemoveMacAI**, skrip satu perintah untuk mematikan Apple Intelligence di **macOS 27** dan mengambil kembali ruang disk yang dipakainya.

Masalahnya nyata dan spesifik, seperti dijelaskan di README-nya: macOS 27 tidak lagi punya satu sakelar tunggal untuk Apple Intelligence, dan **model-modelnya tetap tersimpan di disk** setelah fitur dimatikan. RemoveMacAI mematikan fitur, menghapus model, dan mencegah macOS mengunduhnya lagi — dan menurut dokumentasinya, **semua perubahan bisa dibatalkan**.

Beberapa hal teknis yang membuat proyek ini mendapat kepercayaan komunitas:

- Setiap rilis dibangun dari tag-nya oleh **GitHub Actions** dan membawa **build provenance attestation**, yang bisa diverifikasi dengan `gh attestation verify`.
- Instalasi sudah tersedia lewat **Homebrew** (`brew install omlahore/tap/removemacai`).
- Ada mode **`status`** untuk melihat tiap fitur dan ukuran model di disk, **`--dry-run`** untuk melihat perubahan tanpa menerapkannya, serta **`revert`** untuk membatalkan semuanya.

**663 poin | 453 komentar** — jumlah komentar kedua terbanyak hari ini, dan itu masuk akal: thread-nya berubah jadi diskusi soal berapa besar sebenarnya ruang yang dimakan fitur AI bawaan di mesin pengguna.

🔗 [Repo RemoveMacAI](https://github.com/omlahore/RemoveMacAI) | [Diskusi HN](https://news.ycombinator.com/item?id=49960445)

## 💧 Redaksi yang Salah Tulis, Bocornya Konsumsi Air Data Center Google

Cerita investigatif, dan caranya mendapat data justru bagian yang paling menarik. Stasiun **10/11 (KOLN)** melaporkan bahwa data center di Nebraska wajib menyerahkan laporan tahunan ke **Nebraska Department of Water, Energy, and Environment**, tetapi sejumlah statuta negara bagian menahan publik melihat berapa banyak listrik dan air yang sebenarnya mereka pakai.

Google, melalui entitas **Agate LLC**, mengklaim angka pemakaian listrik dan air data center-nya di Lincoln sebagai **informasi rahasia dagang** — dan melakukan hal yang sama untuk ketiga lokasi data center-nya, termasuk di Omaha dan Papillion.

Lalu bagian yang bocor: **dengan menyorot kotak teks yang disunting lalu menyalin-tempelnya ke dokumen lain**, isi yang disembunyikan itu terbaca. Hasilnya, Agate LLC tercatat memakai **52,65 megawatt listrik pada puncak permintaan** dan **13,299 megagallon air** untuk menara pendingin, sistem evaporatif, dan operasional situs pada tahun terakhir.

Untuk konteksnya, laporan itu menyamakan **13 juta gallon dengan sekitar 20 kolam renang ukuran Olimpiade**. Redaksi yang gagal berikutnya mengungkap bahwa data center pemakai air terbanyak tahunan adalah **Fireball Group LLC** — data center Google di Papillion, dengan **547,88 megagallon untuk konsumsi air 2025**.

Totalnya, enam data center yang melaporkan hingga 30 September menunjukkan pemakaian **765 juta gallon air tahun lalu**. 10/11 menyatakan telah mengajukan permintaan catatan publik pada 30 September untuk membuka informasi yang disunting dari laporan Agate LLC.

**456 poin | 596 komentar** — komentar terbanyak hari ini, dan temanya seragam: kalau sebuah angka disebut rahasia dagang, apakah itu demi keunggulan kompetitif atau demi menghindari pertanyaan publik?

🔗 [10/11 KOLN](https://www.1011now.com/2026/09/30/more-questions-than-answers-about-lincolns-google-data-center-water-electricity-usage/) | [Diskusi HN](https://news.ycombinator.com/item?id=49957014)

## 🤝 Huawei dan Qualcomm Sepakati Lisensi Paten Lintas Tahun

Dari sisi industri, **Huawei dan Qualcomm mengumumkan kesepakatan lisensi paten yang luas** — diumumkan langsung melalui halaman resmi Huawei. Menurut pengumuman itu, kesepakatan tersebut bersifat **multiyear** dan mencakup wilayah **AI, 5G, komputasi, serta teknologi jaringan**.

**100 poin | 64 komentar** — menarik karena kedua nama ini punya sejarah panjang berhadapan di meja negosiasi lisensi, sehingga kesepakatan baru lintas beberapa bidang teknologi sekaligus selalu jadi sinyal tentang bagaimana lanskap paten bergerak.

🔗 [Pengumuman Huawei](https://www.huawei.com/en/news/2026/10/qualcomm-broad-patent-agreement) | [Diskusi HN](https://news.ycombinator.com/item?id=49961202)

## 🔍 Yang Menarik Tapi Tidak Masuk Lima Besar

Papan hari ini juga dihiasi beberapa proyek yang layak dibuka di tab baru:

- **Doom di dalam SQL** (**208 poin | 34 komentar**) — [CedarDB mem-port Doom asli ke SQL](https://cedardb.com/blog/sqldoom/), pertanyaan yang tidak pernah diminta siapa pun tapi selalu menyenangkan.
- **VB6 IDE yang berjalan di browser** (**309 poin | 101 komentar**) — [sebuah klasik yang dihidupkan kembali](https://wieslawsoltes.github.io/VB6/) tanpa instalasi apa pun.
- **The Tao of Backup** (**193 poin | 71 komentar**) — [taobackup.com](http://www.taobackup.com/index.html), tulisan lama yang kembali naik karena masalahnya masih sama.
- **Pixel 11 dan GrapheneOS** (**58 poin | 32 komentar**) — [diskusi GrapheneOS](https://discuss.grapheneos.org/d/41564-pixel-11-doesnt-yet-meet-the-grapheneos-security-standards-and-may-be-skipped) menyebut Pixel 11 belum memenuhi standar keamanan mereka dan mungkin dilewati.
- **RobCo jadi unicorn robotika Eropa** (**185 poin | 150 komentar**) — perusahaan robotika asal Munich itu [melewati valuasi 1 miliar dolar](https://techfundingnews.com/europes-new-robotics-unicorn-germanys-robco-hits-1b-valuation/), naik dari sekitar 500 juta dolar setelah putaran 100 juta dolar pada Januari 2026.

## 💡 Insight Hari Ini

Tiga dari cerita teratas hari ini berbicara soal hal yang sama tanpa menyebutnya: **batas**. Denmark menemukan batas kontrol aksesnya jebol bukan karena serangan canggih, melainkan karena satu pintu legal yang terlalu lebar. Nebraska menemukan batas antara "rahasia dagang" dan "hak publik untuk tahu" jadi kabur — sampai ada yang tidak sengaja membiarkan teksnya terbaca. Dan dua proyek paling populer di HN hari ini — Qwen 125B di satu RTX 4090 serta skrip penghapus Apple Intelligence — adalah cerita tentang pengguna yang menarik kembali kendali: atas perangkat keras mereka sendiri, dan atas ruang disk yang diambil fitur yang tidak mereka minta.

## 📌 Sumber Lengkap

- [CPR Denmark — Omfattende uautoriseret adgang](https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger)
- [Nobel Prize in Physiology or Medicine 2026](https://www.nobelprize.org/prizes/medicine/2026/press-release/)
- [Strata — Run Qwen 3.8 Flash Next (125B) on RTX 4090](https://github.com/Niko1221/Strata)
- [RemoveMacAI](https://github.com/omlahore/RemoveMacAI)
- [10/11 KOLN — Google Data Center water and electricity usage](https://www.1011now.com/2026/09/30/more-questions-than-answers-about-lincolns-google-data-center-water-electricity-usage/)
- [Huawei — Patent License Agreement dengan Qualcomm](https://www.huawei.com/en/news/2026/10/qualcomm-broad-patent-agreement)
- [CedarDB — SQL Doom](https://cedardb.com/blog/sqldoom/)
- [VB6 di browser](https://wieslawsoltes.github.io/VB6/)
- [GrapheneOS — Pixel 11](https://discuss.grapheneos.org/d/41564-pixel-11-doesnt-yet-meet-the-grapheneos-security-standards-and-may-be-skipped)
- [Tech Funding News — RobCo unicorn](https://techfundingnews.com/europes-new-robotics-unicorn-germanys-robco-hits-1b-valuation/)
