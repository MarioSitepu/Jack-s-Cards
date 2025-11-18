'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar activeSection={activeSection} />
      <Hero onSectionChange={setActiveSection} />
      <About onSectionChange={setActiveSection} />
      <Projects onSectionChange={setActiveSection} />
      <Contact onSectionChange={setActiveSection} />
      <Footer />
    </main>
  )
}
