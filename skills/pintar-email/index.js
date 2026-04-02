#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';

const CONFIG_FILE = path.join(process.cwd(), 'skills/pintar-email/config.json');

// Load config
let config = { apiKey: '', domain: '', from: '' };
try {
  config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
} catch (err) {
  console.error('Config not found. Please create skills/pintar-email/config.json with apiKey, domain, and from');
  process.exit(1);
}

// Validate config
if (!config.apiKey || !config.domain || !config.from) {
  console.error('Invalid config. apiKey, domain, and from are required.');
  process.exit(1);
}

// Send email via Mailgun API
function sendEmail(to, subject, text, html = null) {
  return new Promise((resolve, reject) => {
    const auth = Buffer.from(`api:${config.apiKey}`).toString('base64');

    const formData = new URLSearchParams();
    formData.append('from', config.from);
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('text', text);
    if (html) {
      formData.append('html', html);
    }

    const options = {
      hostname: 'api.mailgun.net',
      port: 443,
      path: `/v3/${config.domain}/messages`,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(formData.toString())
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ statusCode: res.statusCode, response });
          } else {
            reject(new Error(`Mailgun error: ${res.statusCode} - ${JSON.stringify(response)}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(formData.toString());
    req.end();
  });
}

// Main execution
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: node skills/pintar-email/index.js <to> <subject> <message>');
    console.log('Example: node skills/pintar-email/index.js test@example.com "Hello" "This is a test"');
    process.exit(1);
  }

  const [to, subject, ...messageParts] = args;
  const text = messageParts.join(' ');

  try {
    console.log('Sending email...');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${text}`);

    const result = await sendEmail(to, subject, text);

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.response.id);
    console.log('Message:', result.response.message);

  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    process.exit(1);
  }
}

main();
