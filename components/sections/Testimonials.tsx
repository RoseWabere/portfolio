'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Rose built a compliance dashboard that cut our reporting time from 5 days to 4 hours. Her governance-first mindset saved us from multiple audit risks.",
    author: "Jane Mwangi",
    role: "Head of Risk, Kenyan Bank (name anonymized)",
    company: "Confidential"
  },
  // Add more as you get them
]

export default function Testimonials() {
  return (
    <section className="py-20 section-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow">Trusted By</div>
          <h2 className="font-display text-4xl font-bold mb-4">What Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <i className="fas fa-quote-left text-primary text-2xl mb-4 opacity-50"></i>
              <p className="text-text-muted italic mb-4">"{t.quote}"</p>
              <div className="font-semibold text-text">{t.author}</div>
              <div className="text-sm text-text-muted">{t.role}, {t.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}