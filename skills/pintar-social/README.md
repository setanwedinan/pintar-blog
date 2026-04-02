# Pintar Social - Setup Guide

## 1. OpenClaw Webhook Info

**Webhook Token:** `369e9f9ac25ef64fbd8d5c4e237f1b6a39d2593cb8ad5b4ca84f02ce71dbf6c3`
**Webhook Path:** `/hooks`
**Full URL:** `http://localhost:18789/hooks`

## 2. Setup Make.com

### Step 1: Create Webhook in Make.com

1. Login to https://www.make.com
2. Create new scenario
3. Add trigger: "Webhooks" → "Custom webhook"
4. Click "Create a webhook"
5. Copy the webhook URL (starts with `https://hook.make.com/...`)

### Step 2: Connect to Buffer

1. Add new module after webhook: "Buffer"
2. Choose action: "Create a post" or "Create a draft post"
3. Connect your Buffer account
4. Map fields:
   - Text: `text` from webhook
   - Profile: select your social media profile
   - Media: optional

### Step 3: Update OpenClaw Skill

Edit `skills/pintar-social/config.json`:

```json
{
  "webhookUrl": "https://hook.make.com/YOUR-WEBHOOK-URL-HERE"
}
```

### Step 4: Test the Workflow

1. In Telegram, type: `/post test message`
2. This will trigger the skill
3. Skill generates post and POSTs to Make.com
4. Make.com sends to Buffer
5. Check Buffer for draft post

## 3. Usage

From Telegram:
- `/post` - Generate post from trending topics (coming soon)
- `/post [topic]` - Generate post about specific topic

## 4. Troubleshooting

If webhook fails:
- Check `webhookUrl` in config.json
- Verify Make.com webhook is active
- Check Buffer connection in Make.com
