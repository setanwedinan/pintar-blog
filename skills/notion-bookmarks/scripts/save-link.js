#!/usr/bin/env node

/**
 * notion-bookmarks: Save link to Notion with AI summary
 *
 * Usage: node scripts/save-link.js <url>
 *
 * Environment:
 * - NOTION_API_KEY: Notion API integration key
 * - NOTION_DATABASE_ID: Target database ID
 */

const https = require('https');
const http = require('http');
const { exec } = require('child_process');
const { generateSummaryAndTags } = require('./ai-summarize');

// Read config
const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, '..', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const NOTION_API_KEY = config.apiKey;
const NOTION_DATABASE_ID = config.databaseId;

function httpRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const client = options.protocol === 'https:' ? https : http;
    const req = client.request(options, (res) => {
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

async function fetchUrlContent(url) {
  // Fetch from markdown.new/<url> for markdown content
  const markdownUrl = `https://markdown.new/${url}`;

  console.log(`  Fetching from: ${markdownUrl}`);

  return new Promise((resolve, reject) => {
    exec(`curl -sL -A "Mozilla/5.0 (compatible; Pintar/1.0)" "${markdownUrl}"`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Failed to fetch markdown: ${stderr || error.message}`));
        return;
      }

      const markdown = stdout.trim();

      // Check if response is error JSON
      if (markdown.startsWith('{')) {
        try {
          const errorJson = JSON.parse(markdown);
          reject(new Error(errorJson.error || 'Failed to fetch markdown'));
          return;
        } catch (e) {
          // Not JSON, continue parsing as markdown
        }
      }

      // Parse markdown.new format:
      // Title: Example Domain
      // URL Source: https://example.com
      // Markdown Content:
      // # Example Domain
      // This is the content...

      const lines = markdown.split('\n');

      // Find "Markdown Content:" line and get content after it
      const markdownContentIndex = lines.findIndex(line => line.startsWith('Markdown Content:'));

      if (markdownContentIndex === -1) {
        reject(new Error('Invalid markdown.new response'));
        return;
      }

      // Get content after "Markdown Content:"
      const markdownContent = lines.slice(markdownContentIndex + 1).join('\n');

      // Extract title with multiple strategies:
      // 1. Try markdown heading (# ...)
      let title = '';
      const headingMatch = markdownContent.match(/^#\s+(.+)$/m);
      if (headingMatch) {
        title = headingMatch[1].trim();
      } else {
        // 2. Fallback to "Title:" line from response
        const titleMatch = lines[0]?.match(/^Title:\s+(.+)$/);
        title = titleMatch ? titleMatch[1].trim() : '';

        // If title is "Converted Content", extract from URL domain
        if (title === 'Converted Content') {
          try {
            const urlMatch = url.match(/https?:\/\/(?:www\.)?([^\/]+)/);
            if (urlMatch) {
              // Extract domain name (remove TLD)
              const domain = urlMatch[1].split('.')[0];
              title = domain.charAt(0).toUpperCase() + domain.slice(1);
            }
          } catch (e) {
            // Keep empty, will fallback to "Untitled"
          }
        }

        // If still empty, try to extract from YAML description
        if (!title) {
          const descMatch = markdownContent.match(/^---\s*description:\s*([^\s]+?)\s/mis);
          if (descMatch) {
            title = descMatch[1].trim();
          }
        }
      }

      // Final fallback
      if (!title) {
        title = 'Untitled';
      }

      // Extract summary (first paragraph after # heading)
      // Split by double newline and get first paragraph after heading
      const paragraphs = markdownContent.split('\n\n').map(p => p.trim()).filter(p => p);

      // Skip the heading (# ...) and get next paragraph
      let summary = '';
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (p.startsWith('#') && i < paragraphs.length - 1) {
          // Found heading, take next paragraph as summary
          summary = paragraphs[i + 1];
          break;
        }
      }

      if (!summary) {
        // Fallback: first 300 chars
        summary = markdownContent.substring(0, 300);
      }

      resolve({ title, markdownContent });
    });
  });
}

async function createNotionPage(url, title, summary, tags = []) {
  const options = {
    protocol: 'https:',
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

  const data = {
    parent: {
      type: 'data_source_id',
      data_source_id: NOTION_DATABASE_ID
    },
    properties: {
      'Name': {
        title: [{ text: { content: title || 'Untitled' } }]
      },
      'Tags': {
        multi_select: tags.map(tag => ({ name: tag }))
      }
    },
    children: [
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            { text: { content: summary || 'No summary available' } }
          ]
        }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            { text: { content: 'URL: ' } },
            { text: { content: url, link: { url: url } } }
          ]
        }
      }
    ]
  };

  const response = await httpRequest(options, data);
  return response;
}

async function main() {
  const url = process.argv[2];

  if (!url) {
    console.error('Usage: node scripts/save-link.js <url>');
    process.exit(1);
  }

  console.log(`\n📌 Saving link: ${url}`);

  try {
    // Fetch content from markdown.new
    const { title, markdownContent } = await fetchUrlContent(url);
    console.log(`✓ Title: ${title}`);

    // Generate AI summary and tags
    console.log(`  Generating AI summary and tags...`);
    const { summary, tags } = await generateSummaryAndTags(markdownContent);
    console.log(`✓ Summary: ${summary.substring(0, 80)}...`);
    console.log(`✓ Tags: ${tags.join(', ')}`);

    // Create Notion page
    console.log(`\n📝 Creating Notion page...`);
    const response = await createNotionPage(url, title, summary, tags);

    if (response.status >= 200 && response.status < 300) {
      console.log(`✅ Saved to Notion!`);
      console.log(`   Page ID: ${response.body.id}`);
    } else {
      console.error(`❌ Error creating Notion page: ${response.status}`);
      console.error(JSON.stringify(response.body, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
