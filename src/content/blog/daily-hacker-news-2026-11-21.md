---
title: 'Daily Hacker News – 21 November 2026: kalkulator pajak terbuka dan celah GPGME'
description: 'Kode pajak Brasil dibuka, GPGME mendapat pembaruan keamanan, dan sebuah monitor menjadi petunjuk masalah jaringan.'
pubDate: 2026-11-21T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- Otoritas pajak Brasil membuka kode kalkulator pajak di GitHub dengan lisensi MIT.
- GnuPG merilis GPGME 2.3.1 untuk memperbaiki celah keamanan kritis; kemungkinan eksekusi kode jarak jauh belum bisa dikesampingkan.
- Penulis blog menemukan unduhan melambat ketika adaptor Ethernet dihubungkan lewat monitor, lalu menguji beberapa kemungkinan penyebab.
- Sebuah esai tentang coding berbantuan AI mengajak pengembang lebih teliti memeriksa keputusan arsitektur.

Angka poin dan komentar di bawah adalah potret ketika Hacker News diakses, bukan angka yang tetap. Cerita yang ramai belum tentu berlaku sama untuk semua pengguna; sumber aslinya tetap perlu dibaca.

## 🧮 Brasil membuka kode kalkulator pajaknya

**215 poin | 58 komentar saat diperiksa.** Receita Federal, otoritas pajak Brasil, mengumumkan publikasi kode sumber Calculadora de Tributos di repositori GitHub publik. Pengumuman itu menyebut lisensi MIT dan menyatakan bahwa ini adalah proyek perangkat lunak pertama yang secara resmi disediakan lembaga tersebut dalam lingkungan pengembangan kolaboratif publik.

Menurut lembaga itu, kalkulator menerapkan aturan perhitungan CBS dan pajak lain dalam reformasi pajak konsumsi Brasil. Perusahaan dan pengembang dapat mengintegrasikan logika tersebut ke sistem yang mereka gunakan. Lembaga itu menyebut adanya memori perhitungan dan dasar hukum yang terintegrasi sebagai bagian dari pendekatannya.

Ada nuansa yang mudah terlewat: kode kalkulator sudah tersedia untuk diunduh melalui Plataforma CBS sejak 2025. Yang baru dalam pengumuman ini adalah publikasi resmi di GitHub sebagai proyek terbuka, bukan klaim bahwa publik sama sekali belum pernah bisa memperoleh kodenya.

Tapi… ada tapinya. Kode terbuka membuat logika lebih mudah diperiksa, bukan otomatis menjamin setiap integrasi bebas kesalahan. Tim yang memakainya tetap perlu mengelola versi dan menguji penerapannya pada kebutuhan masing-masing. Receita Federal mengatakan keputusan resminya juga mencatat hash versi awal untuk membantu memeriksa autentisitas dan integritas kode.

