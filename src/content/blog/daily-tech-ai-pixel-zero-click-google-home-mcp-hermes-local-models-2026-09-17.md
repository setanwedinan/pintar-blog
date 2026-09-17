---
title: '🔒 Pixel Dibobol Zero-Click, Google Home Terbuka untuk Semua AI Agent & Hermes Agent Uji Local Models'
description: 'CVE-2026-58704 bikin Pixel bisa dikuasai tanpa satu pun sentuhan pengguna, Google Home membuka MCP untuk Claude sampai Hermes, dan Hermes Agent menguji fitur Local Models baru. Plus: iOS 27.2 lompati 27.1 dan biaya AI Apple yang mulai terasa.'
pubDate: 2026-09-17T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## TL;DR

- **Pixel kena zero-click attack**: Google mengungkap CVE-2026-58704 di modem Pixel yang bisa dieskalasi tanpa interaksi pengguna, dan CISA memberi badan federal AS waktu 3 hari untuk menambal.
- **Google Home sekarang bisa dikendalikan AI agent pihak ketiga** lewat MCP — termasuk Claude, Hermes, dan Open Claw.
- **Hermes Agent** menguji fitur **Local Models** baru: model GGUF bisa diunduh dan dikelola langsung dari aplikasi, dan Qwen3.8 27B disebut jalan mulus di VRAM 16 GB.
- **GitSpawn**: satu baris di file konfigurasi Git bisa membajak tujuh AI coding agent sekaligus, empat di antaranya belum ditambal.
- **iOS 27.2 beta dirilis, iOS 27.1 dilewati** — alasannya iPhone Duo.
- Apple akhirnya menjelaskan **Reference Image**, sensor kamera baru di iPhone 18 Pro untuk membuktikan foto asli bukan hasil AI.
- Apple juga mengungkap **biaya AI yang mahal**: ringkasan video di HomeKit kini butuh langganan iCloud+ tingkat atas.

---

## 🔓 Pixel Dibobol Tanpa Sentuhan: CVE-2026-58704

Kabar paling serius hari ini datang dari dunia keamanan. The Register melaporkan bahwa Google dan pemerintah AS sama-sama memperingatkan adanya **zero-day di modem ponsel Pixel** yang memungkinkan penyerang melewati pemeriksaan izin (permission checks) dan menaikkan hak akses tanpa satu pun interaksi dari pengguna.

Celah itu dilacak sebagai **CVE-2026-58704** dan digolongkan sebagai kerentanan berkeparahan tinggi. Google mengungkapnya pada Selasa dan saat itu sudah memperingatkan bahwa lubang tersebut "mungkin sedang dieksploitasi secara terbatas dan bertarget" — artinya penyerang menemukan dan memanfaatkannya sebelum Google menutupnya. Sejak itu lubang tersebut sudah ditutup, asalkan Anda memperbarui perangkat.

Kenapa ini penting? Zero-click attack adalah vektor klasik yang biasa dipakai pembuat spyware komersial untuk mengawasi target tertentu, karena korbannya tidak perlu mengklik apa pun. The Register sendiri mencatat detail teknis yang tersedia masih sangat terbatas: yang diketahui, celah itu ada di modem Pixel, dieksploitasi di alam liar, dan tidak butuh interaksi.

Pada Rabu, **CISA** memasukkan CVE-2026-58704 ke dalam **Known Exploited Vulnerabilities Catalog** dan memberi badan federal AS waktu hanya **tiga hari — sampai 19 September** — untuk menambal. CISA menyebut kerentanan jenis ini sebagai "vektor serangan yang sering dipakai aktor siber jahat dan menimbulkan risiko signifikan bagi ekosistem federal".

Insiden ini datang tak lama setelah CISA menambahkan dua kerentanan Chromium (CVE-2026-85046 dan CVE-2026-87491) ke katalog yang sama. Keduanya ada di mesin JavaScript V8 dan memengaruhi semua browser berbasis Chromium, termasuk Chrome, Edge, dan Opera.

Pesan praktisnya sederhana: kalau Anda memakai Pixel, cek pembaruan sistem sekarang, bukan nanti.

