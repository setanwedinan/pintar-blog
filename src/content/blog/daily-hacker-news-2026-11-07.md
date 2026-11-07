---
title: 'Libghostty 1.0, dan terminal yang diam-diam dipakai 12,5 juta orang'
description: 'Rangkuman Hacker News 7 November 2026: libghostty mencapai versi 1.0 dengan ABI stabil, trik model murah yang menyewa Opus untuk dapat akurasi setara dengan biaya seperempat, graf pengetahuan pribadi yang sudah ada di setiap Mac sejak 2022, FAA yang akhirnya membuang disket, dan settlement RealPage hampir 360 juta dolar.'
pubDate: 2026-11-07T13:00:00Z
tags: ['berita', 'Hacker News', 'open source', 'AI']
---

## 🔍 TL;DR

- `libghostty-vt` 1.0 resmi dirilis 6 November, artinya library dan C ABI-nya sekarang stabil dan ikut semantic versioning. Terminal di JetBrains IDE sudah pindah ke sana, dan JetBrains melaporkan **12,5 juta pengguna aktif** _(mitchellh.com)_
- Neovim sudah menyetujui pull request yang mengganti `libvterm` dengan `libghostty-vt`, sekaligus menutup issue berumur **10 tahun** soal scrollback yang tidak ikut reflow saat resize _(GitHub)_
- Hightouch mengukur model keputusan murah untuk menggugurkan hasil identity resolution: Jev sendiri 88,8–97,3 persen akurat, tapi Jev yang boleh bertanya ke Claude Opus mencapai akurasi frontier dengan biaya **lebih dari 4 kali lebih murah** _(hightouch.com)_
- Setiap Mac sejak macOS 13 membawa dua daemon yang membangun graf tentang siapa kamu, siapa yang kamu kenal, dan bagaimana mereka berhubungan. Dokumentasinya cuma satu man page _(8rank.ai)_
- FAA akan memensiunkan disket di **lebih dari 400 fasilitas** ATC pada akhir 2028, dan RealPage menutup kasus harga sewa algoritmik dengan hampir **360 juta dolar** untuk penyewa _(Reuters, Multifamily Dive)_

## 👻 1.0, dan arti kata stabil

Mitchell Hashimoto menulis pengumuman `libghostty` 1.0 pada 6 November. Yang naik versi adalah `libghostty-vt`, library C portabel untuk emulasi terminal yang diambil langsung dari inti Ghostty. Angka 1.0 di sini bukan selebrasi kosong: artinya library dan C ABI-nya sekarang mengikuti semantic versioning dengan janji kompatibilitas ABI yang ketat, sehingga distributor bisa mengemasnya dan pengembang aplikasi bisa menautkannya secara dinamis tanpa takut rilis berikutnya mematahkan biner mereka.

Setahun lalu, tulis Hashimoto, C API-nya belum ada dan tidak ada konsumen selain Ghostty sendiri. Sekarang API itu sudah jadi emulator terminal lengkap, jalan di produksi untuk jutaan orang di ratusan produk, dan punya kebijakan stabilitas ABI yang benar-benar ditegakkan.

Bukti pemakaiannya yang paling mudah dicek: terminal di JetBrains IDE sekarang berjalan di atas libghostty. Artinya setiap pengguna IntelliJ, PyCharm, dan GoLand. JetBrains melaporkan angka 12,5 juta pengguna aktif berulang, dan itu baru satu konsumen.

Daftar sisanya panjang dan mengejutkan untuk proyek yang setahun lalu cuma modul Zig. Neovim punya pull request yang sudah disetujui untuk mengganti `libvterm` dengan `libghostty-vt`, dan itu menutup issue sepuluh tahun soal scrollback yang tidak ikut menyesuaikan diri saat jendela di-resize. Maintainer-nya menunggu tagged release supaya distribusi bisa mengemas dependensi secara terpisah, dan rilis 1.0 inilah yang membuka jalannya.

KDE sedang bereksperimen dengan pengganti Konsole bernama Kwi yang dibangun di atasnya. Turborepo memakainya untuk merender output task di TUI. devenv memakainya untuk menjalankan shell. Antithesis memakainya untuk fuzzing program TUI dan menemukan bug nyata di btop dan beberapa program lain. Ada Ghostel untuk Emacs, ghostty-web sebagai build WASM dengan API kompatibel Xterm.js, OrbStack yang menyematkannya di produk komersial, dan gelombang terminal baru serta alat coding agentik seperti herdr dan cmux yang memilih memakai library ini daripada menulis emulator sendiri.

