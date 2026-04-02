#!/bin/bash
# Pre-Update Check for OpenClaw
# Backup devices and check for breaking changes

echo "🔍 Pre-Update Check"
echo "===================="
echo ""

# Cek versi sekarang
CURRENT_VERSION=$(openclaw --version 2>/dev/null || echo "unknown")
echo "📌 Current version: $CURRENT_VERSION"

# Backup devices sebelum update
BACKUP_FILE="/tmp/devices-backup-$(date +%s).json"
echo ""
echo "💾 Backing up devices..."
openclaw devices list --json > "$BACKUP_FILE" 2>/dev/null

if [ $? -eq 0 ]; then
    DEVICE_COUNT=$(cat "$BACKUP_FILE" | jq -r 'length' 2>/dev/null || echo "unknown")
    echo "✅ Devices backed up: $DEVICE_COUNT devices"
    echo "   Backup file: $BACKUP_FILE"
else
    echo "⚠️  Could not backup devices (jq not found or no devices)"
    echo "   Backup file: $BACKUP_FILE"
fi

# Cek changelog
echo ""
echo "📋 Check changelog:"
echo "   https://github.com/openclaw/openclaw/releases"
echo ""
echo "⚠️  IMPORTANT:"
echo "   Read changelog for breaking changes before updating!"
echo ""

# Summary
echo "===================="
echo "✅ Pre-update check complete!"
echo ""
echo "Next steps:"
echo "1. Update openclaw: npm install -g openclaw@2026.2.21"
echo "2. Fix scopes (if needed): ./fix-scopes.sh"
echo ""
