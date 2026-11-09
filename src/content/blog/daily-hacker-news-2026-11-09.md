---
title: 'Nomor plat jadi kunci mobil, dan SketchUp akhirnya dapat saingan gratis berbasis Rust'
description: 'Riset Shubs dan Sam Curry membuka rantai dari nomor plat sampai perintah buka pintu untuk mobil satu pabrikan di Australia, Amerika Serikat, dan Kanada. Di daftar Hacker News hari ini juga ada BenchUp, pemodelan 3D furnitur gratis di browser, dan debat soal gelembung AI yang kembali panas.'
pubDate: 2026-11-09T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'keamanan', 'open source']
---

## 🔍 TL;DR

- Shubs dan Sam Curry berhasil mengirim perintah remote unlock ke mobil satu pabrikan di Australia, Amerika Serikat, dan Kanada hanya bermodal nomor plat kendaraan. _(shubs.io, samcurry.net)_
- Titik masuknya kredensial admin ForgeRock OpenIDM yang tertanam di bundle JavaScript vendor, diteruskan path traversal `/static%2f..%2fopenidm/` untuk melewati WAF. _(shubs.io)_
- BenchUp, aplikasi desain furnitur open source berbasis Rust dan WebGPU, memuncaki Hacker News dengan **597 poin dan 179 komentar**. _(ketchup3d.github.io)_
- Tulisan "I'm not convinced the AI bubble exists" mengumpulkan **673 komentar**, diskusi teramai di daftar top hari ini. _(matteoraso.github.io)_

## 🚗 Nomor plat, VIN, lalu pintu terbuka

Kalau kamu pernah menganggap remote unlock di aplikasi mobil sebagai fitur kecil yang aman-aman saja, tulisan Shubs tanggal 7 November ini layak dibaca pelan-pelan. Ia bersama Sam Curry menghabiskan Juli 2026 membedah sistem connected car satu pabrikan besar. Pabrikan itu tidak disebut namanya, tapi dua mereknya tercakup.

Rantainya dimulai dari hal yang paling sepele: nomor plat. Di Australia, nomor plat bisa dipetakan ke VIN lewat situs registrasi kendaraan negara bagian, dan itu bukan celah keamanan karena memang banyak alasan sah untuk tahu VIN sebuah mobil. Masalahnya muncul setelahnya.

Dari VIN, mereka menemukan API yang memetakan ke subscriber GUID. Dari GUID, endpoint `/v1/account` mengembalikan data pribadi pemilik, termasuk email. Semua ini bisa diakses karena kredensial admin OpenIDM tertanam langsung di bundle JavaScript vendor yang dikirim ke browser, dan menurut Shubs kredensial itu sebenarnya untuk lingkungan staging tapi tetap berlaku di produksi.

Bagian yang paling menarik justru soal WAF. Pabrikan jelas sudah memasang proteksi serius pada endpoint `/openidm/*`, terbukti dari blokir Nginx yang konsisten. Shubs dan Curry mencoba `/XUI%2f..%2fopenidm/` dan kena 403. Mereka lalu membiarkan GPT 5.6 Sol Ultra bekerja sekitar enam jam pada source OpenIDM, dan hasilnya `/static%2f..%2fopenidm/` yang tidak tercakup aturan WAF sama sekali.

Dari situ alurnya lurus. Password profil pengguna mana pun bisa di-PATCH, MFA dilewati lewat alur Resource Owner Password Credentials, sesi ditukar jadi token aplikasi konsumen, dan perintah `door-unlock` dikirim ke `api.redacted-telematics.com.au`. Pukul 12 malam rantai itu akhirnya menyatu, dan pintu mobil terbuka.

Yang perlu dicatat: semua pengujian dilakukan pada mobil yang mereka miliki sendiri atau yang sudah diizinkan pemiliknya, dan pemerintah Australia belum tentu sepakat bahwa memetakan plat ke VIN adalah hal netral. Untuk versi Amerika Serikat dan Kanada, rantainya jauh lebih rumit dan ditulis terpisah oleh Sam Curry, karena lingkungan OpenIDM di sana dijaga lebih ketat.