Angka yang paling jujur ada di catatan kaki: menurut Hashimoto, jumlah orang yang memakai terminal bertenaga libghostty sekarang jauh lebih banyak daripada yang memakai aplikasi Ghostty. Dan dia menambahkan satu kalimat yang akhir-akhir ini terasa seperti pernyataan sikap: tulisan itu dikerjakan sendiri, tanpa bantuan AI.

## 🧮 Model murah yang boleh bertanya ke model mahal

Hightouch mempublikasikan eksperimen mereka pada 4 November: bisakah model keputusan yang cepat dan murah seperti Jev dan GPT-6 Luna menggugurkan hasil identity resolution sebaik model frontier?

Masalahnya nyata dan membosankan. Identity resolution adalah proses memetakan catatan data ke orang sungguhan. Kamu punya set catatan dan harus menentukan identitas mana yang mewakili satu orang, tanpa dua identitas menunjuk orang yang sama. Kesalahan paling mahal bukan yang gagal menggabungkan, tapi over-merging: dua orang berbeda dilebur jadi satu, dan seluruh analisis di atasnya jadi sampah.

Hasil pengukuran mereka: kedua model keputusan bekerja lumayan di luar kotak, dengan akurasi 88,8 sampai 97,3 persen. Luna lebih baik daripada Jev di kondisi default, tapi selisihnya hilang begitu kasusnya makin sulit. Model frontier tetap lebih akurat, dan model keputusan tertinggal sekitar 6 poin persentase di benchmark yang lebih berat.

Yang membuat eksperimen ini menarik ada di kalibrasi. Kesalahan Jev sebagian besar datang bersama keyakinan rendah, sedangkan kesalahan Luna sering datang dengan keyakinan tinggi. Artinya Jev lebih jujur soal ketidaktahuannya. Dari situ muncul triknya: Jev menangani mayoritas kasus, lalu melempar yang dia sendiri ragu ke Opus. Kombinasi itu mendekati akurasi Opus dengan biaya lebih dari empat kali lebih murah.

Angka biayanya masuk akal untuk dipakai di produksi: 0,05 sampai 0,10 dolar per 1.000 identitas, waktu jawab sekitar 0,15 detik, dan sampai 90 kali lebih murah serta lebih dari 10 kali lebih cepat daripada model frontier.

Ini pola yang pelan-pelan jadi standar. Bukan satu model besar untuk semua hal, tapi model murah yang tahu kapan harus minta tolong. Yang menentukan hasilnya bukan kecerdasan model kecilnya, melainkan seberapa jujur dia soal keyakinannya sendiri.

## 🧠 Graf tentang dirimu, dan satu man page

Tim riset 8rank.ai menerbitkan analisis atas apa yang mereka sebut Personal Knowledge Graph milik Apple. Temuannya sederhana dan cukup mengganggu: setiap Mac sejak macOS 13 pada 2022 membawa sepasang daemon yang tugasnya membangun graf tentang kamu dan orang-orang di sekitarmu.

Satu di antaranya, `knowledgeconstructiond`, punya dokumentasi resmi berupa satu man page. Isinya: daemon yang menganalisis konten di perangkat untuk membangun knowledge graph serbaguna yang merepresentasikan perangkat dan penggunanya, bekerja bersama `intelligenceplatformd` yang mengerjakan sebagian tugas berat.

Datanya dikumpulkan dari Contacts, Calendar, Photos, Messages, Mail, lokasi, Screen Time, dan sejumlah sinyal perilaku lain. Semua diproses di perangkat, bukan di server. Graf itu disimpan sebagai store yang bisa di-query dan dipakai model bahasa untuk mengambil konteks. Apple sendiri pernah menerbitkan paper soal teknik pembentukannya pada 2023, tapi hampir tidak ada penjelasan soal bagaimana sistem itu terpasang di macOS, versi mana yang menjalankannya, dan apa saja yang disimpulkan darinya.

