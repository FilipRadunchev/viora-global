import Hero from '@/components/Hero'
import Numbers from '@/components/Numbers'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import WhyViora from '@/components/WhyViora'
import CaseStudies from '@/components/CaseStudies'
import WorldMap from '@/components/WorldMap'
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Services />
      <Industries />
      <WhyViora />
      <CaseStudies />
      <WorldMap />
      <Insights />
      <Contact />
      <Footer />
    </>
  )
}