Bagi pemilik mobil, pelajaran praktisnya sederhana dan agak tidak nyaman: keamanan fitur remote sangat bergantung pada kebersihan vendor identity yang dipakai pabrikan, dan kamu sebagai pemilik tidak punya cara memeriksanya dari kursi pengemudi. ([shubs.io](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/), [diskusi HN](https://news.ycombinator.com/item?id=50419215))

## 🪚 SketchUp gratis, jalan di tab browser

Kabar yang paling banyak dipuji hari ini justru yang paling membumi: BenchUp, aplikasi pemodelan 3D untuk proyek kayu dan furnitur.

Proyeknya open source di bawah lisensi MIT, ditulis dengan Rust, dan berjalan di browser desktop memakai WebGPU atau WebGL2. Ada juga versi native untuk Windows, macOS, dan Linux. Alurnya meniru cara kerja SketchUp: gambar garis, tarik permukaan dengan Push/Pull, lalu beri dimensi presisi. Kamu bisa memasukkan panjang persis, snap ke geometri dan sumbu, mengelompokkan bagian, dan memakai komponen yang bisa dipakai ulang.

Dua hal yang membuatnya relevan buat tukang kayu rumahan. Pertama, impor geometri SketchUp `.skp` dan ekspor OBJ, jadi model lama tidak harus dibuang. Kedua, semua data disimpan lokal di browser atau diunduh sebagai berkas `.ketchup`, tanpa akun dan tanpa cloud. Untuk proyek meja atau rak, itu sudah cukup, dan tidak ada langganan yang harus dipikirkan.

Batasan yang jujur disebut sendiri oleh pembuatnya: tekstur dan scene SketchUp tidak didukung, ekspor OBJ hanya membawa geometri tanpa material, dan kerja yang di-autosave di browser bisa hilang kalau data browser dibersihkan. ([ketchup3d.github.io](https://ketchup3d.github.io/app/), [diskusi HN](https://news.ycombinator.com/item?id=50418176))

## 📉 Gelembung AI, dan kenapa debatnya tidak selesai

Tulisan Matteo Raso berjudul "I'm not convinced the AI bubble exists" jadi tempat orang berdebat hari ini. Argumen intinya bukan bahwa risiko AI hilang, melainkan bahwa label "gelembung" dipakai untuk hal yang belum tentu cocok.

Datanya ia ambil dari berkas S-1 Anthropic: pendapatan 41 juta dolar pada 2023, 386 juta dolar pada 2024, 4,585 miliar dolar pada 2025, dan 16,3 miliar dolar hanya dalam enam bulan pertama 2026. Menurut berkas yang sama, Anthropic menghasilkan 2,08 dolar untuk setiap 1 dolar biaya komputasi. Argumen Raso: belanja besar itu sebagian besar berupa pembangunan data center yang sifatnya sekali jalan, bukan biaya operasional permanen.

Ia juga menyoroti rasio harga terhadap laba Alphabet, Meta, dan Nvidia yang menurutnya masih di kisaran 20-an, jauh dari pola gelembung dot-com yang penuh perusahaan tanpa laba dengan P/E ratusan. Contoh yang ia pakai untuk mematahkan ide "tidak ada parit kompetitif": perang sandwich ayam. Tidak ada restoran yang punya keunggulan tahan lama di sana, dan semuanya tetap untung.

Saya tidak sepenuhnya sepakat, dan Raso sendiri tidak mengklaim itu. Ia menutup dengan daftar risiko yang menurut saya justru bagian terkuat tulisannya: penolakan publik terhadap data center, hambatan regulasi, dan utang yang strukturnya makin rumit. Angka 5 triliun dolar komitmen belanja yang ia kutip adalah beban yang tidak selesai hanya karena satu perusahaan sudah tipis di atas biaya komputasi. ([matteoraso.github.io](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html), [diskusi HN](https://news.ycombinator.com/item?id=50418975))

## 💬 Pertanyaan buat kalian

Kalau remote unlock mobilmu bisa dibuka siapa pun yang tahu nomor plat, apa yang berubah dari cara kamu memarkir mobil? Dan untuk yang pernah pakai SketchUp: BenchUp dengan impor `.skp` dan ekspor OBJ sudah cukup menggantikan, atau tekstur dan scene itu justru bagian yang tidak bisa dikorbankan?

## 🔗 Sumber

- [unlocking any car from X brand in most of the world · shubs.io](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/)
- [ForgeRock writeup (AS dan Kanada) · Sam Curry](https://samcurry.net/forgerock)
- [Diskusi HN: Unlocking any car](https://news.ycombinator.com/item?id=50419215)
- [BenchUp, open-source 3D woodworking app](https://ketchup3d.github.io/app/)
- [Diskusi HN: KetchUp / BenchUp](https://news.ycombinator.com/item?id=50418176)
- [I'm not convinced the AI bubble exists · Matteo Raso](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html)
- [Diskusi HN: AI bubble](https://news.ycombinator.com/item?id=50418975)