Yang paling tidak didokumentasikan adalah inferensi kekerabatan atau kinship: sistem itu menyimpulkan bagaimana orang-orang di sekitar kamu berhubungan satu sama lain. Tim 8rank juga menemukan bahwa setiap aplikasi yang terpasang ditulis dalam plaintext bersama token berupa SHA-256 tanpa salt dari identifier aplikasi yang sama, sehingga halaman mereka bisa menghitung ulang hash-nya di browser dan menunjukkan kecocokannya.

Mereka merilis dashboard lokal open source bernama iKnow supaya kamu bisa membaca isi graf milikmu sendiri, dan menutup tulisan dengan latihan imajinatif: apa yang terjadi kalau basis pengetahuan sepersonal itu jatuh ke tangan yang salah. Satu detail teknis yang mereka catat: di macOS 27, yang rilis 14 September 2026, setelah upgrade ke 27.0.1 graf itu menarik kembali sebagian besar baris yang dibangun dari Contacts, Calendar, Siri Suggestions, Family Sharing, dan katalog aplikasi, lalu membangunnya ulang dalam sehari.

## ✈️ Disket, 400 fasilitas, dan 2028

Reuters melaporkan bahwa FAA akan mengganti disket yang masih dipakai untuk informasi cuaca dan data operasional penting di lebih dari 400 fasilitas air traffic control di seluruh Amerika Serikat, paling lambat akhir 2028. Pengumumannya disampaikan Menteri Transportasi Sean Duffy pada Kamis.

Penggantinya bernama Enterprise Information Display System, yang akan menggabungkan empat sistem terpisah dari era 1980-an ke satu dashboard digital. Tujuannya bukan kecanggihan, tapi hal yang lebih mendasar: controller bisa melihat peringatan cuaca, gangguan, dan perubahan ruang udara di satu tempat, bukan berpindah-pindah layar.

Konteksnya penting. Laporan Government Accountability Office pada 2024 menemukan 90 persen infrastruktur ATC kritikal negara itu sudah jatuh tempo atau lewat jatuh tempo untuk peremajaan teknologi. FAA juga masih memakai komputer berusia puluhan tahun dan, menurut laporan Reuters, membeli suku cadang pengganti lewat eBay. Peralihan dari strip penerbangan berbasis kertas ke pelacakan digital juga masih berjalan dan diperkirakan rampung sekitar 2028.

Orang ramai membahas disketnya karena itu bagian yang lucu. Bagian yang tidak lucu: yang diganti adalah medium penyimpanannya, sementara persoalan sesungguhnya ada di seluruh rantai sistem yang menua bersamaan.

## 🏠 360 juta dolar, dan kata hampir

Kasus harga sewa algoritmik RealPage mencapai babak penutup. Multifamily Dive melaporkan pada 3 November bahwa pengadilan federal menyetujui perjanjian penyelesaian dengan nilai hampir 360 juta dolar untuk penyewa.

Yang menarik justru kalimat penutup dari seorang pakar hukum yang dikutip dalam artikel itu: ini belum tentu kata terakhir dalam litigasi harga algoritmik. Artinya penyelesaian ini menutup satu bab, bukan seluruh persoalan soal apakah menyetel harga lewat algoritma bersama itu legal.

Bagi penyewa, angkanya terdengar besar sampai dibagi. Dan bagi industri, presedennya lebih penting daripada total dolarnya: sekarang ada harga yang tercatat untuk praktik yang dulu diperdebatkan sebagai sekadar software analitik.

## 📝 Catatan pendek dari meja sebelah

Need for Speed Underground 2 bisa dimainkan di browser lewat nfsu2.xyz, dan itu muncul di urutan teratas dengan 198 poin. Ada juga proyek Upload Your RAM yang mengumpulkan 190 poin dan 143 komentar, yang judulnya saja sudah cukup menjelaskan leluconnya. Sementara itu Anthropic menerbitkan tulisan riset soal komponen-komponen agent memory, dan PDF PostgreSQL Internals dari Postgres Pro masih rutin muncul di daftar.

Satu hal yang sengaja dilewat: kabar Tesla menghentikan produksi Cybertruck. Itu sudah dibahas di post TechMeme kemarin, dan mengulanginya lagi cuma karena hari ini dia naik ke puncak Hacker News dengan 1.060 poin dan 1.911 komentar tidak menambah apa-apa.

## 🧾 Tapi… ada tapinya

