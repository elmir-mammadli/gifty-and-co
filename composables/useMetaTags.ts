import type { UseSeoMetaInput } from '@unhead/schema'

/**
 * Composable for managing meta tags and structured data for products
 */
export function useMetaTags() {
  
  /**
   * Set product meta tags and structured data
   * @param product Product data
   */
  function setProductMeta(product: {
    name: string
    description?: string
    image?: { filename: string }
    price?: string | number
    category?: string
    brand?: string
    slug?: string
    fullSlug?: string
  }) {
    // Basic meta tags
    const metaInput: UseSeoMetaInput = {
      title: product.name,
      description: product.description || `Check out ${product.name} and other great gift ideas`,
      ogTitle: product.name,
      ogDescription: product.description || `Check out ${product.name} and other great gift ideas`,
      ogImage: product.image?.filename || '',
      twitterCard: 'summary_large_image',
    }
    
    // Set basic meta tags
    useSeoMeta(metaInput)
    
    // Create the structured data for the product
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description || `Check out ${product.name} and other great gift ideas`,
      image: product.image?.filename || '',
      ...(product.brand && { brand: {
        '@type': 'Brand',
        name: product.brand
      }}),
      ...(product.price && { offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://${useRuntimeConfig().public.siteUrl}/${product.fullSlug || product.slug || ''}`
      }}),
      ...(product.category && { category: product.category })
    }
    
    // Add structured data as JSON-LD script
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData)
        }
      ]
    })
  }
  
  /**
   * Set blog post meta tags and structured data
   * @param post Blog post data
   */
  function setBlogMeta(post: {
    title: string
    description?: string
    image?: { filename: string }
    author?: string
    publishDate?: string
    slug?: string
    fullSlug?: string
    category?: string
  }) {
    // Basic meta tags
    const metaInput: UseSeoMetaInput = {
      title: post.title,
      description: post.description || `Read about ${post.title} and discover great gift ideas`,
      ogTitle: post.title,
      ogDescription: post.description || `Read about ${post.title} and discover great gift ideas`,
      ogImage: post.image?.filename || '',
      twitterCard: 'summary_large_image',
    }
    
    // Set basic meta tags
    useSeoMeta(metaInput)
    
    // Create the structured data for the blog post
    const articleData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description || `Read about ${post.title} and discover great gift ideas`,
      image: post.image?.filename || '',
      datePublished: post.publishDate || new Date().toISOString(),
      ...(post.author && { author: {
        '@type': 'Person',
        name: post.author
      }}),
      ...(post.category && { articleSection: post.category })
    }
    
    // Add structured data as JSON-LD script
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(articleData)
        }
      ]
    })
  }
  
  /**
   * Set category page meta tags
   * @param category Category data
   */
  function setCategoryMeta(category: {
    name: string
    description?: string
    image?: { filename: string }
  }) {
    // Basic meta tags
    const metaInput: UseSeoMetaInput = {
      title: `${category.name} Gift Ideas | Find the Perfect Present`,
      description: category.description || `Browse our selection of ${category.name} gift ideas to find the perfect present for your loved ones.`,
      ogTitle: `${category.name} Gift Ideas | Find the Perfect Present`,
      ogDescription: category.description || `Browse our selection of ${category.name} gift ideas to find the perfect present for your loved ones.`,
      ogImage: category.image?.filename || '',
      twitterCard: 'summary_large_image',
    }
    
    // Set basic meta tags
    useSeoMeta(metaInput)
    
    // Create the structured data for the category page
    const collectionData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${category.name} Gift Ideas`,
      description: category.description || `Browse our selection of ${category.name} gift ideas to find the perfect present for your loved ones.`
    }
    
    // Add structured data as JSON-LD script
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(collectionData)
        }
      ]
    })
  }
  
  /**
   * Set homepage meta tags
   */
  function setHomeMeta(data?: {
    title?: string
    description?: string
    image?: string
  }) {
    const title = data?.title || 'Gifty & Co | Find the Perfect Gift for Every Occasion'
    const description = data?.description || 'Discover carefully curated gift ideas for everyone in your life. Find the perfect presents for birthdays, holidays, and special occasions.'
    
    // Basic meta tags
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: data?.image || '',
      twitterCard: 'summary_large_image',
    })
    
    // Create the structured data for the homepage
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Gifty & Co',
      description,
      url: useRuntimeConfig().public.siteUrl
    }
    
    // Add structured data as JSON-LD script
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(websiteData)
        }
      ]
    })
  }
  
  return {
    setProductMeta,
    setBlogMeta,
    setCategoryMeta,
    setHomeMeta
  }
} 