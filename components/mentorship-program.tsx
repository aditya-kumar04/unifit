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
  Trophy
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
    name: "Parth Pandey",
    year: "3rd Year RGIPT",
    focus: "Powerlifting & Transformation",
    students: 44,
    color: "bg-blue-500",
    initials: "PP",
    image: "/Screenshot 2025-12-12 230137.png",
    instagram: "@parth_zyzz",
    achievements: [
      "National-Level Powerlifting Champion",
      "Runner-up Highest Weight Lifter in Nationals",
      "Transformed 44+ Students' Fitness Journeys",
      "Expert in Discipline-Based Training"
    ]
  },
  {
    id: 2,
    name: "Dev Saha",
    year: "3rd Year RGIPT",
    focus: "",
    students: 41,
    color: "bg-green-500",
    initials: "DS",
    image: "/Screenshot 2025-12-12 231123.png",
    instagram: "@_dev__saha",
    achievements: [
      "6+ Years of Training Experience",
      "3× Gold Medalist Powerlifter",
      "Best Total: 445kg (74kg Category)",
      "Expertise in Calisthenics & Powerlifting"
    ]
  },
  {
    id: 3,
    name: "Shagun Rai",
    year: "1st Year RGIPT",
    focus: "",
    students: 28,
    color: "bg-pink-500",
    initials: "SR",
    image: "", // Will use fallback
    instagram: "@itsme_shagunrai",
    achievements: [
      "Bursting Myths in Female Fitness",
      "7 Years Experience in Badminton & Gym",
      "Specialist in Strength & Cardio Training",
      "Customized Plans for Beginners"
    ]
  },
]

export default function MentorshipProgram() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null)

  return (
    <section id="mentorship" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-balance">
            Turn Randomness Into Real Progress
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
        <div id="rgipt-guides" className="space-y-6">
          <h3 className="text-3xl font-bold text-center">RGIPT STUDENTS READY TO GUIDE</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card
                key={guide.id}
                className={`bg-card border p-6 transition-all ${
                  selectedGuide === guide.id ? "border-secondary ring-2 ring-secondary/20" : "border-border hover:border-border/80"
                }`}
              >
                {/* Guide Profile Header */}
                <div className="flex items-center gap-4">
                  <Avatar className="size-16 border-2 border-secondary">
                    <AvatarImage src={guide.image} alt={guide.name} />
                    <AvatarFallback className={`${guide.color} text-white font-bold text-lg`}>
                      {guide.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg truncate">{guide.name}</h4>
                    <p className="text-sm text-muted-foreground">{guide.year} • {guide.focus}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{guide.students} students helped</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <h4 className="text-sm font-semibold">Achievements</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {guide.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Trophy className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-6">
                  <Button 
                    className="flex-1 h-9 text-sm font-medium"
                    onClick={() => setSelectedGuide(selectedGuide === guide.id ? null : guide.id)}
                  >
                    {selectedGuide === guide.id ? "Selected ✓" : "Get Guidance"}
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9" asChild>
                    <a href={`https://www.instagram.com/${guide.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                
                {/* Instagram Handle */}
                <div className="mt-3">
                  <Badge variant="secondary" className="w-full justify-center text-xs py-1 font-mono">
                    {guide.instagram}
                  </Badge>
                </div>

                {/* Expanded Details */}
                {selectedGuide === guide.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {guide.id === 1 
                        ? `${guide.name} is a fitness professional, national-level powerlifting champion, and a coach known for turning discipline into a lifestyle. With years of hands-on experience inside the gym and beyond, they've mastered not just the techniques of training—but the science, psychology, and strategy behind real transformation. Their goal isn't just to train you—but to build you. Stronger. Smarter. More confident. And capable of achieving results you once thought impossible.`
                        : guide.id === 2
                        ? `${guide.name} is a dedicated strength athlete with 6+ years of training experience, specializing in both powerlifting and calisthenics. Competing in the 74 kg category, ${guide.name} blends the best of both worlds — technical powerlifting mechanics and high-level calisthenics skills.`
                        : `${guide.name} is breaking barriers in female fitness with 7 years of experience in both badminton and gym training. She specializes in creating customized plans for beginners, helping them ease into working out and building sustainable fitness habits. Her approach focuses on strength and cardio training tailored specifically for women's fitness needs.`
                      }
                    </p>
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
