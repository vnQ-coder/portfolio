'use client'

import { useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  useEffect(() => {
    // Enhanced smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        
        if (targetElement) {
          const headerHeight = 80
          const targetPosition = targetElement.offsetTop - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add event listener for smooth scrolling
    document.addEventListener('click', handleSmoothScroll)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])

  return (
    <main className="smooth-scroll-container scroll-optimized">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}