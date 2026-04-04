'use client'

import { motion } from 'framer-motion'
import { education, certifications } from '@/lib/data'
import Link from 'next/link'

export default function EducationSummary() {
  // Take the highest degree only (first item)
  const primaryDegree = education[0]

  return (
    <section id="education" className="py-16 section-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="section-eyebrow">Education & Certifications</div>
          <h2 className="font-display text-3xl font-bold mb-2">Academic Background</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-text-muted">
              {primaryDegree?.degree} – {primaryDegree?.institution} ({primaryDegree?.endDate})
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {certifications.slice(0, 3).map(cert => (
                <span key={cert.id} className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <i className="fas fa-certificate text-[10px]"></i> {cert.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
            >
              View full education & certifications <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}