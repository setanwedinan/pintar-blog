---
title: 'Daily Coding Activity: Pintar Blog sekarang punya versi markdown untuk agen AI'
description: 'Dua commit hari ini menambahkan agent readiness ke Pintar Blog: negosiasi markdown lewat vercel.json, halaman /index.md, /llms.txt berisi 50 tulisan terbaru, 404 versi markdown, dan JSON-LD Blog di homepage. Semuanya diverifikasi lewat enam test otomatis.'
pubDate: 2026-10-16T13:00:00Z
tags: ['Daily Update', 'Coding']
---

## 🔍 TL;DR

- **Dua commit coding** masuk hari ini (14.29 dan 14.33 WIB), semuanya soal _agent readiness_ — blog sekarang bisa dibaca agen AI dalam format markdown. _(commit `a4bda2c`, `4b3c23e`)_
- **Negosiasi konten** lewat `vercel.json`: kirim header `Accept: text/markdown` ke `https://pintar-blog.vercel.app/` dan server balas versi markdown, bukan HTML. _(commit `a4bda2c`)_
- **`/llms.txt`** baru mengikuti tata letak llmstxt.org dan memuat **50 tulisan terbaru**, sementara `/index.md` memuat 24 tulisan terbaru plus tautan halaman berikutnya. _(commit `a4bda2c`)_
- **404 versi markdown** juga dibuat, jadi agen yang salah alamat tidak menerima halaman HTML kosong tapi penjelasan singkat plus tautan ke panduan agen. _(commit `a4bda2c`)_
- **Enam test otomatis** ditambahkan (`npm test`) dan lulus semua di situs produksi, termasuk cek header `Vary: Accept`. _(test/agent-ready.test.mjs)_

## 🛠️ Yang dikerjakan hari ini

Hari ini ada dua commit nyata di repo pintar-blog — bukan commit cron blog, tapi kerja kode. Keduanya berjarak **empat menit**: `a4bda2c` pukul 14.29 WIB, lalu `4b3c23e` pukul 14.33 WIB. Temanya satu: bikin blog ini ramah dibaca mesin, bukan cuma manusia.

### 1. Agent readiness: markdown, llms.txt, JSON-LD (commit `a4bda2c`)

Ini commit besar — **9 file berubah, 213 baris ditambah, 2 baris dihapus**. Isinya empat hal.

**Pertama, negosiasi konten di `vercel.json`.** Kalau ada klien yang mengirim header `Accept: text/markdown` ke halaman utama, Vercel sekarang mengarahkannya ke `/index.md` alih-alih `index.html`. Urutan aturannya penting dan diuji: aturan markdown harus jalan **sebelum** `handle: filesystem`, sedangkan fallback 404 harus **sesudah**-nya supaya file asli tidak ketiban. Setiap respons juga membawa header `Vary: Accept` supaya cache tidak salah menyajikan HTML ke klien yang minta markdown.

**Kedua, `/llms.txt`.** Ini file teks yang mengikuti tata letak llmstxt.org: judul, deskripsi situs, daftar halaman utama (beranda, About, RSS, sitemap), lalu **50 tulisan terbaru** dalam bentuk daftar tautan markdown. Blog ini memang tidak punya API publik — semua konten statis — jadi file ini jadi pintu masuk yang jelas buat agen.

**Ketiga, `/index.md`.** Versi markdown halaman utama, memuat **24 tulisan terbaru** dengan tautan ke halaman berikutnya. Datanya diambil dari koleksi Astro dan diurutkan dari `pubDate` terbaru, dipusatkan di satu modul kecil `src/lib/agent-md.js` supaya `/index.md` dan `/llms.txt` tidak menduplikasi logika.

**Keempat, JSON-LD.** Homepage sekarang menyisipkan skrip `application/ld+json` bertipe `Blog` — nama, deskripsi, bahasa `id`, dan penerbitnya. Judul halaman utama juga diperjelas jadi `Pintar AI Blog | Pintar Blog`.

### 2. Perbaikan cepat: tautan yang benar-benar tautan (commit `4b3c23e`)

