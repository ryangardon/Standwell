import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhatWeCreate from '@/components/WhatWeCreate'
import HowItWorks from '@/components/HowItWorks'
import WhyStandwell from '@/components/WhyStandwell'
import TrustSection from '@/components/TrustSection'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <WhatWeCreate />
      <HowItWorks />
      <WhyStandwell />
      <TrustSection />
      <QuoteForm />
      <Footer />
    </main>
  )
}
