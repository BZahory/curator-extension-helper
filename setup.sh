#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: ./setup.sh <glob-pattern>"
  echo "Example: ./setup.sh 'my-app*-my-team.vercel.app'"
  exit 1
fi

GLOB="$1"

cat > manifest.json << MANIFEST
{
  "manifest_version": 3,
  "name": "Vercel Deploy Password Helper",
  "version": "1.0.0",
  "description": "Auto-fills Vercel deployment protection passwords on matching domains.",
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "32": "icons/icon32.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "content_scripts": [
    {
      "matches": ["*://*.vercel.app/*"],
      "include_globs": ["*://${GLOB}/*"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
MANIFEST

echo "Created manifest.json with glob: ${GLOB}"
