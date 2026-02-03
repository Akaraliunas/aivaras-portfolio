<template>
  <div class="glass rounded-lg overflow-hidden">
    <!-- Terminal Header -->
    <div class="bg-dark-900 border-cyber border-none px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span class="font-mono text-xs text-gray-500">~/aivaras.dev</span>
      <div class="w-8"></div>
    </div>

    <!-- Terminal Content -->
    <div class="px-6 py-8">
      <div class="space-y-4">
        <div v-for="(line, idx) in displayLines" :key="idx" class="flex items-baseline gap-3">
          <span class="font-mono text-neon-cyan">$</span>
          <span class="font-mono text-sm">
            <span v-if="idx < displayLines.length - 1 || isComplete">
              {{ line }}
            </span>
            <span v-else class="flex items-center">
              {{ line }}
              <span class="ml-1 w-2 h-5 bg-neon-cyan animate-cursor-blink"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const phrases = [
  'I build headless e-commerce',
  'I optimize Magento',
  'I design APIs',
]

const currentPhraseIndex = ref(0)
const currentCharIndex = ref(0)
const isComplete = ref(false)

const displayLines = computed(() => {
  const lines: string[] = []
  
  // Add completed phrases
  for (let i = 0; i < currentPhraseIndex.value; i++) {
    lines.push(phrases[i])
  }
  
  // Add current phrase being typed
  if (currentPhraseIndex.value < phrases.length) {
    lines.push(
      phrases[currentPhraseIndex.value].slice(0, currentCharIndex.value)
    )
  }
  
  return lines
})

onMounted(() => {
  const typeInterval = setInterval(() => {
    const currentPhrase = phrases[currentPhraseIndex.value]
    
    if (currentCharIndex.value < currentPhrase.length) {
      currentCharIndex.value++
    } else {
      currentPhraseIndex.value++
      currentCharIndex.value = 0
      
      if (currentPhraseIndex.value >= phrases.length) {
        isComplete.value = true
        clearInterval(typeInterval)
      }
    }
  }, 100)
})
</script>

<style scoped>
/* Animation styles */
</style>
