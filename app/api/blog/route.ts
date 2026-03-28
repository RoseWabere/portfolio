import { getAllBlogPosts } from '@/lib/rss'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllBlogPosts()
  return NextResponse.json(posts.slice(0, 6)) // limit for homepage
}