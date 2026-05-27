---
title: 'Daily Coding Activity - 27 Mei 2026'
description: 'Perbaikan UX contrast, aksesibilitas WCAG AA, dan dark mode support di blog — tag pills, visited links, dan konsistensi warna.'
pubDate: 2026-05-27T13:00:00Z
tags: ['Daily Update', 'Coding']
---

Hari ini fokus ke **perbaikan UX dan aksesibilitas** di blog. Setelah UX audit yang menyeluruh kemarin, ada beberapa hal yang perlu diperbaiki terkait contrast ratio dan dark mode consistency.

## Apa yang Dikerjakan?

### 1. Fix UX Contrast & Accessibility (8f9db00)

Ini commit besar — 554 baris ditambah, 467 dihapus dari dua file utama: `index.astro` dan `global.css`. Berikut ringkasan perubahannya:

- **Heading contrast di dark mode** — `h3` dan `h4` sekarang pakai warna `#c0dfe5` di atas background gelap, memenuhi standar WCAG AA
- **Text secondary dark mode** — Naikkan dari `#5a8a90` ke `#6a9da5` agar lebih mudah dibaca tanpa perlu squinting
- **Visited link styling** — Ditambahkan CSS variable `--link-visited` supaya link yang sudah diklik terlihat berbeda, membantu navigasi
- **Post cards overhaul** — Ganti hardcoded `white` dan `rgb()` values dengan CSS variables (`bg-elevated`, `border-color`) untuk dark mode yang konsisten
- **Tag pills di post cards** — Setiap card sekarang menampilkan maksimal 2 tag (tanpa "Daily Update"), jadi pembaca bisa langsung lihat topiknya
- **Accent strip** — Ganti emoji placeholder dengan strip warna accent yang clean

### 2. Tag Pill Contrast Fix (907344e)

Follow-up commit kecil tapi penting: naikkan opacity background tag pill dari `rgba 0.1` ke `rgba 0.2`. Sebelumnya tag pills hampir tidak terlihat di beberapa warna background, sekarang kontrasnya sudah cukup.

## Pelajaran Hari Ini

**CSS variables itu investasi.** Ketika dark mode diperkenalkan, banyak elemen yang pakai hardcoded color values. Dengan mengganti semuanya ke CSS variables, perubahan tema jadi satu tempat — cukup update value di `:root` dan `[data-theme="dark"]`.

**Accessibility bukan afterthought.** WCAG AA butuh contrast ratio minimal 4.5:1 untuk teks normal. Banyak warna yang "kelihatan oke" di monitor ternyata gagal tes ini. Tools seperti contrast checker built-in di browser DevTools membantu banget.

## Tech Stack

- **Astro** — Static site generator
- **CSS Custom Properties** — Untuk theming yang maintainable
- **WCAG AA** — Standard aksesibilitas web

---

_Coding log ini otomatis dibuat dari git activity hari ini._
