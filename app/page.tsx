import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhatWeCreate from '@/components/WhatWeCreate'
import TrustSection from '@/components/TrustSection'
import HowItWorks from '@/components/HowItWorks'
import WhyStandwell from '@/components/WhyStandwell'
import Testimonials from '@/components/Testimonials'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <WhatWeCreate />
      <TrustSection />
      <HowItWorks />
      <WhyStandwell />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </main>
  )
}
