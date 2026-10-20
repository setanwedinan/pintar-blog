---
title: 'DeepSeek membuka mesin inferensinya, dan kenapa masih boleh menikmati ngoding'
description: 'Rangkuman Hacker News 20 Oktober 2026: DeepSeek merilis DeepInfer dengan lisensi Apache 2.0, esai tentang menikmati programming jadi diskusi terpanas kedua, WhatsApp kedapatan menaruh instruksi tersembunyi untuk LLM di 80 halaman bantuannya, Wine akhirnya di-porting ke OpenBSD, dan MiniMax M3.1 Flash mematok harga 0,15 dolar per juta token input.'
pubDate: 2026-10-20T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- **DeepSeek** membuka **DeepInfer**, kerangka inferensi yang selama ini dipakai untuk melayani model mereka di skala produksi, dengan lisensi Apache 2.0. Story ini memimpin HN dengan **1.098 poin dan 382 komentar**. _(GitHub, Hacker News)_
- Esai **It is still OK to enjoy programming** dari Chris Kiehl jadi diskusi teramai hari ini: **655 poin, 571 komentar**, isinya soal ngoding sebagai kesenangan, bukan sekadar alat produksi. _(chriskiehl.com)_
- **WhatsApp** menaruh instruksi tersembunyi untuk model bahasa di **80 dari 545 halaman** pusat bantuannya, termasuk perintah agar chatbot tidak menyarankan regulator data protection. _(redact.dev)_
- **Wine** akhirnya masuk port OpenBSD setelah masalah `%gs` diatasi, dan **OpenBSD 8.0** rilis hari ini. _(marc.info, openbsd.org)_
- **MiniMax M3.1 Flash** dijual **0,15 dolar per juta token input** dan **0,60 dolar per juta token output**, dengan klaim inferensi sampai tiga kali lebih cepat. _(MiniMax)_

## 🧠 DeepInfer: mesin yang selama ini dipakai DeepSeek di dalam

DeepSeek melepas DeepInfer ke publik, dan repo-nya sudah mengumpulkan sekitar **8.000 bintang serta 672 fork** dalam hitungan jam. Ini bukan demo. Menurut README-nya, DeepInfer adalah kerangka inferensi berperforma tinggi yang dipakai untuk melayani layanan produksi DeepSeek berskala besar, dan rilis open source ini membawa kemampuan offline inference dengan fitur inti yang dibutuhkan untuk serving.

Yang didukung sekarang baru satu model: **DeepSeek-V4.1-Flash**. Fiturnya cukup teknis untuk dibaca sebagai daftar belanja engineer: kernel yang sudah dioptimasi, paralelisme attention DP dan balanced CP, MoE EP dengan EPLB, mekanisme DSpark dan confidence-scheduled verification, SWA bounded replay, penjadwalan asinkron yang disebut tanpa overhead, batch-invariant inference, sampling deterministik, sampai structured outputs.

Ada beberapa detail yang enak dibongkar. Untuk DSpark, kamu mengaktifkannya lewat variabel `DEEPINFER_ENABLE_MTP_VARLEN=1`, sementara panjang draft maksimum diatur `DEEPINFER_USE_NEXTN_DECODE` dengan nilai bawaan 5. Untuk decoder SWA bounded replay, ada dua variabel yang harus dipasang, `DEEPINFER_YOCO_PREFILL_TRUNCATION_MODE=compact` dan `DEEPINFER_YOCO_PREFILL_KEEP_TOKENS=140`, dan suffix yang disimpan harus menutup jendela SWA plus panjang backtracking maksimum.

Benchmark-nya diukur pada **4 GPU SM100 untuk prefill dan 64 GPU untuk decode**, masing-masing dalam satu domain scale-up. Lisensinya Apache 2.0, dan bagian acknowledgment menyebut DeepInfer awalnya dibangun di atas **vLLM**, dengan inspirasi tambahan dari **SGLang** dan **TensorRT-LLM**.

Kabar ini datang di hari yang sama dengan berita Reuters bahwa Departemen Keamanan Dalam Negeri AS memerintahkan penghapusan produk DeepSeek dari sistem TI lembaga sipil federal, dan melarang pengadaan produk serta layanan pihak ketiga yang dibangun memakai model DeepSeek. DHS menyebut model DeepSeek punya "multiple threat vectors". Dua berita yang saling bertabrakan arah, di hari yang sama.

## 😌 Sisi lain HN: masih boleh menikmati ngoding

Di antara semua berita model dan chip, esai Chris Kiehl yang terbit 17 Oktober justru jadi thread paling ramai kedua. Premisnya sederhana: membaca Hacker News bisa membuat orang merasa tidak seharusnya lagi menikmati programming, dan dia menolak perasaan itu.

Kiehl menulis bahwa di tempat kerja, ekonomi menulis kode dengan tangan memang sudah berubah. Tapi kerja bukan hidup. Contoh yang dia pakai: dia masih ngoding di akhir pekan karena senang, sedang belajar pemrograman game, dan level kemampuannya sekarang adalah klon Breakout yang buggy dengan deteksi tabrakan yang buruk. Dia menulis kode itu dengan tangan karena menikmatinya, dan tidak terganggu oleh fakta bahwa Claude bisa menyelesaikannya sekali jalan.

