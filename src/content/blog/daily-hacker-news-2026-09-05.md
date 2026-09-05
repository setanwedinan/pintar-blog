---
title: 'Daily Hacker News: Zero-Day Chromium Aktif Dieksploitasi, Fermat Diformalkan Bersama Anthropic, & Nitter Bangkit Lagi'
description: 'Ringkasan diskusi Hacker News 5 September 2026: celah sandbox RCE di semua Chromium, upaya formalisasi Teorema Terakhir Fermat, kebangkitan instance Nitter, dan Belanda tarik emas dari AS.'
pubDate: 2026-09-05T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'Security']
---

Halaman depan Hacker News hari ini didominasi keamanan dan riset: satu zero-day yang mengenai hampir semua browser modern, satu proyek formalisasi matematika yang melibatkan Anthropic, plus beberapa cerita kecil yang menarik. Ini pilihan kami.

## 🔒 Celah Sandbox RCE Aktif Dieksploitasi di Semua Versi Chromium — 610 Poin | 336 Komentar

Cerita terpanas soal keamanan: **CVE-2026-85046**, celah sandbox remote code execution yang **aktif dieksploitasi** dan dilaporkan mengenai **semua versi Chromium**. Diskusinya mengacu ke entri NVD untuk kerentanan tersebut.

Ini bukan teori — klaim "actively exploited" berarti ada serangan nyata di alam liar. Kalau kamu pakai browser berbasis Chromium (Chrome, Edge, Brave, dan lainnya), ini alarm untuk segera update browser ke versi terbaru hari ini juga.

Diskusi di HN juga menyentuh betapa seriusnya kelas serangan RCE di dalam sandbox renderer — lapisan pertahanan yang selama ini diandalkan untuk menahan kode jahat agar tidak lolos ke sistem.

🔗 Sumber: [NVD - CVE-2026-85046](https://nvd.nist.gov/vuln/detail/cve-2026-85046)

## 🧮 Memformalkan Teorema Terakhir Fermat — 663 Poin | 415 Komentar

Anthropic memublikasikan tulisan riset berjudul **"Formalizing Fermat's Last Theorem"** di blog resminya. Proyek ini membahas upaya memformalkan bukti Teorema Terakhir Fermat — salah satu hasil paling terkenal dalam matematika — dalam sistem pembuktian formal.

Diskusi HN (415 komentar!) penuh detail soal apa artinya memformalkan bukti sepanjang dan serumit ini, serta bagaimana tools seperti proof assistant bisa membantu. Untuk penggemar matematika dan pemrograman berbasis pembuktian, ini tambang emas.

🔗 Sumber: [Anthropic Research](https://www.anthropic.com/research/formalizing-fermats-last-theorem)

## 🐦 Nitter Punya Instance Aktif Lebih Banyak dari Sebelum Takedown — 373 Poin | 139 Komentar

Nitter, frontend alternatif untuk membaca tweet tanpa login maupun iklan, dilaporkan kembali hidup: menurut wiki instance di Codeberg, jumlah instance yang berfungsi sekarang **lebih banyak dibanding sebelum gelombang takedown**. Diskusi ini merujuk ke proyek fork bernama "shitter" yang memelihara daftar instance.

Bagi yang kangen pengalaman Twitter ringan tanpa akun, ini kabar baik. Sekaligus menunjukkan betapa sulitnya membunuh proyek open source yang community-nya gigih.

🔗 Sumber: [Wiki Instances di Codeberg](https://codeberg.org/mv12star/shitter/wiki/Instances)

## 🏦 Belanda Tarik Emasnya dari AS — 145 Poin | 89 Komentar

Dilaporkan ABC Australia: **Belanda menarik emasnya keluar dari AS** karena kekhawatiran atas "geopolitical unrest". Perdebatan di HN membahas sejarah reposisi emas sentral bank dan apa artinya bagi kepercayaan terhadap penyimpanan aset lintas negara.

🔗 Sumber: [ABC News Australia](https://www.abc.net.au/news/2026-09-04/why-the-netherlands-moved-its-gold-from-us-and-canada/107111990)

## 🛠️ Cerita Lain yang Layak Dilirik

- **Statichost.eu — European static site hosting** (350 poin | 155 komentar) — opsi hosting statis dari Eropa yang jadi tempat diskusi alternatif di luar provider AS. Sumber: [statichost.eu](https://www.statichost.eu/)
- **PC gaming $60 dari AMD BC-250** (13 poin | 5 komentar) — tulisan tentang GPU bekas chip mining AMD BC-250 yang bisa jadi gaming PC super murah. Sumber: [Dev Quasar](https://devquasar.com/hardware/the-60-gaming-pc-amd-bc-250/)

## 💡 Insight Hari Ini

Dua cerita teratas menunjukkan dua sisi dunia teknologi hari ini: sisi **keamanan** yang harus dijaga terus-menerus (zero-day Chromium aktif dieksploitasi), dan sisi **riset** yang terus mendorong batas (formalisasi Fermat). Di antaranya, komunitas open source membuktikan ketahanannya lewat Nitter. Kalau cuma sempat melakukan satu hal dari post ini: **update browser Chromium kamu sekarang**.

_Poin dan jumlah komentar dicatat saat post ini disusun (5 September 2026) dan bisa berubah sepanjang hari._
