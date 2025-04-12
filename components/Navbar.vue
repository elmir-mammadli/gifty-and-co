<script setup lang="ts">
import { routesData } from './navigation/routesData';

const openDropdown = ref<string | null>(null);


const toggleDropdown = (label: string) => {
    openDropdown.value = openDropdown.value === label ? null : label;
}

const closeDropdown = () => {
    openDropdown.value = null;
}

const linkConcatenator = (link: string) => {
    return '/blog/' + link
}
const router = useRouter()
const exceptionTrendingClickHandler = (path: string) => {
    if (path === '/trending') {
        router.push('/blog/trending')
    }
}

</script>

<template>
    <nav class="hidden md:flex justify-center items-center max-w-screen-rD mx-auto pt-7 px-5">
        <NuxtLink to="/" class="flex gap-x-1.5 items-center justify-center me-auto">
            <NuxtIcon name="color" class="text-[36px] mt-[7px]" filled />
            <p class="text-gray-800 font-semibold text-[24px] font-poppins tracking-tight">Gifty & Co.</p>
        </NuxtLink>
        <ul class="flex gap-x-10 text-gray-800 text-lg font-normal">
            <li
                class="relative group"
                v-for="route in routesData"
                :key="route.path"
            >
                <ul>
                    <li>
                <button
                @mouseenter="toggleDropdown(route.label)"
                @click="exceptionTrendingClickHandler(route.path)"
                class="relative p-2 text-black bg-opacity-90 hover:underline hover:top-1 hover:left-1 ease-linear duration-200 hover:text-[#FBFBFB] font-medium rounded-xl px-4 border-[2px] border-black z-30"
                :style="`background-color: ${route.color}`"
                >
                    {{ route.label }}
                </button>
            </li>
                </ul>
                <span class="absolute w-full h-full top-1 left-1 group-hover:top-1 rounded-xl px-4 border-[2px] group-hover:border-0 border-black/80 z-0 bg-black/80 ease-linear duration-100"></span>
                <!-- <span v-if="route.label === routesData[routesData.length - 1].label" class="absolute -right-6 -top-3 bg-[#FF0060] text-white text-[11px] font-semibold px-[6px] rounded-xl">HOT</span> -->
                <div
                v-if="openDropdown === route.label && route.path !== '/trending'" 
                class="absolute max-w-[200px] w-max left-2 top-16 p-2 shadow-sm outline outline-[2px] rounded-lg z-[9999]"
                :style="`background-color: ${route.color}`"
                >
                <div
                    v-for="dropdown in route.dropdown?.elements"
                    :key="dropdown.path"
                    class="block p-2 text-black font-medium hover:text-[#FBFBFB]"
                    >
                        <NuxtLink :to="linkConcatenator(dropdown.path)" @click="closeDropdown()">
                            {{ dropdown.label }}
                        </NuxtLink>
                     </div>
                    </div>
            </li>
        </ul>
    </nav>
</template>
