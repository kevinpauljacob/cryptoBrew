import Hero from '@/components/Hero'
import BrewCoffee from '@/components/BrewCoffee'
import Brews from '@/components/Brews'
import Navbar from '@/components/Navbar'
import { Nunito_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Head from 'next/head'

const nunitoSans = Nunito_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function Home() {
  const [fetchBrews, setFetchBrews] = useState(false);

  const handleClick = () => {
    setFetchBrews(true);
  }

  return (
    <>
    <Head>
      <title>CryptoBrew | Brew a Coffee</title>
    </Head>
    <main className={`bg-primary text-white min-h-screen ${nunitoSans.className}`}>
      <section className="max-w-[1024px] mx-auto px-5">
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-between">
        <Hero/>
        <BrewCoffee />
      </div>
      {
        !fetchBrews && <div className="flex justify-center w-full mt-10">
          <button onClick={handleClick} className="bg-white text-black text-lg font-bold rounded-lg w-[200px] p-2">Fetch Brews</button>
        </div>
      }
      { fetchBrews && <Brews /> }
      <Footer />
      </section>
    </main>
    </>
  )
}
