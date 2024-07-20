<script setup lang="ts">
const route = useRoute()

const story = await useAsyncStoryblok(
  `blog/${Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug}`, 
  { version: 'draft' }
)

</script>
<template>
    <div>
        <StoryblokComponent ref="target" :blok="story.content" :name="story.name" />
    </div>
</template>