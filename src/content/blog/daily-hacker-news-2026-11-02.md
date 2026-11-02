---
title: 'Postgres 19 telat karena LLM menemukan terlalu banyak bug, dan Trigger.dev kena di environment variable'
description: 'Rangkuman Hacker News 2 November 2026: Robert Haas menjelaskan kenapa rilis PostgreSQL 19 mundur dan commit back-patch naik lebih dari 60 persen, Trigger.dev mengakui environment variable sebagian organisasi terekspos, gelombang kedua serangan siber ke freezer supermarket Eropa, dan seminggu setelah HackerTube muncul HackerBooks serta Wikihack.'
pubDate: 2026-11-02T13:00:00Z
tags: ['berita', 'Hacker News', 'AI']
---

## 🔍 TL;DR

- PostgreSQL 19 mundur dari jadwal karena LLM menemukan jauh lebih banyak bug: commit ke branch stable rilis berjalan naik jadi 1.169 dari 724 di rentang tanggal yang sama tahun sebelumnya _(rhaas.blogspot.com)_
- Robert Haas menyebut tiga fitur besar dicabut antara 27 Agustus dan 15 September, dan tidak menganggap penundaan ini sebagai masalah besar _(rhaas.blogspot.com)_
- Trigger.dev mengakui penyerang mendapat akses tidak sah ke environment variable sejumlah organisasi, eksploitnya sudah diblokir _(trigger.dev)_
- Freezer dan kulkas supermarket di Swedia, Belgia, dan Luxembourg naik suhu semalam, pola yang sama dengan serangan ke hingga 700 toko di Prancis bulan Oktober _(theguardian.com)_
- Seminggu setelah Karpathy merilis HackerTube, muncul HackerBooks dengan 16.500 buku dan Wikihack untuk artikel Wikipedia yang pernah dibahas di HN _(hackerbooks.org, wikihack.netlify.app)_

## 🐘 Empat puluh tahun bug, dan alat yang akhirnya menemukannya

Rilis major PostgreSQL biasanya datang antara pertengahan September dan pertengahan Oktober. Tahun ini berbeda. Robert Haas — committer PostgreSQL yang juga Senior Staff Software Engineer di Databricks — menulis bahwa PostgreSQL 19 kemungkinan baru terbit November, dan belum tentu berhenti di situ.

Yang membuatnya menarik bukan tanggalnya, tapi alasannya.

Tiga fitur besar dicabut cukup telat di periode beta: `UPDATE/DELETE FOR PORTION OF`, kueri SQL Property Graph, dan `ALTER TABLE ... MERGE PARTITION/SPLIT PARTITION`. Semuanya ditarik antara 27 Agustus dan 15 September, padahal feature freeze jatuh 8 April. Mencabut fitur besar sesudah freeze memang bukan hal aneh, tapi tiga sekaligus selama Agustus–September itu tidak biasa.

Jawaban singkatnya: LLM.

Haas membandingkan dua periode yang sama panjangnya, 8 April sampai 25 September. Pada 2025 ada 1.037 commit ke branch master dan 724 commit ke `REL_18_STABLE`. Pada 2026, di rentang tanggal yang sama, ada 1.443 commit ke master dan 1.169 commit ke `REL_19_STABLE`.

Dibaca cepat, angka itu bisa disalahartikan sebagai "kontribusi meledak". Yang meledak justru sisi tambalannya. Commit ke master hanya naik tipis, sementara commit yang di-back-patch naik lebih dari 60 persen. Untuk `REL_17_STABLE` pada 2025 ada 248 commit; untuk `REL_18_STABLE` pada 2026 ada 433 commit, kenaikan lebih dari 74 persen dalam satu tahun.

Artinya: banyak orang di internet sekarang melaporkan bug PostgreSQL yang mereka temukan pakai LLM, dan bug itu tidak cuma di rilis terbaru — sebagian menyeret balik ke rilis yang sudah lewat setahun.

Kenapa ini memperlambat rilis? Haas menyebut dua sebab. **Pertama**, memperbaiki lebih banyak bug butuh waktu lebih banyak, karena tambalan yang disusun LLM belum tentu benar atau sesuai standar proyek, jadi tetap harus ditinjau manusia. **Kedua**, waktu yang seharusnya dipakai meninjau isi rilis tersedot ke penanganan masalah keamanan di branch lama, sehingga keputusan soal fitur mana yang harus dicabut juga ikut mundur.

Haas cukup tenang soal penundaan ini. Yang ia sebut kurang jelas justru gambaran jangka panjang: kalau ada empat puluh tahun bug yang tidak pernah ditemukan manusia tapi gampang ditemukan LLM, kapan habisnya — dan bagaimana proyek sebesar PostgreSQL bisa tetap berinovasi sambil terus membersihkan utang lama.

## 📚 Seminggu setelah HackerTube, HN memakan dirinya sendiri

