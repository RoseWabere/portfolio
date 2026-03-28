import Hero from '@/components/sections/Hero'
import SystemsShowcase from '@/components/sections/SystemsShowcase'
import BlogSection from '@/components/sections/BlogSection'
import Contact from '@/components/sections/Contact'
import { getFeaturedSystems } from '@/lib/systems'   // server-side only now

export default async function Home() {
  const featuredSystems = await getFeaturedSystems()  // fetch on server

  return (
    <>
      <Hero />
      <SystemsShowcase systems={featuredSystems} />
      <BlogSection />
      <Contact />
    </>
  )
}