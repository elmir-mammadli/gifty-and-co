<template>
    <div class="w-[280px] p-4 border rounded-lg">
      <h3 class="text-gray-800 font-semibold mb-4 pb-2 text-[16px] border-b border-black border-opacity-10">
        Contents table
      </h3>
      <div v-for="(item, index) in content" :key="index" class="flex gap-x-1 text-[16px] font-normal mb-1 text-black">
        <p class="font-semibold">{{ `${index + 1}.` }}</p>
        <NuxtLink :to="clickToArticle(item._uid)" class="text-black hover:underline">
          {{ item.header }}
        </NuxtLink>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  interface Content {
    component: string
    header: string
    _uid: string
  }
  const props = defineProps<{
    contents: Content[]
  }>()
  console.log('PropsQWE', props.contents);
  

const content = props.contents.filter((item: Content) => item.component === 'BlogItem')

  const clickToArticle = (item: Content['_uid']) => {
    return `#${item}`
  }
</script>
  