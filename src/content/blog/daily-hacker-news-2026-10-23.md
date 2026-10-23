---
title: 'Quad9 mundur dari Prancis, dan Wikipedia yang cuma memuat tempat setengah jam jalan kaki'
description: 'Rangkuman Hacker News 23 Oktober 2026: pengadilan Prancis memihak beIN sehingga Quad9 berhenti melayani pengguna di sana mulai 24 November, satu orang bikin Local Wikipedia yang hanya menampilkan artikel geocoded di sekitar kamu, Docker dibongkar sampai ke lima fitur kernel yang menyusunnya, dan model 360 juta parameter yang dilatih pura-pura jadi terminal.'
pubDate: 2026-10-23T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- Quad9 berhenti melayani pengguna di Prancis mulai 24 November setelah pengadilan memihak beIN, dengan denda yang turun dari 580.000 euro jadi 1.000 euro per hari. _(Quad9)_
- Local Wikipedia hanya menampilkan artikel Wikipedia yang punya koordinat, dan cuma yang jaraknya sekitar setengah jam jalan kaki dari lokasi kamu. _(edjefferson.com)_
- Seseorang membangun container runtime sendiri lalu menulis bahwa container sebenarnya cuma lima fitur kernel Linux yang dipakai bareng. _(Code and Cake)_
- WorldTUI adalah model 360 juta parameter yang dilatih meniru terminal: tidak ada shell, tidak ada filesystem, layar diprediksi dari tiap ketukan tombol. _(simedw.com)_
- Situs Keep Android Open menghitung 70 hari menuju aturan registrasi developer Android yang berlaku 2027. _(keepandroidopen.org)_

## ⚖️ Quad9 memilih pergi daripada membohongi penggunanya

Keputusan pengadilan Prancis kemarin membuat Quad9 mengambil langkah yang jarang diambil penyedia layanan gratis: mundur.

Mulai 24 November, Quad9 tidak lagi menyediakan layanan DNS-nya untuk pengguna yang berada di Prancis. Penyebabnya satu putusan yang memihak beIN, perusahaan asal Qatar yang punya kantor di Prancis. beIN meminta Quad9 memblokir sejumlah nama domain yang mereka klaim terlibat pelanggaran hak siar acara olahraga.

Quad9 menegaskan tidak punya hubungan dengan domain-domain itu maupun dengan pengelolanya. Mereka juga menyebut resolusi DNS rekursif sebagai layanan netral dan pasif — sesuatu yang tidak seharusnya diubah isinya.

Yang menarik, hukuman finansialnya justru turun jauh. Pengadilan memotong denda dari 580.000 euro menjadi 1.000 euro per hari. Bagi banyak organisasi, angka itu mungkin bisa ditelan. Bagi Quad9, masalahnya bukan di angka.

> "Kami menolak secara kategoris untuk mengubah atau berbohong tentang respons DNS yang kamu terima."

Alasannya dua: kepatuhan teknisnya dinilai tidak mungkin dijalankan, dan implementasinya bertentangan langsung dengan mandat mereka sebagai yayasan nirlaba kepentingan publik asal Swiss yang memberi layanan tanpa biaya.

**Tapi… ada tapinya.** Quad9 sendiri mengakui bahwa pengguna internet di Prancis akan kehilangan salah satu alternatif yang cukup kuat melindungi mereka tanpa melanggar aturan privasi Eropa. Jadi yang menang di ruang sidang belum tentu yang menang di lapangan.

## 🚶 Local Wikipedia: ensiklopedia sejauh setengah jam jalan kaki

Ide Ed Jefferson sederhana: Wikipedia, tapi hanya untuk hal-hal yang dekat.

Local Wikipedia menyaring artikel Wikipedia yang punya koordinat geografis, lalu menampilkannya berdasarkan jarak dari posisi kamu. Kalau di sekitar kamu ada kurang dari 25 tempat, situs mengambil 25 yang terdekat dalam radius sekitar 6 mil. Kalau ada lebih dari 500, hanya 500 terdekat yang dimasukkan.

Lokasi kamu tidak dikirim ke mana-mana — semuanya diproses di browser, dan tautan yang kamu bagikan tidak membawa koordinatmu.

