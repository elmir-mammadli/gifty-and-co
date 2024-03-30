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
  console.log('Props', props.blok)
  </script>
  <template>
    <article v-editable="blok"
    class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-x-7 p-7 bg-gray-100 rounded-xl mt-[96px]"
    >
    <div class="max-w-[600px] w-full">
      <NuxtImg :src="blok.image.filename" class="rounded-xl w-full" />
    </div>
    <div>
      <h2 class="text-[40px] font-semibold text-gray-800">{{ blok.header }}</h2>
      <p class="text-[18px] font-normal text-gray-700 mt-2">
        {{ blok.perex }}
      </p>
        <div class="flex items-center justify-between gap-x-3 text-gray-500 font-normal text-[18px] mt-3">
                    <div class="flex items-center gap-x-2">
                        <p class="text-[14px]">
                          {{ date }}
                        </p>
                        <p>•</p>
                        <p class="text-[14px]">
                          {{ blok.author }}
                        </p>
                    </div>
                    <div>
                      <p class="text-[14px]"> 
                       {{
                        readingTime
                       }} 
                      </p>
                    </div>
          </div>
          <div class="flex flex-row gap-2">
            <SocialShare
              v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
              :key="network"
              :network="network"
              :styled="false"
              :label="false"
              class="p-2 rounded-xl text-gray-400 hover:text-gray-500"
            />
      </div>
    </div>
    </article>
  </template>
  