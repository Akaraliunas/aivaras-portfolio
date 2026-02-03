<template>
  <main class="w-full">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 py-20 md:py-32">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h1 class="font-mono text-4xl md:text-5xl font-bold mb-4 text-white">
              {{ about?.full_name || 'Aivaras Karaliūnas' }}
            </h1>
            <p class="text-lg md:text-xl text-gray-400 mb-4">
              {{ about?.title }} | 6+ years | <br> Magento · Laravel · Vue.js
            </p>
            <p class="text-base text-gray-300"> 
              Building e-commerce platforms & corporate websites | <br> Results-driven | Remote/Hybrid
            </p>
          </div>

          <div class="space-y-3">
            <p class="font-mono text-sm text-gray-500">Currently working:</p>
            <p class="text-neon-cyan font-mono text-lg">
              → UAB FrontIT (Fullstack Developer)
            </p>
          </div>

          <div class="flex gap-4 pt-4">
            <!-- <button class="btn-primary">
              View My Work
            </button> -->
            <a href="#contact" class="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Right Terminal -->
        <div class="hidden md:block">
          <TerminalWindow />
        </div>
      </div>

      <!-- Mobile Terminal -->
      <div class="md:hidden mt-12">
        <TerminalWindow />
      </div>
    </section>

    <!-- Experience Section -->
    <section class="max-w-6xl mx-auto px-4 py-20 border-cyber border-none">
      <h2 class="section-title">/ experience</h2>
      
      <div v-if="pending" class="text-neon-cyan font-mono">Loading assets...</div>
      
      <div v-else class="space-y-8">
        <div v-for="exp in experiences" :key="exp.id" class="glass rounded-lg p-6 md:p-8">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-mono font-bold text-xl text-neon-cyan">{{ exp.company_name }}</h3>
              <p class="text-gray-400 text-sm mt-1">{{ exp.role }}</p>
            </div>
            <span class="text-gray-500 font-mono text-sm">{{ exp.period }}</span>
          </div>
          
          <p class="text-gray-300 mb-3">{{ exp.description }}</p>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in exp.technologies" 
              :key="tech"
              class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="max-w-6xl mx-auto px-4 py-20 border-cyber border-none">
      <h2 class="section-title">
        / skills
      </h2>
      <SkillsGrid />
    </section>

    <!-- About Section -->
    <section class="max-w-6xl mx-auto px-4 py-20">
      <div class="glass rounded-lg p-8 md:p-12">
        <h3 class="font-mono font-bold text-xl mb-4 glow-text">
          / about
        </h3>
        <div v-if="aboutPending" class="animate-pulse space-y-4">
          <div class="h-4 bg-gray-700 rounded w-3/4"></div>
          <div class="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>

        <div v-else class="space-y-4 text-gray-300 leading-relaxed">
          <p class="text-gray-300 leading-relaxed [&>*]:pb-4" v-html="about?.bio"></p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="max-w-6xl mx-auto px-4 py-20 border-cyber border-none">
      <h2 class="section-title">
        / contact
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div>
            <p class="text-gray-500 font-mono text-sm mb-2">Email:</p>
            <p class="text-neon-cyan font-mono">aivaras@karaliunas.dev</p>
          </div>
          <div>
            <p class="text-gray-500 font-mono text-sm mb-2">Availability:</p>
            <p class="text-neon-teal font-mono">Remote/Hybrid opportunities</p>
          </div>
          <div>
            <p class="text-gray-500 font-mono text-sm mb-2">Social:</p>
            <div class="flex gap-4">
              <a href="https://github.com/Akaraliunas" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
                → GitHub
              </a>
              <a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
                → Twitter
              </a>
              <a href="https://www.linkedin.com/in/aivaras-karali%C5%ABnas/" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
                → LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            class="terminal-input w-full"
          />
          <input
            type="email"
            placeholder="your@email.com"
            class="terminal-input w-full"
          />
          <textarea
            placeholder="Your message..."
            rows="4"
            class="terminal-input w-full resize-none"
          ></textarea>
          <button type="submit" class="btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-cyber border-none mt-20 py-8">
      <div class="max-w-6xl mx-auto px-4">
        <p class="text-center text-gray-600 font-mono text-sm">
          © 2026 Aivaras Karaliūnas. Crafted with precision. 
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Fetch experiences Data
const { data: experiences, pending } = await useFetch('/experiences', {
  baseURL: config.public.apiBase,
  transform: (res: any) => res.data
})

// Fetch About Data (The Singleton)
const { data: about, pending: aboutPending } = await useFetch('/about', {
  key: 'about-me-data',
  baseURL: config.public.apiBase,
  // transform: (res: any) => res.data
})

useHead({
  title: 'Aivaras K. - Full-Stack Developer',
})
</script>
