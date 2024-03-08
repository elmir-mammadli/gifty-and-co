<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';
const blog = ref<[]>([])
const storyblok = useStoryblokApi()

async function getPosts () {
  const res = await storyblok.get('cdn/stories', {
    version: 'draft'
  })
  blog.value = res.data.stories
  console.log('121', blog.value);
}

await useAsyncData('blog-posts', () => {
  return getPosts()
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-y-12 px-5 mt-12">
      <BlogPost 
      v-for="(post, index) in blog" 
      :key="index"
      :post="post" />
    </div>
  </div>
</template>