'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="section-eyebrow">
              Data & AI Systems Engineer
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold mb-6 text-balance">
              I design and deploy{' '}
              <span className="text-primary-500">
                end-to-end intelligent systems
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-text-muted mb-8 leading-relaxed-plus">
              From data ingestion to decision-making interfaces. Building
              production-grade ETL pipelines, RAG AI systems, and real-time data
              platforms.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                'Python',
                'SQL',
                'PySpark',
                'dbt',
                'Airflow',
                'LangChain',
                'FastAPI',
                'PostgreSQL',
              ].map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#systems" className="btn-primary">
                View Systems
              </Link>
              <Link href="#contact" className="btn-outline">
                Work With Me
              </Link>
            </div>

            {/* Proof Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-12 border-t border-border grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-4xl font-display font-bold text-text">
                  8+
                </div>
                <div className="text-sm text-text-muted mt-1">
                  Production Systems
                </div>
              </div>

              <div>
                <div className="text-4xl font-display font-bold text-text">
                  4+
                </div>
                <div className="text-sm text-text-muted mt-1">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-4xl font-display font-bold text-text">
                  3
                </div>
                <div className="text-sm text-text-muted mt-1">
                  Industries
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Animated Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl overflow-hidden shadow-strong">
              
              {/* Center system icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-project-diagram text-8xl text-primary-400/20 animate-pulse"></i>
              </div>

              {/* Floating Nodes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 left-10 w-16 h-16 bg-surface rounded-lg shadow-medium flex items-center justify-center"
              >
                <i className="fas fa-database text-primary-500"></i>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute top-20 right-20 w-16 h-16 bg-surface rounded-lg shadow-medium flex items-center justify-center"
              >
                <i className="fas fa-brain text-primary-500"></i>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute bottom-10 left-1/3 w-16 h-16 bg-surface rounded-lg shadow-medium flex items-center justify-center"
              >
                <i className="fas fa-chart-line text-primary-500"></i>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}