import Hero from '@/components/sections/Hero'
import SkillsGrid from '@/components/sections/SkillsGrid'
import CompactExperience from '@/components/sections/CompactExperience'
import EducationSummary from '@/components/sections/EducationSummary'
import SystemsShowcase from '@/components/sections/SystemsShowcase'
import WhyDifferent from '@/components/sections/WhyDifferent'
import LeadMagnet from '@/components/sections/LeadMagnet'
import HireMe from '@/components/sections/HireMe'
import BlogSection from '@/components/sections/BlogSection'
import Contact from '@/components/sections/Contact'
import { getFeaturedSystems } from '@/lib/systems'

export default async function Home() {
  const featuredSystems = await getFeaturedSystems()

  return (
    <>
      <Hero />
      <SkillsGrid />
      <WhyDifferent />               {/* moved up – unique value early */}
      <SystemsShowcase systems={featuredSystems} />  {/* flagship work high up */}
      <CompactExperience />          {/* compact, not overwhelming */}
      <EducationSummary />           {/* one-liner + cert badges */}
      <LeadMagnet />
      <HireMe />
      <BlogSection />
      <Contact />
    </>
  )
}