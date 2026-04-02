#!/usr/bin/env node

/**
 * Check new database structure
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

async function checkDatabase() {
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: `/v1/databases/${DATABASE_ID}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03'
    }
  };

  const response = await httpRequest(options);
  return response;
}

async function main() {
  console.log(`\n🔍 Checking new database structure...\n`);

  try {
    const response = await checkDatabase();

    if (response.status >= 200 && response.status < 300) {
      const db = response.body;
      console.log(`✅ Database: ${db.title?.[0]?.plain_text}`);
      console.log(`   ID: ${db.id}`);
      console.log(`\n📋 Properties:\n`);

      console.log(`   Full response:`, JSON.stringify(db, null, 2));

      Object.entries(db.properties || {}).forEach(([name, prop]) => {
        console.log(`   • ${name}: ${prop.type}`);
      });

      console.log(`\n`);

    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
