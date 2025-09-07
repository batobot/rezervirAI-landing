import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Product } from '@/components/Product'
import { Steps } from '@/components/Steps'
import { UseCases } from '@/components/UseCases'
import { Impact } from '@/components/Impact'
import { WhyNow } from '@/components/WhyNow'
import { Traction } from '@/components/Traction'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Product />
        <Steps />
        <UseCases />
        <Impact />
        <WhyNow />
        <Traction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
