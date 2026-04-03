import Hero from '@/components/sections/Hero'
import SkillsGrid from '@/components/sections/SkillsGrid'
import SystemsShowcase from '@/components/sections/SystemsShowcase'
import WhyDifferent from '@/components/sections/WhyDifferent'
import LeadMagnet from '@/components/sections/LeadMagnet'
import HireMe from '@/components/sections/HireMe'
import BlogSection from '@/components/sections/BlogSection'
import Contact from '@/components/sections/Contact'
import { getFeaturedSystems } from '@/lib/systems'
import Testimonials from '@/components/sections/Testimonials'
import Services from '@/components/sections/Services'

export default async function Home() {
  const featuredSystems = await getFeaturedSystems()

  return (
    <>
      <Hero />
      <SkillsGrid />
      <WhyDifferent />
      <Services />
      <SystemsShowcase systems={featuredSystems} />
      <Testimonials />
      <HireMe />
      {/* <LeadMagnet /> */}
      <BlogSection />
      <Contact />
    </>
  )
}