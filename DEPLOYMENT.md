# GitHub Pages Deployment Guide

## Overview

Your React portfolio is now configured for deployment on GitHub Pages. The setup includes:

- ✅ GitHub Actions workflow for automatic deployment
- ✅ Proper base path configuration for the repository name
- ✅ HashRouter for client-side routing compatibility
- ✅ 404.html and routing scripts for SPA support
- ✅ Manual deployment scripts

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/wes9319/wes9319.github.io`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Push Your Code

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)

### 4. Access Your Site

Once deployment is complete, your site will be available at:
**https://wes9319.github.io/wes9319.github.io**

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Common Issues

1. **404 Errors on Routes**: Make sure you're using HashRouter (already configured)
2. **Assets Not Loading**: Check that the base path in `vite.config.ts` matches your repository name
3. **Build Failures**: Check the Actions tab for error details

### Checking Deployment Status

- **Actions Tab**: Shows build and deployment progress
- **Settings → Pages**: Shows the current deployment status
- **Network Tab**: Check if assets are loading correctly

## Configuration Files

### Key Changes Made

1. **`vite.config.ts`**: Added `base: '/wes9319.github.io/'`
2. **`package.json`**: Added deployment scripts and homepage
3. **`src/app/providers/AppProviders.tsx`**: Changed to HashRouter
4. **`.github/workflows/deploy.yml`**: GitHub Actions workflow
5. **`public/404.html`**: SPA routing support
6. **`index.html`**: Added routing script

### Customization

- **Repository Name**: If you change the repository name, update:
  - `vite.config.ts` base path
  - `package.json` homepage
  - `README.md` links

## Next Steps

1. Push your code to trigger the first deployment
2. Test all routes and functionality on the live site
3. Update any hardcoded URLs to use relative paths
4. Consider adding a custom domain if desired

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all configuration files are correct
3. Test locally with `npm run build && npm run preview`
