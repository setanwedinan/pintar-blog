---
title: 'Model 145B parameter kini bisa jalan di laptop: taruhan Edge0-145B pada AI lokal'
description: 'Edge0 merilis model open-source 145B parameter yang diklaim jalan di laptop dengan puncak memori 29 GB dan kecepatan decode 80+ token per detik, plus framework inference-nya.'
pubDate: 2026-11-13T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- Edge0 merilis **Edge0-145B** dan **Edge0-120B** sebagai model open-source, dan menyebut Edge0-145B sebagai model on-device 145 miliar parameter pertama yang terbuka.
- Menurut pengukuran Edge0 sendiri, model ini jalan di laptop dengan **puncak memori 29 GB**, **prefill 1.100+ token/detik**, **decode 80+ token/detik**, dan konsumsi daya sekitar **120 W**.
- Arsitekturnya berbagi matriks besar antar-expert, sehingga dari 145B parameter total hanya sekitar **10B** yang ikut berhitung di setiap langkah inference.
- Bobot, framework inference, dan aplikasi desktop dirilis sekaligus di Hugging Face dan GitHub, jadi hasilnya bisa direproduksi dan di-fine-tune.
- Cerita ini naik ke depan Hacker News dengan **290 poin** dan 85 komentar pada 13 November 2026.

## ⚡ Kenapa angka 145B di laptop itu menarik

Selama beberapa tahun, AI lokal selalu soal kompromi. Model kecil (3B sampai 8B) muat di perangkat, tapi cepat mentok begitu diminta kerja panjang seperti refactor kode atau debugging rantai tool. Model besar butuh memori, bandwidth, dan daya yang tidak ada di laptop biasa, jadi pekerjaan itu dipindah ke cloud — lengkap dengan tagihan per token dan syarat data boleh keluar dari mesin sendiri.

Edge0 memilih menyerang kompromi itu dari sisi arsitektur, bukan dari sisi kuantisasi setelah model jadi. Model dilatih sejak awal dalam bentuk yang memang dirancang untuk dieksekusi lokal, lalu inference engine-nya dibangun bersama modelnya.

Empat lapisan desain yang mereka sebut:

- **Arsitektur:** matriks besar dibagi antar-expert. Setiap grup 64 expert memakai dua matriks besar bersama, sementara tiap expert menyimpan parameter kecil yang membedakannya. Dari 145B parameter total, hanya sekitar 10B yang aktif di satu langkah inference.
- **Training:** model dilatih dalam arsitektur on-device sejak hari pertama, bukan hasil kompresi model cloud.
- **Loading:** memori GPU, memori sistem, dan SSD dipakai berlapis. Expert yang sering dipakai tetap di VRAM, pustaka expert sekitar 40 GB duduk di RAM, dan data kosakata sekitar 48 GB dibaca dari SSD saat dibutuhkan.
- **Scheduling:** GPU mengerjakan expert yang sudah di cache sementara CPU mengambil sisa pekerjaan, ditambah speculative decoding supaya biaya membaca bobot tersebar ke lebih banyak token output.

## 📊 Klaim performa, dan siapa yang mengukurnya

Penting digarisbawahi: angka-angka di bawah berasal dari **evaluasi internal Edge0**, bukan dari penguji independen. Untuk model yang baru dirilis, itu wajar, tapi artinya angka ini perlu diperlakukan sebagai klaim vendor sampai ada pihak ketiga yang mereproduksi.

| Kebutuhan         | Hasil yang dilaporkan Edge0                             |
| ----------------- | ------------------------------------------------------- |
| Memori            | 29 GB puncak, jalan di laptop 48 GB seperti MacBook Pro |
| Prompt processing | 1.100+ token/detik (prefill)                            |
| Generasi          | 80+ token/detik (decode)                                |
| Daya              | Sekitar 120 W typical                                   |
| Konteks           | 128K sampai 256K                                        |

Dengan rata-rata 72,8 dari enam benchmark dan puncak memori 29 GB, Edge0 membandingkan diri dengan Qwen3.8-Flash-Next yang rata-ratanya 71,7 tapi diperkirakan butuh sekitar 70 GB untuk deployment 4-bit standar. Klaim intinya: kemampuan setara dengan sekitar 40% memori. Di sisi coding, Edge0-145B mencetak 64,6 di DeepSWE 1.1, di atas Qwen3.8-Flash-Next (58,7) dan DeepSeek-V4-Flash-0731 (54,4), juga 86,52 di Terminal-Bench 2.1.

Yang juga jujur dari pengumuman mereka: batasnya tetap ada. Perangkat berkomputasi sangat rendah belum bisa menjalankan model 145B secara lokal, dan memori jangka panjang lintas perangkat serta pertanyaan yang butuh informasi sangat baru masih perlu layanan cloud. Jadi posisinya bukan "cloud mati", tapi pembagian kerja: kerja harian dan sensitif di mesin sendiri, sisanya di cloud.

## 🧰 Yang benar-benar bisa diunduh hari ini

Rilis ini bukan cuma pengumuman benchmark. Bobot **Edge0-145B-NVFP4** dan **Edge0-120B-NVFP4** tersedia di Hugging Face, framework inference dan panduan deployment ada di GitHub, dan ada aplikasi Edge0 versi 0.2.0 yang bisa dicoba tanpa menyiapkan environment. Klaim mereka: kemampuan inti model tetap jalan offline, tanpa akun dan tanpa kuota.

Bagi yang selama ini menunda eksperimen model besar karena keterbatasan VRAM, ini kandidat yang layak diuji — dengan catatan biaya hardware dan listrik tetap nyata, dan angka 80 token/detik itu berasal dari setup uji Edge0, bukan dari laptop rata-rata di meja kita.

## 🧭 Sumber

- Pengumuman resmi Edge0, "Edge0-145B: Frontier AI Capabilities on Your Own Computer" — [edge0.ai](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer)
- Bobot model: [huggingface.co/Edge0](https://huggingface.co/Edge0)
- Framework dan aplikasi: [github.com/Edge0-AI/Edge0](https://github.com/Edge0-AI/Edge0)
- Diskusi Hacker News, 290 poin dan 85 komentar per 13 November 2026 — [news.ycombinator.com](https://news.ycombinator.com/)
