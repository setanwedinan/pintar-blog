#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const CONFIG_FILE = path.join(process.cwd(), 'skills/pintar-social/config.json');

// Load config
let config = { webhookUrl: '' };
try {
  config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
} catch (err) {
  console.error('Config not found. Please create skills/pintar-social/config.json with webhookUrl');
  process.exit(1);
}

// Get topic from args
const topic = process.argv[2] || 'trending tech news today';

// Generate social post (dummy for now)
async function generatePost(topic) {
  // This will be replaced with actual AI generation
  return {
    text: `Hot take: ${topic}! 🚀 #tech #innovation`,
    hashtags: '#tech #coding #ai #innovation',
    platform: 'twitter',
    scheduledAt: new Date().toISOString()
  };
}

// POST to Make.com webhook
function postToMake(data) {
  return new Promise((resolve, reject) => {
    const url = new URL(config.webhookUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const postData = JSON.stringify(data);

    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = protocol.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ statusCode: res.statusCode, body });
        } else {
          reject(new Error(`Request failed with status ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Main execution
async function main() {
  try {
    console.log(`Generating social post for: ${topic}`);

    const post = await generatePost(topic);

    console.log('Generated post:', JSON.stringify(post, null, 2));

    if (!config.webhookUrl) {
      console.log('⚠️  No webhookUrl configured. Set it in config.json');
      console.log('Post preview:', post);
      return;
    }

    console.log('Posting to Make.com webhook...');

    const result = await postToMake(post);

    console.log('✅ Post sent to Make.com!');
    console.log('Response:', result);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
