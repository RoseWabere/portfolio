import { getAllSystems, categorizeSystem } from '@/lib/systems'
import SystemCard from '@/components/SystemCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems | Rose Wabere',
  description: 'Production-grade data and AI systems demonstrating end-to-end engineering capability.',
}

export default function SystemsPage() {
  const systems = getAllSystems()  // gets all systems from MDX

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary uppercase text-xs font-semibold tracking-wider">
              Production Systems
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
            All Systems
          </h1>
          <p className="text-text-muted text-xl max-w-3xl leading-relaxed">
            End-to-end intelligent systems across data engineering, AI/ML, and real-time analytics. 
            Each demonstrates architecture decisions, pipeline design, and measurable business impact.
          </p>
        </div>

        {/* All Systems Grid – no separation into featured/other */}
        {systems.length > 0 ? (
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((system, index) => (
                <SystemCard key={system.slug} system={system} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center border border-border rounded-xl">
            <p className="text-text-muted">No systems found. Add MDX files to <code className="bg-surface px-2 py-1 rounded">content/systems/</code>.</p>
          </div>
        )}

        {/* Categories Overview – stays as before */}
        <div className="mt-20 p-8 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="font-display text-2xl font-bold mb-4">System Categories</h3>
          <p className="text-text-muted mb-6">
            Systems organized by technical domain and capability.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {['AI & ML', 'Data Engineering', 'Real-time', 'Analytics', 'Geospatial'].map(category => {
              const count = systems.filter(s => 
                categorizeSystem(s).includes(category)
              ).length
              
              return (
                <div 
                  key={category}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="font-semibold text-white mb-1">{category}</div>
                  <div className="text-sm text-dark-400">{count} systems</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
