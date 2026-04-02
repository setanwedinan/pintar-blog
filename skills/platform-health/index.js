#!/usr/bin/env node

/**
 * Platform Health Dashboard
 * Automated health check for AI platform
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Workspace root
const WORKSPACE = process.env.OPENCLAW_WORKSPACE || '/root/.openclaw/workspace';

// Telegram user ID (from USER.md)
const TELEGRAM_USER = '31300911';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

const STATUS = {
  OK: { emoji: '✅', color: colors.green, level: 'OK' },
  WARNING: { emoji: '⚠️', color: colors.yellow, level: 'WARNING' },
  ERROR: { emoji: '❌', color: colors.red, level: 'ERROR' },
  INFO: { emoji: 'ℹ️', color: colors.blue, level: 'INFO' },
};

async function checkCronJobs() {
  console.log('Checking cron jobs...');
  try {
    const output = execSync('openclaw cron list', { encoding: 'utf8' });
    // Parse the cron list output (table format)
    const lines = output.trim().split('\n');
    
    // Skip header line (starts with ID)
    const dataLines = lines.slice(1).filter(line => line.trim());
    
    if (dataLines.length === 0) {
      return { status: STATUS.INFO, message: 'No cron jobs configured' };
    }

    const jobs = [];
    
    for (const line of dataLines) {
      // The last 3 fields are consistently: Status, Target, Agent
      // Let's work backwards - work from the end where format is consistent
      const parts = line.trim().split(/\s+/);
      
      if (parts.length >= 3) {
        // Agent is last (index: length-1)
        const agent = parts[parts.length - 1];
        // Target is second to last (index: length-2)
        const target = parts[parts.length - 2];
        // Status is third to last (index: length-3)
        const status = parts[parts.length - 3].toLowerCase();
        
        // Name is the second field (after UUID at index 0)
        const name = parts[1];
        
        jobs.push({ name, status, target, agent });
      }
    }

    const successfulJobs = jobs.filter(j => j.status === 'ok');
    const failedJobs = jobs.filter(j => j.status !== 'ok');

    if (jobs.length === 0) {
      return { status: STATUS.INFO, message: 'No cron jobs found' };
    }

    if (failedJobs.length > 0) {
      return {
        status: STATUS.WARNING,
        message: `${successfulJobs.length} ok, ${failedJobs.length} issues`,
        details: failedJobs.map(j => `• ${j.name}: ${j.status}`),
      };
    }

    return {
      status: STATUS.OK,
      message: `All ${jobs.length} jobs running`,
      details: jobs.map(j => `• ${j.name}`),
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check cron jobs: ${error.message}`,
    };
  }
}

async function checkCodeQuality() {
  console.log('Checking code quality...');
  try {
    const skillsDir = path.join(WORKSPACE, 'skills');
    const todoIssues = [];
    const fixmeIssues = [];
    const hackIssues = [];

    async function scanDirectory(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          // Skip node_modules
          if (entry.name === 'node_modules') continue;
          await scanDirectory(fullPath);
        } else if (entry.name.endsWith('.js') || entry.name.endsWith('.md')) {
          // Skip documentation files
          if (entry.name === 'SKILL.md' || entry.name === 'README.md') continue;

          const content = await fs.readFile(fullPath, 'utf8');
          
          // Remove code blocks to avoid false positives from examples
          // Matches both ```code``` and ~~~code~~~ style blocks
          const contentWithoutCodeBlocks = content.replace(/```[\s\S]*?```/g, '').replace(/~~~[\s\S]*?~~~/g, '');
          
          const lines = contentWithoutCodeBlocks.split('\n');

          lines.forEach((line, index) => {
            // Only match TODO in comments with punctuation (TODO:, TODO -), not in docs
            const todoMatch = line.match(/(\/\/|#|<!--|\/\*)\s*TODO\s*[:-]/i);
            const fixmeMatch = line.match(/(\/\/|#|<!--|\/\*)\s*FIXME\s*[:-]/i);
            const hackMatch = line.match(/(\/\/|#|<!--|\/\*)\s*HACK\s*[:-]/i);

            if (todoMatch) {
              todoIssues.push(`${path.relative(WORKSPACE, fullPath)}:${index + 1}`);
            }
            if (fixmeMatch) {
              fixmeIssues.push(`${path.relative(WORKSPACE, fullPath)}:${index + 1}`);
            }
            if (hackMatch) {
              hackIssues.push(`${path.relative(WORKSPACE, fullPath)}:${index + 1}`);
            }
          });
        }
      }
    }

    await scanDirectory(skillsDir);

    const totalIssues = todoIssues.length + fixmeIssues.length + hackIssues.length;

    if (totalIssues === 0) {
      return { status: STATUS.OK, message: 'No code quality issues' };
    }

    return {
      status: totalIssues > 5 ? STATUS.WARNING : STATUS.OK,
      message: `${totalIssues} issues found (TODO: ${todoIssues.length}, FIXME: ${fixmeIssues.length}, HACK: ${hackIssues.length})`,
      details: [
        ...todoIssues.slice(0, 5).map(t => `• TODO: ${t}`),
        ...fixmeIssues.slice(0, 3).map(f => `• FIXME: ${f}`),
        ...hackIssues.slice(0, 2).map(h => `• HACK: ${h}`),
      ],
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check code quality: ${error.message}`,
    };
  }
}

async function checkTestCoverage() {
  console.log('Checking test coverage...');
  try {
    const skillsDir = path.join(WORKSPACE, 'skills');
    let testFiles = 0;
    let jsFiles = 0;

    async function scanDirectory(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await scanDirectory(fullPath);
        } else if (entry.name.endsWith('.test.js') || entry.name.endsWith('.spec.js')) {
          testFiles++;
        } else if (entry.name.endsWith('.js') && !entry.name.includes('test') && !entry.name.includes('spec')) {
          jsFiles++;
        }
      }
    }

    await scanDirectory(skillsDir);

    if (jsFiles === 0) {
      return { status: STATUS.INFO, message: 'No JavaScript files found' };
    }

    const coverage = testFiles / jsFiles;

    if (testFiles === 0) {
      return {
        status: STATUS.WARNING,
        message: 'No test files found',
        details: ['• Consider adding unit tests for critical skills'],
      };
    }

    if (coverage < 0.3) {
      return {
        status: STATUS.WARNING,
        message: `${testFiles}/${jsFiles} files tested (${(coverage * 100).toFixed(1)}% coverage)`,
        details: ['• Test coverage is below 30%'],
      };
    }

    if (coverage < 0.7) {
      return {
        status: STATUS.OK,
        message: `${testFiles}/${jsFiles} files tested (${(coverage * 100).toFixed(1)}% coverage)`,
        details: ['• Consider increasing test coverage to 70%+'],
      };
    }

    return {
      status: STATUS.OK,
      message: `${testFiles}/${jsFiles} files tested (${(coverage * 100).toFixed(1)}% coverage)`,
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check test coverage: ${error.message}`,
    };
  }
}

async function checkPromptQuality() {
  console.log('Checking prompt quality...');
  try {
    const skillsDir = path.join(WORKSPACE, 'skills');
    let totalPrompts = 0;
    let issues = [];

    async function scanDirectory(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await scanDirectory(fullPath);
        } else if (entry.name === 'SKILL.md') {
          const content = await fs.readFile(fullPath, 'utf8');
          totalPrompts++;

          // Check for basic structure
          // Valid variations: ## Usage, ## How to Use, ## How to use, Usage:, etc.
          const hasUsageSection = 
            content.includes('## Usage') ||
            content.includes('## How to Use') ||
            content.includes('## How to use') ||
            content.includes('## Cara Pakai') ||
            content.includes('Usage:') ||
            content.includes('How to use:');
          
          if (!hasUsageSection) {
            issues.push(`${path.basename(path.dirname(fullPath))}: Missing Usage section`);
          }
          if (content.length < 200) {
            issues.push(`${path.basename(path.dirname(fullPath))}: SKILL.md too short`);
          }
        }
      }
    }

    await scanDirectory(skillsDir);

    if (issues.length > 0) {
      return {
        status: STATUS.WARNING,
        message: `${issues.length} prompt quality issues`,
        details: issues.map(i => `• ${i}`),
      };
    }

    return {
      status: STATUS.OK,
      message: `${totalPrompts} skills with good documentation`,
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check prompt quality: ${error.message}`,
    };
  }
}

async function checkDependencies() {
  console.log('Checking dependencies...');
  try {
    const pkgPath = path.join(WORKSPACE, 'package.json');

    if (!await fileExists(pkgPath)) {
      return { status: STATUS.INFO, message: 'No package.json in workspace' };
    }

    try {
      const outdated = execSync('npm outdated --json', {
        encoding: 'utf8',
        cwd: WORKSPACE,
      });

      if (!outdated.trim()) {
        return { status: STATUS.OK, message: 'All dependencies up to date' };
      }

      const outdatedPkgs = JSON.parse(outdated);
      const count = Object.keys(outdatedPkgs).length;

      const examples = Object.entries(outdatedPkgs)
        .slice(0, 3)
        .map(([name, info]) => `• ${name}: ${info.current} → ${info.latest}`);

      return {
        status: STATUS.WARNING,
        message: `${count} outdated packages`,
        details: examples,
      };
    } catch (npmError) {
      // npm outdated exits with code 1 if outdated packages found
      if (npmError.stdout) {
        const outdatedPkgs = JSON.parse(npmError.stdout);
        const count = Object.keys(outdatedPkgs).length;

        const examples = Object.entries(outdatedPkgs)
          .slice(0, 3)
          .map(([name, info]) => `• ${name}: ${info.current} → ${info.latest}`);

        return {
          status: STATUS.WARNING,
          message: `${count} outdated packages`,
          details: examples,
        };
      }

      throw npmError;
    }
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check dependencies: ${error.message}`,
    };
  }
}

async function checkStorage() {
  console.log('Checking storage...');
  try {
    const dbFiles = [
      'skills/knowledge-rag/db.json',
      'skills/pintarblog/blog-history.md',
      'skills/pintarblog-daily/daily-history.md',
      'skills/pintarcoding/pintarcoding.md',
    ];

    const sizes = [];
    let totalSize = 0;

    for (const file of dbFiles) {
      const fullPath = path.join(WORKSPACE, file);
      if (await fileExists(fullPath)) {
        const stats = await fs.stat(fullPath);
        const sizeMB = stats.size / (1024 * 1024);
        totalSize += sizeMB;
        sizes.push({ file, size: sizeMB.toFixed(2) });
      }
    }

    if (totalSize > 100) {
      return {
        status: STATUS.WARNING,
        message: `Storage: ${totalSize.toFixed(2)}MB (getting large)`,
        details: sizes.map(s => `• ${s.file}: ${s.size}MB`),
      };
    }

    return {
      status: STATUS.OK,
      message: `Storage: ${totalSize.toFixed(2)}MB (healthy)`,
      details: sizes.map(s => `• ${s.file}: ${s.size}MB`),
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check storage: ${error.message}`,
    };
  }
}

async function checkSkillIntegrity() {
  console.log('Checking skill integrity...');
  try {
    const skillsDir = path.join(WORKSPACE, 'skills');
    const entries = await fs.readdir(skillsDir, { withFileTypes: true });

    const skills = [];
    const issues = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const skillPath = path.join(skillsDir, entry.name);
        const hasSkillMd = await fileExists(path.join(skillPath, 'SKILL.md'));
        const hasIndexJs = await fileExists(path.join(skillPath, 'index.js'));
        const hasPackageJson = await fileExists(path.join(skillPath, 'package.json'));

        skills.push(entry.name);

        if (!hasSkillMd) {
          issues.push(`${entry.name}: Missing SKILL.md`);
        }
        if (!hasIndexJs) {
          issues.push(`${entry.name}: Missing index.js`);
        }
      }
    }

    if (issues.length > 0) {
      return {
        status: STATUS.WARNING,
        message: `${skills.length} skills, ${issues.length} issues`,
        details: issues.map(i => `• ${i}`),
      };
    }

    return {
      status: STATUS.OK,
      message: `All ${skills.length} skills functional`,
      details: skills.map(s => `• ${s}`),
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check skill integrity: ${error.message}`,
    };
  }
}

async function checkConfigurationConsistency() {
  console.log('Checking configuration consistency...');
  try {
    const configFiles = [
      'skills/knowledge-rag/config.json',
      'skills/pintar-email/config.json',
      'skills/pintar-social/config.json',
    ];

    const issues = [];
    let checked = 0;

    for (const file of configFiles) {
      const fullPath = path.join(WORKSPACE, file);
      if (await fileExists(fullPath)) {
        try {
          const content = await fs.readFile(fullPath, 'utf8');
          JSON.parse(content);
          checked++;
        } catch (parseError) {
          issues.push(`${file}: Invalid JSON`);
        }
      }
    }

    if (issues.length > 0) {
      return {
        status: STATUS.ERROR,
        message: `${checked} valid configs, ${issues.length} errors`,
        details: issues.map(i => `• ${i}`),
      };
    }

    return {
      status: STATUS.OK,
      message: `${checked} configuration files valid`,
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check configuration: ${error.message}`,
    };
  }
}

async function checkDataIntegrity() {
  console.log('Checking data integrity...');
  try {
    const dbPath = path.join(WORKSPACE, 'skills/knowledge-rag/db.json');

    if (!await fileExists(dbPath)) {
      return {
        status: STATUS.INFO,
        message: 'No knowledge database found',
      };
    }

    const content = await fs.readFile(dbPath, 'utf8');
    const db = JSON.parse(content);

    const issues = [];

    // Check structure
    if (!db.documents || !Array.isArray(db.documents)) {
      issues.push('Missing or invalid documents array');
    } else {
      // Check for corrupt documents
      const corruptDocs = db.documents.filter(doc => {
        return !doc.id || !doc.url || !doc.ingestedAt;
      });

      if (corruptDocs.length > 0) {
        issues.push(`${corruptDocs.length} corrupt documents found`);
      }
    }

    if (issues.length > 0) {
      return {
        status: STATUS.WARNING,
        message: `${db.documents?.length || 0} documents, ${issues.length} issues`,
        details: issues.map(i => `• ${i}`),
      };
    }

    return {
      status: STATUS.OK,
      message: `Database healthy: ${db.documents?.length || 0} documents`,
    };
  } catch (error) {
    return {
      status: STATUS.ERROR,
      message: `Failed to check data integrity: ${error.message}`,
    };
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function formatReport(results) {
  const date = new Date().toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let report = `🔍 Platform Health Report - ${date}\n\n`;

  const checks = [
    { name: 'Cron Job Health', result: results.cron },
    { name: 'Code Quality', result: results.codeQuality },
    { name: 'Test Coverage', result: results.testCoverage },
    { name: 'Prompt Quality', result: results.promptQuality },
    { name: 'Dependencies', result: results.dependencies },
    { name: 'Storage', result: results.storage },
    { name: 'Skill Integrity', result: results.skillIntegrity },
    { name: 'Configuration', result: results.config },
    { name: 'Data Integrity', result: results.dataIntegrity },
  ];

  checks.forEach((check, index) => {
    const { emoji, level } = check.result.status;
    report += `${index + 1}. ${emoji} ${check.name}: ${check.result.message}\n`;

    if (check.result.details && check.result.details.length > 0) {
      check.result.details.forEach(detail => {
        report += `   ${detail}\n`;
      });
    }
  });

  // Generate recommendations
  const warnings = checks.filter(c => c.result.status === STATUS.WARNING);
  const errors = checks.filter(c => c.result.status === STATUS.ERROR);

  if (warnings.length > 0 || errors.length > 0) {
    report += '\n📋 Rekomendasi:\n';

    const recommendations = [];

    if (errors.length > 0) {
      errors.forEach(e => {
        recommendations.push(`Perbaiki ${e.name}: ${e.result.message}`);
      });
    }

    if (warnings.some(w => w.name === 'Code Quality')) {
      const codeQuality = results.codeQuality;
      if (codeQuality.details) {
        codeQuality.details.slice(0, 2).forEach(d => {
          if (d.includes('TODO')) recommendations.push(`Hapus atau selesaikan: ${d}`);
          if (d.includes('FIXME')) recommendations.push(`Perbaiki: ${d}`);
        });
      }
    }

    if (warnings.some(w => w.name === 'Dependencies')) {
      recommendations.push('Update paket: npm update');
    }

    if (warnings.some(w => w.name === 'Test Coverage')) {
      recommendations.push('Tambahkan test untuk skill penting');
    }

    recommendations.slice(0, 5).forEach((rec, i) => {
      report += `${i + 1}. ${rec}\n`;
    });
  } else {
    report += '\n✨ Semua sistem berjalan dengan baik!\n';
  }

  return report;
}

async function sendToTelegram(message) {
  try {
    // Escape single quotes for shell
    const escapedMessage = message.replace(/'/g, "'\\''");
    
    execSync(`openclaw message send -t ${TELEGRAM_USER} -m '${escapedMessage}'`, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024, // 10MB buffer for large messages
    });
    
    console.log('\n✅ Report sent to Telegram');
  } catch (error) {
    console.error('\n❌ Failed to send to Telegram:', error.message);
    console.error('Output:', error.stdout);
    console.error('Error:', error.stderr);
  }
}

async function main() {
  console.log('🔍 Platform Health Check Starting...\n');

  const results = {
    cron: await checkCronJobs(),
    codeQuality: await checkCodeQuality(),
    testCoverage: await checkTestCoverage(),
    promptQuality: await checkPromptQuality(),
    dependencies: await checkDependencies(),
    storage: await checkStorage(),
    skillIntegrity: await checkSkillIntegrity(),
    config: await checkConfigurationConsistency(),
    dataIntegrity: await checkDataIntegrity(),
  };

  const report = formatReport(results);

  console.log('\n' + report);
  await sendToTelegram(report);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, formatReport };
