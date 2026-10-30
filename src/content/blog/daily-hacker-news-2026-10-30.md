---
title: 'Extension resmi Claude Code di VS Code dan Cursor disusupi backdoor SSH, dan Anthropic belum bicara'
description: 'Rangkuman Hacker News 30 Oktober 2026: versi 2.1.313 extension Claude Code untuk VS Code/Cursor terbukti membawa backdoor SSH yang menyebar otomatis lewat auto-update, Cursor menyebut sekitar 5.000 sistem terdampak, Azure API Connections membuka lima jalur kompromi lintas tenant dengan total bounty 200 ribu dolar, dan elect.horse jadi hiburan hari ini dengan 301 poin.'
pubDate: 2026-10-30T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## 🔍 TL;DR

- **Extension resmi Claude Code untuk VS Code/Cursor versi 2.1.313** membawa payload yang menambahkan SSH key penyerang ke `authorized_keys`, mengaktifkan SSH, lalu membuka reverse tunnel. Versi 2.1.314 sudah menggantikannya, tapi tidak membersihkan mesin yang sudah terinfeksi. _(Phorion, Cursor, DoublePulsar)_
- Extension itu **auto-update**, jadi menurut Kevin Beaumont setiap organisasi yang memakainya "akan terdampak". **Cursor** menyebut sekitar **5.000 sistem developer** kena. _(DoublePulsar)_
- Payload-nya **berjalan saat modul di-load** — pengguna tidak perlu mengklik apa pun. Ia mengumpulkan hostname, username, OS, arsitektur, home directory, nama environment variable, working directory, email Git, dan public IP. _(Phorion, Cursor)_
- **Binary Security** memenangkan total **$200.000** dari lima kerentanan elevation-of-privilege di Azure API Connections, termasuk baca tulis lintas tenant ke Key Vault dan Azure SQL. _(binarysecurity.no)_
- Di sisi ringan: **elect.horse** — yang menyebut dirinya "the daily gerrymandering puzzle" — masuk jajaran teratas HN dengan **301 poin** dan **82 komentar**.

## 🪝 Backdoor di dalam extension yang paling dipercaya developer

Cerita hari ini datang dari tempat yang paling tidak nyaman: extension resmi, yang di-auto-update, di dalam editor yang dipakai puluhan juta developer.

**Phorion** adalah yang pertama menangkapnya di endpoint. Mereka menemukan bahwa bundel extension **Claude Code for VS Code** di Cursor Marketplace membawa file `extension.js` yang sudah disisipi IIFE di bagian paling atas — sebelum kode asli extension, sebelum callback `activate`, dan tetap terlihat seperti bundel normal setelahnya. Artinya payload berjalan **begitu Node memuat file itu**, tanpa interaksi pengguna sama sekali.

Yang dikerjakannya, berurutan:

1. Memastikan `~/.ssh` ada, lalu menambahkan **public key Ed25519 milik penyerang** ke `~/.ssh/authorized_keys` dengan permission `0700` di direktori dan `0600` di file.
2. Mencoba menyalakan SSH daemon — `systemctl` di Linux, `sudo -n systemsetup -setremotelogin on` di macOS, instalasi OpenSSH Server via PowerShell di Windows.
3. Membuka **reverse SSH tunnel** supaya penyerang bisa memilih endpoint mana yang mau diakses dengan tangan sendiri.
4. Menanam persistence: LaunchAgent `com.apple.sysmond.plist` di macOS, entri `@reboot` cron di Linux, scheduled task `SysMon` plus `sysmon.cmd` di folder Startup untuk Windows.

Kevin Beaumont, yang menulis analisisnya di DoublePulsar, menyebut ini **supply chain attack** dan menegaskan skalanya: "That extension has millions of installs, one of the most popular extensions in DevOps. It creates a reverse SSH backdoor."

### Bagian yang membuat saya berhenti membaca dua kali

Menurut Beaumont, Anthropic **menghapus versi jahat itu tanpa memberi tahu siapa pun**. Versi 2.1.313 hilang dari Open VSX, Visual Studio Marketplace, dan Cursor, digantikan 2.1.314 yang terlihat bersih. Tapi — dan ini bagian pentingnya — versi pengganti itu **tidak** menghapus SSH backdoor yang sudah tertanam di mesin korban, juga tidak membersihkan jejak recon sebelumnya. Kalau kamu pernah menjalankan 2.1.313, update otomatis tidak menyelamatkanmu.

