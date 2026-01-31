# Setup & Deployment Checklist

## Pre-Launch Checklist

### Content
- [ ] Update contact email in `pages/index.vue`
- [ ] Add GitHub, Twitter, LinkedIn URLs in contact section
- [ ] Update hero text and "About" section with your bio
- [ ] Add at least 3 blog posts in `/content/blog/`
- [ ] Verify all markdown frontmatter is correct

### Branding
- [ ] Update site title in `nuxt.config.ts`
- [ ] Update meta description
- [ ] Create `/public/favicon.svg`
- [ ] Create `/public/og-image.jpg` (1200x630px)
- [ ] Update social links in all places they appear

### Configuration
- [ ] Set `NUXT_PUBLIC_SITE_URL` environment variable
- [ ] Review color scheme (customize neon colors if desired)
- [ ] Check font loading (verify Google Fonts URLs)
- [ ] Test on mobile devices (Chrome DevTools mobile view)

### Performance
- [ ] Run `npm run build`
- [ ] Check bundle size: `npm run build -- --stats`
- [ ] Run Lighthouse: `npm run preview` → DevTools
- [ ] Target: 100/100 on all metrics
- [ ] If failing: Identify and fix issues

### SEO
- [ ] Verify meta tags in `nuxt.config.ts`
- [ ] Check Open Graph tags (og:title, og:description, og:image)
- [ ] Test with: https://ogp.me/
- [ ] Create sitemap (automatic with `@nuxt/content`)
- [ ] Submit to Google Search Console

## Local Development

### 1. Install Node.js
```bash
# Check version (need 18+)
node --version  # v18.0.0 or higher
npm --version
```

### 2. Clone and Setup
```bash
cd portfolio
npm install

# Verify installation
npm run dev
# Open http://localhost:3000
```

### 3. Test All Pages
- [ ] Home page loads
- [ ] Terminal animation plays
- [ ] Skills grid displays correctly
- [ ] Click "View My Work" button
- [ ] Click "Get in Touch" button
- [ ] Navigate to /blog
- [ ] Click on blog article
- [ ] Back button works

### 4. Responsive Testing
Use Chrome DevTools device emulation:
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)

Check:
- [ ] Navigation is accessible
- [ ] Terminal window is readable
- [ ] Skills grid is properly columned
- [ ] Contact form is usable
- [ ] No horizontal scrolling

### 5. Performance Testing
```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse
```

Metrics to check:
- [ ] Largest Contentful Paint: < 2.5s
- [ ] First Input Delay: < 100ms
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Overall score: 100/100

## Vercel Deployment

### 1. Prepare Repository
```bash
# Initialize git (if not already)
git init

# Create .gitignore (included in project)

# Add all files
git add .
git commit -m "Initial commit: Portfolio site"

# Create repository on GitHub
# Push to GitHub
git remote add origin https://github.com/yourusername/aivaras-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-detects Nuxt 3 configuration
5. Click "Deploy"

### 3. Post-Deployment
- [ ] Visit deployed URL
- [ ] Test all pages
- [ ] Run Lighthouse (target 100/100)
- [ ] Check Core Web Vitals
- [ ] Test on mobile device

### 4. Set Custom Domain
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration steps
4. Wait for SSL certificate (usually < 5 min)

### 5. Environment Variables (if needed)
```
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
```

1. Settings → Environment Variables
2. Add variables
3. Redeploy project

## Static Site Generation (Alternative)

If deploying to a static host (Netlify, AWS S3, Cloudflare Pages):

```bash
# Generate static files
npm run generate

# Output in: dist/
# Upload to your static host
```

**Note**: Forms won't work without a backend service. Use a service like:
- Formspree
- Netlify Forms
- Basin
- getform.io

## Post-Deployment Monitoring

### 1. Google Search Console
```
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify domain ownership
4. Submit sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Google Analytics (Optional)
```
1. Create Google Analytics account
2. Add Google Analytics 4 property
3. Copy measurement ID
4. Add to nuxt.config.ts or use @nuxtjs/google-analytics
```

### 3. Monitor Performance
- Check Lighthouse monthly
- Monitor Core Web Vitals in Search Console
- Check Vercel Analytics dashboard

## Continuous Deployment

Every push to `main` branch:
1. Vercel detects changes
2. Runs `npm run build`
3. Deploys to preview URL
4. Runs Lighthouse checks
5. Deploys to production on approval

## Content Updates

### Adding Blog Posts
```bash
# 1. Create file in content/blog/
# content/blog/my-new-article.md

---
title: 'My Article Title'
description: 'Brief description'
date: '2026-02-15'
readingTime: 8
---

## Heading

Content here...

# 2. Commit and push
git add content/blog/my-new-article.md
git commit -m "Add article: My New Article"
git push

# 3. Vercel auto-deploys
```

### Updating Home Page
```bash
# Edit pages/index.vue
# Push changes
git add pages/index.vue
git commit -m "Update home page content"
git push

# Vercel auto-deploys
```

## Troubleshooting Deployment

### Build fails with "Cannot find module"
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Lighthouse score is low
1. Check performance in DevTools Network tab
2. Reduce image sizes or use WebP
3. Remove unused JavaScript
4. Optimize font loading

### Domain not connecting
1. Check DNS configuration in domain registrar
2. Verify nameservers point to Vercel
3. Wait 24-48 hours for DNS propagation

### Site looks broken after deploy
1. Check build logs in Vercel
2. Verify environment variables are set
3. Check for TypeScript errors: `npm run type-check`

## Rollback

If deployed version has issues:

```bash
# In Vercel dashboard:
1. Go to Deployments
2. Click on previous successful deployment
3. Click "Promote to Production"
```

Or revert via Git:
```bash
git revert HEAD
git push
# Vercel will deploy the reverted commit
```

## Final Verification

After deployment, test:

- [ ] Site loads in < 2 seconds
- [ ] All pages accessible
- [ ] Terminal animation works
- [ ] Blog articles load correctly
- [ ] Contact form works (or has error message)
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Lighthouse 100/100
- [ ] Google Search Console shows site
- [ ] Meta tags visible in view-source

---

**Ready to ship. You've got this.** ⚙️
