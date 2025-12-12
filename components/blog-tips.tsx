"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, Bookmark, TrendingUp } from "lucide-react"

const blogPosts = [
  {
    category: "Nutrition",
    title: "The $50/Week Meal Prep Guide for Muscle Building",
    excerpt:
      "You don't need expensive supplements or fancy meal kits. Here's how to hit your protein goals on a college budget with simple ingredients from any grocery store.",
    readTime: "8 min read",
    trending: true,
    image: "/healthy-meal-prep-containers-with-chicken-rice-veg.jpg",
  },
  {
    category: "Training",
    title: "The Only 4 Exercises You Need as a Beginner",
    excerpt:
      "Forget the 47-exercise routines you see on Instagram. Master these four compound movements and you'll build more muscle than 90% of gym-goers.",
    readTime: "6 min read",
    trending: true,
    image: "/person-doing-barbell-squat-in-gym-proper-form.jpg",
  },
  {
    category: "Mindset",
    title: "Why Your 'Perfect' Routine is Failing You",
    excerpt:
      "The best workout isn't the one that's perfectly optimized. It's the one you'll actually do. Here's how to build consistency that lasts.",
    readTime: "5 min read",
    trending: false,
    image: "/student-studying-with-coffee-focused-determination.jpg",
  },
  {
    category: "Recovery",
    title: "Sleep is Your Superpower (And You're Wasting It)",
    excerpt:
      "8 hours isn't just for productivity nerds. Here's the science of why sleep is the most underrated muscle-building tool you have.",
    readTime: "7 min read",
    trending: false,
    image: "/peaceful-bedroom-night-sleep-recovery.jpg",
  },
]

const quickTips = [
  {
    title: "Pre-Workout Timing",
    tip: "Eat 2-3 hours before training. A banana 30 min before is fine if you're rushed.",
  },
  {
    title: "Protein Per Meal",
    tip: "Aim for 25-40g protein per meal. Your body can only use so much at once.",
  },
  {
    title: "Rest Between Sets",
    tip: "2-3 min for strength, 60-90 sec for hypertrophy. Time it, don't guess.",
  },
  {
    title: "Progressive Overload",
    tip: "Add 2.5-5lbs weekly. Small jumps compound into massive gains over time.",
  },
]

export default function BlogTips() {
  return (
    <section id="blog" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center justify-between gap-6">
            <div className="w-full">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance">Practical Fitness Knowledge</h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mt-6">
                No fluff, no bro-science. Just practical advice that actually works for college students.
              </p>
            </div>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg bg-transparent whitespace-nowrap">
              Write an Article
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 2).map((post, idx) => (
            <Card
              key={idx}
              className="bg-card border border-border overflow-hidden group cursor-pointer hover:border-secondary/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.trending && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Secondary Posts */}
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts.slice(2).map((post, idx) => (
            <Card
              key={idx}
              className="bg-card border border-border p-4 flex gap-4 group cursor-pointer hover:border-secondary/30 transition-all"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-tight group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Tips Grid */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-secondary" />
              Quick Reference Tips
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((item, idx) => (
              <Card key={idx} className="bg-card border border-border p-4 space-y-2">
                <h4 className="font-semibold text-sm text-secondary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.tip}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
        </div>
      </div>
    </section>
  )
}
