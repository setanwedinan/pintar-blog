---
title: 'Daily Hacker News – 20 November 2026: CPU rancangan AI dan disket lewat Wi-Fi'
description: 'Frostbite menjanjikan pendekatan baru desain CPU, sementara Dettato, Floppy3.5, dan FFmpeg menawarkan kabar untuk pengembang dan kreator.'
pubDate: 2026-11-20T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- Architect Labs memperkenalkan **Frostbite**, rancangan CPU yang dikembangkan dengan sistem AI; hasil efisiensinya merupakan klaim perusahaan dalam pengujian tertentu. _(Architect Labs)_
- Dettato mengubah audio menjadi MIDI dan pembuatnya mempublikasikan perbandingan dengan model lain. _(Kobimusic)_
- Floppy3.5 membaca disket dan menampilkan berkas melalui Wi-Fi. _(GitHub)_
- **FFmpeg 9.1 Gauss** tersedia sebagai rilis stabil pada cabang 9.1. _(FFmpeg)_

Angka poin dan komentar berikut merupakan potret Hacker News ketika halaman diperiksa, bukan angka yang akan selalu sama.

## 🧠 Frostbite: AI ikut merancang CPU dari awal

**279 poin | 186 komentar.** Architect Labs memperkenalkan Frostbite sebagai CPU serbaguna dengan set instruksi baru. Perusahaan mengatakan sistem AI-nya mengulangi desain di berbagai lapisan, mulai dari compiler dan arsitektur hingga verifikasi dan rancangan akhir chip.

Dasar gagasannya adalah _interaction nets_: program digambarkan sebagai jaringan simpul, dan perhitungan dilakukan dengan mengubah pasangan simpul yang terhubung. Architect Labs berpendapat pendekatan ini dapat memperlihatkan pekerjaan yang bisa dilakukan secara paralel tanpa harus menemukan kembali semua ketergantungan saat program berjalan.

Perusahaan melaporkan **4,59 kali kinerja per watt** dibandingkan sebuah inti CPU _dual-issue in-order_ yang sudah terbukti pada silikon, dalam kumpulan 25 beban kerja yang awalnya dipilih. Dari jumlah itu, 15 disimpan untuk evaluasi akhir. Angka tersebut menarik, tetapi pembandingnya spesifik: bukan bukti Frostbite mengalahkan setiap prosesor modern di semua aplikasi.

Tapi… ada tapinya. Architect Labs mengatakan nama CPU pembanding tidak dapat diungkapkan karena alasan hukum. Perusahaan juga masih merencanakan pengujian yang lebih luas, lingkungan percobaan berbasis FPGA, serta perilisan RTL dan set instruksi. Jadi, hasilnya lebih tepat dibaca sebagai klaim pengembang yang masih memerlukan pengujian lebih luas, bukan rekomendasi membeli perangkat.

[Sumber: Architect Labs](https://architectlabs.com/blog/frostbite) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50572503)

## 🎼 Dettato mengubah audio menjadi MIDI

**10 poin | 2 komentar.** Proyek Show HN bernama Dettato menawarkan transkripsi audio ke MIDI. Pengembangnya menyatakan model berukuran **20 juta parameter** dan mempublikasikan tabel perbandingan terhadap beberapa model lain pada kumpulan pengujian yang dijelaskan di halaman proyek.

MIDI di sini bukan rekaman suara yang sama persis. Hasilnya adalah data performa musik yang bisa dipakai sebagai titik awal untuk pekerjaan berikutnya. Pembuatnya juga menyediakan kode sumber dan menyatakan hasilnya dapat digunakan secara komersial.

Ada batas penting: pembuatnya sendiri mengakui model masih kurang baik memisahkan instrumen. Ia juga mengingatkan bahwa angka benchmark tidak otomatis menjelaskan akurasi pada kebutuhan tertentu. Kalau kamu ingin mencobanya untuk sebuah aransemen, periksa dan koreksi hasilnya, terutama ketika beberapa instrumen berbunyi bersamaan.

[Sumber: Kobimusic](https://kobi.music/research/dettato) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50526023)

## 💾 Disket lama bertemu Wi-Fi

**17 poin | 1 komentar.** Floppy3.5 adalah proyek pembaca disket portabel yang menampilkan foto di halaman web melalui Wi-Fi dan dapat menyalinnya ke kartu microSD. Dokumentasinya mencontohkan penggunaan untuk foto dari kamera digital lama yang memakai disket.

Repositori menyatakan perangkat membaca disket FAT12 HD 1,44 MB dan menampilkan berkas pada folder akar. File rancangan papan, firmware, dan model wadah juga tersedia. Ini proyek rakitan, bukan janji bahwa setiap format disket bisa langsung terbaca.

Bagi yang ingin membangun sendiri, dokumentasi memberi peringatan tentang polaritas baterai: sambungan yang salah bisa merusak baterai dan menimbulkan kebakaran. Petunjuk perangkat keras perlu dibaca sebelum merakit, bukan sekadar mengikuti foto hasil akhir.

[Sumber: repositori Floppy3.5](https://github.com/bigcrimping/floppy3.5) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50560595)

## 🎞️ FFmpeg 9.1 tersedia

**204 poin | 28 komentar.** Halaman unduhan FFmpeg mencatat **9.1 Gauss** dirilis pada 20 November sebagai rilis stabil terbaru dari cabang 9.1. Proyek menyediakan kode sumber beserta tanda tangan untuk memverifikasi unduhan, dan menautkan penyedia build untuk berbagai sistem operasi.

Bagi pengembang yang bergantung pada FFmpeg, langkah masuk akal adalah membaca catatan rilis dan menguji alur kerja sebelum mengganti versi produksi. Ketersediaan versi baru sendiri tidak menjamin semua aplikasi atau paket pihak ketiga langsung memakai versi tersebut.

[Sumber: FFmpeg](https://ffmpeg.org/download.html#release_9.1) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50569998)

## 💡 Insight hari ini

Dari arsitektur CPU hingga pembaca disket, kabar hari ini menunjukkan pentingnya membedakan demonstrasi, hasil pengujian, dan produk yang siap dipakai. Dokumentasi yang terbuka membantu pembaca menilai batas masing-masing.

## 🗣️ Pendapat saya

Saya paling penasaran pada Frostbite, tetapi ingin melihat pembanding yang lebih luas sebelum menilai klaim efisiensinya. Di sisi lain, Floppy3.5 terasa menarik karena menyelesaikan masalah yang sangat konkret: membuka kembali berkas dari media lama. **Menurut kalian, proyek mana yang paling ingin dicoba?**

## 🔗 Sumber

- [Architect Labs — Frostbite](https://architectlabs.com/blog/frostbite)
- [Kobimusic — Dettato](https://kobi.music/research/dettato)
- [GitHub — Floppy3.5](https://github.com/bigcrimping/floppy3.5)
- [FFmpeg — unduhan dan rilis](https://ffmpeg.org/download.html#release_9.1)
- [Hacker News — halaman utama](https://news.ycombinator.com/)
