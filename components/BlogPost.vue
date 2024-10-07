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
defineProps<{
    post: {
        full_slug: string
        content: {
        image: {
            filename: string
        }
        }
        name: string
    }
}>()

</script>
<template>
<NuxtLink :to="'/' + post.full_slug">
    <article class="max-w-[410px] flex md:flex-col justify-start gap-x-2 hover:scale-[99%] transition ease-linear duration-75 group">
            <div class="xs:outline xs:outline-gray-200 outline-opacity-35 rounded-[6px] max-w-[140px] xs:max-w-[160px] md:max-w-none">
                    <NuxtImg :src="post.content.image.filename" class="w-full rounded-[6px]" />
            </div>
            <div class="flex justify-between mt-2 text-black opacity-60">
                <div class="flex items-center gap-x-2">
                     <p class="text-[13px]">Bryan Scott</p>
                     <!-- <p>•</p> -->
                    <!-- <p class="text-[13px]">Aug 2, 2023</p> -->
                </div>
                <div>
                    <p class="text-[13px]">Aug 2, 2023</p>
                    <!-- <p class="text-[14px]">10 min. read</p> -->
                </div>
            </div>
        <div class="max-w-[360px] flex flex-col xs:justify-between">
            <!-- <div class="flex gap-x-2">
                <span class="bg-green-400 rounded-xl px-4 py-3 text-[12px]">Mothers Day</span>
                <span class="bg-[#FF0060] rounded-xl px-4 py-3 text-[12px]">Female</span>
            </div> -->
            <h2 class="text-[#242449] font-medium md:font-semibold text-[18px] xs:text-[20px] md:text-[24px] md:mt-2 leading-6 md:leading-8 group-hover:underline">{{ post.name }}</h2>
            <div class="hidden xs:flex text-gray-500 items-baseline justify-start gap-x-2">
                <p class="text-[13px]">Bryan Scott</p>
                <span>•</span>
                <p class="text-[13px]">Aug 2, 2023</p>
            </div>
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