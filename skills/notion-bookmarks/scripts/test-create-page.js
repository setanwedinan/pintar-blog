#!/usr/bin/env node

/**
 * Test creating a page in Simpan database
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

async function createPage() {
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: '/v1/pages',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json'
    }
  };

  // Try with database_id as parent
  const data = {
    parent: {
      type: 'database_id',
      database_id: DATABASE_ID
    },
    properties: {
      'Name': {
        title: [{ text: { content: 'Test Page' } }]
      }
    }
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  console.log(`\n🧪 Creating test page in "Simpan"...\n`);

  try {
    const response = await createPage();

    if (response.status >= 200 && response.status < 300) {
      console.log(`✅ Page created!`);
      console.log(`   ID: ${response.body.id}`);
      console.log(`   Name: Test Page`);
    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
