---
title: 'Ghostty 1.4, git untuk undang-undang Amerika, dan sertifikat yang masih dipercaya macOS'
description: 'Rangkuman Hacker News 28 Oktober 2026: Ghostty 1.4.0 keluar setelah tujuh bulan kerja dengan 2.889 commit dan kompresi scrollback yang memangkas memori fisik 70 sampai 90 persen, CVE-2026-97631 di firmware UEFI EDK II berbobot 9,5 dari 10 terpublikasi lebih awal dari jadwal, git bawaan macOS masih mempercayai sertifikat eMudhra yang dikompromikan meski macOS 27.2 sudah rilis, dan Raspberry Pi Zero 3 W muncul di device tree kernel dengan chip BCM2711.'
pubDate: 2026-10-28T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- **Ghostty 1.4.0** keluar 27 Oktober 2026: tujuh bulan kerja, 172 kontributor, 2.889 commit, dan kompresi scrollback yang memotong memori fisik 70–90 persen untuk teks biasa. _(Ghostty)_
- **CVE-2026-97631** di komponen ICMP firmware UEFI EDK II dinilai 9,5 dari 10 — dan patch-nya terpublikasi sebulan lebih awal dari jadwal karena satu pull request. _(Ars Technica)_
- **git, curl, dan python3 bawaan macOS** masih mempercayai sertifikat eMudhra yang sudah dikompromikan per 28 Oktober, dan macOS 27.2 justru membatalkan workaround manual. _(we-have-a-problem.com)_
- **Tailscale** menerbitkan empat buletin keamanan untuk Tailscale SSH, sebagian besar soal eskalasi hak akses. _(Tailscale)_
- **Raspberry Pi Zero 3 W** muncul di device tree kernel Raspberry Pi dengan chip BCM2711 — prosesor yang sama dengan Raspberry Pi 4. _(bret.dk)_

## 🖥️ Ghostty 1.4: tujuh bulan kerja, dan angka yang bisa dicek

Rilis 1.4.0 tanggal 27 Oktober itu bukan update kecil. Catatan rilisnya menyebut tujuh bulan kerja, 172 kontributor, dan 2.889 commit. Tim Ghostty menulis sendiri seluruh changelog-nya dan mengaku butuh 16 jam lebih untuk menyusunnya.

Bagian yang paling banyak dibahas di Hacker News — **1.156 poin dan 366 komentar** — adalah memori. Ghostty 1.4 menambahkan kompresi scrollback yang menurunkan pemakaian memori **fisik** (resident), bukan memori virtual, sebesar **70 sampai 90 persen** untuk teks biasa. Fitur ini tersedia di macOS dan Linux 64-bit.

Efeknya kelihatan di angka lain: terminal kosong sekarang memakai sekitar **16 KiB** memori halaman, dan di macOS dengan satu tab terlihat plus 20 tab tersembunyi, memori GPU turun dari sekitar **385 MiB ke 18 MiB** karena tab tersembunyi melepas resource GPU-nya.

Kecepatan juga ikut naik. Throughput I/O di macOS naik **25 sampai 55 persen** karena pembacaan dari pty dipindah ke thread sendiri. Parsing teks biasa sampai **6x lebih cepat**, dataset asciinema 2,6 GB diproses sekitar 25 persen lebih cepat, dan di macOS waktu dari launch sampai jendela terlihat sekitar **15 persen lebih cepat** dengan frame pertama 27 persen lebih cepat.

Satu hal yang layak dicatat: implementasi Kitty graphics di Ghostty sekarang 100 persen lengkap, termasuk animasi dan _relative placements_ — menurut catatan rilis, Ghostty jadi terminal non-Kitty pertama yang melakukannya. Payload gambar diparsing secara bulk dan menurut benchmark internal mereka sekitar **16x lebih cepat** untuk 64 MiB data gambar.

