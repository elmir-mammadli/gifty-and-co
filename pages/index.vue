<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';
const blog = ref<[]>([])
const storyblok = useStoryblokApi()

async function getPosts () {
  const res = await storyblok.get('cdn/stories', {
    starts_with: 'blog/',
    version: 'draft'
  })
  blog.value = res.data.stories
}

await useAsyncData('blog-posts', () => {
  return getPosts()
})

onMounted(() => {
  getPosts()
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <Hero />
    <TransitionGroup name="list" tag="div" class="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-y-12 px-5 mt-12">
      <BlogPost 
      v-for="(post, index) in blog" 
      :key="index"
      :post="post" />
    </TransitionGroup>
  </div>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>