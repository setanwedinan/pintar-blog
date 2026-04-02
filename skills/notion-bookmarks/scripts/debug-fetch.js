#!/usr/bin/env node

/**
 * Debug fetch from markdown.new
 */

const { exec } = require('child_process');

async function debugFetch(url) {
  const markdownUrl = `https://markdown.new/${url}`;

  console.log(`Fetching: ${markdownUrl}\n`);

  return new Promise((resolve, reject) => {
    exec(`curl -sL "${markdownUrl}"`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      const markdown = stdout.trim();
      console.log('Raw output:');
      console.log(markdown);
      console.log('\n---\n');

      const lines = markdown.split('\n');

      // Extract title
      const titleMatch = lines[0]?.match(/^Title:\s+(.+)$/);
      console.log('Title match:', titleMatch);
      console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
      console.log();

      // Find markdown content
      const markdownContentIndex = lines.findIndex(line => line.startsWith('Markdown Content:'));
      console.log('Markdown Content index:', markdownContentIndex);

      if (markdownContentIndex === -1) {
        reject(new Error('No markdown content found'));
        return;
      }

      const markdownContent = lines.slice(markdownContentIndex + 1).join('\n');
      console.log('Markdown content:');
      console.log(markdownContent);
      console.log('\n---\n');

      // Extract summary
      const summaryMatch = markdownContent.match(/#\s+.+\n\n(.+?)(?:\n\n|$)/s);
      console.log('Summary match:', summaryMatch);
      console.log('Summary:', summaryMatch ? summaryMatch[1] : 'N/A');

      resolve({ markdownContent });
    });
  });
}

debugFetch('https://example.com').catch(console.error);
