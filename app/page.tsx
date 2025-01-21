import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import GlobalPresence from '@/components/GlobalPresence'
import WhyUs from '@/components/WhyUs'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
export default function HomePage() {
  

  return (
    <main>
      <Hero />
      <Services />
      <GlobalPresence />
      <WhyUs />
      <Stats />
      {/* <Testimonials /> */}
    </main>
  )
}