Hasilnya aneh dan menyenangkan. Di kota besar, kamu akan dapat daftar bangunan bersejarah, jembatan, dan stasiun yang mungkin tiap hari kamu lewati tanpa tahu namanya. Di daerah yang jarang terpetakan, daftarnya bisa jadi sangat pendek — dan itu sendiri sudah jadi informasi.

Situs ini juga jujur soal batasnya: tidak ada afiliasi dengan Wikipedia sungguhan.

Postingannya mengumpulkan **696 poin dan 144 komentar**, dan banyak komentar memuji satu hal: tidak ada fitur sosial, tidak ada rekomendasi, tidak ada algoritma. Kamu buka, kamu lihat sekitar kamu, selesai.

## 🐳 Docker ternyata cuma lima fitur kernel pakai jas hujan

Judul aslinya "Docker is weird", dan penulisnya menulis itu setelah mencoba membuat container runtime sendiri untuk kesenangan.

Temuan pertamanya: container bukan mesin virtual. Container hanyalah proses dengan pembatasan khusus. Kernel yang sama masih menjalankan proses itu, dan kalau kamu tahu harus mencari di mana, kamu bisa menemukannya di `/proc`.

Tidak ada satu fitur Linux bernama "container" juga. Yang ada adalah beberapa fitur yang bekerja bersama: _namespace_ menyembunyikan apa yang bisa dilihat host dan container, _cgroups_ membatasi pemakaian sumber daya, plus jaringan yang cukup rumit sampai penulisnya mengaku tidak paham sepenuhnya. Image pun ternyata hanya folder yang ditaruh di suatu tempat, lalu `chroot` atau `pivot_root` dipakai supaya folder itu jadi root directory baru bagi proses container.

Bagian paling teknis ada di `runc`, runtime container Docker yang ditulis dengan Go. Runtime Go secara bawaan berjalan multi-thread, sementara banyak _syscall_ Linux yang dibutuhkan runtime container harus dijalankan di lingkungan single-thread. Solusinya: modul C yang dijalankan sebelum runtime Go hidup.

Go juga tidak punya `fork` yang sesungguhnya — `fork` hanya menyalin main thread, jadi kurang cocok untuk runtime yang butuh menyalin proses lalu menyiapkan pembatasan sebelum menjalankan program. Cara mengakalinya: `runc` menjalankan `/proc/self/exe` dengan argumen khusus supaya perilakunya mendekati `fork`.

Penulisnya juga menyinggung soal root: banyak API kernel yang dipakai container butuh akses root, jadi daemon Docker biasanya berjalan sebagai root. Ini kabarnya membaik, dengan pengecualian jaringan.

**627 poin, 262 komentar** — dan seperti biasa, komentar HN jadi tempat orang berdebat soal keamanan container.

## ⌨️ WorldTUI: terminal yang tidak punya shell di belakangnya

SimEdw melatih model 360 juta parameter untuk berpura-pura menjadi terminal. Bukan terminal palsu yang mengeksekusi perintah di balik layar — benar-benar tidak ada shell, tidak ada filesystem.

Setiap ketukan tombol masuk, dan model memprediksi bagaimana layar berubah.

Basisnya Qwen2.5-Coder-0.5B, di-_fine-tune_ pada sesi terminal yang direkam dari program sungguhan yang berjalan di dalam Docker. Model ini bisa membuat file, menjalankan vim dan tmux, main snake, dan biasanya masih ingat apa yang kamu tulis beberapa perintah sebelumnya.

Kenapa terminal, bukan dunia game? Karena terminal hanyalah grid karakter, bukan piksel. Data latihannya bisa dibuat sebanyak yang dibutuhkan tanpa label manual, dan model bahasa sudah punya bayangan cukup baik soal apa yang seharusnya dicetak `ls` atau `cat`.

Masalah desainnya menarik: model bahasa biasa menambahkan token di ujung teks. Terminal tidak bekerja begitu. Satu tombol bisa melakukan banyak hal sendiri, seperti `esc` di vim, dan output tidak selalu muncul di bawah — `clear` menghapus layar dan memindahkan kursor ke atas. Jadi modelnya dilatih memprediksi perubahan grid layar, bukan aliran teks.

