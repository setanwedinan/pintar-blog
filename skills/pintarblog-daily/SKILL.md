# Pintar Blog Daily - Automated Daily Blog Posts

A skill for generating TWO separate daily blog posts about coding activities and tech news.

## What This Does

Generates TWO separate daily blog posts:

**Post 1 - Coding Activity OR Hacker News**:
- If coding activity exists: What Pintar Code did today
- If no coding activity: 1 best story from Hacker News (via Algolia HN Search API)

**Post 2 - TechMeme News**:
- 1 interesting tech news from TechMeme
- Fetches from https://techmeme.com/?full=t
- Adds additional info from web search

## Hacker News Integration (NEW!)

Now uses **Algolia HN Search API** for faster, more reliable Hacker News access:

- ✅ Free public API (no API key required)
- ✅ Filter by date range (last 24 hours)
- ✅ Quality filter (points > 10)
- ✅ Sort by popularity (points)
- ✅ Get metadata (title, url, points, comments, author)
- ✅ Direct links to original articles and HN discussions

API Endpoint: `https://hn.algolia.com/api/v1/search_by_date`

## Duplicate Detection (NEW!)

To prevent posting the same TechMeme story multiple times per day:

- Checks existing posts from today before generating
- Passes existing topics to AI agent in the prompt
- AI agent instructed to choose different topics
- Final duplicate check after generation
- Skips posts with duplicate titles

This is important because TechMeme is a news aggregator - sometimes the top story doesn't change between runs (12:00, 15:00, 21:00 WIB).

**Behavior**:
- 12:00 WIB - Top story (if new)
- 15:00 WIB - Different story (or skip if duplicate)
- 21:00 WIB - Latest story of the day

## How to Use

**Manual execution**:
```bash
node skills/pintarblog-daily/index.js
```

**Suggested time**: After 18:00 WIB (evening)

## The Workflow

For each post (run TWICE with different context):

**Post 1 - Coding Activity or Hacker News**:
1. Check for coding activity (git commits, memory files, pintarcoding)
2. If activity: Generate post about coding work
3. If no activity: Fetch 1 best story from Hacker News via **Algolia API**
   - Stories from last 24 hours
   - Filtered by points (>10 for quality)
   - Sorted by popularity
   - Full metadata included
4. Generate and publish post

**Post 2 - TechMeme News**:
1. Fetch from https://techmeme.com/?full=t
2. Check existing posts from today to avoid duplicates
3. Pass existing topics to AI agent to prevent repetition
4. Pick 1 interesting story (different from existing topics)
5. Search web for additional context/details
6. Generate and publish post
7. Duplicate detection: Skip if same title already posted today

## Post Structure

Each post has its own frontmatter:
```yaml
---
title: "[Type] Update - [Date]"
description: "Daily update: [type] from YYYY-MM-DD"
pubDate: YYYY-MM-DD
heroImage: "../../assets/blog-placeholder-X.jpg"
tags: ["Daily Update", "Type"]
---
```

**Technical language**: Acceptable and encouraged
**Sources**: Links to original sources included

## Generating Two Posts

To generate both posts, run the script TWICE:

```bash
# Post 1 - Coding or Hacker News
node skills/pintarblog-daily/index.js

# Post 2 - TechMeme
node skills/pintarblog-daily/index.js techmeme
```

## Scheduling

Manual - no cron required. Suggested time: After 18:00 WIB.
