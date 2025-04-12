<script setup lang="ts">
type Provider = 'amazon' | 'ebay' | 'etsy' | 'shopify'

type Providers =
| {
    name: Extract<Provider, 'amazon'>
    img: `images/${Extract<Provider, 'amazon'>}_logo.png`
}
| {
    name: Extract<Provider, 'ebay'>
    img: `images/${Extract<Provider, 'ebay'>}_logo.png`
}
| {
    name: Extract<Provider, 'etsy'>
    img: `images/${Extract<Provider, 'etsy'>}_logo.png`
}
| {
    name: Extract<Provider, 'shopify'>
    img: `images/${Extract<Provider, 'shopify'>}_logo.png`
}

// type ButtonProps = {
//     link: string
//     // provider: 'amazon' | 'ebay' | 'etsy' | 'shopify'
// }

const props = defineProps<{
    link: string
}>()

</script>
<template>
     <NuxtLink :to="props.link" class="bg-[#d81926] min-w-[240px] max-w-[320px] flex items-end justify-center hover:bg-[#bc1621] hover:translate-y-[0.075rem] shadow-lg hover:shadow-none transition ease-linear duration-[90ms] gap-x-2 font-poppins font-semibold p-4 rounded-md tracking-[0.5px]">
        <span>
            <p class="text-base md:text-xl">Order from</p>
        </span>    
        <NuxtImg src="/images/amazon_logo.png" width="75" />
     </NuxtLink>
</template>