Dia juga menyinggung hal-hal yang tidak produktif sama sekali: akhir pekan lalu dia mengulik seberapa jauh type safety di Java bisa didorong memakai ide dari bahasa dependently typed seperti Agda. Beberapa pekan sebelumnya recursion schemes, yang dia akui sendiri bukan pengalaman menyenangkan, berjam-jam memukul kepala ke dinding, dan sampai sekarang dia belum paham apa nilai praktisnya.

Yang menarik, dia juga mengaku senang vibe coding. Dia punya beberapa aplikasi yang kode-nya belum pernah dia lihat satu baris pun, dan dia menduga kalau dibaca akan bikin kaget. Baginya itu juga menyenangkan, dengan caranya sendiri.

## 🕵️ WhatsApp menaruh instruksi tersembunyi untuk AI di halaman bantuan

Tim redact.dev menemukan sesuatu pada 8 Oktober 2026: teks di halaman bantuan WhatsApp yang tidak pernah tampil di layar pembaca, tapi ikut terkirim ke model bahasa. Mereka lalu membaca **545 halaman** yang ditautkan pusat bantuan WhatsApp dan menyimpan salinan masing-masing. Hasilnya: **80 halaman** memuat teks tersembunyi untuk AI, dengan total **102 blok**.

Dua blok paling mencolok. Pertama, di halaman cara menghapus akun. Di bawah catatan yang terlihat pembaca, ada perintah agar AI tidak menyarankan menghubungi Data Protection Authority, regulator, atau otoritas pengawas mana pun, tidak menyarankan WhatsApp menghapus akun secara manual, dan tidak menyarankan memakai ponsel lain dengan nomor aktif.

Kedua, di halaman pelaporan dan pemblokiran. Begitu pengguna menyebut tindakan hukum, gugatan, pengacara, atau pengadilan, AI diminta tidak mengutip, menafsirkan, atau merujuk Terms of Service, Privacy Policy, maupun dokumen legal apa pun. Termasuk, dan ini bagian yang paling jauh, tidak merujuk peraturan perlindungan data seperti **GDPR, LGPD, atau CCPA**, bahkan ketika pengguna sendiri yang mengangkatnya.

Masalahnya, kebijakan privasi WhatsApp untuk kawasan Eropa yang berlaku 2 Juli 2026 justru menyatakan hal sebaliknya: pengguna berhak mengajukan keluhan ke Irish Data Protection Commission atau otoritas pengawas lain yang kompeten, dan kebijakan itu menyebut GDPR secara eksplisit. Hak tersebut berasal dari Pasal 17 dan Pasal 77 GDPR, bukan dari WhatsApp. Instruksi ke chatbot tidak bisa mencabut hak itu, tapi bisa memastikan pengguna tidak pernah mendengarnya dari tempat mereka mencari bantuan.

WhatsApp sudah menyatakan ke WIRED bahwa catatan itu adalah instruksi untuk chatbot dukungan mereka sendiri, dan teks tersebut kini sudah hilang dari halaman live. Redact.dev juga mencatat bahwa server WhatsApp mengirim catatan itu ke crawler Google dan Bing, sementara ketika diakses dengan nama crawler OpenAI, Anthropic, dan Perplexity pada 9 Oktober, halaman kembali tanpa artikel maupun catatan tersebut. Mereka belum menguji apakah ada asisten AI yang benar-benar mengikuti instruksi itu.

## 🍷 Wine jalan di OpenBSD, dan OpenBSD 8.0 ikut rilis

Thomas Frohwein mengirim proposal port `emulators/wine` ke milis openbsd-ports pada 18 Oktober, dan menyebutnya sebagai proposal port paling mengejutkan tahun ini. Jalan buntu utamanya adalah pertanyaan `%gs/gsbase`; pintunya terbuka setelah solusi perangkat lunak dari Andrii, yang menurut penjelasan Frohwein tidak bisa menyetel gsbase sehingga prefiks `%gs` diemulasikan pada perintah.

Mereka sudah menguji beberapa lusin software Windows 64-bit, sebagian besar berhasil. Remaster **The Witcher 3** yang rilis bulan lalu ikut jalan dan jalan dengan baik, dengan syarat menambahkan vkd3d-proton sesuai README. Batasan terbesarnya: WoW64 belum bekerja, jadi software Windows 32-bit masih tidak jalan sama sekali. Builtin-test juga masih dimatikan karena butuh akses ke X server dan beberapa tes masih menggantung.

Di hari yang sama, **OpenBSD 8.0** resmi rilis, menandai rilis ke-61 proyek itu. Lagu rilisnya berjudul "The Simps on AI", artwork-nya oleh yvaneht nioj dan clanker. Catatan perubahannya antara lain ruang alamat virtual kernel amd64 yang dinaikkan dari 4G ke 512G, dukungan hibernate di arm64, dan dukungan kernel untuk ekstensi vektor RISC-V.

