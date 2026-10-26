---
title: 'MacBook Pro OLED sentuh datang Rabu, dan TPU akhirnya bicara PyTorch'
description: 'Apple dijadwalkan mengumumkan MacBook Pro 14 dan 16 inci dengan layar OLED sentuh pada 28 Oktober, bersama iMac M6 dan iPad mini 8 OLED yang kabarnya mulai 799 dolar. Di PyTorch Conference, Google dan Meta merilis TorchTPU sehingga TPU jadi target native PyTorch. Cloud Alphabet tumbuh 82 persen ke 24,8 miliar dolar, dan Google TV Streamer generasi berikutnya disebut punya mikrofon sendiri.'
pubDate: 2026-10-26T00:00:00Z
tags: ['berita', 'Google', 'Android', 'Apple', 'AI', 'Tech']
---

## 🔍 TL;DR

- **Apple akan mengumumkan MacBook Pro 14 dan 16 inci dengan layar OLED sentuh pada Rabu, 28 Oktober**, menurut Mark Gurman dari Bloomberg. Model ini memakai chip M5 Pro dan M5 Max yang sudah ada, bukan chip baru. _(MacRumors, Bloomberg)_
- **Harga MacBook Pro baru diperkirakan naik sampai 500 dolar** dari harga model mini-LED sekarang, yang mulai 2.499 dolar untuk 14 inci dan 2.999 dolar untuk 16 inci. _(MacRumors)_
- **iPad mini 8 dengan layar OLED dan chip A20 Pro disebut mulai 799 dolar**, naik dari 599 dolar. _(9to5Mac, Bloomberg)_
- **Google dan Meta merilis TorchTPU**, backend PyTorch native untuk TPU yang menggantikan PyTorch/XLA. Model cukup diubah dari `model.to("cuda")` jadi `model.to("tpu")`. _(InfoQ, PyTorch, Google Cloud)_
- **Cloud Alphabet tumbuh 82 persen ke 24,8 miliar dolar** di kuartal terakhir, menambah 11,2 miliar dolar pendapatan baru — lebih besar dari tambahan pendapatan Search yang 9,1 miliar dolar. _(The Motley Fool)_

## 💻 Rabu, dan tiga Mac yang datang bersamaan

Apple sudah mengirim undangan untuk acara bertajuk "Pro and tell" di Los Angeles, Rabu 28 Oktober pukul 10 pagi waktu Pasifik. Menurut Gurman, di situ Apple mengumumkan MacBook Pro 14 inci dan 16 inci dengan layar OLED yang bisa disentuh — lewat siaran pers, bukan presentasi besar di atas panggung.

Yang menarik dari bocoran ini justru bagian yang tidak berubah. Laptop baru itu disebut memakai **M5 Pro dan M5 Max**, chip yang sama dengan model yang sudah dijual sejak Maret. Jadi yang dibayar mahal di sini bukan tenaga, tapi layar dan bodi.

Bodinya lebih ringan. Notchnya diganti **Dynamic Island**. Dan macOS Golden Gate disebut punya "dynamic interface" untuk input sentuh — sistem memperhatikan apakah pengguna terakhir menyentuh layar atau memakai trackpad, lalu menyesuaikan kontrol yang muncul. Menyentuh tombol bisa memunculkan menu di sekitar jari, dan Dock serta Menu Bar dioptimalkan untuk sentuhan.

Soal harga, Gurman menyebut model baru akan jauh lebih mahal. MacRumors memperkirakan kenaikannya sampai 500 dolar. Sebagai patokan, MacBook Pro 14 inci M5 Pro sekarang mulai 2.499 dolar, dan versi 16 inci mulai 2.999 dolar.

Di sisi lain, 9to5Mac menggambarkan lineup-nya jadi tiga lapis: MacBook Pro 14 inci dengan chip M6 dan desain lama di bawah, model M5 Pro dan M5 Max mini-LED yang sekarang di tengah, lalu model OLED sentuh di atas. Perkiraan harga untuk lapisan tengah dan atas masing-masing 2.499 dan 2.999 dolar, serta 2.999 dan 3.499 dolar untuk yang didesain ulang.

Model mini-LED tidak langsung hilang. Gurman menyebut mereka akan dipensiunkan bertahap, dan menurut Omdia panel mini-LED untuk MacBook Pro masih diproduksi sampai 2028.

## 🖥️ iPad mini 8, dan harga yang naik 200 dolar

Selain Mac, Apple disebut membawa iPad mini generasi baru. Ini overhaul pertama sejak 2021: layar OLED — bukan Tandem OLED seperti iPad Pro, tapi tetap lebih kontras dan lebih terang dari panel sekarang — plus chip **A20 Pro** dengan 12GB memori.

