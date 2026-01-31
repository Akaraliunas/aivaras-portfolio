# Aivaras Portfolio - Full-Stack Developer

A modern, performance-optimized portfolio built with **Nuxt 3**, **Tailwind CSS**, and **Nuxt Content v2**.

## 🎨 Design

- **Theme**: Deep dark mode (#020617) with cyberpunk-minimalist aesthetic
- **Animations**: Smooth transitions, typing effects, hover states
- **Responsive**: Mobile-first design with full mobile support
- **Performance**: Optimized for 100/100 Lighthouse score

## 🛠 Tech Stack

- **Framework**: Nuxt 3 (Vue 3 Composition API)
- **Styling**: Tailwind CSS 3 with custom utilities
- **Content**: Nuxt Content v2 (Markdown-driven blog)
- **Fonts**: Inter (body) + JetBrains Mono (code)
- **Deployment**: Vercel (serverless)

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── CommandPalette.vue       # Navigation header
│   ├── TerminalWindow.vue       # Hero typing animation
│   └── SkillsGrid.vue           # Skills showcase
├── content/
│   └── blog/
│       ├── graphql-optimization.md
│       └── magento-performance.md
├── pages/
│   ├── index.vue                # Home page
│   ├── blog/
│   │   ├── index.vue            # Blog listing
│   │   └── [slug].vue           # Article template
├── assets/
│   └── css/
│       └── main.css             # Global styles + utilities
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.cjs           # PostCSS configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url> aivaras-portfolio
cd aivaras-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Content Management

### Adding Blog Posts

Create a new file in `content/blog/`:

```markdown
---
title: 'Your Article Title'
description: 'Brief description'
date: '2026-01-31'
readingTime: 8
---

## Heading

Your content here...
```

Blog posts are automatically picked up and rendered.

### Updating Skills

Edit `components/SkillsGrid.vue`:

```typescript
const skills = [
  {
    id: 'unique-id',
    name: 'Skill Name',
    icon: '⚡',
    description: 'What you do with this skill',
    tags: ['Tag1', 'Tag2'],
  },
]
```

## 🎯 Key Components

### TerminalWindow.vue
Animated terminal window with typing effect. Displays a sequence of phrases with cursor animation.

```vue
<TerminalWindow />
```

### CommandPalette.vue
Sticky navigation header with "command palette" aesthetic. Responsive mobile menu included.

### SkillsGrid.vue
6-column responsive grid showcasing technical skills with hover glow effects.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  neon: {
    cyan: '#00f0ff',    // Primary accent
    teal: '#14b8a6',    // Secondary accent
  }
}
```

### Typography
Edit `nuxt.config.ts`:
```typescript
link: [
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@...',
    rel: 'stylesheet',
  },
]
```

### Animations
Global animations defined in `tailwind.config.ts` and `assets/css/main.css`.

## 📦 Building for Production

### Local Build
```bash
npm run build
npm run preview
```

### Vercel Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `.output/public`
5. Deploy

**Environment Variables** (if needed):
```
NUXT_PUBLIC_SITE_URL=https://aivaras.dev
```

### Static Site Generation
```bash
npm run generate
```

Generates a fully static site in `dist/` for CDN deployment.

## 🚀 Performance Optimization

### Lighthouse Targets
- **Performance**: 100 (fast JS execution, optimized images)
- **Accessibility**: 100 (semantic HTML, ARIA labels)
- **Best Practices**: 100 (modern standards)
- **SEO**: 100 (meta tags, structured data)

### Key Optimizations

1. **Code Splitting**: Nuxt auto-splits components
2. **Image Optimization**: Use `<NuxtImg>` for automatic optimization
3. **CSS-in-JS**: Tailwind purges unused styles
4. **Preloading**: Font preloading in `nuxt.config.ts`
5. **Minification**: Enabled by default in production build

### Monitoring

```bash
npm run build
npm run preview
# Use Chrome DevTools Lighthouse tab
```

## 🔗 Adding Social Links

Edit `pages/index.vue` contact section:

```vue
<a href="https://github.com/yourusername" class="text-neon-cyan">
  → GitHub
</a>
```

## 📱 Mobile Optimization

- Mobile-first Tailwind design
- Responsive typography (text-sm → text-lg)
- Touch-friendly interactive elements
- Mobile menu in CommandPalette component

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Tailwind Not Updating
```bash
# Clear Nuxt cache
rm -rf .nuxt
npm run dev
```

### Content Not Appearing
Ensure markdown files are in `content/blog/` with proper frontmatter.

## 📄 License

MIT License - Feel free to use this as a template.

## 🤝 Support

For issues or questions, check the [Nuxt docs](https://nuxt.com) or [Tailwind docs](https://tailwindcss.com).

---

**Built with precision. Optimized for scale.** ⚙️
