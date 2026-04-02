# Knowledge RAG - Personal Knowledge Base

## Phase 1 MVP Setup

### 1. Install Dependencies

```bash
cd /root/.openclaw/workspace/skills/knowledge-rag
npm install
```

### 2. Configure API Key

Edit `config.json` and add your API key:

**Option A - OpenAI**:
```json
{
  "embeddingProvider": "openai",
  "openaiKey": "sk-...",
  "telegramTopicId": "-1003743758645"
}
```

**Option B - NVIDIA (Free)**:
```json
{
  "embeddingProvider": "nvidia",
  "nvidiaBaseUrl": "https://integrate.api.nvidia.com/v1",
  "nvidiaKey": "nvapi-...",
  "nvidiaEmbeddingModel": "nvidia/nv-embedqa-e5-v5",
  "telegramTopicId": "-1003743758645"
}
```

**Note**:
- OpenAI: `text-embedding-3-small` (cost: ~$0.02 per 1M tokens)
- NVIDIA: Free tier, 768-dimensional asymmetric embeddings

### 3. Test Manual Ingestion

```bash
node index.js ingest https://example.com/article
```

### 4. Test Query

```bash
node index.js query "what did you learn about X"
```

### 5. Check Stats

```bash
node index.js stats
```

### 6. Test Telegram Auto-Detection

```bash
node telegram.js "Check this: https://example.com"

node telegram.js "/kb what did I learn?"
```

## Integration with Telegram

The skill needs to be integrated with OpenClaw's Telegram integration to:

1. Monitor the specified topic for URLs
2. Auto-ingest new URLs when detected
3. Support querying via Telegram commands

This will be implemented by creating a Telegram command handler.

## Architecture

```
Telegram Topic URL Detection
    ↓
web_fetch (content extraction)
    ↓
Entity Extraction (LLM)
    ↓
Embedding Generation (OpenAI)
    ↓
SQLite + Vector Storage
    ↓
Semantic Search (vector similarity)
```

## Database Location

- Path: `/root/.openclaw/workspace/skills/knowledge-rag/knowledge.db`
- Can be backed up by copying this file

## MVP Limitations

- Only web articles (no YouTube, Twitter, PDF)
- Basic semantic search (no time/source weighting)
- Entity extraction not implemented (LLM integration needed)
- Manual CLI usage (no Telegram automation yet)

## Phase 2 Features (Future)

- YouTube transcript ingestion
- Twitter thread following
- PDF parsing
- Chrome Relay for paywalled content
- Time-aware ranking
- Source-weighted ranking
- Telegram command integration
