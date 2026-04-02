#!/usr/bin/env node

/**
 * Pintar Blog Daily - Automated Daily Blog Posts
 *
 * Generates TWO separate daily blog posts:
 * 1. Coding Activity OR Hacker News
 * 2. TechMeme News
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const POSTS_DIR = path.join(BLOG_DIR, 'src/content/blog');
const HISTORY_FILE = path.join(__dirname, 'daily-history.md');
const MEMORY_DIR = '/root/.openclaw/workspace/memory';
const MEMORY_FILE = '/root/.openclaw/workspace/MEMORY.md';
const PINTAR_CODING_FILE = '/root/.openclaw/workspace/skills/pintarcoding/pintarcoding.md';

// Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').split('.')[0] + ' WIB';
}

function getToday() {
  // Return ISO 8601 format with time (14:00 UTC = 21:00 WIB for daily posts)
  const now = new Date();
  now.setUTCHours(14, 0, 0, 0);
  return now.toISOString();
}

function getDateLabel() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
}

function getDaySlug(type) {
  const dateStr = new Date().toISOString().split('T')[0];
  return `daily-${type}-${dateStr}`;
}

function getTodayPosts() {
  const dateStr = new Date().toISOString().split('T')[0];

  try {
    const files = fs.readdirSync(POSTS_DIR);
    const todayPattern = new RegExp(`daily-.*-${dateStr}\\.md$`);

    const todayPosts = files
      .filter(f => todayPattern.test(f))
      .map(f => {
        const filepath = path.join(POSTS_DIR, f);
        const content = fs.readFileSync(filepath, 'utf8');
        
        // Extract title from frontmatter
        const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
        return {
          filename: f,
          title: titleMatch ? titleMatch[1].trim() : ''
        };
      });

    return todayPosts;
  } catch (error) {
    log(`⚠️  Error reading today's posts: ${error.message}`, 'yellow');
    return [];
  }
}

function isDuplicateTitle(newTitle, existingPosts) {
  if (!existingPosts || existingPosts.length === 0) {
    return false;
  }

  // Check for exact title match
  for (const post of existingPosts) {
    if (post.title && post.title.toLowerCase() === newTitle.toLowerCase()) {
      return true;
    }
  }

  return false;
}

function simplifyTitle(title) {
  // Remove common prefixes and suffixes
  return title
    .replace(/^Daily\s+(TechMeme|Hacker News|Coding Activity)\s*-\s*/i, '')
    .replace(/\s*-\s*Rabu|Senin|Selasa|Kamis|Jumat|Sabtu|Minggu.*$/i, '')
    .replace(/\s*\d{4}\s*$/i, '')
    .trim();
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
    const header = `# Pintar Blog Daily - History

Tracking all daily blog posts.

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

async function fetchHackerNewsTopStory() {
  try {
    // Fetch top stories from Algolia HN Search API
    // Get recent stories (last 24h) with points > 10 for quality
    const twentyFourHoursAgo = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000);

    // Fetch recent stories, then filter by time in our code
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points>10&hitsPerPage=100`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    if (!data.hits || data.hits.length === 0) {
      return null;
    }

    // Filter stories from last 24 hours
    const recentStories = data.hits.filter(hit => {
      const storyTime = new Date(hit.created_at).getTime() / 1000;
      return storyTime >= twentyFourHoursAgo;
    });

    if (recentStories.length === 0) {
      log(`⚠️  No stories from last 24 hours found`, 'yellow');
      return null;
    }

    // Sort by points (descending) to get the most popular story
    const sortedHits = recentStories.sort((a, b) => b.points - a.points);
    const topStory = sortedHits[0];

    return {
      title: topStory.title || topStory.story_title || 'No title',
      url: topStory.url || topStory.story_url || `https://news.ycombinator.com/item?id=${topStory.objectID}`,
      hnUrl: `https://news.ycombinator.com/item?id=${topStory.objectID}`,
      points: topStory.points || 0,
      comments: topStory.num_comments || 0,
      author: topStory.author,
      createdAt: topStory.created_at,
      objectID: topStory.objectID
    };
  } catch (error) {
    log(`⚠️  Error fetching Hacker News: ${error.message}`, 'yellow');
    return null;
  }
}

