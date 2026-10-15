---
title: "Android perkuat pertahanan anti-scam, OpenAI tuduh mantan karyawan bocorkan perangkat AI ke Apple"
description: "Google meluncurkan mode enhanced protection di Google Messages berbasis Gemini cloud, OpenAI menuduh mantan karyawan mengunduh 100 lebih berkas rahasia perangkat AI lalu mempresentasikannya ke petinggi Apple, plus Apigee hybrid 1.17.0 dan Hermes Agent v0.22.0."
pubDate: 2026-10-15T00:00:00Z
<!-- TAG:START -->tags: ['berita', 'Tech', 'AI', 'Google', 'Apple']<!-- TAG:END -->
---

## 🔍 TL;DR

- **Mode enhanced protection** di Google Messages memakai model Gemini cloud untuk menilai niat penipu dalam percakapan dengan pengirim tak dikenal — sifatnya **opt-in** dan bergulir dalam beberapa minggu ke depan. _(Google Blog, The Verge)_
- Deteksi scam Android kini menandai **lebih dari 5 juta** panggilan dan pesan mencurigakan setiap bulan, dan peringatan scam di notifikasi chat diperluas ke ratusan juta perangkat Honor, Motorola, Oppo, OnePlus, Xiaomi, dan lainnya akhir tahun ini. _(Google Blog)_
- **OpenAI menuduh mantan karyawan** mengunduh **lebih dari 100 berkas rahasia** perangkat AI yang belum dirilis, lalu mempresentasikan rencana produk ke pimpinan senior Apple termasuk wakil presiden operasi Asia. _(CNN)_
- **Apigee hybrid 1.17.0** membawa dukungan MCP agar API di kluster Kubernetes sendiri bisa dipanggil agen AI tanpa traffic keluar dari infrastruktur pelanggan. _(Google Developers Blog)_
- **Hermes Agent v0.22.0** dengan nama sandi Threshold Release meluncur 14 Oktober 2026 dengan onboarding tanpa provider dan sistem Connectors baru. _(Nous Research)_

## 🛡️ Android: Enhanced Protection Melawan Penipuan yang Makin Licin

Google mengumumkan paket pertahanan baru pada **14 Oktober 2026** lewat blog resminya. Intinya satu: penipu sekarang main drama panjang — percakapan slow-burn yang niat jahatnya baru kelihatan setelah berminggu-minggu. Filter lama yang cuma lihat per pesan jadi gampang dikibuli.

Solusinya adalah **mode enhanced protection** di Google Messages, pengaturan opt-in yang membuka tiga lapis pertahanan:

- **Scam Detection dengan Private AI Compute**: untuk percakapan dengan pengirim tak dikenal, Google Messages memakai model Gemini cloud paling mumpuni untuk menilai konteks dan niat penipu lebih cepat. Datanya dienkripsi dan diproses di ruang aman khusus yang tidak bisa diakses siapa pun, termasuk Google sendiri.
- **Pemeriksaan tautan dengan Gemini Nano**: URL yang belum terkatalog — trik favorit penipu yang rajin mendaftarkan domain baru — dinilai memakai sinyal web real-time di perangkat sebelum kamu ketuk.
- **Checkpoint tautan asing**: peringatan yang didesain ulang memberi waktu jeda sebelum membuka link dari nomor yang tidak tersimpan di kontak. Fitur ini sebelumnya cuma ada di negara tertentu atau perangkat dengan Advanced Protection.

Selain itu ada dua pengaman panggilan: aplikasi diblokir mengaktifkan penerusan panggilan diam-diam, dan info sensitif otomatis disembunyikan saat screen-sharing di Chrome dan WebView — kolom login dan layar pembayaran jadi blank saat sesi berbagi layar aktif.

Angkanya lumayan mencengangkan: Scam Detection di Phone by Google dan Google Messages kini menandai **lebih dari 5 juta** panggilan dan pesan mencurigakan setiap bulan. Survei Google bersama YouGov di AS, Kanada, dan Australia menyebut **40 persen** pengguna ponsel kini sangat atau amat khawatir soal penipuan mobile. Dan laporan Leviathan Security Group yang dipesan Google menempatkan Android sebagai perangkat dengan perlindungan anti-scam bawaan tertinggi. _(Google Blog)_

Tapi… ada tapinya. Mode terkuatnya **opt-in** — artinya pengguna yang paling rentan (orang tua, pengguna awam) kemungkinan besar tidak akan menyalakannya. Dan klaim "tertinggi" datang dari laporan yang dipesan Google sendiri, jadi baca dengan kacamata kritis.

## ⚖️ OpenAI vs Apple: Saling Tuduh Curi Rahasia Perangkat AI

Drama hukum dua raksasa ini naik babak baru. OpenAI mengajukan dokumen pengadilan pada **14 Oktober 2026** yang menuduh mantan karyawan mencuri kekayaan intelektual terkait perangkat yang belum dirilis, lalu membagikan sebagian informasinya ke Apple.

Kronologinya menurut filing OpenAI: karyawan itu sebelumnya bekerja di Apple, pindah ke OpenAI selama **enam bulan**, lalu kembali lagi ke Apple. Sebelum pergi, ia diduga mengunduh **lebih dari 100 berkas sangat rahasia** ke akun pribadi — termasuk gambar detail perangkat yang belum dirilis plus data teknik dan manufaktur. Berkas terakhir dikirim pada Juni, tepat di hari terakhirnya bekerja.

