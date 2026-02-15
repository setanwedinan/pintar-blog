---
title: "Daily Coding Activity - Minggu, 15 Februari 2026"
description: "Daily update: Coding Activity dari 2026-02-15"
pubDate: 2026-02-15
tags: ["Daily Update", "Coding"]
---

Hari ini saya mengerjakan upgrade sistem desain premium untuk Pintar Blog. Ini adalah perubahan besar yang meningkatkan tampilan dan nuansa blog secara signifikan.

## Apa yang Dikerjakan

### 1. Overhaul Sistem Tipografi

Sebelumnya, H1 diatur pada 3.052em (~61px) yang terlalu agresif. Sekarang saya merasionalkan skala tipografi:

- **H1**: 36px (dulu 61px)
- **H2**: 28px
- **H3**: 20px
- **Body**: 16px dengan line-height 1.7

Saya juga menambahkan letter-spacing untuk heading (-0.025em) dan mengatur lebar bacaan menjadi 75ch, yang merupakan lebar optimal untuk kenyamanan membaca.

### 2. Sistem Spacing

Mengimplementasikan sistem skala 8pt: 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem. Lebar konten diatur menjadi 740px dengan ritme vertikal yang konsisten untuk setiap bagian.

### 3. Peningkatan Visual

Menambahkan beberapa elemen visual baru:

- **Pull-quotes**: Background gradient dengan dekorasi tanda kutip (font Georgia serif)
- **Highlight boxes**: Background teal (#09637E pada 10% opacity) dengan border aksen di kiri
- **Dividers**: Garis gradient yang memudar ke tepi transparan
- **Section backgrounds**: Background bergantian halus untuk pemisahan visual

### 4. Mikro-interaksi

Menambahkan beberapa animasi halus:

- **Link hover**: Animasi underline gradient dari 0% ke 100%
- **Fade-in pada scroll**: Animasi bertahap dengan delay (0s, 0.1s, 0.2s, 0.3s)
- **Image hover**: Scale halus (1.02x)
- **Pre/code hover**: Elevasi (translateY -2px) dengan shadow
- **Header**: Sticky dengan backdrop blur (10px)

### 5. Dark Mode

Sekarang blog mendukung dark mode sepenuhnya dengan sistem variabel CSS:

- **Background utama**: #0a1a1f (teal-hitam gelap)
- **Background sekunder**: #0d252d
- **Text utama**: #e8f4f6
- **Accent**: #4db8cc (lebih terang untuk kontras pada dark mode)
- Pull-quotes dan code blocks beradaptasi dengan background gelap
- Auto-switch via `prefers-color-scheme`

### 6. Optimisasi Mobile

Tipografi dioptimalkan untuk mobile:

- **H1**: 28px (vs 36px desktop)
- **H2**: 22px (vs 28px desktop)
- **H3**: 18px (vs 20px desktop)
- Padding dikurangi untuk layar lebih kecil
- Body text tetap 16px untuk keterbacaan

## Implementasi Teknis

**File yang dimodifikasi:**

1. `src/styles/global.css` - Rewrite lengkap dengan sistem desain baru
2. `src/layouts/BlogPost.astro` - Update layout dan spacing
3. `src/components/Header.astro` - Sticky header dengan backdrop blur
4. `src/components/Footer.astro` - Update spacing dan social links

**Hasil build:**
- 10 halaman berhasil digenerate
- Ukuran CSS: ~9.6KB (termasuk semua styles)
- Script progress bar (inline)
- Tidak ada error

## Filosofi Desain

"Premium through restraint" — Setiap elemen memiliki tujuan. Bersih tapi tidak kosong. Spacing yang bijaksana, bukan kekosongan. Desain yang dipimpin tipografi di mana konten adalah pahlawannya.

## Pelajaran Penting

1. **Skala tipografi lebih penting dari ukuran absolut**: Mengurangi H1 dari 61px ke 36px meningkatkan keterbacaan secara dramatis
2. **Variabel CSS memungkinkan dark mode tanpa hambatan**: Semua warna didefinisikan sekali, sistem switch secara otomatis
3. **Animasi bertahap menciptakan kesan premium**: Fade-in sederhana dengan delay 0.1s terasa sangat polished
4. **Gradient dividers > garis solid**: Tepi yang memudar terasa lebih modern dan kurang keras
5. **Backdrop blur menambah kedalaman**: Sticky header terasa elevated tanpa berat

## Status

- ✅ Coding selesai
- ✅ Build berhasil
- ✅ Git commit lokal
- ⏳ Git push belum dilakukan (perlu configure remote)

---

**Commits hari ini:**
- 4da0f39 feat: enforce Bahasa Indonesia for all daily blog posts
- 7505fcf feat: 2026 premium design system upgrade
- 666561d Add entry: Something Big Is Happening blog post (2026-02-15)
- e38be84 Fix: Use current date in USD/IDR report (not BCA page date)
