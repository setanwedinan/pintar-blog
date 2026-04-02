#!/usr/bin/env node

/**
 * Pintar Coding - Site Optimization Audit
 *
 * Spawns parallel agents for performance, accessibility, SEO, and code quality audits
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TRACKING_FILE = path.join(__dirname, 'pintarcoding.md');

// Colors for terminal output
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
  return new Date().toISOString().replace('T', ' ').split('.')[0] + ' WIB';
}

function initTracking() {
  if (!fs.existsSync(TRACKING_FILE)) {
    const header = `# Pintar Coding - Audit History

Tracking site optimization audits and changes.

---

`;
    fs.writeFileSync(TRACKING_FILE, header);
  }
}

function appendTracking(entry) {
  const timestamp = getTimestamp();
  const content = `
## ${timestamp}

**Site:** ${entry.site}
**Agent:** ${entry.agent}

${entry.content}

---

`;
  fs.appendFileSync(TRACKING_FILE, content);
}

// Agent task definitions
const AGENT_TASKS = {
  performance: (site) => `Audit performance/build optimization for site at: ${site}
- Check load times (use lighthouse or similar)
- Analyze bundle sizes and identify large chunks
- Review image optimization (lazy loading, formats, compression)
- Check for caching strategies
- Suggest build optimizations (code splitting, minification)
- Return specific file paths and issues found.`,

  accessibility: (site) => `Audit accessibility for site at: ${site}
- Check ARIA labels and roles
- Test keyboard navigation (tab order, focus management)
- Review color contrast ratios
- Check alt text on images
- Validate form labels and error messages
- Test screen reader compatibility
- Return specific file paths and issues found.`,

  seo: (site) => `Audit SEO for site at: ${site}
- Review meta tags (title, description, og tags)
- Check structured data (JSON-LD, schema.org)
- Analyze heading hierarchy (H1, H2, etc.)
- Review sitemap.xml and robots.txt
- Check canonical URLs
- Review page load speed impact on SEO
- Return specific file paths and issues found.`,

  codeQuality: (site) => `Audit code quality for site at: ${site}
- Run linter checks (ESLint, StyleLint, or project-specific)
- Check for unused imports and dead code
- Review error handling patterns
- Check for security vulnerabilities
- Review naming conventions and consistency
- Check for code duplication
- Return specific file paths and issues found.`
};

async function spawnAgent(name, task, site) {
  log(`🚀 Spawning ${name} agent...`, 'cyan');

  try {
    // Use sessions_spawn to create an isolated agent
    const result = execSync(
      `openclaw sessions spawn --task "${task}" --label "pintarcoding-${name}" --cleanup delete`,
      {
        encoding: 'utf8',
        cwd: process.cwd()
      }
    );

    const output = result.toString().trim();

    // Track the result
    appendTracking({
      site,
      agent: name,
      content: output || 'No output from agent'
    });

    log(`✅ ${name} agent completed`, 'green');
    return { name, success: true, output };

  } catch (error) {
    const errorMsg = error.message || 'Unknown error';
    appendTracking({
      site,
      agent: name,
      content: `❌ ERROR: ${errorMsg}`
    });
    log(`❌ ${name} agent failed: ${errorMsg}`, 'yellow');
    return { name, success: false, error: errorMsg };
  }
}

async function runParallelAudit(site) {
  log(`\n🔍 Starting Pintar Coding Audit for: ${site}`, 'blue');
  log(`⏰ Started at: ${getTimestamp()}\n`, 'blue');

  // Initialize tracking
  initTracking();

  // Spawn all agents in parallel
  const agents = ['performance', 'accessibility', 'seo', 'codeQuality'];
  const tasks = agents.map(name => ({
    name,
    task: AGENT_TASKS[name](site),
    site
  }));

  // Run all agents in parallel
  const results = await Promise.all(
    tasks.map(({ name, task, site }) => spawnAgent(name, task, site))
  );

  // Summary
  log(`\n📊 Audit Summary:`, 'blue');
  log('─'.repeat(50), 'blue');

  const succeeded = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  results.forEach(r => {
    const status = r.success ? '✅' : '❌';
    log(`${status} ${r.name}`, r.success ? 'green' : 'yellow');
  });

  log('─'.repeat(50), 'blue');
  log(`Total: ${succeeded} passed, ${failed} failed\n`, 'blue');

  // Add summary to tracking
  appendTracking({
    site,
    agent: 'SUMMARY',
    content: `
**Results:**
- ✅ Success: ${succeeded}
- ❌ Failed: ${failed}

**See above for individual agent reports.**
`
  });

  log(`📝 Full report saved to: pintarcoding.md\n`, 'cyan');

  return results;
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];
const sitePath = args[1];

if (!command) {
  console.log(`
🎨 Pintar Coding - Site Optimization Audit

Usage:
  node index.js audit <site-path>

Example:
  node index.js audit /path/to/your/site
`);
  process.exit(0);
}

if (command === 'audit') {
  if (!sitePath) {
    log('❌ Error: site-path required', 'yellow');
    process.exit(1);
  }

  if (!fs.existsSync(sitePath)) {
    log(`❌ Error: path not found: ${sitePath}`, 'yellow');
    process.exit(1);
  }

  runParallelAudit(sitePath)
    .then(() => process.exit(0))
    .catch(err => {
      log(`❌ Fatal error: ${err.message}`, 'yellow');
      process.exit(1);
    });
} else {
  log(`❌ Unknown command: ${command}`, 'yellow');
  process.exit(1);
}
