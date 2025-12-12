"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTouring, setIsTouring] = useState(false)
  const [tourProgress, setTourProgress] = useState(0)
  const [tourTotal, setTourTotal] = useState(0)
  const tourTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#exercises", label: "EXERCISES" },
    { href: "#tracker", label: "TRACKER" },
    { href: "#mentorship", label: "GUIDANCE" },
    { href: "#blog", label: "ARTICLES" },
    { href: "#footer", label: "ABOUT" },
  ]

  const startTour = () => {
    if (isTouring) return
    
    setIsTouring(true)
    const sections = ['tracker', 'exercises', 'mentorship', 'blog', 'footer']
    setTourTotal(sections.length)
    setTourProgress(1)
    
    // Scroll to first section
    scrollToSection(sections[0])
    
    // Start the tour sequence
    let currentIndex = 0
    const tourSequence = () => {
      if (currentIndex < sections.length - 1) {
        currentIndex++
        setTourProgress(currentIndex + 1)
        scrollToSection(sections[currentIndex])
        
        tourTimeoutRef.current = setTimeout(tourSequence, 1500)
      } else {
        // Tour completed - scroll back to top
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setIsTouring(false)
          setTourProgress(0)
          setTourTotal(0)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/80 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground flex items-center">
          <img 
            src="/UNIFIT-logo-transparent.png" 
            alt="UNIFIT Logo" 
            className="h-10 w-auto transition-all duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 px-3 py-2 rounded-full hover:bg-muted/50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2.5 hover:bg-muted rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-2 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}