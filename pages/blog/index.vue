<template>
  <main class="w-full">
    <section class="max-w-4xl mx-auto px-4 py-20">
      <h1 class="section-title">
        / blog
      </h1>

      <div v-if="pending" class="text-gray-400 font-mono">
        Loading articles...
      </div>

      <div v-else class="space-y-6">
        <div v-for="article in articles" :key="article.id" 
            class="glass rounded-lg p-6 hover:border-neon-cyan hover:border-opacity-30 transition-all mb-6">
          
          <NuxtLink :to="`/blog/${article.slug}`" class="block">
            
            <img v-if="article.thumbnail" 
                :src="article.thumbnail" 
                class="w-full h-48 object-cover rounded-md mb-4 border border-cyber border-opacity-20"
            />

            <h2 class="font-mono font-bold text-xl mb-2 text-neon-cyan hover:text-neon-teal">
              {{ article.title }}
            </h2>
            
            <p class="text-gray-400 text-sm mb-4">
              {{ article.description }}
            </p>

            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-gray-600">
                {{ new Date(article.published_at || article.created_at).toLocaleDateString() }}
              </span>
              <span class="text-neon-cyan font-mono text-sm">
                → Read more
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div v-if="!pending && articles.length === 0" class="text-center py-12">
        <p class="text-gray-500 font-mono">
          No articles yet. Check back soon.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Traukiame post'us iš Laravel backend'o
const { data: articles, pending } = await useFetch('/posts', {
  baseURL: config.public.apiBase,
  transform: (res: any) => res.data
})

useHead({
  title: 'Blog - Aivaras',
})
</script>