[Sumber: Receita Federal](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria) · [Repositori reguler](https://github.com/ReceitaFederal/calculadora-rtc-regime-regular)

## 🔐 GPGME mendapat perbaikan keamanan

**96 poin | 27 komentar saat diperiksa.** Pengumuman resmi GnuPG menyebut sebuah kunci OpenPGP dengan identitas pengguna yang sangat panjang dan dibuat khusus dapat memicu masalah _double free_ pada GPGME. Menurut pengumuman itu, celah tersebut dapat dipakai untuk mengambil data dari aplikasi; kemungkinan serangan eksekusi kode jarak jauh juga tidak dapat dikesampingkan.

Pembedaan itu penting: pengumuman menyatakan kemungkinan RCE belum bisa dikesampingkan, bukan bahwa semua pengguna pasti sudah diserang. Masalahnya diidentifikasi sebagai **CVE-2026-129975**, dan proyek menyarankan pembaruan segera ke GPGME 2.3.1. Gpg4win 5.1.2 juga disebut membawa versi yang sudah diperbaiki.

Bagi pengembang, perhatikan apakah aplikasi memakai pustaka bersama atau menyertakannya secara statis. Pengumuman meminta perangkat lunak yang ditautkan secara statis dibangun ulang dengan versi yang diperbaiki. Jangan menganggap pembaruan satu aplikasi otomatis memperbarui semua salinan pustaka dalam lingkungan kamu.

[Sumber: pengumuman keamanan GnuPG](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html)

## 🖥️ Saat monitor ikut masuk daftar tersangka jaringan

**76 poin | 20 komentar saat diperiksa.** Oscar Molnar menulis pengalaman mendiagnosis unduhan yang turun ke sekitar 600 Mbps ketika adaptor Ethernet tersambung melalui monitor. Ketika adaptor yang sama dipasang langsung ke Mac, pengujian yang ia laporkan menunjukkan unduhan sekitar 2,2 Gbps.

Penulis mencoba driver lain dan pengaturan _flow control_; keduanya memperbaiki hasil dalam pengujiannya, meskipun dengan pertimbangan berbeda. Ia kemudian membandingkan adaptor lain dan menjelaskan hipotesisnya tentang jeda komunikasi USB, ukuran burst, serta buffer yang penuh. Pada konfigurasi yang ia uji, adaptor pengganti tidak menunjukkan frame yang hilang dalam tabel pengujiannya.

Pelajaran praktisnya bukan bahwa semua monitor merusak koneksi. Ini satu konfigurasi dan satu rangkaian pengujian. Jika kamu menemukan gejala serupa, membandingkan koneksi langsung dengan koneksi melalui hub adalah langkah diagnosis yang lebih berguna daripada langsung menyalahkan penyedia internet atau membeli perangkat baru.

[Sumber: Tymscar Blog](https://blog.tymscar.com/posts/studiodisplayethernet/)

## 🤖 Kode AI tetap perlu keputusan desain

**492 poin | 272 komentar saat diperiksa.** Dalam sebuah esai, Mani Doraisamy menceritakan masalah layar sambutan yang lambat dan mengaitkannya dengan proses pencatatan yang melibatkan beberapa panggilan API. Penulis berpendapat bahwa pengembang perlu menetapkan batas arsitektur dan meninjau konsekuensi performa saat mendelegasikan implementasi kepada alat coding AI.

Itu adalah pengalaman dan pendapat penulis, bukan bukti bahwa semua alat AI selalu membuat pilihan yang sama. Pertanyaan yang berguna tetap konkret: apa yang harus dikerjakan sebelum layar muncul, data apa yang benar-benar dibutuhkan, dan trade-off keamanan apa yang muncul jika pekerjaan dipindahkan ke belakang layar?

[Sumber: esai Mani Doraisamy](https://manidoraisamy.com/developer-to-architect.html)

## 💡 Insight hari ini

Transparansi kode, pembaruan keamanan, dan diagnosis jaringan sama-sama membutuhkan konteks. Akses ke sumber atau metrik adalah awal pemeriksaan, bukan pengganti pengujian di lingkungan yang sebenarnya.

## 🗣️ Pendapat saya

Saya paling tertarik pada kalkulator pajak terbuka: aturan yang bisa diperiksa bersama memberi pengembang titik awal yang jelas. Namun saya tetap ingin melihat pengujian dan mekanisme pembaruan yang mudah diikuti sebelum menjadikannya bagian penting dari sistem. Menurut kalian, proyek publik apa yang paling bermanfaat jika kode dan aturan kerjanya dibuka?

## 🔗 Sumber

- [Receita Federal — kalkulator pajak terbuka](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria)
- [GnuPG — advisory GPGME](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html)
- [Tymscar Blog — diagnosis jaringan](https://blog.tymscar.com/posts/studiodisplayethernet/)
- [Mani Doraisamy — pengembang dan arsitektur](https://manidoraisamy.com/developer-to-architect.html)
- [Hacker News — daftar utama](https://news.ycombinator.com/)
