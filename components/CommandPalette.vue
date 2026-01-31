<template>
  <header class="sticky top-0 z-50 glass border-b border-cyber">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo / Title -->
        <NuxtLink to="/" class="font-mono font-bold text-lg glow-text">
          aivaras<span class="text-neon-teal">:</span>~<span class="text-neon-cyan">$</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.id"
            :to="link.href"
            class="font-mono text-sm text-gray-400 hover:text-neon-cyan transition-colors"
            :class="{ 'text-neon-cyan': isActive(link.href) }"
          >
            / {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden font-mono text-neon-cyan hover:text-neon-teal transition-colors"
          @click="isMenuOpen = !isMenuOpen"
        >
          {{ isMenuOpen ? '✕' : '≡' }}
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-if="isMenuOpen"
        class="md:hidden mt-4 space-y-3 pb-4 border-t border-cyber pt-4"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.id"
          :to="link.href"
          class="block font-mono text-sm text-gray-400 hover:text-neon-cyan transition-colors"
          @click="isMenuOpen = false"
        >
          / {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navigationLinks = [
  { id: 'home', label: 'home', href: '/' },
  { id: 'skills', label: 'skills', href: '/#skills' },
  { id: 'blog', label: 'blog', href: '/blog' },
  { id: 'contact', label: 'contact', href: '/#contact' },
]

const isActive = (href: string) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href.split('#')[0])
}
</script>
