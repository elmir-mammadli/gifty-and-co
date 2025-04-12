<script setup lang="ts">
import { useMetaTags } from '~/composables/useMetaTags';

const route = useRoute();
const { getStory } = useStoryblokCache();
const { setProductMeta } = useMetaTags();

// Get the product data
const product = await getStory(
  `products/${route.params.slug}`, 
  { version: 'draft' },
  3600 * 1000 // Cache for 1 hour
);

// Set meta tags and structured data for the product
setProductMeta({
  name: product.name,
  description: product.content?.description,
  image: product.content?.image,
  price: product.content?.price,
  brand: product.content?.brand,
  category: product.content?.category,
  fullSlug: product.full_slug
});

// Format price with dollar sign
const formattedPrice = computed(() => {
  if (!product.content?.price) return '';
  return `$${product.content.price}`;
});

// Handle affiliate link click
function trackAffiliateClick() {
  // You can add analytics tracking here if needed
  console.log('Affiliate link clicked');
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
      <!-- Product image -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="rounded-lg overflow-hidden">
          <img 
            v-if="product.content?.image?.filename" 
            :src="product.content.image.filename" 
            :alt="product.name" 
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product details -->
      <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ product.name }}</h1>
        
        <!-- Price -->
        <div class="mt-3">
          <p class="text-3xl text-gray-900">{{ formattedPrice }}</p>
        </div>

        <!-- Description -->
        <div class="mt-6">
          <h3 class="sr-only">Description</h3>
          <div class="text-base text-gray-700 space-y-6" v-html="product.content?.description"></div>
        </div>

        <!-- Features -->
        <div class="mt-8" v-if="product.content?.features?.length">
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
            <div class="mt-4">
              <ul class="pl-4 list-disc text-sm space-y-2">
                <li v-for="(feature, index) in product.content.features" :key="index" class="text-gray-700">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Affiliate button -->
        <div class="mt-10">
          <a 
            :href="product.content?.affiliate_link" 
            target="_blank" 
            rel="nofollow noopener"
            @click="trackAffiliateClick"
            class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View on Amazon
          </a>
          <p class="mt-2 text-sm text-gray-500">
            *As an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>

        <!-- Brand -->
        <div class="mt-8" v-if="product.content?.brand">
          <h3 class="text-sm font-medium text-gray-900">Brand</h3>
          <p class="mt-1 text-sm text-gray-700">{{ product.content.brand }}</p>
        </div>
      </div>
    </div>

    <!-- Related products -->
    <div class="mt-16 pt-10 border-t border-gray-200" v-if="product.content?.related_products?.length">
      <h2 class="text-xl font-bold text-gray-900">Related Products</h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- Related product card -->
        <div v-for="(related, index) in product.content.related_products" :key="index" class="group relative">
          <!-- Card content goes here -->
        </div>
      </div>
    </div>
  </div>
</template> 