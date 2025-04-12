<!-- <template>
  <p class="text-[40px] text-black">{{ route.params.category }} - {{ route.params }}</p>
  <h1 class="text-[40px] text-black">Elmir</h1>
</template>
<script setup lang="ts">
const route = useRoute()

</script> -->

<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue'
import Skeleton from '~/components/Skeleton.vue'
import { useMetaTags } from '~/composables/useMetaTags'

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

const blog = ref<BlogPostType[]>([])
const { getStories } = useStoryblokCache()
const { setCategoryMeta } = useMetaTags()

const route = useRoute()

const category = route.params.category as string
const subcategory = route.params.subcategory as string
const dynamicRoute = `blog/${category}/${subcategory}`

const loading = ref(false)
const preloaderSkeleton = computed(() => loading ? Array(3).fill(Skeleton) : '')

const getPostsStoryblok = async () => {
  try {
    loading.value = true
    
    // Using the cached getStories function
    const posts = await getStories({
      starts_with: dynamicRoute,
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

    // Set meta tags for the category page - use first post image if available
    setCategoryMeta({
      name: decorateRouteName(subcategory) || subcategory,
      description: `Browse our selection of ${decorateRouteName(subcategory) || subcategory} gift ideas for ${decorateRouteName(category) || category}. Find the perfect presents for your loved ones.`,
      image: blog.value[0]?.content?.image
    })
  } catch (error) {
    loading.value = false
    console.error('Error fetching stories:', error)
  } finally {
    loading.value = false
  }
}

const decorateRouteName = (name: string) => {
  if (name) {
    return name
    .replaceAll('and', ' & ')
    .replaceAll('-', ' ')
  }
  return name
}

onMounted(() => {
  return getPostsStoryblok()
})

const isWorking = ref(false)

</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-8">{{ decorateRouteName(subcategory) }}</h1>
    
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