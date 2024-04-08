<template>
    <section 
    :id="blok._uid"
    class="flex flex-col items-center justify-center mb-10" style="max-width: 745px; margin-bottom: 80px;">
      <div class="flex flex-col items-start">
        <h3
        class="text-black text-3xl font-bold pr-3">
        {{ blok.header }}
        </h3>
        <div class="flex items-start mt-4" style="column-gap: 24px;">
          <NuxtImg
          width="280"
          :src="blok.img.filename"
          class="rounded-md"
          />
          <div>
            <div class="text-black text-[18px]" v-html="blok.perex" />
          <NuxtLink :to="blok.button.url" target="_blank">
            <button class="btn-style p-4 mt-4 rounded-md hover:underline font-medium text-lg">Buy from Amazon.com</button>
          </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
   
  <script setup lang="ts">
  const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
  })

  console.log('PropsE', props.blok);
  </script>
  <style lang="scss">
.btn-style {
  background-color: #EB1C2B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    scale: 99.2%;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
    box-shadow: none;
    background-color: #d81926;
  }
}
</style>