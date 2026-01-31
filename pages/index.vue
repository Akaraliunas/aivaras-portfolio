<template>
  <main class="w-full">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 py-20 md:py-32">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div>
            <h1 class="font-mono text-4xl md:text-5xl font-bold mb-4 text-white">
              Aivaras
            </h1>
            <p class="text-lg md:text-xl text-gray-400">
              Full-Stack Developer specializing in headless e-commerce, Magento optimization, and API design.
            </p>
          </div>

          <div class="space-y-3">
            <p class="font-mono text-sm text-gray-500">Currently working on:</p>
            <p class="text-neon-cyan font-mono text-lg">
              → GraphQL-first architecture patterns
            </p>
            <p class="text-neon-teal font-mono text-lg">
              → Performance optimization for scale
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

    <!-- Skills Section -->
    <section id="skills" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber">
      <h2 class="section-title">
        / skills
      </h2>
      <SkillsGrid />
    </section>

    <!-- Brief Intro -->
    <section class="max-w-6xl mx-auto px-4 py-20">
      <div class="glass rounded-lg p-8 md:p-12">
        <h3 class="font-mono font-bold text-xl mb-4 glow-text">
          Who I am
        </h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          I'm a developer obsessed with clean architecture and performance. I've spent years optimizing Magento implementations, designing scalable GraphQL APIs, and building headless e-commerce solutions that actually scale.
        </p>
        <p class="text-gray-300 leading-relaxed">
          When I'm not writing code, you'll find me optimizing something else—whether it's a Magento indexing strategy, a fitness routine, or a car engine. I believe the same principles apply: precision, efficiency, and understanding the fundamentals.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber">
      <h2 class="section-title">
        / contact
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div>
            <p class="text-gray-500 font-mono text-sm mb-2">Email:</p>
            <p class="text-neon-cyan font-mono">contact@aivaras.dev</p>
          </div>
          <div>
            <p class="text-gray-500 font-mono text-sm mb-2">Social:</p>
            <div class="flex gap-4">
              <a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
                → GitHub
              </a>
              <a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
                → Twitter
              </a>
              <a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
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
    <footer class="border-t border-cyber mt-20 py-8">
      <div class="max-w-6xl mx-auto px-4">
        <p class="text-center text-gray-600 font-mono text-sm">
          © 2026 Aivaras. Crafted with precision.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Aivaras - Full-Stack Developer',
})
</script>
