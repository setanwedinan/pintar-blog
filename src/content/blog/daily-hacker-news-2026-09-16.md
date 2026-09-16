---
title: 'Daily Hacker News: Jev, Model "System One" yang Klaim 100x Lebih Cepat dari LLM'
description: 'TypeSafe AI rilis Jev, model "System One" berbasis RLCD yang diklaim dua ordo magnitudo lebih cepat dari LLM biasa. Juga: proses review aplikasi Google Play yang makin lama dan outage global Salesforce.'
pubDate: 2026-09-16T13:00:00Z
tags: ['Daily Update', 'Hacker News']
---

## TL;DR

- **TypeSafe AI meluncurkan Jev**, model "System One" pertamanya: klaimnya secerdas LLM untuk tugas terstruktur, tapi **dua ordo magnitudo lebih cepat dan efisien** — dan tidak bisa halusinasi karena tidak menghasilkan teks bebas.
- **Proses review aplikasi Google Play kini sering memakan waktu lebih dari seminggu**, keluhan developer yang ramai di Hacker News.
- **Salesforce mengalami outage global** — halaman statusnya jadi trending di HN.

## Model "System One" & Jev: fungsi call ber-inteligensia frontier?

Story terpopuler hari ini di Hacker News (1.581 poin) adalah pengumuman dari blog TypeSafe AI, ditulis oleh founder-nya, **Diogo Almeida**. Latar belakangnya menarik: ia menyebut dirinya pernah membantu membangun metode di OpenAI yang membuat language model berguna dalam mengikuti instruksi — riset yang katanya menjadi dasar di balik ChatGPT.

Klaim intinya: model bahasa sudah "superhuman" untuk obrolan bertahun-tahun, tapi otomatisasi tidak ikut melejit. Jawaban TypeSafe adalah kelas model baru yang mereka sebut **System One Model**, dibangun di atas stack baru: arsitektur model baru, _parallel sampler_ untuk efisiensi maksimum, dan metode training bernama **Reinforcement Learning for Calibrated Decisions (RLCD)**.

Apa bedanya dengan LLM biasa, berdasarkan tabel perbandingan di postingannya?

| Aspek    | LLM existing                                  | System One + Jev                                      |
| -------- | --------------------------------------------- | ----------------------------------------------------- |
| Training | RLHF / RLVR                                   | RLCD                                                  |
| Input    | Teks tak terstruktur, pesan sekuensial        | Teks dengan penekanan pada _structured program state_ |
| Output   | String bebas (bisa halusinasi, refusal, dsb.) | Nilai terstruktur type-safe                           |
| Sampling | Sekuensial, token demi token                  | Paralel, satu query                                   |

Jev sendiri dikarakterisasi sebagai _"frontier-intelligence function call: unstructured state in, typed probabilistic decisions out"_. Setiap jawaban disertai probabilitas terkalibrasi, dan karena output dibatasi pada struktur yang didefinisikan di muka, perusahaan ini mengklaim modelnya "tidak bisa halusinasi" — meski konsekuensinya Jev mengorbankan kemampuan generasi teks bebas. Model ini tersedia mulai hari ini dalam _early access_.

Klaim "dua ordo magnitudo lebih cepat" tentu adalah klaim vendor — pengumuman ini sendiri mengakui _"extraordinary claims require extraordinary evidence"_ dan menyertakan benchmark di halamannya. Patut dicermati, bukan langsung ditelan.

## Google Play review makin lama

Story kedua teratas (150 poin): sebuah keluhan dari developer aplikasi XMPP via Mastodon bahwa **proses review aplikasi di Google Play kini secara reguler memakan waktu lebih dari seminggu**. Bagi developer indie yang mengandalkan rilis cepat untuk patch bug atau isu keamanan, ini bukan sekadar ribet — ini risiko nyata.

## Salesforce outage global

Story ketiga (132 poin): halaman **status Salesforce** menunjukkan outage yang memengaruhi produk-produknya — cukup signifikan sampai komunitas HN memantau bersama-sama. Detail penyebabnya belum dirinci di halaman status.

---

_Sumber: Hacker News (news.ycombinator.com), 16 September 2026. Poin adalah skor story saat artikel ini disusun._
