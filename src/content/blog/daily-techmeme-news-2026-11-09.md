---
title: 'Google bikin empat TPU dalam setahun, dan Coinbase resmi jadi bank trust federal'
description: 'Google menambah TPU 8tx untuk inferensi rahasia dan TPU 8i Max berpaket dua chip untuk konteks jutaan token, keduanya menyusul 8t dan 8i yang rilis April. Di hari yang sama Coinbase naik dari izin bersyarat ke charter trust penuh dari OCC, dan saham Nvidia turun sekitar 5 persen pra-pasar setelah board membuka investigasi.'
pubDate: 2026-11-09T13:10:00Z
tags: ['Daily Update', 'TechMeme']
---

## 🔍 TL;DR

- Google memperluas portofolio TPU generasi kedelapan dengan **TPU 8tx** untuk inferensi rahasia dan **TPU 8i Max** untuk konteks besar, jadi empat sistem TPU dalam satu tahun. _(Google, Bloomberg via TechMeme)_
- TPU 8tx memakai silikon yang sama dengan 8t dan dipasangkan CPU host **AMD EPYC generasi kelima**, klaim latensi sampai 2x lebih rendah dari 8t. _(Google)_
- TPU 8i Max menggabungkan dua chip 8i dalam satu paket: compute, SRAM, dan bandwidth HBM dua kali lipat, dengan jejak rak yang sama. _(Google)_
- OCC memberi Coinbase charter trust penuh, naik dari persetujuan bersyarat April 2026. Ripple sudah lebih dulu, dan Coinbase menyusul Circle. _(CoinDesk)_
- Saham Nvidia turun sekitar **5 persen** pra-pasar setelah board membuka investigasi soal apakah Jensen Huang jadi target operasi intelijen asing. _(Financial Times via TechMeme)_

## ⚙️ Empat TPU dalam setahun, dan alasan di baliknya

Google merilis dua sistem TPU baru hari ini, dan cara mereka menjelaskan pembagiannya cukup jujur: yang diumumkan bukan chip baru, melainkan sistem baru. Perbedaannya penting, karena chip butuh bertahun-tahun dan terikat hukum fisika, sementara sistem soal bagaimana compute, jaringan, dan storage dirakit di sekitar chip.

Hasilnya empat varian dalam satu generasi. **TPU 8t** untuk training skala besar, **TPU 8i** untuk reasoning berlatensi rendah, lalu dua yang baru: **TPU 8tx** untuk inferensi aman dan **TPU 8i Max** untuk jendela konteks raksasa.

TPU 8tx adalah yang paling menarik dari sisi korporat. Ia dibangun di atas silikon yang sama dengan 8t, dipasangkan dengan CPU host AMD EPYC generasi kelima, dan memindahkan perlindungan data ke lapisan hardware. Biasanya data terenkripsi saat disimpan dan dikirim, lalu terbuka di memori saat diproses. 8tx menjaga data dan bobot model tetap terlindungi bahkan saat sedang aktif dipakai. Google mengklaim latensi sampai 2x lebih rendah dibanding 8t dengan penalti performa mendekati nol, dan menyebut sistem ini juga bisa dipakai untuk fine-tuning serta reinforcement learning tanpa memindahkan data sensitif antar klaster.

TPU 8i Max menyerang masalah berbeda: memory wall. Dua chip 8i digabung dalam satu paket, jadi compute, SRAM, dan bandwidth HBM-nya dua kali lipat, sementara jumlah silikon per rak tetap dua kali lebih padat. Untuk agen yang bekerja lintas basis kode atau video berjam-jam, ini soal apakah prosesor berhenti menunggu data atau tidak.

