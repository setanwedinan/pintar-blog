# Pintar Social - Auto Post to Buffer via Make.com

Generate social media posts and send to Make.com webhook for Buffer integration.

## Usage

```bash
# Trigger from Telegram
# Type: "post [topic]" or just "post" for trending

# Run manually
node skills/pintar-social/index.js "topic idea"
```

## Setup

1. OpenClaw hooks must be enabled (already configured)
2. Set up Make.com webhook and update `webhookUrl` in config
3. Connect Make.com to Buffer

## Configuration

Edit `config.json` in this skill directory:

```json
{
  "webhookUrl": "https://hook.make.com/your-webhook-url"
}
```

## Workflow

```
Telegram trigger → Generate post → POST to Make.com → Buffer draft
```

## JSON Format Sent to Make.com

```json
{
  "text": "Post content here...",
  "hashtags": "#tech #coding #ai",
  "platform": "twitter",
  "scheduledAt": "2026-02-14T14:00:00Z"
}
```
