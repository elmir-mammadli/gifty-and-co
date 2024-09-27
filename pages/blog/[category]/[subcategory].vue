<!-- <template>
  <p class="text-[40px] text-black">{{ route.params.category }} - {{ route.params }}</p>
  <h1 class="text-[40px] text-black">Elmir</h1>
</template>
<script setup lang="ts">
const route = useRoute()

console.log('Route', route.params);

</script> -->

<script setup lang="ts">
import BlogPost from '~/components/BlogPost.vue';
const blog = ref<[]>([])
const storyblok = useStoryblokApi()


const route = useRoute()
console.log('RouteElmir', route.params);


const category = route.params.category
const subcategory = route.params.subcategory
console.log('Routsse', `blog/${category}/${subcategory}`);
console.log('Routsse', route.params);


async function getPosts () {
  const res = await storyblok.get('cdn/stories', {
    starts_with: `blog/${category}/${subcategory}`,
    version: 'draft'
  })
  blog.value = res.data.stories
}

onMounted(() => {
  return getPosts()
})
</script>

<template>
  <div class="flex flex-col justify-center">
    <TransitionGroup name="list" tag="div" class="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-y-12 px-5 md:px-0 mt-12">
      <BlogPost 
      v-for="(post, index) in blog" 
      :key="index"
      :post="post" />
    </TransitionGroup>
  </div>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>