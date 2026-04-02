---
name: knowledge-rag
description: Auto-ingest URLs and handle /kb queries to Knowledge RAG system
homepage: https://github.com/openclaw/openclaw
metadata:
  { "openclaw": { "emoji": "🧠", "events": ["message:received"] } }
---

# Knowledge RAG Hook

Automatically ingests URLs from Telegram messages and provides /kb search functionality.

## What It Does

- **Auto-ingest**: Extracts and ingests any URLs in received Telegram messages
- **Silent mode**: URLs are ingested automatically without sending replies
- **KB search**: Responds to `/kb <query>` commands with semantic search results
- **Smart filtering**: Only processes messages from configured user/topic

## Events

- `message:received` - Triggers on all inbound Telegram messages

## Configuration

Add to your OpenClaw config to enable this hook:

```json
{
  "hooks": {
    "internal": {
      "enabled": true,
      "entries": {
        "knowledge-rag": { "enabled": true }
      }
    }
  }
}
```

## Requirements

- Knowledge RAG skill installed at `skills/knowledge-rag/`
- Config file `skills/knowledge-rag/config.json` with NVIDIA API key

## Example Usage

### Auto-ingest (silent)
```
User: Check this article: https://example.com/ai-news
→ URL automatically ingested to RAG (no notification)
```

### KB search
```
User: /kb artificial intelligence trends
→ Shows top 5 results with similarity scores
```

## Files

- `handler.js` - Main hook implementation
- References: `/root/.openclaw/workspace/skills/knowledge-rag/`
