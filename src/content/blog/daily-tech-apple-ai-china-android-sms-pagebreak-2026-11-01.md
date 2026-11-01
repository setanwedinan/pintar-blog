---
title: 'Apple Intelligence akhirnya masuk China, dan Android punya celah SMS yang bikin HP reboot sendiri'
description: 'Apple mengonfirmasi Apple Intelligence open beta di China mulai 4 November, sementara CEO John Ternus bilang perusahaannya ngga mau mengirim AI demi AI. Di sisi Android, peneliti merilis exploit SMS of Death yang bisa mematikan layanan seluler tanpa disentuh.'
pubDate: 2026-11-01T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Apple Intelligence masuk China sebagai open beta 4 November**, dengan iOS 27.3 sebagai rilis penuhnya di Desember, dan Siri AI belum ikut. _(AppleInsider)_
- **CEO Apple John Ternus bilang perusahaan ngga mau mengirim AI demi AI**, dalam wawancara dengan Wired. _(TechCrunch)_
- **Celah Android bernama SMS of Death (CVE-2026-58882) sudah punya exploit publik**: satu SMS data delapan byte bisa mematikan layanan seluler tanpa interaksi korban. _(BleepingComputer)_
- **Google menyatakan AppFunctions, lapisan tool calling Android, resmi beta** dan menyebutnya sebagai MCP versi on-device. _(Android Developers Blog)_
- **Agen keamanan AI Google, PageBreak, menemukan lebih dari 500 celah XSS** sejak beroperasi penuh Januari, dengan validator deterministik sebagai penyaring. _(InfoQ)_

## 🍎 Ternus: ngga mau kirim AI demi AI

Dalam wawancara dengan Steven Levy dari Wired, CEO Apple John Ternus membela posisi perusahaan di tengah anggapan bahwa Apple tertinggal di bidang AI. TechCrunch mencatat Ternus resmi menjabat CEO pada awal September 2026.

Menurut Ternus, semua orang punya pendapat soal arah AI Apple, tapi ia menegaskan menyukai posisi perusahaan sekarang. Apple, katanya, tetap akan memakai AI di produk baru.

Yang jadi kutipan utama justru batasannya: perusahaan ngga mau mengirim AI hanya karena AI. Kalau dikerjakan dengan benar, pengguna ngga perlu memikirkan apakah sesuatu terjadi karena AI atau karena software biasa. Yang penting, apakah produknya benar-benar disukai.

Levy juga menanyakan soal agen AI yang mungkin membuat aplikasi jadi ngga perlu. Jawaban Ternus: itu bisa membuat hidup lebih mudah, tapi membuat produk adalah hal yang sangat manusiawi dan personal.

**Tapi… ada tapinya.** Posisi itu masuk akal sebagai strategi, bukan sebagai jawaban teknis. Siri versi lebih kuat yang lama tertunda baru rilis musim panas ini, dan Apple Intelligence baru sekarang masuk China. Menunda sambil bicara soal kualitas adalah pilihan yang sah, tapi tetap terlihat seperti mengejar dari belakang.

## 🇨🇳 China akhirnya dapat Apple Intelligence, tanpa Siri AI

Apple mengonfirmasi pada 31 Oktober bahwa fitur inti Apple Intelligence akan tersedia sebagai open beta di China mulai 4 November, menurut AppleInsider. Developer beta mulai tanggal yang sama, dan peluncuran penuh menyusul bersama iOS 27.3 pada Desember.

Isi gelombang pertamanya cukup banyak: Clean Up di Photos, memory videos, pencarian bahasa natural, Visual Intelligence lewat kamera iPhone, pembuatan emoji, alat menulis untuk proofread dan meringkas, ringkasan notifikasi dan email, Smart Reply, transkripsi audio di Notes, serta transkripsi dan ringkasan panggilan.

Yang belum ikut adalah Siri AI, fitur yang di negara lain baru tersedia sepanjang 2026. Apple juga menyebut memakai model generatif buatan sendiri, dan sedang bekerja sama dengan Alibaba untuk menambahkan dukungan Qianwen di Siri. Regulasi China jadi alasan proses ini butuh dua tahun dan sejumlah mitra lokal.