Karpathy merilis HackerTube akhir pekan lalu: UI mirip YouTube di atas 6.454 video yang pernah direkomendasikan di komentar Hacker News sejak 2007. Angkanya sudah dibahas di [post kemarin](/blog/daily-hacker-news-2026-11-01/), jadi di sini cukup dicatat efek susulannya.

Dalam beberapa hari, muncul tiruan dengan bahan berbeda.

**HackerBooks** (1.619 poin, 266 komentar) mengambil 16.500 buku yang disebut minimal oleh dua komentator berbeda di HN, dari 2007 sampai sekarang, dan menautkan setiap buku kembali ke komentar yang menyebutnya. Datanya bisa diunduh dari halaman about. Pembuatnya mengaku Claude yang menulis hampir seluruhnya, termasuk pipeline data dan situsnya.

**Wikihack** (294 poin) melakukan hal serupa untuk artikel Wikipedia, dengan tab top, random yang dibobot frekuensi tautan, dan rising untuk 12 bulan terakhir. **HackerHack** (130 poin) melawak dengan versi "HackerBooks tapi untuk post yang ada di HN" — dan menegaskan tanpa AI sama sekali.

Yang lucu: ketiganya mengukur hal yang sama, yaitu apa yang dianggap berharga oleh sebuah komunitas, lalu menyajikannya sebagai feed. Dan yang paling sering dibahas di komentar bukan isinya, tapi satu kelemahan mendasar dari pendekatan hitung-sebutan: memuji buku dan menghina buku sama-sama dihitung satu.

## 🔐 Trigger.dev: environment variable lagi-lagi

Trigger.dev menerbitkan pengumuman singkat di blog mereka: ada insiden keamanan, eksploit yang dipakai sudah diblokir, tapi investigasi menemukan paparan di sebagian organisasi. Penyerang mendapat akses tidak sah ke environment variable milik organisasi tersebut, dan semua pemilik akun terdampak sudah dihubungi lewat email berisi langkah mitigasi.

Halaman status mereka menandai kejadian ini sebagai "Security Disclosure: Sunday November 1st", dengan pembaruan terakhir 2 November pukul 14.10 UTC, dan pada saat yang sama mencatat bahwa dashboard runs list serta API sedang degraded.

Bagi yang memakai layanan seperti ini, environment variable adalah segalanya: kunci API, kredensial database, token webhook. Satu kebocoran di situ bukan insiden satu vendor, karena kunci yang sama biasanya dipakai di beberapa tempat lain. Sebelum menunggu detail lengkap, tindakan paling murah adalah merotasi kunci yang pernah disimpan di platform terdampak.

Ini juga insiden kedua dalam hitungan hari. Akhir pekan lalu Northflank menyarankan pelanggannya menganggap semua environment variable sudah terbuka.

## 🧊 Freezer supermarket Eropa, gelombang kedua

Jaringan supermarket di Swedia, Belgia, dan Luxembourg melaporkan suhu kulkas dan freezer di puluhan toko naik dalam semalam. Coop Swedia menyebut enam tokonya terdampak ke Aftonbladet. ICA menyatakan sejumlah kecil tokonya kena insiden yang memengaruhi sistem pendingin dan freezer.

Ahold Delhaize — pengecer asal Belanda yang bulan lalu melaporkan insiden keamanan siber ke polisi Belanda — menyebut ada "IT incident" yang mengenai kulkas dan freezer di puluhan supermarket mereka di Belgia dan Luxembourg. Juru bicaranya, Sarah De Meester, menyatakan perusahaan sudah memastikan suhu sistem pendingin naik dan sedang menyelidiki.

Le Soir melaporkan puluhan toko terdampak, termasuk lima gerai Spar, sejumlah toko Shop & Go di SPBU Q8, dan beberapa minimarket Proxy Delhaize. Stephan Moelans, CEO Sabcobel yang mengkhususkan diri di instalasi sistem pendingin, bilang teknisi mulai dikerahkan pukul 01.00 dan sepanjang malam memutus instalasi terdampak dari jaringan listrik.

Pola ini mengulang serangan Oktober di Prancis. Polisi Prancis menyebut peretas mengambil alih unit pendingin di hingga 700 supermarket, mengubah setelan ribuan freezer dari serendah -27 derajat Celsius menjadi jauh di atas 50 derajat. Jaringan Intermarché, Coopérative U, Carrefour, Leclerc, dan Monoprix termasuk yang kena. Toko harus membuang stok daging segar, produk susu, dan makanan beku, dengan kerugian dari puluhan ribu euro sampai lebih dari 130.000 euro. Dua toko di Alsace melaporkan kerugian gabungan 270.000 euro.

