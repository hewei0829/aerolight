#!/bin/bash
set -e

# ── Config ────────────────────────────────────────────────────────────────────
APP_NAME="${APP_NAME:-lightdemo}"
RESOURCE_GROUP="${RESOURCE_GROUP:-aerolight-rg}"
LOCATION="${LOCATION:-eastasia}"
PLAN_NAME="${PLAN_NAME:-aerolight-plan}"

echo "→ App:      $APP_NAME"
echo "→ Group:    $RESOURCE_GROUP"
echo "→ Location: $LOCATION"
echo ""

# ── 1. Create Azure resources (skip if already exist) ─────────────────────────
echo "[1/5] Creating Azure resources..."

az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --output none

az appservice plan create \
  --name "$PLAN_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --is-linux \
  --sku B1 \
  --output none 2>/dev/null || echo "  Plan already exists, skipping."

az webapp create \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --plan "$PLAN_NAME" \
  --runtime "NODE:22-lts" \
  --output none 2>/dev/null || true

# ── 2. Configure app settings ─────────────────────────────────────────────────
echo "[2/5] Configuring app settings..."

az webapp config appsettings set \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --settings \
    NODE_ENV=production \
    PORT=8080 \
    SCM_DO_BUILD_DURING_DEPLOYMENT=false \
  --output none

az webapp config set \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --startup-file "node /home/site/wwwroot/node_modules/next/dist/bin/next start" \
  --output none

# ── 3. Local build ────────────────────────────────────────────────────────────
echo "[3/5] Building locally..."
npm run build

# ── 4. Package ────────────────────────────────────────────────────────────────
echo "[4/5] Creating deployment package..."
echo "  Installing production dependencies locally..."
npm ci --omit=dev --prefer-offline 2>/dev/null || npm ci --omit=dev
rm -f release.zip
zip -r release.zip .next public content package.json package-lock.json next.config.mjs node_modules \
  --exclude "node_modules/.cache/*"

echo "  Package size: $(du -sh release.zip | cut -f1)"

# ── 5. Deploy ─────────────────────────────────────────────────────────────────
echo "[5/5] Deploying to Azure..."
az webapp deploy \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --src-path release.zip \
  --type zip

rm -f release.zip

echo ""
echo "✓ Done: https://$APP_NAME.azurewebsites.net"
