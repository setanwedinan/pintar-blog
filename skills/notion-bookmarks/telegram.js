#!/usr/bin/env node

/**
 * Telegram message handler for /notion command
 *
 * Usage: node telegram.js "message text"
 *
 * Handles:
 * - /notion <url> - Save link to Notion with markdown.new summary
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const NOTION_COMMAND = '/notion';

function extractUrl(text) {
  // Check for /notion command
  const notionMatch = text.match(new RegExp(`${NOTION_COMMAND}\\s+(https?:\\/\\/[^\\s]+)`));
  if (notionMatch) {
    return notionMatch[1];
  }

  // Check for natural language patterns
  const urlMatch = text.match(/save.*notion[^:]*:\s*(https?:\/\/[^\s]+)/i);
  if (urlMatch) {
    return urlMatch[1];
  }

  // Look for any URL if the message mentions notion/saving
  if (text.toLowerCase().includes('notion') || text.toLowerCase().includes('save') || text.toLowerCase().includes('bookmark')) {
    const genericUrlMatch = text.match(/(https?:\/\/[^\s]+)/);
    if (genericUrlMatch) {
      return genericUrlMatch[1];
    }
  }

  return null;
}

async function saveToNotion(url) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, 'scripts', 'save-link.js');
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
  const message = process.argv[2];

  if (!message) {
    console.log('Usage: node telegram.js "message text"');
    process.exit(0);
  }

  // Check if this is a notion command
  if (!message.toLowerCase().startsWith(NOTION_COMMAND) &&
      !message.toLowerCase().includes('notion') &&
      !message.toLowerCase().includes('save')) {
    // Not for us, silent exit
    process.exit(0);
  }

  // Extract URL
  const url = extractUrl(message);

  if (!url) {
    console.log('❌ No URL found in message');
    process.exit(0);
  }

  try {
    const result = await saveToNotion(url);

    // Parse result for nicer output
    const stdout = result.stdout || '';
    const stderr = result.stderr || '';

    if (stdout.includes('✅ Saved to Notion!')) {
      // Extract page ID
      const pageIdMatch = stdout.match(/Page ID:\s+([a-f0-9-]+)/i);
      const pageId = pageIdMatch ? pageIdMatch[1] : '';

      console.log(`✅ Link saved to Notion! ${pageId}`);
    } else {
      // Output everything
      console.log(stdout);
    }

    if (stderr) {
      console.log(stderr);
    }
  } catch (error) {
    console.log(`❌ Failed to save: ${error.stderr || error.message}`);
  }
}

main();
