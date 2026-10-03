---
title: '🔧 EFF Menang Lawan UU VPN Utah, Apple Rilis Pass Designer, dan ds4 Bawa Model Frontier ke Mesin Lokal'
description: 'Cerita teratas Hacker News 3 Oktober 2026: pengadilan federal memblokir UU VPN Utah, Apple meluncurkan Pass Designer untuk Apple Wallet, Black Forest Labs merilis FLUX 3, dan proyek ds4 menjalankan DeepSeek V4.1 secara lokal.'
pubDate: 2026-10-03T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

Papan Hacker News hari ini didominasi satu pertanyaan yang sama dari tiga sudut berbeda: siapa yang sebenarnya mengendalikan perangkat kita? Pengadilan federal memutuskan negara bagian tidak bisa memaksa situs web melacak lokasi semua pengunjung dunia, Apple memperlihatkan alat baru untuk membuat pass Wallet, dan seorang pembuat perangkat lunak legendaris menunjukkan model bahasa besar bisa jalan di komputer sendiri tanpa menyewa server siapa pun.

## ⚖️ EFF Menang: Pengadilan Federal Blokir UU VPN Utah

**691 poin | 327 komentar**

Cerita paling ramai hari ini adalah kemenangan Electronic Frontier Foundation (EFF) atas Utah. Seorang hakim federal di Utah menerbitkan _preliminary injunction_ yang menghentikan pemberlakuan SB 73, undang-undang anti-VPN Utah yang oleh EFF disebut "draconian".

Apa isi SB 73? Undang-undang itu mencoba mengatur situs web dewasa dengan mewajibkan mereka memblokir pengguna VPN, atau mengetahui lokasi fisik setiap pengunjung yang memakai alat penyamaran lalu lintas jaringan. Yang lebih jauh lagi: situs web dilarang memberi petunjuk cara memakai VPN untuk melewati pemeriksaan usia. Menurut EFF, ini menjadikan Utah negara bagian pertama yang secara khusus menyasar penggunaan VPN untuk menghindari gerbang verifikasi usia.

Pengadilan menilai undang-undang ini kemungkinan melanggar larangan konstitusional Amerika atas aturan yang membebani bisnis dan orang di luar batas negara bagian. Logikanya sederhana: kalau satu pengunjung saja di seluruh dunia menyamarkan lokasinya, situs web sudah melanggar hukum — artinya situs harus memverifikasi usia _semua_ pengunjung, di mana pun mereka berada. Hakim menulis bahwa ketentuan lokasi aktual "dalam praktiknya mewajibkan entitas melakukan layanan verifikasi usia untuk setiap pengguna yang mengunjungi situsnya dari lokasi mana pun". Pengadilan juga menegaskan Utah punya cara yang jauh lebih ringan untuk mencegah anak di bawah umur mengakses situs dewasa.

Gugatan ini diajukan Aylo, perusahaan induk platform dewasa seperti Pornhub. EFF sendiri ikut menyampaikan komentar resmi ke Departemen Perdagangan Utah pada awal September, menjelaskan bahwa memaksa platform mendeteksi dan memblokir alat pelindung privasi adalah hal yang mustahil secara teknis — dan merugikan keamanan pengguna di seluruh dunia, bukan cuma di Utah.

## 🎫 Apple Pass Designer: Bikin Pass Wallet Tanpa Coding

**473 poin | 291 komentar**

Apple memperkenalkan **Pass Designer**, alat untuk merancang dan melihat pratinjau pass Apple Wallet. Sasaran penggunanya jelas: pemilik gym lokal, venue musik kecil, maskapai, sampai jaringan kedai kopi yang ingin pass-nya punya identitas brand sendiri.

