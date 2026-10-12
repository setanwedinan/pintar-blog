---
title: '🧠 Daily Hacker News — 12 Oktober 2026: Dokumen Abramovich, QGIS Melarang Kontribusi AI, dan Total Annihilation Hidup Lagi'
description: 'Investigasi BBC Panorama dan Bureau of Investigative Journalism menemukan dokumen yang dipalsukan untuk menyembunyikan kekayaan Roman Abramovich. Di sisi lain, QGIS secara formal melarang kontribusi yang dibuat dengan AI, dan Total Annihilation dihidupkan kembali lewat engine open source berlisensi MIT.'
pubDate: 2026-10-12T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🧠 TL;DR

- **Deloitte** membantu memalsukan dokumen untuk menyembunyikan kekayaan **Roman Abramovich** — aset senilai **672 juta dolar** lenyap dari pembukuan perusahaannya (BBC Panorama & Bureau of Investigative Journalism; 421 poin, 133 komentar di HN).
- **QGIS** mengubah kebijakan AI-nya menjadi larangan tegas lewat **QEP428**, "No ai contributions permitted" (218 poin, 202 komentar).
- **Nanolathe** menghidupkan kembali **Total Annihilation** dengan engine RTS open source berlisensi **MIT** yang bisa dimainkan langsung di browser (581 poin).
- **Terence Tao** memaparkan **"Math 2.0"** di Caltech: era "kelangkaan bukti" dalam matematika sedang berakhir (443 poin, 451 komentar).
- **"Fingerprints are the new cookies"** menjelaskan bagaimana perangkat Anda dikenali tanpa cookie — dan kenapa menghapus cookie tidak lagi cukup (510 poin).

## 🔍 Deloitte, Dokumen Palsu, dan Aset yang Menghilang dari Pembukuan

Cerita dengan skor tertinggi di papan hari ini datang dari investigasi bersama **BBC Panorama** dan **Bureau of Investigative Journalism**: menurut laporan itu, firma akuntansi terbesar di dunia **membantu memalsukan dokumen** untuk menyembunyikan kekayaan **Roman Abramovich** dan menghindari pajak.

Angka yang paling konkret: **akun yang ditandatangani Deloitte di Siprus** membuat aset seperti superyacht, rumah mewah, dan jet pribadi senilai **672 juta dolar (508 juta poundsterling)** lenyap dari pembukuan perusahaan Abramovich. Deloitte juga disebut tampak menyarankan skema untuk menghindari tagihan pajak besar melalui pemalsuan dokumen.

Penilaian hukumnya keras. **Andrew Mitchell KC**, barrister yang ahli di bidang hukum jasa keuangan, mengatakan bukti Panorama menunjukkan skema itu adalah penghindaran pajak yang "straightforward" dan "it couldn't be more blatant".

Semua pihak yang disebut memberi bantahan. **Pengacara Abramovich** mengatakan ia membantah menggelapkan pajak atau menyembunyikan kekayaannya, dan bahwa Panorama tidak memberikan bukti ia mengetahui, mengizinkan, atau mengarahkan pemalsuan dokumen apa pun — dan bahwa bersandar pada nasihat profesional adalah hal yang sah. **Deloitte Siprus** mengatakan pihaknya "bertindak sesuai hukum yang berlaku", dan tidak bisa mengomentari tuduhan spesifik itu karena dokumennya berumur lebih dari 20 tahun dan sudah tidak bisa diakses lagi.

Konteksnya: bukti itu berasal dari kebocoran berisi ribuan dokumen keuangan Abramovich dan jaringan perusahaan offshore yang diadministrasikan dari **Siprus** antara **1995 dan 2022**. Aset yang hilang dari pembukuan antara lain **Chateau de la Croe** di Prancis selatan, **Fyning Hill** di Sussex, dan dua superyacht. Di **Jersey**, aset senilai **5,4 miliar poundsterling** masih dibekukan dan investigasi kriminal sudah berjalan **empat tahun**; pengacara Abramovich mengatakan ia membantah tuduhan dalam investigasi Jersey itu dan menyebutnya "undertaken for political purposes". _(BBC Panorama, Bureau of Investigative Journalism)_

## 🗺️ QGIS: Kontribusi Buatan AI Resmi Dilarang

Di sisi komunitas open source, papan hari ini ramai membahas langkah tegas proyek peta **QGIS**. Lewat pull request **#387** di repositori QGIS-Enhancement-Proposals, kontributor **Nyall Dawson** mengajukan **QEP428** dengan judul yang tidak menyisakan ruang tafsir: **"No ai contributions permitted"**.

