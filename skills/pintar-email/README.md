# Pintar Email - Setup Guide

## 1. Setup Mailgun Account

### Step 1: Sign up
- Go to: https://www.mailgun.com/signup
- Create free account
- Verify email

### Step 2: Get API Credentials
1. Go to Mailgun dashboard
2. Click "API Keys" or "Settings" → "API Security"
3. Copy the **Private API Key**
4. Go to "Domains" → copy your **Domain** (sandbox or custom)

**Example sandbox domain:** `sandbox12345.mailgun.org`

### Step 3: Update Config
Edit `skills/pintar-email/config.json`:

```json
{
  "apiKey": "your-private-api-key-here",
  "domain": "sandbox12345.mailgun.org",
  "from": "Pintar <pintar@sandbox12345.mailgun.org>"
}
```

**Important:**
- Use the **Private API Key**, not Public
- Use the correct domain (sandbox or custom)
- The `from` address must match your domain

## 2. Test Email

Test from command line:
```bash
node skills/pintar-email/index.js "your-email@example.com" "Test from Pintar" "This is a test email from OpenClaw!"
```

Test from Telegram:
```
/email your-email@example.com "Test" "Test message"
```

## 3. Usage Examples

### Simple email
```bash
node skills/pintar-email/index.js test@example.com "Hello" "World"
```

### From Telegram (coming soon with command handler)
```
/email test@example.com "Subject" "Message body"
```

## 4. Integration with Other Skills

This email skill can be used by:
- `pintar-social` — send posts to Zapier/Buffer via email
- Reports — send daily reports via email
- Alerts — send notifications via email
- Any skill that needs email capability

## 5. Limitations

- Mailgun free tier: 5000 emails/month, 100 emails/day
- Sandbox domains have limitations (verified recipients only)
- Production: use custom domain for better deliverability

## 6. Troubleshooting

**Error: "Domain not found"**
- Check domain spelling in config
- Verify domain exists in Mailgun dashboard

**Error: "Invalid API key"**
- Use Private API Key, not Public
- Check API key has correct permissions

**Email not delivered**
- Sandbox domains: recipient must be verified
- Check spam folder
- Verify sender address matches domain

**Rate limit exceeded**
- Free tier: 100 emails/day
- Check usage in Mailgun dashboard
