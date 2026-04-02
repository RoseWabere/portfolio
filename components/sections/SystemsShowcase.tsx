'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SystemCard from '@/components/SystemCard'
import { System } from '@/lib/systems'

interface SystemsShowcaseProps {
  systems: System[]
}

export default function SystemsShowcase({ systems }: SystemsShowcaseProps) {
  if (!systems || systems.length === 0) return null

  return (
    <section id="systems" className="py-24 section-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-eyebrow">Production Systems</div>
          <h2 className="font-display font-bold mb-4">Flagship Systems</h2>
          <p className="text-text-muted text-lg max-w-2xl">
            End-to-end intelligent systems demonstrating architecture decisions, 
            pipeline design, and real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <SystemCard key={system.slug} system={system} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            href="/systems"
            className="btn-ghost inline-flex items-center gap-2"
          >
            View All Systems
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}