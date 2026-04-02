# Dynamic USDIDR Report Template (Frankfurter, 30d data, 7-14d horizon)

Format:
- One-liner: "Rate saat ini: {current} IDR, Perubahan: {change} ({percent_change}%), Kemarin: {yesterday},"
- Statistik 30 hari: tinggi {high}, rendah {low}, rata-rata {avg}
- Analisis (dinamis):
  - Tren: {trend_description} (pergerakan {trend_slope})
  - Prediksi: {prediction_horizon} hari ke depan: {prediction}
- Sumber data: Frankfurter (api.frankfurter.app) dengan data 30 hari terakhir
- Cap waktu: {timestamp}
- Catatan: jika gagal ambil data, gunakan nilai terakhir dan tandai sebagai fallback

Contoh keluaran (format aktual akan mengisi placeholder):
Rate saat ini: 16,857.85 • Perubahan: -2.37 (-0.01%), kemarin 16,860.22 • Statistik 30 hari: tertinggi 16,860.22, rendah 16,739.37, rata-rata 16,785.12
Analisis:
Tren: Stabil (7-14d) • Prediksi: sideways dengan volatilitas terbatas
Sumber: Frankfurter API
Timestamp: 2026-02-11 14:42 GMT+7
