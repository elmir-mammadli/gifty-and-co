<template>
    <div class="w-[300px] max-h-[600px] h-full overflow-y-scroll">
      <h3 class="text-[#1b2b68]/80 font-medium font-oswald mb-5 text-[24px]">
        More gift ideas
      </h3>
      <div v-for="(item, index) in recommendedPosts" :key="index" class="flex gap-x-1 text-[14px] font-normal mb-6 text-black hover:translate-y-[1px] transition-all duration-100">
        <NuxtLink :to="item.full_slug" target="_blank" class="text-black font-normal group flex justify-center items-start gap-x-2">
          <NuxtImg :src="item.content.image.filename" class="rounded-md object-cover size-14" />
          <div>
            <p class="group-hover:underline font-oswald leading-7 text-[18px] text-[#1b2b68]/80 hover:text-[#1b2b68]">{{ substringedBlogPost(item.name) }}</p>
          </div>
          <!-- <div class="flex items-center text-[13px] mt-1 text-[#1b2b68] font-light gap-x-2">
                          <p>
                            {{ date(item.content.date) }}
                          </p>
                          <p class="">|</p>
                          <p>
                          {{ item.content.author }}
                          </p>
                        </div> -->
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

  const { getStories } = useStoryblokCache()
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
    return new Date(dateDigits).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const substringedBlogPost = (item: Content['name']): Content['name'] => {
    return item.length > 50 ? item.substring(0, 50) + '...' : item
  }

  onMounted(async () => {
    const posts = await getStories({
      starts_with: 'blog',
      version: 'draft',
      filter_query: hideCurrent()
    }, 3600 * 1000)
    
    recommendedPosts.value = posts.map(post => ({
      _uid: post.uuid,
      full_slug: post.full_slug,
      content: {
        date: post.first_published_at || '',
        author: post.content?.author || '',
        image: {
          filename: post.content?.image?.filename || ''
        }
      },
      name: post.name
    })).slice(0, 8)
  })
  </script>
  <style>
  html {
    ::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(rgb(255, 165, 0), rgb(255, 140, 0), rgb(255, 69, 0));
  border-radius: 20px;
}
}
</style>