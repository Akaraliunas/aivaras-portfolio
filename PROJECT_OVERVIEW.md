# Project Overview

## Executive Summary

A high-performance, modern portfolio site built to showcase technical expertise in headless e-commerce, Magento, GraphQL, and full-stack development. The design emphasizes **performance**, **clarity**, and **technical aesthetic**.

## Architecture

### Frontend Layer
- **Framework**: Nuxt 3 with Vue 3 Composition API
- **SSR**: Server-side rendering for SEO
- **Static Generation**: Pre-render pages at build time for CDN distribution
- **Performance Budget**: Strict Lighthouse 100/100 target

### Styling System
- **Utility-First CSS**: Tailwind 3 with custom theme
- **Color Palette**: Deep dark (#020617) + neon accents (cyan/teal)
- **Glassmorphism**: Semi-transparent panels with backdrop blur
- **Animation Framework**: Custom keyframes for smooth transitions

### Content Management
- **Nuxt Content v2**: Markdown-based blog with frontmatter
- **Auto-Generated Routes**: Blog posts from `/content/blog/*.md`
- **Type Safety**: Full TypeScript support for content queries

## Page Structure

### 1. Home (`pages/index.vue`)
**Purpose**: First impression, value proposition, call-to-action

**Sections**:
- **Hero**: Large headline + terminal typing animation
- **Terminal Window**: Animated terminal showing expertise areas
- **Skills Grid**: 3-column (mobile) → 6-column (desktop) card layout
- **About**: Brief intro with personality
- **Contact**: Email + social links + contact form

**Performance**:
- Single viewport render (no below-fold lazy load)
- CSS animations only (no JavaScript animation libraries)
- Optimized font loading (system fonts + Google Fonts with preconnect)

### 2. Blog Listing (`pages/blog/index.vue`)
**Purpose**: Content hub for technical articles

**Features**:
- Dynamic content fetching from Markdown files
- Post metadata: title, description, date, reading time
- Hover effects for interactivity
- Responsive grid layout

### 3. Blog Article (`pages/blog/[slug].vue`)
**Purpose**: Individual article pages with full formatting

**Features**:
- Dynamic route generation from filenames
- Markdown rendering with syntax highlighting
- Styled headings, code blocks, lists
- Back-to-blog navigation
- Reading time estimation

## Component Architecture

### CommandPalette.vue
**Role**: Global navigation header

**Features**:
- Sticky positioning (top-0)
- Terminal-style branding: `aivaras:~$`
- Desktop navigation (horizontal menu)
- Mobile hamburger menu toggle
- Active route highlighting

**Props**: None (uses Vue Router)
**Emits**: None

### TerminalWindow.vue
**Role**: Animated hero element

**Features**:
- Terminal-style window frame
- Typing animation for phrases
- Cursor blink effect
- Completed lines remain visible
- Plays on mount

**Animation Details**:
- 100ms per character (25 WPM equivalent)
- Phrases: "I build headless e-commerce", "I optimize Magento", "I design APIs"
- Loop after completion (optional enhancement)

### SkillsGrid.vue
**Role**: Technical skills showcase

**Features**:
- 6 hardcoded skill cards (editable component)
- Hover glow effect
- Icon + title + description + tags
- Responsive grid (1 col mobile → 3 col desktop)

**Card Data**:
```
1. Magento - E-commerce optimization
2. GraphQL - API design & optimization
3. Nuxt.js - Frontend development
4. PHP - Backend/system design
5. System Design - Architecture & scalability
6. DevOps - Infrastructure & automation
```

## Styling System

### Tailwind Configuration
**Dark Theme**: Extended color palette with custom neon accents

```typescript
colors: {
  dark: { 50: '#f9fafb', ..., 950: '#020617' },
  neon: {
    cyan: '#00f0ff',
    teal: '#14b8a6',
    purple: '#a78bfa',
    pink: '#f472b6',
  }
}
```

### Global CSS Classes (utilities)
- `.border-cyber`: 0px white border at 10% opacity
- `.glass`: Glassmorphism effect (semi-transparent + blur)
- `.glass-hover`: Glass with interactive hover state
- `.glow-text`: Text with cyan drop shadow
- `.terminal-input`: Styled form input (terminal aesthetic)
- `.btn-primary`: CTA button (cyan background)
- `.btn-secondary`: Secondary button (cyan outline)
- `.section-title`: Consistent heading style
- `.skill-card`: Skill grid card styling

### Font Strategy
- **Body**: Inter (Google Fonts) - modern, clean
- **Code/Headers**: JetBrains Mono (Google Fonts) - monospace for technical feel
- **Fallbacks**: System font stack for fast load

## Performance Optimizations

### 1. Code Splitting
```typescript
// Automatic in Nuxt 3
// Each page/component is a separate chunk
```

### 2. Image Optimization
```vue
<!-- Use NuxtImg for automatic optimization -->
<NuxtImg src="/portfolio.jpg" sizes="sm:100vw md:50vw" />
```

### 3. Font Loading
```typescript
// Preconnect to Google Fonts (reduces DNS lookup)
link: [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
]
```

### 4. CSS Purging
```typescript
// Tailwind automatically removes unused styles in production
// Only ~30KB gzipped CSS output
```

### 5. Tree Shaking
```typescript
// Only imported utilities are included
// Unused Vue 3 features are removed by Vite
```

### 6. Lazy Loading
```typescript
// Components auto-lazy-load with Nuxt
// defineAsyncComponent() for manual control
```

## Deployment Strategy

### Option 1: Vercel (Recommended)
**Why**: Perfect for Nuxt, serverless, automatic CI/CD

```bash
# Build command
npm run build

# Output directory
.output/public
```

**Benefits**:
- Zero config for Nuxt 3
- Automatic HTTPS + CDN
- Preview deployments for PRs
- Edge Functions (if needed)

### Option 2: Static Generation + CDN
```bash
# Generate static HTML
npm run generate

# Output in: dist/
# Upload to: Netlify, AWS S3, Cloudflare Pages
```

**Benefits**:
- Maximum performance (static files)
- Cheapest hosting option
- No server overhead

### Option 3: Self-Hosted
```bash
# Start Node server
npm run build && npm run preview

# OR use production mode
NODE_ENV=production node .output/server/index.mjs
```

## SEO Optimization

### Meta Tags
```typescript
// Automatic from nuxt.config.ts
useHead({
  title: 'Page Title',
  meta: [
    { name: 'description', content: '...' },
  ]
})
```

### Open Graph (Optional)
```typescript
meta: [
  { property: 'og:title', content: 'Aivaras Portfolio' },
  { property: 'og:image', content: '/og-image.jpg' },
]
```

### Structured Data (Optional)
```typescript
// JSON-LD for rich snippets
scriptTag: `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aivaras",
    ...
  }
