// app/experience/page.tsx
import Education from '@/components/sections/Education'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education | Rose Wabere',
  description: 'Detailed Education history as a data engineer building production systems for African enterprises.',
}

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Education />
      </div>
    </div>
  )
}