Yang ngga kalah penting: rilis ini membawa **enam security advisory** sekaligus. Salah satunya soal paste protection yang tidak memperlakukan carriage return sebagai akhir baris, sehingga paste bisa menjalankan perintah tanpa konfirmasi di program yang tidak memakai _bracketed paste_. Dua lainnya soal tmux control mode yang bisa membuat Ghostty crash dan menutup semua jendela — dan itu berlaku untuk versi 1.3.0 serta 1.3.1.

## 🩹 CVE-2026-97631: patch UEFI yang keluar sebelum jadwal

Ini yang paling bikin tidak nyaman. Kerentanannya ada di TianoCore **EDK II**, basis kode open source yang dipakai hampir semua vendor server dan penyedia cloud untuk membangun firmware UEFI. Skornya **9,5 dari 10**.

CVE-2026-97631 adalah _memory corruption_ di komponen ICMP. Karena jalan sebelum sistem operasi, penyerang bisa mengeksekusi kode sebelum Secure Boot dan TPM sempat memasang rantai kepercayaan. Payload akhirnya tidak persisten, tapi cukup jadi pintu masuk untuk memasang payload lain yang ikut jalan setiap boot.

Penemunya **Alex Matrosov dari Anthropic dan Dan Holmes dari Google**, dan keduanya sudah mengatur pengungkapan terkoordinasi untuk Januari. Rencana itu buyar karena AMI mempublikasikan pull request di repositori tianocore/edk2 bulan lalu yang memuat detail kerentanan beserta perbaikannya. Setelah itu Project TianoCore menerbitkan advisory publik GHSA-99cj-7hg9-mp4m pekan lalu.

Yang bikin repot: AMI, Insyde, dan Phoenix memakai kode referensi ini secara luas, dan Project Mu — fork EDK2 versi Microsoft — juga memakai komponen yang rentan. Menambal firmware UEFI di jutaan perangkat bukan pekerjaan semalam.

## 🔐 Git di macOS masih percaya sertifikat eMudhra yang sudah kompromi

Situs pelacak komunitas `we-have-a-problem.com` menulis pada 28 Oktober bahwa Apple sudah diberi tahu soal insiden eMudhra sejak **17 Oktober**, tapi sampai tulisan itu terbit, alat pengembangan bawaan macOS — termasuk **git, curl, dan python3** — masih mempercayai sertifikat yang dikompromikan.

Lebih jauh: **macOS 27.2 yang rilis 26 Oktober tidak memperbaiki masalah ini**, malah membatalkan workaround yang dipasang pengguna secara manual. Sementara itu puluhan proyek lain, banyak di antaranya dijalankan relawan, sudah mengirim perbaikan beberapa hari sebelumnya.

Kenapa serius? Untuk git, artinya clone dan pull dari remote `https://` bisa mengantar kode pilihan penyerang, push bisa diubah di jalan, dan token GitHub kamu bisa disadap. Kamu bisa menguji sendiri dengan `git ls-remote https://git-emudhra.we-have-a-problem.com/check.git` — kalau muncul error sertifikat, git kamu aman. Kalau perintah itu malah menampilkan commit, artinya koneksimu bisa dicegat.

Apple sebenarnya sudah melindungi Safari dan aplikasi lain yang dibangun di atas framework networking mereka. Yang belum: alat CLI. Saran di situs itu, Apple perlu menghapus root yang terdampak dari `/etc/ssl/cert.pem`. Sampai itu terjadi, workaround manual harus diulang setiap kali macOS di-update, karena panduan Apple sendiri menyebut update bisa mengembalikan sertifikat yang sudah dihapus.

## 🐧 Tailscale SSH: eskalasi hak akses, dan mitigasi sementara

Tailscale memperbarui halaman investigasinya pada 27 Oktober. Sebagian besar masalah yang mereka temukan soal **privilege escalation**: dalam kondisi tertentu, orang yang sudah diizinkan terhubung lewat Tailscale SSH bisa melakukan aksi di luar izin user lokal yang dikonfigurasi, termasuk berpotensi mendapat hak akses lebih tinggi.

