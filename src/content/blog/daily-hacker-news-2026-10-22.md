---
title: 'LiteLLM disusupi backdoor dua jam di PyPI, dan Claude sekarang jadi agen yang kerja sendiri'
description: 'Rangkuman Hacker News 22 Oktober 2026: paket LiteLLM 1.107.0 membawa pencuri kredensial dan backdoor selama kurang lebih dua jam di PyPI, Railway mengakui environment variables pelanggan mungkin sudah dibaca pihak lain, GitLab menambal lubang RCE tanpa autentikasi sejak versi 7.0, dan Claude Duet mengubah Claude jadi agen yang menunggu persetujuan kamu.'
pubDate: 2026-10-22T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- Paket **LiteLLM 1.107.0** di PyPI membawa pencuri kredensial dan backdoor, hidup dari pukul 11.39 sampai 13.23 UTC pada 21 Oktober, dan ikut masuk ke empat tag Docker Hub _(safedep.io, LiteLLM)_
- **Railway** mengakui ada pihak tak berwenang yang mungkin sudah mengakses environment variables terenkripsi pelanggan, dan untuk sebagian berhasil membuka isinya _(blog.railway.com)_
- **GitLab** merilis patch kritis untuk CVE-2026-110264: integer overflow di compiler regex yang bisa dipakai menjalankan kode tanpa login, menimpa semua rilis sejak 7.0 _(docs.gitlab.com)_
- **Claude Duet** masuk research preview: agen proaktif di iOS, Android, dan web yang bekerja di latar belakang lalu berhenti menunggu persetujuan kamu _(claude.com)_
- **WorldTUI** membuktikan model 360 juta parameter bisa "menjadi" terminal, lengkap dengan vim, tmux, dan snake _(simedw.com)_

## 🧨 LiteLLM: dua jam yang cukup untuk mengambil semua kunci kamu

Kalau kamu pernah menjalankan LiteLLM — gateway open source yang dipakai banyak orang untuk menyatukan berbagai provider LLM — ini bagian yang perlu kamu baca pelan-pelan.

Rilis **1.107.0** di PyPI ternyata tidak dibangun dari kode aslinya. Ketujuh wheel-nya (Linux, macOS, Windows) membawa tiga file tambahan di dalam `site-packages`. Dua di antaranya jalan **setiap kali Python di host itu menyala**, termasuk saat kamu cuma menjalankan pip atau language server di editor.

Isi ketiga file itu, menurut analisis SafeDep:

- `cook.pth`, 12 byte, isinya cuma `import cook`
- `cook.py`, 22.252 byte, pencuri kredensial
- `sitecustomize.py`, 25.509 byte, loader backdoor sekaligus stealer kedua

Yang dikumpulkan bukan main-main: kunci SSH, kredensial cloud, secret CI/CD, token alat AI, password browser, sampai kunci provider LLM yang tersimpan di database LiteLLM proxy. Datanya dienkripsi lalu dikirim ke `www.litellm[.]dev`. File `sitecustomize.py` juga menyalakan daemon yang tiap jam membaca alamat server dari sebuah file di GitHub, menjalankan stealer lagi, lalu mengunduh dan mengeksekusi kode dari server itu.

Jendela waktunya sempit, tapi cukup. Menurut laporan insiden LiteLLM sendiri, wheel-nya hidup di PyPI dari **11.39.51 sampai 13.23 UTC**, sementara tag Docker Hub `v1.107.0`, `latest`, `main-latest`, dan `main-stable` mengarah ke image yang tercemar dari 11.46.56 sampai 14.20 UTC.

Cara masuknya justru bagian yang paling bikin ngga nyaman. Penyerang memegang kredensial GitHub CLI milik **tiga developer**. Salah satunya milik seorang owner organisasi, dan token itu dipakai mematikan branch protection untuk memaksa perubahan pada workflow rilis. Setelah itu workflow resmi diarahkan ke repo kembar, `Berri-AI/litellm` — beda satu huruf dari `BerriAI/litellm` — dan pipeline resmi yang membangun, menandatangani, serta mempublikasikan artefak itu.

Dari mana tokennya bocor? LiteLLM menduga dari log deployment LiteLLM internal mereka sendiri yang terbuka ke internet. Di laporan itu disebutkan ada situasi di mana **Claude Code menyisipkan token OAuth GitHub CLI pengguna ke dalam body respons**, dan body itu ikut tercatat di log.

Versi yang bersih: **1.106.2**, `1.107.0rc1`, dan `1.107.0rc2`. Kalau kamu sempat pasang 1.107.0 di mesin yang punya akses internet keluar, LiteLLM menyarankan menganggap eksfiltrasinya berhasil, bukan berharap sebaliknya.

