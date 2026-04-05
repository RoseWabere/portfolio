/**
 * RSS Feed Parser
 * Aggregates blog posts from Medium, Dev.to, and other sources
 */

import Parser from 'rss-parser'

interface BlogPost {
  title: string
  link: string
  pubDate: string
  content: string
  excerpt: string
  categories: string[]
  source: 'medium' | 'devto' | 'custom'
}

const parser = new Parser()

/**
 * Parse Medium RSS feed
 */
export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const mediumRSS = process.env.MEDIUM_RSS_URL || 'https://medium.com/feed/@rosewabere'
    
    const feed = await parser.parseURL(mediumRSS)
    
    return feed.items.map(item => ({
      image: item['media:content']?.url || '',
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      content: item.content || '',
      excerpt: extractExcerpt(item.content || ''),
      categories: item.categories || [],
      source: 'medium' as const,
    }))
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return []
  }
}

/**
 * Fetch Dev.to posts via API
 */
export async function getDevToPosts(): Promise<BlogPost[]> {
  try {
    const username = process.env.DEVTO_USERNAME || 'rosewabere'
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    )

    if (!response.ok) {
      throw new Error(`Dev.to API error: ${response.status}`)
    }

    const articles = await response.json()
    
    return articles.map((article: any) => ({
      image: article.cover_image || '',
      title: article.title,
      link: article.url,
      pubDate: article.published_at,
      content: article.description,
      excerpt: article.description,
      categories: article.tag_list || [],
      source: 'devto' as const,
    }))
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error)
    return []
  }
}

/**
 * Get all blog posts from all sources, sorted by date
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const [mediumPosts, devtoPosts] = await Promise.all([
      getMediumPosts(),
      getDevToPosts(),
    ])

    const allPosts = [...mediumPosts, ...devtoPosts]
    
    // Sort by date, newest first
    return allPosts.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    })
  } catch (error) {
    console.error('Error aggregating blog posts:', error)
    return []
  }
}

/**
 * Extract clean excerpt from HTML content
 */
function extractExcerpt(html: string, maxLength: number = 200): string {
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, '')
  
  // Decode HTML entities
  const decoded = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
  
  // Truncate to maxLength
  if (decoded.length <= maxLength) {
    return decoded
  }
  
  return decoded.substring(0, maxLength).trim() + '...'
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
