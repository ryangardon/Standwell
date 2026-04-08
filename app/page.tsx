import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Products from '@/components/Products'
import HowItWorks from '@/components/HowItWorks'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <HowItWorks />
      <QuoteForm />
      <Footer />
    </main>
  )
}
