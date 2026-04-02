#!/usr/bin/env node

/**
 * Pre-Market Radar Cron Job
 * Daily automation for Pre-Market Intelligence Radar
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const PREMARKET_SKILL = '/root/.openclaw/workspace/skills/premarket-radar/index.js';
const REPORTS_DIR = '/root/.openclaw/workspace/premarket-radar/reports';
const BLOG_DIR = '/root/.openclaw/workspace/pintar-blog';
const PUBLIC_DIR = path.join(BLOG_DIR, 'public');
const PREMARKET_HTML = 'premarket-radar.html';

// Telegram user
const TELEGRAM_USER_ID = '31300911';

/**
 * Get current timestamp
 */
function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').split('.')[0] + ' WIB';
}

/**
 * Log with timestamp
 */
function log(msg, level = 'info') {
  const timestamp = getTimestamp();
  const prefix = {
    info: '📋',
    success: '✅',
    error: '❌',
    warning: '⚠️'
  }[level] || '📋';
  console.log(`[${timestamp}] ${prefix} ${msg}`);
}

/**
 * Run Pre-Market Radar
 */
function runPreMarketRadar() {
  log('Starting Pre-Market Radar...');

  try {
    const result = execSync(`node ${PREMARKET_SKILL}`, {
      encoding: 'utf8',
      timeout: 120000 // 2 minutes
    });

    log('Pre-Market Radar completed', 'success');

    // Parse JSON output (multi-line)
    const lines = result.split('\n');
    const startIndex = lines.findIndex(line => line.trim().startsWith('{'));
    
    if (startIndex === -1) {
      return { success: false, error: 'No JSON output found' };
    }

    // Find the closing brace (must be on a line by itself)
    let endIndex = startIndex;
    let braceCount = 0;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i];
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      if (braceCount === 0 && line.trim().endsWith('}')) {
        endIndex = i;
        break;
      }
    }

    // Extract and parse the JSON
    const jsonLines = lines.slice(startIndex, endIndex + 1);
    const jsonString = jsonLines.join('\n');
    
    try {
      return JSON.parse(jsonString);
    } catch (parseError) {
      log(`JSON parse error: ${parseError.message}`, 'error');
      return { success: false, error: `JSON parse failed: ${parseError.message}` };
    }
  } catch (error) {
    log(`Pre-Market Radar failed: ${error.message}`, 'error');
    return { success: false, error: error.message };
  }
}

/**
 * Get latest HTML report
 */
function getLatestReport() {
  try {
    const files = fs.readdirSync(REPORTS_DIR)
      .filter(f => f.startsWith('PreMarket_Radar_USDIDR_') && f.endsWith('.html'))
      .sort((a, b) => b.localeCompare(a));

    if (files.length === 0) {
      log('No reports found', 'warning');
      return null;
    }

    const latestFile = files[0];
    const sourcePath = path.join(REPORTS_DIR, latestFile);
    return { sourcePath, filename: latestFile };
  } catch (error) {
    log(`Failed to get latest report: ${error.message}`, 'error');
    return null;
  }
}

/**
 * Copy report to pintar-blog public
 */
function copyToBlog(sourcePath, filename) {
  log('Copying report to pintar-blog...');

  try {
    const destPath = path.join(PUBLIC_DIR, PREMARKET_HTML);
    fs.copyFileSync(sourcePath, destPath);
    log(`Copied to ${destPath}`, 'success');
    return destPath;
  } catch (error) {
    log(`Failed to copy: ${error.message}`, 'error');
    return null;
  }
}

/**
 * Git commit and push
 */
function gitCommit(filename) {
  log('Committing to Git...');

  try {
    const filepath = `public/${PREMARKET_HTML}`;
    
    // Add file
    execSync(`git add "${filepath}"`, { cwd: BLOG_DIR });
    
    // Commit
    const commitMsg = `feat: update Pre-Market Radar dashboard - ${new Date().toISOString().split('T')[0]}`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: BLOG_DIR });
    
    log('Committed successfully', 'success');

    // Push
    log('Pushing to GitHub...');
    execSync(`git push origin main`, { cwd: BLOG_DIR });
    
    log('Pushed successfully', 'success');
    return true;
  } catch (error) {
    // Check if it's just "nothing to commit"
    if (error.message.includes('nothing to commit')) {
      log('No changes to commit', 'warning');
      return true;
    }
    log(`Git failed: ${error.message}`, 'error');
    return false;
  }
}

/**
 * Send Telegram report
 */
async function sendTelegram(telegramReport) {
  log('Sending to Telegram...');

  try {
    // Use OpenClaw message tool via CLI
    execSync(`openclaw message send --target ${TELEGRAM_USER_ID} --channel telegram --message '${telegramReport.replace(/'/g, "\\'")}'`, {
      encoding: 'utf8',
      timeout: 30000
    });

    log('Telegram sent successfully', 'success');
    return true;
  } catch (error) {
    log(`Telegram failed: ${error.message}`, 'error');
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  log('═══════════════════════════════════════');
  log('📡 PRE-MARKET RADAR CRON JOB');
  log('═══════════════════════════════════════');

  // Step 1: Run Pre-Market Radar
  const radarResult = runPreMarketRadar();

  if (!radarResult.success) {
    log('Stopping due to Pre-Market Radar failure', 'error');
    process.exit(1);
  }

  // Step 2: Get latest report
  const report = getLatestReport();

  if (!report) {
    log('No report found, stopping', 'error');
    process.exit(1);
  }

  // Step 3: Copy to blog
  const destPath = copyToBlog(report.sourcePath, report.filename);

  if (!destPath) {
    log('Failed to copy to blog, stopping', 'error');
    process.exit(1);
  }

  // Step 4: Git commit & push
  gitCommit(report.filename);

  // Step 5: Send Telegram report
  if (radarResult.telegramReport) {
    await sendTelegram(radarResult.telegramReport);
  }

  log('═══════════════════════════════════════');
  log('✅ PRE-MARKET RADAR CRON COMPLETED');
  log('═══════════════════════════════════════');

  // Output summary
  const summary = {
    success: true,
    timestamp: getTimestamp(),
    htmlFile: report.filename,
    blogUrl: 'https://pintar-blog.vercel.app/premarket-radar',
    telegramSent: !!radarResult.telegramReport,
    gitPushed: true
  };

  console.log('\n' + JSON.stringify(summary, null, 2));
}

// Run main
main().catch(error => {
  log(`Fatal error: ${error.message}`, 'error');
  console.error(error.stack);
  process.exit(1);
});
