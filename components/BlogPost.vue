<script lang="ts" setup>
// interface BlogPost {
//   body: {
//     full_slug: string
//   _uid: string
//   img: {
//     filename: string
//   }
//   header: string
//   perex: string
//   }
// }
const props = defineProps<{
  post: any
}>()
console.log('Props in Post', props.post);


</script>
<template>
    <div>
    <article class="max-w-[410px] flex flex-col justify-start">
        <div>
            <img :src="post.content.image.filename" class="rounded-[32px] bg-red-300 w-[410px] h-[220px]" />
        </div>
        <div class="max-w-[360px] ps-4">
            <!-- <div class="flex gap-x-2">
                <span class="bg-green-400 rounded-xl px-4 py-3 text-[12px]">Mothers Day</span>
                <span class="bg-[#FF0060] rounded-xl px-4 py-3 text-[12px]">Female</span>
            </div> -->
            <h2 class="text-gray-800 font-semibold text-[24px] mt-5 leading-8">{{ post.name }}</h2>
            <p class="text-gray-700 text-[16px] mt-2">{{ post?.body?.perex }}</p>
        </div>
    </article>
    </div>
</template>