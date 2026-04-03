import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import HeadScripts from '@/components/HeadScripts'

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
  title: 'Rose Wabere | Data & AI Systems Engineer',
  description:
    'I design and deploy end-to-end intelligent systems — from data ingestion to decision-making interfaces. Data Engineer specializing in ETL pipelines, RAG systems, and production data platforms.',
  keywords: [
    'Data Engineer',
    'AI Systems',
    'ETL Pipeline',
    'RAG Systems',
    'Kenya',
    'Nairobi',
    'Machine Learning',
  ],
  authors: [{ name: 'Rose Wabere' }],
  openGraph: {
    title: 'Rose Wabere | Data & AI Systems Engineer',
    description:
      'I design and deploy end-to-end intelligent systems — from data ingestion to decision-making interfaces.',
    type: 'website',
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
        <HeadScripts />
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}