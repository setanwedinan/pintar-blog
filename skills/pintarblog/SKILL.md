# Pintar Blog - AI Blog Post Generator

A sub-agent for creating SEO-optimized blog posts and publishing to Git/Vercel.

## What This Does

- **Generates blog posts** from topic ideas
- **Optimizes for SEO** - Meta descriptions, keywords, structure
- **Format** - Proper Markdown/MDX with frontmatter
- **Publish** - Commit and push to Git → auto-deploy to Vercel

## How to Use

From main session:
```
run pintarblog create "topic idea"
```

Or spawn directly:
```
pintarblog create "topic idea"
```

## Blog Post Structure

All posts go to: `/root/.openclaw/workspace/pintar-blog/src/content/blog/`

Frontmatter format:
```yaml
---
title: "Post Title"
description: "SEO meta description"
pubDate: YYYY-MM-DD
heroImage: "/blog-placeholder-1.jpg"
tags: ["tag1", "tag2"]
---
```

## The Workflow

1. **Receive topic** from user
2. **Generate outline** - Title, sections, key points
3. **Write content** - Full article with proper structure
4. **Add SEO** - Meta description, keywords, internal links
5. **Create file** - Save as `.md` or `.mdx` in blog folder
6. **Commit & push** - Git commit → GitHub → Vercel deploy
7. **Confirm** - Report URL of published post

## Content Guidelines

- **Tone**: Professional, engaging, clear
- **Structure**: H1 (title), H2 (sections), H3 (subsections)
- **Length**: 800-2000 words (flexible)
- **SEO**: Include keywords naturally, meta description 120-160 chars
- **Formatting**: Use bullet points, code blocks, images where helpful
- **Accessibility**: Describe images in alt text

## File Tracking

Track all posts in: `/root/.openclaw/workspace/skills/pintarblog/blog-history.md`

## Deployment

- Git push triggers Vercel auto-deploy
- Deploy takes ~30-60 seconds
- Post URL: `https://pintar-blog.vercel.app/blog/[slug]`
