'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface System {
  slug: string
  title: string
  badge: string
  role: string
  description: string
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  impact: string
  image?: string
}

interface SystemCardProps {
  system: System
  index: number
}

export default function SystemCard({ system, index }: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card card-hover group overflow-hidden"
    >
      {/* Project Image - now fills card width properly */}
      <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden">
        {system.image ? (
          <Image
            src={system.image}
            alt={system.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
            <div className="text-center text-text-muted">
              <i className="fas fa-image text-4xl mb-2 text-primary-300"></i>
              <p className="text-xs">
                Add screenshot:<br/>
                /public/images/projects/{system.slug}.png
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Badge */}
      <div className="badge mb-3">
        {system.badge}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-text mb-2 leading-tight">
        {system.title}
      </h3>

      {/* Role */}
      <div className="text-sm text-text-muted mb-3">{system.role}</div>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {system.description}
      </p>

      {/* Impact */}
      <div className="mb-4 p-3 bg-primary-50 border border-primary-100 rounded-lg">
        <div className="text-xs font-semibold text-primary-700 mb-1">IMPACT</div>
        <div className="text-sm text-text">{system.impact}</div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {system.stack.map((tech) => (
          <span 
            key={tech}
            className="px-2 py-1 bg-gray-100 border border-border rounded text-xs text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-border-light">
        {system.liveUrl && (
          <a
            href={system.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary text-sm flex items-center gap-1"
          >
            <i className="fas fa-external-link-alt text-xs"></i>
            Live Demo
          </a>
        )}
        {system.githubUrl && (
          <a
            href={system.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary text-sm flex items-center gap-1"
          >
            <i className="fab fa-github text-xs"></i>
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}