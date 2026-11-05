---
title: 'Satu tanda bintang di /etc/shadow, dan AI yang menemukan bug empat belas tahun'
description: 'Rangkuman Hacker News 5 November 2026: bug password bypass di musl yang berakar dari keputusan tahun 2012 dan baru ditutup OpenSSH 10.6p2 hari ini, pipeline OpenAI yang menghasilkan 948 eksploit root Linux dengan biaya 1,2 juta dolar, proxy residensial yang ketahuan keluar dari jaringan Gedung Putih 236 kali, dan daftar awesome yang mati karena PR dari agen AI.'
pubDate: 2026-11-05T13:00:00Z
tags: ['berita', 'Hacker News', 'keamanan', 'AI']
---

## 🔍 TL;DR

- OpenSSH 10.6p2 dirilis hari ini untuk menutup bypass autentikasi password di sistem Linux yang memakai musl tanpa PAM, dan akar bugnya adalah keputusan musl tahun 2012 yang mengembalikan `"*"` alih-alih NULL saat `crypt()` gagal _(OpenSSH release notes)_
- Yang menemukannya adalah Özgün Kültekin dari Wakefield, dengan bantuan yang dia sebut "agent swarms", setelah membangun 12 varian sshd dan melemparkan sekitar 17.600 percobaan login aneh _(sshhole.com)_
- OpenAI mempublikasikan pipeline yang memvalidasi 1.724 kerentanan Linux, menghasilkan 948 eksploit local privilege escalation, dengan biaya API 1.213.430 dolar atau 1.279 dolar per eksploit _(OpenAI)_
- Layer3 Intel mencatat 236 kali keluar lewat jaringan Gedung Putih (AS2650) dalam 30 hari, dari 6 alamat, lewat 28 layanan proxy residensial berbeda _(Layer3 Intel)_
- Erik Gahner menulis bahwa repo "awesome" makin tidak berguna: isinya basi, dan pull request-nya dibanjiri tool hasil vibe coding _(erikgahner.github.io)_
- Tim OpenSSH sendiri menulis di catatan rilis bahwa mereka menerima banyak laporan keamanan hasil model AI, dan memutuskan merilis lebih sering alih-alih menumpuk perbaikan _(OpenSSH)_

## ⭐ Satu karakter yang salah, empat belas tahun kemudian

Hari ini OpenSSH merilis versi 10.6p2, dan isinya satu kalimat yang cukup menakutkan: ada bypass autentikasi password yang bisa dieksploitasi lewat sshd di sebagian sistem Linux, khususnya yang dibangun dan dijalankan dengan dukungan PAM dimatikan.

Cerita lengkapnya ada di sshhole.com, dan situs itu menjelaskan bugnya jauh lebih baik daripada kebanyakan advisory. Semuanya berawal dari sebuah karakter.

Di Unix lama, kalau sebuah akun tidak boleh dipakai login, field password-nya diisi tanda bintang `*`. Bintang bukan hash, jadi tidak ada password yang bisa cocok. Tradisi itu dimulai tahun 1980, dan di repo sejarah BSD masih ada barisnya: akun `daemon` dengan field `*`, dan nama asli "The devil himself".

Lalu masuk `crypt()`. Spesifikasi Unix tahun 1997 bilang jelas: kalau gagal, `crypt()` mengembalikan NULL. Masalahnya banyak program tidak memeriksa NULL, jadi begitu `crypt()` gagal, programnya crash. Pada Agustus 2012 musl, libc yang dipakai Alpine, memutuskan berhenti mengembalikan NULL. Kalau gagal, ia mengembalikan satu karakter yang tidak mungkin cocok dengan password asli. Karakter yang dipilih: `"*"`.

Di titik itu, ada dua benda berbeda yang memakai simbol yang sama. Satu adalah penanda "akun ini terkunci" di `/etc/shadow`. Satu lagi adalah nilai balik dari fungsi yang gagal menghitung hash.

Dua puluh hari kemudian musl menambahkan sha512crypt, dan karena algoritma itu makin lambat untuk password makin panjang, musl membatasi input di 256 byte (`KEY_MAX 256`) sebagai perlindungan DoS. Lewat 256 byte, `crypt()` gagal. Dan kalau gagal, ia mengembalikan `"*"`. Komentarnya bahkan menulis itu terang-terangan sejak awal.

Sekarang sisi sshd. Sejak CVE-2016-6210, kalau sshd ditanya soal user yang tidak ada, ia meminjam salt milik akun lain dan tetap menghitung hash supaya waktu jawabnya sama. Trik yang sama dipakai untuk akun yang field password-nya `*`, karena tidak ada hash asli untuk dihitung.

