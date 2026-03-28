import { getAllSystems, categorizeSystem } from '@/lib/systems'
import SystemCard from '@/components/SystemCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems | Rose Wabere',
  description: 'Production-grade data and AI systems demonstrating end-to-end engineering capability.',
}

export default function SystemsPage() {
  const systems = getAllSystems()
  const featured = systems.filter(s => s.featured)
  const other = systems.filter(s => !s.featured)

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-primary-500"></div>
            <span className="text-primary-500 uppercase text-xs font-semibold tracking-wider">
              Production Systems
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
            All Systems
          </h1>
          <p className="text-dark-400 text-xl max-w-3xl leading-relaxed">
            End-to-end intelligent systems across data engineering, AI/ML, and real-time analytics. 
            Each demonstrates architecture decisions, pipeline design, and measurable business impact.
          </p>
        </div>

        {/* Featured Systems */}
        {featured.length > 0 && (
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <span>Flagship Systems</span>
              <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-400">
                Featured
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((system, index) => (
                <SystemCard key={system.slug} system={system} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Systems */}
        {other.length > 0 && (
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">
              Additional Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {other.map((system, index) => (
                <SystemCard 
                  key={system.slug} 
                  system={system} 
                  index={featured.length + index} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Categories Overview */}
        <div className="mt-20 p-8 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="font-display text-2xl font-bold mb-4">System Categories</h3>
          <p className="text-dark-400 mb-6">
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
