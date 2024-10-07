<template>
    <div class="w-[280px] cursor-pointer">
      <h3 class="text-[#1b2b68] font-semibold mb-4 text-[22px]">
        You might also like:
      </h3>
      <div v-for="(item, index) in recommendedPosts" :key="index" class="flex gap-x-1 text-[16px] font-normal mb-5 text-black bg-[#1b2b68]/5 border border-1 px-4 pt-4 rounded-md shadow-md hover:scale-[98%] transition-all duration-100">
        <NuxtLink :to="item.full_slug" target="_blank" class="text-black font-normal group mb-4">
          <NuxtImg :src="item.content.image.filename" class="rounded-md" />
          <div>
            <p class="group-hover:underline font-semibold mt-1 text-[#1b2b68]">{{ substringedBlogPost(item.name) }}</p>
          </div>
          <div class="flex items-center text-[13px] mt-1 text-[#1b2b68] font-light gap-x-2">
                          <p>
                            {{ date(item.content.date) }}
                          </p>
                          <p class="">|</p>
                          <p>
                          {{ item.content.author }}
                          </p>
                        </div>
        </NuxtLink>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  const props = defineProps<{
    contents: Content
  }>()

  type Content = {
    content: {
      date: string
      author: string
      image: {
        filename: string
      }
    }
    name: string
    _uid: string
    full_slug: string
  }
  const storyblokApi = useStoryblokApi()
  const recommendedPosts = ref<Content[]>([])

  const hideCurrent = () => {
    if (props.contents) {
      return {
        _uid: {
          not_in: props.contents._uid
        }
      }
    }
  }

  const date = (dateDigits: string) => {
    return new Date (dateDigits).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    
    })
  }

  const substringedBlogPost = (item: Content['name']): Content['name'] => {
    return item.length > 50 ? item.substring(0, 50) + '...' : item
  }

  onMounted(async () => {
    const res = await storyblokApi.get('cdn/stories', {
      starts_with: 'blog',
      version: 'draft',
      filter_query: hideCurrent()
    })
    recommendedPosts.value = res.data.stories
    console.log('RecommendedPosts', recommendedPosts.value);
    
  })
  </script>
  