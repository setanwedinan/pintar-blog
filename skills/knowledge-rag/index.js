#!/usr/bin/env node

const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const fs = require('fs');
const path = require('path');

// Configuration
const DB_PATH = path.join(__dirname, 'db.json');
const CONFIG_PATH = path.join(__dirname, 'config.json');
const EMBEDDING_DIM = 1536;

// Load config
let config = {};
if (fs.existsSync(CONFIG_PATH)) {
  config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
}

// Initialize lowdb
async function initDatabase() {
  const adapter = new JSONFile(DB_PATH);
  const defaultData = { documents: [], entities: [] };
  const db = new Low(adapter, defaultData);

  await db.read();
  return db;
}

// Save database
async function saveDatabase(db) {
  await db.write();
}

// Cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Generate embedding using configured provider (OpenAI or NVIDIA)
async function generateEmbedding(text, inputType = 'passage') {
  const fetch = (await import('node-fetch')).default;

  let baseUrl, apiKey, model, body;

  if (config.embeddingProvider === 'nvidia') {
    baseUrl = config.nvidiaBaseUrl;
    apiKey = config.nvidiaKey;
    model = config.nvidiaEmbeddingModel || 'nvidia/nv-embedqa-e5-v5';
    body = {
      model: model,
      input: text.substring(0, 8191),
      encoding_format: 'float',
      truncate: 'END',
      input_type: inputType  // 'query' for queries, 'passage' for documents
    };
  } else {
    baseUrl = 'https://api.openai.com/v1';
    apiKey = config.openaiKey;
    model = 'text-embedding-3-small';
    body = {
      model: model,
      input: text.substring(0, 8191),
      dimensions: 1536
    };
  }

  const response = await fetch(`${baseUrl}/embeddings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Embedding API error (${config.embeddingProvider}): ${error}`);
  }

  const data = await response.json();
  return new Float32Array(data.data[0].embedding);
}

// Fetch content using web_fetch tool (via OpenClaw)
async function fetchContent(url) {
  console.log(`Fetching content from: ${url}`);

  // This should be called via OpenClaw's web_fetch tool
  // For MVP testing, return a placeholder
  return {
    title: 'Example Article',
    text: 'This is example content from the fetched article.'
  };
}

// Extract entities using OpenClaw's LLM (placeholder)
async function extractEntities(content, documentId) {
  // MVP: Return empty array
  // Phase 2: Use OpenClaw's LLM to extract entities
  return [];
}

// Ingest a URL into the knowledge base
async function ingestUrl(url) {
  const db = await initDatabase();

  try {
    // Check if already ingested
    const existing = db.data.documents.find(d => d.url === url);
    if (existing) {
      console.log(`URL already in database: ${url}`);
      return { success: false, message: 'Already ingested' };
    }

    // Check for API key
    if (config.embeddingProvider === 'openai' && !config.openaiKey) {
      console.error('No OpenAI API key configured. Add openaiKey to config.json');
      return { success: false, message: 'No OpenAI API key' };
    }
    if (config.embeddingProvider === 'nvidia' && !config.nvidiaKey) {
      console.error('No NVIDIA API key configured. Add nvidiaKey to config.json');
      return { success: false, message: 'No NVIDIA API key' };
    }

    // Fetch content
    console.log('Fetching content...');
    const content = await fetchContent(url);

    if (!content || !content.text) {
      console.error('Failed to fetch content');
      return { success: false, message: 'Failed to fetch content' };
    }

    // Generate embedding
    console.log(`Generating embedding (${config.embeddingProvider})...`);
    const embedding = await generateEmbedding(content.text);

    // Store document
    const document = {
      id: Date.now(),
      url,
      title: content.title || 'Untitled',
      content: content.text,
      sourceType: 'article',
      ingestedAt: new Date().toISOString(),
      embedding: Array.from(embedding) // Convert Float32Array to regular array for JSON
    };

    db.data.documents.push(document);

    // Extract entities (MVP: skip)
    // const entities = await extractEntities(content.text, document.id);
    // db.data.entities.push(...entities);

    await saveDatabase(db);

    console.log(`✅ Ingested document ID: ${document.id}`);
    console.log(`   Title: ${content.title}`);

    return { success: true, message: 'Successfully ingested', documentId: document.id };
  } catch (error) {
    console.error('Ingest error:', error);
    return { success: false, message: error.message };
  }
}

// Query the knowledge base
async function query(queryText, limit = 5) {
  const db = await initDatabase();

  try {
    if (db.data.documents.length === 0) {
      console.log('No documents in knowledge base yet.');
      return [];
    }

    // Check for API key
    if (config.embeddingProvider === 'openai' && !config.openaiKey) {
      console.error('No OpenAI API key configured');
      return [];
    }
    if (config.embeddingProvider === 'nvidia' && !config.nvidiaKey) {
      console.error('No NVIDIA API key configured');
      return [];
    }

    // Generate embedding for query
    console.log(`Generating query embedding (${config.embeddingProvider})...`);
    const queryEmbedding = await generateEmbedding(queryText, 'query');

    // Calculate similarity scores
    const results = db.data.documents.map(doc => {
      const docEmbedding = new Float32Array(doc.embedding);
      const similarity = cosineSimilarity(queryEmbedding, docEmbedding);
      return {
        ...doc,
        distance: 1 - similarity, // Convert similarity to distance
        similarity: similarity
      };
    });

    // Sort by similarity (descending)
    results.sort((a, b) => b.similarity - a.similarity);

    // Return top results
    const topResults = results.slice(0, limit);

    console.log(`\nFound ${topResults.length} results:\n`);
    topResults.forEach((r, i) => {
      console.log(`[${i + 1}] ${r.title}`);
      console.log(`    URL: ${r.url}`);
      console.log(`    Similarity: ${(r.similarity * 100).toFixed(1)}%`);
      console.log(`    Ingested: ${new Date(r.ingestedAt).toLocaleString()}`);
      console.log(`    Preview: ${r.content.substring(0, 150)}...\n`);
    });

    return topResults;
  } catch (error) {
    console.error('Query error:', error);
    return [];
  }
}

// Show statistics
async function showStats() {
  const db = await initDatabase();

  const docCount = db.data.documents.length;
  const entityCount = db.data.entities.length;

  // Group by source type
  const sourceTypeCounts = {};
  db.data.documents.forEach(doc => {
    sourceTypeCounts[doc.sourceType] = (sourceTypeCounts[doc.sourceType] || 0) + 1;
  });

  console.log('\n=== Knowledge Base Statistics ===');
  console.log(`Total documents: ${docCount}`);
  console.log(`Total entities: ${entityCount}`);
  console.log('\nBy source type:');
  Object.entries(sourceTypeCounts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });
  console.log('');

  return { documents: docCount, entities: entityCount, sourceTypes: sourceTypeCounts };
}

// Export functions for programmatic use
module.exports = {
  ingestUrl,
  query,
  showStats
};

// CLI interface
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'ingest':
    if (!args[0]) {
      console.log('Usage: node index.js ingest <url>');
      process.exit(1);
    }
    ingestUrl(args[0]);
    break;

  case 'query':
    if (!args[0]) {
      console.log('Usage: node index.js query "<query>"');
      process.exit(1);
    }
    query(args[0].replace(/^["']|["']$/g, ''));
    break;

  case 'stats':
    showStats();
    break;

  default:
    console.log('Usage:');
    console.log('  node index.js ingest <url>     - Ingest a URL');
    console.log('  node index.js query "<query>"  - Search knowledge base');
    console.log('  node index.js stats           - Show statistics');
    break;
}
