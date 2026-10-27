---
title: 'Pajak tokenizer: satu kalimat yang sama, tiga harga yang berbeda'
description: 'Rangkuman TechMeme 27 Oktober 2026: studi CLEAR menemukan model AI butuh sampai 17 kali lebih banyak token untuk bahasa non-Inggris, dengan satu kalimat Amharik dihitung 78 token versus 13 token Inggris, Apple merilis iMac dan MacBook Pro 14 inci dengan chip M6, Anduril dan Qualcomm mengumumkan laptop BlueChip buatan Amerika, FCC memperingatkan TP-Link soal batas daya router, dan PayPal melaporkan pendapatan kuartal tiga 8,58 miliar dolar.'
pubDate: 2026-10-27T13:10:00Z
tags: ['Daily Update', 'TechMeme']
---

## 🔍 TL;DR

- **Studi CLEAR** menemukan selisih biaya token antar bahasa bisa sampai **17 kali** di model frontier. Dalam contoh mereka, satu kalimat yang sama butuh **13 token** dalam bahasa Inggris, **26** dalam Malayalam, dan **78** dalam Amharik. **Tidak ada model frontier yang dapat nilai lebih baik dari B.** _(restofworld.org, clear-languages.org)_
- **Apple merilis iMac 24 inci dengan M6**: CPU sampai 12 inti, GPU sampai 12 inti dengan Neural Accelerator di setiap inti, Neural Engine ganda 16 inti, mulai **1.499 dolar**, pre-order 28 Oktober, tersedia **6 November**. _(apple.com)_
- **Anduril dan Qualcomm memperkenalkan BlueChip**, jajaran laptop yang dirancang dan dirakit di Amerika untuk keperluan pertahanan dan pemerintah; Anduril mulai menerima pesanan pada **2027**. _(bloomberg via TechMeme)_
- **FCC memperingatkan TP-Link** bahwa tiga router mereka melewati batas daya dan perusahaan mungkin mengirim "informasi yang salah atau tidak benar" — langkah yang bisa membuka jalan larangan lanjutan. _(bloomberg via TechMeme)_
- **PayPal kuartal tiga**: pendapatan naik 2 persen ke **8,58 miliar dolar** (di bawah estimasi 8,71 miliar), TPV naik 6 persen ke **487,14 miliar dolar**, panduan EPS setahun penuh dinaikkan ke sekitar **5,60 dolar**. _(wsj via TechMeme)_

## 🧾 Satu kalimat, tiga harga

Ambil satu kalimat: **"People should benefit from AI, regardless of the language they speak."** Tiga belas kata, makna yang jelas.

Koalisi **CLEAR** — Coalition for Language Equity in AI Research — menerjemahkan kalimat itu, lalu menghitung berapa token yang dibutuhkan model untuk membacanya. Token adalah potongan teks yang diproses model; kita membayar per token, bukan per kata.

Hasilnya, dengan tokenizer GPT-5:

- **Bahasa Inggris: 13 token.**
- **Malayalam: 26 token** — dua kali lipat, karena setiap kata dipecah jauh lebih banyak, beberapa karakter dipisah jadi basis dan diakritik.
- **Amharik: 78 token** — enam kali lipat. Setiap karakter Ge'ez dipecah menjadi dua token, satu byte masing-masing.

Jumlah karakternya nyaris sama. Isinya identik. Harganya tidak.

Koalisi itu menyebutnya **"tokenizer tax"** — pajak tokenizer. Dan seperti pajak regresif, ia menghukum yang paling lemah: makin kecil kehadiran digital sebuah bahasa, makin mahal tarif yang dibayar penuturnya.

Contoh harga yang mereka pakai: model **Anthropic Fable 5** dipatok **10 dolar per juta token input** dan **50 dolar per juta token output**. Anggap saja output satu jawaban 1.000 token. Dalam bahasa Inggris biayanya 50 sen tarif dasar; dalam bahasa yang butuh enam kali token, tiga dolar. Per jawaban. Dikalikan ribuan percakapan sehari.

Studi itu dijalankan dengan **FLORES-200**, benchmark kalimat yang diterjemahkan secara profesional ke sekitar **200 bahasa**. Metrik utamanya: **rasio token maksimum dibagi minimum** — berapa kali lebih banyak token yang dibutuhkan bahasa termahal dibanding bahasa termurah untuk konten yang sama. Sebagai pembanding, mereka juga menghitung **koefisien Gini**, ukuran ketimpangan yang biasa dipakai di ekonomi.

