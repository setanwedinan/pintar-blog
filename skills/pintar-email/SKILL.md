# Pintar Email - Send Emails via Mailgun

Send emails from OpenClaw using Mailgun API. Useful for:
- Sending reports
- Notifications
- Webhook forwarding
- Automation triggers

## Usage

```bash
# Send simple email
node skills/pintar-email/index.js "recipient@example.com" "Subject" "Message body"

# Send from Telegram
/email recipient@example.com "Subject" "Message body"
```

## Configuration

Create `skills/pintar-email/config.json`:

```json
{
  "apiKey": "your-mailgun-api-key",
  "domain": "sandboxxxxx.mailgun.org",
  "from": "pintar@yourdomain.com"
}
```

## Setup

1. Signup for Mailgun: https://www.mailgun.com/signup
2. Get API key from dashboard
3. Get domain (sandbox or custom domain)
4. Update config.json with credentials

## Features

- Simple email sending
- HTML support
- CC/BCC support
- Attachment support (coming soon)
