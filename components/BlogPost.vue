<script lang="ts" setup>
interface BlogPost {
  _uid: string
  img: {
    filename: string
  }
  header: string
  perex: string
}
defineProps<{
  content: BlogPost
}>()

</script>
<template>
    <NuxtLink :to="'/' + content.full_slug">
    <article class="max-w-[410px] flex flex-col justify-start">
        <div>
            <img :src="content.img.filename" class="rounded-[32px] bg-red-300 w-[410px] h-[220px]" />
        </div>
        <div class="max-w-[360px] ps-4">
            <!-- <div class="flex gap-x-2">
                <span class="bg-green-400 rounded-xl px-4 py-3 text-[12px]">Mothers Day</span>
                <span class="bg-[#FF0060] rounded-xl px-4 py-3 text-[12px]">Female</span>
            </div> -->
            <h2 class="text-gray-800 font-semibold text-[24px] mt-5 leading-8">{{ content.header }}</h2>
            <p class="text-gray-600 text-[16px] mt-2">{{ content.perex }}</p>
        </div>
    </article>
    </NuxtLink>
</template>