Ada satu bantahan yang mereka jawab sendiri sebelum ditanyakan: bukankah sebagian bahasa memang lebih panjang? Betul, tapi efeknya hanya puluhan persen. Bahasa Shan, yang paling panjang di FLORES-200, hanya **42 persen** lebih panjang dari Inggris pada tingkat karakter. Sementara Malayalam dan Amharik punya karakter **lebih sedikit** dalam contoh di atas, tapi tokennya 2x dan 6x lebih banyak. Kelonggaran kalimat tidak bisa menjelaskan selisih enam kali.

Dan yang penting: teksnya sama, tokenizernya beda. Kalimat Amharik yang identik di FLORES-200 menelan biaya **2x sampai 8x** lebih banyak tergantung model yang dipakai. Ini keputusan desain rekayasa, bukan sifat bahasa.

## 📊 Siapa yang paling adil

CLEAR memberi nilai berdasarkan rasio max/min di 200 bahasa: **A** kalau 3x atau kurang, **B** sampai 6x, **C** sampai 9x, **D** sampai 12x, dan **F** di atas 12x.

Untuk 20 bahasa terbesar di web, hampir semua model mendekati adil — rasionya antara **1,5x dan 3,1x**, dengan satu pengecualian. Artinya: lab AI mengoptimalkan daftar yang sama. Ketimpangan baru terbuka di luar 20 bahasa itu.

Peringkatnya, sebagaimana dilaporkan studi itu:

- **NLLB-200 (Meta, model terjemahan)** — rasio **2,7x** di FLORES-200, Gini 0,08, **nilai A**. Vokabulernya dirancang khusus untuk 200 bahasa.
- **Gemini 3.8 Flash / Gemini 3.1 Pro / Gemma 3 / Gemma 4 (Google)** — **5,1x**, Gini 0,15, **nilai B**. Satu-satunya model serba guna frontier yang dapat B.
- **Claude Fable 5 / Opus 4.8 (Anthropic)** — **9,3x**, Gini 0,20, **nilai D**.
- **Llama 4 Scout / Muse Glimmer (Meta)** — **9,5x**, **D**.
- **Qwen 3 (Alibaba)** — **10,5x**, **D**; **DeepSeek V4.1 Flash** — **10,6x**, **D**; **Kimi K3 (Moonshot)** — **11,3x**, **D**.
- **GPT-5 / gpt-oss (OpenAI)** — **13,8x**, Gini 0,23, **nilai F**.
- **Llama 3.3 (Meta)** — **14,8x**, **F**; **Ministral 3 (Mistral)** dan **Nemotron 3.5 (NVIDIA)** — **14,9x**, **F**; **Olmo 3.1 (Allen AI), Phi-4 (Microsoft), Granite 4.1 (IBM)** — **15,0x**, **F**.
- **Falcon 3 (TII)** — **17,0x**, Gini 0,34, **F**.

Kesimpulan mereka keras: **tidak ada model frontier serba guna yang dapat nilai lebih baik dari B, dan sebagian besar dapat F.** Ukuran kosakata saja tidak menjelaskan apa pun — Llama 4 punya anggaran kosakata lebih kecil dari Qwen 3.6 (sekitar 200 ribu vs 248 ribu slot), tapi lebih adil di 200 bahasa.

Yang menarik: perbaikan mungkin, bukan cuma mimpi. Dari **Llama 3 ke Llama 4** rasio max/min turun dari **14,8x ke 9,5x**. Tapi arah sebaliknya juga terjadi — Qwen 3 ke Qwen 3.6 justru memburuk, dari 10,5x ke **13,1x**. Dan Kimi K3 memperlihatkan metrik yang bisa saling bertentangan: Gini-nya bagus (0,20), rasio max/min-nya buruk (11,3x).

## 🇮🇩 Apa artinya buat pembaca di sini

Ini bagian di mana saya harus hati-hati: studi itu **tidak** menyebut angka khusus untuk Bahasa Indonesia, dan saya tidak akan mengarangnya.

Yang bisa dikutip dari sumbernya: aksara berperan besar, bukan hanya jumlah penutur. **Asturian**, bahasa dengan penutur sedikit dan tanpa data Common Crawl, tetap terbantu karena "Latin-script advantage" dan karena terbantu representasi bahasa Roman lain seperti Italia. Sebaliknya, bahasa dengan aksara yang jarang dilihat tokenizer — **Burma, Tibet, Tifinagh, Khmer, Lao, dan Ol Chiki** — konsisten paling dirugikan di hampir semua model yang dianalisis. Bahasa Indonesia memakai aksara Latin, jadi ia ada di sisi yang lebih beruntung dari garis itu — bukan berarti bebas pajak, hanya tidak di ujung terburuk.

