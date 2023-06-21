import Hero from '@/components/Hero'
import BrewCoffee from '@/components/BrewCoffee'
import Brews from '@/components/Brews'
import Navbar from '@/components/Navbar'
import { Nunito_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const nunitoSans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`bg-primary text-white min-h-screen ${nunitoSans.className}`}>
      <section className="max-w-[1024px] mx-auto px-5">
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-between">
        <Hero/>
        <BrewCoffee />
      </div>
      <Brews />
      <Footer />
      </section>
    </main>
  )
}