Sumber: [The Register](https://www.theregister.com/security/2026/09/16/google-pixel-phones-pwned-in-zero-click-attacks/5296936)

## 🏠 Google Home Terbuka untuk Semua AI Agent

Kalau selama ini asisten rumah pintar terasa seperti ruang tertutup, Google baru saja membuka pintunya. The Verge melaporkan bahwa **Google Home kini mendukung Model Context Protocol (MCP)**, standar terbuka yang memungkinkan AI agent pihak ketiga membaca data rumah Anda dan mengendalikan perangkat yang terhubung.

Kutipan dari Taylor Lehman, group product manager Google Home & Nest, cukup gamblang soal siapa saja yang boleh masuk. Integrasi ini, katanya, "memungkinkan AI agent apa pun yang mendukung MCP, termasuk Google Antigravity, Claude, Hermes atau Open Claw, untuk bekerja secara aman dengan semua perangkat dan riwayat kejadian di ekosistem Google Home Anda."

Artinya, batas antara chatbot dan rumah fisik makin tipis. Agent bisa dipakai untuk hal-hal yang sebelumnya butuh aplikasi terpisah: analisis lintas kamera (misalnya menanyakan apa yang dilakukan anak Anda begitu pulang sekolah), memanfaatkan riwayat status perangkat untuk menyimpulkan kejadian, sampai membangun dasbor kustom.

Untuk pengguna Hermes dan Open Claw, ini menandai perubahan penting: agent yang biasanya bergerak di dalam layar kini punya jalur resmi ke perangkat rumah. Pertanyaan berikutnya yang belum terjawab jelas adalah seberapa ketat kontrol izinnya di praktik — karena MCP memang "standar", tapi siapa yang memegang kunci tetap Google.

Sumber: [The Verge](https://www.theverge.com/tech/996310/google-home-mcp-integration-agentic-ai-smart-home-price-release-date)

## 🧪 Hermes Agent Uji Fitur Local Models: Qwen3.8 27B di VRAM 16 GB

Kabar langka dan menyenangkan: GIGAZINE menguji fitur **Local Models** di Hermes Agent, dan hasilnya cukup meyakinkan.

Fitur ini diperkenalkan lewat pembaruan awal September 2026. Sebelumnya Hermes Agent memang sudah bisa memakai model lokal yang dijalankan lewat Ollama atau llama.cpp, tapi kini **Hermes Agent sendiri yang mengunduh dan mengelola llama.cpp beserta modelnya** — tidak perlu lagi merakit runtime secara manual.

Dalam pengujian tersebut, mesin uji dibekali NVIDIA GeForce RTX 5070 Ti dengan VRAM 16 GB dan RAM 64 GB. Di daftar model muncul empat pilihan: **Qwen 3.8 27B, Qwen3.6 35B-A3B, Qwen3.8 Flash Next, dan DeepSeek V4 Flash**. Model yang tidak muat di VRAM ditandai "Use system RAM", sedangkan yang tidak muat di RAM ditandai "Too big for this machine" dengan tombol unduh mati.

Untuk mengakalinya, penguji mencari versi kuantisasi lebih kecil: **Qwen3.8-27B-GGUF dari unsloth**, lalu mengunduhnya lewat menu "Find more models". Kesimpulan artikelnya: berkat kuantisasi, model 27B masih bisa berjalan cepat di VRAM 16 GB. Dokumentasi fiturnya tersedia di situs resmi Hermes Agent.

Kombinasi ini relevan buat siapa pun yang ingin agent AI tetap jalan tanpa mengirim data ke cloud — dan tanpa membeli GPU kelas workstation.

Sumber: [GIGAZINE](https://gigazine.net/gsc_news/en/20260916-hermes-agent-local-ai-model/)

## 🕷️ GitSpawn: Satu Baris Konfigurasi Git, Tujuh Agent Dibajak

Firma keamanan Manifold Security mengungkap kelas kerentanan yang mereka sebut **GitSpawn**. Laporannya: delapan celah tersebar di **tujuh CLI coding agent**, dan **empat di antaranya masih belum ditambal** saat laporan diterbitkan.

Yang terdampak bukan produk sembarangan: **Claude Code** milik Anthropic, **Codex** milik OpenAI, **Cursor**, **Goose** dari Cognition, **Hermes Agent**, **Qwen Code** dari Alibaba, dan **Grok Build** dari xAI.

Yang membuat GitSpawn menarik adalah letaknya. Celah ini sama sekali tidak menyentuh model bahasa. Ia hidup di perintah latar belakang yang rutin dijalankan agent begitu sebuah proyek dibuka — biasanya `git status` atau `git diff` — sebelum pengembang menulis satu pun prompt.

Serangannya lewat setelan performa Git yang sah bernama `core.fsmonitor`, yang menunjuk ke sebuah program pembantu yang dipanggil Git setiap kali indeks file disegarkan. Kalau penyerang menanam nilai berbahaya pada `core.fsmonitor` di dalam file `.git/config` sebuah repositori, Git akan menjalankan perintah apa pun yang ditunjuk nilai itu secara otomatis, tepat saat agent melakukan pengecekan status di latar belakang.

Hasilnya, menurut pengujian Manifold dan catatan Cloud Security Alliance: eksekusi perintah terjadi **di luar sandbox agent**, dengan hak akses pengguna lokal penuh, dan **tanpa prompt persetujuan** dari antarmuka agent. Penyerang tidak perlu menipu model dengan teks pintar — cukup menyerahkan sebuah folder.

Sumber: [shattered.io](https://shattered.io/gitspawn-ai-coding-agent-vulnerability-2026/)

## 🍎 iOS 27.2 Beta, dan Kenapa 27.1 Dilewati

Apple mengejutkan pengembang dengan merilis **beta pertama iOS 27.2** untuk iPhone, hanya dua hari setelah iOS 27 tersedia untuk semua orang pada Senin, 14 September. Yang bikin bertanya-tanya: kenapa bukan iOS 27.1?

MacRumors punya jawabannya, dan itu soal **iPhone Duo**. Apple sudah mengumumkan bahwa iPhone Duo akan dikirim dengan iOS 27.1, sehingga versi tersebut berisi berbagai referensi ke perangkat yang disembunyikan di dalam kodenya. Kalau beta iOS 27.1 dirilis hari ini, detail kecil iPhone Duo yang tidak diumumkan di acara Apple bisa bocor duluan. Beta iOS 27.2 disebut minim referensi iPhone Duo.

Kedua basis kode itu diperkirakan akan bertemu kembali nanti. Sementara itu, iPhone Duo sendiri dijadwalkan meluncur **Jumat, 23 Oktober**.

Sumber: [MacRumors](https://www.macrumors.com/2026/09/16/heres-why-apple-released-ios-27-2-beta/)

## 📸 Reference Image: Jawaban Hardware Apple untuk Foto Hasil AI

Sulit membedakan foto asli dan hasil AI, dan Apple mencoba masalah itu dari sisi perangkat keras. CNET menjelaskan bahwa iPhone 18 Pro dan 18 Pro Max membawa **sensor kamera baru** yang hanya ada di kedua model itu, untuk menghadirkan fitur bernama **Reference Image**.

Cara kerjanya menyerupai "negatif digital". Saat Anda memotret dalam mode _reference_, sensor menyisipkan data tanda tangan ke data mentah foto di tingkat piksel. Server private cloud compute Apple lalu mengubah tanda tangan itu menjadi reference image yang bisa dilihat di aplikasi Photos — dan fiturnya tetap bisa dipakai saat offline.

Apple sengaja tidak memakai pendekatan berbasis perangkat lunak. Dalam makalah teknisnya, Apple menyebut metode perangkat lunak untuk melacak perubahan "rentan dikompromi di titik mana pun dalam rantai penyuntingan, dan penonton tidak punya cara untuk mendeteksi kegagalan itu". Karena itu Apple bertaruh pada solusi yang tertanam di proses fotografi itu sendiri.

Tiga catatan penting: Reference mode adalah fitur opsional (**Settings → Camera → Reference Image**), hanya berjalan di **iOS 27**, dan **tidak tersedia di Uni Eropa maupun China** pada peluncuran. Untuk konten buatan AI, Apple menyatakan akan mendukung **SynthID**, inisiatif keaslian konten yang dipimpin Google, pada gambar yang dibuat dengan Image Playground.

Sumber: [CNET](https://www.cnet.com/tech/services-and-software/apple-reference-images-explained-iphone-18-pro/) · [AppleInsider](https://appleinsider.com/articles/26/09/16/apple-reference-image-is-a-mammoth-effort-to-combat-ai-edited-photos)

## 💸 Harga AI Apple Mulai Kelihatan: iCloud+ Naik Kelas demi Ringkasan Video

Apple Intelligence memang belum berlangganan, tapi gratisnya mulai ada harganya. Macworld dan Six Colors membahas catatan dukungan Apple yang diperbarui 9 September: fitur **ringkasan video** di aplikasi Home butuh langganan iCloud+ yang lebih tinggi daripada kebutuhan HomeKit Secure Video biasa.

Rinciannya: **2 kamera di tier 6 TB (US$29,99/bulan)** dan **5 kamera di tier 12 TB (US$59,99/bulan)**. Angka ini melompat jauh dari skema lama, ketika tier 200 GB seharga US$2,99/bulan sudah menampung lima kamera. Anda juga perlu **Apple TV 4K atau HomePod generasi kedua**, lalu mengaktifkan "Summarize Videos" dari menu Apple Intelligence di aplikasi Home.

Alasan Apple masuk akal secara teknis: menyimpan dan menganalisis video 4K sepanjang hari memang mahal. Tapi yang membuat catatan ini penting adalah kalimat di halaman dukungan Apple soal batas pemakaian: "Di masa depan, Apple akan menerapkan batas penggunaan pada fitur-fitur ini dan fitur Apple Intelligence serta Siri AI lainnya... Akses yang lebih tinggi ke fitur tersebut akan tersedia dengan biaya."

Artinya, era AI gratis dari Apple kemungkinan besar punya tanggal kedaluwarsa.

Sumber: [Macworld](https://www.macworld.com/article/3237022/apple-outlines-steep-ai-usage-costs-and-its-probably-going-to-get-worse.html) · [Six Colors](https://sixcolors.com/post/2026/09/apple-ties-icloud-pricing-to-video-summaries/)

## 🤖 Android 17 QPR2 Beta 5 & Canary 2609

Di sisi Android, Google tak berhenti setelah merilis stabil **QPR1** awal minggu ini. 9to5Google mencatat **Android 17 QPR2 Beta 5** mulai digelontorkan ke perangkat Pixel pada Rabu, melanjutkan siklus pengembangan menuju peluncuran stabil yang ditargetkan **Desember**.

Di Pixel 10 dan 11 muncul menu **"Proactive Assistance" kedua** di Pengaturan — satu dengan ikon biru (versi yang debut di Pixel 11) dan satu dengan ikon bola lampu kuning. Deskripsinya mirip tapi tidak identik: versi biru menyebut Gemini secara eksplisit, versi kuning hanya menyebut "saran yang dipersonalisasi". Menariknya, mematikan menu biru juga ikut mematikan tombol kuning, sehingga keduanya tampak merujuk kemampuan yang sama. Ada juga halaman baru "Use app content for suggestions" untuk mengatur aplikasi mana yang boleh berbagi konten layar dan notifikasi.

Perubahan lain: **tile Audio streams baru di Quick Settings**, sementara kustomisasi layout dihapus (belum jelas apakah akan kembali sebelum rilis final), tile Voice broadcast dipindah ke Connectivity, dan sejumlah perbaikan bug — mulai dari ikon Bluetooth yang gagal berubah, reboot mendadak saat menggulir konten berat, hingga slider volume yang macet saat casting.

Di jalur terpisah, **Android Canary 2609** membawa opsi **"Require unlock for Quick Settings"** — Quick Settings bisa dikunci agar tidak diubah tanpa membuka kunci perangkat.

Sumber: [9to5Google](https://9to5google.com/2026/09/16/android-17-qpr2-beta-5-everything-new/) · [9to5Google](https://9to5google.com/2026/09/16/android-canary-2609/) · [Android Authority](https://www.androidauthority.com/android-17-qpr2-beta-5-3712182/)

## 🇨🇳 Alibaba Rilis Occamy-1.0: Agent Open-Weights 3B Parameter Aktif

Dari ranah model, Tech Times melaporkan **Accio Team** — kelompok riset di dalam Alibaba Group — merilis **Occamy-1.0**, model agent berbobot terbuka (open-weights) yang dirancang untuk kerja digital multi-langkah jangka panjang, atau yang mereka sebut _co-work_: memperbarui catatan CRM, menyelesaikan alur kerja keuangan, menulis dan menjalankan kode, menyunting file, dan pulih dari error di sepanjang puluhan hingga ratusan pemanggilan model berurutan.

Klaimnya: Occamy-1.0 mampu menyamai sistem berukuran jauh lebih besar dengan **footprint parameter aktif sekitar 3B**, dan memuncaki rival-rival frontier di Claw-Eval dengan footprint aktif sekitar 90% lebih kecil. Model ini tersedia untuk deployment self-hosted di Hugging Face, lengkap dengan sebagian data latih dan infrastruktur pelatihan open-source bernama Dressage.

Ada konteks yang perlu dicatat: rilis ini muncul di tengah tuduhan Anthropic pada Juni 2026 bahwa operator yang dikaitkan dengan lab Qwen milik Alibaba menjalankan serangan distilasi terbesar yang diketahui terhadap model Claude — lebih dari **28,8 juta pertukaran** melalui sekitar **25.000 akun palsu**, menyasar kemampuan penalaran agentik dan rekayasa perangkat lunak Claude. Tuduhan itu masih diatribusikan kepada Anthropic dan belum diputus secara independen; Alibaba belum menanggapinya secara publik.

Sumber: [Tech Times](https://www.techtimes.com/articles/327532/20260915/alibaba-releases-open-weights-ai-agent-claiming-frontier-co-work-scores-3b-active-parameters.htm)

## 💻 Detail Baru M6 Mac mini: Menyamai M3 Max di Multi-Core

Benchmark M6 yang kemarin muncul kini punya angka lebih jelas. Notebookcheck melaporkan hasil **Geekbench 7** terbaru untuk Mac mini ber-M6: **skor single-core 4.071** dan **multi-core 22.783**. Skor single-core turun sekitar 12% dibanding hasil yang dilaporkan sebelumnya, tapi multi-core justru naik sekitar 10%.

Angka multi-core itu lebih tinggi dari **Apple M3 Max** yang diuji di MacBook Pro (2023) dengan skor 2.898 single-core dan 22.644 multi-core. Yang bikin impresif: M6 punya **12 core CPU** (dua _super core_, empat performance core, enam efficiency core), sementara M3 Max punya 14 core. Artinya chip 12 core menyamai chip 14 core.

Mac mini M6 dijadwalkan mulai dijual **22 September** dengan harga mulai US$899.

Sumber: [Notebookcheck](https://www.notebookcheck.net/Apple-M6-SoC-impresses-in-new-benchmark-as-it-matches-Apple-M3-Max-in-multi-core-test.1400910.0.html)

## 🚪 macOS 27 Golden Gate Resmi Menutup Pintu untuk Mac Intel

Satu era berakhir. The Apple Post mencatat bahwa **macOS 27 Golden Gate** adalah versi macOS pertama yang sepenuhnya khusus Apple silicon: hanya Mac dengan **chip M1 atau lebih baru** yang didukung, termasuk MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, dan Mac Pro berbasis Apple silicon, plus MacBook Neo.

Bagi pemilik Mac Intel, **macOS Tahoe 26 adalah titik akhir** untuk pembaruan sistem operasi besar. Apple menyatakan Mac Intel yang masih didukung akan terus menerima pembaruan keamanan, tapi tidak akan naik ke Golden Gate. Kabar baiknya, macOS 27 masih bisa menjalankan aplikasi Mac Intel lewat Rosetta, jadi akhir dukungan sistem operasi tidak langsung berarti akhir kompatibilitas aplikasi.

Sumber: [The Apple Post](https://www.theapplepost.com/2026/09/16/72248/macos-27-golden-gate-closes-the-door-on-intel-macs/)

## ⚡ Emerald AI, Google, dan NVIDIA Bentuk AI Energy Management Alliance

Tiga pemain teknologi meluncurkan **AI Energy Management Alliance** dengan tujuan mendorong pusat data AI yang lebih fleksibel dari sisi konsumsi energi. Pengumuman resminya menyebut Emerald AI, Google, dan NVIDIA sebagai pendiri, dan menyoroti gagasan pusat data AI yang bisa menyesuaikan beban kerjanya mengikuti kondisi jaringan listrik.

Ini bukan cerita kecil di tengah lonjakan kebutuhan daya untuk AI. Bagi pasar seperti Indonesia, arah kebijakan semacam ini relevan karena menentukan seperti apa standar efisiensi dan fleksibilitas energi yang nantinya diadopsi vendor global.

Sumber: [Business Wire](https://www.businesswire.com/news/home/20260916992694/en/Global-Technology-Pioneers-Emerald-AI-Google-and-NVIDIA-Launch-the-AI-Energy-Management-Alliance-to-Advance-Flexible-AI-Data-Centers)

## 📊 Pembaruan Pixel Watch 2, 3, dan 4: Gemini Lebih Personal

Android Police melaporkan Google menggelontorkan pembaruan untuk **Pixel Watch 2, 3, dan 4** secara global, dengan versi **CP3A.260905.002** untuk Pixel Watch 4 dan 3, serta **CP3A.260905.002.E1** untuk Pixel Watch 2. Isinya: perluasan gesture satu tangan (double pinch untuk membuka At a Glance, pusat notifikasi, menggulir respons Gemini, kartu di Wallet, metrik latihan, hingga berpindah tampilan Google Maps; plus wrist turn sebagai navigasi kembali universal), personalisasi Gemini yang belajar dari percakapan sebelumnya dan aplikasi Google yang terhubung (Gmail, Calendar, Search, YouTube, Photos), serta perbaikan _raise to talk_.

Sumber: [Android Police](https://www.androidpolice.com/google-pixel-watch-update-september-2026/) · [9to5Google](https://9to5google.com/2026/09/16/android-auto-google-maps-driving-avatar-update/)

## 💡 Insight Hari Ini

Ada satu benang merah dari semua berita hari ini: **agent AI sedang pindah dari dalam layar ke dalam infrastruktur nyata** — ke rumah Anda lewat Google Home MCP, ke repositori kode Anda lewat Git, dan ke perangkat lokal Anda lewat fitur Local Models.

Masalahnya, fondasi keamanannya belum ikut dewasa dengan kecepatan itu. GitSpawn menunjukkan bahwa agent bisa dibajak lewat file konfigurasi yang tampak sepele, sementara celah zero-click di modem Pixel mengingatkan bahwa lapisan paling dalam dari ponsel pun bisa jadi pintu masuk. Kombinasi "agent makin berkuasa" dan "permukaan serangan makin lebar" adalah tema yang akan terus muncul sepanjang sisa tahun ini.

### 🔗 Sumber Lengkap

- [The Register — Google Pixel phones pwned in zero-click attacks](https://www.theregister.com/security/2026/09/16/google-pixel-phones-pwned-in-zero-click-attacks/5296936)
- [The Verge — Google Home gets MCP support for third-party AI agents](https://www.theverge.com/tech/996310/google-home-mcp-integration-agentic-ai-smart-home-price-release-date)
- [GIGAZINE — Hermes Agent Local Models](https://gigazine.net/gsc_news/en/20260916-hermes-agent-local-ai-model/)
- [shattered.io — GitSpawn Flaw Hits 7 AI Coding Agents](https://shattered.io/gitspawn-ai-coding-agent-vulnerability-2026/)
- [MacRumors — Why Apple Just Released an iOS 27.2 Beta Instead of iOS 27.1](https://www.macrumors.com/2026/09/16/heres-why-apple-released-ios-27-2-beta/)
- [CNET — Apple Reference Images Explained](https://www.cnet.com/tech/services-and-software/apple-reference-images-explained-iphone-18-pro/)
- [Macworld — Apple outlines steep AI usage costs](https://www.macworld.com/article/3237022/apple-outlines-steep-ai-usage-costs-and-its-probably-going-to-get-worse.html)
- [Six Colors — Apple ties iCloud+ pricing to video summaries](https://sixcolors.com/post/2026/09/apple-ties-icloud-pricing-to-video-summaries/)
- [9to5Google — Everything new in Android 17 QPR2 Beta 5](https://9to5google.com/2026/09/16/android-17-qpr2-beta-5-everything-new/)
- [9to5Google — Android Canary 2609](https://9to5google.com/2026/09/16/android-canary-2609/)
- [Tech Times — Alibaba Releases Open-Weights AI Agent](https://www.techtimes.com/articles/327532/20260915/alibaba-releases-open-weights-ai-agent-claiming-frontier-co-work-scores-3b-active-parameters.htm)
- [Notebookcheck — Apple M6 SoC benchmark](https://www.notebookcheck.net/Apple-M6-SoC-impresses-in-new-benchmark-as-it-matches-Apple-M3-Max-in-multi-core-test.1400910.0.html)
- [The Apple Post — macOS 27 Golden Gate closes the door on Intel Macs](https://www.theapplepost.com/2026/09/16/72248/macos-27-golden-gate-closes-the-door-on-intel-macs/)
- [Business Wire — AI Energy Management Alliance](https://www.businesswire.com/news/home/20260916992694/en/Global-Technology-Pioneers-Emerald-AI-Google-and-NVIDIA-Launch-the-AI-Energy-Management-Alliance-to-Advance-Flexible-AI-Data-Centers)
- [Android Police — Pixel Watch update September 2026](https://www.androidpolice.com/google-pixel-watch-update-september-2026/)
