<template>
    <section v-editable="blok">
      <BlogPostHero class="mt-[96px]" v-if="blok" :blok="blok"  />
      <section class="elmir">
        <!-- <ContentsTable :contents="blok.body" :class="{
          'sticky-content' : isFixed
        }" /> -->
        <div class="flex flex-col">
          <StoryblokComponent
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        />
        </div>
        <RecommendedPosts :contents="blok" :class="{
          'sticky-content' : isFixed
        }" />

        <button 
        v-if="isScrollIcon"
        @click='scrollToTop'
        class="hidden md:block fixed bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-md"
        >Top</button>
      </section>
  </section>
  </template>
  <script setup>
  import { defineProps, ref } from 'vue';
  import { onMounted, onUnmounted } from 'vue';
  import BlogPostHero from '~/components/BlogPostHero.vue';

defineProps({
    blok: {
      type: Object,
      required: true
    }
  })

  const isFixed = ref(false)
  const isScrollIcon = ref(false)

  const isPositionFixed = () => {
    if (window.scrollY > 640) {
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
      top: 0,
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
  </script>
  <style>
  .elmir {
    @apply flex flex-col lg:flex-row items-start justify-between gap-x-8 p-6 mt-[96px];
  }
  .sticky-content {
    position: sticky;
    top: 36px;
    left: 0;
  }
</style>