Yang menarik dari sisi teknis, pratinjau di Pass Designer memakai mesin render yang sama dengan iOS dan watchOS. Artinya apa yang terlihat di layar desainer persis sama dengan yang dilihat pelanggan di perangkat mereka. Desainer bisa memakai template dari Apple atau membuat sendiri, mengatur warna latar, warna depan, dan warna label, serta mengimpor gambar dari alat desain favorit mereka. Pass lama yang dibuat dengan format sebelumnya tetap kompatibel.

Bagi tim yang selama ini menganggap pass Wallet sebagai pekerjaan sampingan yang merepotkan, alat ini memangkas salah satu hambatan paling nyata: tidak ada lagi tebak-tebakan apakah desainnya akan pecah di layar iPhone atau jam tangan.

## 🎨 FLUX 3: Kendali Penuh atas Setiap Piksel

**374 poin | 82 komentar**

Black Forest Labs merilis **FLUX 3 Image** dengan janji yang tidak biasa untuk model generatif: kendali yang presisi. Alih-alih menulis ulang seluruh gambar dari satu prompt, FLUX 3 memungkinkan pengguna meletakkan elemen di kanvas memakai _bounding box_ dan mengedit gambar jadi satu kotak demi satu kotak. Bagian yang tidak disentuh tetap persis di tempatnya.

Untuk pekerjaan produksi — mengubah satu detail pada foto produk, mengganti teks di poster, atau menyesuaikan elemen kecil tanpa merusak sisa komposisi — pendekatan berbasis kotak ini menjawab keluhan paling umum terhadap model gambar generatif: hasilnya cantik, tapi tidak bisa dikontrol.

## 🧠 ds4: Model Frontier di Mesin Sendiri

**281 poin | 80 komentar**

Judul di Hacker News menyebutnya sebagai karya pencipta Redis, dan proyeknya menarik perhatian: **ds4 (DwarfStar 4)** adalah mesin inferensi C yang sempit dan fokus, dirancang menjalankan model terbuka kelas atas langsung di komputer sendiri.

Yang didukung: DeepSeek V4 dan V4.1 Flash, GLM 5.x, serta Qwen3.8 Flash Next — model teks maupun visi — lengkap dengan API lokal, CLI, dan agen natif dalam satu tumpukan. Platform yang disasar adalah Mac ber-memori besar, CUDA, dan ROCm. Lisensinya MIT.

Contoh sesi di situsnya memperlihatkan cara kerjanya: pengguna memuat berkas `src/kvcache.c` sebanyak 1.412 baris ke konteks, lalu bertanya mengapa sebuah _prefix_ bisa bertahan setelah server restart. Jawabannya soal KV cache yang dikunci oleh SHA1 dari prefix prompt dan disimpan ke disk, sehingga prefix yang cocok dimuat ulang alih-alih dihitung ulang. Ini bukan demo mainan — ini penjelasan arsitektur dari mesin yang benar-benar jalan.

## 🇩🇪 Kolibri: Model Berdaulat dari Aleph Alpha

**80 + 37 poin | 53 + 3 komentar**

Bertepatan dengan Hari Penyatuan Jerman, Aleph Alpha merilis **Kolibri**: model Transformer _mixture-of-experts_ dwibahasa Inggris–Jerman dengan 78 miliar parameter total dan hanya 3 miliar parameter aktif. Panjang konteksnya mencapai 1 juta token, bobot penuhnya bisa diunduh di Hugging Face, dan lisensinya Apache 2.0.

Kolibri lahir dari iterasi pipeline pelatihan milik Aleph Alpha sendiri. Mereka lebih dulu membangun dan memvalidasi pipeline itu lewat **Kolibri Origin**, model 30 miliar parameter total (3 miliar aktif) dengan jendela konteks 65 ribu token yang jauh lebih pendek. Pipeline yang sama kemudian menjalankan ratusan eksperimen ablasi dan pra-pelatihan stabil tanpa perlu campur tangan manusia setiap kali perangkat keras gagal atau koneksi data putus. Istilah "berdaulat" di sini bukan slogan — ini soal kemampuan melatih dan menjalankan model sendiri, di yurisdiksi sendiri.

