# Knowledge RAG - Personal Knowledge Base with Semantic Search

## Overview
Personal RAG (Retrieval-Augmented Generation) knowledge base that ingests web articles, extracts entities, stores with vector embeddings, and supports natural language queries.

## MVP Features (Phase 1)
- ✅ URL ingestion from Telegram (auto-detection)
- ✅ Web article extraction via web_fetch (placeholder ready)
- ✅ Entity extraction (LLM-based, placeholder)
- ✅ JSON-based storage with vector embeddings
- ✅ Semantic search with NVIDIA NIM API embeddings
- ✅ Telegram command integration (`/kb <query>`)

## Commands

```bash
# Ingest a URL (manual)
node skills/knowledge-rag/index.js ingest <url>

# Query the knowledge base
node skills/knowledge-rag/index.js query "<natural language query>"

# Show stats
node skills/knowledge-rag/index.js stats

# Process Telegram message (auto-detect URLs and /kb commands)
node skills/knowledge-rag/telegram.js "message text here"
```

## Telegram Integration

**Auto-Detection via OpenClaw Internal Hooks**:
- Handler registered in OpenClaw config: `hooks.internal.handlers`
- Event: `message` → Automatically processes all incoming Telegram messages
- Only processes messages from configured `telegramTopicId` in config.json

**Auto-Detection Features**:
1. **URL Detection**: Automatically extracts URLs from any message
2. **Auto-Ingest**: Ingests all found URLs into the knowledge base
3. **/kb Command**: Search the knowledge base with natural language queries

**Usage in Telegram**:
- Drop any URL in the topic → Auto-ingested (background process)
- Use `/kb your query here` → Search knowledge base
- Combine both: "Check this: https://example.com" → Ingests URL

**Response Format**:
```
✅ *2 Link Ingested*
1. https://techcrunch.com/...
2. https://ycombinator.com/blog

🔍 *Hasil Pencarian*

1. *Article Title*
   Similarity: 87.5%
   Preview text...
   https://url...
```

## Database Schema

```json
{
  "documents": [
    {
      "id": timestamp,
      "url": "https://example.com",
      "title": "Article Title",
      "content": "Full article text...",
      "sourceType": "article",
      "ingestedAt": "2026-02-19T14:43:14.000Z",
      "embedding": [0.1, 0.2, ...]  // 768-dimensional vector
    }
  ],
  "entities": []
}
```

## Usage Flow

1. Drop URL in Telegram topic → URL detected
2. Extract content via web_fetch (placeholder)
3. Generate embedding via NVIDIA NIM API
4. Store in JSON database (lowdb)
5. Query with natural language → semantic search results

## Configuration

**Using NVIDIA (Free)**:
```json
{
  "embeddingProvider": "nvidia",
  "nvidiaBaseUrl": "https://integrate.api.nvidia.com/v1",
  "nvidiaKey": "nvapi-...",
  "nvidiaEmbeddingModel": "nvidia/nv-embedqa-e5-v5",
  "telegramTopicId": "-1003743758645"
}
```

**Using OpenAI**:
```json
{
  "embeddingProvider": "openai",
  "openaiKey": "sk-...",
  "telegramTopicId": "-1003743758645"
}
```

## Implementation Notes

- **Storage**: lowdb (JSON file-based, no native dependencies)
- **Embeddings**: NVIDIA NIM API (nvidia/nv-embedqa-e5-v5, 768 dims)
- **Search**: Cosine similarity algorithm
- **Asymmetric embeddings**: Different models for queries vs documents

## Phase 2 (Future)
- YouTube transcript ingestion
- Twitter thread following
- PDF parsing
- Chrome Relay for paywalled content
- Time-aware ranking
- Source-weighted ranking
- Entity extraction via OpenClaw LLM
