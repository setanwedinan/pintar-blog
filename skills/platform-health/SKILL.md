# Platform Health Dashboard

## Overview
Automated health check for your AI platform. Analyzes 9 critical areas and sends numbered recommendations to Telegram.

## 9 Analysis Areas

1. **Cron Job Health** - Are automated jobs succeeding?
2. **Code Quality** - Is technical debt piling up?
3. **Test Coverage** - Are there gaps in testing?
4. **Prompt Quality** - Are AI prompts well-written?
5. **Dependencies** - Outdated or vulnerable packages?
6. **Storage** - Is the database growing too large?
7. **Skill Integrity** - Are all skills functioning correctly?
8. **Configuration Consistency** - Are all config files aligned?
9. **Data Integrity** - Is the contact database healthy?

## Usage

```bash
# Run full health check
node skills/platform-health/index.js
```

## Output Format

Sends numbered recommendations to Telegram:
```
🔍 Platform Health Report - 2026-02-20

1. ✅ Cron Job Health: All jobs running
2. ⚠️ Code Quality: 3 TODOs found in skills/
3. ❌ Test Coverage: No test files found
4. ✅ Prompt Quality: All prompts well-structured
5. ⚠️ Dependencies: 5 packages outdated
6. ✅ Storage: Database size reasonable
7. ✅ Skill Integrity: All skills functional
8. ✅ Configuration: All configs aligned
9. ✅ Data Integrity: Database healthy

Rekomendasi:
1. Hapus TODOs di skills/knowledge-rag/
2. Update packages: npm update
3. Tambah test untuk skill penting
```

## Automation

Schedule daily health checks via cron job. See MEMORY.md for existing cron jobs.
