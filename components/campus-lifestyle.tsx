"use client"

import { Card } from "@/components/ui/card"

interface LifestyleTip {
  title: string
  subtitle: string
  tips: string[]
  icon: string
}

const tips: LifestyleTip[] = [
  {
    title: "Quick Dorm Meals",
    subtitle: "High Protein",
    icon: "☕",
    tips: [
      "Greek yogurt with granola and berries",
      "Protein smoothie with banana and peanut butter",
      "Overnight oats with protein powder",
      "Canned tuna with crackers and veggies",
      "Hard-boiled eggs (prep on Sunday)",
    ],
  },
  {
    title: "Exam Week Energy",
    subtitle: "Stay Strong During Stress",
    icon: "📖",
    tips: [
      "20-minute walks between study sessions",
      "Quick bodyweight circuits in your room",
      "Maintain protein intake even when busy",
      "Avoid all-nighters before exams",
      "Do mobility work to relieve tension",
    ],
  },
  {
    title: "All-Nighter Recovery",
    subtitle: "Bounce Back Smart",
    icon: "⚡",
    tips: [
      "Skip intense workout, do light cardio instead",
      "Prioritize hydration all day",
      "Take 20-minute power nap if possible",
      "Eat nutrient-dense meals, avoid junk food",
      "Go to bed early that night",
    ],
  },
  {
    title: "20-Minute Busy Day",
    subtitle: "Maximum Impact",
    icon: "💪",
    tips: [
      "5 min warm-up: Jumping jacks, arm circles",
      "12 min circuit: Push-ups, squats, planks, lunges",
      "3 min finisher: Burpees or mountain climbers",
      "Focus on compound movements",
      "High intensity, minimal rest",
    ],
  },
]

export default function CampusLifestyle() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">Campus Survival + Fitness Tips</h2>
          <p className="text-lg text-foreground/70">Real, practical guidance for everyday student life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => (
            <Card
              key={idx}
              className="bg-background/50 border border-border/50 hover:border-accent/50 p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg">{tip.title}</h3>
                  <p className="text-sm text-accent font-semibold">{tip.subtitle}</p>
                </div>
                <span className="text-3xl">{tip.icon}</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-border/30">
                {tip.tips.map((item, tipIdx) => (
                  <div key={tipIdx} className="flex items-start gap-3">
                    <span className="text-accent text-sm font-bold mt-0.5 flex-shrink-0">→</span>
                    <p className="text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
