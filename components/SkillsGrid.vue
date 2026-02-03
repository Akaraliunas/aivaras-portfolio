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
        {{ skill.category }}
      </h3>
      <p class="text-sm text-gray-400 mb-4">
        {{ skill.description }}
      </p>
      <div class="flex flex-wrap gap-2 justify-center">
        <span
          v-for="sub_skill in skill.sub_skills"
          :key="sub_skill"
          class="text-xs px-3 py-1 bg-dark-900 border border-white border-opacity-10 rounded text-gray-300"
        >
          {{ sub_skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Fetch skills Data
const { data: skills, pending: skillsPending } = await useFetch('/skills', {
  key: 'skills-data',
  baseURL: config.public.apiBase,
  transform: (res: any) => res.data
})
</script>
