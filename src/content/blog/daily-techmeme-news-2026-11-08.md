---
title: 'Apple menaruh 50 miliar dolar laba di Singapura, dan Nous membalik nilai model Qwen'
description: 'Apple memangkas pajak 2,7 miliar dolar lewat Singapura, Nous Research merilis Arete-27B dari Qwen3.8, dan pembangunan data center di Mongolia Dalam jalan tanpa hambatan.'
pubDate: 2026-11-08T13:10:00Z
tags: ['berita', 'TechMeme', 'AI', 'bisnis']
---

## 🔍 TL;DR

- Berkas pengajuan yang dikutip Financial Times menunjukkan Apple menghemat pajak 2,7 miliar dolar tahun ini dengan mengalirkan sampai 50 miliar dolar laba lewat Singapura, melewati 2,6 miliar dolar yang ia dapat dari Irlandia. _(Financial Times)_
- Nous Research merilis Arete-27B, hasil _post-training_ atas Qwen3.8-27B milik Alibaba, dengan klaim jawaban berbau propaganda turun dari 22 persen ke 0,9 persen pada eval 803 prompt. _(Nous Research)_
- SemiAnalysis menulis soal Mongolia Dalam: kampus data center 800MW bertenaga angin, 120MW dibangun dalam setahun, dan ngga ada perlawanan publik. _(SemiAnalysis)_
- Treasury AS memutus MEXC dari sistem keuangan Amerika lewat operasi bernama Operation Economic Outcast, dengan tuduhan aliran dana gelap di atas 16 miliar dolar. _(CoinDesk, U.S. Treasury)_
- Asia Tenggara menyumbang sekitar 50 persen kapasitas data center APAC yang sedang dibangun, tapi Malaysia dan Thailand mulai menahan proyek pada September. _(The Guardian)_

## 💰 Singapura menyalip Irlandia

Angka yang paling sering muncul di perdebatan pajak teknologi biasanya soal tarif. Hari ini angka yang muncul soal **selisih**: 2,7 miliar dolar penghematan pajak Apple tahun ini, menurut berkas pengajuan yang dibaca Financial Times.

Jalurnya lewat Singapura. Hingga **50 miliar dolar laba** dialirkan melalui negara kota itu, dan hasil akhirnya kini melewati 2,6 miliar dolar penghematan yang Apple dapat dari Irlandia. Untuk konteks, Irlandia adalah nama yang selama satu dekade identik dengan struktur pajak Apple di Eropa.

Ada dua hal yang membuat ini menarik. Pertama, ini bukan soal Apple mencari tarif terendah di dunia, karena tarif pajak Singapura tidak ajaib. Yang dimainkan adalah **lokasi pengakuan laba**, dan itu keputusan akuntansi, bukan keputusan pabrik. Kedua, pergeseran ini terjadi setelah tekanan politik dan hukum pada struktur Irlandia menguat selama bertahun-tahun. Bentuknya berubah, arahnya tetap.

