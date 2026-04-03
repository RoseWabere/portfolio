'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HireMe() {
  return (
    <section className="py-16 section-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <i className="fas fa-briefcase"></i>
            <span className="text-sm font-semibold">Open to Work</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            I’m available for <span className="text-primary">Data Engineering roles</span>
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Full‑time · Remote · Hybrid (Nairobi) · Contract
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="btn-primary">
              Hire Me
            </Link>
            <a href="/Rose_Wabere_CV.pdf" download className="btn-outline flex items-center gap-2">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}