Cursor sendiri mengakui insidennya di blog mereka, dengan kalimat yang menarik dibaca pelan-pelan:

> "The extension runs malicious code that attempts to install a persistent SSH backdoor... Attempts to add an attacker-controlled SSH key to `authorized_keys`, enable the local SSH service, and open a reverse SSH tunnel. Outside of highly unusual circumstances where Cursor was started with administrator privileges, due to errors in the malicious code, this step would fail."

Jadi menurut Cursor, langkah paling berbahaya kemungkinan besar gagal di mayoritas kasus karena butuh hak administrator. Phorion juga menemukan **bug di payload itu sendiri**: di macOS, `systemsetup -getremotelogin` dijalankan tanpa elevasi, menghasilkan pesan error yang exit code-nya `0`, sehingga pengecekan `/Off/i` tidak pernah cocok dan SSH tidak dinyalakan. Di Windows, perintah PowerShell-nya dikirim lewat helper yang meng-hardcode `/bin/sh` — yang tidak akan jalan di Windows biasa.

Tapi bug yang menyelamatkan sebagian korban bukan alasan untuk santai. Recon-nya tetap berhasil terkirim: hostname, username, OS, arsitektur, path home, nama environment variable, working directory, email Git, public IP. Itu sudah cukup untuk memetakan siapa saja developer di sebuah organisasi, memakai alat apa, dan di repo mana mereka bekerja.

### Kalau kamu memakai extension ini

Yang perlu dicek, dari indikator di advisory Phorion:

- Versi extension `2.1.313` di VS Code, Cursor, atau Open VSX.
- Public key dengan komentar `svc-telemetry` di `~/.ssh/authorized_keys` — tapi cek **fingerprint**-nya, bukan cuma string komentarnya, karena pengecekan di malware itu sendiri hanya mencocokkan komentar.
- File `~/.config/.smt` dan `~/.config/.smtk` (macOS/Linux), `~/.config/smt.cmd` dan `~/.config/smtk` (Windows).
- LaunchAgent `com.apple.sysmond.plist` di macOS; scheduled task bernama `SysMon` di Windows.

Beaumont juga menyebut server C2 penyerang sekarang sudah offline. Tapi rekomendasi di thread-nya tetap sama: putuskan mesin dari jaringan, rotasi semua API key, token, dan sesi login dari mesin yang bersih — baru urus mesinnya.

Yang paling saya sesalkan dari cerita ini bukan soal bug-nya. Ini soal **timing komunikasi**. Extension yang menyentuh source code dan kredensial cloud dijalankan oleh tim engineering di mana-mana, dan diam-diam mengganti versi tanpa disclosure berarti setiap organisasi kehilangan jendela waktu untuk mencari jejak infeksi di log mereka sendiri.

## ☁️ Azure API Connections: lima jalan masuk lintas tenant, 200 ribu dolar

Cerita kedua datang dari **Binary Security**, yang melanjutkan seri "Azure's Weakest Link" mereka. Intinya: **API Connections** di Azure Logic Apps memungkinkan siapa pun mengompromikan koneksi milik orang lain di seluruh dunia, dan lewat koneksi itu mendapatkan akses penuh ke backend yang tersambung — termasuk Key Vault dan Azure SQL milik tenant lain.

Akarnya arsitektural. Sebuah Logic App memanggil instance Azure API Management bersama, APIM memeriksa definisi OpenAPI dari tipe connector, menukar token input dengan token backend yang tersimpan di koneksi, lalu memanggil backend. Karena ARM punya akses ke semua koneksi, cukup menipu lapisan itu agar memakai koneksi milik orang lain, dan token korban jadi milik kita.

Tim itu menemukan lima varian, semuanya elevation of privilege kritis:

