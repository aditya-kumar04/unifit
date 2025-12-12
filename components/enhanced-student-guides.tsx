"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Calendar, 
  Target, 
  ArrowRight, 
  Check, 
  Users, 
  Instagram,
  Award,
  Trophy,
  Star
} from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Personalized Plan",
    desc: "A workout plan built around your schedule, equipment access, and actual goals.",
  },
  {
    icon: MessageCircle,
    title: "Direct Support",
    desc: "Text your guide anytime. Form checks, quick questions, or just motivation.",
  },
  {
    icon: Calendar,
    title: "Weekly Check-ins",
    desc: "15-min call each week to review progress and adjust your plan as needed.",
  },
]

const guides = [
  {
    id: 1,
    name: "Arjun K.",
    year: "Senior",
    focus: "Strength Training",
    students: 34,
    color: "bg-blue-500",
    initials: "AK",
    image: "/avatars/arjun.jpg",
    instagram: "@arjun_fitness",
    achievements: [
      { icon: Trophy, text: "Campus Bodybuilding Champion 2023" },
      { icon: Award, text: "Helped 50+ students transform" },
      { icon: Star, text: "4.9/5 Student Rating" }
    ]
  },
  {
    id: 2,
    name: "Maya R.",
    year: "Junior",
    focus: "No-Equipment Workouts",
    students: 28,
    color: "bg-pink-500",
    initials: "MR",
    image: "/avatars/maya.jpg",
    instagram: "@maya_fitlife",
    achievements: [
      { icon: Trophy, text: "Dorm Room Fitness Expert" },
      { icon: Award, text: "Creator of 100+ bodyweight routines" },
      { icon: Star, text: "Featured in Campus Health Magazine" }
    ]
  },
  {
    id: 3,
    name: "Chris T.",
    year: "Senior",
    focus: "Busy Schedules",
    students: 41,
    color: "bg-green-500",
    initials: "CT",
    image: "/avatars/chris.jpg",
    instagram: "@chris_trainingsmart",
    achievements: [
      { icon: Trophy, text: "Balancing 20 Credits & Fitness" },
      { icon: Award, text: "Specialist in 30-Min Workouts" },
      { icon: Star, text: "Maintained #1 GPA in Kinesiology" }
    ]
  },
]

export default function EnhancedStudentGuides() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null)

  return (
    <section id="mentors" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-balance">
            Student Guides Ready to Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with a student who's already figured it out. Not an AI, not a generic program—a real person who
            understands your college life.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-[21/9] w-full">
            <img
              src="/college-students-working-out-in-modern-gym--cinema.jpg"
              alt="Students training together"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Your journey starts with one conversation</h3>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => {
                const element = document.getElementById('rgipt-guides');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* The Problem → Solution */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card border border-border p-6 space-y-4">
            <div className="text-secondary font-semibold text-sm">Without Guidance</div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✗</span>
                <span>Random YouTube workouts with no structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✗</span>
                <span>No idea if you're doing exercises correctly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✗</span>
                <span>Motivation dies after 2 weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✗</span>
                <span>Same weight on the bar for months</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-card border border-green-500/30 p-6 space-y-4">
            <div className="text-green-500 font-semibold text-sm">With a UNIFIT Guide</div>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Structured plan that fits YOUR schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Form feedback via video messages</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Weekly accountability check-ins</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Progressive overload tracking</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* What you get */}
        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((item, idx) => (
            <Card key={idx} className="bg-card border border-border p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Guides preview */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">Meet Our Student Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card
                key={guide.id}
                className={`bg-card border p-6 transition-all ${
                  selectedGuide === guide.id ? "border-secondary ring-2 ring-secondary/20" : "border-border hover:border-border/80"
                }`}
              >
                {/* Guide Profile Header */}
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 border-2 border-secondary">
                    <AvatarImage src={guide.image} alt={guide.name} />
                    <AvatarFallback className={`${guide.color} text-white font-bold text-lg`}>
                      {guide.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{guide.name}</h4>
                    <p className="text-sm text-muted-foreground">{guide.year} • {guide.focus}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{guide.students} students helped</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-4 space-y-2">
                  {guide.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <achievement.icon className="w-4 h-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">{achievement.text}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Badge variant="secondary" className="text-xs">
                    {guide.instagram}
                  </Badge>
                </div>

                {/* Connect Button */}
                <Button
                  className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => setSelectedGuide(selectedGuide === guide.id ? null : guide.id)}
                >
                  {selectedGuide === guide.id ? "Selected ✓" : `Connect with ${guide.name.split(" ")[0]}`}
                </Button>

                {/* Expanded Details */}
                {selectedGuide === guide.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {guide.name} specializes in helping students with busy schedules achieve real fitness results. 
                      With a proven track record of helping {guide.students} students transform their health, 
                      they bring both expertise and relatability to your fitness journey.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Schedule
                      </Button>
                      <Button size="sm" variant="outline">
                        See Reviews
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg font-semibold rounded-full"
          >
            Get Matched with a Guide
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground">First consultation is free. No commitment.</p>
        </div>
      </div>
    </section>
  )
}