---
title: 'Daily Hacker News - 30 Mei 2026'
description: 'SQLite untuk durable workflows jadi trending #1 di HN dengan 593 poin. Kenapa database lokal bisa jadi jawaban untuk sistem AI agent yang sederhana dan handal.'
pubDate: 2026-05-30T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## SQLite is All You Need for Durable Workflows

Hari ini, postingan dari **Obelisk** yang berargumen bahwa SQLite cukup untuk membangun sistem durable execution langsung meledak ke puncak Hacker News dengan **593 poin** dan **305 komentar**. Argumen ini menantang asumsi bahwa durable workflows selalu butuh infrastruktur database yang besar seperti Postgres atau Kafka.

### Apa Itu Durable Execution?

Durable execution adalah pola di mana progress sebuah workflow disimpan secara persisten, sehingga jika server mati, workflow bisa dilanjutkan dari titik terakhir. Biasanya, ini membutuhkan database eksternal, message queue, atau orchestration service yang terpisah.

### Argumen Utama: SQLite Cukup

DBOS sebelumnya berargumen bahwa "Postgres is all you need for durable execution." Obelisk melangkah lebih jauh: untuk sebagian besar kasus, **SQLite saja sudah cukup**. Alasannya:

- **Tanpa network hop** — tidak ada latency tambahan karena koneksi ke database server
- **Tanpa control plane terpisah** — tidak perlu mengelola service database tambahan
- **State yang mudah diinspeksi** — cukup buka file `.db` untuk debugging
- **Fault isolation yang lebih baik** — setiap agent punya database sendiri

### Litestream untuk Backup

Kekhawatiran utama adalah kehilangan data jika file SQLite hilang. Solusinya adalah **Litestream**, yang melakukan streaming perubahan SQLite secara asynchronous ke S3-compatible object storage. Model operasionalnya sederhana:

1. Jalankan server Obelisk dengan database SQLite lokal
2. Litestream backup otomatis ke object storage
3. File yang sama bisa dipakai untuk replay, debugging, dan audit

### Kenapa Ini Cocok untuk AI Agents

Pola ini sangat menarik untuk **AI agent systems** karena:

- **Bursty & eksperimental** — agent sering berjalan dalam burst, bukan always-on
- **Self-contained state** — setiap agent/tenant punya unit state kecil sendiri
- **Lebih murah** — fleet dari micro VMs dengan SQLite masing-masing lebih murah daripada satu shared database besar
- **Simpler architecture** — kurang infrastruktur berarti kurang yang bisa salah

### Kapan Tetap Butuh Postgres?

Tentu saja, SQLite bukan jawaban untuk semua kasus. Postgres tetap tepat jika kamu butuh:

- High availability yang lebih tinggi
- Shared scalability di banyak server
- Durability model berbasis synchronous replication

Tapi intinya: **jangan mulai dengan infrastruktur yang lebih besar dari yang state kamu butuhkan.** Untuk AI agents, SQLite + Litestream mungkin default yang paling masuk akal.

---

**Sumber:** [SQLite is All You Need for Durable Workflows - Obelisk](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/) | [Diskusi di Hacker News](https://news.ycombinator.com/)