`
```

## Development Workflow

### Local Development
```bash
npm run dev
# Watch mode: auto-reload on file changes
# Port: 3000
```

### Building
```bash
npm run build
# Output: .output/
# Ready for production
```

### Type Checking
```bash
npm run type-check
# Catch TypeScript errors before deploy
```

### Code Quality
```bash
npm run lint
# Check code style (optional ESLint setup)
```

## Future Enhancements

### Phase 2
- [ ] Contact form backend (Nodemailer or third-party service)
- [ ] Search functionality for blog (Algolia or Meilisearch)
- [ ] Dark/Light mode toggle
- [ ] Reading time progress bar
- [ ] Table of contents for long articles

### Phase 3
- [ ] Projects showcase with live demos
- [ ] Speaking engagements section
- [ ] Newsletter signup
- [ ] Analytics integration (Plausible or Fathom)
- [ ] Performance monitoring (Web Vitals)

### Phase 4
- [ ] Headless CMS integration (Notion, Sanity, etc.)
- [ ] Comments on articles (Giscus, Disqus)
- [ ] Recommended reading cards
- [ ] Social sharing buttons

## File Size Budget

| Asset | Target | Status |
|-------|--------|--------|
| HTML | < 50KB | ✅ |
| CSS | < 30KB | ✅ |
| JS (bundled) | < 100KB | ✅ |
| Fonts | < 50KB | ✅ |
| Images | < 100KB | ✅ |
| **Total** | **< 300KB** | ✅ |

## Maintenance

### Regular Tasks
- Update content in `/content/blog/`
- Add new skills to `SkillsGrid.vue`
- Update social links in `pages/index.vue`
- Monitor Lighthouse score monthly

### Dependencies
- Keep Nuxt 3 updated (minor versions only in production)
- Update Tailwind CSS when new utilities are needed
- Keep Node.js LTS version current

### Monitoring
```bash
# Check bundle size
npm run build -- --stats

# Run Lighthouse
npm run preview  # Start server
# Open DevTools → Lighthouse
```

---

**Architecture designed for performance, maintainability, and future growth.** ⚙️
