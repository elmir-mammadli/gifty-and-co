<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import BlogPostHero from '~/components/BlogPostHero.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const isFixed = ref(false)
const isScrollIcon = ref(false)

const isPositionFixed = () => {
  if (window.scrollY > 520) {
    isFixed.value = true
    isScrollIcon.value = true
  } else {
    isFixed.value = false
    isScrollIcon.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', isPositionFixed)
})

onUnmounted(() => {
  window.removeEventListener('scroll', isPositionFixed)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 10,
    behavior: 'smooth'
  })
}


// useServerSeoMeta({
//   title: props.blok.header,
//   description: props.blok.meta.description,
//   ogTitle: props.blok.meta.title,
//   ogDescription: props.blok.meta.description,
//   ogImage: props.blok.image.filename,
//   twitterCard: 'summary_large_image'
// })

const arraySum = props.blok.body.length
console.log('Log it:', arraySum);

</script>

<template>
    <section class="mt-[80px] max-w-6xl mx-auto" v-editable="blok">
        <BlogPostHero v-if="blok" :blok="blok"  />
      <section class="flex md:flex-row items-start justify-center" style="column-gap: 54px; margin-top: 80px;">
        <div class="flex flex-col">
          <ContentsTable :contents="blok.body" />
          <StoryblokComponent
          v-for="(blok, index) in blok.body"
          :key="blok._uid"
          :blok="blok"
          :order="index"
        />
        </div>
        <RecommendedPosts :contents="blok.body" :class="{
          'sticky-content' : isFixed
        }" />

        <button 
        v-if="isScrollIcon"
        @click='scrollToTop'
        class="fixed bottom-4 right-4"
        >
      <Icon name="iconamoon:arrow-up-6-circle-light" color="black" class="size-10" />
      </button>
      </section>
  </section>
  </template>

  <style>
  .sticky-content {
    position: sticky;
    top: 36px;
    left: 0;
  }
</style>