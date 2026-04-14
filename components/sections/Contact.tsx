'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 section-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow">Let’s Work Together</div>

          <h2 className="font-display text-4xl font-bold mb-4">
            Let’s build something impactful
          </h2>

          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
            Whether you're hiring, building, or scaling — I design systems that move data into decisions.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-half">
            <i className="fas fa-bolt text-blue-600"></i>
            <span className="text-sm text-amber-800 font-medium">
              Open to roles & high-impact projects
            </span>
          </div>
        </motion.div>

        {/* CONTACT OPTIONS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">

          {/* WHATSAPP (PRIMARY FASTEST) */}
          <a
            href="https://wa.me/254708486104?text=Hi%20Rose%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover text-center group"
          >
            <i className="fab fa-whatsapp text-4xl text-emerald-600 mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-semibold text-lg mb-2">
              Talk to me (Fastest)
            </h3>
            <p className="text-sm text-text-muted">
              Quick questions? I usually reply within an hour.
            </p>
          </a>

          {/* EMAIL (PRIMARY CTA) */}
          <a
            href="mailto:rosewabere1@gmail.com?subject=Project%20Inquiry%20—%20[Your%20Name]&body=Hi%20Rose%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20discuss..."
            className="card card-hover text-center group border-2 border-primary"
          >
            <i className="fas fa-envelope text-4xl text-primary mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-semibold text-lg mb-2">
              Start a conversation
            </h3>
            <p className="text-sm text-text-muted">
              Best for detailed discussions, roles, or collaborations.
            </p>
          </a>

          {/* CALENDLY (SECONDARY) */}
          <a
            href="https://calendly.com/rosewabere/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover text-center group"
          >
            <i className="fas fa-calendar-check text-4xl text-blue-600 mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-semibold text-lg mb-2">
              Schedule a call
            </h3>
            <p className="text-sm text-text-muted">
              Prefer structure? Book a 30-min call.
            </p>
          </a>
        </div>

        {/* PRIMARY EMAIL CTA (CENTERED) */}
        <div className="text-center mb-8">
          <a
            href="mailto:rosewabere1@gmail.com?subject=Engagement%20Inquiry%20—%20[Your%20Name]&body=Hi%20Rose%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20discuss..."
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <i className="fas fa-paper-plane"></i>
            Start a conversation
          </a>

          <p className="text-sm text-text-muted mt-3">
            Typically respond within 24 hours
          </p>
        </div>

        {/* FALLBACK EMAIL */}
        <div className="text-center">
          <p className="text-sm text-text-muted">
            Or email me directly at{' '}
            <span className="text-primary font-medium">
              rosewabere1@gmail.com
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}