'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/* =========================
   NODE
========================= */
function Node({ icon, label, left, top, active, onHover, big = false }: any) {
  return (
    <div
      className="absolute text-center cursor-pointer"
      style={{ left, top, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`
          ${big ? 'w-24 h-24' : 'w-20 h-20'}
          rounded-xl flex items-center justify-center border
          transition-all duration-300 relative
          ${
            active
              ? 'bg-primary/20 border-primary shadow-lg'
              : 'bg-surface border-white/10'
          }
        `}
      >
        {big && (
          <span className="absolute w-full h-full rounded-xl bg-primary/10"></span>
        )}

        <i className={`fas ${icon} text-primary ${big ? 'text-2xl' : 'text-xl'}`} />
      </div>

      <p className="text-xs text-text-muted mt-2">{label}</p>
    </div>
  )
}

/* =========================
   FLOW PARTICLES
========================= */
function FlowingParticles({ path, active }: any) {
  const particles = [0, 0.7, 1.4]

  return (
    <>
      {particles.map((d, i) => (
        <circle key={i} r={active ? 2.5 : 1.5} fill="var(--primary)" opacity={active ? 0.8 : 0.3}>
          <animateMotion
            dur={active ? '3s' : '6s'}
            begin={`${d}s`}
            repeatCount="indefinite"
            path={path}
          />
        </circle>
      ))}
    </>
  )
}

/* =========================
   LINE
========================= */
function AnimatedLine({ from, to, active }: any) {
  const path = `M ${round(from.x)} ${round(from.y)} L ${round(to.x)} ${round(to.y)}`

  return (
    <>
      <path
        d={path}
        stroke="var(--primary)"
        strokeWidth={active ? 1.2 : 0.6}
        opacity={active ? 0.7 : 0.25}
        fill="none"
      />

      <FlowingParticles path={path} active={active} />
    </>
  )
}

/* =========================
   SYSTEM VISUAL
========================= */

function round(num: number, decimals = 3) {
  return Number(num.toFixed(decimals))
}
function SystemVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const center = { x: 50, y: 50 }
  const radius = 40

  const nodes = [
    { icon: 'fa-stream', label: 'Stream', angle: 0 },
    { icon: 'fa-cogs', label: 'Transform', angle: 60 },
    { icon: 'fa-brain', label: 'AI', angle: 120 },
    { icon: 'fa-chart-line', label: 'Insights', angle: 180 },
    { icon: 'fa-server', label: 'Ops', angle: 240 },
    { icon: 'fa-database', label: 'Storage', angle: 300 },
  ]

  const nodePositions = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180
    return {
      ...n,
      x: round(center.x + radius * Math.cos(rad)),
      y: round(center.y + radius * Math.sin(rad)),
    }
  })

  /* Subtle auto-cycle for calm motion */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % nodes.length))
    }, 4000) // slower = more professional

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {nodePositions.map((n, idx) => (
          <AnimatedLine
            key={idx}
            from={center}
            to={{ x: n.x, y: n.y }}
            active={activeIndex === idx}
          />
        ))}
      </svg>

      {/* Center node */}
      <Node
        icon="fa-database"
        label="Data"
        left="50%"
        top="50%"
        big
        active={activeIndex !== null}
        onHover={() => {}}
      />

      {/* Outer nodes */}
      {nodePositions.map((n, idx) => (
        <Node
          key={idx}
          icon={n.icon}
          label={n.label}
          left={`${round(n.x)}%`}
          top={`${round(n.y)}%`}
          active={activeIndex === idx}
          onHover={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  )
}

/* =========================
   HERO SECTION
========================= */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT — now with recruiter-focused hooks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              {/* <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> */}
              <span className="text-emerald-700 font-semibold text-sm">
                Available for Data Engineer/ Analyst roles | Immediate start
              </span>
            </div>

            {/* Unique Value Proposition */}
            <div className="section-eyebrow">
              Data & AI Systems Engineer
            </div>

            <h1 className="font-display font-bold mb-6 text-balance">
              I build <span className="text-primary">governance‑aware data systems</span> for African enterprises
            </h1>

            <p className="text-xl text-text-muted mb-4 leading-relaxed">
              Rare combination: Production data engineering + criminology background = 
              compliance‑ready ETL pipelines and AI systems from day one.
            </p>

            {/* Impact Metrics — quantified results */}
            <div className="grid grid-cols-3 gap-6 mb-8 pt-4 border-t border-border">
              <div>
                <div className="text-4xl font-display font-bold text-primary">95%</div>
                <div className="text-sm text-text-muted mt-1">Faster Compliance Reporting</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary">8+</div>
                <div className="text-sm text-text-muted mt-1">Production Systems Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-primary">4yr</div>
                <div className="text-sm text-text-muted mt-1">Building in Africa</div>
              </div>
            </div>

            {/* CTA Buttons — prioritise calendar booking */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://calendly.com/rosewabere/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <i className="fas fa-calendar-check"></i> Book 30‑min Call
              </a>
              <Link href="#contact" className="btn-outline">
                Hire Me
              </Link>
              <a
                href="/Rose_Wabere_DataGovernance_Resume.pdf"
                download
                className="btn-outline flex items-center gap-2"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>

            {/* Tech stack badges – kept as is */}
            <div className="flex flex-wrap gap-2">
              {['Python','SQL','PySpark','dbt','Airflow','LangChain','FastAPI','PostgreSQL','Kafka'].map(tech => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL — unchanged */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden shadow-strong">
              <SystemVisual />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}