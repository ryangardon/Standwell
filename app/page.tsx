import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatWeCreate from '@/components/WhatWeCreate'
import TrustSection from '@/components/TrustSection'
import HowItWorks from '@/components/HowItWorks'
import WhyStandwell from '@/components/WhyStandwell'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatWeCreate />
      <TrustSection />
      <HowItWorks />
      <WhyStandwell />
      <QuoteForm />
      <Footer />
    </main>
  )
}
