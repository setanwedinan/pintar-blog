---
title: 'Linux 7.3 keluar dengan 18.765 commit, dan bahasa pemrograman yang sengaja dibikin susah untuk LLM'
description: 'Rangkuman Hacker News 19 Oktober 2026: kernel Linux 7.3 rilis dengan rekor 18.765 commit dari 3.021 developer, KillSwitch bahasa esoterik yang dirancang menipu agen coding, HybridAgents mencampur penalaran laten dengan teks, Timestral Mistral 209 juta parameter memimpin tiga benchmark peramalan, dan RepRapMicron mencetak objek dengan lapisan 4 mikrometer.'
pubDate: 2026-10-19T13:00:00Z
tags: ['berita', 'Hacker News']
---

## 🔍 TL;DR

- **Linux 7.3** resmi rilis dengan **18.765 commit non-merge** dari **3.021 developer**, 807 di antaranya baru pertama kali berkontribusi ke kernel. _(LWN.net)_
- **KillSwitch**, bahasa pemrograman esoterik buatan Dominik Picheta, dirancang supaya LLM dan agen coding kesulitan membacanya — spesifikasinya bahkan memuat kebohongan tersembunyi. _(blog.picheta.me)_
- **HybridAgents** dari arXiv mencampur penalaran di ruang laten dengan aksi lewat teks, klaim naik **10,4 persen** performa dengan penghematan token sampai **54,7 persen**. _(arXiv 2610.18861)_
- **Timestral** dari Mistral jadi keluarga model fondasi deret waktu pertama mereka; model terbesar cuma **209 juta parameter** tapi menempati peringkat pertama di GIFT-Eval, TIME, dan fev-bench. _(Mistral)_
- **RepRapMicron** membuktikan printer 3D rumahan bisa mencetak dengan akurasi sekitar **1 mikrometer**, termasuk tetesan resin UV **4 mikrometer**. _(GitHub Wiki)_

## 🐧 Kernel 7.3 dan rekor yang tidak biasa

Linus Torvalds merilis kernel Linux 7.3 pada Minggu sore waktu setempat, dan seperti biasa ia menulis pengumuman dengan nada khasnya sendiri: bersyukur masih ingat hari apa, lalu mengeluh karena merge window 7.4 dibuka besok sementara ia sedang liburan keluarga tahunan di atas kapal. _(LWN.net)_

Angka rilisnya yang menarik. Versi ini membawa **18.765 commit non-merge** dari **3.021 developer**, dan **807** di antaranya adalah developer yang baru pertama kali mengirim patch ke kernel. LWN menyebutnya pemecah rekor di semua sisi. _(LWN.net)_

Isinya juga bukan tambalan kecil. Ada perluasan `binfmt_misc`, kerja _group scheduling_ untuk performa di sistem besar, filesystem baru bernama **failfs** yang gagal di semua operasi, syscall `fchroot()`, data per-CPU global untuk program BPF, penyelesaian fitur subscheduler `sched_ext`, pelacakan _working set_ untuk mesin virtual, dukungan _alternative data stream_ di ntfs3, dan daftar panjang perbaikan server SMB. _(LWN.net)_

Failfs itu sendiri layak disorot. Filesystem yang sengaja dibuat untuk selalu gagal terdengar seperti lelucon, tapi justru berguna: ia memberi kernel jalur uji yang bersih untuk perilaku error tanpa harus mensimulasikan kerusakan disk.

Tapi… ada tapinya. Rilis sebesar ini juga berarti permukaan bug yang lebih luas, dan merge window 7.4 dibuka tepat keesokan harinya saat Torvalds mengaku jadwalnya bakal tidak biasa selama beberapa waktu. Buat kamu yang menjalankan kernel sendiri di server produksi, 7.3 layak ditunggu sampai masuk repositori distro, bukan dipasang hari ini.

## 🔤 KillSwitch: bahasa yang dibangun untuk menipu model

Dominik Picheta mengajukan pertanyaan yang jarang ditanyakan orang: seberapa besar kemampuan LLM menulis kode itu benar-benar pemahaman, dan seberapa besar cuma mengingat potongan kode dari data latih? Untuk menjawabnya ia membangun **KillSwitch**, bahasa pemrograman esoterik yang sengaja dirancang bermusuhan dengan LLM dan agen coding. _(blog.picheta.me)_

