// https://nuxt.com/docs/api/configuration/nuxt-config

import { _backgroundColor } from "#tailwind-config/theme"

const storyblokAccesstoken = 'w1uPNOeL4KxHkC8llyZzDAtt'
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    ['@storyblok/nuxt', { accessToken: storyblokAccesstoken }],
    "@nuxt/scripts",
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://giftyand.co',
  },

  sitemap: {
    hostname: 'https://giftyand.co',
    gzip: true,
  },
  
  runtimeConfig: {
    public: {
      siteUrl: 'giftyand.co'
    }
  },

  imports: {
    autoImport: true
  },

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
    densities: [1, 2],
    format: ['webp'],
    quality: 80
  },

  ssr: true,

  nitro: {
    storage: {
      cache: {
        driver: 'fs',
        base: './.cache',
      },
      storyblok: {
        driver: 'fs',
        base: './.cache/storyblok'
      }
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog/*'],
    },
    routeRules: {
      // Homepage - SSR with cache
      '/': { 
        cache: { 
          maxAge: 60 * 60, // 1 hour
          staleMaxAge: 24 * 60 * 60, // 1 day as stale (serve while revalidating)
          swr: true // Stale-while-revalidate
        }
      },
      // Product pages - SSR with cache
      '/products/**': { 
        cache: { 
          maxAge: 60 * 30, // 30 minutes
          staleMaxAge: 24 * 60 * 60, // 1 day
          swr: true,
        }
      },
      // Blog pages - SSR with cache
      '/blog/**': { 
        cache: { 
          maxAge: 60 * 60, // 1 hour
          staleMaxAge: 24 * 60 * 60, // 1 day
          swr: true,
        }
      },
      // API routes - SSR with short cache
      '/api/**': { 
        cache: { 
          maxAge: 60 * 5, // 5 minutes
          swr: true 
        }
      },
      // Static assets - cache headers
      '/_nuxt/**': { 
        headers: { 
          'cache-control': 'public, max-age=31536000, immutable' 
        }
      },
      // Images - cache headers
      '/images/**': { 
        headers: { 
          'cache-control': 'public, max-age=31536000, immutable' 
        }
      }
    }
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
        },
        // Space Grotesk font
        {
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
          rel: 'stylesheet'
        },
      ],
      bodyAttrs: {
        style: 'background-color: white;'
      }
    }
  },
})