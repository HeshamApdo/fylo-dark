import Features from '@/components/Features'
import GetStarted from '@/components/GetStarted'
import Landing from '@/components/Landing'
import Section from '@/components/Section'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Features />
      <Section />
      <Testimonials />
      <GetStarted />
    </main>
  )
}
