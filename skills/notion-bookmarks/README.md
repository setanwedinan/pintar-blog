# Notion Bookmarks

Save links to Notion with AI-generated summaries.

## Features

- 📌 One-command link saving via `/notion <url>`
- 🤖 Automatic content fetching from `markdown.new`
- 📝 **AI-generated summary** from content
- 🏷️ **Automatic tags** from keywords
- 📝 Clean Notion integration with title, summary, tags, and URL
- 💬 Natural language support: "Save this to Notion: https://..."

## Setup

### 1. Create Notion Database

In Notion, create a new database with these properties:

| Property | Type | Notes |
|----------|------|-------|
| Name | Title | Primary field |
| URL | URL | Store the link |
| Date | Date | Auto-filled |
| Summary | Rich text | Optional, populated in page content |

### 2. Create Integration

1. Visit https://notion.so/my-integrations
2. Click "New integration"
3. Name it (e.g., "Pintar Bookmarks")
4. Select your workspace
5. Copy the "Internal Integration Token" (starts with `secret_`)

### 3. Connect Database

1. Open your database in Notion
2. Click `•••` (more options) → "Add connections"
3. Select your new integration

### 4. Configure

Edit `config.json`:

```json
{
  "apiKey": "secret_your_integration_token_here",
  "databaseId": "your_32_char_database_id_here"
}
```

**To find Database ID:**
- Open database in Notion
- Check URL: `https://notion.so/workspace/[DATABASE_ID]?v=...`
- Copy the 32-character ID between the last `/` and `?`

## Usage

### From Telegram (Recommended)

Send a message like:

```
/notion https://example.com/article
```

Or natural language:

```
Save this to Notion: https://example.com/article
```

### From Command Line

```bash
node skills/notion-bookmarks/scripts/save-link.js https://example.com/article
```

## What Gets Saved

- **URL**: The original link
- **Title**: Extracted from HTML `<title>` tag
- **Summary**: Generated from meta description or first paragraph
- **Date**: Auto-populated with save date

## Example Output

Notion page structure:

```
Name: "How AI is Transforming Healthcare"
URL: https://example.com/ai-healthcare
Date: 2026-02-19

[Summary paragraph extracted from the article]
```

## Troubleshooting

### "Database not found"
- Check your database ID in `config.json`
- Verify the integration is connected to the database

### "Unauthorized"
- Verify your API key starts with `secret_`
- Make sure the integration is connected to the database

### "No content found"
- URL might be behind a paywall
- Page might require JavaScript rendering
- Some sites block scraping

## Notes

- Uses basic HTTP fetching (no headless browser)
- Summaries are extracted from meta description or first 3000 characters
- Rate limited to ~3 requests/second by Notion API
- Works best with publicly accessible articles and blog posts

## Advanced

For more sophisticated summarization, integrate with:
- OpenAI API for GPT-4 summaries
- Firecrawl for JS-rendered content
- Browser automation for complex sites
