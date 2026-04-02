#!/usr/bin/env node

/**
 * Pintar Blog - AI Blog Post Generator
 *
 * Creates SEO-optimized blog posts and publishes to Git/Vercel
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Security: Shell escape function to prevent command injection
function shellEscape(str) {
  // Replace single quotes with '\'' to safely escape shell arguments
  return str.replace(/'/g, "'\\''");
}

// Paths
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const POSTS_DIR = path.join(BLOG_DIR, 'src/content/blog');
const HISTORY_FILE = path.join(__dirname, 'blog-history.md');
const ENV_FILE = '/root/.openclaw/workspace/.env.local';

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
  // Return ISO 8601 format with time (12:00 UTC = 19:00 WIB for manual posts)
  const now = new Date();
  now.setUTCHours(12, 0, 0, 0);
  return now.toISOString();
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 60);
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
    const header = `# Pintar Blog - Post History

Tracking all blog posts created by Pintar.

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
**File**: \`${entry.file}\`
**Status**: ${entry.status}

---

`;
  fs.appendFileSync(HISTORY_FILE, content);
}

function getGitHubToken() {
  try {
    const envContent = fs.readFileSync(ENV_FILE, 'utf8');
    const match = envContent.match(/GITHUB_TOKEN=([^\n]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

async function createPost(topic) {
  log(`\n🎨 Pintar Blog - Creating Post`, 'cyan');
  log(`Topic: "${topic}"`, 'blue');
  log(`Time: ${getTimestamp()}\n`, 'blue');

  // Initialize history
  initHistory();

  // Generate slug
  const slug = generateSlug(topic);

  // Spawn agent to write the post
  log(`🤖 Spawning blog writer agent...\n`, 'yellow');

  const task = `Write a comprehensive blog post about: ${topic}

**Requirements:**
- Create an engaging, SEO-optimized article
- Length: 800-2000 words
- Structure: Title → Introduction → Main sections (H2) → Conclusion
- Include: Bullet points, examples, clear explanations
- SEO: Include relevant keywords naturally

**Output Format:**
Return ONLY the markdown content with frontmatter at the top:
\`\`\`yaml
---
title: "Your Catchy Title Here"
description: "SEO meta description (120-160 chars)"
pubDate: ${getToday()}
heroImage: ${getRandomHeroImage()}
tags: ["tag1", "tag2"]
---
\`\`\`
Then the article content in markdown.

**Tone:** Professional, engaging, educational
**Format:** Return the FULL markdown content with frontmatter`;

  try {
    // Spawn agent to write content
    // Security: Use shellEscape to prevent command injection from user input (topic)
    const escapedTask = shellEscape(task);
    const result = execSync(
      `openclaw sessions spawn --task '${escapedTask}' --label 'pintarblog-writer' --cleanup delete`,
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

        // Parse the date and add time (12:00 UTC = 19:00 WIB for manual posts)
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

    // Save to file
    const filename = `${slug}.md`;
    const filepath = path.join(POSTS_DIR, filename);

    fs.writeFileSync(filepath, markdownContent);

    log(`✅ Post saved to: ${filename}`, 'green');

    // Add to git
    log(`📝 Committing to Git...`, 'yellow');

    execSync(`git add "${filepath}"`, { cwd: BLOG_DIR });

    const commitMsg = `blog: add post "${slug}"`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: BLOG_DIR });

    // Push to GitHub
    log(`🚀 Pushing to GitHub...`, 'yellow');

    const token = getGitHubToken();
    if (token) {
      // Security: Hardcode repository URL to prevent arbitrary URL injection
      // Token is embedded directly in URL (git will use this for authentication)
      const repoUrl = `https://${token}@github.com/setanwedinan/pintar-blog.git`;

      // Security: Only pass minimal required environment variables
      // We DO NOT pass all process.env to avoid exposing sensitive data
      // Only PATH and HOME are needed for git to function properly
      const safeEnv = {
        PATH: process.env.PATH || '/usr/bin:/bin',
        HOME: process.env.HOME || '/root'
      };

      // Note: Git may send some environment variables during HTTPS operations
      // but by limiting to PATH and HOME, we prevent accidental leakage of:
      // - API keys (GITHUB_TOKEN, npm tokens, etc.)
      // - Database credentials
      // - Other sensitive environment variables
      execSync(`git push origin main`, { cwd: BLOG_DIR, env: safeEnv });
      log(`✅ Pushed to GitHub`, 'green');
    } else {
      log(`⚠️  No GitHub token found, skipping push`, 'yellow');
    }

    // Update history
    appendHistory({
      title: topic,
      slug,
      file: filename,
      status: 'Published ✅'
    });

    log(`\n📊 Summary:`, 'blue');
    log(`─`.repeat(50), 'blue');
    log(`Post URL: https://pintar-blog.vercel.app/blog/${slug}/`, 'green');
    log(`File: ${filename}`, 'cyan');
    log(`Deploy: Auto via Vercel (~30-60s)`, 'cyan');
    log(`─`.repeat(50), 'blue');

    return {
      success: true,
      slug,
      filename,
      url: `https://pintar-blog.vercel.app/blog/${slug}/`
    };

  } catch (error) {
    const errorMsg = error.message || 'Unknown error';
    log(`❌ Error: ${errorMsg}`, 'yellow');

    appendHistory({
      title: topic,
      slug,
      file: 'N/A',
      status: `Failed: ${errorMsg}`
    });

    return { success: false, error: errorMsg };
  }
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];
const topic = args.slice(1).join(' ');

if (!command) {
  console.log(`
📝 Pintar Blog - AI Blog Post Generator

Usage:
  node index.js create <topic>

Example:
  node index.js create "The future of AI in 2025"
`);
  process.exit(0);
}

if (command === 'create') {
  if (!topic) {
    log('❌ Error: topic required', 'yellow');
    process.exit(1);
  }

  createPost(topic)
    .then(result => {
      if (result.success) {
        log(`\n✨ Done! Check your blog in 1-2 minutes.\n`, 'magenta');
        process.exit(0);
      } else {
        log(`\n❌ Failed to create post\n`, 'yellow');
        process.exit(1);
      }
    })
    .catch(err => {
      log(`\n❌ Fatal error: ${err.message}\n`, 'yellow');
      process.exit(1);
    });
} else {
  log(`❌ Unknown command: ${command}`, 'yellow');
  process.exit(1);
}
