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
        <div v-if="articles && articles.length > 0">
          <div
            v-for="article in articles"
            :key="article._id"
            class="glass rounded-lg p-6 hover:border-neon-cyan hover:border-opacity-30 transition-all mb-6"
          >
            <NuxtLink :to="article._path" class="block">
              <h2 class="font-mono font-bold text-xl mb-2 text-neon-cyan hover:text-neon-teal">
                {{ article.title }}
              </h2>
              <p class="text-gray-400 text-sm mb-4">
                {{ article.description }}
              </p>
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs text-gray-600">
                  {{ new Date(article.date).toLocaleDateString() }}
                </span>
                <span class="text-neon-cyan font-mono text-sm">
                  → Read more
                </span>
              </div>
            </NuxtLink>
          </div>
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
// const { data: articles, pending } = await useFetch('/api/articles')
// Naudojame queryContent, kuris automatiškai nuskaito .md failus
const { data: articles, pending } = await useAsyncData('blog-list', () => 
  queryContent('/blog')
    .sort({ date: -1 }) // Rūšiuojame pagal datą (jei nurodyta)
    .find()
)

useHead({
  title: 'Blog - Aivaras',
})
</script>
