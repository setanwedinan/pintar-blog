---
title: "Daily Hacker News - 23 April 2026"
description: "David Crawshaw, co-founder Tailscale, membangun cloud computing baru dari nol karena abstraksi cloud saat ini sudah salah bentuk."
pubDate: 2026-04-23T14:00:00Z
tags: ["Daily Update", "Hacker News"]
---

## "I Am Building a Cloud" — Co-founder Tailscale Bangun Cloud Baru dari Nol

Hari ini di Hacker News, artikel yang paling banyak dibahas berasal dari **David Crawshaw**, co-founder **Tailscale** dan mantan engineer Google yang membangun Go runtime. Crawshaw mengumumkan bahwa ia sedang membangun **cloud computing platform baru** bernama **[exe.dev](https://exe.dev)**, dan hari ini resmi mengumumkan pendanaan **Series A**.

Lalu, apa yang mendorong seseorang yang sudah sukses dengan Tailscale untuk memulai dari nol lagi? Jawabannya sederhana: **ia tidak suka cloud saat ini.**

### Tiga Masalah Fundamental Cloud Modern

Dalam esai yang sangat personal ini, Crawshaw menguraikan tiga masalah fundamental yang ia temui di cloud computing saat ini:

1. **Abstraksi VM yang Salah** — Cloud memaksa pengguna membeli VM yang terikat pada kombinasi CPU/memory tertentu. Padahal sebuah Linux VM pada dasarnya adalah proses di dalam cgroup. Crawshaw berargumen seharusnya kita bisa membeli komputasi mentah (CPU, memory, disk) lalu menjalankan VM sebanyak yang kita mau di atasnya. Solusi saat ini seperti gVisor atau nested virtualization hanya menambah penalti performa.

2. **Disk yang Tertinggal di Era HDD** — Cloud providers mendorong penggunaan remote block device yang didesain untuk era hard drive (seek time 10ms). Namun sekarang kita sudah memakai SSD dengan seek time 20 microsecond. Overhead jaringan membuat remote block storage **10x lebih lambat** dibandingkan lokal NVMe. Crawshaw memberi contoh: sebuah EC2 VM dengan 200k IOPS berharga **$10k/bulan**, sementara MacBook-nya memiliki 500k IOPS.

3. **Biaya Egress yang Tidak Masuk Akal** — Biaya egress dari cloud provider **10x lebih mahal** dibandingkan merack server di data center biasa. Harga hanya masuk akal jika Anda menghabiskan jutaan dolar per bulan.

### "Kubernetes Adalah Lipstik di Babi"

Salah satu kutipan paling berani dari artikel ini adalah tentang Kubernetes:

> "Kubernetes adalah produk yang mencoba memecahkan masalah yang tidak mungkin: membuat cloud portable dan usable. Ini tidak bisa dilakukan... Membuat Kubernetes baik secara inheren tidak mungkin — ini adalah proyek menaruh lipstik berkualitas tinggi di atas babi."

### Mengapa Sekarang Waktunya?

Crawshaw berargumen bahwa **era AI agent** adalah momentum yang tepat untuk membangun ulang cloud:

- Agent AI membuat semua orang menulis lebih banyak software (**Jevons paradox**)
- Setiap persen context window yang dihabiskan agent untuk "berpikir bagaimana membuat cloud klasik bekerja" adalah persen yang tidak digunakan untuk memecahkan masalah sebenarnya
- Kita membutuhkan infrastruktur yang lebih sederhana, lebih murah, dan lebih mudah dikelola

### Apa yang Ditawarkan exe.dev?

Platform yang diluncurkan exe.dev hari ini mengatasi masalah isolasi VM:
- Beli CPU dan memory, jalankan VM sebanyak yang diinginkan
- TLS proxy dan authentication proxy sudah terpasang
- Disk menggunakan **local NVMe** dengan replikasi asinkron
- Jaringan **anycast** global untuk latensi rendah
- Regions di seluruh dunia

### Mengapa Ini Penting?

Artikel ini penting karena datang dari seseorang yang **sangat memahami infrastruktur** — orang yang membangun Go runtime di Google dan co-founded Tailscale. Kritiknya terhadap cloud computing bukan sekadar keluhan, melainkan analisis teknis yang mendalam tentang mengapa abstraksi cloud saat ini sudah tidak sesuai dengan kebutuhan modern, terutama di era AI. Dengan pendanaan Series A yang baru saja dikantongi, exe.dev bisa menjadi challenger serius di ruang cloud computing.

### Link

- [I am building a cloud — crawshaw.io](https://crawshaw.io/blog/building-a-cloud)
- [exe.dev Series A Announcement](https://blog.exe.dev/series-a)
- [Diskusi di Hacker News](https://news.ycombinator.com/item?id=47872324)
