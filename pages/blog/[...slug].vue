<script setup lang="ts">
const route = useRoute()
const { getStory } = useStoryblokCache()
const { setBlogMeta } = useMetaTags()

// Generate the slug path
const slugPath = Array.isArray(route.params.slug) 
  ? route.params.slug.join('/') 
  : route.params.slug

// Get the story with caching
const story = await getStory(
  `blog/${slugPath}`, 
  { version: 'draft' },
  3600 * 1000 // Cache for 1 hour
)

// Set meta tags for the blog post
setBlogMeta({
  title: story.name,
  description: story.content?.description || story.content?.perex,
  image: story.content?.image,
  author: story.content?.author,
  publishDate: story.first_published_at,
  fullSlug: story.full_slug,
  category: Array.isArray(route.params.slug) && route.params.slug.length > 0 
    ? route.params.slug[0] 
    : undefined
})
</script>

<template>
    <div class="mx-auto max-w-screen-rD">
        <StoryblokComponent ref="target" :blok="story.content" :name="story.name" />
    </div>
</template>