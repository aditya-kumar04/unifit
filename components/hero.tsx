"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export default function Hero() {
  const tourTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleTakeTour = () => {
    // Full tour functionality - visit all sections with 1.5-second intervals
    const sections = ['tracker', 'exercises', 'mentorship', 'blog', 'footer']
    
    // Scroll to first section
    scrollToSection(sections[0])
    
    // Start the tour sequence
    let currentIndex = 0
    const tourSequence = () => {
      if (currentIndex < sections.length - 1) {
        currentIndex++
        scrollToSection(sections[currentIndex])
        
        tourTimeoutRef.current = setTimeout(tourSequence, 1500)
      } else {
        // Tour completed - scroll back to top
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 1500)
      }
    }
    
    tourTimeoutRef.current = setTimeout(tourSequence, 1500)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Use instant scroll for better performance on older devices
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (tourTimeoutRef.current) {
        clearTimeout(tourTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center space-y-8">
        {/* Large UNIFIT text */}
        <h1 className="text-[80px] sm:text-[120px] lg:text-[180px] font-black tracking-tighter leading-none text-foreground/10 select-none">
          UNIFIT
        </h1>
        
        {/* Tagline */}
        <div className="space-y-4 -mt-16 sm:-mt-24 lg:-mt-32">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground capitalize">
            College Fitness, Made Simple
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">Fitness designed for students.</p>
        </div>
        
        {/* CTA */}
        <div className="pt-4">
          <Button
            size="lg"
            onClick={handleTakeTour}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Take a Tour
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}