# Vercel Deploy Password Helper

Chrome extension that auto-fills and submits the password on Vercel deployment protection pages matching a configurable URL glob pattern.

## Setup

1. Clone this repo
2. Run the setup script with your Vercel deployment glob pattern:
   ```
   ./setup.sh 'my-app*-my-team.vercel.app'
   ```
3. Open `chrome://extensions` in Chrome
4. Enable **Developer mode** (toggle in top right)
5. Click **Load unpacked** and select this directory
6. Click the extension icon in the toolbar, enter your deployment password, and click **Save**

## How it works

When you navigate to a matching Vercel preview URL that shows the "Authentication Required" page, the extension automatically fills in your saved password and submits the form. If the password is wrong, it won't retry.
