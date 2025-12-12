"use client"

import { Card } from "@/components/ui/card"
import { ClipboardList, UserCheck, Calendar, TrendingUp } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Tell us about you",
    description: "5-minute questionnaire: your goals, schedule, equipment access, and fitness level. No judgment.",
    time: "5 minutes",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Get matched with a mentor",
    description: "We pair you with a student who's been where you are - same struggles, real solutions.",
    time: "24 hours",
  },
  {
    step: "03",
    icon: Calendar,
    title: "Receive your custom plan",
    description: "A simple, structured workout plan that fits YOUR schedule. No 6-day splits. Just what works.",
    time: "Same day",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Train, check-in, progress",
    description: "Weekly 15-min calls with your mentor. Form checks via video. Adjustments when needed.",
    time: "Ongoing",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">How UNIFIT works</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">From confused to confident in 4 simple steps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="bg-background border border-border/50 p-6 space-y-4 relative overflow-hidden group hover:border-accent/50 transition-all"
            >
              <span className="absolute top-4 right-4 text-5xl font-black text-foreground/5 group-hover:text-accent/10 transition-colors">
                {step.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-accent font-medium">{step.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