Angka lompatan performanya cukup besar kalau bocoran itu benar: sekitar 60 persen lebih cepat di CPU multi-core dan 166 persen di GPU dibanding A17 Pro. Memori 12GB itu yang membuka jalan untuk model on-device Apple berjalan lokal, termasuk perbaikan suara dan dikte di Siri.

Ada juga kabar iPad mini ini akan tahan air, dengan casing baru dan speaker yang didesain ulang untuk mendorong air keluar. Kalau benar, ini iPad pertama yang tahan air.

Harganya yang jadi soal. Gurman menyebut kemungkinan mulai **799 dolar**, dari 599 dolar sekarang. Sampai sekarang belum jelas apakah penyimpanan dasar tetap 128GB di harga itu.

## ⚡ TPU akhirnya bicara PyTorch tanpa XLA

Di PyTorch Conference North America 2026 di San Jose, Google dan Meta merilis **TorchTPU** sebagai open source. Ini backend PyTorch native untuk Tensor Processing Unit, dan pengganti PyTorch/XLA — jembatan lazy-tensor dari 2020 yang menurut pengumumannya "membutuhkan modifikasi kode sumber yang intrusif".

Janji sederhananya: memindahkan model ke TPU cukup dengan mengubah `model.to("cuda")` menjadi `model.to("tpu")`.

Yang dirilis bukan satu repo. Ada empat: TorchTPU, vLLM-TorchTPU, SGLang-TorchTPU, dan TorchTitan. Karena masuk ke dispatcher level rendah PyTorch, model Hugging Face disebut jalan langsung tanpa perubahan. vLLM dan SGLang berjalan native, TorchTitan mendukung model dense, mixture-of-experts, dan difusi untuk training skala besar. Ray dan llm-d menangani penskalaan lintas host di Kubernetes.

Angka yang dipamerkan Bill Jia, VP engineering Core ML/AI Google Cloud, bersama engineer Meta Zongwei Zhou: penskalaan nyaris linear melewati 8.000 chip TPU, dengan throughput per chip relatif tetap. Salah satu hasil yang dipublikasikan Google adalah Qwen3 235B mixture-of-experts di 8.192 chip TPU v7x dengan 28 persen model FLOPs utilization.

Google sendiri jujur soal batasnya. Satu baris perubahan itu cuma titik awal, karena bentuk model, sharding, dan operasi yang ditulis untuk GPU tetap perlu penyesuaian sebelum performa puncak tercapai.

Meta punya alasan sendiri. Jana van Greunen, director PyTorch engineering di Meta, menyebut perusahaan tidak bisa dikunci pada satu arsitektur hardware. Zhou bilang TorchTPU dikembangkan bersama Google supaya TPU jadi target PyTorch kelas satu.

Perlu dicatat, Google tidak sendirian. AWS memasukkan **TorchNeuron** untuk chip Trainium ke public beta pada 20 Oktober, juga dengan satu perubahan kode. Bedanya, versi pertama TorchNeuron belum mendukung bentuk input dinamis dan melewati sekitar 22.000 tes PyTorch.

## ☁️ Cloud Alphabet tumbuh 82 persen, lebih besar dari pertumbuhan Search

Angka kuartal terakhir Alphabet memberi jawaban yang jarang dibicarakan: pertumbuhan pendapatan perusahaan sekarang lebih ditopang cloud daripada iklan pencarian.

**Google Cloud** mencatat pendapatan 24,8 miliar dolar, naik 82 persen dari 13,6 miliar dolar di kuartal yang sama tahun lalu. Tambahannya 11,2 miliar dolar. **Google Search** masih jauh lebih besar — 63,3 miliar dolar dari 54,2 miliar dolar — tapi persentase pertumbuhannya 17 persen, dan tambahan nominalnya 9,1 miliar dolar.

Artinya cloud sudah menyumbang tambahan pendapatan lebih besar dari Search, meski total pendapatannya kurang dari separuh. Total pendapatan Alphabet tumbuh 23 persen.

Aplikasi Gemini disebut mencapai **950 juta pengguna aktif bulanan**. Angka itu yang membuat kekhawatiran soal chatbot memakan trafik pencarian tetap hidup, meski pendapatan Search belum menunjukkan tanda melambat.

## 📺 Google TV Streamer yang mulai mendengar sendiri

Google disebut menyiapkan generasi baru Google TV Streamer dengan mikrofon built-in, deteksi kehadiran, CPU lebih cepat, dan penyimpanan lebih besar dari 32GB yang ada sekarang. Bocoran ini datang dari 9to5Google, dan diberitakan TheStreet.

