// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', 
    '@nuxt/image', 
    'nuxt-icons',
    ['@storyblok/nuxt', { accessToken: 'w1uPNOeL4KxHkC8llyZzDAtt' }],
  ],
  image: {
    screens: {
      sm: 639,
      md: 867,
      lg: 1023,
      xl: 1279,
      rD: 1359,
      '2rD': 1439,
      xxl: 1599,
      '3xl': 1919
    },
    densities: [1, 2, 3],
    format: ['webp'],
    quality: 80
  },
  app:{
    head: {
      link: [
        // Poppins font
        {
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
          rel: 'stylesheet'
        },
        // Oswald font
        {
          href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap',
          rel: 'stylesheet'
        }
      ],
    },
  }
})
