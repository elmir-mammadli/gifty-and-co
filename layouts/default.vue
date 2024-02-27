<script setup lang="ts">

</script>
<template>
  <div class="bg font-poppins">
    <Navbar />
    <Hero />
  <div>
    <slot />
  </div>
  </div>
</template>
<style>
.bg {
  background-image: linear-gradient(
  180deg,
  hsl(240deg 6% 93%) -1%,
  hsl(295deg 57% 95%) 9%,
  hsl(350deg 100% 98%) 86%
);
}
</style>