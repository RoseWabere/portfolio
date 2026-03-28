/**
 * GitHub API Integration
 * Fetches repository data and user stats
 */

const GITHUB_USERNAME = 'Rozieroz'
const GITHUB_API = 'https://api.github.com'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  topics: string[]
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }
    
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      console.error('GitHub API error:', response.status)
      return []
    }

    const repos: GitHubRepo[] = await response.json()
    
    return repos
      .filter(repo => !repo.name.includes('config') && repo.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}
