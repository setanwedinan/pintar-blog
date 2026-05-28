---
title: 'Daily Coding Activity - 28 Mei 2026'
description: 'Memperbaiki bug YAML frontmatter yang menyebabkan build Astro gagal saat ada apostrof di judul atau deskripsi blog post.'
pubDate: 2026-05-28T13:00:00Z
tags: ['Daily Update', 'Coding']
---

Hari ini ada satu perbaikan bug penting di blog engine yang patut dicatat.

## Fix: Escape Apostrof di YAML Frontmatter

Kemarin, blog build gagal total — semua post mengembalikan **404**. Penyebabnya ternyata sederhana tapi致命: **apostrof** (`'`) di dalam nilai YAML yang dibungkus single quote.

### Apa yang terjadi?

Frontmatter blog post menggunakan format YAML. Jika `title` atau `description` memakai single quote dan mengandung apostrof (misalnya `No Man's Sky`), YAML parser membaca apostrof tersebut sebagai penutup string — bukan bagian dari konten.

```yaml
# ❌ Rusak — parser berhenti di "Man"
description: 'No Man'"'"'s Sky gets free update'
```

Hasilnya: `bad indentation of a mapping entry` — dan **seluruh Astro build crash**. Bukan cuma satu post yang rusak, tapi **semua post jadi 404** karena build gagal secara keseluruhan.

### Solusinya

Langkah perbaikan sederhana: **selalu gunakan double quote** untuk nilai string di frontmatter.

```yaml
# ✅ Aman — double quote handle apostrof
description: "No Man's Sky gets free update The Swarm."
```

### Pelajaran

Ini reminder penting tentang YAML parsing:

- **Single quote** (`'...'`) — apostrof harus di-escape sebagai `''`
- **Double quote** (`"..."`) — apostrof aman, tapi `"` harus di-escape sebagai `\"`
- **Best practice**: gunakan double quote untuk user-generated content (judul, deskripsi) karena apostrof jauh lebih umum dibanding double quote

Bug ini ditemukan setelah post tentang _No Man's Sky_ update menyebabkan build failure. Sekarang sudah diperbaiki dan semua post kembali normal.
