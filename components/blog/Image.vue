<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()

const slugify = (text: string): string => {
return text.toLowerCase().replace(/\s+/g, '-')
}
</script>
<template>
  <NuxtImg
          width="280"
          :src="src"
          :alt="slugify(alt)"
          class="rounded-lg mix-blend-multiply"
          />
</template>