Yang lebih relevan buat kita mungkin bukan tarif per token, tapi **context window**. **Pratyush Choudhury**, salah satu pendiri Activate AI, menjelaskan dampaknya lewat analogi guru les: mengingat kesalahan dan penjelasan sebelumnya adalah bagian dari mengajar yang baik. Kalau riwayat percakapan itu menghabiskan jendela konteks jauh lebih cepat di satu bahasa, kerugiannya merembes ke **kualitas layanan**, bukan cuma tagihan.

**Raoul Nanavati**, CEO Navana.ai di Mumbai, menyebut arah perbaikan yang lain: data terbuka. Ia mencontohkan **RESPIN**, inisiatif bersama Indian Institute of Science yang dibiayai Gates Foundation, yang mengumpulkan teks dari penutur asli **38 dialek** beserta rekaman bacaan.

**Dheemanth Reddy**, CEO Maya Research, memberi peringatan yang penting supaya kita tidak berharap terlalu banyak pada data: harga token sedang turun cepat, jadi dampak biaya langsung akan makin ringan, dan data multibahasa yang lebih baik akan memperbaiki kualitas model — **tapi memperbaiki celah tokenisasi tetap butuh lab merancang tokenizer baru secara sengaja.**

Choudhury mengusulkan standar yang bisa ditagih: setiap lab besar menerbitkan **scorecard per bahasa** yang menunjukkan berapa biaya menyelesaikan tugas yang sebanding, plus komitmen perbaikan terukur untuk bahasa yang paling buruk dilayani. Kalimatnya: "Perfect equality may be unrealistic. Large, persistent disparities should still require an explanation and an improvement plan."

## 🖥️ Apple: M6 masuk ke iMac dan MacBook Pro

Apple mengumumkan **iMac 24 inci** dengan chip **M6**. Angka yang disebut di ruang berita mereka:

- CPU sampai **12 inti** — dua inti lebih banyak dari sebelumnya — dan Apple mengklaim performa CPU single-thread tercepat di dunia.
- GPU sampai **12 inti**, juga dua inti lebih banyak, kini dengan **Neural Accelerator di setiap inti**, untuk grafis sampai 2x lebih cepat dibanding M4.
- **Neural Engine ganda 16 inti**, yang Apple sebut memberi komputasi AI sampai **2x** lebih cepat dari generasi sebelumnya, dan hingga **5x** performa AI on-device dibanding M4.
- Bandwidth memori sampai **170 GB/detik**, Wi-Fi 7, Bluetooth 6, opsi Ethernet 2,5 Gigabit, dan penyimpanan sampai 2x lebih cepat.
- Layar **24 inci 4.5K Retina**, sampai empat port Thunderbolt 4, macOS 27, dan Siri AI. Tujuh warna: biru, hijau, pink, kuning, ungu, oranye, dan silver.
- Harga mulai **1.499 dolar**. Pre-order dibuka **28 Oktober**, ketersediaan **6 November**.

Untuk pengguna yang naik dari iMac berbasis Intel, Apple mengklaim lompatan sampai **18x**. Ini angka klaim vendor, bukan hasil uji independen — dan itu wajar disebut apa adanya.

Yang menarik dari sisi AI lokal: dengan Neural Engine ganda dan bandwidth 170 GB/detik, Apple jelas memposisikan iMac sebagai mesin untuk menjalankan model di perangkat sendiri. Mereka menyebutnya langsung: "running local AI models, or vibe coding".

Di hari yang sama Apple juga mengumumkan **MacBook Pro 14 inci dengan M6**: CPU 12 inti, GPU 12 inti, memori unified sampai **32 GB**, Wi-Fi 7, mulai **1.999 dolar**, tersedia **6 November**.

## 🛡️ Laptop "buatan Amerika" dari Anduril dan Qualcomm

Cerita yang agak berbeda: startup teknologi pertahanan **Anduril Industries** bergabung dengan pembuat chip **Qualcomm** untuk memproduksi laptop yang dirancang dan dirakit **di Amerika Serikat**, menyasar pasar pertahanan dan pemerintah. Lini produknya diberi nama **BlueChip**, dan Anduril akan mulai menerima pesanan pada **2027**.

Yang bisa dikutip hanya sebatas itu — pengumumannya belum menyertakan spesifikasi, harga, atau jumlah unit. Tapi arahnya jelas: setelah chip, sekarang perangkat keras jadi bagian dari agenda kedaulatan teknologi dan pengadaan pemerintah.

Pertanyaan yang menarik untuk ditunggu: berapa persen isi laptop itu benar-benar dibuat di dalam negeri, dan apakah "dirancang dan dirakit" di sini berarti komponennya juga bukan impor.

## 📡 FCC vs TP-Link, dan angka PayPal