## 🚂 Railway: environment variables yang mungkin sudah dibaca orang lain

Di hari yang sama, Railway merilis pengakuan singkat yang dampaknya luas.

Mereka mendeteksi aktivitas anomali pada sistem yang menyimpan environment variables pelanggan. Investigasi awal menunjukkan pihak ketiga tak berwenang **mungkin sudah mengakses environment variables terenkripsi, dan untuk sebagian berhasil mendapatkan isinya dalam bentuk terdekripsi**.

Artinya: API key, kredensial database, dan kredensial registry yang kamu simpan di sana harus dianggap sudah tidak rahasia lagi. Railway meminta semua pengguna merotasi seluruh environment variables, mencabut kredensial registry privat, dan memeriksa log layanan untuk aktivitas janggal. Semua deployment dijeda selama investigasi.

Yang menarik justru dugaan mereka soal motifnya. Railway menulis mereka percaya ini bagian dari rangkaian serangan yang belakangan menyasar perusahaan platform, dengan tujuan membobol **penyedia inferensi AI**. Mereka sudah menghubungi penyedia upstream untuk mencabut semua kunci lebih dulu.

Dua insiden ini kalau dibaca berdampingan bukan kebetulan yang nyaman. Yang dicari bukan data pengguna, tapi kunci.

## 🧩 GitLab: regex yang bisa menjalankan kode tanpa login

GitLab merilis patch kritis pada 21 Oktober untuk **CVE-2026-110264**: integer overflow saat compiler regex mengolah ekspresi tertentu. Kalau berhasil dipicu, pengguna tanpa autentikasi bisa menjalankan kode sembarang di server GitLab.

Cakupannya lebar. Versi yang kena adalah semua rilis dari **7.0** sampai sebelum 18.11.13, ditambah 19.0 sebelum 19.0.10, 19.1 sebelum 19.1.9, 19.2 sebelum 19.2.9, 19.3 sebelum 19.3.6, 19.4 sebelum 19.4.3, dan 19.5 sebelum 19.5.1.

Kalau kamu menjalankan GitLab self-managed, naik ke 19.5.1, 19.4.3, 19.3.6, 19.2.9, 19.1.9, 19.0.10, atau 18.11.13. GitLab.com dan tenant GitLab Dedicated yang sudah di versi internal terbaru tidak perlu melakukan apa-apa.

## 🤖 Claude Duet: agen yang berhenti dan menunggu kamu bilang oke

Anthropic membuka **Claude Duet** sebagai research preview, dan bentuknya bukan chat lagi.

Duet adalah aplikasi terpisah untuk iOS dan Android, plus versi web di claude.ai. Ia bekerja di latar belakang, menyusun brief pagi, menandai apa yang butuh perhatianmu di inbox dan kalender, lalu diam sampai ada yang benar-benar perlu keputusanmu. Untuk tugas besar — bikin deck, dashboard, atau menyiapkan payroll — ia mengerjakan dulu, baru melapor.

Dua detail teknisnya penting. Pertama, Duet ditenagai **Opus 5.5** dan tersambung ke lebih dari **6.000 konektor dan plug-in**, dari Stripe sampai QuickBooks. Kedua, selama masa preview ia **memakai kuota yang sama dengan Claude biasa**, dan pekerjaan latar belakang ikut dihitung.

Yang patut dicatat: Anthropic menulis sendiri batasannya. Duet bisa salah membaca sebuah thread, salah menilai mana yang mendesak, atau melewatkan sesuatu yang masuk di antara dua pengecekan. Aksesnya juga masih terbatas untuk pelanggan Pro dan Max di Amerika Serikat lewat waitlist, dan belum masuk paket Team maupun Enterprise.

## 🖥️ WorldTUI: terminal palsu dari model 360 juta parameter

Ini proyek yang paling menarik perhatian hari ini. SimEdw melatih model **360 juta parameter** untuk berperan sebagai terminal. Tidak ada shell, tidak ada filesystem. Setiap ketukan tombol masuk, dan model memprediksi bagaimana layar berubah.

Basisnya Qwen2.5-Coder-0.5B, di-fine-tune dengan sesi terminal yang direkam dari program sungguhan di dalam Docker. Karena terminal cuma grid karakter, data latihnya bisa dibuat sebanyak yang dia mau, dan labelnya otomatis benar.

Trik yang bikin ini jalan bukan sekadar "prediksi teks berikutnya". Model memprediksi **baris mana yang berubah dan ke mana kursor pindah**, dengan operasi `COPY` untuk scroll supaya satu tombol enter tidak perlu menulis ulang 96 kolom. Hasilnya: vim jalan, tmux jalan, snake jalan, dan biasanya ia masih ingat apa yang kamu tulis beberapa perintah sebelumnya.

