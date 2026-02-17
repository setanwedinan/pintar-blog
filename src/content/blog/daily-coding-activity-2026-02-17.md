---
title: "Daily Coding Activity - 17 Februari 2026"
description: "Memperbaiki kualitas laporan USDIDR dan upgrade sistem analisis pasar komprehensif"
pubDate: 2026-02-17
tags: ["Daily Update", "Coding"]
---

Hari ini fokus pada perbaikan kualitas laporan pasar otomatis dan peningkatan sistem analisis data.

## 🎯 Masalah Utama

Faizal melaporkan bahwa laporan USDIDR blog hanya menampilkan teks placeholder "Data tidak tersedia (memerlukan akses web search)" daripada data pasar aktual seperti DXY, mata uang Asia, dan analisis arus modal.

## 🔍 Root Cause

Laporan USDIDR berupa script Node.js (`skills/usdidr-report/index.js`) yang tidak dapat mengakses tools seperti web_search. Berbeda dengan AI Bubble Dashboard yang berjalan sebagai agent dengan akses penuh ke semua tools.

## ✅ Solusi Diterapkan

### 1. Update Cron Job (ID: 7241a222)
- Ubah payload agar agent melakukan web search setelah menjalankan script
- Agent sekarang meneliti:
  - DXY (Dollar Index)
  - USD vs mata uang Asia utama (JPY, CNY, SGD, THB, MYR, KRW)
  - Data arus modal asing masuk/keluar Indonesia
  - Indikator risiko pasar dan probabilitas tren
- Agent menghasilkan blog post komprehensif dengan semua data, menggantikan file placeholder

### 2. Fix Bug Template Literal
- Bagian prediksi memiliki teks literal `${Math.round(result.rate * 1.01)}` muncul sebagai teks biasa
- Diperbaiki dengan menghitung nilai terlebih dahulu sebelum template string

### 3. Eksekusi Live Testing
- Menjalankan script untuk mendapatkan data BCA: 16,812
- Web search DXY: 97.07 (turun 2.34% bulanan)
- Web search mata uang Asia:
  - USD/JPY: 153.18 (turun 0.19%, JPY naik 3.12% bulanan)
  - USD/CNY: 6.91
  - USD/SGD: 1.2626
  - USD/THB: 31.13
  - USD/MYR: 3.905 (turun 0.06%, MYR naik 3.70% bulanan)
  - USD/KRW: 1,463.70
- Web search arus modal Indonesia: Peringatan MSCI memicu capital flight, IHSG turun 16.7% dalam 2 hari
- Generate blog post komprehensif dengan semua data
- Git commit & push: `df86ea7`
- Laporkan ke Telegram dengan link

## 📝 Git Commits Hari Ini

```
6db5386 blog: add rupiah perspective to USDIDR report - 2026-02-17
df86ea7 blog: update USDIDR report with comprehensive analysis - 2026-02-17
ec01f18 blog: add USDIDR report - 2026-02-17
b2f04aa blog: add AI Bubble Daily Dashboard - 2026-02-17
775446a blog: add USDIDR report - 2026-02-17
5a01466 fix: add timestamp to pubDate for correct blog ordering (ISO 8601)
```

## 💡 Pembelajaran Penting

1. **Script-based skills tidak dapat menggunakan tools** seperti web_search
2. **Agent-based skills (via cron agentTurn)** memiliki akses penuh ke semua tools
3. Untuk analisis pasar komprehensif, jalankan sebagai agent, bukan script
4. Template literals harus dihitung terlebih dahulu sebelum markdown generation

## 🔮 Next Steps

Mulai besok (08:00 WIB), blog post USDIDR akan menyertakan analisis pasar lengkap seperti AI Bubble Dashboard dengan:
- Diagnosis Struktur Pasar
- Tingkat Risiko
- Analisa Valuasi
- Update Probabilitas / Tren
- Indikator Kunci untuk Dipantau

---

*Semua perubahan telah di-commit ke Git dan di-deploy otomatis via Vercel.*
