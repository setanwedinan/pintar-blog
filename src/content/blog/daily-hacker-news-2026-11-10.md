---
title: 'Fable 5.2 membuktikan teorema terakhir Fermat dalam 30 jam, dan pesawat kertas menang 1.099 poin'
description: 'Rangkuman Hacker News 10 November 2026: Claude Fable 5.2 dan Mythos 5.2 rilis dengan klaim formalisasi teorema Fermat, Foldable Flight memuncaki daftar dengan 1.099 poin, USPS merilis poligon batas ZIP Code resmi, Kanada menyalakan Real-Time Rail, dan Amazon memangkas 98 persen biaya klasifikasi tiket dengan model keputusan.'
pubDate: 2026-11-10T13:00:00Z
tags: ['Daily Update', 'Hacker News', 'AI', 'open source']
---

## 🔍 TL;DR

- Anthropic merilis Claude Fable 5.2 dan Mythos 5.2 pada 9 November: output sampai **30 persen lebih cepat**, harga turun ke **8 dolar per juta token input dan 40 dolar per juta token output**, dan model itu memuncaki Hacker News dengan **708 poin serta 876 komentar**. _(anthropic.com)_
- Klaim paling keras di halaman rilis: tim **1.000 agen** Fable 5.2 memformalkan bukti Teorema Terakhir Fermat dalam **30 jam**, dibanding 11 hari pada upaya pertama mereka. _(anthropic.com)_
- Foldable Flight, situs 109 pesawat kertas dengan instruksi lipat, memuncaki daftar hari ini dengan **1.099 poin dan 153 komentar**. _(foldableflight.com)_
- USPS merilis poligon batas ZIP Code resmi dalam GeoJSON, **665 poin**. Payments Canada menyalakan Real-Time Rail yang berjalan 24/7, **555 poin**. _(postalpro.usps.com, payments.ca)_
- Amazon memindahkan pelabelan tiket internal dari Claude Sonnet 4.6 ke Strands Decider: token per tiket turun dari **6.724 ke 2.010**, biaya per juta tiket dari sekitar **22.200 dolar ke 500 dolar**. _(strandsagents.com)_

## 🧠 Fable 5.2, dan angka yang bikin ruang komentar ramai

Anthropic menerbitkan pengumuman Fable 5.2 dan Mythos 5.2 pada 9 November. Keduanya adalah model yang sama di baliknya; Fable mendapat pengaman siber dan biologi yang lebih ketat sehingga bisa dibuka untuk semua pengguna, sementara Mythos dibuka lewat program verifikasi untuk organisasi yang mengerjakan riset siber atau biomedis.

Angka yang paling mudah dicerna ada di harga dan kecepatan. Output-nya sampai **30 persen lebih cepat** dibanding versi 5.1, dengan tarif **8 dolar per juta token input dan 40 dolar per juta token output**. Ada mode cepat opsional yang menaikkan kecepatan generasi token sampai **2,5 kali**, dengan tarif 16 dan 80 dolar per juta token.

Di tabel benchmark mereka, Fable 5.2 mencatat 49,1 persen di FrontierCode 2.0 pada effort Xhigh, 69,9 persen di FrontierSWE v2, 89,3 persen di OSWorld 2.1, dan 74,2 persen di Humanity Last Exam dengan tools. Anthropic menyebut 49,1 persen itu skor tertinggi dari model yang sudah dirilis yang mereka uji, dan pada effort High hasilnya setara Opus 5.5 di effort Max dengan biaya per tugas sekitar setengahnya.

Yang benar-benar mengangkat cerita ini ke puncak Hacker News adalah bagian sainsnya. Untuk Teorema Terakhir Fermat, upaya formalisasi pertama mereka memakai versi riset yang belum dirilis dan butuh **11 hari** dengan bantuan harness khusus plus arahan peneliti. Kali ini, tim **1.000 agen** Fable 5.2 menyelesaikannya dalam **30 jam** dengan intervensi manusia minimal, hanya berbekal daftar pernyataan teorema antara sebagai penanda kemajuan, tanpa referensi matematika. Hasilnya butuh sepertiga token aksi dan bukti yang **tujuh kali lebih pendek**.

