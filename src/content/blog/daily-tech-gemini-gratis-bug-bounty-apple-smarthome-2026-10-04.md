---
title: '🤖 Google Pangkas Akses Gratis Gemini 9 Oktober, Bug Bounty Open Source Dibekukan karena Laporan AI Palsu'
description: 'Google membatasi model Gemini bagi pengguna tanpa langganan mulai 9 Oktober 2026 dan membekukan pengajuan kerentanan OSS VRP setelah banjir laporan AI palsu, sementara Apple menyiapkan portofolio smart home pada 13 Oktober.'
pubDate: 2026-10-04T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

Rangkuman berita teknologi pilihan dari Google Alerts, Minggu 4 Oktober 2026. Hari ini dua sisi dari gelombang AI yang sama terlihat jelas: biaya yang naik dan laporan yang makin sulit dipercaya.

## 🚫 Google Pangkas Akses Gemini Gratis Mulai 9 Oktober

Google memperbarui dokumentasi dukungannya soal cara kerja akses Gemini untuk akun personal, dan perubahannya cukup signifikan bagi pengguna gratis.

Mulai **9 Oktober 2026**, pengguna yang tidak punya langganan Google AI akan kehilangan akses ke model **Gemini Flash** dan **Pro** reguler, dan hanya dibatasi ke **Flash-Lite**. Artinya tier gratis menjadi jauh lebih terbatas dibanding sebelumnya.

Perubahan ini juga menyentuh pelanggan berbayar:

- **Tanpa langganan:** sebelumnya Flash-Lite + Flash + Pro → kini hanya Flash-Lite
- **Google AI Plus:** sebelumnya Flash-Lite + Flash + Pro → kini Flash-Lite + Flash (kehilangan Pro)
- **Google AI Pro:** tetap ketiga model, plus akses **Deep Think** yang sebelumnya hanya untuk Ultra
- **Google AI Ultra:** tidak berubah, tetap ketiga model plus Deep Think

Menurut Neowin, Google menyatakan pelanggan AI Plus akan menerima email yang menjelaskan kapan perubahan berlaku untuk akun mereka. Kabar baiknya, kemampuan Deep Think yang semula eksklusif untuk Ultra kini juga dibuka untuk AI Pro.

## 🐛 Bug Bounty Open Source Google Dibekukan karena Banjir Laporan AI Palsu

Google secara resmi menangguhkan pengajuan kerentanan produk pada **Open Source Software Vulnerability Reward Program (OSS VRP)** — program bug bounty untuk ekosistem open source Google. Penangguhan berlaku efektif **1 Oktober 2026**, hari yang sama dengan pengumuman lewat unggahan resmi di X.

Google mengimbau peserta mengalihkan perhatian ke program VRP lain, dan menjanjikan pembaruan pada kuartal pertama 2027 saat program ini direstrukturisasi. Beberapa hal yang tidak terpengaruh:

- Kerentanan produk yang diajukan **sebelum** 1 Oktober
- Laporan **supply chain** pada OSS VRP
- Sebagian laporan lewat **Cloud VRP**, untuk repo Google Cloud yang berdampak ke produk Google Cloud

Penyebabnya menurut Tom's Hardware: lonjakan laporan bug yang dihasilkan AI, banyak di antaranya tulisan asal-asalan yang mengklaim menemukan cacat tetapi sebenarnya tidak valid atau tidak dapat dieksploitasi. Engineer Google dan maintainer open source kewalahan karena harus memvalidasi ribuan laporan secara manual, alih-alih memperbaiki kerentanan yang benar-benar kritis.

Kasus serupa terjadi di tempat lain. Linux sebelumnya menghentikan dukungan untuk driver jaringan lama karena banjir laporan bug palsu buatan AI, dan Intel juga menangguhkan program bug bounty yang semula membayar hingga 100.000 dolar per temuan.

## 🏠 Apple Umumkan Portofolio Smart Home 13 Oktober, Kamera Tanpa Rekaman Video

