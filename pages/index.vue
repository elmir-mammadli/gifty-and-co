<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';
import Skeleton from '~/components/Skeleton.vue';
import type { ISbStoryData } from '@storyblok/vue'
import { useMetaTags } from '~/composables/useMetaTags'

type Categories = 'men' | 'women' | 'kids' | 'trending' | ''

// Define a type that matches what BlogPost expects
type BlogPostType = {
  full_slug: string
  content: {
    image: {
      filename: string
    }
  }
  name: string
}

// Use a ref that's compatible with BlogPost component
const blog = ref<BlogPostType[]>([])
const { getStories } = useStoryblokCache()
const { setHomeMeta } = useMetaTags()
const loading = ref(false)

async function getPosts() {
  const category: Categories = 'men';
  loading.value = true
  try {
    // Using our cached getStories function
    const posts = await getStories({
      starts_with: `blog/${category}`,
      version: 'draft'
    })
    
    // Transform the data to ensure it matches the expected format
    blog.value = posts.map(post => ({
      full_slug: post.full_slug,
      content: {
        image: {
          filename: post.content?.image?.filename || ''
        }
      },
      name: post.name
    }))
    
    // Set meta tags for the homepage - use first post image if available
    setHomeMeta({
      title: 'Gifty & Co | Find the Perfect Gift for Every Occasion',
      description: 'Discover carefully curated gift ideas for everyone in your life. Find the perfect presents for birthdays, holidays, and special occasions.',
      image: blog.value[0]?.content?.image?.filename
    })
    
    loading.value = false
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
      <div class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-x-6 md:gap-y-12 px-5 rD:px-0 mt-12">
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
<style scoped>
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