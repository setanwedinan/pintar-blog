---
title: "🤖 OpenClaw 2.0 Hadir dengan 16.000 PR, Alat AI Claude-Codex-Hermes Jadi 'Pembawa' Paket Berbahaya, & Apple Tanpa Phil Schiller di Puncak — 1 September 2026"
description: 'Rangkuman tech & AI hari ini: rilis besar OpenClaw 2.0 hasil kontribusi komunitas, riset yang menemukan alat AI agent memasang paket kode mencurigakan lewat dokumentasi llms.txt, Phil Schiller mundur dari kursi App Store, dan Android 17 QPR2 resmi mencapai platform stability.'
pubDate: 2026-09-01T00:00:00Z
tags: ['Daily Update', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

TL;DR: OpenClaw 2.0 resmi dirilis sebagai update terbesar dalam sejarah proyek AI open-source itu. Di bidang keamanan, riset baru menunjukkan Claude, Codex, dan Hermes (Nous Research) bisa terjebak memasang paket kode tak bertuan lewat dokumentasi llms.txt. Di Apple, Phil Schiller melepaskan tugasnya membidani App Store dan event produk, sementara Android 17 QPR2 mencapai platform stability.

## 🦞 OpenClaw 2.0: Update Terbesar, Dikerjakan Ribuan Kontributor

OpenClaw, agen AI open-source yang viral, merilis versi 2.0 pada 31 Agustus 2026 (versi build 2026.8.1). Proyek ini menyebutnya update terbesar dalam sejarahnya, dan angkanya fantastis: sekitar **16.000 pull request** dari komunitas masuk ke rilis ini.

Poin-poin utama dari berbagai liputan:

- **Instalasi jauh lebih mudah** — proses setup dibangun ulang dari nol, dengan "guided install" yang menyederhanakan onboarding pengguna baru [ETV Bharat, Neowin].
- **Browser app dibangun ulang** — antarmuka browser bawaan agent ini ditulis ulang, plus fitur **multiplayer sessions** yang memungkinkan beberapa orang berbagi sesi agent yang sama [The Neuron, Mashable SEA].
- **Sesi pindah ke SQLite** — Help Net Security mencatat data sesi kini disimpan di SQLite, perubahan yang disorot dari sisi keandalan penyimpanan.
- **Pengamanan kredensial diperketat** — Tech Insider menyebut rilis ini membawa "credential lockdown", perbaikan untuk persoalan keamanan yang lama dikritik. The Register bahkan menyebut rilis 2.0 sebagai percikan "glitter" di atas "security dumpster fire" yang menyala perlahan — kritik tajam, tapi sekaligus mengakui update ini signifikan.

Yang menarik, model di baliknya bebas dipilih: OpenAI, Anthropic, Google, atau model sendiri [The Neuron]. CNET menyebut fenomena ini "The Year of the Claw" — bukti bahwa agent AI open-source yang bisa self-host kini jadi kekuatan nyata di pasar yang makin ramai pesaing.

Cuma ada satu catatan lucu dari Mashable SEA: suara "ribuan Mac Mini yang menangis sekaligus" — karena agen-agen ini memang banyak dijalankan di Mac mini. Yang bawa kita ke cerita berikutnya...

## 🍎 Mac Mini Diserbu Lab AI: OpenAI Beli "Tens of Thousands", Anthropic Ikut Menyewa

Liputan dari TechRepublic, The Information (dikutip Finimize), hingga media China 财联社 (Cailianshe) mengonfirmasi tren yang sama: **OpenAI membeli puluhan ribu (tens of thousands) unit Mac mini dan Mac Studio**, dan **Anthropic menyewa Mac mini secara massal lewat cloud Amazon**. Mesin-mesin ini dipakai untuk menjalankan agent AI dan kebutuhan riset — bukan untuk konsumen.

AppleInsider menambahkan konteks: pemasok melonjaknya permintaan Mac mini dan Mac Studio ini, dan 24/7 Wall St. bahkan menyebut Apple "tiba-tiba jadi saham infrastruktur AI" karena lonjakan pembelian ini. Ini kelanjutan dari cerita kemarin soal Mac mini & Mac Studio yang laris karena permintaan AI korporat — kini nama pembelinya makin jelas.

## 🔒 Claude, Codex, dan Hermes "Terbukti Bersalah" Pasang Paket Mencurigakan

Riset keamanan baru (diliput TechRadar via Yahoo Tech, merujuk Ars Technica) menemukan celah menarik di ekosistem AI agent:

- Peneliti menganalisis **6.214 domain live** — milik kontraktor pertahanan, Fortune 500, dan big tech — dan menemukan **8.265 file llms.txt/llms-full.txt**. Dari jumlah itu, **120 file** (di situs yang berbeda-beda) menunjuk ke **paket kode dan nama domain yang tidak terdaftar**.
- Penyebabnya beragam: human error, paket yang di-rename atau ditinggalkan, salah copy/paste, atau **dokumentasi hasil halusinasi**.
- Dalam eksperimen, peneliti mendaftarkan nama-nama paket tak bertuan itu dan meng-hosting paket yang "phone home" saat dipasang. **Kurang dari satu jam, sebuah perusahaan Fortune 500 sudah mulai terhubung** — lalu bertambah jadi beberapa dozen lagi.
- Claude, OpenAI Codex, dan **Hermes dari Nous Research** semuanya "guilty": agent-agent ini terbukti memasang paket-paket unclaimed itu saat mengikuti dokumentasi.

Solusinya dua arah: perusahaan harus bersih-bersih dokumentasi mereka, dan agent AI harus berhenti memperlakukan dokumentasi sebagai instruksi yang bisa dieksekusi. Sampai itu terjadi, organisasi yang pakai AI untuk coding disarankan berhati-hati memberi izin eksekusi perintah ke agent.

## 📱 Android 17 QPR2 Capai Platform Stability + Trojan "Manic" yang Bisa Curi Data Tanpa Internet

Dua kabar Android yang layak sorotan:

- **Android 17 QPR2 Beta 4 resmi mencapai platform stability** dengan daftar panjang perbaikan bug [Android Headlines]. Android Authority menambahkan detail kecil yang disukai pengguna: Beta 4 memberi "ruang napas" lebih untuk ikon di status bar.
- Di sisi gelap, **Kaspersky mengungkap trojan Android bernama "Manic"** yang bisa mencuri kata sandi, kredensial perbankan, dan kode verifikasi — bahkan **tanpa koneksi internet**, karena attacker bisa mengontrol perangkat korban lewat jalur lain. Pengingat bagus untuk tetap disiplin install aplikasi hanya dari sumber terpercaya.

## 👋 Phil Schiller Mundur dari Kursi App Store, Event Apple Pun Ikut

Bloomberg dan Engadget melaporkan **Phil Schiller mundur dari perannya memimpin App Store dan event produk Apple**. Ia tetap menjadi Apple Fellow dan fokus pada "unspecified initiatives" (inisiatif yang tidak dirinci). Schiller adalah salah satu eksekutif paling terlihat sepanjang era Steve Jobs dan Tim Cook, jadi mundurnya dari operasional harian adalah akhir satu era — terlebih di pekan yang sama saat Tim Cook menyerahkan kursi CEO ke John Ternus (The Verge memuat pesan perpisahan Cook ke seluruh staf).

## 🗺️ Kilasan: Kontroversi "Lake America" Berlanjut

Google Maps resmi mengganti nama Lake Ontario menjadi "Lake America" untuk pengguna AS, mengikuti perintah eksekutif Presiden Trump — dan versi nama yang ditampilkan kini berbeda-beda tergantung negara pengguna [NBC News, CBC]. Efek sampingnya menarik: **MapQuest melonjak jadi aplikasi navigasi nomor satu** berkat gelombang kemarahan pengguna [dikutip di feed Google Alerts]. Reuters juga melaporkan Apple mengklaim seorang karyawan OpenAI mengakses rencana sirkuit setelah pindah ke startup itu — bagian dari gugat rahasia dagang Apple vs OpenAI yang masih berjalan.

## 💡 Insight Hari Ini

Tiga cerita di atas sebenarnya satu benang merah: **AI agent sudah jadi infrastruktur nyata** — cukup besar sampai-sampai OpenAI beli Mac mini PULUHAN RIBU unit, cukup berisiko sampai bisa dipakai jalur masuk malware lewat dokumentasi web, dan cukup matang sampai proyek open-source seperti OpenClaw merilis update 16.000 PR sekaligus. Pertanyaannya bukan lagi "apakah agent AI dipakai?", tapi "siapa yang mengamankan semuanya?"

---

**Sumber:**

- [The Register — OpenClaw 2.0 pours glitter on slow-burning security dumpster fire](https://www.theregister.com/ai-and-ml/2026/08/31/openclaw-20-pours-glitter-on-slow-burning-security-dumpster-fire/5293492)
- [Tech Insider — OpenClaw 2.0 Ships: 16000 PRs, Credential Lockdown](https://tech-insider.org/openclaw-2-0-release-credential-security-2026/)
- [The Neuron — OpenClaw 2.0 is here](https://www.theneurondaily.com/p/openclaw-2-0-is-here)
- [CNET — The Year of the Claw](https://www.cnet.com/tech/services-and-software/the-year-of-the-claw-openclaw-rolls-out-new-version-of-its-viral-ai-agent/)
- [Mashable SEA — OpenClaw 2.0 is here: A Crowdsourced update](https://sea.mashable.com/tech/54302/openclaw-20-is-here-a-crowdsourced-update-to-the-ai-agent-is-now-live)
- [SiliconANGLE — OpenClaw just gave everyone version 2.0](https://siliconangle.com/2026/08/31/openclaw-just-gave-everyone-version-2-0-and-it-comes-with-major-updates/)
- [ETV Bharat — OpenClaw 2.0 Released](https://www.etvbharat.com/en/technology/openclaw-2-0-release-openclaw-2-0-setup-guided-install-enn26083105302)
- [Help Net Security — The OpenClaw 2.0 release moves your sessions into SQLite](https://www.helpnetsecurity.com/2026/08/31/openclaw-2-0-released/)
- [TechRepublic — OpenAI Purchases Tens of Thousands of Mac minis, Mac Studios](https://www.techrepublic.com/article/news-openai-mac-mini-mac-studio-ai-agents/)
- [Korben — OpenAI and Anthropic are cleaning out Mac mini stocks](https://korben.info/en/openai-anthropic-buying-mac-mini-stock.html)
- [AppleInsider — AI needs more Macs](https://appleinsider.com/articles/26/08/31/ai-needs-more-macs-but-not-for-the-reason-you-might-assume)
- [Yahoo Tech/TechRadar — Top AI tools including Claude, Codex, and Hermes installed suspicious code](https://tech.yahoo.com/cybersecurity/articles/top-ai-tools-including-claude-120500469.html)
- [Android Headlines — Android 17 QPR2 Reaches Platform Stability](https://www.androidheadlines.com/2026/08/android-17-qpr2-reaches-platform-stability-with-beta-4-and-a-long-list-of-bug-fixes.html)
- [Android Authority — Android 17 QPR2 Beta 4 status bar](https://www.androidauthority.com/android-17-qpr2-beta-4-status-bar-icons-3704776/)
- [Kaspersky — The Manic Trojan](https://www.kaspersky.com/blog/manic-android-trojan/56323/)
- [Bloomberg — Apple's Phil Schiller Steps Down](https://www.bloomberg.com/news/articles/2026-08-31/apple-s-phil-schiller-steps-down-from-running-app-store-and-product-events)
- [Engadget — Phil Schiller reportedly steps down](https://www.engadget.com/2247924/phil-schiller-reportedly-steps-down-as-apple-app-store-and-product-event-chief/)
- [The Verge — Tim Cook's final message to Apple staff](https://www.theverge.com/tech/986832/read-tim-cooks-final-message-as-ceo-to-apple-staff)
- [Reuters — Apple alleges OpenAI employee accessed circuit plans](https://www.reuters.com/legal/government/apple-alleges-openai-employee-accessed-circuit-plans-after-joining-startup-2026-08-31/)
- [CrowdStrike — Falcon Platform on Google Cloud](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-google-announce-falcon-platform-on-google-cloud/)