## 🖥️ Dua Cerita tentang Alat Kerja

**ChatGPT Sites** (305 poin) mengubah ChatGPT menjadi pembuat situs dan aplikasi: jelaskan idenya, minta ChatGPT membangunnya, lihat hasilnya di peramban dalam aplikasi sebelum dipublikasikan, lalu pilih siapa yang boleh mengakses. Situs bisa dibagikan ke orang tertentu, ke workspace, atau ke publik, dan bisa diedit bersama rekan tim.

**One month coding with GLM 5.3 Flash** (184 poin) adalah catatan jujur dari Wagtail CMS yang menantang diri mereka memakai satu model terbuka yang efisien selama sebulan penuh. Hasilnya: 2 miliar token, biaya sekitar 68 dolar, konsumsi energi sekitar 4 kWh, dan emisi sekitar 365 gram karbon. Separuh bulan pertama berjalan sesuai rencana. Separuh kedua tidak — 1 miliar token akhirnya mengalir ke model lain.

## 📚 Cerita Lain yang Patut Dibaca

- **The Forgetful CPU (Linux on M4)** — 245 poin, 165 komentar. Catatan teknis Yureka Lilian tentang boot pertama Linux di Mac mini M4, lengkap dengan ucapan terima kasih ke tim Asahi Linux. Tantangan utamanya: mesin M4 adalah generasi Apple Silicon pertama yang mewajibkan SPTM (Secure Page Table Monitor).
- **Muse Gadgets** — 213 poin, 93 komentar. Meta merilis firmware ESP32 open source dan SDK Linux agar pengguna bisa menghubungkan Muse ke layar, tombol, sensor, dan aktuator buatan sendiri.
- **Cloudflare OHTTP Gateway** — 121 poin, 44 komentar. Beta tertutup untuk gateway OHTTP layanan mandiri. Cloudflare juga mengganti nama Privacy Gateway menjadi Cloudflare OHTTP Relay agar dua produknya tidak tertukar.
- **Newgrounds** — 312 poin, 90 komentar. Situs komunitas game, musik, dan seni yang sudah puluhan tahun berdiri, kembali naik ke papan depan.

## 💡 Insight Hari Ini

Tiga cerita teratas hari ini punya benang merah yang sama: **kendali kembali ke pengguna**. Pengadilan menolak negara bagian yang ingin memaksa situs melacak semua orang. Apple memberi pemilik usaha alat untuk membuat pass mereka sendiri tanpa perantara. Dan ds4, Kolibri, dan FLUX 3 menunjukkan bahwa model kelas atas tidak lagi wajib berarti menyewa GPU orang lain — sebagian sudah bisa dijalankan, diunduh, dan dimodifikasi sendiri.

## 🔗 Sumber

- [Court Agrees with EFF: Utah VPN Law Demands a Technical Impossibility](https://www.eff.org/deeplinks/2026/10/court-agrees-eff-utahs-vpn-law-demands-technical-impossibility)
- [Pass Designer — Apple Developer](https://developer.apple.com/pass-designer/)
- [FLUX 3 Image — Black Forest Labs](https://bfl.ai/models/flux-3-image)
- [DwarfStar 4 (ds4)](https://dwarfstar.sh/)
- [Kolibri Has Landed — Aleph Alpha](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/)
- [ChatGPT Sites](https://chatgpt.com/features/sites/)
- [One month coding with GLM 5.3 Flash — Wagtail CMS](https://wagtail.org/blog/one-month-on-glm-53-flash/)
- [The forgetful CPU (Linux on M4)](https://yuka.dev/blog-2026-10-02-linux-m4.html)
- [Muse Gadgets](https://gadgets.muse.ai)
- [Announcing Cloudflare OHTTP Gateway](https://blog.cloudflare.com/announcing-cloudflare-ohttp-gateway/)
- [Hacker News](https://news.ycombinator.com/)
