<script lang="ts" setup>

interface Props {
    post: {
        full_slug: string
        content: {
        image: {
            filename: string
        }}
        name: string
    }
}
const props = defineProps<Props>()
const optimizedImage = `${props.post.content.image.filename}/m/filters:quality(5)`
// console.log('Log it:', optimizedImage)
// console.log('Log it2:', optimizedImage)

const fullSlug = props.post.full_slug



</script>
<template>
<NuxtLink 
:to="'/' + fullSlug" 
>
    <article class="flex flex-col justify-start gap-x-2 hover:scale-[99%] transition ease-linear duration-75 group mb-6">
            <div class="xs:outline xs:outline-gray-200 outline-opacity-35 rounded-[6px]">
                    <NuxtImg :src="optimizedImage" class="w-auto rounded-[6px]" />
            </div>

        <div class="flex flex-col xs:justify-between">
            <!-- <div class="flex gap-x-2">
                <span class="bg-green-400 rounded-xl px-4 py-3 text-[12px]">Mothers Day</span>
                <span class="bg-[#FF0060] rounded-xl px-4 py-3 text-[12px]">Female</span>
            </div> -->
            <h2 class="text-[#242449] font-medium md:font-semibold text-[18px] sm:text-[20px] md:text-[24px] mt-2 sm:mt-4 leading-6 md:leading-8 group-hover:underline">{{ post.name }}</h2>
            <div class="hidden xs:flex text-gray-500 items-baseline justify-start gap-x-2">
                <!-- <p class="text-[13px]">Bryan Scott</p>
                <span>•</span> -->
                <p class="text-[13px] text-blue-600">August 2, 2023</p>
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