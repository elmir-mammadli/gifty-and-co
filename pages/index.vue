<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';
import Skeleton from '~/components/Skeleton.vue';

type Categories = 'men' | 'women' | 'kids' | 'trending' | ''

const blog = ref<[]>([])
const route = useRoute()
const storyblok = useStoryblokApi()
const loading = ref(false)
console.log('Routsse', route.params);


async function getPosts () {
  const category: Categories = 'men';
  loading.value = true
  try {
    const res = await storyblok.get('cdn/stories', {
    starts_with: `blog/${category}`,
    version: 'draft'
  })
  loading.value = false
  blog.value = res.data.stories
  }
  catch (error) {
    console.error(error)
  }
  finally {
   loading.value = false
  }
}
const preloaderSkeleton = computed(() => loading ? Array(3).fill(Skeleton) : '')

onMounted(() => {
  return getPosts()
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <Hero />
    <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 rD:grid-cols-3 gap-8 md:gap-y-12 px-5 rD:px-0 mt-12">
      <TransitionGroup name="list">
      <BlogPost 
        v-for="(post, index) in blog" 
        :key="index"
        :post="post" 
      />
      </TransitionGroup> 
      <template v-if="loading" v-for="(skeleton, id) in preloaderSkeleton" :key="id">
      <component :is="skeleton" />
      </template>
    </div>
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