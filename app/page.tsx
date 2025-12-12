"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import TrainingTracker from "@/components/training-tracker"
import ExerciseLibrary from "@/components/exercise-library"
import MentorshipProgram from "@/components/mentorship-program"
import CampusTips from "@/components/campus-tips"
import BlogTips from "@/components/blog-tips"
import FeedbackRequest from "@/components/feedback-request"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setScrollProgress(scrollTop / docHeight)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-secondary z-50 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <Navigation />
      <Hero />
      <TrainingTracker />
      <ExerciseLibrary />
      <MentorshipProgram />
      <CampusTips />
      <BlogTips />
      <FeedbackRequest />
      <Footer />
    </main>
  )
}