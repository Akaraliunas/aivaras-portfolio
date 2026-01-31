import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      crawlLinks: true,
    },
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://aivaras.dev',
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  content: {
    sources: {
      content: {
        driver: 'fs',
        base: './content',
      },
    },
    highlight: {
      theme: 'github-dark',
      preload: ['js', 'ts', 'graphql', 'php', 'sql'],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  app: {
    head: {
      title: 'Aivaras - Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Magento & Headless E-commerce Specialist | GraphQL | API Design',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },

  devtools: { enabled: true },
})