Bloomberg lewat Mark Gurman menyebut Apple akan memperkenalkan **tiga produk smart home pada Selasa, 13 Oktober**: smart home hub yang lama dirumorkan, HomePod mini baru, dan model Apple TV baru. Gurman belum merinci format pengumumannya, tetapi sejumlah petunjuk mengarah ke semacam acara.

Menurut MacRumors, gerai Apple dilaporkan sudah menerima kotak rahasia bertanda **Do Not Open Until October 8** yang kemungkinan berisi materi merchandising — belum jelas apakah untuk peluncuran iPhone Duo atau produk smart home.

Detail hub yang beredar: layar persegi 6 inci dengan desain bergaya iMac G4, bisa diletakkan di meja atau dipasang di dinding, satu kamera FaceTime di depan, dengan mikrofon dan speaker di bagian base. Warnanya disebut mencakup Silver, Space Gray, Starlight, dan Rose Pink.

Yang tak kalah menarik, Gurman lewat podcast Power On menyebut Apple sedang mengembangkan **kamera keamanan rumah yang tidak merekam video**. Bentuknya silinder kecil, dan lebih berperan seperti sensor: memakai pengenalan wajah berbasis AI dengan frame rate rendah, lalu memberi tahu pengguna lewat deskripsi teks seperti peringatan ada orang di pintu belakang. Tanpa rekaman tersimpan, bagaimana polisi bisa menelusuri kejadian kriminal menjadi pertanyaan terbuka.

## 📵 Apple Konfirmasi Masalah Sinyal iPhone 18 Pro Max di AT&T, Unit Terdampak Diganti

Apple akhirnya mengonfirmasi masalah sinyal yang dilaporkan pemilik iPhone 18 Pro Max di jaringan AT&T. Juru bicara Apple menyatakan perusahaan telah mengidentifikasi masalah yang memengaruhi **sejumlah kecil** pengguna iPhone 18 Pro Max di jaringan AT&T, yang bisa membuat perangkat kehilangan layanan dan tidak bisa menelepon.

Langkah Apple: merilis **iOS 27.0.1** dan mengeluarkan pembaruan **carrier settings**. Namun menurut Macworld dan ZDNET, keduanya bersifat **mencegah** masalah terjadi, bukan memperbaiki perangkat yang sudah terdampak. Untuk unit yang sudah kehilangan layanan, Apple akan **menggantinya secara gratis**.

Sebelumnya AT&T mengirim pesan ke pelanggan bahwa sebagian ponsel mungkin tidak bisa menyelesaikan panggilan, pesan, atau data, **termasuk panggilan ke 911**, dan meminta mereka segera memperbarui ke iOS 27.0.1. Dari sisi penyebab, belum ada penjelasan resmi. CNET mencatat teardown iFixit menunjukkan versi AS memakai modem Qualcomm Snapdragon X80, sedangkan teardown TechInsights menunjukkan iPhone 17 Pro memakai modem yang sama — bedanya iPhone 18 Pro Max tampaknya menambahkan antena millimeter-wave baru.

## 💰 Harga Pixel 10a Naik ke 599 Dolar karena Biaya Memori

Google menaikkan harga **Pixel 10a dari 499 dolar menjadi 599 dolar** untuk model 128GB, dan 256GB kini 699 dolar — tujuh bulan setelah peluncurannya pada Maret. Perangkatnya tidak berubah sama sekali.

Alasannya memori. Wakil Presiden Google Shakil Barkat pada Juli menyebut harga RAM naik dari **2,80 dolar per gigabyte menjadi 12 dolar**, mengutip Morgan Stanley. Tren ini tidak hanya soal peluncuran baru: Apple menaikkan harga iPhone lama bulan lalu, lalu Samsung menaikkan harga sebagian besar lini Galaxy S26 sebesar 100 dolar pekan ini.

