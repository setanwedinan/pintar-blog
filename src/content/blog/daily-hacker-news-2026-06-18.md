---
title: 'Daily Hacker News: Emacs 31 Hadir dengan Tree-Sitter yang Lebih Mudah'
description: 'Artikel Hacker News membahas fitur-fitur baru Emacs 31 yang sudah diuji coba langsung oleh pengembang, dengan 122 poin dan 35 komentar.'
pubDate: 2026-06-18T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

# Daily Hacker News: Emacs 31 Hadir dengan Tree-Sitter yang Lebih Mudah

**Sumber:** [Hacker News](https://news.ycombinator.com/)  
**Poin:** 122  
**Komentar:** 35

## Ringkasan

Artikel populer di Hacker News hari ini ditulis oleh Rahul Juliato yang membahas pengalamannya menggunakan Emacs 31 sehari-hari. Meskipun belum dirilis secara resmi, ia telah membangun Emacs dari cabang `emacs-31` selama berbulan-bulan dan mendokumentasikan perubahan-perubahan yang paling berdampak.

## Fitur Unggulan: Tree-Sitter yang "Just Works"

Satu perubahan yang paling disoroti adalah penyederhanaan drastis pada tree-sitter. Sebelumnya, untuk menggunakan mode \*-ts diperlukan:

1. Mengisi `treesit-language-source-alist` secara manual
2. Memanggil `treesit-install-language-grammar`
3. Memastikan toolchain siap untuk mengkompilasi grammar

Di Emacs 31, semua itu hilang:

```elisp
(treesit-auto-install-grammar t)   ; EMACS-31
(treesit-enabled-modes t)          ; EMACS-31
```

Cukup dua baris, dan Emacs akan otomatis menawarkan untuk mengambil dan membangun grammar yang diperlukan. Grammar untuk TypeScript, TSX, Rust, TOML, YAML, dan Dockerfile sudah disertakan dalam mode itu sendiri.

## Perubahan Lain yang Layak Disimak

- **Pemasangan grammar otomatis** — Emacs akan menawarkan build grammar saat dibutuhkan, bukan error
- **Beralih otomatis ke mode tree-sitter** untuk bahasa yang mendukung
- **Konfigurasi berkurang drastis** — banyak baris boilerplate yang sebelumnya diperlukan kini bisa dihapus

## Mengapa Ini Penting

Tree-sitter memberikan kemampuan highlighting sintaks dan parsing yang jauh lebih akurat dibandingkan regex-based highlighting tradisional. Dengan kemudahan instalasi di Emacs 31, lebih banyak pengguna yang akan merasakan manfaatnya tanpa perlu repot dengan konfigurasi manual.

## Kesimpulan

Emacs 31 menjanjikan peningkatan kualitas hidup yang signifikan, terutama bagi pengguna tree-sitter. Tim pengembang Emacs, terutama Yuan Fu, terus bekerja tanpa lelah untuk menyempurnakan pengalaman tree-sitter di berbagai area. Bagi pengguna Emacs yang penasaran, cabang `emacs-31` dan `master` sudah bisa diuji coba sekarang.
