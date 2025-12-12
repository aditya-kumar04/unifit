"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Program {
  name: string
  ageRange: string
  weeklyRoutine: string[]
  sessionDuration: string
  focus: string[]
  recovery: string[]
}

const programs: Program[] = [
  {
    name: "Freshman",
    ageRange: "18-19",
    weeklyRoutine: [
      "Monday: Full Body Strength",
      "Tuesday: Upper Body Focus",
      "Wednesday: Rest/Light Cardio",
      "Thursday: Lower Body Focus",
      "Friday: Full Body Circuit",
      "Sat-Sun: Recovery",
    ],
    sessionDuration: "30-45 minutes",
    focus: ["Build foundation", "Form mastery", "Consistency habits"],
    recovery: ["8-9 hours sleep", "High protein intake", "Hydration focus"],
  },
  {
    name: "Sophomore",
    ageRange: "19-20",
    weeklyRoutine: [
      "Monday: Chest & Triceps",
      "Tuesday: Back & Biceps",
      "Wednesday: Legs",
      "Thursday: Shoulder Focus",
      "Friday: Full Body Power",
      "Sat-Sun: Active Recovery",
    ],
    sessionDuration: "40-50 minutes",
    focus: ["Progressive overload", "Compound lifts", "Strength gains"],
    recovery: ["7-8 hours sleep", "Balanced meals", "Mobility work"],
  },
  {
    name: "Junior",
    ageRange: "20-21",
    weeklyRoutine: [
      "Monday: Chest & Accessories",
      "Tuesday: Legs & Core",
      "Wednesday: Active Recovery",
      "Thursday: Back & Shoulders",
      "Friday: Specialization Day",
      "Sat-Sun: Flexibility/Mobility",
    ],
    sessionDuration: "45-60 minutes",
    focus: ["Specialization", "Strength + hypertrophy", "Plateauing management"],
    recovery: ["Quality sleep", "Nutrition timing", "Stress management"],
  },
  {
    name: "Senior",
    ageRange: "21-23",
    weeklyRoutine: [
      "Monday: Strength Day",
      "Tuesday: Hypertrophy Day",
      "Wednesday: Rest/Mobility",
      "Thursday: Power Day",
      "Friday: Conditioning",
      "Sat-Sun: Lifestyle Integration",
    ],
    sessionDuration: "50-60 minutes",
    focus: ["Peak performance", "Life integration", "Sustainable habits"],
    recovery: ["8 hours sleep", "Post-graduation planning", "Mental health"],
  },
]

export default function AgeBasedPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(0)
  const program = programs[selectedProgram]

  return (
    <section className="py-24 px-4 bg-foreground/2">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">Guidance That Grows With You</h2>
          <p className="text-lg text-foreground/70">Mentorship-driven programs tailored to your college journey.</p>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {programs.map((prog, idx) => (
            <Button
              key={idx}
              onClick={() => setSelectedProgram(idx)}
              variant={selectedProgram === idx ? "default" : "outline"}
              className={`rounded-full px-6 transition-all ${
                selectedProgram === idx
                  ? "bg-accent text-background hover:bg-accent/90"
                  : "border-border hover:border-accent"
              }`}
            >
              {prog.name}
            </Button>
          ))}
        </div>

        {/* Selected Program Details */}
        <Card className="bg-background border border-border/50 p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{program.name} Program</h3>
              <p className="text-foreground/70">Ages {program.ageRange}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground/60">Session Duration:</p>
                <p className="text-lg font-semibold">{program.sessionDuration}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/30">
                <p className="text-sm font-semibold text-foreground/60 mb-3">Weekly Routine:</p>
                {program.weeklyRoutine.map((day, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-foreground/80">{day}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/60 mb-3">Focus Areas:</p>
                {program.focus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <p className="text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/60 mb-3">Recovery Essentials:</p>
                {program.recovery.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-foreground/5 rounded-lg border border-border/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-foreground/50" />
                    <p className="text-sm text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
