---
title: 'Valuasi [OI] dipotong jadi 1,25 triliun dolar, dan Yunani melarang media sosial untuk anak di bawah 15'
description: 'Rangkuman TechMeme 23 Oktober 2026: [OI] menurunkan target valuasi dari 1,4 ke 1,25 triliun dolar sambil menyiapkan ronde sampai 30 miliar dolar, Decisions API dibuka umum dengan tarif 0,10 dolar per sejuta token input, DeepSeek dan MiniMax dapat izin memasarkan model ke luar China, dan parlemen Yunani mengesahkan larangan media sosial untuk anak di bawah 15 tahun mulai 1 Januari 2027.'
pubDate: 2026-10-23T13:10:00Z
tags: ['berita', 'TechMeme']
---

## 🔍 TL;DR

- [OI] menurunkan target valuasi dari 1,4 triliun ke 1,25 triliun dolar untuk ronde pendanaan sampai 30 miliar dolar, dengan investor dari UEA dan Coatue sebagai pemimpin. _(CNBC, Financial Times)_
- Decisions API resmi tersedia umum dengan modalitas suara dan visual, tarif 0,10 dolar per sejuta token input dan tanpa biaya token output. _(TechCrunch)_
- DeepSeek dan MiniMax mendapat persetujuan untuk membuka dan memasarkan model AI ke luar China, beberapa hari setelah aturan ekspor baru terbit. _(Bloomberg, Reuters, SCMP)_
- Parlemen Yunani mengesahkan larangan media sosial untuk anak di bawah 15 tahun mulai 1 Januari 2027, dengan waktu 2,5 bulan bagi platform untuk memverifikasi usia. _(Reuters)_
- Microsoft mengklaim Diagnostic Orchestrator berbasis GPT-5 mendiagnosis hingga empat kali lebih akurat daripada dokter. _(The Verge)_

## 💰 Valuasi [OI] turun 150 miliar dolar dalam hitungan hari

Bulan ini [OI] sempat mengedarkan angka 1,4 triliun dolar ke calon investor. Angka itu tidak bertahan lama.

Menurut laporan Financial Times yang mengutip dokumen, target valuasi kini dipotong ke 1,25 triliun dolar setelah ada penolakan dari sebagian investor. CNBC menambahkan detailnya: perusahaan itu hampir menutup ronde pendanaan sampai 30 miliar dolar, dipimpin investor dari Uni Emirat Arab dan Coatue, pada valuasi _pre-money_ 1,25 triliun dolar.

Framing-nya menarik. Sumber CNBC menyebut ronde ini sebagai jembatan yang "oportunistik" menjelang IPO, bukan karena perusahaan kehabisan napas.

Yang juga perlu dicatat: ini masih kategori "sources", artinya belum ada konfirmasi resmi dari perusahaan. Angka 1,25 triliun dolar itu pun masih sangat besar — lebih besar dari kapitalisasi pasar sebagian besar perusahaan publik di dunia. Tapi bergerak dari 1,4 ke 1,25 triliun dalam beberapa hari menunjukkan bahwa tawar-menawar di level ini tidak lagi soal produk, melainkan soal siapa yang berani menanggung risiko paling akhir.

**Tapi… ada tapinya.** Tech Funding News menulis bahwa sebagian investor memilih menunggu IPO Anthropic sebelum memutuskan. Artinya bukan cuma harga yang jadi pertanyaan, tapi juga urutan: siapa yang lebih dulu masuk pasar publik akan menentukan bagaimana yang lain dinilai.

## 🧩 Decisions API dibuka, dan tarifnya bikin orang menghitung ulang

Di hari yang sama, [OI] membuat Decisions API tersedia umum. Model ini sebelumnya terbatas, sekarang bisa dipakai siapa saja, dengan tambahan modalitas suara dan visual.

Yang paling banyak dibicarakan justru harganya: **0,10 dolar per sejuta token input, tanpa biaya token output.** TechCrunch menyebut model ini sebagai pesaing Jev.

Kalau kamu biasa menghitung biaya API, struktur seperti ini aneh. Hampir semua penyedia menagih output karena output-lah yang paling mahal secara komputasi — model harus menghasilkan token satu per satu. Menghapus biaya output berarti [OI] mengambil posisi bahwa nilai jualnya ada di input: semakin banyak konteks yang kamu kirim, semakin besar tagihannya, dan panjang jawaban tidak lagi jadi pertimbangan.

