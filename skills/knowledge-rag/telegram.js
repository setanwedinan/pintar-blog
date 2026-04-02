#!/usr/bin/env node

const { ingestUrl, query } = require('./index.js');

// Extract URLs from text using regex
function extractUrls(text) {
  const urlRegex = new RegExp('https?://[^\\s]+', 'g');
  const matches = text.match(urlRegex);
  return matches || [];
}

// Process a Telegram message
async function processMessage(text, messageId = null) {
  const results = {
    urlsIngested: [],
    queryResults: null,
    isKbCommand: false
  };

  // Check if it's a /kb command
  if (text.trim().startsWith('/kb')) {
    const queryText = text.trim().substring(3).trim();  // Fix: /kb is 3 chars, not 4
    results.isKbCommand = true;

    if (queryText) {
      console.log(`🔍 Processing /kb query: "${queryText}"`);
      const queryResults = await query(queryText, 5);
      results.queryResults = queryResults;
    }
  }

  // Extract and ingest URLs
  const urls = extractUrls(text);
  console.log(`📎 Found ${urls.length} URL(s) in message`);

  for (const url of urls) {
    try {
      console.log(`Ingesting: ${url}`);
      const result = await ingestUrl(url);
      if (result.success) {
        results.urlsIngested.push(url);
      }
    } catch (error) {
      console.error(`Failed to ingest ${url}:`, error.message);
    }
  }

  return results;
}

// Format results for Telegram response
function formatResponse(results) {
  const parts = [];

  // Help message for /kb without query
  if (results.isKbCommand && !results.queryResults) {
    parts.push('🔍 *KB Search*');
    parts.push('\nGunakan: `/kb <query kamu>`');
    parts.push('\nContoh:');
    parts.push('  • /kb ai trends');
    parts.push('  • /kb machine learning');
    parts.push('  • /kb citri research');
    parts.push('\nDokumen di KB: ' + (results.urlsIngested.length || 0));
  }
  // Query results
  if (results.isKbCommand && results.queryResults) {
    if (results.queryResults.length === 0) {
      parts.push('📭 *Knowledge Base Kosong*\nBelum ada artikel yang di-ingest.');
    } else {
      parts.push('🔍 *Hasil Pencarian*\n');
      results.queryResults.forEach((r, i) => {
        const similarity = (r.similarity * 100).toFixed(1);
        const preview = r.content.substring(0, 100).replace(/\n/g, ' ');
        parts.push(`${i + 1}. *${r.title}*`);
        parts.push(`   Similarity: ${similarity}%`);
        parts.push(`   ${preview}...`);
        parts.push(`   ${r.url}\n`);
      });
    }
  }

  // URL ingest results
  if (results.urlsIngested.length > 0) {
    parts.push(`✅ *${results.urlsIngested.length} Link Ingested*`);
    results.urlsIngested.forEach((url, i) => {
      parts.push(`${i + 1}. ${url}`);
    });
  }

  // Empty response if nothing happened
  if (parts.length === 0) {
    return null;
  }

  return parts.join('\n');
}

// CLI for testing
const args = process.argv.slice(2);
if (args.length > 0) {
  const text = args.join(' ');
  processMessage(text)
    .then(results => {
      const response = formatResponse(results);
      if (response) {
        console.log('\n' + response);
      } else {
        console.log('No action taken');
      }
    })
    .catch(console.error);
}

// Export for programmatic use
module.exports = {
  processMessage,
  formatResponse,
  extractUrls
};
