import { getAllBlogPosts, formatDate } from '@/lib/rss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Rose Wabere',
  description: 'Technical articles, data insights, and perspectives on building data systems.',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary uppercase text-xs font-semibold tracking-wider">
              Thought Leadership
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-black mb-6 text-text">
            Writing
          </h1>

          <p className="text-text-muted text-xl max-w-3xl leading-relaxed">
            Technical articles, data insights, and perspectives on building production data systems for Africa.
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length === 0 ? (
          <div className="p-12 bg-surface border border-border rounded-xl text-center">
            <i className="fas fa-pen-nib text-4xl text-text-muted mb-4"></i>
            <p className="text-text-muted">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group block"
              >
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 2).map((category, i) => (
                    <span key={i} className="badge text-xs">
                      {category}
                    </span>
                  ))}
                  <span className="text-xs text-text-light">
                    {post.source}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <span className="text-xs text-text-light">
                    {formatDate(post.pubDate)}
                  </span>
                  <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}