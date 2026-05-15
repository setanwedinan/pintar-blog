---
title: 'Daily Hacker News - 15 Mei 2026: Turso Menutup Program Bug Bounty Karena Banjir Slop AI'
description: 'Turso mengumumkan penghentian program bug bounty mereka setelah dibanjiri laporan palsu dari AI-generated "slop", mengancam ekosistem open source contribution.'
pubDate: 2026-05-15T14:00:00Z
tags: ['Daily Update', 'Hacker News', 'AI', 'Open Source', 'Security']
---

# Daily Hacker News - 15 Mei 2026

## Turso Menutup Program Bug Bounty Karena Banjir Slop AI

**Sumber:** [turso.tech](https://turso.tech/blog/wonders-of-ai-retiring-bug-bounty) | **Points:** 35 | **Diskusi:** [HN Thread](https://news.ycombinator.com/item?id=)

---

### Apa yang Terjadi?

Turso, perusahaan di balik libSQL (fork open-source dari SQLite yang modern), secara resmi **mengumumkan penghentian program bug bounty** mereka yang menawarkan imbalan $1.000 untuk setiap bug yang bisa menunjukkan *data corruption* di database mereka.

Program ini berjalan hampir satu tahun dan awalnya sangat berhasil — namun semuanya berubah setelah ledakan AI.

### Mengapa Program Ini Dimulai?

Turso sedang menulis ulang SQLite, salah satu perangkat lunak paling andal di dunia. Mereka memiliki infrastruktur testing yang sangat lengkap:

- **Deterministic Simulator** — mensimulasikan berbagai skenario secara deterministik
- **Fuzzer collection** — untuk menemukan bug secara otomatis
- **Oracle-based differential testing** — membandingkan hasil dengan SQLite asli
- **Concurrency simulator** — menguji kondisi race condition
- **Antithesis** — platform testing skala besar

Namun, pengujian otomatis tetap punya batas. Simulator hanya menemukan bug dalam kombinasi yang di-generate. Sebagai contoh, mereka menemukan bug yang **hanya muncul pada database lebih dari 1GB** — simulator mereka tidak pernah membuat database sebesar itu karena fault injection dilakukan di setiap run.

### Awalnya Berhasil, Lalu "Kiamat AI" Datang

Sebelum ledakan AI, program ini berjalan dengan baik. Turso membayar **5 individu** yang semuanya adalah kontributor luar biasa:

- **Alperen** — kontributor inti simulator Turso sendiri
- **Mikael** — menggunakan LLM secara kreatif untuk menemukan *blind spots* simulator (kemudian dipekerjakan Turso)
- **Pavan Nambi** — menggabungkan simulator dengan *formal methods* dan menemukan **lebih dari 10 bug di SQLite** sendiri

Namun setelah ledakan model AI, segalanya berubah. Harga $1.000 menjadi terlalu menggiurkan bagi mereka yang hanya menyuruh AI untuk "cari bug" tanpa memahami apa yang mereka kirimkan.

### Contoh-contoh Laporan Slop yang Absurd

Turso membagikan beberapa contoh laporan palsu yang masuk:

1. **Inject garbage bytes secara manual** ke database header, lalu mengklaim itu "korupsi data" — maintainer menanggapi: *"well, no shit Sherlock"*
2. **Memodifikasi source code** untuk sengaja menambahkan *out-of-bound array access* yang menyebabkan crash, lalu mengklaim itu sebagai bug
3. Laporan-laporan lain yang di-generate AI panjang lebar tanpa substansi nyata

### Dampak yang Lebih Besar

Turso menekankan bahwa masalah ini bukan hanya tentang mereka. Ini adalah **ancaman terhadap seluruh ekosistem open source**:

- Maintainer menghabiskan waktu berjam-jam hanya untuk **menutup PR sampah**
- Proyek open source lain sudah mulai **menutup pintu kontribusi**
- Program reward finansial menjadi **magnet bagi slop makers**
- Kualitas interaksi komunitas menurun drastis

> *"We are sharing this publicly and loudly because we believe that we will all have to find new ways to establish good governance in this new era, and should learn from each other."* — Turso Team

### Pelajaran untuk Komunitas

1. **Reward finansial + AI = bencana** — ketika imbalan uang tersedia, AI akan membanjiri sistem
2. **Open source butuh perlindungan baru** — mekanisme governance lama tidak cukup
3. **Human curation masih penting** — tidak semua otomasi itu baik
4. **Simulator + formal methods** = kombinasi yang sangat powerful untuk testing database

---

*Postingan ini disarikan dari diskusi Hacker News pada 15 Mei 2026. Baca diskusi lengkap di [Hacker News](https://news.ycombinator.com/).*
