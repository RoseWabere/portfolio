'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleWhatsApp = () => {
    const parts = ['2547', '00000', '000'] // replace with your real number
    window.open(
      `https://wa.me/${parts.join('')}?text=Hello%20Data%20Scout%20KE%2C%20I%27d%20like%20to%20discuss%20a%20project.`,
      '_blank'
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        e.currentTarget.reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
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
          className="mb-16 text-center"
        >
          <div className="section-eyebrow">
            Let's Connect
          </div>
          <h2 className="font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Whether you're building a data pipeline, an AI application, or looking for a systems engineer — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="font-display text-xl font-bold mb-6">Quick Contact</h3>
              
              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="w-full mb-4 p-4 border-2 border-border hover:border-primary-500 rounded-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-whatsapp text-emerald-600 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="text-sm font-medium text-text">WhatsApp</div>
                  <div className="text-xs text-text-muted">Chat directly — fast response</div>
                </div>
                <i className="fas fa-arrow-right text-emerald-600"></i>
              </button>

              <a
                href="https://linkedin.com/in/rosewabere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 p-4 border-2 border-border hover:border-primary-500 rounded-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-blue-600 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="text-sm font-medium text-text">LinkedIn</div>
                  <div className="text-xs text-text-muted">linkedin.com/in/rosewabere</div>
                </div>
                <i className="fas fa-external-link-alt text-text-muted text-sm"></i>
              </a>

              <a
                href="https://github.com/RoseWabere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 p-4 border-2 border-border hover:border-primary-500 rounded-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fab fa-github text-text text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="text-sm font-medium text-text">GitHub</div>
                  <div className="text-xs text-text-muted">github.com/RoseWabere</div>
                </div>
                <i className="fas fa-external-link-alt text-text-muted text-sm"></i>
              </a>

              <a
                href="https://datascoutke.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 border-2 border-border hover:border-primary-500 rounded-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fas fa-building text-primary-600 text-xl"></i>
                </div>
                <div className="text-left flex-1">
                  <div className="text-sm font-medium text-text">Company</div>
                  <div className="text-xs text-text-muted">datascoutke.com</div>
                </div>
                <i className="fas fa-external-link-alt text-text-muted text-sm"></i>
              </a>
            </div>

            {/* Illustration */}
            <div className="card bg-gradient-to-br from-primary-50 to-primary-100 p-8">
              <div className="text-center">
                <i className="fas fa-paper-plane text-5xl text-primary-500 mb-4"></i>
                <p className="text-sm text-text-muted">
                  Prefer email? Use the form →
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary-500 focus:outline-none text-text"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary-500 focus:outline-none text-text"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface border-2 border-border rounded-lg focus:border-primary-500 focus:outline-none text-text resize-none"
                  placeholder="What are you working on?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary w-full"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-emerald-600 text-sm">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
              )}

              <p className="text-xs text-text-light">
                Your details stay private. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}