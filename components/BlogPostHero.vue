  <script lang="ts" setup>
  // interface Props {
  //   blok: {
  //     title: string
  //     category: string
  //     perex: any
  //     has_content: boolean
  //     image: {
  //       filename: string
  //     }
  //     body: {
  //       component: string
  //       text: string
  //       _uid: string
  //     }[]
  //   },
  //   name: string
  // }
  
  const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
  })
  const date = computed(() => {
    return new Date (props.blok.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    
    })
  })

  const readingTime = computed(() => {
    return `${props.blok.readTime} min. read`
  })
  </script>
  <template>
    <article v-editable="blok"
    class="max-w-none mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start place-content-center gap-x-8 p-6 mt-[96px]"
    >
    <div class="max-w-[600px] w-full">
      <NuxtImg :src="blok.image.filename" class="rounded-xl w-full" />
    </div>
    <div class="flex flex-col h-full justify-between">
            <div class="flex items-center justify-start gap-x-1 group">
          <NuxtIcon name="back-arrow" class="text-[24px] text-blue-600 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:transition-all duration-200" :filled="false" />
        <NuxtLink to="/" class="text-[14px] font-medium text-blue-600"> 
          Back to Blog
        </NuxtLink>
      </div>
      <div>
        <h2 class="text-[36px] leading-[48px] font-semibold text-gray-800">{{ blok.header }}</h2>
      <p class="text-[18px] font-normal text-gray-700 mt-2">
        {{ blok.perex }}
      </p>
      </div>
          <!-- <div class="h-[1px] w-full bg-gray-500/40 my-4"></div> -->
        <div class="flex items-center justify-between gap-x-3 text-gray-500 font-medium text-[14px] mt-4">
                        <span class="flex items-center gap-x-2">
                          <p class="">
                          {{ blok.author }}
                          </p>
                          <p class="">|</p>
                          <p class="">
                          {{ date }}
                          </p>
                        </span>
                        <span>
                            <p class="text-[14px]"> 
                            {{
                              readingTime
                            }} 
                            </p>
                        </span>
          </div>
          <!-- <div class="flex flex-row gap-2">
            <SocialShare
              v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
              :key="network"
              :network="network"
              :styled="false"
              :label="false"
              class="p-2 rounded-xl text-gray-400 hover:text-gray-500"
            />
          </div> -->
    </div>
    </article>
  </template>
  