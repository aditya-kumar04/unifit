"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Target, Dumbbell, Heart, Zap, TrendingUp, BookOpen, ChevronDown, ChevronUp } from "lucide-react"

interface Exercise {
  title: string
  description: string
  targets: string[]
  dos: string[]
  donts: string[]
  mistakes: string[]
  icon: React.ReactNode
  iconBg: string
}

const exercises: Exercise[] = [
  {
    title: "Push-ups",
    description: "Lower your body until chest nearly touches floor, then push back up.",
    targets: ["Chest", "Triceps", "Shoulders"],
    dos: ["Full extension", "Controlled motion"],
    donts: ["Don't flare elbows", "Don't sag hips"],
    mistakes: ["Sagging hips reduce core engagement", "Partial reps limit strength gains"],
    icon: <Target className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Squats",
    description: "Lower hips back and down while keeping chest up, then drive through heels.",
    targets: ["Quads", "Glutes", "Core"],
    dos: ["Control descent", "Full range"],
    donts: ["Don't let knees cave", "Don't bounce at bottom"],
    mistakes: ["Knees caving inward risks injury", "Bouncing stresses joints"],
    icon: <Dumbbell className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Plank",
    description: "Hold rigid body position on forearms and toes, engaging entire core.",
    targets: ["Core", "Abs", "Lower Back"],
    dos: ["Keep body straight", "Engage glutes"],
    donts: ["Don't drop hips", "Don't hold breath"],
    mistakes: ["Dropping hips strains lower back", "Holding breath limits endurance"],
    icon: <Heart className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Lunges",
    description: "Step forward and lower back knee toward ground, keeping front shin vertical.",
    targets: ["Quads", "Glutes", "Hamstrings"],
    dos: ["Keep torso upright", "Control the descent"],
    donts: ["Don't let knee pass toes", "Don't rush reps"],
    mistakes: ["Knee past toes stresses joint", "Rushing reduces muscle activation"],
    icon: <Zap className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Pull-ups",
    description: "Pull body up until chin clears bar, then lower with control.",
    targets: ["Back", "Biceps", "Core"],
    dos: ["Full extension", "Controlled motion"],
    donts: ["Don't swing body", "Don't use momentum"],
    mistakes: ["Swinging reduces muscle engagement", "Partial reps limit strength gains"],
    icon: <TrendingUp className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Dips",
    description: "Lower body by bending elbows, then press back up to start.",
    targets: ["Triceps", "Chest", "Shoulders"],
    dos: ["Control descent", "Full range"],
    donts: ["Don't shrug shoulders", "Don't go too deep"],
    mistakes: ["Shrugging stresses shoulders", "Going too low risks injury"],
    icon: <BookOpen className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Rows",
    description: "Pull weight to lower chest while keeping back straight and core tight.",
    targets: ["Back", "Biceps", "Core"],
    dos: ["Squeeze shoulder blades", "Keep back flat"],
    donts: ["Don't round back", "Don't use momentum"],
    mistakes: ["Rounding back risks injury", "Using momentum reduces effectiveness"],
    icon: <Dumbbell className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
  {
    title: "Deadlifts",
    description: "Lift bar by extending hips and knees, keeping bar close to body.",
    targets: ["Back", "Glutes", "Hamstrings"],
    dos: ["Keep bar close", "Drive through heels"],
    donts: ["Don't round back", "Don't jerk weight"],
    mistakes: ["Rounded back is dangerous", "Jerking weight causes injury"],
    icon: <Heart className="w-5 h-5" />,
    iconBg: "bg-secondary/20 text-secondary",
  },
]

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="bg-card border border-border hover:border-secondary/50 transition-all duration-300">
      <div className="p-5 space-y-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${exercise.iconBg} flex items-center justify-center`}>
          {exercise.icon}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-bold text-lg text-foreground">{exercise.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{exercise.description}</p>
        </div>

        {/* Targets */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Target:</p>
          <div className="flex flex-wrap gap-2">
            {exercise.targets.map((target) => (
              <span
                key={target}
                className="px-3 py-1 rounded-full bg-card border border-border text-xs text-foreground"
              >
                {target}
              </span>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs text-secondary hover:text-secondary/80 transition-colors w-full pt-2"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" /> Hide details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> Show Do's, Don'ts & Mistakes
            </>
          )}
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="space-y-4 pt-3 border-t border-border animate-fade-in-up">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-green-500 mb-2">Do's:</p>
                <ul className="space-y-1">
                  {exercise.dos.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-green-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary mb-2">Don'ts:</p>
                <ul className="space-y-1">
                  {exercise.donts.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-secondary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-amber-500 mb-2">Common Mistakes:</p>
              <ul className="space-y-1">
                {exercise.mistakes.map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-amber-500">⚠</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default function ExerciseLibrary() {
  return (
    <section id="exercises" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-balance">
            Exercises You Actually Understand
          </h2>
          <p className="text-lg text-muted-foreground">Noise-free, beginner-friendly learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {exercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </div>
      </div>
    </section>
  )
}
