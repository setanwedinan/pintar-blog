---
title: 'Power event di London bikin bank Inggris tumbang, dan 35 miliar dolar chip Nvidia dari China'
description: 'Rangkuman TechMeme 20 Oktober 2026: gangguan listrik di zona europe-west2-b membuat layanan Google Cloud dan sejumlah bank Inggris down berjam-jam, ByteDance, Alibaba, dan Tencent memesan lebih dari 3 juta GPU RTX PRO 5500 senilai 35 miliar dolar, Salesforce membeli Braze 5,66 miliar dolar, dokumen bocor membuka program ECHOTRIBBLE milik Army Cyber Command, dan Waymo akan masuk Madrid tahun 2027.'
pubDate: 2026-10-20T13:10:00Z
tags: ['berita', 'TechMeme']
---

## 🔍 TL;DR

- Gangguan listrik di zona **europe-west2-b** membuat layanan Google Cloud di London terganggu mulai **06.08 UTC**, dan efeknya menyeret Revolut, HSBC, Lloyds, Halifax, Rightmove, DPD, sampai Royal Mail. _(The Register, Reuters)_
- **ByteDance, Alibaba, dan Tencent** memesan lebih dari **3 juta GPU Nvidia RTX PRO 5500** dengan harga stiker di atas **35 miliar dolar**, padahal Nvidia belum bisa menjamin pengiriman penuh. _(Reuters)_
- **Salesforce** membeli **Braze** senilai sekitar **5,66 miliar dolar**, atau **47,50 dolar per saham**, premi sekitar **58,1 persen** dari harga penutupan terakhir. _(Reuters)_
- Dokumen yang diperoleh The Intercept membuka **ECHOTRIBBLE**, program Army Cyber Command untuk menjadikan agen AI sebagai senjata otonom yang bisa menyebar sendiri lalu menghapus jejaknya. _(The Intercept)_
- **Waymo** akan meluncurkan layanan robotaxi otonom penuh di wilayah **Madrid pada 2027**, debut pertamanya di Spanyol. _(Reuters)_

## ⚡ Satu zona, satu power event, dan setengah layanan keuangan Inggris

Gangguan mulai **06.08 UTC** ketika salah satu dari tiga zona ketersediaan di region London, yaitu **europe-west2-b**, mulai bermasalah. Google Cloud menyebut penyebabnya adalah _power event_, dan pada pukul 11.58 UTC menyatakan pemulihan beban kerja yang ada ditargetkan selesai "tentatively" pada 13.00 UTC. Reuters melaporkan layanan Google Cloud di Inggris sebagian besar sudah kembali normal.

Daftar layanan yang ikut tumbang cukup panjang: BigQuery Data Transfer Service, Cloud Filestore, Cloud Run, Google App Engine, Google Cloud NetApp Volumes, Google Kubernetes Engine, dan Managed Service for Apache Kafka. Seorang dosen ilmu komputer di Keele University, Amro Al-Said Ahmad, memperkirakan total **38 layanan** terdampak, dan menyebut insiden ini sebagai pengingat bahwa ketahanan tidak otomatis datang dari pindah ke cloud.

Di sisi pengguna, Revolut mengalami gangguan layanan yang menurut sumber Reuters berkaitan dengan insiden Google Cloud ini. Status page Revolut menunjukkan sebagian besar layanannya tidak tersedia atau hanya tersedia sebagian, termasuk pembayaran kartu dan penarikan ATM, dengan pernyataan bahwa uang dan data nasabah aman. ING Jerman melaporkan masalah login ke online banking dan aplikasinya, Halifax melaporkan gangguan online dan aplikasi, dan data Downdetector menunjukkan laporan masalah pada Lloyds, HSBC, Bank of Scotland, Rightmove, DPD, NHS England, dan Royal Mail.

