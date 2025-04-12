<script setup lang="ts">
import Image from '~/components/blog/Image.vue';
interface Blok {
  blok: {
  _uid: string
  header: string
  img: {
    filename: string
  }
  perex: string
  button: {
    url: string
  }
  }
  order: number
}
defineProps<Blok>()
const headerOrderNum = (num: number): string => {
  return num + 1 + '. '
}

const slugify = (text: Blok['blok']['header']): string => {
return text.toLowerCase().replace(/\s+/g, '-')
}
</script>

<template>
    <section 
    :id="slugify(blok.header)"
    class="flex flex-col items-center justify-center mt-16 my-10 rounded-lg shadow-lg bg-gray-100 bg-opacity-10 border" style="max-width: 920px; margin-bottom: 80px; padding: 32px;">
      <div 
      class="flex flex-col items-start"
      >
        <h2
        class="text-[#1b2b68] text-3xl font-semibold font-poppins pr-3">
        {{ `${headerOrderNum(order)}${blok.header}` }}
        </h2>
        <div class="flex items-start mt-8" style="column-gap: 24px;">
          <Image :src="blok.img.filename" :alt="blok.header" />
          <div>
              <p class="text-[#1b2b68] text-[18px]" v-html="blok.perex"/>
          <!-- <NuxtLink :href="blok.button.url" target="_blank">
            <button class="btn-style p-4 mt-6 rounded-md font-poppins text-white hover:underline font-semibold" style="text-transform: uppercase; letter-spacing: 0.5px;">Buy from Amazon.com</button>
          </NuxtLink> -->
          <div class="mt-6">
           <Button :link="blok.button.url" />
          </div>
          </div>
        </div>
      </div>
    </section>
  </template>
   
<style lang="scss">
.btn-style {
  background-color: #EC212F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    scale: 99.2%;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
    box-shadow: none;
    background-color: #d81926;
  }
}
html {
  scroll-behavior: smooth;
}
</style>