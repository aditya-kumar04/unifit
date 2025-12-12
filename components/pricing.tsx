"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics",
    features: ["Sample workout plans", "Exercise library", "Progress tracker", "Community access"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Mentored",
    price: "$29",
    period: "/month",
    description: "Real guidance, real results",
    features: [
      "Everything in Free",
      "Matched mentor",
      "Custom workout plan",
      "Weekly video check-ins",
      "Direct text access",
      "Form check videos",
      "Plan adjustments",
    ],
    cta: "Get matched",
    popular: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Simple pricing</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Less than one meal out per week for a personal mentor who actually cares about your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-6 space-y-6 relative ${
                plan.popular
                  ? "bg-gradient-to-b from-accent/10 to-transparent border-accent"
                  : "bg-background border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                  Most popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-foreground/60">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-foreground/60">{plan.period}</span>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-background"
                    : "bg-foreground/5 hover:bg-foreground/10 text-foreground"
                }`}
              >
                {plan.cta}
                {plan.popular && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/40">
          First week of mentorship is free. Cancel anytime with one click.
        </p>
      </div>
    </section>
  )
}
