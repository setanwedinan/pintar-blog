#!/usr/bin/env node

/**
 * Generate AI summary and tags from markdown content
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function generateSummaryAndTags(markdown) {
  return new Promise((resolve, reject) => {
    // Spawn an agent for summarization
    const openclawPath = path.join(__dirname, '..', '..', '..', '..', 'node_modules', '.bin', 'openclaw');

    const prompt = `You are analyzing a web page content for bookmarking. Generate:

1. Summary: 2-3 sentences in Indonesian explaining what the page is about
2. Tags: 3-5 relevant tags (lowercase, no hashtags)

Content:
${markdown.substring(0, 2000)}

Respond in this format exactly:
SUMMARY: [your summary here]
TAGS: tag1, tag2, tag3, tag4, tag5`;

    exec(`echo "${prompt.replace(/"/g, '\\"')}" | openclaw chat`, {
      cwd: '/root/.openclaw/workspace'
    }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      // Parse response
      const summaryMatch = stdout.match(/SUMMARY:\s*(.+?)(?:\n|$)/i);
      const tagsMatch = stdout.match(/TAGS:\s*(.+?)(?:\n|$)/i);

      const summary = summaryMatch ? summaryMatch[1].trim() : '';
      const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()).filter(t => t) : [];

      resolve({ summary, tags });
    });
  });
}

async function main() {
  const markdown = `# AI as Exoskeleton

Stay with me here, because this isn't just a metaphor. There are real examples of exoskeletons being developed that extend human capabilities. In this article, we explore how AI can serve as an exoskeleton for developers.`;

  try {
    const result = await generateSummaryAndTags(markdown);
    console.log('Summary:', result.summary);
    console.log('Tags:', result.tags);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
