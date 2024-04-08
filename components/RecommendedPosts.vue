<template>
    <div class="w-[280px]">
      <h3 class="text-gray-800 font-semibold mb-4 pb-2 text-[22px] border-b border-black border-opacity-10">
        You might also like:
      </h3>
      <div v-for="(item, index) in recommendedPosts" :key="index" class="flex gap-x-1 text-[16px] font-normal mb-1 text-black">
        <NuxtLink :to="item.full_slug" target="_blank" class="text-black font-normal group mb-4">
          <div class="">
            <NuxtImg :src="item.content.image.filename" />
            <p class="group-hover:underline font-semibold">{{ item.name }}</p>
          </div>
          <!-- <div class="flex items-center text-[13px] mt-1 text-black opacity-50 font-light gap-x-2">
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
  const storyblokApi = useStoryblokApi()
  const recommendedPosts = ref<Content[]>([])
  console.log('AWW', props.contents);

  const hideCurrent = () => {
    if (props.contents) {
      return {
        _uid: {
          not_in: props.contents._uid
        }
      }
    }
  }

  const data = computed(() => {
    return props.contents.content.date
  })

  const date = (dateDigits: string) => {
    return new Date (dateDigits).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    
    })
  }

  onMounted(async () => {
    const res = await storyblokApi.get('cdn/stories', {
      starts_with: 'blog',
      version: 'draft',
      sort_by: 'first_published_at:desc',
      per_page: 3,
      filter_query: hideCurrent()
    })
    recommendedPosts.value = res.data.stories
    console.log('RecommendedPosts', recommendedPosts.value);
    
  })
  </script>
  