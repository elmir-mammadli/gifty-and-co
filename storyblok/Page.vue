<template>
    <section v-editable="blok">
      <section>
      <BlogPostHero v-if="blok" :blok="blok"  />
      </section>
      <div class="max-w-[800px] mx-auto">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
      </div>
  </section>
  </template>
   
  <script setup>
  import BlogPostHero from '~/components/BlogPostHero.vue';
const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
  })
  console.log('META', props.blok.meta);
  
  useServerSeoMeta({
    title: props.blok.header,
    description: props.blok.meta.description,
    ogTitle: props.blok.meta.title,
    ogDescription: props.blok.meta.description,
    ogImage: props.blok.image.filename,
    twitterCard: 'summary_large_image'
  })
  </script>