Konteksnya bukan sekadar insiden teknis. Reuters mencatat bahwa pada Juli lalu Inggris menetapkan empat perusahaan teknologi, termasuk Google Cloud EMEA Limited, sebagai pemasok pihak ketiga kritis untuk sektor keuangan. Setahun sebelumnya, regulator Uni Eropa menempatkan Google Cloud di antara 19 perusahaan teknologi yang dianggap sebagai penyedia komputasi kritis bagi industri keuangan blok itu. Artinya, satu power event di satu zona London sudah cukup untuk jadi masalah regulasi, bukan cuma masalah operasional.

## 🇨🇳 35 miliar dolar untuk chip yang bukan yang paling kuat

Tiga perusahaan China, **ByteDance, Alibaba, dan Tencent**, memesan lebih dari **3 juta** GPU workstation **Nvidia RTX PRO 5500** dengan total harga stiker di atas **35 miliar dolar**, menurut dua sumber Reuters. Harga per kartu sekitar **11.400 dolar**.

Yang membuat cerita ini menarik bukan angkanya, tapi ketidakpastiannya. Nvidia sudah memberi tahu pelanggan dan mitra bahwa mereka tidak bisa menjamin pesanan itu terpenuhi karena permintaan dari perusahaan China jauh melebihi rencana produksi. Satu sumber menyebut mitra mungkin hanya menerima **5 sampai 10 persen** dari jumlah yang diminta. Sumber lain menyebut Nvidia mengindikasikan tidak bisa memproduksi lebih dari **3 juta** kartu RTX PRO 5500 secara global pada 2027. Total pesanan dari pelanggan di China, menurut dua sumber, sudah melewati **6 juta** unit.

RTX PRO 5500 adalah chip workstation, bukan prosesor pusat data kelas atas. Tapi ia termasuk chip Nvidia paling kuat yang masih boleh dijual ke pembeli China. B300 berbasis Blackwell tidak diizinkan, sementara H200 berbasis Hopper ditinjau kasus per kasus dengan syarat lisensi. Ketiga perusahaan itu disebut akan memakai kartu tersebut terutama untuk inferensi, bukan training.

Ada beberapa detail operasional yang ikut terungkap. Nvidia meminta pelanggan memperkirakan sampel awal datang Desember, dengan pengiriman komersial mulai kuartal pertama 2027. Mulai 2027, sebagian besar kapasitas TSMC diperkirakan dialihkan ke Rubin, platform pusat data generasi berikutnya. RTX 6000D yang diluncurkan pertengahan tahun lalu sebagai produk pengurangan kemampuan sudah dihentikan, dan harga pasarnya di China disebut naik dua kali lipat. Pada 13 Oktober, perusahaan yang tercatat di Shenzhen, Tansun Technology, mengumumkan kesepakatan membeli **20.000** kartu RTX PRO 5500 dari pihak yang tidak disebutkan namanya, dengan peringatan bahwa kekurangan pasokan bisa menunda pengiriman.

## 💼 Salesforce menebus Braze dan pola yang berulang

Salesforce setuju membeli **Braze**, platform pemasaran berbasis AI asal New York, dalam kesepakatan senilai sekitar **5,66 miliar dolar**. Pemegang saham Kelas A Braze akan menerima **47,50 dolar tunai per saham**, premi sekitar **58,1 persen** dibanding harga penutupan terakhir. Saham Braze melonjak lebih dari 50 persen di awal perdagangan, sementara saham Salesforce melemah.

Braze punya sekitar **2.770 pelanggan**, termasuk Canva, Dairy Queen, Equinox, Instacart, Urban Outfitters, dan Venmo. Alatnya membantu pemasar mengoptimalkan konten, penawaran, kanal, dan waktu pengiriman, lalu merespons perilaku pelanggan secara real time. Transaksi diperkirakan tutup pada tahun fiskal 2028 Salesforce, dan perusahaan itu menyatakan kesepakatan ini tidak mengubah proyeksi fiskal 2027 mereka.

Ini langkah ketiga dalam pola yang sama. Reuters mencatat Salesforce sebelumnya menandatangani kesepakatan **3,6 miliar dolar** untuk platform agen AI **Fin** tahun ini, dan **8 miliar dolar** untuk **Informatica** tahun lalu. Ada juga klausul yang menunjukkan seberapa serius keduanya: Salesforce akan membayar denda pemutusan **300 juta dolar**, sementara Braze membayar **191,4 juta dolar** bila membatalkan.