Libghostty 1.0 adalah cerita keberhasilan yang rapi, dan justru kerapian itu yang bikin rada curiga saat membacanya. Angka 12,5 juta itu milik JetBrains, bukan milik komunitas, dan sebagian besar konsumen lain tidak melaporkan pemakaian sama sekali. Jadi "lebih banyak orang memakai terminal bertenaga libghostty daripada yang memakai Ghostty" adalah estimasi yang jujur diakui sebagai kasar oleh penulisnya sendiri.

Untuk eksperimen Hightouch, tapinya lebih teknis: semua angka itu berasal dari satu tugas, yaitu menggugurkan hasil identity resolution. Kalibrasi Jev yang bagus di tugas ini belum tentu terbawa ke tugas lain, dan model keputusan yang dipakai adalah model spesifik pada satu waktu. Pola hybrid-nya yang layak diingat, bukan angka 4 kali lipatnya.

Dan soal graf Apple, ada satu hal yang sering terlewat dalam diskusi seperti ini: diproses di perangkat bukan berarti tidak dikumpulkan. Itu dua hal berbeda, dan yang kedua tetap terjadi.

## 🗣️ Pendapat saya

Yang membuat saya berhenti lama di daftar hari ini adalah libghostty, tapi bukan karena versi 1.0-nya. Yang menarik adalah pola yang dijelaskan Hashimoto: satu komponen kecil, dikerjakan dengan obsesi pada satu masalah yang dianggap selesai oleh orang lain, lalu tiba-tiba dipakai di mana-mana. Emulasi terminal itu bidang yang sejak lama dianggap beres. Ternyata tidak, dan buktinya adalah issue sepuluh tahun di Neovim yang baru bisa ditutup sekarang.

Saya suka cara proyek ini menua. Tidak ada peluncuran besar, tidak ada janji revolusi. Cuma ABI yang stabil, dokumentasi, dan sabar sampai orang lain mau memakainya. Dalam setahun, itu mengalahkan rilis fitur yang ramai diumumkan.

Soal graf Apple, saya ngga setuju pada dua reaksi yang sama-sama populer. Yang pertama panik berlebihan, seolah setiap Mac adalah alat mata-mata. Yang kedua santai berlebihan, seolah karena semuanya on-device maka tidak ada yang perlu ditanyakan. Yang mencurigakan bukan pengumpulannya, tapi ketiadaan dokumentasinya. Sistem sebesar itu, menyentuh kontak dan keluarga kamu, dan penjelasan resminya satu halaman man.

Dan soal FAA: 2028 itu dua tahun dari sekarang. Saya akan percaya angka itu setelah Enterprise Information Display System benar-benar jalan di fasilitas pertama, bukan setelah pengumumannya.

## 💬 Pertanyaan buat kalian

Kalau ada library kecil yang mengubah cara satu kategori software bekerja, apa yang menurut kalian bikin dia berhasil: kualitas teknisnya, atau kesabaran penulisnya menunggu orang lain sadar? Dan untuk yang pakai Mac, setelah tahu ada graf seperti ini di mesin kalian, kalian mau lihat isinya atau lebih baik tidak tahu?

## 🔗 Sumber

- [Libghostty 1.0 — Mitchell Hashimoto](https://mitchellh.com/writing/libghostty-1-0)
- [Diskusi Hacker News: Libghostty 1.0](https://news.ycombinator.com/item?id=50399933)
- [A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost — Hightouch](https://hightouch.com/blog/llm-judges-identity-resolution)
- [Diskusi Hacker News: LLM judges](https://news.ycombinator.com/item?id=50397429)
- [Anatomy of Apple Personal Knowledge Graph — 8rank.ai](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph)
- [Diskusi Hacker News: Apple knowledge graph](https://news.ycombinator.com/item?id=50403097)
- [US FAA says it will phase out floppy disks from air traffic control by 2028 — Reuters](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/)
- [FAA to eliminate floppy disks from air traffic control by 2028 — San Joaquin Valley Sun](https://sjvsun.com/u-s/faa-to-eliminate-floppy-disks-from-air-traffic-control-by-2028)
- [RealPage rent-pricing case wraps with nearly $360M to renters — Multifamily Dive](https://www.multifamilydive.com/news/realpage-rent-pricing-case-360m-renters/873553/)
- [Komponen agent memory — Anthropic Research](https://www.anthropic.com/research/components-of-agent-memory)
- [Proyek iKnow — GitHub](https://github.com/8rank/iKnow)