Gabungkan semuanya dan hasilnya begini: pada sshd berbasis musl tanpa PAM, sebuah akun dengan field `*` akan menerima password apa pun yang panjangnya antara 257 dan 1024 byte, karena `crypt()` gagal, mengembalikan `"*"`, dan `"*"` itu sama dengan isi field akun tersebut.

Di image resmi Alpine untuk AWS dan Azure, akun `alpine` adalah default-nya dan punya `doas` tanpa password. Artinya, dalam kasus itu, hasilnya root.

Yang membuat cerita ini menarik bukan cuma bugnya, tapi jejak mengapa ia bertahan lama. Debian pernah mengajukan agar glibc meniru `"*"` milik musl pada 2013; enam tahun kemudian Debian pindah ke libxcrypt yang memakai `"*0"`, satu karakter berbeda. Pada Desember 2024 milis musl membahas busybox `passwd` yang rusak untuk password 257 karakter, dengan `"*"` dan batas 256 yang sama, dan tidak ada yang menyebut sshd. Pada 30 Oktober 2026, empat hari sebelum bug ini ditemukan, sebuah tinjauan keamanan memperbaiki fungsi `pick_salt()` di OpenSSH. Bugnya ada empat baris di bawahnya.

Kültekin menuliskan metodenya dengan jujur: dia membangun sshd dengan berbagai kombinasi (glibc, musl, PAM, tanpa PAM, shadow, tanpa shadow) dan melempar sekitar 17.600 login aneh. Setiap build sepakat, kecuali musl tanpa PAM. Dan soal siapa yang mengerjakan: "oh did i say 'i'? sorry. i had agent swarms. a lot of them."

## 🤖 948 eksploit root dengan biaya 1,2 juta dolar

Di hari yang sama, OpenAI mempublikasikan hasil kerja yang menjelaskan mengapa bug seperti di atas mungkin akan makin cepat ditemukan, dan juga makin cepat ditambal.

Mereka membangun prototipe pipeline otonom untuk mencari celah di kernel Linux di dalam lingkungan riset terkendali. Hasil satu kali jalan pada pertengahan Oktober 2026: 2.308 kandidat temuan, 1.724 kerentanan berhasil direproduksi secara dinamis, 291 proof-of-concept untuk kebocoran informasi, dan 948 eksploit local privilege escalation yang benar-benar bekerja pada distribusi Linux yang umum dipakai.

Biayanya 1.213.430 dolar kredit API, atau 1.279 dolar per eksploit LPE. Untuk perbandingan, Pwn2Own dan TyphoonPWN secara historis memberi bounty 20.000 dan 70.000 dolar untuk eksploit LPE kernel Linux. Diterapkan ke 948 eksploit itu, angkanya jadi 18,9 juta sampai 66,3 juta dolar, sekitar 16 sampai 55 kali biaya pipeline-nya.

Di lingkungan kernelCTF yang disesuaikan, hasilnya lebih kecil tapi lebih tajam: 25 PoC kebocoran informasi dan 21 eksploit LPE, dengan biaya sekitar 32.936 dolar. Kalau 21 kerentanan itu diterima program, hadiahnya sekitar 1,5 juta dolar, kira-kira 45 kali biaya pemindaian.

Yang perlu dicatat juga soal targetnya. Mesin virtual yang dipakai menjalankan sistem operasi desktop stok, bukan target yang dilemahkan, dengan threat model yang sama seperti kompetisi keamanan. Dan menurut OpenAI, agen dalam pipeline itu menemukan dan memakai setidaknya 10 teknik eksploitasi Linux yang baru.

Angka yang paling mengganggu ada di bagian refleksi: dalam 10 hari saat pemindaian berjalan, mereka mengamati lebih dari 100 LPE Linux sudah ditambal atau punya patch pementasan dari kontributor lain, dan sekitar 300 lagi sedang dibahas publik. Artinya, perbaikan manusia memang berjalan, tapi kecepatannya sekarang ditentukan oleh kecepatan penemuan mesin.

OpenAI juga menyimpulkan sesuatu yang praktis dan tidak nyaman: untuk jangka menengah, punya akun berprivilese rendah di sebuah sistem operasi yang tidak mutakhir sepadan dengan akses root kalau penyerangnya punya sumber daya.

## 📡 Gedung Putih, dan 236 kali keluar lewat proxy residensial

Cerita ketiga hari ini yang paling banyak dibicarakan di Hacker News, 1.169 poin dan 379 komentar, bukan soal AI sama sekali, tapi soal infrastruktur yang kita biarkan tumbuh di perangkat orang.

