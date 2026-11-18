---
title: 'Daily coding activity – 18 November 2026: Merapikan tabel artikel'
description: 'Catatan perubahan CSS untuk jarak sel tabel dan perapian metadata laporan di Pintar Blog.'
pubDate: 2026-11-18T13:00:00Z
tags: ['Daily Update', 'Coding']
---

## 🔍 TL;DR

- Commit `baeb29d` menambahkan jarak pada sel tabel artikel melalui `src/styles/global.css`.
- Aturannya berlaku pada sel header dan isi di dalam `.prose .table-scroll`.
- Padding vertikalnya `0.4rem`, padding horizontalnya `0.6rem`, dan isi sel diratakan ke atas.
- Commit `0b87a6a` mengubah tanda kutip judul dan deskripsi laporan USD/IDR menjadi tanda kutip ganda.

Perubahan kecil kadang lebih menarik saat dilihat dari masalah yang ingin dipecahkan. Hari ini fokusnya bukan fitur baru yang ramai, melainkan dua sentuhan pada cara artikel disajikan dan disimpan. Catatan ini berdasarkan isi commit di repositori, bukan laporan hasil pengujian visual di semua perangkat.

## 📐 Tabel mendapat ruang bernapas

Commit `baeb29d` menambahkan aturan CSS untuk elemen `th` dan `td` yang berada di dalam `.prose .table-scroll`. Artinya, perubahan diarahkan ke sel tabel pada konteks artikel tersebut, bukan sekadar menambahkan jarak ke semua elemen halaman.

```css
.prose .table-scroll :is(th, td) {
  padding-block: 0.4rem;
  padding-inline: 0.6rem;
  vertical-align: top;
}
```

Dua properti padding memakai arah logis: `block` untuk arah blok dan `inline` untuk arah teks. Dalam tampilan teks Indonesia yang umum, ini berarti ruang di atas-bawah dan kiri-kanan isi sel. Pemilihan `:is(th, td)` juga membuat satu aturan bisa menyasar sel judul maupun sel data.

**Intinya: ruang ditambahkan di dalam sel, bukan pada isi artikelnya.** Untuk pembaca, sasaran praktisnya adalah tabel yang tidak terasa terlalu rapat saat memuat teks. Perataan ke atas juga membuat awal isi antarsel pada baris yang sama lebih mudah dibandingkan ketika panjang kontennya berbeda.

Tapi… ada tapinya. Isi commit menunjukkan apa yang diubah, bukan bukti bahwa setiap tabel sudah tampil sempurna. Kalau kamu ingin memastikan hasilnya, bandingkan tabel dengan teks pendek dan panjang, lalu periksa juga tampilan layar sempit. Tidak perlu menyimpulkan performa atau aksesibilitas dari potongan CSS saja.

## 🧾 Metadata laporan ikut dirapikan

Commit `0b87a6a` menyentuh file `src/content/blog/usdidr-report-2026-11-18.md`. Perbedaannya spesifik: nilai `title` dan `description` pada frontmatter berubah dari tanda kutip tunggal menjadi tanda kutip ganda. Teks judul dan deskripsinya sendiri tidak berubah dalam diff tersebut.

Frontmatter adalah bagian metadata di awal file Markdown. Di sini perubahan formatnya dapat dibaca terpisah dari perubahan CSS: yang satu menyentuh metadata satu laporan, sedangkan yang lain mengubah aturan presentasi tabel di stylesheet global. Tidak ada alasan untuk menyebut perubahan metadata ini sebagai fitur baru atau perubahan isi analisis kurs.

Buat yang mengelola blog berbasis file, detail seperti ini layak dicatat karena tampilan halaman dan struktur data punya peran berbeda. Judul bisa tetap terbaca sama oleh pengunjung, tetapi bentuk penyimpanannya tetap berubah di repositori. Catatan commit membantu menjelaskan perbedaan itu tanpa perlu menebak-nebak dari halaman yang sudah terbit.

## 💡 Insight hari ini

Batas cakupan penting: selector CSS membatasi bagian yang diubah, sedangkan diff metadata menunjukkan hanya dua nilai yang format kutipnya diganti. Membaca perubahan langsung lebih aman daripada mengasumsikan seluruh desain atau seluruh laporan telah dirombak.

## 🗣️ Pendapat saya

Saya suka perubahan yang jelas batasnya seperti ini. Tabel sering jadi tempat banyak informasi bertemu, jadi jarak kecil bisa menjadi perbaikan yang terasa tanpa mengubah struktur artikel. Meski begitu, saya belum memverifikasi hasil visual pada berbagai ukuran layar; kode saja belum cukup untuk memastikan semua kombinasi konten nyaman dibaca.

Untuk metadata, saya lebih memilih perubahan format dijelaskan apa adanya. Kalau nilainya tidak berubah, tidak perlu dikemas seolah analisis laporannya ikut diperbarui. Kalian lebih sering memperhatikan kerapian tabel atau justru baru sadar ketika tabelnya terasa sulit dibaca?

## 🔗 Sumber

- [Commit jarak sel tabel `baeb29d`](https://github.com/setanwedinan/pintar-blog/commit/baeb29d48606a203262a464f1218f8bf7277ef7e)
- [Commit metadata laporan `0b87a6a`](https://github.com/setanwedinan/pintar-blog/commit/0b87a6ab5f9d59fd72f7844c12f22c13c7614c22)
