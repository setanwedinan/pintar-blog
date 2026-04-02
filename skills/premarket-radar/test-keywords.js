#!/usr/bin/env node

/**
 * Test Keyword-Based Sentiment Classification (Fallback)
 */

function classifyTextWithKeywords(text) {
  const content = text.toLowerCase();
  let label = 'NEUTRAL';
  let score = 0.5;

  // Positive keywords (for IDR = bullish, for USD = bearish)
  const positiveKeywords = ['menguat', 'bullish', 'positif', 'improve', 'gain',
                           'strengthen', 'naik', 'kencang', 'rally', 'menguatnya',
                           'positifnya', 'rebound', 'pemulihan'];
  // Negative keywords (for IDR = bearish, for USD = bullish)
  const negativeKeywords = ['melemah', 'bearish', 'negatif', 'decline', 'weakness',
                           'pressure', 'turun', 'anjlok', 'tekanan', 'depresiasi',
                           'melemahnya', 'negatifnya', 'jatuh', 'drop'];

  let positiveCount = 0;
  let negativeCount = 0;

  positiveKeywords.forEach(kw => {
    if (content.includes(kw)) positiveCount++;
  });
  negativeKeywords.forEach(kw => {
    if (content.includes(kw)) negativeCount++;
  });

  if (positiveCount > negativeCount) {
    label = 'POSITIVE';
    score = 0.6 + (Math.min(positiveCount, 3) * 0.1); // 0.6-0.9
  } else if (negativeCount > positiveCount) {
    label = 'NEGATIVE';
    score = 0.6 + (Math.min(negativeCount, 3) * 0.1); // 0.6-0.9
  } else {
    label = 'NEUTRAL';
    score = 0.5;
  }

  return { label, score };
}

async function testKeywordClassifier() {
  console.log('Testing Keyword-Based Sentiment Classification (Fallback)...\n');

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
    },
    {
      text: "Rupiah menguat kencang ditopang data positif ekspor",
      expected: "POSITIVE",
      context: "Multiple positive keywords"
    },
    {
      text: "Rupiah terjebak tekanan karena data melemah dan negatif",
      expected: "NEGATIVE",
      context: "Multiple negative keywords"
    }
  ];

  console.log('Running test cases:\n');
  console.log('='.repeat(80));

  let passCount = 0;
  let failCount = 0;

  for (const test of testCases) {
    console.log(`\nText: "${test.text}"`);
    console.log(`Context: ${test.context}`);
    console.log(`Expected: ${test.expected}`);

    const result = classifyTextWithKeywords(test.text);

    console.log(`Result: ${result.label} (confidence: ${(result.score * 100).toFixed(1)}%)`);

    const isCorrect = result.label === test.expected;
    if (isCorrect) {
      passCount++;
      console.log(`Status: ✅ PASS`);
    } else {
      failCount++;
      console.log(`Status: ❌ FAIL`);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(`\n✅ Keyword classifier test completed!`);
  console.log(`Pass: ${passCount}/${testCases.length} (${Math.round(passCount/testCases.length*100)}%)`);
  console.log(`Fail: ${failCount}/${testCases.length} (${Math.round(failCount/testCases.length*100)}%)`);

  if (failCount === 0) {
    console.log('\n🎉 Perfect score! All tests passed.');
  } else if (passCount >= testCases.length * 0.7) {
    console.log('\n👍 Good accuracy (>70% pass rate)');
  } else {
    console.log('\n⚠️ Consider improving keyword lists for better accuracy');
  }
}

// Run test
testKeywordClassifier().catch(console.error);
