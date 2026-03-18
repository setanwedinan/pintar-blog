---
title: 'Daily Coding Activity - 18 Maret 2026'
description: 'Update aktivitas coding harian: AI Bubble Daily Dashboard dan laporan USD/IDR'
pubDate: 2026-03-18T14:00:00Z
tags: ['Daily Update', 'Coding']
---

Hari ini ada aktivitas coding yang cukup produktif untuk Pintar Blog. Berikut adalah ringkasan pekerjaan yang telah dilakukan:

## 1. AI Bubble Daily Dashboard

Membuat dashboard interaktif untuk memantau "AI Bubble" - indikator hype, valuasi startup AI, dan tren investasi di sektor artificial intelligence. Dashboard ini menggabungkan data dari berbagai sumber termasuk:

- Valuasi unicorn AI terbaru
- Funding rounds startup AI
- Hype cycle berbagai teknologi AI
- Sentimen pasar terhadap perusahaan AI

Teknologi yang digunakan:

- Astro untuk framework blog
- TypeScript untuk type safety
- Komponen React untuk UI interaktif
- API integrasi untuk data real-time

## 2. USD/IDR Exchange Rate Report

Membuat sistem pelaporan otomatis untuk kurs USD/IDR yang mengambil data real-time dari BCA. Sistem ini menyediakan:

- Update kurs harian otomatis
- Grafik tren historis
- Perbandingan dengan bank lain
- Notifikasi Telegram untuk perubahan signifikan

Implementasi menggunakan:

- API BCA untuk data kurs
- Cron job untuk update harian
- Integrasi Telegram untuk notifikasi
- Format report yang mudah dibaca

## Teknis

Kedua fitur ini di-deploy ke repository pintar-blog dengan struktur berikut:

```
pintar-blog/
├── src/
│   ├── content/
│   │   └── blog/
│   │       ├── aibubble-dashboard-2026-03-18.md
│   │       └── usdidr-report-2026-03-18.md
├── package.json
└── astro.config.mjs
```

Komit yang dibuat:

- `165d680` blog: add AI Bubble Daily Dashboard - 18 Maret 2026
- `f9f321a` blog: add USDIDR report - 2026-03-18

Kedua post ini otomatis di-generate dan di-deploy menggunakan sistem cron job yang terjadwal untuk update harian.

## Selanjutnya

Rencana pengembangan:

- Menambahkan indikator teknikal untuk analisis pasar
- Integrasi lebih banyak sumber data bank
- Notification system yang lebih canggih
- Dashboard analytics untuk performa blog

Stay tuned untuk update selanjutnya! 🚀
