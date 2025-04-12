import { useState } from '#imports'
import type { ISbStoryData, ISbStoriesParams } from '@storyblok/vue'

export function useStoryblokCache() {
  const storyblokApi = useStoryblokApi()
  
  // Define cache duration - 1 hour by default, can be overridden
  const CACHE_DURATION = 3600 * 1000 // 1 hour in ms
  
  // Create a reactive state for cache
  const getCache = () => {
    return useState<Record<string, { data: any, timestamp: number }>>('storyblok-cache', () => ({}))
  }
  
  /**
   * Get a story from Storyblok with caching
   * @param slug The story slug
   * @param params Optional parameters for the Storyblok API
   * @param cacheDuration Duration to cache the data in ms (default: 1 hour)
   */
  async function getStory(
    slug: string, 
    params: { version?: 'draft' | 'published' } & Record<string, any> = {}, 
    cacheDuration: number = CACHE_DURATION
  ): Promise<ISbStoryData> {
    const cacheKey = `storyblok-story-${slug}-${JSON.stringify(params)}`
    const cache = getCache()
    
    // Try to get from cache first
    if (cache.value[cacheKey]) {
      const { data, timestamp } = cache.value[cacheKey]
      // Check if cache is still valid
      if (Date.now() - timestamp < cacheDuration) {
        return data
      }
    }
    
    // If not in cache or expired, fetch from API
    try {
      const response = await storyblokApi.get(`cdn/stories/${slug}`, {
        version: process.dev ? 'draft' : 'published',
        ...params,
      })
      
      // Save to cache
      cache.value[cacheKey] = {
        data: response.data.story,
        timestamp: Date.now()
      }
      
      return response.data.story
    } catch (error) {
      console.error(`Error fetching story ${slug}:`, error)
      throw error
    }
  }
  
  /**
   * Get multiple stories from Storyblok with caching
   * @param params Parameters for the Storyblok API
   * @param cacheDuration Duration to cache the data in ms (default: 1 hour)
   */
  async function getStories(
    params: ISbStoriesParams = {}, 
    cacheDuration: number = CACHE_DURATION
  ): Promise<ISbStoryData[]> {
    const cacheKey = `storyblok-stories-${JSON.stringify(params)}`
    const cache = getCache()
    
    // Try to get from cache first
    if (cache.value[cacheKey]) {
      const { data, timestamp } = cache.value[cacheKey]
      // Check if cache is still valid
      if (Date.now() - timestamp < cacheDuration) {
        return data
      }
    }
    
    // If not in cache or expired, fetch from API
    try {
      const defaultParams = {
        version: process.dev ? 'draft' : 'published' as 'draft' | 'published',
      }

      const response = await storyblokApi.get('cdn/stories', {
        ...defaultParams,
        ...params,
      })
      
      // Save to cache
      cache.value[cacheKey] = {
        data: response.data.stories,
        timestamp: Date.now()
      }
      
      return response.data.stories
    } catch (error) {
      console.error('Error fetching stories:', error)
      throw error
    }
  }
  
  /**
   * Clear all Storyblok cache
   */
  function clearCache() {
    const cache = getCache()
    cache.value = {}
  }
  
  return {
    getStory,
    getStories,
    clearCache,
  }
} 