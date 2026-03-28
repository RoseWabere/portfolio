/**
 * Systems Data Management
 * Handles MDX parsing and system metadata
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface System {
  slug: string
  title: string
  badge: string
  role: string
  description: string
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  impact: string
  image?: string
  content?: string
}

const systemsDirectory = path.join(process.cwd(), 'content/systems')

/**
 * Get all system slugs
 */
export function getAllSystemSlugs(): string[] {
  try {
    if (!fs.existsSync(systemsDirectory)) {
      console.warn('Systems directory not found:', systemsDirectory)
      return []
    }
    const files = fs.readdirSync(systemsDirectory)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading systems directory:', error)
    return []
  }
}

/**
 * Get system data by slug
 */
export function getSystemBySlug(slug: string): System | null {
  try {
    const fullPath = path.join(systemsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) return null
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      badge: data.badge,
      role: data.role,
      description: data.description,
      stack: data.stack || [],
      liveUrl: data.liveUrl,
      githubUrl: data.githubUrl,
      featured: data.featured || false,
      impact: data.impact,
      image: data.image,           
      content,
    }
  } catch (error) {
    console.error(`Error reading system ${slug}:`, error)
    return null
  }
}

/**
 * Get all systems
 */
export function getAllSystems(): System[] {
  const slugs = getAllSystemSlugs()
  const systems = slugs
    .map(slug => getSystemBySlug(slug))
    .filter((system): system is System => system !== null)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  return systems
}

/**
 * Get featured systems only
 */
export function getFeaturedSystems(): System[] {
  return getAllSystems().filter(system => system.featured)
}

/**
 * System categories for filtering
 */
export const SYSTEM_CATEGORIES = {
  'AI & ML': ['RAG', 'LangChain', 'OpenAI', 'ML', 'AI'],
  'Data Engineering': ['ETL', 'Pipeline', 'Airflow', 'dbt', 'PySpark'],
  'Real-time': ['Streaming', 'Real-time', 'Kafka'],
  'Analytics': ['BI', 'Dashboard', 'Grafana', 'Power BI'],
  'Geospatial': ['GIS', 'PostGIS', 'Maps'],
}

/**
 * Categorize a system based on its stack and badge
 */
export function categorizeSystem(system: System): string[] {
  const categories: string[] = []
  const searchText = `${system.badge} ${system.stack.join(' ')}`.toLowerCase()

  Object.entries(SYSTEM_CATEGORIES).forEach(([category, keywords]) => {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      categories.push(category)
    }
  })

  return categories.length > 0 ? categories : ['Other']
}