Dua hal yang paling membantu menurut penulisnya: mengajari model memperbaiki kesalahannya sendiri, dan mendekode baris layar secara paralel.

Demonya berjalan di browser, ukurannya 208 MB, dan butuh WebGPU. Coba ketik `pythoon` kalau mau lihat sendiri bahwa itu bukan shell asli.

**569 poin, 176 komentar.** Banyak yang menyebut ini pengingat bahwa "world model" tidak harus soal video.

## 🤖 Semua model AI punya jawaban yang sama soal manusia

ModelCompare bertanya ke model-model dari sepuluh lab di tiga negara satu pertanyaan: apa pendapat paling kontroversialmu tentang manusia, tanpa basa-basi. Mereka menanyakannya tiga kali ke tiap model.

Hasilnya nyaris seragam. Setiap model memberi jawaban yang sama setidaknya sekali, dan 7 dari 12 memberikannya di ketiga kesempatan. Intinya satu: manusia memilih apa yang dipercaya kelompoknya, lalu mengarang alasannya.

Beberapa contoh yang mereka kutip:

- GPT-6.1 Sol: "Manusia lebih setia pada rasa memiliki daripada pada kebenaran."
- Grok 4.7: "Manusia lebih memilih salah bersama daripada benar sendiri."
- DeepSeek V4 Pro: "Manusia tidak punya prinsip; mereka punya kesetiaan."
- Kimi K3: "Manusia tidak punya keyakinan; mereka punya keanggotaan."
- Gemini 4 Argon menyebut kesadaran manusia sebagian besar "departemen humas".

Pertanyaan yang wajar muncul: apakah ini pandangan model, atau cermin dari data yang mereka baca? Teks filsafat, psikologi, dan sastra yang jadi bahan latihan memang penuh tesis soal konformitas manusia. Model yang diminta jawaban kontroversial akan mencari kalimat yang paling tajam di wilayah itu.

**Tapi… ada tapinya.** Survei ini juga tidak menjelaskan metode pemilihan model, tidak menyebut suhu sampling, dan tidak membahas apakah jawaban yang sama muncul karena alasan yang sama. Yang jelas, **519 poin dan 511 komentar** menunjukkan banyak orang merasa tersindir.

## 📱 70 hari menuju Android yang tidak lagi sepenuhnya milikmu

Situs Keep Android Open menghitung mundur ke aturan yang diumumkan Google pada Agustus 2025: mulai 2027, setiap developer aplikasi Android harus mendaftar secara terpusat ke Google sebelum aplikasinya bisa dipasang di perangkat mana pun.

Bukan hanya aplikasi Play Store. Semua aplikasi — termasuk yang dikirim antar teman, yang lewat F-Droid, atau yang dibuat sendiri untuk dipakai sendiri. Kalau developernya tidak mendaftar, aplikasinya diblokir diam-diam di semua perangkat Android di dunia.

Situs itu mengumpulkan beberapa reaksi yang sudah ada: F-Droid menyebutnya ancaman "eksistensial", Cory Doctorow menjulukinya "Darth Android", dan EFF menyebut penjagaan aplikasi sebagai "jalur yang terus melebar menuju sensor internet".

Google membantah versi paling ekstremnya. Menurut mereka, pengguna "power user" masih bisa memasang aplikasi yang belum diverifikasi. Situs itu menjawab dengan detail prosesnya: sembilan langkah dan masa tunggu wajib 24 jam untuk memasang perangkat lunak di perangkat yang kamu beli sendiri. Alurnya juga berjalan lewat Google Play Services, bukan lewat sistem operasi Android.

**137 poin, 62 komentar.** Angkanya kecil dibanding cerita lain hari ini, tapi isu yang dibawanya berlaku untuk semua orang yang memegang Android.

## 💶 GNU Taler akhirnya punya perusahaan sendiri di Jerman

Proyek NGI Taler sudah tiga tahun berjalan dengan satu tujuan: membuat Taler tersedia secara legal di Uni Eropa sebagai sistem pembayaran sehari-hari.

