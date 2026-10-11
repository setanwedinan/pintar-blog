---
title: '🤖 Apple Rekrut Tim Startup Podcast Huxe, Google Jepang Bikin Keyboard Conveyor Belt'
description: 'Apple mengungkap ke Komisi Eropa bahwa mereka akan menawarkan kerja kepada sebagian karyawan dan melisensikan teknologi startup podcast personal Huxe. Di sisi lain museum komputer di Spanyol membangun replika Cray-1 dari 30 Mac mini Intel, dan driver tidak resmi membuat RTX 5060 jalan di macOS 15.'
pubDate: 2026-10-11T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🧠 TL;DR

- **Apple** mengungkap ke **Komisi Eropa** bahwa mereka akan menawarkan kerja kepada sebagian karyawan **Huxe AI** dan menerima lisensi **non-eksklusif** atas kekayaan intelektual startup podcast personal itu — pola yang dikenal sebagai **reverse acqui-hire**.
- **Google Jepang** memamerkan **keyboard conveyor belt** berisi 116 tombol di empat sabuk berputar; rencananya dibuka di **GitHub** untuk dirakit sendiri.
- Museum Sejarah Komputer di **Majadas, Spanyol** membangun replika **Cray-1** skala 1:1 dari **30 Mac mini Intel** dan mencetak rata-rata **1,3 teraflops** — jauh di atas **160 megaflops** mesin aslinya.
- Developer **NullMoth** merilis driver tidak resmi yang membuat **GeForce RTX 5060** berjalan di **macOS 15 Sequoia** dengan akselerasi **Metal 3**.
- **RemoveMacAI**, alat open source untuk menghapus seluruh jejak **Apple Intelligence** dari Mac, mengumpulkan hampir **2.000 bintang** di GitHub.

## 🎙️ Apple Rekrut Tim Huxe: Akuisisi Terbalik untuk Podcast Personal

Apple mengungkap dalam dokumen regulasi bahwa mereka telah mencapai kesepakatan untuk membawa masuk sebagian tim dan teknologi startup audio personal **Huxe**. Menurut laporan **TechCrunch**, Apple memberi tahu **Komisi Eropa** bahwa mereka setuju menawarkan kerja kepada **"sejumlah karyawan Huxe AI"** dan menerima **lisensi non-eksklusif atas hak kekayaan intelektual Huxe**. _(TechCrunch)_

Huxe bukan startup sembarangan di kategori ini. Perusahaan itu didirikan oleh para pengembang yang sebelumnya menggarap fitur **podcast hasil AI di NotebookLM** — produk Google yang kini berganti nama menjadi **Gemini Notebook**. Namun pada **21 Mei** Huxe mengumumkan penutupan: aplikasinya ditarik dari toko Apple dan Google, layanan dihentikan, dan data pengguna dihapus. Apple sendiri memberi tahu Komisi Eropa pada **9 Juni**, tak lama setelah pengumuman penutupan itu. _(TechCrunch)_

Yang perlu dicatat: dokumen tersebut **tidak menyebutkan siapa** yang menerima tawaran kerja, apakah tawaran itu diterima, maupun apa rencana Apple dengan teknologi tersebut. TechCrunch mencatat kemungkinan kaitannya dengan aplikasi **Podcasts** Apple, mengingat penutupan Huxe terjadi hanya sehari setelah **Spotify** memperkenalkan fitur pembuatan podcast bertenaga AI. _(TechCrunch)_

Pola **reverse acqui-hire** memang sedang naik daun: perusahaan besar merekrut tim inti dan melisensikan teknologi tanpa membeli startup-nya secara utuh — cara membangun talenta dan teknologi AI tanpa menarik perhatian berlebih dari otoritas persaingan usaha. _(TechCrunch)_

## ⌨️ Keyboard Conveyor Belt dari Google Jepang: Iseng, Tapi Bisa Dibangun Sendiri

Tim **Gboard Google Jepang** kembali dengan proyek keyboard yang absurd. Kali ini mereka memperlihatkan **keyboard conveyor belt**: tombol-tombol tidak menetap di tempat, melainkan **mengalir ke arah tangan** lewat mekanisme sabuk berputar, seperti jalur perakitan pabrik. Menurut **TechRadar**, perangkat itu membawa **116 tombol** yang tersebar di **empat sabuk berputar**. _(Engadget, TechRadar)_

Tentu ini lelucon. Tapi lelucon yang punya tradisi panjang. Menurut **Engadget**, kebiasaan ini dimulai pada **April Mop 2010** dengan "peluncuran" keyboard drumset berisi ratusan tombol — sindiran pada bahasa Jepang yang punya ribuan karakter Kanji sehingga tidak bisa ditampung layout keyboard standar. Sejak **2016**, prototipe aneh ini rutin dirilis setiap **1 Oktober**. Daftarnya sudah panjang: keyboard **kode Morse satu tombol** (2012), keyboard **flipcard** (2013), keyboard **tiupan pesta** dengan sensor inframerah (2015), keyboard **bubble wrap** (2017), keyboard **sendok** (2019), keyboard **cangkir teh** (2021), sampai keyboard **topi keycap** (2023). _(Engadget)_