Dalam deskripsi pull request-nya, Dawson menulis bahwa usulan ini "formally changes the AI policy to a strict 'NOT ALLOWED' policy", dengan diskusi lanjutan di milis pengembang QGIS. Usulan itu dibuka pada **24 September 2026** dan diberi label **Policy** serta **In Discussion**.

Reaksi komunitas terbelah: pull request itu mengumpulkan **36 reaksi 👍**, **5 👎**, **5 ❤️**, dan **3 👀** menurut halaman GitHub-nya. Bagi proyek yang hidup dari kontribusi sukarela, perdebatan ini menyentuh pertanyaan yang makin sering muncul: kalau sebuah patch ditulis AI, siapa yang benar-benar memahami dan bertanggung jawab atas kodenya? _(GitHub — QGIS-Enhancement-Proposals PR #387)_

## 🎮 Nanolathe: Total Annihilation, Engine Baru, Lisensi MIT

Cerita favorit kedua hari ini adalah kebangkitan game RTS klasik **Total Annihilation** lewat proyek bernama **Nanolathe**. Situsnya menyebut proyek ini sebagai "open-source 2.5D RTS engine" berlisensi **MIT** yang bisa dipelajari, dimodifikasi, dan dikembangkan siapa saja.

Yang menarik, Anda tidak butuh berkas game aslinya untuk mencoba. Ada **demo browser** berisi **tiga misi kampanye orisinal** yang berjalan di desktop Chrome, Edge, atau Safari — tanpa perlu memasang apa pun. Untuk kampanye penuh, skirmish, dan permainan online, Anda memasang beta natif di Windows, Mac, atau Linux dan memakai berkas Total Annihilation yang memang Anda miliki.

Sisi teknisnya juga dibuka lebar. Nanolathe menyediakan **renderer GPU modern** dengan pencahayaan dan efek glow sebagai pengalaman standar, plus opsi beralih ke **Classic CPU renderer** bergaya lama. Situsnya menampilkan perbandingan tangkapan layar yang diklaim memakai momen _tick_ dan kamera 2× yang sama, dengan kode engine tercatat pada **617540c5, 4 Oktober 2026**, dan menegaskan tanpa cropping, retouching, atau resampling. Multipemainnya memakai kode undangan: skirmish untuk **2 sampai 10 pemain**, survival **2 atau 3 pemain**, dan host memilih aturan **Modern**, **Community 3.9**, atau **Strict 3.1**. Kode engine-nya ada di GitHub pada **nanolathe-gg/nanolathe**. _(nanolathe.gg)_

## ➗ Terence Tao dan "Math 2.0": Ketika Kelangkaan Bukti Berakhir

Salah satu tautan dengan diskusi terpadat hari ini adalah slide kuliah **Terence Tao** berjudul **"Math 2.0"**, dipresentasikan di **Caltech** pada Oktober 2026. Tesis pembukanya langsung: kemunculan perangkat AI modern mengganggu banyak profesi mapan, dan bidang riset matematika — yang menurut Tao relatif stabil hampir seabad — terbukti "particularly susceptible to this type of disruption".

Kerangkanya sederhana tapi tajam. Matematika tradisional, yang ia sebut **"Math 1.0"**, beroperasi dengan asumsi **kelangkaan bukti** (_proof scarcity_). AI mengubah asumsi itu. Salah satu gagasan yang ia angkat adalah memakai AI untuk menemukan dan menyoroti prinsip, metode, atau wawasan **baru**, bukan sekadar bukti baru.

Ia juga menyebut **Maththon (13–15 November)**, sebuah acara yang dijalankan mahasiswa untuk memakai alat AI open source dalam mencari bukti baru atau perbaikan atas hasil-hasil lama yang buktinya belum memuaskan. Satu catatan kecil dari halaman itu sendiri: gambar dan diagram dalam presentasi tersebut dibuat dengan bantuan AI. _(Terence Tao — "Math 2.0", Caltech, Oktober 2026)_

## 🫆 "Fingerprints are the new cookies": Pelacakan yang Tidak Bisa Dihapus

Tautan populer lainnya di papan hari ini membahas sesuatu yang praktis untuk semua pembaca. Tulisan **"Fingerprints are the new cookies"** di `royfish.dev` menunjukkan demo hidup: halaman itu memberi Anda nama samaran berdasarkan hasil pembacaan sidik jari perangkat Anda — audio, GPU, WebGL, canvas, zona waktu, dan informasi perangkat keras.

Intinya begini: menghapus cookie, memakai mode incognito, atau menyalakan VPN tidak mengubah hasilnya secara otomatis. Penulisnya merinci teknik-teknik yang dipakai — mulai dari membaca parameter WebGL lewat `readPixels`, menggambar teks dan emoji ke canvas lalu membaca pikselnya kembali (anti-aliasing dan rendering font bergantung OS, GPU, dan font Anda), sampai membaca zona waktu lewat `Intl` yang tidak ikut berubah saat VPN mengganti alamat IP. Semua nilai itu lalu di-hash dengan **SHA-256**.

Penulis juga menyusun kronologi soal Google: janji menghapus cookie pihak ketiga pada 2019, lalu beralih ke **Privacy Sandbox**, dan akhirnya membuka penggunaan **device fingerprinting** di produk iklannya. Satu hal yang layak dicatat: seluruh kronologi ini disampaikan dari sudut pandang penulis artikel, bukan dari pernyataan resmi Google. _(royfish.dev)_

## 🧩 Juga di Papan Hari Ini

- **Type-safe HTML templating in Zig** — **Lukáš Lalinský** menulis soal pustaka templating Zig yang menuntut type-safety saat kompilasi, nol alokasi (langsung menulis ke `std.Io.Writer`), escaping default untuk mencegah XSS, tapi tetap terasa seperti menulis HTML. Inspirasinya ia sebut datang dari **Ziex** (pendekatan JSX di luar JavaScript) dan **Templ** untuk Go.
- **Show HN: PS2 games statically recompiled to WebAssembly** — proyek **snuri00/ps2-web-recomp** melakukan rekompilasi statis game PlayStation 2 ke WebAssembly dengan runtime natif, memakai renderer **WebGPU**. Catatan commit-nya menyebut adegan showroom **Gran Turismo 4** naik dari sekitar **3 ke sekitar 16 frame per detik**. Repo berlisensi MIT dan berumur 115 commit.
- **Citroen revives the 2CV for an electric age** — Citroen memperkenalkan ulang **2CV** sebagai mobil listrik kota bergaya retro di **Paris Motor Show**. Masih berstatus konsep, dengan target versi produksi di ruang pamer pada **2028** dan perkiraan harga sekitar **13.000 poundsterling**. Model aslinya diluncurkan **1948**.

## 💡 Insight Hari Ini

Kalau dibaca berdampingan, tiga tautan teratas papan hari ini sebenarnya berbicara soal hal yang sama dari tiga arah berbeda: **siapa yang bertanggung jawab atas sesuatu yang tidak sepenuhnya dipahami manusia.**

BBC menemukan pemalsuan dokumen yang ditandatangani sebuah firma akuntansi besar — tanggung jawab profesional yang dipertanyakan. Komunitas QGIS memilih melarang kontribusi AI karena sulit memastikan penulisnya benar-benar memahami kodenya. Dan penulis `royfish.dev` menunjukkan bahwa data yang mengidentifikasi Anda bisa dirakit tanpa izin, dari karakteristik perangkat yang tidak pernah Anda pilih untuk bagikan.

Di ketiganya, alatnya canggih, tapi pertanyaan yang tersisa justru pertanyaan lama: **siapa yang menandatangani, dan apa yang ia pahami saat menandatanganinya?**

## 🔗 Sumber

- [BBC Panorama & Bureau of Investigative Journalism — Documents falsified to evade tax on Abramovich's wealth, BBC finds](https://www.bbc.com/news/articles/c64g1l5389kvo)
- [GitHub — QGIS-Enhancement-Proposals PR #387: Add QEP428: No ai contributions permitted](https://github.com/qgis/QGIS-Enhancement-Proposals/pull/387)
- [Nanolathe — Total Annihilation, rebuilt for modern computers](https://nanolathe.gg) · [Engine di GitHub](https://github.com/nanolathe-gg/nanolathe)
- [Terence Tao — Math 2.0 (slide, Caltech, Oktober 2026)](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf)
- [royfish.dev — Fingerprints are the new cookies](https://royfish.dev/fingerprints-are-the-new-cookies)
- [Lukáš Lalinský — Type-safe HTML templating in Zig (11 Oktober 2026)](https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html)
- [GitHub — snuri00/ps2-web-recomp](https://github.com/snuri00/ps2-web-recomp)
- [BBC — Citroen revives the 2CV for an electric age](https://www.bbc.co.uk/news/articles/c620r33plgppo)
- [Hacker News — papan depan, 12 Oktober 2026](https://news.ycombinator.com/)
