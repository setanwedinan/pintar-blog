#!/usr/bin/env node

/**
 * Check database using data_sources endpoint (Notion API 2025-09-03)
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

async function checkDataSource() {
  // Get data_source_id from database
  const dbOptions = {
    hostname: 'api.notion.com',
    port: 443,
    path: `/v1/databases/${DATABASE_ID}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03'
    }
  };

  const dbResponse = await httpRequest(dbOptions);
  const db = dbResponse.body;

  // Get data_source_id from response
  const dataSourceId = db.data_sources?.[0]?.id;
  console.log(`✓ Database data_source_id: ${dataSourceId}`);

  if (!dataSourceId) {
    console.error('❌ No data_source_id found');
    return null;
  }

  // Query data source to get structure
  const dsOptions = {
    hostname: 'api.notion.com',
    port: 443,
    path: `/v1/data_sources/${dataSourceId}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2025-09-03'
    }
  };

  const dsResponse = await httpRequest(dsOptions);
  return dsResponse;
}

async function main() {
  console.log(`\n🔍 Checking data source structure...\n`);

  try {
    const response = await checkDataSource();

    if (response && response.status >= 200 && response.status < 300) {
      const ds = response.body;
      console.log(`✅ Data Source: ${ds.name}`);
      console.log(`   ID: ${ds.id}`);
      console.log(`\n📋 Schema:\n`);

      console.log(JSON.stringify(ds, null, 2));
    } else if (response) {
      console.error(`❌ Error: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
