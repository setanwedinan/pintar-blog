#!/usr/bin/env node

/**
 * Update database schema to add URL, Summary, Date properties
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const NOTION_API_KEY = config.apiKey;
const DATABASE_ID = config.databaseId;

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

async function updateDatabase() {
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: `/v1/databases/${DATABASE_ID}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json'
    }
  };

  // Note: Notion API doesn't support updating database schema via PATCH
  // We need to create a new database with correct schema
  console.log('⚠️  Database schema cannot be updated via API');
  console.log('    Need to create new database with correct schema');
  console.log('    OR add properties manually in Notion UI');

  return { status: 400, body: { message: 'Schema update not supported' } };
}

async function main() {
  console.log(`\n🔧 Updating database schema...\n`);

  try {
    const response = await updateDatabase();

    console.log(`\n💡 Solution: Add properties manually in Notion`);
    console.log(`   1. Open database in Notion`);
    console.log(`   2. Click "+" to add property`);
    console.log(`   3. Add: URL (type: URL), Summary (type: Rich text), Date (type: Date)`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