Empat buletin keamanan sudah terbit — TS-2026-014 sampai TS-2026-017 — plus satu pos blog yang menjelaskan temuan dan perbaikannya. Tailscale menyebut perbaikan untuk sebagian besar isu sudah diimplementasikan dan sedang menyelesaikan pengujian, dengan target rilis akhir Selasa 27 Oktober.

Yang perlu digarisbawahi: mereka **tidak** menyarankan semua orang mematikan Tailscale SSH. Mitigasi sementara yang disarankan adalah menyetel `TS_SSH_DISABLE_FORWARDING=1` di environment layanan tailscaled lalu restart — ini mematikan SSH forwarding tanpa mematikan Tailscale SSH, dan meredam beberapa temuan paling serius. Selain itu, perketat kebijakan akses dan batasi ke user serta perangkat yang benar-benar butuh.

## 📜 Git untuk undang-undang Amerika, dan kenapa itu lebih sulit dari kelihatannya

Seorang programmer bisa menunjuk satu baris kode dan melihat siapa yang menulisnya, kapan, dan seperti apa file itu di hari mana pun. Seorang pengacara yang membaca statuta federal biasanya tidak bisa, kecuali setelah satu sore penuh membaca catatan kaki.

Tulisan di Lexifina mencoba menjelaskan kenapa masalah itu bukan sekadar soal kenyamanan. Di luar judul-judul yang disahkan Kongres sebagai _positive law_, US Code hanya bukti _prima facie_ — kalau berbeda dengan Statutes at Large, yang berlaku adalah Statutes at Large. Kantor Law Revision Counsel menerbitkannya sebagai serangkaian _release point_, dan mengubah susunannya terus-menerus.

Contoh yang dipakai: definisi _small business debtor_ di 11 USC § 1182(1). Batasnya dibuat 2019, dinaikkan CARES Act ke 7,5 juta dolar pada Maret 2020 sebagai langkah sementara, diperpanjang sampai Maret 2022, sempat habis, lalu dipulihkan Kongres pada 21 Juni 2022 untuk dua tahun lagi — dengan jangkauan mundur ke perkara yang mulai 27 Maret 2020. Batas tinggi itu berakhir lagi Juni 2024, dan setelah penyesuaian trienial April 2025 angkanya jadi **3.424.000 dolar**.

Artinya untuk perkara yang diajukan Mei 2022, release point yang dicetak saat itu memberi batas yang lebih rendah, dan hanya undang-undang berikutnya yang mengubah jawabannya. Riwayat yang berguna bagi pengacara harus membawa teks, tanggal berlakunya tiap perubahan, dan cakupan undang-undang yang menjangkau mundur.

Ini makin penting karena riset hukum sekarang lewat model bahasa. Studi dari Technical University of Munich tahun ini menemukan model menerapkan aturan yang sudah digantikan setelah batas latihannya, dan lebih memilih ketentuan baru meski yang lama yang mengatur faktanya. Satu model menjawab benar 24 persen pertanyaan pasca-cutoff saat berdiri sendiri, dan **87 persen** ketika teks statuta yang relevan disodorkan kepadanya.

## 🍓 Raspberry Pi Zero 3 W muncul di device tree

Di kernel tree Raspberry Pi muncul device tree untuk **Raspberry Pi Zero 3 W** dan **Raspberry Pi 4 Model A**. Belum ada pengumuman resmi, tapi device tree biasanya sudah membocorkan banyak hal.

Yang paling menonjol: Zero 3 W memakai **Broadcom BCM2711**, chip quad-core Cortex-A72 yang sama dengan Raspberry Pi 4. Itu menggantikan RP3A0 quad-core 1 GHz Cortex-A53 di Zero 2 W — dan Zero 2 W sendiri meluncur hampir tepat lima tahun lalu.