## 🎯 ECHOTRIBBLE: agen AI yang diminta menyebar lalu menghilang

Dokumen yang diperoleh The Intercept menunjukkan Army Cyber Command (ARCYBER) sedang mengembangkan platform bernama **ECHOTRIBBLE** untuk mengubah agen AI menjadi senjata otonom. Dokumen yang beredar ke calon kontraktor menyebut agen itu "designed to autonomously navigate infrastructures" dan mampu "identifying and neutralizing identified threats/targets".

Dokumen tanya jawab untuk vendor menjelaskan bahwa ECHOTRIBBLE "primarily focused" pada misi ofensif, dan bahwa "neutralizing" bisa berarti menonaktifkan ancaman sepenuhnya atau sementara, atau menghapus ancaman dari target. Cara kerjanya digambarkan mirip worm: bergerak diam-diam di jaringan asing, berpindah dari perangkat ke perangkat, dan menjangkau target di cloud maupun di sistem air-gapped. Setelah tugasnya selesai, agen-agen itu disebut akan menghancurkan dirinya sendiri, idealnya tanpa pernah terdeteksi.

Meski dokumen menyebut adanya "predefined triggers" yang bisa diprogram, software ini "must operate with minimal human oversight" dan harus mampu "Self-Directed Behavior". Sebuah presentasi ke vendor pada acara ARCYBER 24 Juni memberi contoh: setelah diunggah ke sebuah laptop, software itu sendiri "identifies other potential targets" di jaringan yang sama, lalu "produces a replica of itself tailored specifically for the iPad, Apple desktop, and Windows 11 PC".

David Krueger, profesor machine learning di University of Montreal yang mendirikan Evitable, sebuah organisasi yang mendorong moratorium pengembangan AI, menyebut membuat sistem AI otonom dengan mandat "neutralize threats" sangat berbahaya. Menurutnya, sudah ada sistem AI yang dengan sadar menyerang sistem yang bukan target yang dimaksud.

Hyrum Anderson, co-founder dan CEO firma keamanan AI Abundant, mengangkat pertanyaan yang lebih membumi: targetnya mungkin kena, tapi jalur apa yang akan ditempuh agen itu. Ia mengingatkan ada banyak organisasi publik dan swasta yang berada di bawah garis kemiskinan keamanan, dan mereka bisa terkena langsung atau tertangkap radius ledakan dari target yang dilewati.

## 🚕 Waymo memilih Madrid sebagai pintu masuk Spanyol

Waymo mengumumkan akan meluncurkan layanan ride-hailing otonom penuh di wilayah **Madrid pada 2027**, deployment pertamanya di Spanyol. Mobil listrik **Jaguar I-PACE** akan mulai muncul di jalan Madrid dalam beberapa hari ke depan, dengan spesialis terlatih di balik kemudi sebelum operasi otonom dimulai. Waymo akan beroperasi di bawah kerangka pengujian kendaraan otonom badan lalu lintas Spanyol, DGT.

Ekspansinya tidak berhenti di sana. Waymo menyebut target London tahun ini, Tokyo pada 2027 bersama Nihon Kotsu dan Go dengan menunggu persetujuan regulator, serta Toronto pada 2028 bersama Element Fleet Management. Armadanya saat ini beroperasi di lebih dari **15 kota** di AS, menyelesaikan lebih dari **500.000** perjalanan berbayar per minggu, dan sudah melewati **20 juta** perjalanan berbayar kumulatif.

Soal keselamatan, Waymo mengklaim data dari lebih dari **400 juta kilometer** pengemudian otonom menunjukkan **95 persen lebih sedikit** kecelakaan yang melibatkan cedera serius atau lebih buruk dibanding pengemudi manusia. Klaim itu datang dari perusahaan yang berkepentingan, jadi sebaiknya dibaca sebagai klaim perusahaan, bukan temuan pihak independen.

## 🎧 Spotify membuka membership berbayar untuk podcaster

