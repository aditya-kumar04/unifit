"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Home, Play } from "lucide-react"

const workouts = [
  {
    id: "10min",
    time: "10 min",
    title: "Quick Morning Blast",
    description: "Wake up your body before class",
    equipment: "None",
    exercises: [
      { name: "Jumping Jacks", reps: "30 sec" },
      { name: "Push-ups", reps: "10 reps" },
      { name: "Bodyweight Squats", reps: "15 reps" },
      { name: "Mountain Climbers", reps: "30 sec" },
      { name: "Plank", reps: "30 sec" },
    ],
    repeat: "2 rounds",
  },
  {
    id: "20min",
    time: "20 min",
    title: "Dorm Room Strength",
    description: "Build muscle without leaving your room",
    equipment: "None",
    exercises: [
      { name: "Pike Push-ups", reps: "8 reps" },
      { name: "Bulgarian Split Squats", reps: "10 each leg" },
      { name: "Diamond Push-ups", reps: "8 reps" },
      { name: "Glute Bridges", reps: "15 reps" },
      { name: "Dead Bug", reps: "10 each side" },
    ],
    repeat: "3 rounds, 60s rest",
  },
  {
    id: "30min",
    time: "30 min",
    title: "Full Body Burner",
    description: "Complete workout when you have time",
    equipment: "Optional: Dumbbells",
    exercises: [
      { name: "Squat to Press", reps: "12 reps" },
      { name: "Bent-over Rows", reps: "12 reps" },
      { name: "Lunges", reps: "10 each leg" },
      { name: "Push-up to Renegade Row", reps: "8 reps" },
      { name: "Bicycle Crunches", reps: "20 reps" },
    ],
    repeat: "4 rounds, 90s rest",
  },
]

export default function QuickWorkouts() {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>("20min")

  const activeWorkout = workouts.find((w) => w.id === selectedWorkout)

  return (
    <section id="workouts" className="py-20 px-4 bg-foreground/[0.02]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Sample workouts for busy days</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            No gym required. Pick your time, follow the plan. Your mentor will customize these for you.
          </p>
        </div>

        {/* Time selector */}
        <div className="flex justify-center gap-3">
          {workouts.map((workout) => (
            <button
              key={workout.id}
              onClick={() => setSelectedWorkout(workout.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedWorkout === workout.id
                  ? "bg-accent text-background"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {workout.time}
            </button>
          ))}
        </div>

        {/* Workout display */}
        {activeWorkout && (
          <Card className="bg-background border border-border overflow-hidden">
            <div className="p-6 border-b border-border bg-foreground/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{activeWorkout.title}</h3>
                  <p className="text-foreground/60 text-sm">{activeWorkout.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {activeWorkout.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Home className="w-4 h-4" />
                    {activeWorkout.equipment}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {activeWorkout.exercises.map((exercise, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{exercise.name}</span>
                  </div>
                  <span className="text-foreground/60 text-sm">{exercise.reps}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border bg-foreground/[0.02] flex items-center justify-between">
              <span className="text-sm text-foreground/60">{activeWorkout.repeat}</span>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-background">
                <Play className="w-4 h-4 mr-1.5" />
                Start workout
              </Button>
            </div>
          </Card>
        )}

        <p className="text-center text-sm text-foreground/40">
          These are samples. Your mentor creates workouts tailored to YOUR goals and equipment.
        </p>
      </div>
    </section>
  )
}
