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

</script>

<template>
    <nav class="hidden md:flex justify-center items-center max-w-screen-rD mx-auto pt-6 px-5">
        <NuxtLink to="/" class="flex gap-x-1.5 items-center justify-center me-auto">
            <NuxtIcon name="color" class="text-[36px] mt-[7px]" filled />
            <p class="text-gray-800 font-semibold text-[24px] font-poppins tracking-tight">Gifty & Co.</p>
        </NuxtLink>
        <ul class="flex gap-x-10 text-gray-800 text-lg font-normal">
            <li
                class="relative"
                v-for="route in routesData"
                :key="route.path"
            >
                <button
                @click="toggleDropdown(route.label)"
                class="relative p-2 text-black opacity-60 hover:underline font-medium hover:text-[#FF0060]"
                >
                    {{ route.label }}
                </button>
                <span v-if="route.label === routesData[routesData.length - 1].label" class="absolute -right-6 -top-3 bg-[#FF0060] text-white text-[11px] font-semibold px-[6px] rounded-xl">HOT</span>
                <span 
                v-if="openDropdown === route.label" 
                class="absolute max-w-[200px] w-max left-2 top-12 p-2 bg-gray-50 shadow-sm border border-1 rounded-lg z-[9999]">
                    <div
                    v-for="dropdown in route.dropdown?.elements"
                    :key="dropdown.path"
                    class="block p-2 text-black opacity-60 hover:underline font-medium hover:text-[#FF0060]"
                    >
                        <NuxtLink :to="linkConcatenator(dropdown.path)" @click="closeDropdown()">
                            {{ dropdown.label }}
                        </NuxtLink>
                     </div>
                </span>
            </li>
        </ul>
    </nav>
</template>