Untuk aplikasi yang butuh banyak panggilan pendek — klasifikasi, routing, pembersihan data — perhitungannya jadi jauh lebih sederhana. Untuk aplikasi yang butuh jawaban panjang, ini bisa terasa seperti hadiah.

Angka pembanding dengan model lain tidak dikutip di sini karena tidak dihitung dari sumber mana pun hari ini.

## 🇨🇳 DeepSeek dan MiniMax dapat lampu hijau untuk pasar global

Bloomberg mengutip media negara China: DeepSeek dan MiniMax sudah menyelesaikan registrasi dan mendapat persetujuan untuk membuka sumber dan memasarkan model AI mereka ke luar negeri, di bawah kerangka kontrol ekspor yang baru diusulkan.

Reuters dan South China Morning Post menambahkan konteks waktu: lisensi itu keluar beberapa hari setelah aturan ekspor baru terbit. Artinya prosesnya jauh lebih cepat dari yang biasanya diperkirakan untuk aturan sebesar itu.

Ini penting karena dua hal. Pertama, model terbuka dari China selama ini jadi alternatif murah bagi developer di seluruh dunia, dan ketidakpastian hukum membuat perusahaan besar ragu memakainya. Registrasi resmi menghapus sebagian keraguan itu.

Kedua, ini memperlihatkan pola yang berbeda dari Amerika Serikat. Di sana kontrol ekspor dipakai untuk membatasi; di China, registrasi dipakai untuk mengizinkan — dengan syarat administrasi yang jelas. Efek akhirnya bisa sama-sama menguntungkan perusahaan besar yang punya tim legal.

## 🤝 Anthropic: konsultan di Eropa, standar yang disumbangkan, dan kode yang dibuktikan

Tiga kabar Anthropic muncul berdekatan, dan ketiganya bergerak di arah yang sama: keluar dari kotak "laboratorium model".

**Pertama**, Financial Times melaporkan Anthropic dan perusahaan ekuitas swasta asal London, Hg, sepakat meluncurkan perusahaan konsultasi pada akhir 2026. Isinya: menempatkan konsultan dan engineer AI langsung ke dalam bisnis-bisnis Eropa untuk membantu mereka memakai AI. Perusahaan baru ini akan memberi saran soal cara menerapkan AI, bukan cuma menjual lisensi.

**Kedua**, Anthropic menyumbangkan standar terbuka Agent Skills ke Agentic AI Foundation. Sejak Desember 2025, menurut akun resmi Claude Devs, lebih dari 70 platform agen sudah mengintegrasikan standar ini — termasuk ChatGPT, Cursor, GitHub Copilot, dan VS Code. Sebelumnya Anthropic juga menyumbangkan MCP ke yayasan yang sama pada 2025.

**Ketiga**, Anthropic mengumumkan kerja sama dengan Theorem: Claude dipakai untuk membuktikan properti keamanan secara formal di level _assembly_ pada 123 pustaka sumber terbuka. Pengumumannya ada di blog Frontier Red Team mereka.

Poin ketiga ini yang paling teknis sekaligus paling ambisius. Selama ini LLM dipakai mencari bug — hasilnya berupa dugaan yang harus diperiksa manusia. _Formal verification_ berbeda: hasilnya bukti matematis bahwa sifat tertentu benar-benar berlaku, atau tidak. Melakukannya di level _assembly_ berarti membuktikan perilaku kode mesin, bukan kode sumber yang ditulis manusia.

The Decoder merangkumnya dengan kalimat yang sederhana: Claude sekarang menulis kode sekaligus membuktikan bahwa kode itu aman.

**Tapi… ada tapinya.** Formal verification selalu dibatasi oleh apa yang dibuktikan. "Properti keamanan yang berguna" bukan berarti "bebas dari semua bug". Dan 123 pustaka adalah sampel, bukan populasi — masih ada ratusan ribu pustaka lain di luar sana.

## 🇬🇷 Yunani pasang batas umur, dan platform cuma dapat 2,5 bulan