Mikrofon itu artinya perintah "Hey Google" bisa diucapkan langsung ke kotaknya, tanpa mencari remote lebih dulu. Deteksi kehadiran membuka fungsi lain: saat tidak ada yang menonton, perangkat bisa menampilkan jam, cuaca, dan foto ketika seseorang masuk ruangan. TCL sudah memakai sensor kehadiran di Google TV untuk hal serupa.

Tapi… ada tapinya. Harga Google TV Streamer sudah naik dari 99,99 dolar ke 149,99 dolar pada 31 Agustus lalu, dengan alasan biaya komponen. Sementara Onn 4K Pro dari Walmart dijual sekitar 60 dolar dengan Google TV juga. Perangkat yang lebih pintar dan lebih mahal harus menjelaskan kenapa ia bukan cuma kotak streaming.

## 🗣️ Pendapat saya

Dari semua berita hari ini, yang paling saya pikirkan justru keputusan Apple memasang chip lama di laptop baru yang harganya naik 500 dolar.

Secara teknis itu masuk akal. Yang berubah adalah layar, bobot, dan cara berinteraksi. Tapi secara psikologis sulit: orang yang membayar 3.000 dolar biasanya ingin melihat angka chip yang lebih besar dari tahun lalu. Apple tampaknya bertaruh bahwa layar OLED sentuh lebih terasa di tangan daripada satu generasi chip.

Soal sentuhan di macOS, saya belum yakin. Saya pernah memakai laptop layar sentuh, dan yang paling sering saya sentuh cuma tombol volume di layar karena malas cari tombol fisik. Kalau Apple benar-benar membuat menu muncul di sekitar jari dan mengoptimalkan Dock, itu bukan sekadar menempelkan panel sentuh — itu menulis ulang sebagian antarmuka. Kita lihat Rabu apakah janji itu masuk akal.

TorchTPU justru yang paling penting minggu ini, meski paling sepi dibicarakan. Selama ini cerita AI adalah cerita Nvidia, dan satu-satunya cara keluar dari situ adalah membuat hardware lain bisa dipakai tanpa menulis ulang kode. Satu baris `model.to("tpu")` terdengar sepele, tapi itulah bentuk nyata dari "tidak mau dikunci satu arsitektur". Tapi… ada tapinya: Google sendiri mengakui performa puncak tidak datang dari satu baris itu, dan AWS masih melewati 22.000 tes. Portabilitas sudah ada di depan pintu, kematangan belum.

Angka Cloud 82 persen juga layak dibaca hati-hati. Pertumbuhan sebesar itu dari basis 13,6 miliar dolar berarti sebagian besar datang dari permintaan infrastruktur AI, dan permintaan itu bergantung pada orang lain yang masih membakar uang untuk melatih model. Kalau pembakarannya melambat, angka 82 persen ini yang pertama berubah.

Kalian sendiri, kalau harus memilih tahun depan: laptop yang layarnya bisa disentuh dengan chip tahun lalu, atau laptop dengan chip baru dan layar biasa?

## 🔗 Sumber

- MacRumors — [Apple Reportedly Announcing New MacBook Pro With OLED Touchscreen on Wednesday](https://www.macrumors.com/2026/10/25/macbook-pro-with-touchscreen-on-wednesday/)
- MacRumors — [New iMac and 14-Inch MacBook Pro With M6 Chip Expected This Week](https://www.macrumors.com/2026/10/25/new-imac-and-14-inch-macbook-pro-m6-chip-rumors/)
- 9to5Mac — [Touchscreen OLED MacBook Pro launches this week, here is how the lineup will look](https://9to5mac.com/2026/10/25/macbook-pro-redesign-oled-touch-launching-this-week/)
- 9to5Mac — [OLED iPad mini 8 debuting this week](https://9to5mac.com/2026/10/25/ipad-mini-8-redesign-with-oled-coming-this-week/)
- InfoQ — [PyTorch Conference 2026: Google and Meta Open-Source TorchTPU](https://www.infoq.com/news/2026/10/google-meta-torchtpu/)
- PyTorch — [Introducing TorchTPU](https://pytorch.org/blog/introducing-torchtpu/)
- The Motley Fool — [Alphabet Cloud Revenue Grew 82% Last Quarter](https://www.fool.com/investing/2026/10/25/sundar-pichai-alphabets-cloud-revenue-grew-82/)
- TheStreet via Yahoo Finance — [Google next TV gadget may do much more than stream](https://finance.yahoo.com/technology/articles/googles-next-tv-gadget-may-181700153.html)