Tekanan biaya terlihat dari berbagai sisi. Memori kini menyumbang hingga separuh biaya komponen ponsel Android murah, dibanding sekitar 15 persen sebelum kelangkaan; harga DDR5 di Jerman naik 414 persen dalam setahun. Google sendiri memangkas kapasitas: Pixel 11 Pro turun dari 16GB ke 12GB pada tier 256GB, dan Android sedang dirombak agar lebih hemat memori.

## 🇫🇮 Google Investasi 13 Miliar Euro untuk Data Center Finlandia

Google akan menggelontorkan **minimal 13 miliar euro (sekitar 14,6 miliar dolar AS)** untuk infrastruktur digital di Finlandia antara 2027 dan 2028 — investasi tunggal terbesar Google di Eropa. Rencananya mencakup pembangunan data center dan infrastruktur pendukung di empat lokasi: **Hamina, Kajaani, Muhos, dan Vaala**.

Ruth Porat, President and Chief Investment Officer Alphabet dan Google, menyebut investasi ini sebagai kelanjutan lebih dari 15 tahun keterlibatan perusahaan di Finlandia, dipasangkan dengan kapasitas energi baru, peningkatan jaringan listrik, dan inisiatif keterjangkauan energi.

Situs pertama Google di Finlandia dibuka pada 2009 di Hamina, mengubah bekas pabrik kertas menjadi sistem pendingin yang memakai air laut Baltik. Google mengklaim lokasi itu kini memulihkan panas limbah untuk jaringan pemanas distrik dan memasok **80 persen kebutuhan panas tahunan** rumah dan bangunan yang tersambung. Google juga memperkirakan fase konstruksi menyumbang rata-rata 3,6 miliar euro per tahun ke PDB Finlandia dan menopang lebih dari 37.000 pekerjaan.

## 💡 Insight Hari Ini

Dua arus besar bertemu di berita hari ini. Arus pertama adalah **biaya AI yang menular ke semua orang** — kelangkaan memori menaikkan harga ponsel murah, laporan bug buatan AI memaksa Google menutup pintu bug bounty, dan tier gratis Gemini dipangkas karena kapasitas mahal. Arus kedua adalah **Apple yang menjual privasi sebagai fitur**: kamera keamanan yang sengaja tidak merekam video adalah taruhan bahwa konsumen lebih takut diawasi daripada takut kehilangan bukti.

## 🔗 Sumber

- [Just days after Gemini Argon launch, Google updates AI plans to limit free use significantly — Neowin](https://www.neowin.net/news/just-days-after-gemini-argon-launch-google-updates-ai-plans-to-limit-free-use-significantly/)
- [Google freezes open-source bug bounty program amid flood of invalid AI slop submissions — Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/google-suspends-part-of-the-oss-vrp-bug-bounty-program-due-to-an-influx-of-invalid-ai-submissions-product-vulnerability-submissions-ended-october-1)
- [Top Stories: Apple Smart Home Launch on October 13, iPhone Duo Production Issues, and More — MacRumors](https://www.macrumors.com/2026/10/03/top-stories-apple-smart-home-launch-october-13/)
- [New Apple Home Security Cameras Reportedly Won't Record Video — CNET](https://www.cnet.com/home/security/privacy-new-apple-home-security-cameras-wont-record-video/)
- [Apple confirms iPhone cellular issue, admits affected units can't be fixed — Macworld](https://www.macworld.com/article/3250214/apple-confirms-iphone-cellular-issue-admits-affected-units-cant-be-fixed.html)
- [iPhone 18 Pro Max can't call or text on AT&T? Apple will replace it for free — ZDNET](https://www.zdnet.com/tech/iphone-18-pro-max-att-no-service-free-replacement/)
- [Google lifts the Pixel 10a price to 599 dollars as memory costs climb — TNW](https://thenextweb.com/news/pixel-10a-price-rise-memory)
- [Google's US$14bn Finnish Data Centres: Pushing Green Energy — Sustainability Magazine](https://sustainabilitymag.com/news/googles-us-14bn-finnish-data-centres-pushing-green-energy)