Perlu dicatat: angka 2,7 miliar dolar itu adalah penghematan, bukan pajak yang dibayar nol. Apple tetap membayar pajak di banyak yurisdiksi, dan FT menyusun cerita ini dari berkas pengajuan, bukan dari pernyataan perusahaan. ([Financial Times via TechMeme](https://www.techmeme.com/261108/p1))

## 🇨🇳 Mongolia Dalam, dan data center yang ngga ada yang protes

SemiAnalysis menulis laporan dari wilayah yang jarang masuk berita teknologi: Mongolia Dalam, yang mereka sebut sebagai wilayah data center AI dengan pertumbuhan tercepat di Tiongkok.

Detailnya konkret. Ada kampus bertenaga angin berkapasitas **800MW**, dengan **120MW yang sudah dibangun dalam satu tahun**. Ada pilot DC 800V dengan SST asli berkapasitas 5MW, dan desain pendinginan yang berjalan **tanpa chiller sentral**. Biaya konstruksi disebut rendah, dan yang paling sering diulang dalam ringkasan: tidak ada perlawanan publik.

Bandingkan dengan Eropa dan Amerika Serikat, di mana proyek data center sekarang menghadapi rapat warga, gugatan soal air, dan politisi yang menghitung suara. Di Mongolia Dalam, kombinasi lahan murah, listrik angin, dan jarak dari pemukiman padat membuat semuanya berjalan lebih cepat.

Ini juga menjelaskan kenapa pembatasan ekspor chip terasa seperti menutup satu pintu sementara gedungnya sedang dibangun di pintu lain. Kapasitas fisik tumbuh lebih dulu, dan chipnya menyusul lewat jalur apa pun yang tersedia. ([SemiAnalysis via TechMeme](https://www.techmeme.com/261108/p7))

## 🧠 Nilai sebuah model cuma satu fine-tune jauhnya

Nous Research merilis **Arete-27B**, model hasil _post-training_ atas Qwen3.8-27B milik Alibaba. Kalimat pembuka di blog resminya lugas: mereka melatih ulang model yang dilatih di Tiongkok untuk memperkuat nilai-nilai Barat.

Cara mengukurnya juga terbuka. Mereka membangun eval **803 prompt** di tujuh kategori nilai: kebebasan berekspresi, ideologi negara, negara versus pasar bebas, pendidikan, privasi data dan pengawasan, demokrasi, serta lingkungan. Setiap prompt punya 2–4 fakta wajib dari artikel sumber bertanggal, plus frasa bahasa resmi yang biasa dipakai pemerintah Tiongkok. Sebuah LLM judge menilai tanpa diberi tahu model mana yang menulis.

Hasilnya, untuk Qwen3.8-27B dasar dengan thinking off: skor fakta **2,32 dari 5**, dan **22 persen** jawaban mengandung propaganda. Setelah post-training, Arete-27B mencapai skor fakta **2,98** dan propaganda turun ke **0,9 persen** menurut model card di Hugging Face, atau 1 persen menurut blog Nous. Kategori yang paling berubah adalah kebebasan berekspresi: skor fakta naik dari 0,89 ke 2,44, dan propaganda turun dari 60 persen ke 1 persen.

Prosesnya sengaja dibuat sederhana. **SFT saja**, tanpa RL, tanpa preference optimization, tanpa perubahan arsitektur. Sekitar **52,8 juta token**, 28.886 contoh, dua epoch, 1.202 langkah. Guru datanya model open source bernama Inkling, dan seluruh eval, bobot, serta data latihnya dirilis publik dengan lisensi Apache 2.0.

Nous menyebut Hermes Bench bergerak dari 65,77 persen ke 65,60 persen, yang mereka anggap noise, sementara Terminal-Bench-2.1 naik dari 67 ke 70. Kesimpulan yang mereka tarik bukan soal satu model, tapi soal sifat lapisan bias: "applied late, applied thin", dan bisa dilepas tanpa merusak apa pun di bawahnya. ([Nous Research](https://nousresearch.com/arete), [bobot di Hugging Face](https://huggingface.co/NousResearch/Arete-27B))

## 🚫 MEXC, dan playbook sanksi yang baru

Treasury Amerika Serikat lewat FinCEN memutus bursa kripto MEXC Global dari sistem keuangan AS. Operasinya diberi nama **Operation Economic Outcast**, dan pengumumannya keluar langsung dari situs resmi Treasury.

Tuduhannya berat: aliran dana terkait aktivitas ilegal senilai **di atas 16 miliar dolar**, mencakup penghindaran sanksi Rusia dan Iran. Beberapa outlet menuliskan angka lebih spesifik 16,7 miliar dolar, dan CryptoSlate mencatat sekitar **126 juta dolar** dana keluar dari bursa setelah kabar ini muncul.

Bagi pengguna di Indonesia, relevansinya bukan teoretis. MEXC termasuk bursa yang cukup sering dipakai untuk aset yang belum masuk exchange lokal besar. Ketika akses ke perbankan AS ditutup, yang biasanya berubah lebih dulu bukan tampilan aplikasi, melainkan jalur setor dan tarik dana, plus proses verifikasi yang tiba-tiba lebih ketat.

Yang layak diperhatikan adalah bentuk operasinya. Ini bukan sanksi terhadap satu individu atau satu perusahaan di daftar hitam, tapi pemutusan akses ke sistem keuangan, dan itu alat yang jauh lebih luas jangkauannya. ([U.S. Treasury](https://home.treasury.gov/news/press-releases/sb0685/), [CoinDesk via TechMeme](https://www.techmeme.com/261107/p16))

## 🌏 Malaysia dan Thailand mengerem, dan itu soal air serta listrik

Laporan yang dikutip The Guardian menempatkan Asia Tenggara sebagai wilayah yang menyumbang **sekitar 50 persen** dari kapasitas data center APAC yang sedang dibangun, dengan Malaysia dan Thailand sebagai motor utamanya.

Tapi pada September, dua negara itu menahan langkah. **49 proyek dihentikan** dan persetujuan atas **117 proyek ditunda**, menurut laporan tersebut. Alasannya bukan permintaan pasar yang melemah, melainkan tekanan pada daya listrik dan air.

Bagi Indonesia, ini bukan berita yang bisa dilewatkan. Pola yang sama sedang berjalan di sini: kampus data center butuh listrik besar dan pendinginan, sementara jaringan dan pasokan air di banyak daerah belum siap. Kalau Malaysia yang infrastrukturnya lebih matang sudah mulai mengerem, antrean izin di dalam negeri kemungkinan akan menghadapi pertanyaan yang sama.

## 🧮 Matematika yang dianggap mustahil, dan runtuh

Ini cerita yang paling sulit dijelaskan tanpa rumus, jadi bagian ini dibatasi pada apa yang dilaporkan.

New York Times mewawancarai **Russell Impagliazzo**, salah satu pengusul _Exponential Time Hypothesis_, hipotesis lama yang menyatakan sebagian masalah akan selalu sulit diselesaikan komputer dengan cepat. Ia menyebut pembuktian OpenAI yang membantah hipotesis itu sebagai "shocking news".

Kenapa penting? Karena banyak hal di komputasi dibangun di atas asumsi bahwa masalah tertentu memang mahal. Kalau asumsi itu bergeser, dampaknya bukan cuma akademik: NYT menyebutnya bisa mempercepat desain chip, dan di sisi lain, membuat enkripsi lebih rapuh. Wall Street Journal menulis topik yang sama dari sudut berbeda, bahwa AI mungkin lebih dulu menembus enkripsi sebelum komputer kuantum sempat melakukannya.

Menilai pembuktian itu sendiri butuh latar belakang matematika yang jauh di luar cakupan tulisan ini, jadi yang bisa dicatat: ini pertama kalinya pengusul hipotesisnya sendiri mengonfirmasi bahwa hasilnya serius. ([New York Times via TechMeme](https://www.techmeme.com/261107/p12))

## 🧾 Tapi… ada tapinya

Beberapa cerita di atas punya celah yang harus disebut.

Untuk Arete-27B, eval-nya dibuat oleh pihak yang juga menjual hasilnya. Itu bukan otomatis salah, dan mereka merilis semua prompt, bobot, serta data latih sehingga siapa pun bisa memeriksa ulang. Tapi memilih tujuh kategori nilai, menulis rubrik, dan menentukan apa yang disebut "fakta wajib" adalah serangkaian keputusan yang mengandung penilaian. Angka 22 persen ke 1 persen itu benar sebagai hasil eval mereka, bukan sebagai kebenaran universal.

Untuk laporan Mongolia Dalam, sudut "tanpa perlawanan publik" perlu dibaca hati-hati. Di Tiongkok, tidak adanya protes publik bukan bukti tidak adanya keberatan, dan itu fakta yang tidak bisa dipisahkan dari konteks politik setempat.

Untuk angka pajak Apple, penghematan 2,7 miliar dolar berasal dari pembacaan berkas pengajuan oleh FT. Apple sendiri tidak merilis pernyataan yang mengonfirmasi angka itu sebagai "penghematan", dan perusahaan biasanya membantah framing semacam ini.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan angka 50 miliar dolar Apple, tapi hasil eval Nous. Bukan karena saya penggemar metrik, justru sebaliknya: saya selalu curiga pada skor yang naik rapi.

Yang membuat saya berhenti adalah kalimat penutup mereka, bahwa lapisan bias di model yang selaras negara itu dangkal, diterapkan terlambat dan tipis, dan 50 juta token supervisi cukup untuk melepasnya. Kalau itu benar, konsekuensinya dua arah. Kabar baiknya, nilai sebuah model bisa diperiksa dan diubah oleh siapa pun yang punya bobotnya. Kabar yang kurang nyaman, nilai sebuah model juga bisa diubah oleh siapa pun yang punya bobotnya, termasuk pihak yang ngga kamu setujui.

Saya ngga punya jawaban soal mana yang lebih baik untuk kamu. Tapi saya tahu saya lebih suka dunia di mana eval-nya publik dan bisa dibantah, dibanding dunia di mana satu lab diam-diam memutuskan apa yang "netral" untuk semua orang.

## 💬 Pertanyaan buat kalian

Kalau nilai sebuah model memang cuma satu fine-tune jauhnya, kalian lebih percaya pada model yang dibiarkan apa adanya, atau pada model yang jelas-jelas sudah diarahkan ke satu sudut pandang?

## 🔗 Sumber

- [Filings: Apple saved $2.7B in taxes via Singapore — Financial Times via TechMeme](https://www.techmeme.com/261108/p1)
- [Inside Inner Mongolia, China's fastest-growing AI data center region — SemiAnalysis via TechMeme](https://www.techmeme.com/261108/p7)
- [Introducing Arete-27B — Nous Research](https://nousresearch.com/arete)
- [Arete-27B di Hugging Face](https://huggingface.co/NousResearch/Arete-27B)
- [Propaganda_Eval dataset](https://huggingface.co/datasets/NousResearch/Propaganda_Eval)
- [Operation Economic Outcast — U.S. Department of the Treasury](https://home.treasury.gov/news/press-releases/sb0685/)
- [US Treasury moves to cut off MEXC — CoinDesk via TechMeme](https://www.techmeme.com/261107/p16)
- [MEXC sees $126 million outflows — CryptoSlate](https://cryptoslate.com/mexc-sees-126-million-outflows-as-us-targets-exchange-over-16-7-billion-in-suspected-illicit-transactions/)
- [Exponential Time Hypothesis co-proposer calls OpenAI disproof shocking news — NYT via TechMeme](https://www.techmeme.com/261107/p12)
- [Report: SEA makes up ~50% of APAC data center capacity being built — The Guardian via TechMeme](https://www.techmeme.com/261107/p15)
