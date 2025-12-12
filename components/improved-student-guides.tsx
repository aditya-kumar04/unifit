"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Instagram,
  Award,
  Trophy
} from "lucide-react"

const guides = [
  {
    id: 1,
    name: "Arjun K.",
    year: "Senior",
    focus: "Strength Training",
    students: 34,
    color: "bg-blue-500",
    initials: "AK",
    image: "", // Will use fallback
    instagram: "@arjun_fitness",
    achievements: [
      "Campus Bodybuilding Champion 2023",
      "Helped 50+ students transform",
      "4.9/5 Student Rating"
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
    image: "", // Will use fallback
    instagram: "@maya_fitlife",
    achievements: [
      "Dorm Room Fitness Expert",
      "Creator of 100+ bodyweight routines",
      "Featured in Campus Health Magazine"
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
    image: "", // Will use fallback
    instagram: "@chris_trainingsmart",
    achievements: [
      "Balancing 20 Credits & Fitness",
      "Specialist in 30-Min Workouts",
      "Maintained #1 GPA in Kinesiology"
    ]
  },
]

export default function ImprovedStudentGuides() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {guides.map((guide) => (
        <Card
          key={guide.id}
          className="bg-card border border-border p-6 hover:border-secondary transition-all duration-200"
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
              <h3 className="font-bold text-lg truncate">{guide.name}</h3>
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
            <Button className="flex-1 h-9 text-sm font-medium">
              Connect
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9" asChild>
              <a href="#" aria-label="Instagram profile">
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
        </Card>
      ))}
    </div>
  )
}