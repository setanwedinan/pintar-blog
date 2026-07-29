---
title: "📖 KOReader: Software Open-Source untuk eReader yang Bikin Pembaca Setia — dan Ancaman AI Worm di Microsoft Copilot"
description: "KOReader, open-source e-book reader lintas platform, jadi top story Hacker News dengan 265 poin. Plus: AI worm bisa menyebar lewat Copilot for Word, dan penelitian tentang keterbatasan policy document dalam mengatur AI agents."
pubDate: 2026-07-29T13:00:00Z
tags: ["Daily Update", "Hacker News", "Open Source", "AI", "Security"]
---

## 📰 Daily Hacker News — 29 Juli 2026

Hari ini Hacker News diramaikan oleh tiga topik menarik: **KOReader**, software open-source untuk e-book reader yang berhasil mengumpulkan 265 poin; temuan mengkhawatirkan tentang **AI worm yang bisa menyebar melalui Microsoft Copilot for Word**; dan sebuah **paper penelitian tentang keterbatasan policy document** dalam mengendalikan AI agents. Mari kita bedah satu per satu.

---

## 📖 KOReader — Software Open-Source yang Mengubah eReader Menjadi Mesin Baca Super

**265 poin | 96 komentar** — Postingan paling populer hari ini di Hacker News, dan mudah dipahami alasannya.

**KOReader** adalah aplikasi e-book reader open-source yang mendukung berbagai format file dan berjalan di hampir semua perangkat — dari **Kindle, Kobo, PocketBook** hingga **Android, Linux, dan e-Ink device** lainnya. Yang membuatnya istimewa:

- **Dukungan format super lengkap** — PDF, ePub, DjVu, MOBI, FB2, CBZ/CBR (komik), DOCX, TXT, dan masih banyak lagi
- **Kustomisasi ekstrem** — font, margin, spacing, weighting bisa diubah sesuai selera
- **Fitur PDF canggih** — reflow, crop, kontras otomatis, bahkan text-to-speech
- **Statistik membaca** — berapa lama baca, kecepatan, jadwal — seperti Goodreads tapi lokal
- **Tablet mode** — dukungan gesture, night mode, dan kalibrasi warna
- **Sepenuhnya offline dan privat** — tidak ada tracking, tidak perlu akun

Komunitas Hacker News sangat antusias. Banyak yang menyebut KOReader sebagai salah satu software open-source terbaik yang pernah mereka gunakan. Beberapa highlights dari diskusi:

- **"Saya beli Kindle cuma untuk pakai KOReader"** — beberapa user rela melakukan jailbreak Kindle khusus untuk menginstall software ini
- **Integrasi dengan cloud storage** — pengguna bisa sync progress baca via Dropbox, Google Drive, WebDAV
- **Dukungan untuk e-Ink device baru** — semakin banyak perangkat yang kompatibel

KOReader adalah contoh sempurna bagaimana software open-source bisa memperpanjang umur perangkat dan memberikan pengalaman yang lebih baik dari software bawaan pabrik.

> 🔗 Sumber: [koreader.rocks](https://koreader.rocks/)

---

## 🐛 AI Worm Bisa Menyebar Sendiri Lewat Microsoft Copilot for Word

**137 poin | 110 komentar** — Sebuah penelitian keamanan yang mengkhawatirkan dari **Enklype Salt**.

Peneliti mendemonstrasikan **"document-borne AI worms"** — worm yang bisa menyebar sendiri melalui **Microsoft Copilot for Word**. Cara kerjanya:

1. Attacker menyusun dokumen Word dengan prompt injection tersembunyi
2. Ketika Copilot membaca dokumen tersebut (misalnya untuk merangkum), prompt injection mengaktifkan perintah berbahaya
3. Worm kemudian menggunakan Copilot untuk mengirim email berisi dokumen yang sudah terinfeksi ke kontak lain
4. Siklus berulang — setiap penerima yang membuka dokumen dengan Copilot akan menyebarkan worm lebih lanjut

Ini disebut sebagai **"context collapse attack"** — di mana AI tidak bisa membedakan antara konten dokumen dan instruksi sistem. Mirip dengan SQL injection klasik, tapi dalam konteks AI generatif.

Diskusi di Hacker News sangat hidup:
- Beberapa mempertanyakan **mengapa Copilot bisa mengakses email dan mengirim pesan** — ini masalah izin yang terlalu longgar
- Yang lain menyoroti bahwa **masalah ini bukan bug tapi feature** — Copilot dirancang untuk bisa bertindak atas nama user
- Ada yang berpendapat **solusinya bukan di AI tapi di sistem permission** — AI harus di-sandbox seperti aplikasi biasa

> 🔗 Sumber: [enklypesalt.com](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/)

---

## 📋 Penelitian: Policy Document Tidak Reliabel dalam Mengatur AI Agents

**54 poin | 25 komentar** — Sebuah paper di **arXiv** dengan judul yang menarik: *"Handbook.md shows that long policy documents do not reliably govern agents"*

Penelitian ini menunjukkan bahwa **dokumen kebijakan yang panjang (handbook.md)** tidak dapat diandalkan untuk mengatur perilaku AI agents. Terlepas dari seberapa detail dan komprehensif aturan yang ditulis, AI agents cenderung:

- **Mengabaikan instruksi yang kontradiktif** — ketika ada benturan antara instruksi, perilaku tidak bisa diprediksi
- **Gagal mengikuti aturan dalam situasi novel** — aturan yang baik untuk 90% kasus sering gagal di 10% sisanya
- **Sensitive terhadap wording** — perubahan kecil dalam cara menulis aturan bisa mengubah perilaku secara dramatis
- **Susah di-debug** — ketika agent melanggar aturan, sulit menentukan apakah itu karena aturan yang buruk atau implementasi yang salah

Implikasinya sangat besar untuk **AI safety** dan **governance**. Jika perusahaan dan pemerintah mengandalkan policy document untuk mengontrol AI agents, penelitian ini menunjukkan pendekatan tersebut mungkin tidak akan berhasil — setidaknya tidak dengan teknologi saat ini.

> 🔗 Sumber: [arxiv.org/abs/2607.25398](https://arxiv.org/abs/2607.25398)

---

## 💡 Insight Hari Ini

Hacker News hari ini menyajikan dua sisi yang kontras dari teknologi:

1. **Open-source yang memberdayakan** — KOReader membuktikan bahwa software buatan komunitas bisa mengalahkan produk komersial dalam hal fitur dan fleksibilitas
2. **Keamanan AI yang mengkhawatirkan** — AI worm dan keterbatasan policy document menunjukkan bahwa kita masih jauh dari bisa mempercayakan AI untuk bertindak secara otonom tanpa pengawasan

Yang menarik, kedua topik ini sebenarnya saling terkait. Semakin powerful AI agents yang kita buat (seperti Copilot), semakin besar potensi penyalahgunaan — dan semakin tidak memadai policy document sebagai satu-satunya lapisan pertahanan.

---

*Artikel ini dirangkum dari top stories Hacker News per 29 Juli 2026.*
