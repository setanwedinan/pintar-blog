#!/usr/bin/env node

/**
 * List all properties in Simpan database
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const NOTION_API_KEY = config.apiKey;
const DATA_SOURCE_ID = config.databaseId;

async function listProperties() {
  return new Promise((resolve, reject) => {
    exec(`curl -s https://api.notion.com/v1/data_sources/${DATA_SOURCE_ID} \
      -H "Authorization: Bearer ${NOTION_API_KEY}" \
      -H "Notion-Version: 2025-09-03"`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
        return;
      }

      try {
        const response = JSON.parse(stdout);

        if (response.properties) {
          console.log('Properties in "Simpan" database:\n');
          Object.keys(response.properties).forEach(prop => {
            console.log(`  • ${prop}`);
          });
          console.log('\nJSON:\n', JSON.stringify(response.properties, null, 2));
        } else {
          console.log('No properties found or error:', response);
        }

        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  });
}

listProperties().catch(console.error);