Spotify meluncurkan **podcast memberships** berbayar di **34 pasar**, termasuk AS. Lewat fitur ini kreator bisa menawarkan keuntungan seperti konten bonus atau iklan lebih sedikit, dan mereka **mempertahankan 90 persen** pendapatan. Sebelumnya monetisasi podcast di Spotify banyak bergantung pada episode bonus yang dipaywall; model baru ini memberi jalan lain bagi pendengar yang ingin mendukung langsung.

Bagi kreator Indonesia, 34 pasar itu kemungkinan besar belum termasuk Indonesia, dan ini bagian yang perlu dicatat sebelum kamu menghitung potensi pendapatan dari fitur ini.

## 🗣️ Pendapat saya

Yang paling saya bawa pulang hari ini soal cloud. Bukan karena outage-nya besar, tapi karena penyebabnya sepele: listrik. Semua pembicaraan soal multi-region, portabilitas beban kerja, dan disaster recovery jadi terdengar berbeda ketika yang jatuh adalah satu zona di satu kota dan efeknya sampai ke penarikan ATM orang di London.

Saya ngga setuju dengan cara membaca insiden ini sebagai "cloud itu rapuh". Menurut saya lebih tepat dibaca sebagai "ketergantungan tanpa desain cadangan itu rapuh". Masalahnya, desain cadangan harganya mahal, dan biaya itu selalu kalah dalam rapat anggaran sampai ada insiden.

Soal 35 miliar dolar pesanan Nvidia, ada satu hal yang membuat saya berhenti membaca dua kali: Nvidia memberi tahu pelanggan bahwa mereka mungkin cuma dapat 5 sampai 10 persen. Saya ngga tahu bagaimana rasanya memesan barang 35 miliar dolar sambil tahu besar kemungkinan hanya sepersepuluh yang datang, dan tetap memesan. Itu bukan keputusan pembelian, itu keputusan bertahan hidup.

Untuk ECHOTRIBBLE, saya ngga punya analisis militer yang kredibel, dan saya ngga akan berpura-pura punya. Tapi satu kalimat dari dokumen itu yang menurut saya paling perlu dibaca ulang: "minimal human oversight" dan "self-directed behavior" ada di dokumen yang sama. Dua frasa itu, digabung, adalah definisi dari sesuatu yang tidak lagi bisa dipanggil kembali.

Tapi… ada tapinya untuk posisi saya sendiri. Saya juga memakai agen AI setiap hari, dan saya menikmati betapa banyak hal yang jadi mungkin. Yang saya tidak ingin lakukan adalah menulis kolom yang mengkritik agen otonom sambil mengabaikan bahwa saya bagian dari permintaan yang membuat teknologinya berkembang.

Kalian sendiri, lebih takut pada agen yang menyebar sendiri di jaringan, atau pada satu power event yang bikin kalian ngga bisa bayar kopi?

## 🔗 Sumber

- [Google Cloud says a power event caused today's outage — The Register](https://www.theregister.com/paas-and-iaas/2026/10/20/google-cloud-says-a-power-event-caused-todays-outage/5304160)
- [Google Cloud services down in UK; banks, public sector report issues — Reuters](https://www.reuters.com/world/europe/google-cloud-services-experience-outage-europe-2026-10-20/)
- [ByteDance, Alibaba, Tencent place over $35 billion worth of Nvidia chip orders — Reuters](https://www.reuters.com/business/retail-consumer/bytedance-alibaba-tencent-place-over-35-billion-worth-nvidia-chip-orders-2026-10-20/)
- [Salesforce deepens AI bets with $5.66 billion Braze deal — Reuters](https://www.reuters.com/business/salesforce-acquire-braze-566-billion-deal-2026-10-20/)
- [The Army Wants to Sic AI Agents on Its Enemies. What Could Go Wrong? — The Intercept](https://theintercept.com/2026/10/19/army-autonomous-ai-agents-arcyber/)
- [Waymo to launch autonomous ride-hailing in Madrid next year — Reuters](https://www.reuters.com/business/waymo-launch-autonomous-ride-hailing-madrid-next-year-2026-10-20/)
- [TechMeme](https://www.techmeme.com/)
