'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch('https://formspree.io/f/mojpkedn', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      if (response.ok) {
        setFormStatus('success')
        e.currentTarget.reset()
      } else setFormStatus('error')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 section-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-eyebrow">Let's Talk</div>
          <h2 className="font-display text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
            Available for immediate start. Response within 24 hours.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
            <i className="fas fa-calendar-check text-amber-600"></i>
            <span className="text-sm text-amber-800 font-medium">
              Currently interviewing – book a call before slots fill
            </span>
          </div>
        </motion.div>

        {/* Three contact methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <a
            href="https://calendly.com/rosewabere/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover text-center group"
          >
            <i className="fas fa-video text-4xl text-primary mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-semibold text-lg mb-2">Book 30‑min Call</h3>
            <p className="text-sm text-text-muted">Fastest way to discuss opportunities</p>
          </a>

          <a
            href="https://wa.me/254708486104?text=Hi%20Rose%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk."
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover text-center group"
          >
            <i className="fab fa-whatsapp text-4xl text-emerald-600 mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-semibold text-lg mb-2">WhatsApp Me</h3>
            <p className="text-sm text-text-muted">Quick questions? Reply within 1 hour</p>
          </a>

          <div className="card text-center">
            <i className="fas fa-envelope text-4xl text-blue-600 mb-3"></i>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-sm text-text-muted">Formal inquiries: use form below</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* name, email, message fields – same as before */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary focus:outline-none text-text" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary focus:outline-none text-text" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
              <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary focus:outline-none text-text resize-none" placeholder="What are you working on?"></textarea>
            </div>
            <button type="submit" disabled={formStatus === 'submitting'} className="btn-primary w-full">
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && <p className="text-emerald-600 text-sm">Message sent – I'll reply within 24h.</p>}
            {formStatus === 'error' && <p className="text-red-600 text-sm">Failed. Please email rosewabere1@gmail.com directly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}