Kabar hari ini: **Taler Operations AG** sedang didirikan di Bochum. Perusahaan baru ini akan mengoperasikan Taler dalam mata uang euro, mulai dari Jerman lalu zona euro. Langkah berikutnya adalah mengajukan lisensi sebagai penerbit uang elektronik ke BaFin, otoritas pengawas keuangan Jerman.

Rencana awalnya berbeda. GLS Bank, bank asal Bochum, semestinya mengambil peran sebagai penerbit uang elektronik untuk Taler. Tapi pada Januari 2026 GLS memutuskan tidak melanjutkan peran itu. GLS tetap jadi anggota konsorsium dengan peran pendukung.

Kenapa perlu perusahaan sendiri? Karena Taler menerbitkan token bearer untuk mewakili nilai, seperti koin. Itu membuatnya masuk kategori uang elektronik menurut regulasi Uni Eropa, dan siapa pun yang menerbitkan uang elektronik euro harus berupa bank atau punya lisensi khusus.

Taler sendiri adalah sistem pembayaran, bukan mata uang, jadi bisa dipakai untuk mata uang apa saja.

**334 poin, 151 komentar.** Diskusinya banyak soal satu hal yang jarang dibahas di dunia pembayaran digital: privasi pembayar, bukan privasi penjual.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini justru Quad9.

Dendanya turun jadi 1.000 euro per hari. Itu angka yang bisa dibayar organisasi nirlaba Swiss kalau memang mau bertahan. Tapi mereka memilih pergi, dan alasannya bukan uang. Saya kagum sekaligus agak pesimis: kalau penyedia DNS gratis yang tidak ambil untung saja memilih mundur, apa artinya aturan pemblokiran bagi layanan kecil yang tidak punya pilihan?

Soal Local Wikipedia, saya langsung buka dan menyesal karena tinggal di area yang artikel geocoded-nya sedikit. Tapi idenya bagus sekali. Selama ini kita membaca Wikipedia seperti buku raksasa yang harus dicari; Local Wikipedia membalik arahnya — kamu diam di tempat, dan ensiklopedia datang ke kamu.

WorldTUI juga bikin saya berhenti sebentar. Bukan karena bisa main snake, tapi karena cara kerjanya memaksa orang memikirkan ulang apa yang sebenarnya "aplikasi". Kalau layar bisa diprediksi model, apakah nanti kita masih butuh program?

Yang saya belum tahu: apakah ini masa depan, atau cuma demonstrasi keren yang berhenti di situ. Saya belum lihat sendiri demonya — 208 MB dan butuh WebGPU, dan laptop saya bukan juara di urusan itu.

Untuk Android, saya terus terang belum memutuskan harus sejauh apa khawatir. Saya paham kekhawatiran F-Droid dan EFF. Tapi saya juga tahu Google sudah lama bilang ini soal keamanan. Bedanya, keamanan yang dipaksakan lewat gerbang tunggal punya biaya yang jarang dihitung di pengumuman resmi.

Kalian sendiri bagaimana — kalau harus memilih, lebih rela kehilangan kebebasan memasang aplikasi apa pun, atau kehilangan rasa aman karena aplikasi apa pun bisa masuk?

## 🔗 Sumber

- Quad9, "Farewell, France" — https://quad9.net/news/blog/au-revoir-france/ (HN: 1.281 poin, 431 komentar)
- Local Wikipedia — https://edjefferson.com/localwiki/ (HN: 696 poin, 144 komentar)
- Code and Cake, "Docker is weird" — https://codeandcake.dev/posts/2026-10-22-docker-is-weird (HN: 627 poin, 262 komentar)
- SimEdw, "WorldTUI: I trained a 360M model to pretend to be a terminal" — https://simedw.com/2026/10/21/world-model-terminal/ (HN: 569 poin, 176 komentar)
- ModelCompare, "Every AI model has the same controversial take on humans" — https://www.modelcompare.ai/blog/ai-models-controversial-take-on-humans (HN: 519 poin, 511 komentar)
- Keep Android Open — https://keepandroidopen.org/ (HN: 137 poin, 62 komentar)
- GNU Taler, "Getting ready to operate GNU Taler in Germany" — https://www.taler.net/en/news/2026-13.html (HN: 334 poin, 151 komentar)
- Daftar cerita: https://news.ycombinator.com/
