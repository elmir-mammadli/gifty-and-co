<script lang="ts" setup>
import { TransitionGroup } from 'vue';

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
defineProps<{
  post: any
}>()

</script>
<template>
<NuxtLink :to="'/' + post.full_slug">
    <article class="max-w-[410px] flex flex-col justify-start hover:scale-[99%] transition ease-linear duration-75 group">
            <span class="outline outline-gray-200 outline-opacity-35 rounded-[6px]">
                <NuxtImg :src="post.content.image.filename" class="rounded-[6px] w-[410px] h-[220px]" />
            </span>
            <div class="flex justify-between mt-2 text-black opacity-60">
                <div class="flex items-center gap-x-2">
                     <p class="text-[14px]">Bryan Scott</p>
                     <p>•</p>
                    <p class="text-[14px]">Aug 2, 2023</p>
                </div>
                <div>
                    <p class="text-[14px]">10 min. read</p>
                </div>
            </div>
        <div class="max-w-[360px]">
            <!-- <div class="flex gap-x-2">
                <span class="bg-green-400 rounded-xl px-4 py-3 text-[12px]">Mothers Day</span>
                <span class="bg-[#FF0060] rounded-xl px-4 py-3 text-[12px]">Female</span>
            </div> -->
            <h2 class="text-gray-800 font-semibold text-[24px] mt-2 leading-8 group-hover:underline">{{ post.name }}</h2>
            <p class="text-break text-black opacity-60 text-[16px] font-normal mt-2 tracking-normal">{{ post?.content?.perex }}</p>
        </div>
    </article>
    </NuxtLink>
</template>
<style>
.text-break {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>