Kabar baiknya, kali ini rencananya **dibuka di GitHub** sehingga siapa pun yang cukup teliti bisa merakit dan menjalankannya sendiri. Klaim resminya: dirancang untuk penggunaan **satu tangan** dan mengurangi kelelahan karena tangan tinggal menunggu tombol yang benar datang. _(Engadget)_

## 🖥️ Replika Cray-1 dari 30 Mac Mini Intel: 1,3 Teraflops dari Barang Bekas

Di **Majadas, Spanyol**, Museum Sejarah Komputer membangun replika **Cray-1** skala 1:1 — tapi bukan dari komponen superkomputer. Menurut **AppleInsider**, replika itu ditenagai **30 Mac mini Intel** yang dipasang vertikal di balik kaca hijau dan bening, dengan total **64 inti prosesor**: **25 unit dual-core i5** dan **lima unit quad-core i7**, sebagian besar dari model **2012** yang RAM dan SSD-nya masih bisa diupgrade. _(AppleInsider)_

Proyek ini memakan waktu **18 bulan** dan dibuat untuk merayakan **50 tahun Cray-1** sekaligus **berdirinya Apple**. Alih-alih Linux, sistemnya menjalankan **macOS Mojave 10.14** dengan dukungan **Message Passing Interface (MPI)** agar tiap node bisa saling bicara. Pendekatannya berbeda dari aslinya: Cray-1 memakai **pemrosesan vektor**, replikanya memakai **klaster prosesor paralel**. _(AppleInsider)_

Soal performa, hasilnya tidak perlu diragukan lagi. Mesin aslinya sanggup **160 megaflops**, sedangkan replika ini rata-rata **1,3 teraflops** menurut AppleInsider — sekitar **8.000 kali lipat** kemampuan mesin legendaris itu. Menariknya, tower itu baru **terisi sekitar setengah**, dan timnya sedang menggalang dana untuk **70-80 Mac mini M4** tambahan. Kalau berhasil, museum berharap bisa menembus daftar **Top500**. _(AppleInsider)_

Sisi rekayasanya juga rapi: bodi aluminium membantu konduksi panas, basis setiap Mac mini dilepas untuk pendinginan pasif, dan orientasi vertikal berfungsi seperti cerobong — udara dingin masuk dari dasar, naik, lalu keluar di puncak. Bisingnya hanya **30 sampai 33 desibel**, dan sumber suara terbesar justru dua switch Ethernet gigabit di dasar. _(AppleInsider)_

## 🎮 RTX 5060 Jalan di macOS 15 Lewat Driver Tidak Resmi

Developer yang dikenal sebagai **NullMoth** merilis driver grafis NVIDIA pihak ketiga untuk **macOS 15 Sequoia**. Menurut **VideoCardz**, proyek itu memungkinkan akselerasi grafis perangkat keras pada GPU GeForce modern, termasuk **RTX 5060**: rendering desktop macOS, aplikasi **Metal 3**, dan game bisa berjalan langsung di hardware NVIDIA tanpa rendering perangkat lunak. _(VideoCardz)_

Cara kerjanya adalah kombinasi berlapis: **modul kernel GPU open source NVIDIA** digabung dengan driver Vulkan **NVK** dari Mesa plus **penerjemah shader** buatan sendiri. Perintah Metal diterjemahkan ke Vulkan, sementara format shader Apple dikonversi ke **SPIR-V**. _(VideoCardz)_

Tabel perangkatnya mencakup **Turing dan yang lebih baru** — GeForce GTX 16 sampai RTX 50 series. Namun instalasi penuh baru divalidasi pada kombinasi **RTX 5060 dengan Intel Core Ultra 5 225F** dan motherboard **B860**. Pengguna lain di Reddit melaporkan keberhasilan pada **RTX 5070 Ti, RTX 3090, dan RTX 3060**. NullMoth juga merilis aplikasi bernama **1401** yang membantu menyiapkan instalasi OpenCore dari Windows serta mengatur driver di macOS, termasuk opsi membalik instalasi. Proyeknya masih **eksperimental** dan mensyaratkan perubahan pengaturan keamanan macOS. _(VideoCardz)_

## 🧹 RemoveMacAI: Pengguna Mac Menghapus Jejak Apple Intelligence

