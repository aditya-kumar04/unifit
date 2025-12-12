"use client"

import { Card } from "@/components/ui/card"
import { AlertTriangle, Clock, HelpCircle, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: HelpCircle,
    title: "No idea what to do",
    description: "You walk into the gym, look at machines, do random exercises, and leave hoping it worked.",
  },
  {
    icon: TrendingDown,
    title: "No progress after months",
    description: "You've been 'going to the gym' but look the same. No strength gains. No visible results.",
  },
  {
    icon: Clock,
    title: "No time for 2-hour workouts",
    description: "Between classes, assignments, and actually having a life - who has time for complicated programs?",
  },
  {
    icon: AlertTriangle,
    title: "Afraid of doing it wrong",
    description: "Bad form = injuries. But personal trainers cost $50-100/hour. YouTube has 10,000 conflicting videos.",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Sound familiar?</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Every college student trying to get fit faces the same problems. You're not alone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((problem, idx) => (
            <Card
              key={idx}
              className="bg-background border border-border/50 p-6 flex gap-4 hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{problem.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-lg text-foreground/70">
            The problem isn't <span className="text-foreground font-medium">motivation</span>. It's{" "}
            <span className="text-accent font-semibold">direction</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