Yang paling pedas: OpenAI mengklaim mantan karyawan itu **mempresentasikan rencana produk OpenAI ke pimpinan senior Apple**, termasuk wakil presiden operasi Apple di Asia. "Presentasi itu tampaknya terjadi berbulan-bulan lalu — dan sekarang, berbekal informasi itu, Apple melakukan dorongan baru ke produk berbasis AI," tulis OpenAI.

Apple membantah: tidak menemukan bukti yang mendukung tuduhan, punya kebijakan ketat agar karyawan baru tidak memakai info rahasia tempat kerja lama, dan akan bekerja sama meremediasi bila ada info OpenAI di sistemnya. Apple juga menuduh OpenAI cuma cari pengalihan dari gugatan awal.

Konteksnya: Apple menggugat OpenAI pada **Juli 2026** dengan tuduhan OpenAI mencuri rahasia dagang iPhone lewat mantan karyawan untuk mengembangkan gadget AI-nya sendiri. OpenAI membantah dan meminta gugatan dibatalkan. Kedua perusahaan memang lagi balapan bikin perangkat AI — Apple baru saja mengumumkan HomeView, OpenAI dikabarkan menyiapkan smart speaker kecil tanpa layar dan menggandeng mantan bos desain Apple lewat akuisisi io. Fakta seru dari filing Apple: OpenAI telah mempekerjakan **lebih dari 400 mantan karyawan Apple**. _(CNN)_

## 🔌 Apigee Hybrid Bisa Jadi MCP Server di Kluster Sendiri

Kabar developer dari Google: **Apigee hybrid 1.17.0** (rilis 14 September 2026) kini mendukung Model Context Protocol. Artinya API yang sudah diamankan dan dikatalogkan di Apigee bisa langsung jadi tools yang ditemukan dan dipanggil agen AI — tanpa menulis kode MCP server sendiri.

Yang berubah khusus hybrid adalah lokasinya: **data plane MCP berjalan di dalam kluster Kubernetes milik pelanggan**, bukan di infrastruktur Google. Traffic request tidak pernah keluar kluster saat runtime, dan konfigurasinya di-pull dari dalam (sidecar menjemput ke control plane), jadi control plane Google tidak pernah membuka koneksi masuk ke jaringan pelanggan. Cocok untuk yang terikat regulasi residensi data.

Kontrol aksesnya memakai konsep API product yang sudah ada: tiap tool operation didaftarkan ke produk API tertentu, lengkap dengan kuota per tool. Saat agen memanggil `tools/list`, ia cuma melihat tools yang memang boleh dilihatnya. Agen tidak bisa memanggil `delete_account` kalau tidak pernah diberi izin melihatnya. _(Google Developers Blog)_

## 🪽 Hermes Agent v0.22.0: Threshold Release

Kabar yang jarang muncul tapi selalu layak dicatat kalau ada: **Hermes Agent v0.22.0** dengan nama sandi Threshold Release diumumkan **14 Oktober 2026** lewat akun Nous Research. Fokusnya onboarding yang jauh lebih mulus — tidak perlu menyambungkan provider dulu untuk mulai bekerja — plus sistem **Connectors** baru yang mempermudah koneksi ke aplikasi: tinggal klik install dan login.

Cuitan Teknium menyebut lebih dari **2.500 orang** berkontribusi di versi ini dan mengklaimnya sebagai lompatan antar-versi terbesar sejauh ini. Catatan rilis lengkap ada di GitHub NousResearch/hermes-agent. _(X/Twitter Nous Research dan Teknium)_

## 🗣️ Pendapat saya

Cerita OpenAI vs Apple ini yang paling bikin saya garuk kepala. Dua perusahaan saling tuduh dengan pola yang mirip banget: mantan karyawan, unduhan berkas rahasia, perangkat AI yang belum rilis. Saya ngga tahu siapa yang benar — pengadilan yang akan menentukan — tapi polanya menunjukkan satu hal: perang perangkat AI berikutnya bakal dimenangkan oleh siapa yang paling dulu mengamankan rantai orang dalamnya, bukan cuma teknologinya.

Soal fitur anti-scam Google, saya apresiasi pendekatannya yang berlapis. Tapi saya tetap skeptis sama satu hal: fitur terbaik yang opt-in itu nasibnya hampir selalu sama — dipakai segelintir orang melek teknologi, dilewatkan jutaan orang yang justru paling butuh. Kalau Google serius, mode ini harusnya nyala default dengan opsi mematikan, bukan sebaliknya.

Kalau kalian yang pegang HP Android keluarga: fitur anti-scam apa yang paling ingin kalian nyalakan duluan buat orang tua kalian?

## 🔗 Sumber

- [Google Blog — New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/)
- [The Verge — Android is using AI to suss out scammers in Google Messages](https://www.theverge.com/tech/1010928/android-scam-protection-enhanced-protection-google-messages)
- [CNN — OpenAI accuses former employee of leaking intel on AI device to Apple](https://www.cnn.com/2026/10/14/tech/openai-accuses-former-employee-of-leaking-intel-on-ai-device-to-apple)
- [Google Developers Blog — Announcing MCP support in Apigee hybrid](https://developers.googleblog.com/announcing-mcp-support-in-apigee-hybrid-agentic-tools-that-run-in-your-own-cluster/)
- [Nous Research di X — Hermes Agent v0.22.0: The Threshold Release](https://x.com/NousResearch/status/2110385143643091204)
- [Reuters — Apple asks US court to overturn 5.7 billion dollar patent verdict](https://www.reuters.com/legal/litigation/apple-asks-us-court-overturn-landmark-57-billion-patent-verdict-2026-10-14/)
