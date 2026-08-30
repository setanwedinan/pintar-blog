---
title: 'Daily Hacker News - 30 Agustus 2026: iMessage Akhirnya Bisa Dipakai di Linux, California Bebaskan Linux dari Verifikasi Usia'
description: 'Story terpanas hari ini: Tether membawa iMessage & SMS ke Linux lewat Bluetooth. Plus: California loloskan exemption Linux dari UU verifikasi usia, esai Bug Blindness, RISC-V resmi didukung CPython, dan bulletin keamanan Qubes OS.'
pubDate: 2026-08-30T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

**TL;DR:** Hari ini Hacker News ramai dengan satu tema: kebebasan platform. Dari proyek yang membawa iMessage ke Linux, exemption open source dari undang-undang verifikasi usia California, sampai dukungan resmi arsitektur terbuka RISC-V di CPython. Ada juga esai kontroversial soal "kebutaan bug" dan bulletin keamanan serius dari Qubes OS.

## Apa yang sedang ramai di Hacker News hari ini?

### 1. Tether: iMessage, SMS, dan notifikasi iPhone kini bisa dipakai di Linux — 492 poin 🔥

Story terpanas hari ini (492 poin, 193 komentar) datang dari Zack Bartel: proyek bernama **Tether** yang menghubungkan iPhone ke Linux lewat Bluetooth.

Bartel pindah ke Linux full-time dan ternyata tidak banyak yang ia rindukan dari macOS — kecuali satu hal: fitur **Continuity** Apple, yaitu kemampuan mengirim/menerima iMessage dan SMS, sinkronisasi clipboard, berbagi file, dan melihat notifikasi iPhone di komputer.

Yang bikin proyek ini menarik:

- **iMessage & SMS lewat Bluetooth, tanpa proxy Mac.** Selama ini solusi populer seperti BlueBubbles butuh Mac sebagai proxy. Tether justru memanfaatkan protokol Bluetooth yang didokumentasikan oleh proyek `ancs4linux` dan `BlueFerry` — dan ditulis ulang sebagai implementasi clean-room dalam C++.
- **Keamanan first-class:** komunikasi antara iOS dan Linux memakai mTLS sejak awal, plus rutin menjalankan bug/security sweep.
- **Fitur lengkap:** iMessage, SMS, notifikasi, sinkronisasi kontak, transfer file, sinkronisasi clipboard, dan yang paling dinanti — **autofill kode OTP** dari Mail/Messages langsung ke form login di browser.
- **Lisensi MIT** dan open source di GitHub (`zackb/tether`), dengan aplikasi iOS yang sudah tersedia di App Store.

Bartel sendiri mengakui KDE Connect itu hebat — tapi fokusnya ke Android, dan roadmap-nya tidak mengarah ke apa yang ia butuhkan. Kalau kamu pengguna Linux dengan iPhone, ini layak dicoba. 🐧📱

### 2. California loloskan exemption Linux dari undang-undang verifikasi usia — 454 poin

Parlemen California **secara aklamasi** meloloskan exemption untuk sistem operasi open source dari undang-undang verifikasi usia (age-verification law) tahun 2025. Software yang didistribusikan di bawah lisensi **GPL, MIT, BSD, dan Apache** dikecualikan — sementara Windows, macOS, iOS, dan Android tetap masuk cakupan aturan tersebut.

Bagi komunitas open source, ini kemenangan besar: tanpa exemption, distribusi Linux dan software open source bisa terseret kewajiban verifikasi usia yang dirancang untuk platform komersial besar. Detail lengkapnya dilaporkan Tom's Hardware, dan diskusi di HN (209 komentar) ramai membahas implikasi regulasi ini bagi ekosistem open source.

### 3. Bug Blindness: kenapa sebagian orang "buta" terhadap bug — 318 poin

Esai terbaru **Dan Luu** ini menantang asumsi umum: ia melihat **ratusan hingga ribuan bug per minggu**, sementara kebanyakan orang yang ia ajak bicara tidak melihat hal serupa — bukan karena bug-nya tidak ada, tapi karena mereka **tidak menyadarinya**.

Poin-poin utamanya:

- "Menyembuhkan" kebutaan bug itu mungkin: setelah beberapa minggu dibiasakan memperhatikan bug, orang mulai melihatnya sendiri.
- Banyak produk meluncur lalu **gagal di pasaran** justru karena pengguna menemukan masalah yang sama yang sudah terlihat sejak awal — masalah yang dianggap "baik-baik saja" oleh tim internal.
- Dengan bantuan LLM, ia kini bisa menyimulasikan perilaku pengguna normal dan menunjukkan bahwa bug tersebut **reproducible** di banyak skenario — memperkuat keyakinannya bahwa temuan bug-nya bukan kebetulan corner case.

Esai ini jadi favorit komunitas engineering karena menyentuh budaya kerja: seberapa jujur tim mengevaluasi produknya sendiri?

### 4. RISC-V kini resmi didukung CPython — 234 poin

Kabar gembira untuk ekosistem open hardware: **CPython resmi mendukung RISC-V sebagai platform tier 3** (sesuai PEP 11). RISC-V adalah arsitektur instruction set yang **terbuka** — berbeda dari x86 dan ARM yang proprietary, siapa pun bisa mengimplementasikannya.

Beberapa fakta dari pengumuman resmi Python Insider:

- Ekosistem RISC-V diproyeksikan **berlipat empat pada 2032**, jadi dukungan Python yang andal di platform ini makin penting.
- Kontribusi besar datang dari **RISE Project**, yang menyediakan mesin RISC-V untuk buildbot dan debugging isu arsitektur.
- Langkah berikutnya: membawa RISC-V langsung ke CI CPython, dan dalam jangka panjang menargetkan **tier 2**.

Ini milestone kecil tapi simbolis: salah satu bahasa pemrograman paling populer di dunia kini resmi "warga" ekosistem RISC-V.

### 5. Qubes OS rilis bulletin keamanan: eksekusi kode arbitrer di dom0 — 110 poin

Qubes OS menerbitkan **Qubes Security Bulletin 118**: kerentanan **eksekusi kode arbitrer di dom0** lewat error reporting `qvm-copy-to-vm`.

Cara kerjanya: jika sebuah qube sudah dikompromikan, dan pengguna menyalin file dari dom0 ke qube jahat tersebut, attacker bisa **menyuntikkan perintah arbitrer ke dom0** melalui nama file yang dilaporkan balik — yang pada akhirnya memungkinkan attacker **mengambil alih seluruh Qubes OS**. Bulletin bertanggal 2026-08-28, dan perbaikannya cukup dengan update normal. Ini pengingat bahwa bahkan sistem yang didesain dengan isolasi ketat pun punya celah di lapisan error handling.

## 💡 Insight Hari Ini

Pola hari ini: **platform terbuka sedang mengikis batas-batas ekosistem tertutup.** Tether menghapus tembok antara iPhone dan Linux; California mengakui open source sebagai kategori yang berbeda dari platform komersial; RISC-V dan CPython memperkuat fondasi komputasi terbuka. Sementara itu, esai Bug Blindness mengingatkan bahwa kualitas software tetap masalah manusia — bukan hanya masalah teknologi.

---

_Sumber: Hacker News, 30 Agustus 2026. Diskusi lengkap bisa diikuti di [news.ycombinator.com](https://news.ycombinator.com/)._
