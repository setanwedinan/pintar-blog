#!/usr/bin/env node

/**
 * Test Sentiment Classification with Indonesian RoBERTa (HuggingFace Inference API)
 */

const https = require('https');

async function classifyText(text) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({ inputs: text.substring(0, 512) });

    const req = https.request(
      'https://api-inference.huggingface.co/models/w11wo/indonesian-roberta-base-sentiment-classifier',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        },
        timeout: 10000
      },
      (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const results = JSON.parse(data);
            if (Array.isArray(results) && results.length > 0) {
              resolve({
                label: results[0].label,
                score: results[0].score
              });
            } else {
              resolve(null);
            }
          } catch (e) {
            resolve(null);
          }
        });
      }
    );

    req.on('error', () => resolve(null));
    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });

    req.write(postData);
    req.end();
  });
}

async function testSentimentClassifier() {
  console.log('Testing Indonesian RoBERTa Sentiment Classifier (HuggingFace API)...\n');

  // Test cases with expected outputs
  const testCases = [
    {
      text: "Rupiah menguat karena BI mempertahankan suku bunga",
      expected: "POSITIVE",
      context: "Bullish IDR (IDR strengthens)"
    },
    {
      text: "USD melemah terhadap rupiah setelah data ekonomi AS mengecewakan",
      expected: "POSITIVE",
      context: "Bullish IDR (USD weakens)"
    },
    {
      text: "Dolar menguat tajam karena kebijakan bank sentral AS",
      expected: "POSITIVE",
      context: "Bearish IDR (USD strengthens)"
    },
    {
      text: "Rupiah terdepresiasi akibat defisit perdagangan",
      expected: "NEGATIVE",
      context: "Bearish IDR (IDR weakens)"
    },
    {
      text: "BI mempertahankan suku bunga acuan pada level 6%",
      expected: "NEUTRAL",
      context: "Neutral (no change)"
    }
  ];

  console.log('Running test cases:\n');
  console.log('='.repeat(80));

  for (const test of testCases) {
    console.log(`\nText: "${test.text}"`);
    console.log(`Context: ${test.context}`);
    console.log(`Expected: ${test.expected}`);

    const result = await classifyText(test.text);

    if (result) {
      console.log(`Result: ${result.label} (confidence: ${(result.score * 100).toFixed(1)}%)`);

      const isCorrect = result.label === test.expected;
      console.log(`Status: ${isCorrect ? '✅ PASS' : '❌ FAIL'}`);
    } else {
      console.log('Result: API Error/Timeout');
      console.log('Status: ⚠️ SKIPPED (API not responding)');
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Sentiment classifier test completed!');
  console.log('\nNote: If tests skipped, HuggingFace API might be rate-limited.');
  console.log('The system will automatically fall back to keyword-based classification.');
}

// Run test
testSentimentClassifier().catch(console.error);
