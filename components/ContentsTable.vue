<script lang="ts" setup>
type ContentTypes = {
  component: string
  header: string
  _uid: string
}

interface Content {
  contents: ContentTypes[]
}

const props = defineProps<Content>()
const content = props.contents.filter((item: ContentTypes) => item.component === 'BlogItem')

const clickToArticle = (item: ContentTypes['_uid']) => {
  return `#${item}`
}

const slugify = (text: ContentTypes['header']): string => {
  return text.toLowerCase().replace(/\s+/g, '-')
  }

</script>


<template>
    <div class="w-full border-black/10 border p-4 rounded-lg group">
      <div class="flex items-center justify-start gap-x-2 text-[#1b2b68]/80 border-b border-black/10">
        <Icon name="ic:baseline-format-list-bulleted" class="size-6" />
        <h3 class="font-semibold font-oswald text-[20px]">
          Table of contents
        </h3>
      </div>
      <div class="my-2">
        <div v-for="(item, index) in content" :key="index"  
        class="flex gap-x-1 text-[20px] font-light mb-1 text-black"
        >
          <!-- <p class="">{{ `${index + 1}.` }}</p> -->
          <NuxtLink :to="clickToArticle(slugify(item.header))" class="text-[#1b2b68] mt-0.5 text-[18px] font-oswald hover:underline">
            {{ `${index + 1}. ${item.header}` }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>