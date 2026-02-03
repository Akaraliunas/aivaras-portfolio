<template>
  <main class="w-full">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 py-20 md:py-32">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h1 class="font-mono text-4xl md:text-5xl font-bold mb-4 text-white">
              Aivaras Karaliūnas
            </h1>
            <p class="text-lg md:text-xl text-gray-400 mb-4">
              Full-Stack Developer | 6+ years | <br> Magento · Laravel · Vue.js
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
            <button class="btn-primary">
              View My Work
            </button>
            <button class="btn-secondary">
              Get in Touch
            </button>
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
    <section class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber border-0">
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
    <section id="skills" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber border-0">
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
        <p class="text-gray-300 leading-relaxed mb-4">
          I'm a full-stack developer motivated by results. With 5+ years of professional experience, I've built and optimized e-commerce platforms, corporate websites, and scalable web solutions. My focus is on writing clean code, ensuring high performance, and delivering precision-engineered solutions.
        </p>
        <p class="text-gray-300 leading-relaxed">
          Whether I'm architecting backend systems with Laravel, optimizing Magento implementations, or building responsive frontends with Vue.js, I bring the same principles to everything: precision, efficiency, and a commitment to understanding the fundamentals. I thrive in collaborative environments and am passionate about technical excellence.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber border-0">
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
    <footer class="border-t border-cyber border-0 mt-20 py-8">
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

// Traukiame patirtis iš tavo Laravel API
const { data: experiences, pending } = await useFetch('/experience', {
  baseURL: config.public.apiBase,
  transform: (res: any) => res.data
})

useHead({
  title: 'Aivaras K. - Full-Stack Developer',
})
</script>