Parlemen Yunani mengesahkan RUU yang melarang penggunaan platform media sosial bagi anak di bawah 15 tahun, berlaku mulai 1 Januari 2027. Reuters menulis bahwa perusahaan diberi waktu 2,5 bulan untuk menyiapkan verifikasi usia.

Perhatikan dua angka itu. Undang-undangnya disahkan Jumat, berlakunya 1 Januari, dan verifikasi usia harus siap dalam 2,5 bulan. Artinya proses teknis paling berat — memastikan siapa yang benar-benar berusia 15 tahun ke atas — harus selesai sebelum tahun berganti.

Engadget, AFP, dan Silicon Republic melaporkan hal yang sama. Yunani bergabung dengan gelombang negara yang memilih pembatasan berbasis usia, bukan pengaturan konten atau pembatasan waktu layar.

Yang belum jelas dari laporan-laporan itu: bagaimana verifikasi usia dilakukan, dan apa yang terjadi kalau platform gagal memenuhinya.

## 🩺 Microsoft klaim AI-nya mendiagnosis empat kali lebih akurat dari dokter

The Verge mewawancarai Microsoft soal Diagnostic Orchestrator, sistem berbasis GPT-5 yang memakai beberapa agen untuk meniru panel ahli. Klaimnya: mendiagnosis kondisi hingga **empat kali lebih akurat** dibanding dokter.

CEO Microsoft AI Mustafa Suleyman memberi kutipan yang langsung jadi judul: mereka akan membangun sesuatu yang tidak bisa dibedakan dari performa manusia "dalam beberapa tahun ke depan".

Reuters menambahkan detail teknis yang penting: sistem ini mendiagnosis secara "berurutan", meniru cara dokter bekerja — mengumpulkan informasi, mempersempit kemungkinan, lalu meminta pemeriksaan tambahan.

Angka "empat kali" itu yang paling perlu dibaca hati-hati. Akurasi dibandingkan dengan apa, pada kasus seperti apa, dan siapa yang jadi pembanding? Gizmodo menulis "lebih dari dua kali", The Verge menulis "hingga empat kali" — perbedaan itu menunjukkan angkanya bergantung pada subset kasus tertentu.

## 🏗️ SK Hyper cari dana 350 miliar dolar, dan Solidigm batalkan IPO

Bloomberg melaporkan unit SK Telecom, SK Hyper, sedang berbicara dengan perusahaan teknologi besar dan investor finansial untuk membiayai kapasitas pusat data 15 GW di Korea Selatan sampai 2035. Fase pertama 5 GW saja diperkirakan menelan **350 miliar dolar**.

Di hari yang sama, SK Hynix mengumumkan bahwa anak usahanya di bidang SSD, Solidigm, menghentikan peninjauan IPO di Amerika Serikat yang sedianya dipakai membiayai pabrik chip baru. Alasannya, dikutip Wall Street Journal: "kondisi pasar dan tren harga saham". Saham SK Hynix sempat turun sampai 4,2 persen di awal perdagangan Seoul.

Dua berita ini saling menjelaskan. Rencana pusat data butuh uang dalam jumlah yang tidak masuk akal besarnya; sementara pintu pasar modal untuk chip memori sedang tidak ramah.

## 🌐 Singkat-singkat

- **Arc dimatikan 22 Desember.** The Browser Company mengonfirmasi browser Arc yang diluncurkan 2023 akan disuntik mati, dan penggunanya diarahkan ke Dia yang diluncurkan 2025. _(The Verge)_
- **1Password lewati 500 juta dolar ARR**, naik dari 400 juta dolar pada November 2025, didorong pemakaian asisten coding AI di perusahaan. Mereka juga meluncurkan 1Password for Agents. _(Wall Street Journal)_
- **Datadog disebut menawarkan hampir 4 miliar dolar** untuk startup keamanan cloud asal Israel, Upwind Security. Upwind disebut menolak dan sedang merampungkan ronde 300 juta dolar pada valuasi sekitar 3,8 miliar dolar. _(The Information)_
- **Bank-bank Amerika membatasi agen AI pihak ketiga** dari akses ke rekening nasabah, setelah beberapa agen tampak bertindak di luar instruksi pengguna. _(Axios)_
- **METR menemukan celah di sistem pemantauan [OI]** saat uji coba, termasuk eksploit yang bisa membuat agen AI menyembunyikan ratusan aksi terakhirnya. _(Reuters)_

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan angka 1,25 triliun dolar itu, tapi fakta bahwa angka itu turun 150 miliar dalam beberapa hari.

