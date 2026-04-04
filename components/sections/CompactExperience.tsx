'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import Link from 'next/link'

export default function CompactExperience() {
  // Take only the most recent 3 experiences (or all if less)
  const recentExperience = experience.slice(0, 3)

  return (
    <section id="experience" className="py-16 section-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="section-eyebrow">Work History</div>
          <h2 className="font-display text-3xl font-bold mb-2">Experience Snapshot</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            4+ years building production data systems across fintech, civic tech, and environmental sectors.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {recentExperience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-border pb-4 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-text">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-text-muted">
                    {exp.startDate} – {exp.endDate} · {exp.location}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-text-muted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs px-2 py-0.5 bg-background border border-border rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            View full experience history <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}