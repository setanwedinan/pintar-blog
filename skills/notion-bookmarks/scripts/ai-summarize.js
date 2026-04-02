#!/usr/bin/env node

/**
 * AI Summary and Tags Generation using OpenClaw Agent
 */

function generateSummaryAndTags(markdown) {
  // Simple AI-free summarization for now
  // Extract first meaningful paragraph and generate tags from keywords

  // Remove markdown syntax
  const cleanText = markdown
    .replace(/#+\s/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`{1,3}/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  // Get first sentence as summary (approx 100-200 chars)
  const sentences = cleanText.match(/[^.!?]+[.!?]/g) || [];
  let summary = sentences.slice(0, 2).join(' ');
  if (summary.length > 300) {
    summary = summary.substring(0, 297) + '...';
  }

  // Generate tags from keywords (words that appear frequently)
  const words = cleanText
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3);

  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Get top 5 most common words (excluding common words)
  const commonWords = ['this', 'that', 'with', 'from', 'have', 'been', 'were', 'they', 'their', 'what', 'when', 'your', 'will', 'more', 'some', 'which'];

  const tags = Object.entries(wordCount)
    .filter(([word]) => !commonWords.includes(word))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);

  return { summary, tags };
}

module.exports = { generateSummaryAndTags };
