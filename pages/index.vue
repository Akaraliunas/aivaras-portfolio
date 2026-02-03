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
        <ClientOnly>
          <div v-if="about" class="space-y-4 text-gray-300">
            <div v-html="about.bio" class="prose prose-invert max-w-none [&>*]:pb-4"></div>
          </div>
          
          <template #fallback>
            <div class="animate-pulse space-y-4">
              <div class="h-4 bg-gray-700 rounded w-3/4"></div>
              <div class="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </template>
        </ClientOnly>
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
        <form @submit.prevent="submitForm" class="space-y-4">
          <div v-if="status.success" class="p-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono text-sm mb-4">
            [SUCCESS]: Message transmitted successfully.
          </div>

          <div v-if="status.error" class="p-4 bg-red-500/10 border border-red-500 text-red-500 font-mono text-sm mb-4">
            [ERROR]: {{ status.error }}
          </div>

          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="terminal-input w-full"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="your@email.com"
            class="terminal-input w-full"
            required
          />
          <input
            v-model="form.subject"
            type="text"
            placeholder="Subject"
            class="terminal-input w-full"
            required
          />
          <input v-model="form.website" type="text" class="hidden" tabindex="-1" autocomplete="off" />
          <textarea
            v-model="form.message"
            placeholder="Your message..."
            rows="4"
            class="terminal-input w-full resize-none"
            required
          ></textarea>
          
          <button 
            type="submit" 
            :disabled="status.loading"
            class="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
          >
            <span v-if="status.loading" class="animate-spin">◌</span>
            {{ status.loading ? 'Transmitting...' : 'Send Message' }}
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
  key: 'exp-list',
  baseURL: config.public.apiBase,
  transform: (res: any) => res.data
})

// About (Direct Object - NO .data wrapper)
const { data: about, pending: aboutPending } = await useAsyncData('about-key', 
  () => $fetch('/about', { baseURL: config.public.apiBase })
)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref({
  loading: false,
  success: false,
  error: null as string | null
})

const submitForm = async () => {
  status.value.loading = true
  status.value.error = null
  
  try {
    await $fetch('/contact', {
      method: 'POST',
      baseURL: config.public.apiBase,
      body: form.value
    })
    
    status.value.success = true
    form.value = { name: '', email: '', subject: '' , message: '' } // Reset form
  } catch (e: any) {
    status.value.error = e.data?.message || 'Something went wrong. Please try again.'
  } finally {
    status.value.loading = false
  }
}

useHead({
  title: 'Aivaras K. - Full-Stack Developer',
})
</script>
