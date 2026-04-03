'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface System {
  slug: string
  title: string
  badge: string
  role: string
  description: string        // used as solution
  problem?: string           // optional in MDX
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  impact: string
  image?: string
  architecture?: string
  engineering?: string
}

interface SystemCardProps {
  system: System
  index: number
}

export default function SystemCard({ system, index }: SystemCardProps) {
  // If problem is not defined in MDX, we can generate a fallback from description
  const problem = system.problem //|| `Business needed a reliable system for [purpose]`
  const solution = system.description

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card card-hover group overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden">
        {system.image ? (
          <Image src={system.image} alt={system.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
            <i className="fas fa-image text-4xl text-primary-300"></i>
          </div>
        )}
      </div>

      <div className="badge mb-3">{system.badge}</div>
      <h3 className="font-display text-xl font-bold text-text mb-2">{system.title}</h3>
      <div className="text-sm text-text-muted mb-3">{system.role}</div>

      {/* Problem & Solution — clear business framing */}
      <div className="space-y-2 mb-3">
        <p className="text-sm">
          <span className="font-semibold text-text">Problem:</span>{' '}
          <span className="text-text-muted">{problem}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold text-text">Solution:</span>{' '}
          <span className="text-text-muted">{solution}</span>
        </p>
      </div>

      {/* Impact — highlighted */}
      <div className="mb-4 p-3 bg-primary/10 border-l-4 border-primary rounded-r-lg">
        <p className="text-sm font-semibold text-primary mb-1">IMPACT</p>
        <p className="text-text">{system.impact}</p>
      </div>

      {/* Architecture snapshot (if available) */}
      {system.architecture && (
        <div className="mb-3 text-xs font-mono p-2 bg-gray-50 dark:bg-gray-900 rounded">
          <span className="font-semibold">Architecture:</span> {system.architecture}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {system.stack.map(tech => (
          <span key={tech} className="px-2 py-1 bg-gray-100 border border-border rounded text-xs text-text-muted">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-border-light">
        {system.liveUrl && (
          <a href={system.liveUrl} target="_blank" rel="noopener noreferrer" className="link-primary text-sm flex items-center gap-1">
            <i className="fas fa-external-link-alt text-xs"></i> Live Demo
          </a>
        )}
        {system.githubUrl && (
          <a href={system.githubUrl} target="_blank" rel="noopener noreferrer" className="link-primary text-sm flex items-center gap-1">
            <i className="fab fa-github text-xs"></i> GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}