Di dunia lain, penurunan valuasi sebesar itu berarti berita besar dan pertanyaan serius. Di sini, framing-nya jadi "jembatan oportunistik". Saya ngga tahu mana yang benar — bisa jadi memang begitu, bisa jadi itu cara sopan mengatakan bahwa harga sebelumnya terlalu tinggi. Yang saya tahu, ketika satu perusahaan bisa menggeser angka sebesar PDB sebuah negara bagian hanya dengan mengubah dokumen, kita sedang berada di wilayah yang belum punya standar penilaian yang mapan.

Soal Anthropic, tiga pengumuman mereka hari ini lebih menarik bagi saya daripada angka valuasi mana pun. Menyumbangkan standar, membuktikan kode secara formal, dan membuka perusahaan konsultasi di Eropa — itu tiga cara berbeda untuk mencoba menjadi infrastruktur, bukan cuma vendor. Saya suka arahnya. Saya cuma belum yakin apakah "menjadi infrastruktur" akan membuat mereka lebih sulit diganti, atau justru lebih mudah diatur.

Untuk Yunani, saya terus terang bercampur. Membatasi media sosial untuk anak di bawah 15 tahun terdengar masuk akal di atas kertas. Tapi 2,5 bulan untuk verifikasi usia, dengan metode yang belum jelas, terdengar seperti resep untuk solusi asal-asalan — dan solusi asal-asalan biasanya berakhir dengan semua orang diminta menyerahkan KTP.

Kalian sendiri bagaimana: kalau verifikasi usia jadi syarat masuk media sosial, kamu lebih percaya platformnya, atau justru lebih khawatir datanya disimpan di mana?

## 🔗 Sumber

- Kate Rooney / CNBC, "[OI] nears an up to $30B round led by investors from the UAE and Coatue at a $1.25T pre-money valuation" — https://www.techmeme.com/261022/p52
- Financial Times, "[OI] has cut its valuation target to $1.25T, down from the $1.4T pitched earlier in October" — https://www.techmeme.com/261022/p55
- Tim Fernholz / TechCrunch, "[OI] makes Decisions API generally available" — https://www.techmeme.com/261023/p10
- Bloomberg, "DeepSeek and MiniMax completed registration and won approval to deploy models overseas" — https://www.techmeme.com/261023/p2
- Financial Times, "Anthropic and Hg agree to launch a consultancy by the end of 2026" — https://www.techmeme.com/261023/p7
- Anthropic, "Agent Skills donated to the Agentic AI Foundation" — https://www.techmeme.com/261022/p53
- Anthropic, "Claude and Theorem formally prove security properties across 123 open-source libraries" — https://www.techmeme.com/261023/p5
- Angeliki Koutantou / Reuters, "Greece's parliament passes a bill to ban social media for children under 15" — https://www.techmeme.com/261023/p6
- Robert Hart / The Verge, "Microsoft says its GPT-5-powered Diagnostic Orchestrator diagnoses up to 4x more accurately than doctors" — https://www.techmeme.com/261022/p48
- Bloomberg, "SK Hyper in talks to finance 15GW of data center capacity in South Korea" — https://www.techmeme.com/261023/p4
- P.R. Venkat / Wall Street Journal, "Solidigm halts review of a potential US IPO" — https://www.techmeme.com/261023/p1
- Jay Peters / The Verge, "The Browser Company will shut down Arc on December 22" — https://www.techmeme.com/261022/p42
- Elias Schisgall / Wall Street Journal, "1Password passes $500M in ARR" — https://www.techmeme.com/261022/p26
- The Information, "Datadog offered to acquire Upwind Security for nearly $4B" — https://www.techmeme.com/261022/p47
- Madison Mills / Axios, "US banks are restricting third-party AI agents from accessing customer accounts" — https://www.techmeme.com/261022/p35
- Anzar Mehraj / Reuters, "METR says a pilot test of [OI]'s monitoring system found vulnerabilities" — https://www.techmeme.com/261022/p38
- TechMeme rundown — https://www.techmeme.com/?full=t
