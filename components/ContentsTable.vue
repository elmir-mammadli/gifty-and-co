<script lang="ts" setup>
type ContentTypes = {
  component: string
  header: string
  _uid: string
}

interface Content {
  contents: ContentTypes[]
}

interface ContentAndFixed extends Content {
  isFixed: boolean
}

const props = defineProps<ContentAndFixed>()
const content = props.contents.filter((item: ContentTypes) => item.component === 'BlogItem')
console.log('ContentsTable', content)

const clickToArticle = (item: ContentTypes['_uid']) => {
  return `#${item}`
}

const slugify = (text: ContentTypes['header']): string => {
  return text.toLowerCase().replace(/\s+/g, '-')
  }

  const arraySum = content.length
  console.log('arraySum', arraySum);
  
</script>


<template>
    <div class="w-[280px] px-4 py-2 border rounded-lg group shadow-md bg-[#1b2b68]/5">
      <div class="flex items-center justify-start gap-x-2 text-[#1b2b68]/80">
        <Icon name="ic:baseline-format-list-bulleted" class="size-5" />
      <h3 class="font-semibold text-[16px] py-1">
        Table of contents
      </h3>
      </div>
      <div :class="[
        isFixed ? 'hidden group-hover:block border-t border-black border-opacity-10 pt-4' : 'block border-t border-black border-opacity-10 pt-4',
      ]">
        <div v-for="(item, index) in content" :key="index"  class="flex gap-x-1 text-[16px] font-normal mb-1 text-black">
          <!-- <p class="">{{ `${index + 1}.` }}</p> -->
          <NuxtLink :to="clickToArticle(slugify(item.header))" class="text-[#1b2b68] hover:underline mt-0.5 text-[16px]">
            {{ `${index + 1}. ${item.header}` }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>