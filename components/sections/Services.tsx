'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: 'fa-pipeline',
    title: 'Production ETL Pipelines',
    desc: 'Scalable, monitored, and documented pipelines using Airflow, dbt, PySpark.'
  },
  {
    icon: 'fa-brain',
    title: 'RAG AI Systems',
    desc: 'Custom AI assistants with LangChain, vector DBs, and LLM integration.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Governance‑First Analytics',
    desc: 'Compliance‑ready dashboards with audit trails, data lineage, and quality checks.'
  }
]

export default function Services() {
  return (
    <section className="py-20 section-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow">What I Deliver</div>
          <h2 className="font-display text-4xl font-bold mb-4">How I Can Help You</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Whether you need a pipeline, an AI system, or a governance framework – I build production‑ready solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card text-center"
            >
              <i className={`fas ${s.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-text-muted text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}