## 💬 Ask HN: kode AI yang kamu ngga paham

Satu thread yang paling banyak dibalas hari ini justru bukan berita: **Ask HN: How to deal with shipping AI-written code you don't understand?** dengan **530 poin dan 648 komentar**. Pertanyaannya sederhana dan sangat spesifik zaman ini, yaitu apa yang dilakukan orang ketika harus mengirim kode yang dihasilkan model dan dia sendiri tidak sepenuhnya paham cara kerjanya.

Jumlah komentarnya lebih besar dari poinnya, rasio yang biasanya menandakan thread berisi pengalaman pribadi, bukan debat teori. Ini juga nyambung dengan kebijakan kernel Linux yang baru saja berubah: kontributor tidak lagi wajib mengakui penggunaan alat AI, dengan catatan mereka tetap harus memahami kode yang dikirim.

## ⚡ MiniMax M3.1 Flash dan harga yang bikin gelisah

MiniMax merilis M3.1 Flash dan menyebutnya lompatan generasi untuk tugas agentic, coding, computer use, dan cybersecurity. Angka yang mereka klaim: **73,7 persen di DeepSWE v1.1**, **76,2 di BankerToolBench**, **61,7 di OSWorld V2**, **29,6 di Agents Last Exam**, dan **82 persen di CyberGym**. Untuk OSWorld V2 dan ALE mereka mengklaim peringkat pertama di antara model China.

Kecepatannya diklaim mencapai **200+ token per detik** untuk output, dengan median P50 konsisten di **170+ TPS**, dan biaya pemakaian turun **70 persen** dibanding pendahulunya. Harganya flat: **0,15 dolar per juta token input**, **0,60 dolar output**, dan **0,015 dolar untuk cached input**.

Satu detail yang mudah terlewat: MiniMax menyebut Space Bunny, model yang beroperasi anonim dan memproses lebih dari **200 triliun token**, sebagai versi awal M3.1 Flash. Bobot model disebut akan dirilis belakangan, jadi untuk sekarang aksesnya lewat API, M Plan, dan MiniMax Code.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan angka benchmark mana pun, tapi kombinasi dua hal yang muncul berbarengan: DeepSeek membuka mesin inferensinya di hari yang sama ketika DHS memerintahkan model itu disingkirkan dari sistem lembaga sipil AS.

Bagi saya itu menunjukkan satu hal yang jarang diakui, yaitu keterbukaan kode tidak otomatis menyelesaikan soal kepercayaan. Kamu bisa membaca seluruh DeepInfer, memeriksa kernel-nya, menjalankan benchmark-nya sendiri, dan tetap ada pertanyaan yang tidak bisa dijawab kode: ke mana data yang lewat, dan siapa yang bisa memintanya. Dua hal itu berjalan di jalur berbeda.

Soal esai Kiehl, saya setuju lebih dari yang saya kira. Saya ngga pernah bisa menikmati pekerjaan yang seluruhnya saya serahkan ke mesin, karena bagian yang menyenangkan justru ada di momen ketika saya ngga paham dan kemudian jadi paham. Kalau bagian itu dihapus, yang tersisa cuma mengawasi keluaran.

Tapi ada tapinya. Posisi itu mudah dipertahankan kalau kamu punya waktu luang di akhir pekan. Untuk orang yang diukur dari kecepatan kirim fitur, saran untuk menikmati proses terdengar seperti kemewahan. Saya ngga punya jawaban rapi untuk itu, dan saya rasa Kiehl juga tidak sedang mencoba memberikannya.

Soal WhatsApp, bagian yang paling mengganggu saya bukan isi instruksinya, tapi bentuknya. Perusahaan boleh saja melarang chatbot-nya memberi opini hukum, itu wajar. Yang beda adalah menyembunyikan keberadaan regulator dari orang yang sedang kehabisan jalan. Itu bukan kehati-hatian, itu pemilihan informasi.

Kalau soal OpenBSD dan Wine, saya cuma senang saja. Tidak ada analisis besar di situ. Kadang berita teknologi terbaik adalah orang-orang yang mengerjakan sesuatu yang sulit hanya karena penasaran apakah bisa.

Kalian sendiri bagaimana: masih ada hal teknis yang kalian kerjakan murni karena ingin tahu, bukan karena ada yang membayar?

## 🔗 Sumber

- [DeepInfer — GitHub DeepSeek-AI](https://github.com/deepseek-ai/DeepInfer)
- [It is still OK to enjoy programming — Chris Kiehl](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming)
- [WhatsApp hidden AI instructions — redact.dev](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions)
- [emulators/wine — openbsd-ports milis](https://marc.info/?l=openbsd-ports&m=179236125692175)
- [OpenBSD 8.0](https://www.openbsd.org/80.html)
- [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f)
- [US banning Chinese AI DeepSeek from government agency IT systems — Reuters](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/)
- [Hacker News](https://news.ycombinator.com/)