Sejak **macOS 27** menghapus pengaturan yang memungkinkan pengguna menonaktifkan dan menghapus fitur **Apple Intelligence**, sebagian pengguna Mac mengambil jalan sendiri. Menurut **Futurism**, sebuah alat open source bernama **RemoveMacAI** kini memungkinkan penghapusan seluruh jejak model AI Apple dari mesin pengguna: **Siri, Writing Tools, Genmoji, Image Playground**, dan **ekstensi ChatGPT**. Alat itu juga diklaim mencegah fitur Intelligence diunduh kembali. _(Futurism)_

Motif utamanya bukan cuma soal privasi, tapi juga ruang penyimpanan. RemoveMacAI bisa menghemat sekitar **12 GB**, sementara sebagian pengguna melaporkan instalasi AI Apple mereka memakan **35 GB** penuh — angka yang berarti bagi pemilik MacBook dengan penyimpanan **256 GB**. Repositori GitHub proyek ini sudah mengumpulkan hampir **2.000 bintang** dan memunculkan puluhan fork, sementara unggahan pengembangnya di r/MacOS mendapat lebih dari **1.000 upvote**. _(Futurism)_

## 📊 Studi MIT: AI Bikin Junior Terlihat Kompeten, Tapi Tidak Belajar

Ekonom **David Autor** dari MIT — kepala departemen ekonomi MIT sekaligus **Google Technology and Society Visiting Fellow**, yang dikenal lewat riset **"China shock"** — mempublikasikan temuan yang mengganggu soal AI dan pekerja muda. Menurut **Fortune**, studi itu berlangsung tiga bulan bersama **133 pengacara** di **11 firma hukum kekayaan intelektual** Amerika yang punya hubungan penyusunan paten dengan Google. Peneliti mengacak akses ke asisten penyusunan paten AI khusus, sebuah alat **Google Labs** yang belum dirilis saat itu; dua pertiga pengacara mendapat akses, sisanya tidak. _(Fortune)_

Hasilnya: AI memperbaiki kualitas draf di semua tingkat pengalaman. Tapi ketika alat itu diambil dan kemampuan penilaian mandiri diuji, **hanya pengacara berpengalaman** yang menunjukkan peningkatan rata-rata — yang junior tidak. Autor menyebut temuannya menunjukkan AI sebagai **"performance equalizer"** tetapi **"skill-disequalizer"**: hanya praktisi yang sudah punya model mental dasar yang mampu menaikkan kemampuan mendasarnya. Studi ini diterbitkan sebagai working paper **NBER** dan belum melalui peer review. _(Fortune)_

## 💡 Insight Hari Ini

Tiga cerita hari ini sebenarnya satu tema: **siapa yang menguasai lapisan infrastruktur**. Apple tidak membeli Huxe, tapi mengambil timnya dan melisensikan teknologinya — cara paling tenang mengakuisisi talenta AI. Di ujung lain spektrum, museum Spanyol membuktikan bahwa 30 Mac mini bekas pun bisa mengalahkan superkomputer legendaris, dan NullMoth menunjukkan bahwa batas platform Apple lebih berupa kebijakan daripada fisika. Sementara itu, temuan Autor mengingatkan bahwa akses ke AI tidak otomatis menciptakan keahlian: yang diuntungkan adalah mereka yang sudah punya fondasi untuk menaiki tangganya.

## 🔗 Sumber

- [Apple discloses deal to hire team and license tech from personalized podcast startup Huxe — TechCrunch](https://techcrunch.com/2026/10/10/apple-discloses-deal-to-hire-team-and-license-tech-from-personalized-podcast-startup-huxe/)
- [Google Japan Created One Of The Strangest Keyboards Ever — Engadget](https://www.engadget.com/2282903/google-japan-gboard-conveyor-belt-keyboard-dying-to-try/)
- [Google shows off a whole new type of keyboard — TechRadar](https://www.techradar.com/pro/google-shows-off-a-whole-new-type-of-keyboard-and-it-says-having-keys-rolling-on-a-conveyor-belt-wil)
- [30 old Intel Mac minis are hugely faster than the Cray-1 chassis they live in — AppleInsider](https://appleinsider.com/articles/26/10/10/30-old-intel-mac-minis-are-hugely-faster-than-the-cray-1-chassis-they-live-in)
- [NVIDIA GeForce RTX 5060 runs macOS 15 with Metal 3 acceleration through unofficial driver — VideoCardz](https://videocardz.com/newz/nvidia-geforce-rtx-5060-runs-macos-15-with-metal-3-acceleration-through-unofficial-driver)
- [Mac Users Are Nuking Every Trace of Apple AI on Their Machines — Futurism](https://futurism.com/artificial-intelligence/mac-users-nuking-every-trace-of-apple-ai)
- [The economist behind the China shock tackles Gen Z AI paradox — Fortune](https://fortune.com/2026/10/10/david-autor-china-shock-nber-google-paper-illusion-of-competence-gen-z/)
