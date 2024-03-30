<script setup lang="ts">
const route = useRoute()
const story = await useAsyncStoryblok(
  `blog/${route.params.slug[0]}`, 
  { version: 'draft' }
)
console.log('Story', story)
</script>
<template>
    <div>
        <StoryblokComponent ref="target" :blok="story.content" :name="story.name" />
    </div>
</template>