Layer3 Intel meluncurkan sesuatu bernama Residential Proxy Observatory, dan saat sedang melihat-lihat isinya mereka menemukan aktivitas proxy residensial pada AS2650. AS2650 terdaftar atas nama Executive Office of the President, agensi federal yang menaungi jaringan Gedung Putih.

Angkanya: dari 5 Oktober sampai 3 November, pipeline enumerasi mereka keluar lewat jaringan itu 236 kali, dari 6 alamat, pada 26 dari 30 hari, lewat 28 layanan proxy residensial berbeda. Mereka memverifikasi alamat-alamat itu lewat Spur dan Synthient, yang juga menandainya sebagai exit proxy residensial.

Mereka menegaskan ini bukan penargetan. Akses itu publik: siapa pun bisa mendaftar ke layanan proxy residensial, membayar beberapa dolar, dan mengirim permintaan lewat jaringan mana pun yang kebetulan terjangkau. Pola waktunya juga mereka bahas: sekitar separuh aktivitas jatuh antara pukul 17.00 dan tengah malam waktu Timur, hampir tidak ada dini hari. Itu lebih mirip orang daripada Wi-Fi tamu publik.

Yang mereka lihat adalah exit-nya, bukan perangkat atau orangnya, dan mereka menulis itu eksplisit. Komentar paling tajam di Hacker News justru mempertanyakan hal ini: satu komentator menulis bahwa mereka tidak benar-benar tahu jaringan itu apa, hanya siapa pemilik ruang IP-nya, dan bahwa ini bisa saja lab keamanan atau jaringan tamu untuk media.

Tapi bagian lain dari laporan itu lebih sulit dibantah karena skalanya. Di Saint Helena, Ascension, dan Tristan da Cunha, wilayah Atlantik Selatan yang memuat pulau berpenghuni paling terpencil di dunia, mereka mencatat 413 alamat dan lebih dari 32.000 observasi, terbagi antara Starlink dan penyedia lokal Sure Saint Helena. Di Antartika ada tiga observasi, semuanya dari alamat Cloudflare WARP yang mengarah ke Stasiun McMurdo.

Intinya sederhana: proxy residensial tidak butuh kamu menginstal sesuatu yang mencurigakan. Cukup satu SDK di dalam aplikasi yang kamu pasang, dan perangkatmu jadi bagian dari jaringan sewaan.

## 🗂️ Daftar "awesome" tidak lagi awesome

Erik Gahner menulis esai pendek yang rasanya akan banyak dikutip: repo dengan awalan "awesome" di GitHub, yang dulu dia anggap tambang emas, sekarang sebagian besar dia anggap tidak relevan.

Alasan pertama adalah usia. Dia melihat awesome-R, yang terakhir diperbarui lebih dari setahun lalu, dan salah satu tautan pertamanya adalah daftar 50 paket R paling banyak diunduh per 2016. Untuk siapa pun yang mau belajar R sekarang, itu bukan sumber, itu arsip.

Alasan kedua lebih menarik: repo-repo itu dibanjiri PR dari agen. Dia mengambil contoh awesome-free-online-tools, repo kecil dengan 13 bintang tapi 91 pull request terbuka. Yang dia periksa semuanya menyarankan tool generik hasil vibe coding. Pemicunya adalah satu PR ke repo awesome-statistics miliknya sendiri, yang menyarankan situs bernama StatOrigin. Setelah ditelusuri, pengirimnya sudah membuat setidaknya enam situs hasil vibe coding dan mengirim lebih dari 100 pull request ke berbagai daftar awesome.

Ada juga contoh yang layak diapresiasi: satu maintainer menolak PR dengan alasan "belum ada bukti cukup bahwa isinya ditinjau pendidik berkualifikasi, divalidasi independen, atau punya hasil belajar yang terbukti".

Kesimpulan Gahner tidak sekeras judulnya. Daftar awesome masih bisa bagus. Tapi sebagai cara umum mencari sumber berkualitas, ia sudah kalah bersaing, dan yang membuatnya kalah justru pihak yang paling rajin mengisi formulir.

## 🧾 Tapi… ada tapinya

Ada pola yang lucu di tiga cerita pertama, dan lucunya agak mengganggu.

AI dipakai untuk menemukan bug sshd yang berakar dari keputusan tahun 2012, dan itu bagus. AI dipakai OpenAI untuk menghasilkan 948 eksploit root dalam satu kali jalan, dan itu ambigu: hasilnya dilaporkan ke maintainer bersama patch, tapi kemampuan yang sama ada di tangan siapa pun yang mau membayar 1,2 juta dolar. Lalu AI juga dipakai untuk mengirim 100 pull request berisi tool generik ke daftar kurasi orang, dan itu jelas tidak bagus.

