#!/usr/bin/env node

/**
 * IDX Morning Market Intelligence - Agent Runner
 *
 * This script is called by the cron job agent.
 * It loads the skill and executes it with available tools.
 */

const { generateReport } = require('./index.js');
const fs = require('fs');

// Detect if running in OpenClaw agent context
const isAgentContext = typeof process.env.OPENCLAW_SESSION_ID !== 'undefined';
const isCronRun = process.argv.includes('--cron');

console.log('IDX Morning Market Intelligence Runner');
console.log(`Context: ${isAgentContext ? 'Agent' : 'CLI'}`);

// In agent context, we need to return a message that will be sent
if (isAgentContext || isCronRun) {
  // Run the report
  generateReport({})
    .then(result => {
      console.log('\n=== IDX REPORT ===');
      console.log(result.report);
      console.log('=== END IDX REPORT ===\n');
      process.exit(0);
    })
    .catch(err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
} else {
  // CLI execution
  generateReport({})
    .then(result => {
      console.log(result.report);
      process.exit(0);
    })
    .catch(err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}
