---
name: notion-bookmarks
description: Save links to Notion with markdown.new summaries, AI-generated summaries, and automatic tags. Use when user wants to save a URL to Notion with automatic content fetching via markdown.new, AI summarization, and keyword-based tagging. Triggered by `/notion <url>` command or when user asks to save/bookmark a link to Notion.
---

# notion-bookmarks

Save any link to Notion with automatic content extraction, AI-generated summary, and automatic tagging from markdown.new.

## Quick Start

**From Telegram:**
```
/notion <url>
```

**From command line:**
```bash
node skills/notion-bookmarks/scripts/save-link.js <url>
```

Example:
```bash
node skills/notion-bookmarks/scripts/save-link.js https://example.com/article
```

## Setup

### 1. Create Notion Database

Create a database with these properties:
- **Name** (Title) - Required
- **URL** (URL) - Required
- **Date** (Date) - Optional, auto-filled
- **Summary** (Rich text) - Optional, populated in page content

### 2. Create Integration

1. Go to https://notion.so/my-integrations
2. Click "New integration"
3. Give it a name (e.g., "Pintar Bookmarks")
4. Copy the "Internal Integration Token" (starts with `secret_`)

### 3. Share Database with Integration

1. Open your database in Notion
2. Click "..." → "Add connections"
3. Select your integration

### 4. Configure API Key

```bash
# Edit config.json
nano skills/notion-bookmarks/config.json

# Add your keys:
{
  "apiKey": "secret_...",
  "databaseId": "..."
}
```

**How to find Database ID:**
- Open database in Notion
- Look at URL: `https://notion.so/workspace/[DATABASE_ID]?v=...`
- Copy the 32-character ID

## Usage Patterns

### Direct Command
User sends: `/notion https://example.com/article`
→ Fetches content, generates summary, saves to Notion

### Natural Language
User says: "Save this link to Notion: https://example.com/article"
→ Same behavior as `/notion` command

## What Gets Saved

- **URL**: Original link
- **Title**: Extracted from HTML `<title>` tag
- **Summary**: Generated from meta description + first paragraph of content
- **Date**: Auto-populated with save date

## Output Format

Notion page structure:
```
Name: <Article Title>
URL: <Original Link>
Date: <Save Date>

<Summary paragraph in page content>
```

## Error Handling

- Invalid URL → Clear error message
- Failed fetch → Report with URL
- Notion API error → Show status code and details

## Notes

- Uses basic HTML parsing (no headless browser)
- Summary is generated from meta description or first paragraph
- Requires Node.js for HTTP requests to Notion API
