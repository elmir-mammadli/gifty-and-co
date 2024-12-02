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
    <Hero />
      <div class="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-x-8 xl:gap-x-0 xl:justify-between md:gap-y-12 px-5 rD:px-0 mt-12">
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
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>