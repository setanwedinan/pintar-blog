---
title: "Daily Hacker News - 20 April 2026"
description: "ggsql: Grammar of Graphics untuk SQL oleh Posit — mengubah cara kita membuat visualisasi data langsung dari database"
pubDate: 2026-04-20T14:00:00Z
tags: ["Daily Update", "Hacker News"]
---

## ggsql: Grammar of Graphics untuk SQL

Hari ini di Hacker News, [**ggsql: A Grammar of Graphics for SQL**](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/) dari Posit mendapat perhatian besar dengan **73 poin** dan diskusi yang aktif.

### Apa itu ggsql?

**ggsql** adalah proyek open-source baru dari Posit (perusahaan di balik RStudio dan ekosistem tidyverse) yang membawa konsep **Grammar of Graphics** — yang selama ini terkenal melalui `ggplot2` di R — ke dalam dunia SQL. Dengan ggsql, kamu bisa membuat visualisasi data yang kompleks dan elegan **langsung dari database** tanpa perlu mengekspor data ke Python atau R terlebih dahulu.

### Mengapa Ini Penting?

- **Eliminasi ETL untuk visualisasi** — Tidak perlu lagi menarik data dari database ke notebook Python/R hanya untuk membuat chart. ggsql mengeksekusi visualisasi langsung di sumber data.
- **Grammar of Graphics yang sudah terbukti** — Pendekatan deklaratif layer-based dari ggplot2 telah menjadi standar de facto visualisasi data selama lebih dari satu dekade. Membawanya ke SQL membuka aksesibilitas yang jauh lebih luas.
- **Dari Posit** — Tim yang membangun ggplot2, Shiny, dan ekosistem data science R. Ini bukan eksperimen kecil, tapi ekstensi natural dari visi mereka.
- **Alpha release** — Saat ini masih dalam tahap alpha, artinya API bisa berubah, tapi arahnya sudah jelas: membuat SQL sebagai bahasa *first-class* untuk visualisasi data.

### Konteks Industri

Langkah Posit ini sejalan dengan tren yang lebih luas di industri data:

- **Push-down computation** — Semakin banyak tools yang memindahkan komputasi ke database (dbt, DuckDB, dan sekarang ggsql).
- **SQL sebagai universal interface** — Hampir semua data engineer dan analyst menguasai SQL. Mengurangi ketergantungan pada Python/R untuk visualisasi adalah win besar untuk adopsi.
- **Competitive landscape** — ini bisa menjadi alternatif yang menarik dibandingkan dbt + Metabase atau Looker untuk workflow visualisasi yang lebih *developer-friendly*.

### Link

- [Postingan resmi ggsql Alpha Release](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)
- [Diskusi di Hacker News](https://news.ycombinator.com/item?id=47833558)
