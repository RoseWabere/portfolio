// app/experience/page.tsx
import Experience from '@/components/sections/Experience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Rose Wabere',
  description: 'Detailed work history as a data engineer building production systems for African enterprises.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Experience />
      </div>
    </div>
  )
}