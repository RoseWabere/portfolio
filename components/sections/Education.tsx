'use client'

import { motion } from 'framer-motion'
import { education, certifications } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-24 section-gray">
      <div className="container mx-auto px-6">
        {/* Education */}
        <div className="mb-16">
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="font-display text-4xl font-bold mb-12">Education</h2>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card mb-6"
            >
              <h3 className="font-display text-xl font-bold mb-2">{edu.degree}</h3>
              <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                {edu.institution}
              </div>
              <div className="text-sm text-text-muted mb-3">
                {edu.startDate} - {edu.endDate} · {edu.location}
              </div>
              <p className="text-text-muted">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-certificate text-primary-600 dark:text-primary-400 text-xl"></i>
                </div>
                <h4 className="font-semibold text-text mb-2">{cert.name}</h4>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">{cert.issuer}</p>
                <p className="text-xs text-text-muted mb-3">{cert.date}</p>
                <p className="text-sm text-text-muted">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}