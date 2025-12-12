"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "I've never worked out before. Is this for me?",
    answer:
      "Most of our members start as complete beginners. Your mentor will create a plan specifically for your level and build you up gradually. No judgment, just progress.",
  },
  {
    question: "What if I don't have access to a gym?",
    answer:
      "No problem! Many of our workouts are designed for dorm rooms with zero equipment. Your mentor will customize your plan based on what you have access to - even if that's just a floor and a wall.",
  },
  {
    question: "How is this different from just watching YouTube videos?",
    answer:
      "YouTube can't tell you if your form is wrong. YouTube can't adjust your program when you hit a plateau. YouTube doesn't check in on you when you skip a week. Your mentor does all of this.",
  },
  {
    question: "Who are the mentors?",
    answer:
      "Our mentors are current college students and recent grads who've achieved real results themselves. They understand the unique challenges of student life - tight budgets, crazy schedules, tiny dorm rooms.",
  },
  {
    question: "What if I'm too busy with classes?",
    answer:
      "That's exactly why we exist. Your mentor will build a realistic plan around YOUR schedule - whether that's 10 minutes 3x/week or 45 minutes 5x/week. Something is always better than nothing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, with one click. No contracts, no commitments, no guilt trips. We want you to stay because you're seeing results, not because you're locked in.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-background border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground/50 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-sm text-foreground/70 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
