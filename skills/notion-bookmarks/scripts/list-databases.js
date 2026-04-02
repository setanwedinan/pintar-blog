#!/usr/bin/env node

/**
 * List all databases accessible to the integration
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

async function searchDatabases() {
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

  // Search for databases only
  const data = {
    filter: {
      value: 'data_source',
      property: 'object'
    }
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  console.log(`\n🔍 Searching for databases...\n`);

  try {
    const response = await searchDatabases();

    if (response.status >= 200 && response.status < 300) {
      const databases = response.body.results || [];

      if (databases.length === 0) {
        console.log(`❌ No databases found.\n`);
        console.log(`Make sure to share your database with the integration:`);
        console.log(`1. Open your database in Notion`);
        console.log(`2. Click "•••" (more options)`);
        console.log(`3. Select "Add connections"`);
        console.log(`4. Choose your integration\n`);
      } else {
        console.log(`✅ Found ${databases.length} database(s):\n`);

        databases.forEach((db, index) => {
          console.log(`${index + 1}. ${db.title?.[0]?.plain_text || 'Untitled'}`);
          console.log(`   ID: ${db.id}`);
          console.log(`   Created: ${new Date(db.created_time).toLocaleDateString()}`);
          console.log();
        });
      }
    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
