"use client"

import { Card } from "@/components/ui/card"
import { Utensils, BookOpen, Zap, Clock, ArrowRight } from "lucide-react"

const tipCategories = [
  {
    icon: Utensils,
    title: "Quick Dorm Meals",
    subtitle: "High Protein",
    color: "text-secondary",
    tips: [
      "Greek yogurt with granola and berries",
      "Protein smoothie with banana and peanut butter",
      "Overnight oats with protein powder",
      "Canned tuna with crackers and veggies",
      "Hard-boiled eggs (prep on Sunday)",
    ],
  },
  {
    icon: BookOpen,
    title: "Exam Week Energy",
    subtitle: "Stay Strong During Stress",
    color: "text-secondary",
    tips: [
      "20-minute walks between study sessions",
      "Quick bodyweight circuits in your room",
      "Maintain protein intake even when busy",
      "Avoid all-nighters before exams",
      "Do mobility work to relieve tension",
    ],
  },
  {
    icon: Zap,
    title: "All-Nighter Recovery",
    subtitle: "Bounce Back Smart",
    color: "text-secondary",
    tips: [
      "Skip intense workout, do light cardio instead",
      "Prioritize hydration all day",
      "Take 20-minute power nap if possible",
      "Eat nutrient-dense meals, avoid junk",
      "Go to bed early that night",
    ],
  },
  {
    icon: Clock,
    title: "20-Minute Busy Day",
    subtitle: "Maximum Impact",
    color: "text-secondary",
    tips: [
      "5 min warm-up: jumping jacks, arm circles",
      "12 min circuit: push-ups, squats, planks, lunges",
      "3 min finisher: burpees or mountain climbers",
      "Focus on compound movements only",
      "High intensity, minimal rest",
    ],
  },
]

const quickReads = [
  {
    category: "Beginner-Friendly",
    items: [
      "Buy frozen vegetables (cheaper, last longer)",
      "Eggs are protein powerhouse",
      "Rice and beans for carbs + protein",
      "Bulk oatmeal for breakfast",
      "Peanut butter for healthy fats",
    ],
  },
  {
    category: "No Equipment Needed",
    items: [
      "Push-up variations",
      "Bodyweight squats and lunges",
      "Plank holds and variations",
      "Chair dips using desk chair",
      "Wall sits for leg endurance",
    ],
  },
]

export default function CampusTips() {
  return (
    <section id="tips" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          
          <p className="text-lg text-muted-foreground">Real, practical guidance for everyday student life.</p>
        </div>

        {/* Main Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tipCategories.map((category, idx) => (
            <Card
              key={idx}
              className="bg-card border border-border p-5 space-y-4 hover:border-secondary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                <category.icon className={`w-5 h-5 ${category.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{category.title}</h3>
                <p className="text-secondary text-sm font-medium">{category.subtitle}</p>
              </div>
              <ul className="space-y-2">
                {category.tips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-secondary mt-1.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Quick Reads */}
        <div className="grid md:grid-cols-2 gap-5 pt-4">
          {quickReads.map((section, idx) => (
            <Card key={idx} className="bg-card border border-border p-5 space-y-4">
              <h3 className="font-bold text-secondary">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-secondary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
