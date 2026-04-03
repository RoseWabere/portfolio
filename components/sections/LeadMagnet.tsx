'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // Integrate with your email service (e.g., ConvertKit, Mailchimp, or Formspree)
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <i className="fas fa-download text-4xl text-primary mb-4"></i>
          <h2 className="font-display text-3xl font-bold mb-3">
            Free: My Production RAG System Checklist
          </h2>
          <p className="text-text-muted text-lg mb-6">
            The exact checklist I use when deploying RAG systems in production. 
            Covers: chunking strategies, retrieval optimization, LLM selection, cost management, and monitoring.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none bg-surface"
            />
            <button type="submit" disabled={status === 'loading'} className="btn-primary whitespace-nowrap">
              {status === 'loading' ? 'Sending...' : 'Get Free Checklist'}
            </button>
          </form>
          <p className="text-xs text-text-muted mt-3">
            450+ engineers downloaded. No spam, unsubscribe anytime.
          </p>
          {status === 'success' && (
            <p className="text-emerald-600 text-sm mt-2">Check your inbox (and spam) for the PDF!</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}