function checkCodingActivity() {
  try {
    // Check for recent commits in pintar-blog (last 24 hours)
    const gitLog = execSync(
      `git log --since="24 hours ago" --pretty=format:"%h %s"`,
      { cwd: BLOG_DIR, encoding: 'utf8' }
    );

    if (gitLog.trim()) {
      return {
        hasActivity: true,
        type: 'blog',
        commits: gitLog.trim().split('\n')
      };
    }

    // Check pintarcoding.md for recent audits
    if (fs.existsSync(PINTAR_CODING_FILE)) {
      const codingContent = fs.readFileSync(PINTAR_CODING_FILE, 'utf8');
      const todayStr = getToday();
      if (codingContent.includes(todayStr)) {
        return {
          hasActivity: true,
          type: 'coding',
          content: codingContent
        };
      }
    }

    // Check memory files for coding work
    const todayFile = path.join(MEMORY_DIR, `${getToday()}.md`);
    if (fs.existsSync(todayFile)) {
      const memoryContent = fs.readFileSync(todayFile, 'utf8');
      const keywords = ['coding', 'audit', 'skill', 'Pintar Coding', 'Pintar Blog'];
      const hasCoding = keywords.some(k => memoryContent.toLowerCase().includes(k.toLowerCase()));

      if (hasCoding) {
        return {
          hasActivity: true,
          type: 'memory',
          content: memoryContent
        };
      }
    }

    return { hasActivity: false };

  } catch (error) {
    log(`⚠️  Error checking coding activity: ${error.message}`, 'yellow');
    return { hasActivity: false };
  }
}