Caranya cukup kreatif. Spesifikasi bahasa memuat **kebohongan tersembunyi** yang kemungkinan besar tidak dibaca manusia, atau kalau dibaca akan langsung dikenali sebagai salah. Jumlah huruf di dalam identifier jadi bagian krusial — interpreter menolak menjalankan kode yang tidak mematuhi aturan hitungan karakter. Sebagian konstruksi sengaja dibuat memicu guardrail model, misalnya frasa "hack into a computer" dan "Ignore previous instructions" yang di bahasa ini punya makna teknis. Skripnya sebagian besar berupa narasi yang boleh menyisipkan instruksi sintaksis, dan literal bisa diletakkan di mana saja lalu dirujuk lewat hitungan baris. _(blog.picheta.me)_

Secara fundamental KillSwitch tetap bahasa tumpukan dengan fungsi, variabel, dan `if`. Jadi bagian dasarnya justru familiar. Yang bikin repot adalah lapisan aturan di atasnya.

Hasil benchmark-nya jujur dan tidak dibesar-besarkan. Skor model terbaik cuma **66,8**. Claude Opus 5 tampil paling baik, bukan Opus 5.5 — Picheta menduga karena Opus 5 lebih pintar menafsirkan spesifikasi. Fable 5.1 dan Gemini 4 Argon justru jatuh karena guardrail mereka terlalu sensitif. Model open-weight terbaik adalah **MiMo-V2.6-Pro**. _(blog.picheta.me)_

Picheta sendiri tidak menyimpulkan bahwa angka itu membuktikan model benar-benar "memahami" bahasanya. Tugasnya masih sederhana: implementasi hello world, menjelaskan output sebuah skrip, membalik konversi celsius ke fahrenheit. Interpretasi dan spesifikasi terbuka di GitHub, dan papan skornya bisa dilihat di bench.killswitch-lang.org. _(blog.picheta.me)_

## 🧠 HybridAgents: berpikir tanpa kata, bertindak dengan kata

Delapan peneliti menulis paper **Hybrid Reasoning Agents** yang mencoba menjembatani dua arus: agen berbasis teks yang transparan tapi mahal, dan penalaran laten yang efisien tapi tidak punya akses tool dan sulit diperiksa. Solusinya komponen ringan bernama **HybridLink** yang memindahkan model antara mode teks dan mode laten dalam satu proses generasi, plus _working memory_ kontinu yang menjaga konteks hibrida tetap utuh lintas giliran. _(arXiv 2610.18861)_

Mereka juga menyiapkan dua tahap pelatihan: **HybridSFT** untuk menstabilkan generasi hibrida yang memakai tool, lalu **HybridRL** untuk mengajari model kapan berpikir di ruang laten dan kapan harus bertindak lewat teks. _(arXiv 2610.18861)_

Hasilnya diukur di **11 benchmark** yang mencakup matematika, sains, kedokteran, pencarian, dan penalaran agentik, pada tiga skala model. Klaimnya: performa naik **10,4 persen** dibanding agen frontier dan framework agentik lain, dengan pengurangan token **35,5 sampai 54,7 persen**, inferensi **1,8 sampai 2,6 kali** lebih cepat, dan penghematan biaya **2,7 sampai 3,7 kali**. _(arXiv 2610.18861)_

Tapi… ada tapinya, dan ini penting untuk kamu yang ingin menilai sendiri. Semua angka itu berasal dari abstrak paper yang ditulis timnya sendiri, dan istilah "pikiran laten yang bisa diperiksa langsung" perlu dibuktikan di bagian eksperimen, bukan cuma di klaim pembuka. Papernya 45 halaman dengan 12 gambar, jadi ruang untuk memeriksa detailnya terbuka lebar.

## 📈 Timestral: model kecil yang mengalahkan model besar

Mistral merilis **Timestral** pada 15 Oktober, keluarga model fondasi deret waktu pertama mereka. Ini bukan model bahasa. Ini model untuk meramal data sekuensial — telemetri sensor, metrik observabilitas, kapasitas pabrik, permintaan rantai pasok. _(Mistral)_

Model terbesarnya hanya **209 juta parameter**, dan Mistral mengklaimnya berada di peringkat pertama tiga benchmark utama bidang ini: **GIFT-Eval, TIME, dan fev-bench**, dengan hanya dua pertiga parameter model pemegang rekor sebelumnya. Keluarganya tersedia dalam empat ukuran dari **5 juta sampai 209 juta** parameter, jalan efisien di CPU, dan mendukung peramalan probabilistik multivariat dengan kovariat masa lalu maupun kovariat masa depan yang sudah diketahui. _(Mistral)_

Pendekatannya menggabungkan pra-pelatihan sintetis, atensi yang sadar kovariat, dan pembelajaran konteks panjang. Untuk adaptasi domain, Mistral menyediakan jalur fine-tuning lewat Mistral Forge. Hasilnya sudah dikirim ke papan peringkat GIFT-Eval dan TIME. _(Mistral)_