- **`DynamicInvoke` dengan path traversal** — `path/%2e%2e/%2e%2e/.../apim/keyvault/<id>/secrets/victimsecret/value` mengembalikan secret tenant lain. Total bounty dari seluruh rangkaian: **$200.000**.
- Setelah diperbaiki dengan blacklist path, mereka menemukan **tiga endpoint tak terdokumentasi** di samping `DynamicInvoke` — `DynamicList` dan kawan-kawan — yang tidak ikut dipatch. `DynamicList` cukup untuk menulis query SQL arbitrer ke database korban.
- Perbaikan berikutnya memblokir semua endpoint itu, jadi mereka pindah jalur: memakai parameter `host.api` / `runtimeUrl` di alur pembuatan koneksi Logic Apps v2 untuk menunjuk backend yang sama sekali berbeda, asal host-nya berakhiran `azure-apihub.net`.
- Perbaikan untuk itu memvalidasi `runtimeUrl` — tapi **sebelum path dinormalisasi**, sehingga path traversal di dalam URL lolos lagi.

Semua sudah dilaporkan dan diperbaiki. Yang saya bawa pulang dari tulisan ini: validasi input yang ditambal per-endpoint, per-parameter, adalah pola yang hampir pasti kalah. Penyerang tidak perlu menemukan bug baru; cukup mencari pintu yang lupa dipasangi kunci yang sama.

## 🐴 elect.horse

Story paling ringan di jajaran atas hari ini judulnya cuma dua kata: **elect.horse** — 301 poin, 82 komentar. Situsnya menyebut dirinya sebagai "the daily gerrymandering puzzle": puzzle harian soal **gerrymandering**, praktik menggeser batas daerah pemilihan untuk menguntungkan satu pihak. Saya sebut di sini karena kadang yang menarik dari HN bukan berita besar, tapi orang yang mengubah topik yang biasanya dibaca sebagai laporan riset jadi sesuatu yang bisa dimainkan lima menit sambil sarapan.

## 🗣️ Pendapat saya

Ada satu pola yang menghubungkan dua cerita besar hari ini, dan menurut saya itu bukan kebetulan.

Extension Claude Code disusupi bukan karena ada orang menulis backdoor dari nol, tapi karena **rantai distribusi** — marketplace, auto-update, registry — diperlakukan sebagai detail operasional, bukan permukaan serangan. Azure API Connections punya masalah yang sama bentuknya: satu lapisan bersama (APIM) yang dipercaya oleh semua tenant, dengan validasi yang ditempel di pinggir, bukan di inti.

Dua-duanya soal **kepercayaan yang diberikan terlalu cepat pada lapisan yang tidak pernah kita audit**. Kita menginstal extension karena namanya resmi. Kita memakai connector karena Microsoft yang membuatnya.

Pertanyaan untuk kalian: berapa banyak extension di VS Code atau Cursor kalian yang punya izin baca seluruh workspace dan kredensial, dan kapan terakhir kali kalian benar-benar memeriksa apa yang berjalan saat editor dibuka?

## 🔗 Sumber

- [Backdoors in official Claude Code extensions — diskusi Hacker News (549 poin, 162 komentar)](https://news.ycombinator.com/item?id=50302334)
- [Kevin Beaumont di cyberplace.social — utas awal dan pembaruan](https://cyberplace.social/@GossiTheDog/117528831681803563)
- [Anthropic hacked to deliver remote access trojan to Claude developer laptops worldwide — DoublePulsar](https://doublepulsar.com/anthropic-hacked-to-deliver-remote-access-trojan-to-claude-developer-laptops-worldwide-1148a92baae2)
- [Official Claude Code Extension Compromise: Security Advisory — Phorion](https://phorion.io/blog/offical-claude-code-vsx-compromise/)
- [Security notice — malicious version of Anthropic.claude-code (2.1.313) — Cursor](https://cursor.com/blog/claude-code-extension-security-notice)
- [Azure's Weakest Link – Five Full Cross-Tenant Compromises — Binary Security](https://www.binarysecurity.no/posts/2026/10/one-root-case)
- [Azure's Weakest Link — bagian 1](https://binarysecurity.no/posts/2025/03/api-connections) dan [bagian 2](https://binarysecurity.no/posts/2025/08/azures-weakest-link-part2)
- [elect.horse — diskusi Hacker News](https://news.ycombinator.com/item?id=50301462)
