#!/usr/bin/env node

const { tavily } = require("@tavily/core");

const tvly = tavily({ apiKey: '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' });

async function testBIJISDOR() {
  console.log('Testing BI JISDOR...\n');
  const query = "JISDOR Bank Indonesia nilai 2026 kurs rupiah dolar";
  const response = await tvly.search(query, {
    search_depth: "basic",
    max_results: 5,
    include_images: false,
    include_answer: true
  });
  console.log('JISDOR Response:', JSON.stringify(response, null, 2));
}

async function testBIRate() {
  console.log('\n\nTesting BI Rate...\n');
  const query = "BI rate Bank Indonesia suku bunga acuan 2026";
  const response = await tvly.search(query, {
    search_depth: "basic",
    max_results: 5,
    include_images: false,
    include_answer: true
  });
  console.log('BI Rate Response:', JSON.stringify(response, null, 2));
}

async function main() {
  await testBIJISDOR();
  await testBIRate();
}

main().catch(console.error);
