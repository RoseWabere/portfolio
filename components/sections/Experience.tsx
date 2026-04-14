'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-eyebrow">Professional Background</div>
          <h2 className="font-display text-4xl font-bold mb-4">Experience</h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Building production data systems across financial services, NGOs, and enterprises in Kenya and globally.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-text mb-1">
                    {exp.position}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {exp.company}
                  </div>
                  <div className="text-sm text-text-muted flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-xs"></i>
                    {exp.location}
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  {exp.current ? (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Current
                    </span>
                  ) : (
                    <span className="text-sm text-text-muted">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-text-muted mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text mb-2">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1 text-xs"></i>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background dark:bg-surface border border-border rounded text-xs text-text-muted"
                  >
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
