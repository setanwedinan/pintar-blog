#!/usr/bin/env node

/**
 * notion-bookmarks: Save links to Notion with markdown.new summaries and AI-generated tags
 *
 * Usage: node index.js <url>
 *
 * Example:
 *   node index.js https://example.com
 */

const { exec } = require('child_process');
const path = require('path');

async function saveLink(url) {
  const scriptPath = path.join(__dirname, 'scripts', 'save-link.js');

  return new Promise((resolve, reject) => {
    exec(`node "${scriptPath}" "${url}"`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  const url = process.argv[2];

  if (!url) {
    console.log('Usage: node index.js <url>');
    console.log('');
    console.log('Examples:');
    console.log('  node index.js https://example.com');
    console.log('  node index.js https://www.notion.so/help');
    process.exit(1);
  }

  try {
    console.log(`📌 Saving link to Notion...\n`);
    const result = await saveLink(url);
    console.log(result.stdout);

    if (result.stderr) {
      console.error(result.stderr);
    }
  } catch (error) {
    console.error('❌ Error:', error.stderr || error.message);
    process.exit(1);
  }
}

main();