async function generatePost(type) {
  initHistory();

  let task, titlePrefix, slugPrefix, tag;

  if (type === 'coding-or-hn') {
    const activity = checkCodingActivity();
    titlePrefix = activity.hasActivity ? 'Coding Activity' : 'Hacker News';
    slugPrefix = activity.hasActivity ? 'coding' : 'hacker-news';
    tag = activity.hasActivity ? 'Coding' : 'Hacker News';

    // If no coding activity, fetch top story from Hacker News via Algolia API
    let hnStory = null;
    if (!activity.hasActivity) {
      log(`🔍 Fetching top story from Hacker News via Algolia API...`, 'cyan');
      hnStory = await fetchHackerNewsTopStory();
      if (hnStory) {
        log(`✅ Found: "${hnStory.title}" (${hnStory.points} points, ${hnStory.comments} comments)`, 'green');
      } else {
        log(`⚠️  No stories found from Algolia API`, 'yellow');
      }
    }

    // Build the task description based on coding activity and HN story
    let taskBody = '';

    if (activity.hasActivity) {
      taskBody = `**AKTIVITAS CODING TERDETEKSI**: Ya (${activity.type})

Tulis tentang coding work yang dilakukan hari ini. Cek sumber-sumber berikut untuk konteks:
- Recent commits di pintar-blog repo
- Recent work di pintarcoding skill
- Memory files hari ini (${getToday()}.md)

Gunakan bahasa teknis. Jelaskan apa yang di-coding, kenapa penting, file yang diubah, dll.`;
    } else if (hnStory) {
      taskBody = `**AKTIVITAS CODING TERDETEKSI**: Tidak - Ambil berita Hacker News

**BERITA HACKER NEWS (via Algolia API)**:
- **Title**: ${hnStory.title}
- **Points**: ${hnStory.points}
- **Comments**: ${hnStory.comments}
- **Author**: ${hnStory.author}
- **Link Asli**: ${hnStory.url}
- **Hacker News**: ${hnStory.hnUrl}
- **Created**: ${hnStory.createdAt}

Tulis artikel tentang berita ini:
- Ringkas ceritanya dengan jelas
- Jelaskan kenapa penting dan impact-nya
- Analisis dari perspektif tech/developer
- Sertakan quotes menarik dari HN comments (kalau ada)
- Jelaskan context/implikasi jangka panjang`;
    } else {
      taskBody = `**AKTIVITAS CODING TERDETEKSI**: Tidak - Ambil berita Hacker News

GAGAL mengambil berita dari Hacker News via Algolia API.
Coba manual ambil 1 BERITA TERBAIK dari: https://news.ycombinator.com/
- Pilih cerita paling menarik/terbanyak vote
- Ringkas ceritanya
- Jelaskan kenapa penting
- Sertakan link asli
- Gunakan bahasa teknis bila sesuai`;
    }

    task = `Tulis blog post harian untuk tanggal: ${getDateLabel()}

**JENIS**: ${titlePrefix}

${taskBody}

**Research Tambahan**:
Cari web untuk konteks tambahan, info background, atau berita terkait.
Tambahkan detail menarik yang tidak ada di sumber asli.
Sertakan sumber dengan link.

**Format Output**:
Return ONLY konten markdown dengan frontmatter:
\`\`\`yaml
---
title: "Daily ${titlePrefix} - ${getDateLabel()}"
description: "Daily update: ${titlePrefix} dari ${getToday()}"
pubDate: ${getToday()}
heroImage: ${getRandomHeroImage()}
tags: ["Daily Update", "${tag}"]
---
\`\`\`

Lalu konten artikel dalam markdown.
Gunakan bahasa teknis bila sesuai.
Sertakan link ke sumber asli.
Format terstruktur dan mudah dibaca.

**Bahasa**: SEMUA konten harus dalam BAHASA INDONESIA.
**Tone**: Teknis, informatif, profesional`;

  } else if (type === 'techmeme') {
    titlePrefix = 'TechMeme News';
    slugPrefix = 'techmeme';
    tag = 'TechMeme';

    // Get today's posts to avoid duplicates
    const todayPosts = getTodayPosts();
    const existingTopics = todayPosts
      .filter(p => p.type === 'techmeme' || p.filename.includes('techmeme'))
      .map(p => simplifyTitle(p.title))
      .filter(t => t.length > 0);

    let existingTopicsList = '';
    if (existingTopics.length > 0) {
      existingTopicsList = `

**TOPIC YANG SUDAH DITULIS HARI INI (HINDARI DUPLIKAT)**:
${existingTopics.map(t => `- ${t}`).join('\n')}`;
    }

    task = `Tulis blog post harian untuk tanggal: ${getDateLabel()}

**JENIS**: TechMeme News

Ambil 1 berita tech menarik dari: https://techmeme.com/?full=t
- Pilih cerita paling penting/menarik
- **PENTING**: Pilih berita BERBEDA dari topik yang sudah ditulis hari ini
- Ringkas apa yang terjadi
- Siapa yang terlibat
- Kenapa penting
- Sertakan link asli${existingTopicsList}

**Research Tambahan**:
Cari web untuk konteks tambahan, info background, atau berita terkait.
Tambahkan detail menarik yang tidak ada di sumber asli.
Sertakan sumber dengan link.

**Format Output**:
Return ONLY konten markdown dengan frontmatter:
\`\`\`yaml
---
title: "Daily ${titlePrefix} - ${getDateLabel()}"
description: "Daily update: ${titlePrefix} dari ${getToday()}"
pubDate: ${getToday()}
heroImage: ${getRandomHeroImage()}
tags: ["Daily Update", "${tag}"]
---
\`\`\`

Lalu konten artikel dalam markdown.
Gunakan bahasa teknis bila sesuai.
Sertakan link ke sumber asli.
Format terstruktur dan mudah dibaca.

**Bahasa**: SEMUA konten harus dalam BAHASA INDONESIA.
**Tone**: Teknis, informatif, profesional`;
  } else {
    log(`❌ Unknown type: ${type}`, 'yellow');
    return { success: false, error: 'Unknown type' };
  }

  log(`\n📅 Pintar Blog Daily - ${getTimestamp()}`, 'cyan');
  log(`Generating ${titlePrefix} post...\n`, 'blue');

  try {
    // Encode task as base64 to avoid shell escaping issues with special characters
    const encodedTask = Buffer.from(task).toString('base64');

    // Spawn agent to write content using base64-encoded task
    const result = execSync(
      `echo "${encodedTask}" | base64 -d | openclaw sessions spawn --task - --label "pintarblog-daily-writer-${type}" --cleanup delete`,
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

    // Extract title from generated content
    const titleMatch = markdownContent.match(/^title:\s*"([^"]+)"/m);
    const generatedTitle = titleMatch ? titleMatch[1].trim() : '';

    if (!generatedTitle) {
      log(`❌ Could not extract title from generated content`, 'yellow');
      return { success: false, error: 'Could not extract title' };
    }

    // Check for duplicate posts from today
    const todayPosts = getTodayPosts();
    const isDuplicate = isDuplicateTitle(generatedTitle, todayPosts);

    if (isDuplicate) {
      log(`⏭️  Duplicate title detected: "${generatedTitle}"`, 'yellow');
      log(`Skipping - post with this title already exists today`, 'yellow');

      appendHistory({
        title: `Daily ${titlePrefix} - ${getDateLabel()}`,
        slug: getDaySlug(slugPrefix),
        type,
        status: `Skipped: Duplicate title - ${generatedTitle}`
      });

      return {
        success: true,
        skipped: true,
        reason: 'Duplicate title already posted today'
      };
    }

    // Save to file
    const slug = getDaySlug(slugPrefix);
    const filepath = path.join(POSTS_DIR, `${slug}.md`);

    if (fs.existsSync(filepath)) {
      log(`⚠️  Post for today already exists, updating...`, 'yellow');
    }

    fs.writeFileSync(filepath, markdownContent);

    log(`✅ Post saved to: ${slug}.md`, 'green');

    // Add to git
    log(`📝 Committing to Git...`, 'yellow');

    execSync(`git add "${filepath}"`, { cwd: BLOG_DIR });

    const commitMsg = `blog: add daily ${titlePrefix.toLowerCase()} - ${getToday()}`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: BLOG_DIR });

    // Push to GitHub
    log(`🚀 Pushing to GitHub...`, 'yellow');

    execSync(`git push origin main`, { cwd: BLOG_DIR });

    log(`✅ Pushed to GitHub`, 'green');

    // Update history
    appendHistory({
      title: `Daily ${titlePrefix} - ${getDateLabel()}`,
      slug,
      type,
      status: 'Published ✅'
    });

    log(`\n📊 Summary:`, 'blue');
    log(`─`.repeat(50), 'blue');
    log(`Post URL: https://pintar-blog.vercel.app/blog/${slug}/`, 'green');
    log(`File: ${slug}.md`, 'cyan');
    log(`Deploy: Auto via Vercel (~30-60s)`, 'cyan');
    log(`Type: ${titlePrefix}`, 'cyan');
    log(`─`.repeat(50), 'blue');

    return {
      success: true,
      slug,
      filename: `${slug}.md`,
      url: `https://pintar-blog.vercel.app/blog/${slug}/`
    };

  } catch (error) {
    const errorMsg = error.message || 'Unknown error';
    log(`❌ Error: ${errorMsg}`, 'yellow');

    appendHistory({
      title: `Daily ${titlePrefix} - ${getDateLabel()}`,
      slug: getDaySlug(slugPrefix),
      type,
      status: `Failed: ${errorMsg}`
    });

    return { success: false, error: errorMsg };
  }
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0] || 'coding-or-hn';

if (command === '--help' || command === '-h') {
  console.log(`
📅 Pintar Blog Daily - Automated Daily Blog Posts

Usage:
  node index.js [type]

Types:
  coding-or-hn   Generate Coding Activity or Hacker News post (default)
  techmeme       Generate TechMeme News post

Examples:
  node index.js coding-or-hn    # Post 1
  node index.js techmeme        # Post 2

Suggested time: After 18:00 WIB (evening)

To generate both daily posts, run TWICE:
  node index.js coding-or-hn
  node index.js techmeme
`);
  process.exit(0);
}

generatePost(command)
  .then(result => {
    if (result.success) {
      if (result.skipped) {
        log(`\n⏭️  Post skipped: ${result.reason}\n`, 'cyan');
        process.exit(0);
      } else {
        log(`\n✨ Daily blog post created!\n`, 'cyan');
        process.exit(0);
      }
    } else {
      log(`\n❌ Failed to create daily blog post\n`, 'yellow');
      process.exit(1);
    }
  })
  .catch(err => {
    log(`\n❌ Fatal error: ${err.message}\n`, 'yellow');
    process.exit(1);
  });
