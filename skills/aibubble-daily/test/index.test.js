#!/usr/bin/env node

/**
 * Tests for AI Bubble Daily Dashboard
 * Run with: node test/index.test.js
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs').promises;

// Import functions to test
const indexPath = path.join(__dirname, '..', 'index.js');
delete require.cache[require.resolve(indexPath)];
const {
  getTimestamp,
  getToday,
  getDateLabel,
  getDaySlug,
  initHistory,
  appendHistory,
} = require(indexPath);

// Test history file path (use temp file for testing)
const TEST_HISTORY = path.join(__dirname, 'test-history.md');

// Override HISTORY_FILE path for testing
const originalFsExistsSync = fs.existsSync;
const originalFsWriteFileSync = require('fs').writeFileSync;
const originalFsReadFileSync = require('fs').readFileSync;

let testHistoryContent = '';

function mockFs() {
  // Mock fs operations for testing
  require('fs').existsSync = (path) => {
    if (path.includes('test-history')) {
      return testHistoryContent.length > 0;
    }
    return originalFsExistsSync(path);
  };

  require('fs').writeFileSync = (path, content) => {
    if (path.includes('test-history')) {
      testHistoryContent = content;
    } else {
      originalFsWriteFileSync(path, content);
    }
  };

  require('fs').readFileSync = (path, encoding) => {
    if (path.includes('test-history')) {
      return testHistoryContent;
    }
    return originalFsReadFileSync(path, encoding);
  };
}

function restoreFs() {
  require('fs').existsSync = originalFsExistsSync;
  require('fs').writeFileSync = originalFsWriteFileSync;
  require('fs').readFileSync = originalFsReadFileSync;
}

let testsPassed = 0;
let testsFailed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    testsPassed++;
  } catch (error) {
    console.log(`❌ ${name}`);
    console.log(`   Error: ${error.message}`);
    testsFailed++;
  }
}

console.log('\n🧪 Running AI Bubble Daily Dashboard Tests\n');

// Test 1: getTimestamp returns valid ISO format
test('getTimestamp returns valid timestamp format', () => {
  const timestamp = getTimestamp();
  assert(timestamp.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} WIB/), 
    'Timestamp should be in format: YYYY-MM-DD HH:MM:SS WIB');
});

// Test 2: getToday returns valid ISO date
test('getToday returns valid ISO date', () => {
  const today = getToday();
  assert(today.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/), 
    'Today should be in ISO 8601 format');
});

// Test 3: getDateLabel returns Indonesian format
test('getDateLabel returns Indonesian date format', () => {
  const dateLabel = getDateLabel();
  // Should contain Indonesian day/month names
  assert(dateLabel.length > 0, 'Date label should not be empty');
  assert(dateLabel.includes('2026') || dateLabel.includes('2025'), 
    'Date label should include year');
});

// Test 4: getDaySlug returns valid slug format
test('getDaySlug returns valid slug format', () => {
  const slug = getDaySlug();
  assert(slug.startsWith('aibubble-dashboard-'), 
    'Slug should start with "aibubble-dashboard-"');
  assert(slug.match(/\d{4}-\d{2}-\d{2}$/), 
    'Slug should end with date in format YYYY-MM-DD');
});

// Test 5: getDaySlug contains current date
test('getDaySlug contains current date', () => {
  const slug = getDaySlug();
  const today = new Date().toISOString().split('T')[0];
  assert(slug.includes(today), 
    'Slug should include today\'s date');
});

// Test 6: getTimestamp ends with WIB
test('getTimestamp ends with WIB timezone', () => {
  const timestamp = getTimestamp();
  assert(timestamp.endsWith(' WIB'), 
    'Timestamp should end with " WIB"');
});

// Test 7: getToday has UTC 01:00:00 (08:00 WIB)
test('getToday sets time to 01:00:00 UTC', () => {
  const today = getToday();
  assert(today.includes('T01:00:00'), 
    'Today should have time set to 01:00:00 UTC (08:00 WIB)');
});

// Summary
console.log('\n' + '─'.repeat(50));
console.log(`Tests Passed: ${testsPassed}`);
console.log(`Tests Failed: ${testsFailed}`);
console.log('─'.repeat(50));

if (testsFailed > 0) {
  console.log('\n❌ Some tests failed!\n');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!\n');
  process.exit(0);
}
