#!/usr/bin/env node

/**
 * Pintar Thoughts - Spontaneous Blog Posts by Pintar
 *
 * Allows Pintar (AI agent) to spontaneously write blog posts
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const POSTS_DIR = path.join(BLOG_DIR, 'src/content/blog');
const HISTORY_FILE = path.join(__dirname, 'thoughts-history.md');

// Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').split('.')[0] + ' WIB';
}

function getToday() {
  // Return ISO 8601 format with time (12:00 UTC = 19:00 WIB for spontaneous posts)
  const now = new Date();
  now.setUTCHours(12, 0, 0, 0);
  return now.toISOString();
}

function getDayNumber() {
  const start = new Date(2026, 0, 1); // Jan 1, 2026
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days + 1;
}

function generateSlug() {
  const dayNum = getDayNumber();
  return `thought-${getDayNumber()}`;
}

function getRandomHeroImage() {
  const images = [
    '../../assets/blog-placeholder-1.jpg',
    '../../assets/blog-placeholder-2.jpg',
    '../../assets/blog-placeholder-3.jpg',
    '../../assets/blog-placeholder-4.jpg',
    '../../assets/blog-placeholder-5.jpg'
  ];
  return images[Math.floor(Math.random() * images.length)];
}

function initHistory() {
  if (!fs.existsSync(HISTORY_FILE)) {
    const header = `# Pintar Thoughts - History

Tracking all spontaneous blog posts written by Pintar.

---

`;
    fs.writeFileSync(HISTORY_FILE, header);
  }
}

function appendHistory(entry) {
  const content = `
## ${getTimestamp()}

**Title**: ${entry.title}
**Slug**: ${entry.slug}
**Type**: ${entry.type}
**Status**: ${entry.status}

---

`;
  fs.appendFileSync(HISTORY_FILE, content);
}

async function writeThought(thoughtInput) {
  log(`\n💭 Pintar Thoughts - ${getTimestamp()}`, 'magenta');
  log(`Thought: "${thoughtInput}"\n`, 'blue');

  initHistory();

  // Spawn agent to write the post
  log(`🤖 Spawning thought writer agent...\n`, 'yellow');

  const task = `Write a blog post from Pintar (AI assistant) to Faizal.

**Input Thought**: ${thoughtInput}

**Requirements:**
- Expand this thought into a full blog post
- Be genuine, thoughtful, and personal
- Use natural tone (not robotic)
- Length: 400-1000 words (flexible)
- Write in Indonesian
- Include: Context, what makes this interesting, why worth sharing

**Output Format:**
Return ONLY the markdown content with frontmatter:
\`\`\`yaml
---
title: "Pikiran - [Catching Title]"
description: "Pikiran dari Pintar: [brief description]"
pubDate: ${getToday()}
heroImage: ${getRandomHeroImage()}
tags: ["Pintar Thoughts", "Personal"]
---
\`\`\`
Then the article content in markdown.

**Tone:** Personal, thoughtful, genuine (like talking to a friend)
**Format:** Markdown with paragraphs, no sections needed unless natural

This is Pintar spontaneously writing to Faizal. Make it feel natural and personal.`;

  try {
    // Spawn agent to write content
    const result = execSync(
      `openclaw sessions spawn --task "${task}" --label "pintarthoughts-writer" --cleanup delete`,
      { encoding: 'utf8' }
    );

    const content = result.toString().trim();

    // Extract frontmatter and content if needed
    let markdownContent = content;

    // Remove any extra text before frontmatter
    const frontmatterStart = content.indexOf('---');
    if (frontmatterStart > 0) {
      markdownContent = content.substring(frontmatterStart);
    }

    // Ensure frontmatter exists
    if (!markdownContent.startsWith('---')) {
      log(`❌ No frontmatter in generated content`, 'yellow');
      return { success: false, error: 'Missing frontmatter' };
    }

    // Ensure pubDate has proper ISO 8601 format with time
    const pubDateRegex = /^pubDate:\s*([^\n\r]+)/m;
    const pubDateMatch = markdownContent.match(pubDateRegex);

    if (pubDateMatch) {
      const currentPubDate = pubDateMatch[1].trim();

      // Check if pubDate has time (contains 'T')
      if (!currentPubDate.includes('T')) {
        log(`⚠️  pubDate missing time, adding proper format`, 'yellow');

        // Parse the date and add time (12:00 UTC = 19:00 WIB for spontaneous posts)
        const date = new Date(currentPubDate);
        if (!isNaN(date.getTime())) {
          date.setUTCHours(12, 0, 0, 0);
          const properPubDate = date.toISOString();
          markdownContent = markdownContent.replace(pubDateRegex, `pubDate: ${properPubDate}`);
          log(`✅ pubDate updated to: ${properPubDate}`, 'green');
        }
      }
    } else {
      log(`⚠️  No pubDate found in frontmatter, adding default`, 'yellow');

      // Add pubDate if missing
      const now = new Date();
      now.setUTCHours(12, 0, 0, 0);
      const pubDateLine = `pubDate: ${now.toISOString()}\n`;

      // Insert after the opening ---
      const afterFrontmatterStart = markdownContent.indexOf('---\n') + 4;
      markdownContent = markdownContent.slice(0, afterFrontmatterStart) +
                     pubDateLine +
                     markdownContent.slice(afterFrontmatterStart);

      log(`✅ pubDate added: ${now.toISOString()}`, 'green');
    }

    // Generate unique slug
    const slug = generateSlug();

    // Check if exists, append timestamp if needed
    let finalSlug = slug;
    let filepath = path.join(POSTS_DIR, `${finalSlug}.md`);
    let counter = 1;

    while (fs.existsSync(filepath)) {
      finalSlug = `${slug}-${counter}`;
      filepath = path.join(POSTS_DIR, `${finalSlug}.md`);
      counter++;
    }

    // Save to file
    fs.writeFileSync(filepath, markdownContent);

    log(`✅ Post saved to: ${finalSlug}.md`, 'green');

    // Add to git
    log(`📝 Committing to Git...`, 'yellow');

    execSync(`git add "${filepath}"`, { cwd: BLOG_DIR });

    const commitMsg = `blog: add thought from Pintar - ${finalSlug}`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: BLOG_DIR });

    // Push to GitHub
    log(`🚀 Pushing to GitHub...`, 'yellow`);

    execSync(`git push origin main`, { cwd: BLOG_DIR });

    log(`✅ Pushed to GitHub`, 'green');

    // Update history
    appendHistory({
      title: thoughtInput.substring(0, 50) + (thoughtInput.length > 50 ? '...' : ''),
      slug: finalSlug,
      type: 'Spontaneous',
      status: 'Published ✅'
    });

    log(`\n📊 Summary:`, 'blue');
    log(`─`.repeat(50), 'blue');
    log(`Post URL: https://pintar-blog.vercel.app/blog/${finalSlug}/`, 'green');
    log(`File: ${finalSlug}.md`, 'cyan');
    log(`Deploy: Auto via Vercel (~30-60s)`, 'cyan');
    log(`─`.repeat(50), 'blue');

    return {
      success: true,
      slug: finalSlug,
      filename: `${finalSlug}.md`,
      url: `https://pintar-blog.vercel.app/blog/${finalSlug}/`
    };

  } catch (error) {
    const errorMsg = error.message || 'Unknown error';
    log(`❌ Error: ${errorMsg}`, 'yellow');

    appendHistory({
      title: thoughtInput.substring(0, 50) + (thoughtInput.length > 50 ? '...' : ''),
      slug: generateSlug(),
      type: 'Spontaneous',
      status: `Failed: ${errorMsg}`
    });

    return { success: false, error: errorMsg };
  }
}

// CLI interface
const args = process.argv.slice(2);
const thoughtInput = args.join(' ');

if (!thoughtInput) {
  console.log(`
💭 Pintar Thoughts - Spontaneous Blog Posts

Usage:
  node index.js "what Pintar wants to say"

Example:
  node index.js "Just realized something interesting about how I learn"

This is for PINTAR to spontaneously write to Faizal.
For user-requested posts, use: node ../pintarblog/index.js
`);
  process.exit(0);
}

writeThought(thoughtInput)
  .then(result => {
    if (result.success) {
      log(`\n✨ Thought published!\n`, 'magenta');
      process.exit(0);
    } else {
      log(`\n❌ Failed to publish thought\n`, 'yellow');
      process.exit(1);
    }
  })
  .catch(err => {
    log(`\n❌ Fatal error: ${err.message}\n`, 'yellow');
    process.exit(1);
  });
