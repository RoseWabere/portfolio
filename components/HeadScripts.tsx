// components/HeadScripts.tsx
// responsible for adding external scripts and structured data to the head of the document.
'use client'

import { useEffect } from 'react'

export default function HeadScripts() {
  useEffect(() => {
    // Add Font Awesome link to head dynamically
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    document.head.appendChild(link)

    // Add structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rose Wabere',
      url: 'https://rose-wabere.vercel.app',
      sameAs: [
        'https://github.com/RoseWabere',
        'https://linkedin.com/in/rosewabere',
      ],
      jobTitle: 'Data & AI Systems Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Data Science East Africa',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Mount Kenya University',
      },
      knowsAbout: [
        'Data Engineering',
        'ETL',
        'RAG Systems',
        'LangChain',
        'Apache Airflow',
        'dbt',
        'PostgreSQL',
      ],
    })
    document.head.appendChild(script)

    return () => {
      // Cleanup if needed (optional)
    }
  }, [])

  return null
}