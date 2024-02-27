<script setup lang="ts">
import { routesData } from './navigation/routesData';
</script>
<template>
        <nav class="max-w-screen-xl mx-auto flex justify-center items-center pt-6">
            <NuxtLink to="/" class="flex gap-x-1.5 items-center justify-center me-auto">
                <NuxtIcon name="color" class="text-[36px] mt-[7px]" filled />
                <p class="text-gray-800 font-semibold text-[24px] font-poppins tracking-tight">Gifty & Co.</p>
            </NuxtLink>
        <ul class="flex gap-x-10 text-gray-800 text-lg font-normal">
        <li class="" v-for="route in routesData" :key="route.path">
            <NuxtLink class="p-2 text-white rounded-md" :style="{backgroundColor: route.color}" :to="route.path">{{ route.label }}</NuxtLink>
        </li>
        </ul>
    </nav>
</template>