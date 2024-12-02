<script setup lang="ts">
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
    class="flex flex-col items-center justify-center mb-10" style="max-width: 800px; margin-bottom: 80px;">
      <div 
      class="flex flex-col items-star"
      :class="{
        'mt-10': order
      }"
      >
        <h3
        class="text-[#1b2b68] text-3xl font-semibold pr-3">
        {{ `${headerOrderNum(order)}${blok.header}` }}
        </h3>
        <div class="flex items-start mt-4" style="column-gap: 24px;">
          <NuxtImg
          width="280"
          :src="blok.img.filename"
          :alt="slugify(blok.header)"
          class="rounded-md"
          />
          <div>
            <div class="text-[#1b2b68] text-[18px] text-justify" v-html="blok.perex" />
          <NuxtLink :to="blok.button.url" target="_blank">
            <button class="btn-style p-4 mt-6 rounded-md font-poppins text-white hover:underline font-semibold" style="text-transform: uppercase; letter-spacing: 0.5px;">Buy from Amazon.com</button>
          </NuxtLink>
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