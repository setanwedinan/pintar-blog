---
title: "🔒 Warga AS Didakwa Felony karena Hapus Data HP di Perbatasan, Kisah Ratusan Ribu Panggilan ke Pangkalan Militer, & 'Software Tak Perlu Lambat' — Hacker News 22 Agustus 2026"
description: "Hacker News hari ini diramaikan kasus warga AS yang didakwa felony karena menghapus data ponsel saat pemeriksaan perbatasan, eksperimen yang tak sengaja menangkap ratusan ribu panggilan telepon ke pangkalan militer, esai baru Dan Luu soal performa software, hingga LSP Rust yang hemat RAM. Ringkasan 5 story terpopuler."
pubDate: 2026-08-22T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

# 🔒 Hacker News Daily — 22 Agustus 2026

Hari ini komunitas Hacker News diramaikan oleh perdebatan sengit soal privasi data di perbatasan AS (1.038 komentar!), kisah teknis yang mengerikan sekaligus menarik tentang routing telepon global, hingga esai performa dari Dan Luu. Berikut 5 story terpopuler yang layak kamu baca.

---

## ⚖️ Warga AS Didakwa Felony karena Menghapus Data Ponsel di Perbatasan

**888 poin | 1.038 komentar** — story paling panas hari ini datang dari The New York Times: seorang warga AS, Samuel Tunick, didakwa dengan tuduhan felony setelah menghapus data ponselnya saat pemeriksaan di perbatasan AS. Kasus ini memicu perdebatan besar tentang batas kekuasaan petugas perbatasan terhadap perangkat digital warga.

Thread diskusi di HN membahas implikasi konstitusionalnya: apakah menghapus data sendiri bisa dikriminalisasi? Banyak komentator menekankan bahwa perangkat digital kini menyimpan seluruh hidup pemiliknya — foto keluarga, riwayat kesehatan, komunikasi pribadi — sehingga insiden semacam ini menjadi ujian nyata bagi Fourth Amendment di era digital. Beberapa menyarankan praktik perlindungan diri seperti enkripsi end-to-end dan penggunaan *burner device* saat bepergian lintas perbatasan.

🔗 [Baca di The New York Times](https://www.nytimes.com/2026/08/21/us/politics/samuel-tunick-deleted-phone-felony.html)

---

## 📞 "Saya Tidak Sengaja Mencatat Ratusan Ribu Panggilan Telepon ke Pangkalan Militer"

**596 poin | 75 komentar** — Kisah teknis paling menarik hari ini datang dari blog pribadi lina.sh. Penulisnya secara tidak sengaja "membajak" sebagian namespace **e164.arpa** — infrastruktur DNS yang dipakai sistem telepon global (ENUM) untuk memetakan nomor telepon — dan mendapati ratusan ribu panggilan telepon yang ditujukan ke pangkalan militer kini tercatat di servernya.

Artikel ini membuka mata tentang betapa rapuhnya routing telepon global: siapa pun yang bisa menguasai sebagian kecil namespace DNS bisa menangkap panggilan yang seharusnya tidak pernah sampai ke tangannya. Komentator HN membahas implikasi keamanan nasional, bagaimana ENUM jarang mendapat perhatian riset keamanan, dan mengapa infrastruktur telepon legacy masih sangat bergantung pada kepercayaan antar-operator.

🔗 [Baca di lina.sh](https://lina.sh/blog/hijacking-e164-arpa)

---

## 🐌 "Tidak Ada Alasan Software Harus Lambat Lagi" — Esai Baru Dan Luu

**522 poin | 375 komentar** — Dan Luu kembali dengan esai performa yang mengundang perdebatan. Inti argumennya: hardware modern jauh lebih cepat daripada yang dimanfaatkan mayoritas software saat ini, sehingga "software lambat" lebih sering disebabkan oleh keputusan arsitektur dan kebiasaan yang buruk daripada keterbatasan mesin.

Diskusi di HN terbelah: sebagian setuju bahwa banyak aplikasi membuang-buang sumber daya (bloatware, framework berat, dependency yang tak terkendali), sebagian lain membela bahwa kecepatan pengembangan dan kompleksitas bisnis sering kali lebih penting daripada optimasi mikro. Namun hampir semua sepakat bahwa budaya *premature optimization* dan *premature de-optimization* sama-sama berbahaya — kuncinya adalah mengukur dulu sebelum mengorbankan kesederhanaan.

🔗 [Baca di danluu.com](https://danluu.com/perf-opt/)

---

## 🦀 Rust Glancer: Language Server untuk Rust dengan RAM 100x Lebih Hemat

**317 poin | 62 komentar** — Proyek open source baru bernama **Rust Glancer** menawarkan language server (LSP) untuk Rust yang mengklaim memakai 100x lebih sedikit RAM dibandingkan rust-analyzer. Ini kabar gembira bagi developer yang bekerja di mesin kelas menengah atau editor berbasis web/remote.

Meski masih di tahap awal ("hello world" di blog resminya), antusiasme komunitas tinggi — banyak yang berharap LSP hemat sumber daya ini bisa menjadi alternatif serius untuk rust-analyzer yang dikenal rakus memori. Komentar HN membahas trade-off antara fitur lengkap dan penggunaan memori, serta apakah pendekatan incremental/streaming bisa menjadi masa depan tooling bahasa pemrograman.

🔗 [Baca di rust-glancer.github.io](https://rust-glancer.github.io/blog/hello-world/)

---

## 📚 Kobo Bisa Menjalankan Aplikasi Sekarang — Berkat Proyek Cobalt

**594 poin | 193 komentar** — E-reader Kobo kini bisa menjalankan aplikasi buatan komunitas berkat proyek **Cobalt** dari BandarLabs. Ini membuka pintu bagi ekosistem aplikasi di layar e-ink — mulai dari widget, pembaca RSS, hingga tools produktivitas — yang sebelumnya tertutup di perangkat Kobo.

Komentator HN antusias membahas potensi e-ink sebagai perangkat "low-distraction": layar reflektif yang nyaman dibaca berjam-jam, baterai awet, dan kini ekosistem aplikasi yang bisa dikustomisasi. Ada juga yang menyoroti peluang bagi developer indie untuk membangun aplikasi niche untuk perangkat e-ink, mengingat pasar e-reader yang relatif jarang tersentuh inovasi aplikasi.

🔗 [Baca di bandarlabs.github.io](https://bandarlabs.github.io/Cobalt/)

---

## 💡 Insight Hari Ini

Tiga tema besar mewarnai HN hari ini:

1. **Kontrol atas data pribadi** — kasus felony di perbatasan AS dan insiden penyadapan tak sengaja panggilan militer sama-sama mengingatkan bahwa data kita bergantung pada infrastruktur dan hukum yang sering di luar kendali kita.
2. **Performa software masih jadi perdebatan abadi** — esai Dan Luu dan LSP hemat RAM Rust Glancer menunjukkan komunitas masih sangat peduli pada efisiensi di tengah tren AI yang boros komputasi.
3. **Perangkat "low-tech" kembali naik daun** — e-reader dengan aplikasi kustom dan tooling ringan menunjukkan ada pasar yang rindu pada teknologi yang sederhana, fokus, dan tidak mengganggu.

Sampai jumpa di Hacker News Daily besok! 🚀