Sebagian besar lorong pendingin supermarket memang tersambung internet supaya bisa dipantau dan diperbaiki dari jarak jauh. Di serangan Prancis, pengendali yang dibajak sebagian besar berasal dari perusahaan Denmark, Danfoss. Peretas menonaktifkan sistem alarm sebelum mengubah termostat atau memperpanjang program defrost berjam-jam. Danfoss menyatakan sudah menemukan cacat keamanan tahun lalu dan sudah lama menyarankan pelanggan memasang pembaruan.

Kantor kejaksaan Paris membuka penyelidikan formal atas serangan Prancis, dengan kerugian yang mencakup kehilangan pangan dan kebakaran. Perdana Menteri Sébastien Lecornu meminta badan keamanan siber nasional ANSSI menyelidiki, dan ANSSI kemudian mengonfirmasi bahwa pengendali dari dua perusahaan lain juga disasar.

## 📺 Ask HN: TV yang ngga ikut mengintip

Salah satu thread paling ramai hari ini (515 poin, 625 komentar) datang dari orang yang sudah bertahun-tahun tidak punya TV dan ingin membeli satu yang menghormati privasi — ukuran 60 sampai 80 inci, 4K, minimal 60Hz, dan tidak keberatan bayar lebih.

Permintaannya spesifik: TV-nya tidak boleh melakukan apa pun selain jadi layar untuk Apple TV. Pertanyaan yang muncul kemudian justru lebih menarik daripada jawabannya: merek mana yang paling "bersih" kalau dicolokkan ke kotak eksternal, apakah mode hotel atau mode tanpa internet benar-benar mematikan telemetri, dan seberapa besar perbedaannya dibanding sekadar tidak menghubungkan TV ke Wi-Fi sama sekali.

## 🧾 Tapi… ada tapinya

Angka commit PostgreSQL itu bukan ukuran kualitas kode yang turun. Haas sendiri menegaskan codebase PostgreSQL adalah salah satu yang paling bersih yang pernah ia kerjakan, dan justru karena bersih, bug yang kelihatan oleh mesin jadi lebih banyak ketemu. Masalahnya beda: kapasitas peninjau manusia tetap sama sementara pasokan laporan bug naik tajam. Proyek open source mana pun yang bergantung pada beberapa puluh committer akan merasakan hal yang sama, dan tidak semuanya punya kemewahan menunda rilis.

Soal freezer, penyebab pastinya belum dipastikan untuk gelombang kedua ini. Yang ada baru dugaan, dan menyebutnya "serangan siber" sebagai fakta sudah melangkah lebih jauh dari keterangan resmi.

## 🗣️ Pendapat saya

Yang paling saya pikirkan dari cerita PostgreSQL bukan penundaan rilisnya, tapi kalimat Haas soal empat puluh tahun bug yang tidak pernah ditemukan manusia. Selama ini kita menganggap utang teknis itu sesuatu yang dibiarkan menumpuk karena tidak ada waktu. Ternyata sebagian besar dari tumpukan itu memang tidak terlihat, bukan karena diabaikan, tapi karena alat yang bisa melihatnya belum ada. Sekarang alatnya ada, dan tagihannya datang sekaligus.

Saya ngga tahu bagaimana proyek seukuran PostgreSQL mencicil tagihan itu tanpa berhenti menambah fitur. Yang saya tahu, pola "rilis mundur karena kualitas" jauh lebih sehat daripada pola "rilis tepat waktu karena bug-nya belum ketemu".

Soal lingkungan yang tertutup, saya termasuk yang skeptis pada ide bahwa semuanya harus tersambung. Freezer yang bisa diatur dari jauh terdengar efisien sampai seseorang mengubahnya jadi 50 derajat. Kontrol remote adalah fitur, dan setiap fitur adalah pintu.

Kalian sendiri, kalau beli TV baru minggu ini, bakal langsung colok ke internet atau pakai kotak eksternal saja?

## 🔗 Sumber

- Postgres 19 is late, and it's AI's fault, Robert Haas — http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html
- Diskusi HN Postgres 19 (620 poin) — https://news.ycombinator.com/item?id=50312408
- Show HN: HackerBooks — https://hackerbooks.org
- Diskusi HN HackerBooks (1.619 poin) — https://news.ycombinator.com/item?id=50326821
- Show HN: Wikihack — https://wikihack.netlify.app
- Diskusi HN Wikihack (294 poin) — https://news.ycombinator.com/item?id=50333339
- Show HN: HackerHack — https://news.ycombinator.com/item?id=50333877
- Security incident November 2026, Trigger.dev — https://trigger.dev/blog/security-incident-nov-2026
- Diskusi HN Trigger.dev (124 poin) — https://news.ycombinator.com/item?id=50331784
- Trigger.dev status — https://status.trigger.dev/
- Supermarket freezers across Europe hit by second suspected cyber-attack, The Guardian — https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack
- Diskusi HN serangan freezer (80 poin) — https://news.ycombinator.com/item?id=50335615
- Ask HN: Which TV do you recommend for privacy? — https://news.ycombinator.com/item?id=50328896
