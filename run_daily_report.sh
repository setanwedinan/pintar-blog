#!/bin/bash
# Shell Script untuk generate dan publish daily FX Market Intelligence Report
# Author: FX Intelligence System
# Created: 2025

set -e  # Exit on error

# Direktori project
PROJECT_DIR="/home/nube/pintar-blog"
cd "$PROJECT_DIR"

echo "=========================================="
echo "Daily FX Market Intelligence Report Runner"
echo "=========================================="
echo "Start time: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# Tambahkan user bin ke PATH untuk pip-installed packages
export PATH="$HOME/.local/bin:$PATH"

# Jalankan Python intelligence system
echo "[1/4] Running FX Intelligence Pipeline..."
python3 fx_system/fx_intelligence_report.py

if [ $? -ne 0 ]; then
    echo "❌ Error: Python script execution failed"
    exit 1
fi

echo ""
echo "[2/4] Checking generated report..."

# Cek apakah report terbaru berhasil dibuat
LATEST_REPORT=$(ls -t src/content/posts/fx-intelligence-*.md 2>/dev/null | head -1)

if [ -z "$LATEST_REPORT" ]; then
    echo "❌ Error: No report file found"
    exit 1
fi

echo "✅ Latest report: $LATEST_REPORT"

echo ""
echo "[3/4] Committing to Git..."

# Git operations
git add .

# Get current date for commit message
DATE=$(date '+%Y-%m-%d')
COMMIT_MSG="Daily FX Market Intelligence Report [$DATE]"

git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo "⚠️  Warning: Git commit failed or nothing to commit"
else
    echo "✅ Changes committed"
fi

echo ""
echo "[4/4] Pushing to remote..."

# Push to origin main
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ Error: Git push failed"
    exit 1
fi

echo "✅ Successfully pushed to origin/main"

echo ""
echo "=========================================="
echo "✅ Daily Report Pipeline Complete!"
echo "=========================================="
echo "End time: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo "📄 Report location: $PROJECT_DIR/$LATEST_REPORT"
echo "🌐 Check live at: https://pintar-blog.vercel.app/"
