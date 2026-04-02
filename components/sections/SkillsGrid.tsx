'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export default function SkillsGrid() {
  return (
    <section className="py-24 section-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="section-eyebrow">Technical Skills</div>
          <h2 className="font-display text-4xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Production‑ready skills across the modern data stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techList], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="card"
            >
              <h3 className="font-display text-xl font-bold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techList.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}