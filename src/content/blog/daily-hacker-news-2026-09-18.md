---
title: 'Daily Hacker News - Kamis, 18 September 2026'
description: 'Kunci RSA CA era 90-an berhasil difaktorkan, Cloudflare dominasi CDN Eropa, dan DaVinci Resolve rilis versi baru - ringkasan diskusi terpanas Hacker News hari ini.'
pubDate: 2026-09-18T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## TL;DR

Hari ini Hacker News dipanasi oleh seorang engineer yang berhasil memfaktorkan kunci RSA milik sebuah Certificate Authority dari era 90-an, data baru soal dominasi Cloudflare di pasar CDN Eropa, dan rilisan DaVinci Resolve 21.1. Tiga topik ini mengumpulkan lebih dari 700 komentar digabungkan - tanda bahwa keamanan kriptografi lama masih jadi topik yang menyentuh saraf developer.

## Kunci RSA Certificate Authority era 90-an berhasil difaktorkan

Story paling populer hari ini (513 poin, 129 komentar) datang dari mcpherrin.ca: penulis menjelaskan bagaimana ia memfaktorkan kunci RSA milik sebuah Certificate Authority dari era 90-an. Kunci RSA dari masa itu dibuat dengan panjang bit yang menurut standar sekarang sudah jauh terlalu pendek, sehingga dengan perangkat keras dan algoritma modern, pemfaktoran menjadi mungkin.

Diskusi di Hacker News (diajukan oleh user ahlCVA) berputar di sekitar pertanyaan klasik: berapa banyak sistem legacy yang masih mempercayai sertifikat lama tanpa memeriksa ulang kekuatan kriptografinya.

- Sumber: [I've factored the RSA keys of a Certificate Authority from the 90s](https://mcpherrin.ca/2026/09/07/rsa.html)
- Diskusi: [Hacker News - 513 poin, 129 komentar](https://news.ycombinator.com/item?id=49604637)

## Hampir 9 dari 10 perusahaan Eropa pengguna CDN memakai Cloudflare

Data dari ciphercue.com (387 poin, 386 komentar) menunjukkan konsentrasi pasar yang ekstrem: di antara perusahaan Eropa yang memakai CDN, hampir 9 dari 10 menggunakan Cloudflare. Angka komentar yang hampir menyamai poin story-nya menandakan perdebatan sengit soal risiko single point of failure - benang merah dengan beberapa insiden outage besar yang pernah melanda provider ini.

- Sumber: [Among European Companies That Use a CDN, Nearly 9 in 10 Use Cloudflare](https://ciphercue.com/blog/european-cdn-concentration-cloudflare-nine-in-ten)
- Diskusi: [Hacker News - 387 poin, 386 komentar](https://news.ycombinator.com/item?id=49607443)

## DaVinci Resolve 21.1 rilis

Blackmagic Design merilis DaVinci Resolve 21.1 (439 poin, 216 komentar, diajukan oleh user tosh), dengan halaman rilis resmi di blackmagicdesign.com. Update point release seperti ini biasanya berisi perbaikan bug dan stabilisasi setelah rilis mayor - dan komunitas HN tidak pernah melewatkan kesempatan mendiskusikan workflow color grading favorit mereka.

- Sumber: [DaVinci Resolve 21.1 Release Notes](https://www.blackmagicdesign.com/media/release/20260908-03)
- Diskusi: [Hacker News - 439 poin, 216 komentar](https://news.ycombinator.com/item?id=49610181)

## Mention lain yang layak dilihat

- **Show HN: Copperhead - Cursor for circuit boards** (250 poin, 115 komentar) - AI-assisted design untuk PCB dari copperhead.sh, diajukan oleh animeshchouhan. Pola "Cursor untuk X" terus menyebar ke domain engineering yang lebih spesifik.
- **Antiquated HTML Snippets and Artefacts** (245 poin, 90 komentar) - tur nostalgik vale.rocks ke elemen HTML jadul seperti `<blink>` dan kawan-kamunya.

## Penutup

Tema hari ini jelas: infrastruktur dan kriptografi lama tetap relevan, entah karena masih dipakai produksi (kunci RSA lemah, konsentrasi CDN) atau karena terus berevolusi (tool kreatif dan AI-assisted engineering). Sampai jumpa besok dengan rangkuman Hacker News berikutnya.

_Sumber: Hacker News front page, diambil 18 September 2026 via Hacker News API._