Yang paling relevan buat developer Indonesia mungkin bukan angka chipnya, tapi pengumuman pendampingnya. TorchTPU sudah open source, jadi kode PyTorch dan model Hugging Face bisa jalan native di TPU, ditambah backend untuk vLLM dan SGLang. Ada juga TPU Sync yang di-open-source-kan untuk mengelola KV cache lintas HBM, DRAM, dan storage. Google menyebut portofolio TPU-nya kini punya hampir 100 pelanggan, dan sistem baru ini menyusul 8t dan 8i yang diumumkan April lalu di Google Cloud Next. ([Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/), [Bloomberg via TechMeme](https://www.techmeme.com/261109/p22))

## 🏦 Coinbase naik kelas di mata regulator

Kabar yang lebih tidak ramai tapi dampaknya panjang: Office of the Comptroller of the Currency (OCC) menaikkan status trust Coinbase dari bersyarat menjadi charter penuh.

Coinbase National Trust mendapat persetujuan sementara pada April 2026, yang sudah membolehkan layanan kustodi dan pembayaran teregulasi federal, tapi belum sebagai bank penuh yang menerima deposito dan memberi pinjaman. Setelah beberapa bulan membangun sistem kepatuhan dan merekrut personel, OCC menandatangani charter penuhnya.

Konteksnya adalah GENIUS Act, yang membuka jalan bagi trust federal untuk menerbitkan stablecoin yang patuh aturan. OCC di bawah pemerintahan Trump memang menerima perusahaan kripto, termasuk memberi status bersyarat ke World Liberty Financial pada Agustus, dan memberi Ripple charter penuh bulan lalu. Coinbase kini menyusul Circle dan Ripple di jalur yang sama.

Ryan VanGrack, vice chairman Coinbase, menyebut persetujuan ini sebagai langkah mengintegrasikan aset digital ke infrastruktur keuangan Amerika. Yang perlu dicatat dari pemberitaan CoinDesk: charter trust bukan izin bank umum. Coinbase tidak akan menerima deposito ritel atau menyalurkan kredit seperti bank biasa. Yang ia dapat adalah paying standar federal untuk kustodi institusional, dan sumber menyebut ini bisa memperluas bisnis stablecoin. ([CoinDesk](https://www.coindesk.com/policy/2026/11/09/coinbase-gets-full-u-s-trust-charter-from-federal-banking-regulator), [Coinbase](https://www.coinbase.com/en-gb/blog/coinbase-launches-national-trust-company-with-federally-regulated-institutional-grade-custody-offering))

## 📉 Nvidia, dan biaya dari satu pengakuan

Saham Nvidia turun sekitar 5 persen pra-pasar setelah board perusahaan membuka investigasi soal apakah CEO Jensen Huang menjadi target operasi intelijen asing. Board menyatakan tidak punya alasan meyakini ada rahasia perusahaan yang bocor, tapi investigasi tetap berjalan.

Yang membuat ini bukan sekadar berita selebriti korporat adalah struktur kendali perusahaan. New York Times melaporkan Huang memegang 3,56 persen saham dan mengelola lebih dari 60 laporan langsung, sementara board-nya berjumlah 10 orang. Ketika kendali sebesar itu bertemu investigasi internal, pertanyaannya bergeser dari "apa yang terjadi" ke "siapa yang bisa memeriksa".

Bloomberg juga memuat profil Alice Huang, mantan jurnalis televisi yang mendirikan Megaspeed pada 2023 dan disebut sebagai tersangka mata-mata Tiongkok, dengan impor Nvidia lewat Megaspeed melewati 4,6 miliar dolar. Perlu ditegaskan: status "tersangka" dan angka impor itu berasal dari pemberitaan, bukan putusan pengadilan.

Efek sampingnya sudah kelihatan di agenda. Madison Huang, senior director Nvidia yang juga anak Jensen Huang, membatalkan penampilan di Seoul dengan alasan urusan keluarga. Dan karena Huang selama ini vokal soal kebijakan ekspor chip, kredibilitas lobinya kini ikut dipertanyakan sejumlah analis. ([Financial Times via TechMeme](https://www.techmeme.com/261109/p11), [Bloomberg via TechMeme](https://www.techmeme.com/261109/p18), [New York Times via TechMeme](https://www.techmeme.com/261109/p13))

## 💬 Pertanyaan buat kalian

Kalau TPU 8tx memang bisa menjaga bobot model tetap terenkripsi saat aktif dipakai, siapa yang paling butuh: rumah sakit dengan data pasien, bank dengan model risiko, atau pemerintah dengan model frontier sendiri? Dan soal Coinbase: charter trust tanpa izin menerima deposito itu cukup untuk membuat institusi besar memindahkan kustodi mereka, atau tetap kurang satu langkah?

## 🔗 Sumber

- [Our newest TPUs: 8tx and 8i Max · Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/)
- [Google escalates Nvidia rivalry with new TPU systems · Bloomberg via TechMeme](https://www.techmeme.com/261109/p22)
- [Coinbase gets full U.S. trust charter · CoinDesk](https://www.coindesk.com/policy/2026/11/09/coinbase-gets-full-u-s-trust-charter-from-federal-banking-regulator)
- [Coinbase National Trust Company · Coinbase Blog](https://www.coinbase.com/en-gb/blog/coinbase-launches-national-trust-company-with-federally-regulated-institutional-grade-custody-offering)
- [Nvidia drops ~5% pre-market after board probe · Financial Times via TechMeme](https://www.techmeme.com/261109/p11)
- [Profil Alice Huang dan Megaspeed · Bloomberg via TechMeme](https://www.techmeme.com/261109/p18)
- [Kendali Huang atas Nvidia · New York Times via TechMeme](https://www.techmeme.com/261109/p13)