Beberapa detail lain dari pembacaan Bret: pengendali penyimpanan dikonfigurasi dengan bus 8-bit dan komentar yang menyebut "eMMC/SD card", meski eMMC di Zero kemungkinan besar tidak jadi dipakai karena akan menaikkan harga. Ada juga jejak **SPI flash bootloader**, yang berarti Zero 3 W kemungkinan mendapat bootloader berbasis EEPROM seperti Pi 4, sesuatu yang tidak dimiliki Zero 2 W. Lalu tombol daya di GPIO 46 yang dipetakan ke KEY_POWER, satu output HDMI dengan pengendali kedua dimatikan permanen, dan tata letak GPIO 40-pin standar.

## Tapi… ada tapinya

Semua angka Ghostty di atas datang dari benchmark tim Ghostty sendiri. Belum ada pengujian independen yang mengukur hal yang sama di mesin biasa, dan "70 sampai 90 persen" itu untuk teks biasa — bukan untuk output berwarna atau penuh gambar.

Untuk UEFI, yang bikin gelisah justru sifat pengungkapannya. Patch sudah publik sejak bulan lalu, advisory baru keluar pekan lalu, dan jadwal resminya Januari. Artinya jendela antara "bisa dipelajari" dan "bisa ditambal di lapangan" sangat lebar, dan firmware bukan komponen yang bisa di-patch lewat satu klik update.

Dan soal eMudhra: ini bukan kasus Apple tidak tahu. Mereka tahu sejak 17 Oktober, dan yang dilindungi baru Safari. Alat yang justru dipakai developer untuk menarik kode dari internet masih terbuka.

## 🗣️ Pendapat saya

Yang paling saya pikirkan dari daftar hari ini bukan angka Ghostty, tapi urusan sertifikat di macOS. Ghostty yang lebih cepat itu menyenangkan, tapi git yang masih percaya sertifikat bocor adalah hal yang bisa merusak semuanya tanpa gejala.

Saya juga ngga bisa bilang saya paham penuh soal CVE-2026-97631. Firmware UEFI itu lapisan yang jarang saya sentuh, dan justru karena itu saya percaya penilaian 9,5 dari peneliti yang menemukannya. Yang saya tahu: kalau patch-nya sudah bisa dibaca publik sementara jadwal resminya masih Januari, satu-satunya yang bisa dilakukan orang biasa adalah berharap vendor cepat.

Untuk Ghostty, saya termasuk yang gampang tergoda angka. Tapi 385 MiB jadi 18 MiB untuk tab tersembunyi itu bukan angka marketing — itu bisa diverifikasi sendiri di Activity Monitor.

Dan soal git untuk undang-undang, saya iri. Bukan karena saya butuh membaca statuta Amerika, tapi karena bayangan punya `git blame` untuk setiap kalimat hukum di negara ini terdengar seperti sesuatu yang seharusnya sudah ada sejak lama.

Kalian sendiri, kalau ada alat baru dengan klaim "6x lebih cepat", langsung pindah atau tunggu pengujian orang lain dulu?

## 🔗 Sumber

- [Ghostty 1.4.0 Release Notes](https://ghostty.org/docs/install/release-notes/1-4-0)
- [Ghostty 1.4 di Hacker News (1.156 poin, 366 komentar)](https://news.ycombinator.com/item?id=50261998)
- [Code-execution flaw in UEFI firmware affects most servers on planet Earth — Ars Technica](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)
- [TianoCore EDK2 security advisory GHSA-99cj-7hg9-mp4m](https://github.com/tianocore/edk2/security/advisories/GHSA-99cj-7hg9-mp4m)
- [Apple git still trusts the compromised eMudhra certificates](https://emudhra.we-have-a-problem.com/apple.html)
- [About the compromised eMudhra intermediate CAs — Apple Support](https://support.apple.com/en-us/149555)
- [Tailscale SSH: Investigation and remediation update](https://tailscale.com/ssh-investigation-update)
- [Git for the US Code — Lexifina](https://lexifina.com/blog/git-for-the-us-code)
- [Raspberry Pi Zero 3 W and Pi 4 Model A on the Way? — bret.dk](https://bret.dk/raspberry-pi-zero-3-w-pi-4-model-a/)
