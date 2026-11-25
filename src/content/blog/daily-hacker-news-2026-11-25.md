---
title: 'Daily Hacker News — 25 November 2026: Audio Windows di PipeWire dan ponsel lawas online lagi'
description: 'Dari perataan volume di PipeWire sampai eksperimen Bluetooth dan model pembuat tulisan tangan.'
pubDate: 2026-11-25T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- **pw-loudness-eq** membawa pendekatan Loudness Equalization Windows ke PipeWire.
- Ponsel Java lawas bisa kembali online lewat Bluetooth, dengan syarat perangkat mendukung profil jaringan yang dibutuhkan.
- Button Sounds menawarkan pustaka bunyi tombol, sementara PenGPT mengeksplorasi tulisan tangan dan gambar dari model generatif.
- Riset kanal samping menunjukkan bahwa isolasi langsung antarmodel belum tentu menutup semua jalur komunikasi dalam lingkungan eksperimen tertentu.

Angka poin dan komentar di bawah adalah potret Hacker News saat halaman dibaca, bukan angka yang akan selalu sama.

## 🔊 Meratakan suara aplikasi di PipeWire

**120 poin | 64 komentar** saat pengecekan. Proyek [pw-loudness-eq](https://github.com/xoxorwr/pw-loudness-eq) menyebut dirinya sebagai implementasi Loudness Equalization Windows yang direkayasa balik untuk PipeWire. Tujuannya membuat bagian audio yang pelan dan keras terdengar lebih seimbang pada setiap aplikasi.

Penjelasan proyek menyebut dua komponen utama: modul yang memproses aliran audio aplikasi dan limiter pada keluaran untuk membantu mencegah clipping. Ada pula jendela opsional untuk mengaktifkan atau menonaktifkan efek secara global maupun per aplikasi, serta mengatur waktu pelepasan efek.

**Tapi… ada tapinya:** ini bukan pengaturan nada atau equalizer frekuensi biasa. Dokumentasinya menjelaskan bahwa algoritmenya mengatur penguatan berdasarkan kenyaringan. Tidak semua aliran diproses: proyek menyebut klien JACK, aliran lebih dari delapan kanal, dan aplikasi Flatpak yang memakai PipeWire secara langsung sebagai pengecualian. Kebutuhannya juga mencakup PipeWire versi 1.4 atau lebih baru.

Buat kamu yang ingin mencoba, baca dahulu dokumentasi dan syaratnya. Mengubah pemrosesan audio sistem bukan hal yang perlu dilakukan hanya karena proyeknya ramai dibahas.

[Sumber proyek](https://github.com/xoxorwr/pw-loudness-eq) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50641171)

## 📱 Ponsel Java kembali berselancar lewat Bluetooth

**95 poin | 43 komentar** saat pengecekan. Dalam [catatan eksperimennya](https://antcating.github.io/2026/11/23/getting-old-java-phones-online-again.html), penulis mencoba menghubungkan Sony Ericsson S500i ke internet setelah jaringan seluler 2G di tempatnya tidak lagi tersedia.

Solusinya memakai Bluetooth Personal Area Networking. Komputer yang terhubung internet bertindak sebagai titik akses jaringan, sedangkan ponsel menjadi pengguna jaringan Bluetooth. Penulis memakai Raspberry Pi 5 dengan BlueZ dan NetworkManager, lalu menguji koneksi menggunakan situs yang sederhana.

Bagian pentingnya bukan sekadar memasangkan perangkat: ponsel juga perlu mendukung profil PANU dan memiliki pengaturan koneksi yang sesuai. Nama menu dan perilaku setiap model bisa berbeda. Jadi, keberhasilan pada S500i tidak otomatis berarti semua ponsel lama bisa mengikuti langkah yang sama.

Penulis juga mencatat adanya panduan versi Windows. Meski begitu, koneksi internet yang berhasil tidak menjamin semua situs modern akan tampil dengan baik di browser lawas. Ini lebih cocok dilihat sebagai eksperimen perangkat lama daripada pengganti ponsel harian.

[Sumber eksperimen](https://antcating.github.io/2026/11/23/getting-old-java-phones-online-again.html) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50627726)

## 🎛️ Bunyi tombol yang tidak selalu sama

**547 poin | 81 komentar** saat pengecekan. [Button Sounds](https://buttons.joshwcomeau.com/) menyediakan lebih dari 50 suara tombol dan paket npm untuk memasangnya pada proyek web. Setiap suara memiliki beberapa sampel rekaman; pemilihan sampel secara acak saat tombol ditekan dan dilepas membuat pengulangan tidak selalu identik.

Halaman proyek menyediakan playground untuk mencoba pilihan suara. Dokumentasinya juga menunjukkan API JavaScript dan integrasi React, serta opsi menampung berkas audio sendiri. Menurut pembuatnya, browser tertentu dapat memblokir pemutaran audio sehingga hasil percobaan bisa berbeda antarperangkat.

Bagi pembuat antarmuka, bunyi bisa menjadi umpan balik tambahan. Namun, jangan jadikan suara satu-satunya tanda bahwa tombol berhasil ditekan: pengguna juga membutuhkan petunjuk visual yang jelas, dan sebaiknya punya pilihan untuk mematikannya.

[Sumber proyek](https://buttons.joshwcomeau.com/) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50638032)

## ✍️ PenGPT belajar bentuk goresan

**310 poin | 52 komentar** saat pengecekan. [PenGPT](https://greydanus.github.io/2026/11/12/pengpt/) adalah eksperimen model transformer untuk menghasilkan tulisan tangan dan sketsa. Penulis menjelaskan adanya dua model: satu untuk tulisan tangan, termasuk meniru gaya dari beberapa kata contoh, dan satu lagi untuk menggambar berdasarkan prompt teks.

Alih-alih hanya menghasilkan gambar datar, proyek ini merepresentasikan gerakan pena sebagai rangkaian arah serta kondisi pena menyentuh atau terangkat. Artikel proyek menyertakan demo, kode, bobot model, dan makalah untuk pembaca yang ingin mendalami metode dan batasannya.

Contoh visual bukan bukti bahwa setiap hasil akan rapi. Penulis secara terbuka menyebut sebagian gambar awal dipilih dari hasil terbaik, sementara contoh tanpa pemilihan juga tersedia lebih jauh di artikelnya. Itu pembeda penting ketika menilai demo generatif.

[Sumber proyek](https://greydanus.github.io/2026/11/12/pengpt/) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50637056)

## 🧪 Kanal samping pada server inferensi

**312 poin | 134 komentar** saat pengecekan. Sebuah [tulisan riset](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) menjelaskan eksperimen dua agen yang berbagi server inferensi, tetapi tidak dapat berkirim pesan langsung atau mengakses filesystem bersama. Peneliti menunjukkan protokol yang memanfaatkan pengaruh halus pada komputasi bersama sebagai kanal samping.

Penulis juga menegaskan keterbatasannya: pengaturan awal dibuat khusus, protokol diberikan kepada model, dan model dilatih untuk mendeteksi sinyal. Karena itu, hasil tersebut tidak boleh diterjemahkan menjadi klaim bahwa semua model atau semua sistem yang terisolasi otomatis dapat berkomunikasi. Nilainya justru sebagai pengingat untuk menguji asumsi isolasi pada infrastruktur yang dipakai bersama.

[Sumber riset](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) · [Diskusi Hacker News](https://news.ycombinator.com/item?id=50637686)

## 💡 Insight hari ini

Dari audio sampai keamanan model, detail implementasi sering menentukan hasil. Nama fitur saja belum cukup: periksa aliran mana yang diproses, perangkat mana yang kompatibel, dan kondisi apa yang dipakai dalam sebuah eksperimen.

## 🗣️ Pendapat saya

Saya paling tertarik pada proyek audio dan ponsel lawas karena keduanya mengubah masalah praktis menjadi dokumentasi yang bisa dipelajari orang lain. Eksperimen kanal samping juga berguna, asalkan keterbatasan pengujiannya tidak hilang ketika hasilnya dibagikan. Untuk bunyi antarmuka, saya lebih memilih kontrol yang bisa dimatikan daripada efek yang selalu aktif.

Kalau kalian ingin mencoba salah satunya, proyek mana yang paling menarik?

## 🔗 Sumber

- [Hacker News](https://news.ycombinator.com/)
- [pw-loudness-eq](https://github.com/xoxorwr/pw-loudness-eq)
- [Getting old Java phones online again](https://antcating.github.io/2026/11/23/getting-old-java-phones-online-again.html)
- [Button Sounds](https://buttons.joshwcomeau.com/)
- [PenGPT](https://greydanus.github.io/2026/11/12/pengpt/)
- [Riset kanal samping pada server inferensi](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being)