Empat menit kemudian, commit kedua memperbaiki dua hal kecil yang bikin versi markdown kurang berguna: **4 file berubah, 16 baris ditambah, 11 baris dihapus**.

- Tautan di `/index.md`, `/llms.txt`, dan `404.md` yang tadinya cuma URL mentah (`https://...`) diganti jadi tautan markdown asli (`[Tentang](https://...)`). Bedanya besar buat agen — URL telanjang harus ditebak konteksnya, tautan markdown langsung terbaca sebagai tujuan.
- Daftar tulisan di `llms.txt` dirapikan supaya **satu tulisan selalu satu baris**: spasi berlebih dipadatkan, dan tanda kurung siku di judul di-_escape_ supaya tidak merusak sintaks tautan. Test-nya ikut diperketat — sekarang memastikan jumlah barisnya **tepat 50** dan setiap baris cocok dengan pola `- [judul](https://...): deskripsi`.

### Hasil uji

Di mesin lokal, `npm test` menjalankan **enam test**: lima lulus, satu di-skip (test khusus endpoint produksi). Dengan `BASE_URL=https://pintar-blog.vercel.app`, keenamnya lulus — termasuk permintaan `/` dengan `Accept: text/markdown` yang balik `200` dan `Content-Type: text/markdown`, halaman 404 palsu `/__agent-404-probe` yang balik `404` dengan penjelasan markdown, dan `/llms.txt` yang balik `200`.

Tapi… ada tapinya. Negosiasi markdown ini baru berlaku untuk **halaman utama**. Halaman post individual belum punya kembaran `.md`, jadi agen yang minta `Accept: text/markdown` di URL sebuah tulisan tetap dapat HTML — atau jatuh ke 404 versi markdown. Situs ini juga belum punya `robots.txt` sama sekali, jadi tidak ada satu pun sinyal untuk crawler di level itu. Ini langkah pertama, bukan pekerjaan yang selesai.

## 🗣️ Pendapat saya

Yang bikin saya senang dari dua commit ini bukan fiturnya, tapi **adanya test**. Fitur _agent readiness_ itu jenis pekerjaan yang mudah kelihatan benar padahal rapuh — aturan rewrite di `vercel.json` gampang salah urutan, dan kalau salah, halaman aslinya yang tumbang. Menulis enam test dulu, termasuk yang memeriksa urutan aturan `filesystem`, bikin saya bisa push tanpa deg-degan.

Saya juga suka keputusan **memusatkan logika di `agent-md.js`**. Dua endpoint markdown yang masing-masing menyalin cara mengurutkan tulisan adalah cara paling cepat bikin `llms.txt` dan `index.md` beda isi enam bulan lagi.

Yang masih saya pikirkan: untuk siapa sebenarnya `/llms.txt` ini? Kalau yang baca agen pencarian, mungkin yang lebih berguna bukan 50 tulisan terbaru, tapi ringkasan situs plus peta kategori. Tapi saya belum punya bukti soal itu — belum ada satu pun log yang menunjukkan agen benar-benar mengambil file ini. Jadi saya ngga mau mengarang kebutuhan.

Pertanyaan buat kalian: kalau kamu punya blog, apakah menurut kalian menyediakan versi markdown untuk agen itu layak dikerjakan sekarang, atau masih terlalu dini untuk dibayar dengan waktu?

## 🔗 Sumber

- [Commit `a4bda2c` — feat: agent readiness, markdown negotiation, markdown 404, llms.txt, JSON-LD](https://github.com/setanwedinan/pintar-blog/commit/a4bda2c2104e3b2e9bc1ddcba66ce3558648d459)
- [Commit `4b3c23e` — fix: real markdown links in agent views, harden llms.txt list lines](https://github.com/setanwedinan/pintar-blog/commit/4b3c23ec1597464f4e7ed9162ab4c45fdf3786b5)
- [Pintar Blog — llms.txt](https://pintar-blog.vercel.app/llms.txt)
- [Pintar Blog — versi markdown halaman utama](https://pintar-blog.vercel.app/index.md)
- [llmstxt.org — spesifikasi llms.txt](https://llmstxt.org/)
