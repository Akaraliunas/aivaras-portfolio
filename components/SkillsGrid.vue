<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="skill in skills"
      :key="skill.id"
      class="skill-card group"
    >
      <div class="text-3xl mb-4 transform group-hover:scale-110 transition-transform">
        {{ skill.icon }}
      </div>
      <h3 class="font-mono font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
        {{ skill.name }}
      </h3>
      <p class="text-sm text-gray-400 mb-4">
        {{ skill.description }}
      </p>
      <div class="flex flex-wrap gap-2 justify-center">
        <span
          v-for="tag in skill.tags"
          :key="tag"
          class="text-xs px-3 py-1 bg-dark-900 border border-white border-opacity-10 rounded text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    id: 'magento',
    name: 'Magento',
    icon: '⚡',
    description: 'Expert in Magento 2 architecture, customization, and performance optimization',
    tags: ['Magento 2', 'PHP', 'MySQL'],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    icon: '🔗',
    description: 'Design and optimization of GraphQL APIs for headless e-commerce',
    tags: ['Apollo', 'Schema Design', 'Performance'],
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    icon: '💚',
    description: 'Modern Vue 3 with Nuxt for performant and SEO-friendly frontends',
    tags: ['Vue 3', 'SSR', 'SSG'],
  },
  {
    id: 'php',
    name: 'PHP',
    icon: '🐘',
    description: 'Backend development with focus on clean architecture and SOLID principles',
    tags: ['Laravel', 'Symfony', 'APIs'],
  },
  {
    id: 'system-design',
    name: 'System Design',
    icon: '🏗️',
    description: 'Scalable architecture for e-commerce platforms and microservices',
    tags: ['Scalability', 'Performance', 'DevOps'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '⚙️',
    description: 'Docker, Kubernetes, CI/CD pipelines, and infrastructure automation',
    tags: ['Docker', 'K8s', 'CI/CD'],
  },
]
</script>
