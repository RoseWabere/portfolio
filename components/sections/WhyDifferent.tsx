'use client'

import { motion } from 'framer-motion'

export default function WhyDifferent() {
  return (
    <section className="py-20 bg-primary/5 section-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-eyebrow">Why I'm Different</div>
          <h2 className="font-display text-4xl font-bold mb-4">
            What You Get Beyond the Tech Stack
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Three edges that make me a better hire for data‑intensive roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-shield-alt text-primary text-2xl"></i>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Governance‑First Engineering</h3>
            <p className="text-text-muted text-sm">
              Criminology background means I build data systems that understand compliance,
              audit trails, and regulatory risk from day one. No “retrofit governance” later.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-globe-africa text-primary text-2xl"></i>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Africa‑Context Systems</h3>
            <p className="text-text-muted text-sm">
              4 years building for Kenya and East Africa means I understand infrastructure
              constraints, local regulatory frameworks, and real‑world business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-rocket text-primary text-2xl"></i>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Ship, Don't Just Code</h3>
            <p className="text-text-muted text-sm">
              8 production systems deployed, not 8 GitHub repos. I build systems that go live,
              stay live, and deliver measurable business impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}