Demo-nya 208 MB dan butuh WebGPU di browser desktop. Coba ketik `pythoon` — di situ kamu akan sadar tidak ada shell sungguhan di baliknya.

## 🎮 Switch 2 akhirnya dijebol, dengan bantuan Codex dan saklar lampu

Pepsipu merilis **ns2jb**, jailbreak Switch 2 yang murni software dan bekerja di firmware terbaru 23.0.1. Menurut penulisnya, ini eksploit pertama sejenis untuk Switch 2. Hasilnya: kode native bisa jalan sebagai sysmodule biasa maupun sebagai sysmodule `fs` bawaan, cukup untuk homebrew, mod game, dan backup save.

Jalur masuknya lewat WebKit n-day yang dimuat dari captive portal Wi-Fi buatan sendiri. Bagian yang paling unik: untuk membuat Codex bisa menguji ini tanpa dia duduk di depan konsol, dia memasang dua JetKVM plus **saklar lampu Bluetooth dari Amazon** yang fungsinya menekan tombol power saat Switch 2 crash.

Penulisnya juga menegaskan satu hal yang mudah disalahpahami dari tangkapan layar di postingannya: prompt "set a goal to jailbreak the switch 2" itu cuma keterangan lucu. Jailbreak-nya sendiri makan usaha sekitar dua minggu. Yang benar-benar dikerjakan dalam sehari cuma mod Mario Kart World, dan itu pun buat senang-senang.

## 🗣️ Pendapat saya

Dua insiden hari ini — LiteLLM dan Railway — bukan dua cerita terpisah. Keduanya berakhir di tempat yang sama: kunci.

Yang bikin saya agak pesimis, serangan LiteLLM tidak membobol kode mereka. Kode sumber di GitHub bersih. Yang dijebol adalah rantai kepercayaan di sekitarnya: token developer, branch protection, approval gate, dan pipeline yang sebenarnya sudah diperketat setelah insiden Maret. Penyerang cukup memegang kredensial yang salah orang, lalu pipeline resmi sendiri yang menandatangani malware-nya.

Dan penyebab bocornya token itu, kalau dugaan mereka benar, adalah token yang nyangkut di body respons alat AI lalu ikut tercatat di log. Itu jenis kebocoran yang ngga akan muncul di audit keamanan biasa, karena tidak ada yang "diretas" — cuma ada sesuatu yang tercetak di tempat yang salah.

Soal Claude Duet, saya belum bisa menilai produknya karena aksesnya masih waitlist dan saya belum pegang. Yang saya catat cuma satu: model bisnisnya sekarang mengarah ke agen yang menghabiskan kuota saat kamu tidur. Itu keputusan desain yang wajar, tapi juga berarti tagihan dan kepercayaan jadi dua hal yang harus kamu pantau bersamaan.

Untuk GitLab, tidak ada yang perlu diperdebatkan. Kalau kamu punya instance self-managed yang masih di 18.x, jadwalkan upgrade malam ini. Bug di compiler regex yang bisa dipicu tanpa login itu bukan sesuatu yang bisa ditunda sampai akhir bulan.

Tapi… ada tapinya. Semua saran "rotasi semua kredensial" kedengarannya mudah sampai kamu menghitung berapa banyak service yang memakai kunci yang sama di lima tempat berbeda. Di situ baru kelihatan bahwa kebanyakan dari kita menyimpan rahasia dengan cara yang cuma aman selama tidak ada yang bertanya.

Kalian sendiri, kalau LiteLLM atau Railway kena di stack kalian minggu ini, sudah tahu kunci mana saja yang harus diganti — atau baru akan mulai mencarinya sekarang?

## 🔗 Sumber

- [Compromised LiteLLM 1.107.0 on PyPI Installs a Credential Stealer and Backdoor — SafeDep](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/)
- [Contained: Oct 21, 2026 LiteLLM release v1.107.0 Compromised — LiteLLM](https://www.litellm.ai/blog?post=security-incident-oct-21-2026)
- [Security Disclosure: Wednesday October 21st — Railway](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)
- [GitLab Critical Patch Release: 19.5.1 dan lainnya — GitLab Docs](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/)
- [Claude Duet — Anthropic](https://claude.com/product/claude-duet)
- [WorldTUI: I trained a 360M model to pretend to be a terminal — SimEdw](https://simedw.com/2026/10/21/world-model-terminal/)
- [Jailbreaking the Switch 2 — pepsipu](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/)
- [Diskusi Hacker News, 22 Oktober 2026](https://news.ycombinator.com/)
