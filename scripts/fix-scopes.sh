#!/bin/bash
# Fix OpenClaw Device Scopes After Update
# Rotate all device tokens to include full operator scopes

echo "🔧 Fixing Device Scopes"
echo "===================="
echo ""

# Check if jq is available
if ! command -v jq &> /dev/null; then
    echo "❌ jq not found. Install with: apt-get install jq (Ubuntu/Debian)"
    exit 1
fi

# List semua devices
echo "📱 Listing devices..."
DEVICES_JSON=$(openclaw devices list --json 2>/dev/null)

if [ $? -ne 0 ]; then
    echo "❌ Could not list devices. Are you logged in?"
    exit 1
fi

# Extract device IDs
DEVICES=$(echo "$DEVICES_JSON" | jq -r '.[].id')
DEVICE_COUNT=$(echo "$DEVICES_JSON" | jq -r 'length')

if [ "$DEVICE_COUNT" -eq 0 ]; then
    echo "⚠️  No devices found. Nothing to fix."
    exit 0
fi

echo "✅ Found $DEVICE_COUNT device(s)"
echo ""

# Full scopes set
FULL_SCOPES=(
    "operator.admin"
    "operator.approvals"
    "operator.pairing"
    "operator.write"
    "operator.read"
)

# Fix setiap device
FIXED_COUNT=0
FAILED_COUNT=0

echo "$DEVICES" | while read -r device_id; do
    echo ""
    echo "🔄 Processing device: ${device_id:0:8}..."

    # Check current scopes (dry run first)
    CURRENT_SCOPES=$(openclaw devices info --device "$device_id" --json 2>/dev/null | jq -r '.role.scopes // [] | join(", ")')

    echo "   Current scopes: $CURRENT_SCOPES"

    # Rotate with full scopes
    echo "   Rotating with full scopes..."

    CMD="openclaw devices rotate --device $device_id --role operator"
    for scope in "${FULL_SCOPES[@]}"; do
        CMD="$CMD --scope $scope"
    done

    if $CMD > /dev/null 2>&1; then
        echo "   ✅ Fixed successfully!"
        ((FIXED_COUNT++))
    else
        echo "   ❌ Failed to fix"
        ((FAILED_COUNT++))
    fi
done

echo ""
echo "===================="
echo "Summary:"
echo "✅ Fixed: $FIXED_COUNT device(s)"
echo "❌ Failed: $FAILED_COUNT device(s)"
echo ""

if [ $FIXED_COUNT -gt 0 ]; then
    echo "🎉 Scope fix complete!"
    echo ""
    echo "Next steps:"
    echo "1. Restart gateway: openclaw gateway restart"
    echo "2. Test agent tools that require gateway"
else
    echo "⚠️  No devices were fixed. This might be expected."
fi