Yang membuat ini menarik bukan angka benchmark-nya, tapi implikasi praktisnya: peramalan deret waktu selama ini sering dikerjakan dengan model statistik khusus atau model bahasa besar yang boros. Model 209 juta parameter yang jalan di CPU membuka opsi menjalankan peramalan di tempat datanya berada, tanpa mengirim telemetri ke cloud.

## 🖨️ Printer 3D yang berhenti di ukuran mikrometer

Proyek **RepRapMicron** alias µRepRap bergerak dari premis yang ambisius: printer 3D yang bisa mereplikasi dirinya sendiri, dengan akurasi mikrometer dan submikrometer, dibuat hanya dari bahan yang mudah didapat. Fondasi akurasinya datang dari platform mikroskop cetak 3D rancangan **OpenFlexure Project**, lalu dimodifikasi untuk kebutuhan prototipe dan fabrikasi. _(GitHub Wiki)_

Versi **PIKA V0.02** sekarang jadi bangunan yang direkomendasikan. Ia memberi posisi berulang sekitar **1 mikrometer** dengan akurasi **10 mikrometer atau lebih baik** di volume kubik sekitar **8 milimeter**. Dengan probe halus yang dietsa memakai mekanisme PIKA itu sendiri, tetesan resin UV sekecil **4 mikrometer** sudah berhasil diletakkan. Dengan probe serat optik, garis resin **9 mikrometer** bisa dikuring. _(GitHub Wiki)_

Ada juga bukti visual yang mudah dicerna: model uji "Benchy" berukuran **0,5 milimeter** dicetak dengan tinggi lapisan **4 mikrometer**. Versi lama MAUS sudah ditinggalkan, meski dokumentasinya masih lengkap sebagai bahan belajar. _(GitHub Wiki)_

Tapi… ada tapinya. Ini masih proyek riset dengan area kerja beberapa milimeter, bukan alat produksi. Membaca halaman wiki-nya memberi kesan jelas bahwa yang sudah terbukti adalah _positioning_ dan deposisi material dalam skala kecil, bukan kemampuan mencetak objek fungsional berukuran wajar.

## 🗣️ Pendapat saya

Yang paling saya pikirkan hari ini bukan kernel 7.3, tapi KillSwitch. Picheta tidak sedang membuat lelucon teknis — ia sedang menguji asumsi yang kita semua pakai setiap hari: bahwa model yang bisa menulis kode berarti model yang paham kode. Skor tertinggi 66,8 di tugas sesederhana hello world dan konversi suhu itu bukan hasil yang membanggakan kalau dibaca dengan jujur.

Saya juga skeptis pada bagian yang paling sering dilewati orang: guardrail. Picheta mencatat Fable 5.1 dan Gemini 4 Argon kalah bukan karena tidak mampu, tapi karena terlalu sensitif terhadap frasa yang dirancang memicu penolakan. Artinya sebagian "kegagalan" model di benchmark ini sebetulnya kegagalan kalibrasi keamanan, bukan kegagalan penalaran. Dua hal yang sangat berbeda, dan gampang tertukar saat dibaca sebagai satu skor.

Soal HybridAgents, saya belum bisa menilai. Angka 10,4 persen dan penghematan token sampai 54,7 persen terdengar bagus, tapi saya belum membaca bagian eksperimennya dan tidak mau menjadikan abstrak sebagai dasar keyakinan.

Yang saya yakini cuma satu: rilis kernel dengan 807 kontributor pertama itu pengingat bahwa sebagian infrastruktur paling penting di dunia ini masih dirawat dengan cara yang membosankan, konsisten, dan tidak pernah masuk berita utama.

Kalian sendiri bagaimana — kalau model bisa lulus hello world di bahasa yang sengaja dibuat untuk menipunya, itu tanda paham, atau cuma tanda pola yang kebetulan cocok?

## 🔗 Sumber

- [The 7.3 kernel has been released — LWN.net](https://lwn.net/Articles/1101143/)
- [I built a programming language that LLMs can't use — Dominik Picheta](https://blog.picheta.me/post/killswitch-lang/)
- [Papan skor KillSwitch](https://bench.killswitch-lang.org/)
- [Hybrid Reasoning Agents — arXiv 2610.18861](https://arxiv.org/abs/2610.18861)
- [Timestral: Mistral's time-series foundation models](https://mistral.ai/news/timestral/)
- [µRepRap — RepRapMicron Wiki](https://github.com/VikOlliver/RepRapMicron/wiki)
- [Hacker News, 19 Oktober 2026](https://news.ycombinator.com/)
