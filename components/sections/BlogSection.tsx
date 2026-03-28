'use client'

import { useEffect, useState } from 'react'

type Post = {
  title: string
  excerpt: string
  link: string
  categories: string[]
  pubDate: string
  source: string
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/blog') 
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-24 section-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <div className="section-eyebrow">Thought Leadership</div>
          <h2 className="font-display font-bold mb-4 text-text">
            Writing
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Technical articles and insights on building production systems.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] max-w-[300px] card card-hover snap-start flex-shrink-0"
            >
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.slice(0, 1).map((cat, i) => (
                  <span key={i} className="badge text-xs">
                    {cat}
                  </span>
                ))}
                <span className="text-xs text-text-light">
                  {post.source}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-text-muted text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border-light">
                <span className="text-xs text-text-light">
                  {new Date(post.pubDate).toLocaleDateString()}
                </span>
                <i className="fas fa-arrow-right text-primary"></i>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Articles
            <i className="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  )
}