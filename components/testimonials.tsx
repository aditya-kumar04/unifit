"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Jake M.",
    university: "UCLA",
    year: "Sophomore",
    initials: "JM",
    color: "bg-blue-500",
    rating: 5,
    text: "I spent a year doing random workouts from TikTok and got nowhere. Two months with my UNIFIT guide and I've added 40lbs to my bench. Finally feel like I know what I'm doing.",
    highlight: "Added 40lbs to bench in 2 months",
  },
  {
    name: "Priya S.",
    university: "UT Austin",
    year: "Junior",
    initials: "PS",
    color: "bg-pink-500",
    rating: 5,
    text: "As a pre-med with zero free time, I thought fitness wasn't possible. My guide helped me find 30 minutes 3x/week that actually work. Down 15lbs and have more energy for studying.",
    highlight: "Lost 15lbs with only 30min 3x/week",
  },
  {
    name: "Marcus D.",
    university: "Michigan State",
    year: "Freshman",
    initials: "MD",
    color: "bg-green-500",
    rating: 5,
    text: "Walked into the gym my first week completely lost. The exercise library taught me proper form, and my guide built me a plan I could actually follow. No more wandering around confused.",
    highlight: "From confused to confident",
  },
  {
    name: "Sarah L.",
    university: "NYU",
    year: "Senior",
    initials: "SL",
    color: "bg-purple-500",
    rating: 5,
    text: "The habit tracker alone changed everything for me. Seeing my consistency build over weeks kept me motivated way more than any streak-based app that makes you feel guilty.",
    highlight: "Consistency without guilt",
  },
  {
    name: "David K.",
    university: "Georgia Tech",
    year: "Junior",
    initials: "DK",
    color: "bg-orange-500",
    rating: 5,
    text: "My guide understands the college grind—tight budget, dining hall food, shared gym equipment. The tips are actually relevant to my life, not some influencer's perfect setup.",
    highlight: "Tips that fit real college life",
  },
  {
    name: "Emma W.",
    university: "UC Berkeley",
    year: "Sophomore",
    initials: "EW",
    color: "bg-teal-500",
    rating: 5,
    text: "I was intimidated by the gym for years. Having someone to text when I felt lost made all the difference. Now I actually look forward to my workouts.",
    highlight: "Overcame gym intimidation",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-balance">Students Who Figured It Out</h2>
          <p className="text-lg text-muted-foreground">Real results from real students at real colleges.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-card border border-border p-6 space-y-4 hover:border-secondary/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-secondary/20" />

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed text-sm">"{testimonial.text}"</p>

              {/* Highlight */}
              <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.year}, {testimonial.university}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