## 📵 Satu SMS delapan byte, layanan seluler mati

Peneliti keamanan yang memakai nama Mark Blah merilis proof of concept untuk celah yang dijuluki SMS of Death, dengan nomor CVE-2026-58882. Serangannya zero-click: korban ngga perlu membuka apa pun.

Penyebabnya validasi panjang header yang salah di fungsi WapPushOverSms.decodeWapPdu. Pesan WAP Push delapan byte, dikirim sebagai data SMS ke port 2948, dibaca Android sebagai bilangan bulat bertanda dan berubah jadi -2147483648. Saat Android mencoba mengalokasikan memori dengan nilai negatif itu, muncul NegativeArraySizeException dan proses com.android.phone mati.

Efeknya bukan cuma aplikasi pesan yang error. Proses itu mengurus fungsi seluler, jadi koneksi putus dan panggilan yang sedang berjalan ikut terputus, termasuk panggilan darurat. Karena pesan diproses sebelum sampai ke inbox, korban ngga melihat jejak apa pun.

Google dikabarkan sudah menambal celah ini di pembaruan keamanan Oktober 2026 untuk Android 14 sampai 17. Masalahnya, celah ini ngga tercantum di bulletin keamanan Oktober, dan perangkat Android 12 serta 13 tetap rentan karena ngga menerima perbaikan. Dalam pengujian, 20 pesan beruntun cukup membuat satu perangkat Android 12 reboot ke recovery kira-kira setiap 90 detik, dan satu-satunya jalan keluar adalah factory reset.

## 🔌 Android MCP: aplikasi jadi server tool di dalam HP

Di Android Dev Summit akhir Oktober, Google mengumumkan AppFunctions resmi masuk beta, menurut Android Developers Blog. Fungsinya: aplikasi bisa mengekspos kemampuan sendiri sebagai tool yang bisa dipanggil agen, termasuk Gemini.

Cara kerjanya mirip MCP, tapi dijalankan di perangkat. Developer memberi anotasi pada fungsi yang mau dibuka, library Jetpack menghasilkan skema XML, sistem mengindeksnya, lalu agen memilih dan mengeksekusi fungsi itu sesuai permintaan pengguna. Pemanggil butuh izin EXECUTE_APP_FUNCTIONS, dan fitur ini hanya jalan di Android 16 ke atas.

Bersamaan itu Google juga membuka A2UI untuk Jetpack Compose dalam tahap alpha, supaya balasan agen bisa tampil sebagai UI asli aplikasi, bukan dinding teks. Ada juga Agentic API di ML Kit yang memakai Gemini Nano 4, plus preview Connected Apps Platform untuk mendaftarkan aplikasi ke Gemini dan Search.

**Tapi… ada tapinya.** AppFunctions masih eksperimental, dan akses end-to-end dibatasi lewat program early access. Artinya sebagian besar aplikasi belum bisa benar-benar dipanggil agen, sekalipun kodenya sudah siap.

## 🔍 PageBreak: 500 celah XSS, hampir nol false positive

Google menerbitkan makalah soal PageBreak, agen keamanan AI yang memakai model Gemini untuk menyelidiki dugaan kerentanan di aplikasi web mereka. Sejak beroperasi penuh pada Januari, sistem itu menemukan lebih dari 500 celah XSS. InfoQ melaporkan angkanya pekan ini.

Yang membedakan PageBreak bukan modelnya, tapi aturan pelaporannya. Temuan baru dikirim ke tim produk kalau validator deterministik berhasil mereproduksi exploit di aplikasi yang benar-benar berjalan. Untuk XSS, itu berarti JavaScript-nya benar-benar tereksekusi.

Michał Bentkowski, information security engineer di Google, menjelaskan bahwa keputusan memprioritaskan validasi deterministik diambil sejak awal pengembangan, supaya tim produk ngga kebanjiran laporan yang belum terverifikasi. Kandidat temuan yang belum tervalidasi tetap disimpan internal untuk memandu pemindaian berikutnya.

Timnya juga mengakui sisi lemahnya: validator mereka belum mampu mencakup semua jenis kerentanan, jadi ada risiko false negative yang seharusnya tertangkap pendekatan non-deterministik.