**FCC** mengirim peringatan ke **TP-Link Systems** bahwa tiga router Wi-Fi mereka melanggar batas tingkat daya, dan bahwa perusahaan itu mungkin telah menyerahkan **"informasi yang salah atau tidak benar"**. Menurut Bloomberg, langkah ini bisa membuka jalan bagi larangan lebih lanjut terhadap produk mereka.

Konteks yang perlu diingat: ini bukan pertama kali router jadi objek perhatian regulator di Amerika, dan tuduhan soal informasi yang tidak benar biasanya lebih berat konsekuensinya daripada pelanggaran teknisnya sendiri.

Sementara itu **PayPal** merilis hasil kuartal tiga: pendapatan naik **2 persen** year-on-year ke **8,58 miliar dolar**, sedikit di bawah estimasi **8,71 miliar**. Total volume pembayaran (TPV) naik **6 persen** ke **487,14 miliar dolar**. Yang membuat pasar lega: panduan laba per saham yang disesuaikan untuk setahun penuh dinaikkan ke sekitar **5,60 dolar**, dari perkiraan sebelumnya sekitar **5,38 dolar**, dan di atas estimasi **5,39 dolar**.

Pola yang lazim di perusahaan pembayaran dewasa: pertumbuhan pendapatan melambat, tapi efisiensi dan panduan laba yang menopang cerita.

## Tapi… ada tapinya

Skor peringkat model di studi CLEAR itu perlu dibaca dengan dua catatan.

**Pertama, ini bukan pengukuran kualitas.** Rasio max/min yang tinggi berarti tokenizer-nya mahal untuk bahasa tertentu — bukan berarti modelnya buruk dalam bahasa itu. Model bisa punya tokenizer tidak adil tapi kualitas jawaban yang baik, atau sebaliknya. CLEAR sendiri mengakui metriknya "deliberately unforgiving": ia mengukur apa yang dibayar bahasa yang paling buruk dilayani, karena dialah yang pertama terlempar dari pasar.

**Kedua, angkanya bergerak.** Mereka menyebutnya eksplisit — hasil ini dinamis, berubah setiap model baru dirilis. Jadi menyimpan tabel ini sebagai kebenaran permanen adalah kesalahan; menyimpannya sebagai cara membaca klaim "kami mendukung 200 bahasa" justru berguna.

Dan ada satu hal yang tidak diukur siapa pun dengan baik: **biaya tidak langsung**. Pengguna di Jakarta yang mengetik dalam bahasa Indonesia mungkin membayar token lebih sedikit daripada pengguna di Addis Ababa, tapi ia tetap membayar lebih banyak daripada rekan di Austin untuk percakapan yang sama panjang isinya. Selisih kecil yang tidak terasa di satu percakapan menjadi besar di aplikasi dengan sejuta pengguna.

Untuk Apple, tapinya sederhana: semua angka performa itu klaim vendor, dan "5x lebih cepat untuk AI" hanya bermakna setelah ada yang mengukur model apa, kuantisasi berapa bit, dan pada tugas apa.

Pertanyaan buat kalian: kalau kamu membangun produk AI untuk pengguna Indonesia, apakah kamu akan memilih model dengan tokenizer paling adil untuk bahasa kita — meski kualitas jawabannya sedikit di bawah model juara benchmark? Dan kalau lab AI menerbitkan scorecard per bahasa seperti usul Choudhury, apakah itu akan mengubah pilihanmu, atau tetap kalah oleh harga per token di halaman pricing?

## 🔗 Sumber

- Ananya Bhattacharya / Rest of World, AI models cost more when you don't use English (26 Oktober 2026) — https://restofworld.org/2026/ai-tokenizer-tax-non-english-languages-cost-inequity/
- CLEAR, The Tokenizer Tax (30 September 2026) — https://clear-languages.org/blog/the-tokenizer-tax
- Item TechMeme untuk studi tokenizer — https://www.techmeme.com/261027/p13#a261027p13
- Apple Newsroom, Apple unveils new iMac with M6 (27 Oktober 2026) — https://www.apple.com/newsroom/2026/10/apple-unveils-new-imac-with-m6/
- Item TechMeme iMac M6 — https://www.techmeme.com/261027/p16#a261027p16
- Item TechMeme MacBook Pro 14 inci M6 — https://www.techmeme.com/261027/p15#a261027p15
- Item TechMeme Anduril dan Qualcomm BlueChip (Bloomberg) — https://www.techmeme.com/261027/p17#a261027p17
- Item TechMeme FCC dan TP-Link (Bloomberg) — https://www.techmeme.com/261027/p14#a261027p14
- Item TechMeme PayPal kuartal tiga (Wall Street Journal) — https://www.techmeme.com/261027/p11#a261027p11
- Feed TechMeme 27 Oktober 2026 — https://www.techmeme.com/feed.xml
