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
  
  const goBack = () => {
    history.back()
  }
  </script>
  <template>
    <article v-editable="blok"
    class="max-w-[1024px] mx-auto grid grid-cols-1 place-items-start place-content-between gap-x-8 rounded-lg mt-[64px]"
    >
    <div>
      <h1 class="text-center text-[36px] md:text-[56px] leading-[42px] md:leading-[72px] font-poppins font-bold text-[#1b2b68]">{{ blok.header }}</h1>
      <div class="flex md:hidden justify-center gap-x-2 my-8 text-blue-700 font-medium">
        <p class="">Author: {{ blok.author }}</p>
        <p>|</p>
        <p>{{ date }}</p>
      </div>
      <div class="flex items-center justify-between gap-x-3 text-gray-500 font-medium text-[15px] md:mt-8">
                        <div class="hidden md:flex gap-x-1 items-center group">
                          <NuxtIcon name="north-west" class="text-[18px] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:transition ease-in duration-150 text-blue-600" />
                            <button @click="goBack()" class="font-medium text-blue-600 hover:underline">
                              Back to Blog
                            </button>
                        </div>
                        <span class="hidden md:flex items-center gap-x-2">
                          <p class="text-[#1b2b68]">
                          {{ blok.author }}
                          </p>
                          <p class="">|</p>
                          <p class="text-[#1b2b68]">
                          {{ date }}
                          </p>
                        </span>
                        <span class="hidden md:block">
                            <p class="text-[#1b2b68]"> 
                            {{
                              readingTime
                            }} 
                            </p>
                        </span>
          </div>
        <div class="hidden md:block h-[4px] w-full bg-blue-600 my-8"></div>

          <p class="mx-auto text-[20px] font-normal text-[#1b2b68] mt-10">
        {{ blok.perex }}
      </p>
      <!-- <NuxtImg width="920" height="480" :src="blok.image.filename" class="hidden md:block rounded-xl my-10" /> -->
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
  