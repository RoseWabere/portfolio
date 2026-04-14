import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import HeadScripts from '@/components/HeadScripts'
import FloatingWhatsApp from '@/components/FloatingWhatsapp'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rose Wabere | Data Engineer & AI Systems Architect',
  description:
    'Data Engineer building production-grade data systems, ETL pipelines, and AI applications. Specializing in RAG systems, analytics platforms, and end-to-end data architecture.',
  keywords: [
    'Data Engineer Kenya',
    'AI Engineer Nairobi',
    'ETL Pipeline Developer',
    'RAG Systems Engineer',
    'Data Platform Engineer',
    'Machine Learning Systems',
  ],
  authors: [{ name: 'Rose Wabere' }],
  openGraph: {
    title: 'Rose Wabere | Data Engineer & AI Systems Architect',
    description:
      'Production-grade data systems, ETL pipelines, and AI applications.',
    type: 'website',
    images: [
      {
        url: 'https://rose-wabere.vercel.app/og-image.png', // replace with your actual image
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">

        {/* Global scripts (analytics, etc.) */}
        <HeadScripts />

        {/* SEO Structured Data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rose Wabere",
              "jobTitle": "Data Engineer & AI Systems Architect",
              "url": "https://rose-wabere.vercel.app/",
              "sameAs": [
                "https://linkedin.com/in/rosewabere",
                "https://github.com/RoseWabere"
              ],
              "knowsAbout": [
                "Data Engineering",
                "ETL Pipelines",
                "RAG Systems",
                "AI Systems",
                "Machine Learning",
                "Data Platforms"
              ]
            })
          }}
        />

        <ThemeProvider>
          <Navigation />
          <main>{children}</main>

          {/* Optional: keep only if you want direct client contact */}
          <FloatingWhatsApp />

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}