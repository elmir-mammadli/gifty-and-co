<script setup lang="ts">
const story = await useAsyncStoryblok('home', {
  version: 'draft'
})
const blog = ref<[]>([])
const storyblok = useStoryblokApi()

async function getPosts () {
  const res = await storyblok.get('cdn/stories', {
    starts_with: 'index/',
    version: 'draft'
  })
  blog.value = res.data.stories
  console.log('121', blog.value);
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-y-12 px-5 mt-12">
      <BlogPost 
      v-if="story" 
      v-for="(post, _uid) in blog" 
      :key="post._uid"
      :content="post" />
    </div>
  </div>
</template>