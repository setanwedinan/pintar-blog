#!/usr/bin/env node

/**
 * Test: Create a new database to verify integration works
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

async function createTestDatabase() {
  // First, search for workspace pages to find a valid parent
  const searchOptions = {
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

  const searchData = {
    filter: {
      value: 'page',
      property: 'object'
    },
    page_size: 1
  };

  const searchResponse = await httpRequest(searchOptions, searchData);
  console.log('Search response:', searchResponse.status);

  if (searchResponse.status !== 200 || !searchResponse.body.results?.[0]) {
    console.error('❌ Cannot find any pages in workspace');
    return null;
  }

  const parentPageId = searchResponse.body.results[0].id;
  console.log(`✓ Found parent page: ${parentPageId}`);

  // Create database
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: '/v1/databases',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json'
    }
  };

  const data = {
    parent: {
      type: 'page_id',
      page_id: parentPageId
    },
    title: [{ text: { content: 'Test Database' } }],
    properties: {
      'Name': { title: {} },
      'URL': { url: {} },
      'Summary': { rich_text: {} },
      'Date': { date: {} }
    }
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  console.log(`\n🧪 Creating test database...\n`);

  try {
    const response = await createTestDatabase();

    if (response.status >= 200 && response.status < 300) {
      console.log(`✅ Test database created!`);
      console.log(`   ID: ${response.body.id}`);
      console.log(`   Name: ${response.body.title?.[0]?.plain_text}`);
      console.log(`\n📋 Properties:`);
      Object.keys(response.body.properties).forEach(prop => {
        console.log(`   • ${prop}`);
      });
      console.log(`\nNow update config.json with this database ID!`);
    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
