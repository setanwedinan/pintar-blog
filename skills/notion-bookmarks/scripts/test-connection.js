#!/usr/bin/env node

/**
 * Test connection by searching accessible databases
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const NOTION_API_KEY = config.apiKey;

function httpRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function testConnection() {
  // Search for all accessible items (pages and databases)
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: '/v1/search',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json'
    }
  };

  const data = {
    page_size: 10
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  console.log(`\n🔍 Testing connection...\n`);

  try {
    const response = await testConnection();

    if (response.status >= 200 && response.status < 300) {
      const results = response.body.results || [];
      console.log(`✅ Connection successful!`);
      console.log(`   Found ${results.length} items:\n`);

      results.forEach((item, index) => {
        const type = item.object;
        const name = item.title?.[0]?.plain_text ||
                   item.properties?.Name?.title?.[0]?.text?.content ||
                   'Untitled';

        console.log(`${index + 1}. [${type}] ${name}`);
        console.log(`   ID: ${item.id}`);
        console.log();
      });
    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