Yang membedakan ketiganya bukan teknologinya. Yang membedakan adalah apakah ada manusia di ujung proses yang mau membaca hasilnya.

Bukti paling kuat soal ini justru datang dari tim OpenSSH sendiri, di catatan rilis hari ini. Mereka menulis bahwa mereka menerima banyak laporan bug keamanan, banyak di antaranya temuan model AI atau dibuat dengan bantuan AI. Banyak yang tidak berdampak dalam threat model realistis, tapi mereka tetap menyambut, terutama kalau disertai triase manusia, analisis, test case, dan usulan perbaikan.

Lalu ada kalimat yang seharusnya dibaca dua kali oleh setiap vendor: mereka melihat beberapa kasus di mana bug yang diidentifikasi tool AI kemudian ditemukan secara independen oleh peneliti lain. Artinya penyerang yang tidak melapor ke proyek open source kemungkinan besar juga bisa menemukannya. Karena itu OpenSSH memutuskan merilis lebih sering, tidak lagi menumpuk perbaikan sampai jadwal rilis berikutnya.

Jadi ya, hari ini ada bug 14 tahun yang ditutup. Tapi alasan ia ditutup hari ini, bukan tahun lalu, adalah karena sekarang ada cukup banyak agen yang menjelajahi kode yang tidak pernah dibaca manusia.

## 🗣️ Pendapat saya

Sshole adalah halaman web terbaik yang saya baca minggu ini, dan bukan karena desainnya. Karena ia melakukan sesuatu yang jarang: menjelaskan sebuah CVE sebagai rantai keputusan, bukan sebagai satu baris kerentanan. Setiap langkah punya tanggal, commit, dan tautan ke sumber aslinya. Kamu bisa mengikuti dari `daemon:*` tahun 1980 sampai `strcmp` yang membaca alamat 0 pada 2012, dan pada akhirnya kamu mengerti mengapa tidak ada yang melihatnya selama sepuluh tahun.

Bagian yang paling saya sukai ada di akhir: penulisnya menulis "i had agent swarms. a lot of them. let's not get into it". Itu jujur, dan itu juga semacam pengakuan bahwa metode kerja penelitian keamanan sudah berubah. Membangun 12 varian sshd dan melempar 17.600 login secara manual adalah pekerjaan berbulan-bulan. Dengan agen, itu jadi pekerjaan beberapa hari.

Soal OpenAI, saya tidak bisa menilai apakah angka 1.279 dolar per eksploit itu murah atau mahal, karena pembandingnya bukan harga pasar eksploit, tapi nilai kerusakan yang bisa ditimbulkan. Yang saya catat: mereka menyebut harga itu sebagai argumen untuk mempercepat penambalan, bukan untuk mempercepat penjualan.

Dan soal daftar awesome, saya termasuk orang yang dulu menghabiskan malam membaca awesome-python. Melihatnya sekarang jadi tempat pembuangan PR hasil generator, rasanya seperti melihat papan pengumuman di kantor yang penuh selebaran pinjaman online. Masih ada informasinya, tapi kamu harus menyaring jauh lebih banyak.

## 💬 Pertanyaan buat kalian

Kalau server Alpine kalian punya akun dengan field `*` dan password login masih aktif, kalian akan langsung upgrade hari ini, atau matikan password login sekalian dan pindah ke key?

## 🔗 Sumber

- [sshole — Özgün Kültekin](https://sshhole.com)
- [Diskusi Hacker News: Sshole (467 poin, 116 komentar)](https://news.ycombinator.com/item?id=50378228)
- [OpenSSH 10.6p2 release notes (2026-11-05)](https://www.openssh.org/releasenotes.html#10.6p2)
- [A thousand fewer paths to root — OpenAI](https://openai.com/index/a-thousand-fewer-paths-to-root/)
- [Diskusi Hacker News: OpenAI pipeline (420 poin, 306 komentar)](https://news.ycombinator.com/item?id=50372929)
- [Residential Proxies Detected on White House Network — Layer3 Intel](https://layer3intel.com/blog/residential-proxies-white-house-network)
- [Diskusi Hacker News: residential proxies (1.169 poin, 379 komentar)](https://news.ycombinator.com/item?id=50371246)
- [Awesome repositories are no longer awesome — Erik Gahner](https://erikgahner.github.io/posts/2026/awesome-repositories-are-no-longer-awesome/)
- [Diskusi Hacker News: awesome repositories (106 poin, 56 komentar)](https://news.ycombinator.com/item?id=50377821)
- [Baidu ERNIE 5.5 Flash Base — ERNIE Blog](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
