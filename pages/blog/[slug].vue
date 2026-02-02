<template>
  <main class="w-full">
    <section class="max-w-3xl mx-auto px-4 py-20">
      <article v-if="article" class="prose prose-invert max-w-none">
        <h1 class="section-title">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-4 mb-12 text-gray-500 font-mono text-sm">
          <span>{{ new Date(article.date).toLocaleDateString() }}</span>
          <span>•</span>
          <span>{{ article.readingTime }} min read</span>
        </div>

        <div class="prose-content mb-12">
          <ContentRenderer :value="article" />
        </div>

        <div class="border-t border-cyber pt-8 mt-12">
          <NuxtLink to="/blog" class="text-neon-cyan hover:text-neon-teal font-mono text-sm">
            ← Back to articles
          </NuxtLink>
        </div>
      </article>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 font-mono">Article not found.</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: article } = await useAsyncData(`article-${route.params.slug}`, async () => {
  return queryContent(`blog/${route.params.slug}`).findOne()
})

useHead({
  title: computed(() => article.value?.title || 'Article - Aivaras'),
})
</script>

<style scoped>
:deep(.prose-content) {
  @apply space-y-4;
}

:deep(.prose-content h2) {
  @apply font-mono font-bold text-xl mt-8 mb-4;
}

:deep(.prose-content h3) {
  @apply font-mono font-bold text-lg mt-6 mb-3 text-neon-teal;
}

:deep(.prose-content p) {
  @apply text-gray-300 leading-relaxed;
}

:deep(.prose-content code) {
  @apply font-mono text-sm bg-dark-900 px-2 py-1 rounded text-neon-cyan;
}

:deep(.prose-content pre) {
  @apply bg-dark-900 border border-cyber rounded-lg p-4 overflow-x-auto;
}

:deep(.prose-content a) {
  @apply text-neon-cyan hover:text-neon-teal underline;
}

:deep(.prose-content ul) {
  @apply list-disc list-inside space-y-2;
}

:deep(.prose-content ol) {
  @apply list-decimal list-inside space-y-2;
}
</style>
