#!/usr/bin/env node

/**
 * Create page using data_source_id directly
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const NOTION_API_KEY = config.apiKey;
const DATA_SOURCE_ID = '300dda87-b3b5-80a2-aa54-000b73718e1e'; // Simpan

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

async function queryDataSource() {
  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: `/v1/data_sources/${DATA_SOURCE_ID}/query`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03',
      'Content-Type': 'application/json'
    }
  };

  const data = {
    page_size: 1
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  console.log(`\n🔍 Querying data_source...\n`);

  try {
    const response = await queryDataSource();

    if (response.status >= 200 && response.status < 300) {
      console.log(`✅ Data source query successful!`);
      console.log(JSON.stringify(response.body, null, 2));
    } else {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
