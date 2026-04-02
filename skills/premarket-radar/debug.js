#!/usr/bin/env node

const { tavily } = require("@tavily/core");

const tvly = tavily({ apiKey: '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' });

async function testSearch() {
  console.log('Testing Tavily search for historical data...\n');

  const query = "USD IDR historical data 30 days investing.com 2026";
  const response = await tvly.search(query, {
    search_depth: "basic",
    max_results: 5,
    include_images: false,
    include_answer: true
  });

  console.log('Response:', JSON.stringify(response, null, 2));
}

testSearch().catch(console.error);