## 🏜️ Hermantown: data center 1,7 juta kaki persegi tetap disetujui

Di Minnesota, Dewan Kota Hermantown menyetujui seluruh enam resolusi untuk proyek data center Google, dengan suara bulat lima anggota dewan. Rapat Jumat malam itu berlangsung berjam-jam: satu jam presentasi dari Google dan Minnesota Power, lalu sekitar empat jam komentar publik yang mayoritas menolak.

Bring Me The News mencatat kapasitas hadir dibatasi 85 orang setelah protes pada rapat Senin memaksa penundaan, sementara kerumunan tetap menunggu di luar dengan penjagaan polisi. Warga menyorot pemakaian air dan dampak lingkungan.

Kompleksnya terdiri dari tiga gedung data masing-masing 375.000 kaki persegi setinggi 33 kaki, tiga gedung mekanikal 150.000 kaki persegi, dua gedung kantor, dan satu gedung pemadam. Dewan juga menolak petisi warga untuk environmental assessment worksheet. Star Tribune menyebut proyek ini berkapasitas 500 megawatt.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan soal siapa yang menang lomba AI, tapi soal dua celah yang sama-sama terbuka: satu di dokumen, satu di gadget.

Celah SMS of Death itu contoh bagus kenapa bulletin keamanan bukan patokan. Google menambal, tapi ngga menulisnya di daftar resmi, dan Android 12 serta 13 yang masih dipakai banyak orang dibiarkan. Kalau kamu memegang HP lama dan ngga pernah dapat update, kamu ngga punya cara tahu bahwa ada yang sudah diperbaiki dan ada yang belum.

Untuk Ternus, saya cukup percaya pada kalimatnya soal produk. Tapi saya ngga yakin itu cukup. Apple Intelligence masuk China dua tahun setelah fitur itu lahir, tanpa Siri AI, dan dengan model lokal dari Alibaba. Itu bukan posisi pemimpin, itu posisi peserta yang sedang mengejar izin.

Soal PageBreak, ini bagian yang saya suka: Google memilih melaporkan hanya yang bisa dibuktikan. Saya ngga tahu seberapa besar bagian keamanan Google yang sekarang diserahkan ke agen, tapi pola pikir reproduksi-dulu itu jauh lebih sehat daripada angka temuan yang besar tanpa bukti.

Kalau soal data center, saya bingung harus berpihak ke mana. Listrik dan air untuk AI itu kebutuhan nyata, tapi kalau warga sekitar yang harus menanggung suara dan debit airnya, kata "kebutuhan" jadi terasa sepihak.

## 💬 Pertanyaan buat kalian

Kalau HP kamu berhenti dapat update keamanan bulan depan, kamu tetap pakai atau langsung cari pengganti? Dan soal Apple Intelligence di China tanpa Siri AI, itu menurut kalian langkah hati-hati atau cuma setengah jadi?

## 🔗 Sumber

- [TechCrunch — Apple CEO says the company doesn't want to ship AI for AI's sake](https://techcrunch.com/2026/10/31/apple-ceo-says-the-company-doesnt-want-to-ship-ai-for-ais-sake/)
- [AppleInsider — Two years later, Apple Intelligence makes its way to China](https://appleinsider.com/articles/26/10/31/two-years-later-apple-intelligence-makes-its-way-to-china)
- [BleepingComputer — New Android SMS of Death exploit can remotely crash unpatched phones](https://www.bleepingcomputer.com/news/security/new-android-sms-of-death-exploit-can-remotely-crash-unpatched-phones/)
- [Android Developers Blog — Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [Android Developers — Overview of AppFunctions](https://developer.android.com/ai/appfunctions)
- [Google Blog — New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/)
- [InfoQ — Google Discloses PageBreak AI Security Agent That Found 500+ XSS Bugs](https://www.infoq.com/news/2026/10/google-pagebreak-security-agent/)
- [Bring Me The News — Hermantown unanimously approves Google data center over public objections](https://bringmethenews.com/minnesota-news/hermantown-unanimously-approves-google-data-center-over-public-objections-at-contentious-meeting)
- [Star Tribune — Hermantown moves ahead with data center, despite opposition](https://www.startribune.com/data-center-hermantown-google/601905898)