Ada juga dua masalah terbuka di fisika lubang hitam. Yang pertama adalah perhitungan yang sudah disusun pada 2003 untuk menguji apakah transisi pembentukan lubang hitam tetap mendadak di universum sangat kecil, tapi terlalu melelahkan untuk diselesaikan dengan tangan. Fable 5.2 mengerjakannya dan menemukan transisinya tetap mendadak. Yang kedua menyangkut batas tepat sebuah teknik yang dipakai fisikawan lebih dari 15 tahun untuk menyingkirkan kandidat teori gravitasi kuantum.

Tapi ada tapinya, dan ini penting. Hampir semua angka di halaman itu berasal dari evaluasi internal Anthropic atau benchmark yang mereka jalankan sendiri, termasuk klaim Fermat, dua soal lubang hitam, dan model kapsid virus AAV yang berhasil untuk **28 dari 34** percobaan. Preprint-nya ditautkan, jadi bisa diperiksa, tapi belum ada replikasi independen. Anthropic juga menulis sendiri bahwa untuk sebagian besar tugas coding dan pengetahuan harian, pengguna sebaiknya mulai dari Opus 5.5 lalu naik ke Fable kalau perlu. ([anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2), [diskusi HN](https://news.ycombinator.com/item?id=50429068))

## ✈️ Pesawat kertas yang akhirnya punya dokumentasi serius

Di antara rilis model dan berita pembayaran, yang menang poin justru sesuatu yang bisa kamu lipat dari kertas HVS.

Foldable Flight adalah katalog **109 pesawat kertas** dengan instruksi lipat per desain, plus filter berdasarkan tingkat kesulitan, jenis pesawat, perancang, dan ukuran kertas. Setiap pesawat punya skor kecepatan, kemampuan melayang, dan akurasi. Beberapa catatannya cukup menggoda: Firefly 5 disebut sebagai prototipe pemegang rekor dunia yang bisa terbang lebih dari **300 kaki**, Unite memegang rekor waktu melayang **31,2 detik**, dan tutorial Arrowhead sudah ditonton lebih dari **100 juta kali**.

Yang membuat situs ini terasa beda dari konten kerajinan biasa adalah jejak perancangnya. Ada nama Michael LaFosse dan Eiji Nakamura di daftar, dan beberapa desain menyebut asal-usulnya dengan jelas — Mystic misalnya disebut sebagai modifikasi Nakamura Lock. Untuk hobi yang biasanya berhenti di video tutorial, adanya atribusi perancang dan skor per desain terasa seperti dokumentasi yang serius.

Batasan praktisnya sederhana: ini toko juga. Ada bagian Shop, buku, dan kontes, jadi sebagian isinya mengarah ke pembelian. Dan seperti semua pesawat kertas, performanya sangat bergantung pada ketelitian lipatan serta jenis kertas yang kamu pakai. Skor kecepatan 10 milik Ballista tidak akan berarti banyak kalau lipatannya miring dua milimeter. ([foldableflight.com](https://www.foldableflight.com), [diskusi HN](https://news.ycombinator.com/item?id=50424581))

## 🗺️ Batas ZIP Code resmi, lengkap dengan lisensinya

USPS membuka produk batas ZIP Code resmi: poligon nasional yang dibangun dari data alamat dan lokasi pengiriman mereka, bukan taksiran pihak ketiga. Halaman produknya menyebut kegunaan yang jelas — koreksi data ZIP Code yang sudah beredar, pengelompokan data demografi, dan dasar optimasi rute pengiriman.

Bagi yang pernah berurusan dengan pemetaan, ini menyelesaikan masalah lama. Batas ZIP Code tidak pernah punya definisi hukum yang rapi, jadi tiap penyedia peta punya versi sendiri. USPS kini menyebut produknya sebagai ground truth, dan menyediakan sampel GeoJSON sebagai gambaran formatnya.

Tapi ini bukan unduhan bebas. Ada tiga tingkatan produk — Internal, Enterprise, dan Publication — semuanya diperbarui **empat kali setahun**, dan semuanya lewat perjanjian lisensi serta formulir pemesanan. Untuk pemakaian pribadi atau proyek kecil, jalur gratisnya cuma sampel. Artinya cerita ini lebih menarik untuk tim logistik, asuransi, dan properti daripada untuk orang yang iseng membuat peta. ([postalpro.usps.com](https://postalpro.usps.com/zcb), [diskusi HN](https://news.ycombinator.com/item?id=50431058))

## 🏦 Kanada menyalakan rel pembayaran real-time

Payments Canada mengumumkan peluncuran Real-Time Rail pada 9 November. Sistem ini memungkinkan anggota yang ikut — bank, credit union, dan penyedia layanan pembayaran — mengirim, mengkliring, dan menyelesaikan pembayaran secara real time, 24 jam sehari sepanjang tahun, memakai pesan ISO 20022.

Dua hal membuatnya menonjol. Pertama, Kanada disebut sebagai negara G7 pertama yang mengoperasikan sistem pembayaran real-time dengan layanan antifraud terpusat yang wajib dipakai sejak hari pertama: konfirmasi nama penerima untuk akun konsumen, skor keamanan transaksi, daftar risiko, dan platform pelaporan fraud.

Kedua, angka dampaknya besar. C.D. Howe Institute memproyeksikan penghematan biaya sampai **14,5 miliar dolar** dalam satu dekade dari penurunan biaya proses, berkurangnya pemakaian uang tunai dan cek, serta hilangnya float. Di atas itu, sistem ini diharapkan menghasilkan **16 miliar dolar** keuntungan ekonomi, tumbuh ke **27 miliar** saat fungsi baru ditambahkan.

Peserta gelombang pertama juga menarik: Wealthsimple, KOHO, Peoples Trust, Paramount Commerce, Digital Commerce Bank, dan Bank of America cabang Kanada, antara lain. Bank-bank besar Kanada menyusul bertahap.

Tapi jangan bayangkan ini langsung mengubah kebiasaan bayar orang Kanada besok. Peluncurannya sengaja berurutan, dan hampir semua institusi besar baru onboarding dalam beberapa bulan ke depan. Yang benar-benar berubah hari ini adalah fondasinya, bukan pengalaman penggunanya. ([payments.ca](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy), [diskusi HN](https://news.ycombinator.com/item?id=50427362))

## 💸 Amazon memangkas 98 persen biaya klasifikasi tiket

Tulisan teknis paling praktis hari ini datang dari tim Strands Agents di AWS. Dua engineer mereka, Carr Onstott dan Mehul Jaiswal, mengganti Claude Sonnet 4.6 dengan Strands Decider di sistem tiket internal berskala besar — sistem yang melabeli tiket ke **20 kategori**, dari eskalasi pelanggan sampai temuan keamanan.

Idenya bukan mengganti model besar dengan model kecil, tapi mengganti pekerjaan generatif dengan pekerjaan pilihan. Strands Decider tidak menulis teks; ia menerima keadaan dan pertanyaan plus daftar opsi, lalu mengembalikan probabilitas per opsi beserta skor keyakinan. Untuk pelabelan tiket, bentuk itu pas: keadaan adalah tiket, opsinya adalah katalog label.

Hasil pengukuran mereka di lalu lintas nyata:

- Waktu rata-rata per panggilan turun dari **4.215 ms ke 897 ms**, sekitar 78 persen lebih cepat.
- Token per tiket turun dari **6.724 ke 2.010**, sekitar 70 persen lebih sedikit.
- Biaya per juta tiket turun dari sekitar **22.200 dolar ke 500 dolar**, kira-kira 44 kali lebih murah.

Bagian yang paling layak ditiru bukan penghematannya, tapi cara mereka pindah. Lambda pelabelan membaca saklar tiga arah dari AppConfig di setiap pesan: Sonnet melabeli semua tiket tanpa memanggil Decider, keduanya dipanggil paralel dan hasilnya dibandingkan, atau Decider mengambil alih sepenuhnya. Berjalan di lalu lintas nyata lalu memeriksa setiap ketidaksepakatan memberi informasi yang tidak akan didapat dari eval offline, dan rollback jadi perubahan konfigurasi 45 detik.

Tapi ini bukan resep umum. Tim itu sendiri menulis syaratnya: tugasnya harus pilihan tertutup dari katalog yang diketahui, volumenya tinggi, dan latensi jalur lama memang terasa. Kalau label butuh teks penjelasan, katalognya berubah tiap minggu, atau konteksnya tidak muat dalam beberapa ribu token, model keputusan bukan pengganti. Satu temuan kecil lainnya yang mudah menjebak: urutan key JSON menggeser probabilitas output sampai **0,19**, jadi mereka sekarang selalu mengirim key terurut. ([strandsagents.com](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/), [diskusi HN](https://news.ycombinator.com/item?id=50436640))

## 📡 TV yang bisa melihat lewat dinding

Proyek Maurycy memakai efek yang biasanya dianggap gangguan: selective fading. Saat antena penerima bergeser beberapa sentimeter, sinyal ATSC dari stasiun TV lokal bisa saling meniadakan dengan pantulannya. Karena fase pantulan bergantung pada frekuensi, peniadaannya tidak rata di seluruh sinyal — dan justru di situlah kepekaannya.

Hasilnya adalah waterfall spektrogram yang berubah saat seseorang berdiri dari kursi, dan membentuk garis-garis saat orang berjalan di ruangan sebelah. Jarak antar garis muncul setiap kali panjang jalur berubah satu panjang gelombang, dan dari situ ia menghitung kecepatan jalannya: sekitar **1,3 meter per detik**, atau 4,6 kilometer per jam.

Yang membuat ini lebih dari trik: menurut penulisnya, sinyal radio wideband apa pun bisa dipakai dengan cara serupa, termasuk WiFi dan LTE. Demonstrasinya lebih berantakan karena waterfall-nya berisik, tapi datanya bisa diekstrak.

Tapi eksperimen ini juga menunjukkan batasnya. Yang didapat adalah deteksi gerakan dan perkiraan kecepatan, bukan gambar orang. Butuh penerima radio yang sensitif, posisi antena yang pas, dan kondisi multipath yang menguntungkan. Sebagai pengingat privasi, ini cukup; sebagai alat pengawasan praktis, masih jauh. ([maurycyz.com](https://maurycyz.com/projects/fading/), [diskusi HN](https://news.ycombinator.com/item?id=50436410))

## 🌍 Emisi fosil turun 0,4 persen, dan kenapa itu belum kabar baik

Global Carbon Budget 2026 memproyeksikan emisi CO2 dari bahan bakar fosil turun **0,4 persen** tahun ini, menjadi **38,2 miliar ton**. Penurunan itu didorong ekspansi tenaga surya dan angin serta konflik Iran yang menekan konsumsi minyak — emisi dari minyak diperkirakan turun 1,9 persen.

Tapi totalnya naik. Karena emisi dari perubahan penggunaan lahan seperti deforestasi ikut bertambah, total emisi CO2 tahun ini diproyeksikan **43,3 miliar ton**, dari 42,8 miliar ton tahun lalu. Sisa anggaran karbon untuk menjaga pemanasan di bawah 1,5 derajat sekarang tinggal **150 miliar ton** — kurang dari empat tahun emisi pada laju sekarang.

Pierre Friedlingstein, yang memimpin studi ini di University of Exeter, menyebut penurunan emisi fosil memang menggembirakan, tapi pengurangan yang sebagian didorong guncangan geopolitik bukan solusi iklim yang berkelanjutan. Glen Peters dari CICERO menambahkan poin yang paling jujur: penurunan satu tahun bukan puncak emisi kalau tidak didorong perubahan struktural.

Kabar yang sedikit melegakan ada di sisi penyerap alami: penyerap karbon di daratan kembali ke level semula setelah melemah parah saat El Nino 2023-2024. Tapi El Nino kuat 2026 diperkirakan akan berdampak besar pada tahun berikutnya. ([news.exeter.ac.uk](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/fossil-co2-emissions-decrease-in-2026/), [diskusi HN](https://news.ycombinator.com/item?id=50437752))

## 🗣️ Pendapat saya

Dari semua item hari ini, yang paling saya pikirkan justru yang paling sepi poin: Amazon mengganti Sonnet dengan model keputusan dan memangkas biaya 98 persen. Bukan karena angka hematnya, tapi karena pekerjaan yang mereka hapus ternyata bukan pekerjaan yang butuh model pintar. Melabeli tiket dari 20 kategori itu tugas pilihan, dan selama ini kita membayar model bahasa untuk menulis penalaran yang sebenarnya tidak dibaca siapa pun.

Kalau pola ini menyebar, dampaknya ke tagihan AI jauh lebih besar daripada perang harga per token yang biasa kita baca. Dan yang membuat saya percaya angka mereka bukan sekadar jualan: saklar tiga arah itu. Tim yang berani menjalankan dua model paralel di lalu lintas nyata dan memeriksa setiap ketidaksepakatan biasanya bukan tim yang sedang membesar-besarkan hasil.

Untuk Fable 5.2, saya justru menahan diri. Klaim 30 jam untuk Fermat itu mengesankan, tapi formalisasi teorema dengan daftar pernyataan antara sebagai target bukan hal yang sama dengan mengerjakan matematika dari nol, dan itu diakui sendiri di halaman mereka. Saya menunggu ada matematikawan di luar Anthropic yang mencoba jalur yang sama dan menuliskan di mana persisnya bantuannya berhenti.

## 💬 Pertanyaan buat kalian

Kalau model murah yang cuma memilih dari daftar opsi bisa menggantikan model bahasa di sebagian besar pekerjaan agen kalian, bagian mana dari sistem kalian yang sebenarnya tidak butuh model pintar sama sekali? Dan apakah kalian akan repot membangun saklar dua jalur untuk membuktikannya?

## 🔗 Sumber

- [Introducing Claude Fable 5.2 and Claude Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Diskusi HN: Claude Fable 5.2 and Mythos 5.2](https://news.ycombinator.com/item?id=50429068)
- [Foldable Flight](https://www.foldableflight.com)
- [Diskusi HN: Foldable Flight](https://news.ycombinator.com/item?id=50424581)
- [USPS ZIP Code Boundaries — PostalPro](https://postalpro.usps.com/zcb)
- [Diskusi HN: USPS ZIP Code boundary polygons](https://news.ycombinator.com/item?id=50431058)
- [Canada launches the Real-Time Rail — Payments Canada](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy)
- [Diskusi HN: Payments Canada Real-Time Rail](https://news.ycombinator.com/item?id=50427362)
- [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider — Strands Agents](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/)
- [Diskusi HN: Strands Decider](https://news.ycombinator.com/item?id=50436640)
- [Your TV can see through walls — maurycyz.com](https://maurycyz.com/projects/fading/)
- [Diskusi HN: Your TV can see through walls](https://news.ycombinator.com/item?id=50436410)
- [Fossil CO2 emissions decrease in 2026 — University of Exeter](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/fossil-co2-emissions-decrease-in-2026/)
- [Diskusi HN: Fossil CO2 emissions decrease by 0.4%](https://news.ycombinator.com/item?id=50437752)
