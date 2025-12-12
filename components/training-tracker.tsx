"use client"

import { useState, useRef, useEffect } from "react"
import { Check, ChevronLeft, ChevronRight, Flame, Target } from "lucide-react"

export default function TrainingTracker() {
  const [trainedDays, setTrainedDays] = useState<Set<number>>(new Set([3, 5, 6, 8, 9, 10, 11, 12]))
  const scrollRef = useRef<HTMLDivElement>(null)
  const today = new Date()
  const currentDay = today.getDate()
  const currentMonth = today.toLocaleDateString("en-US", { month: "long" })
  const currentYear = today.getFullYear()

  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const getDayName = (day: number) => {
    const date = new Date(today.getFullYear(), today.getMonth(), day)
    return date.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 2)
  }

  const toggleDay = (day: number) => {
    if (day > currentDay) return
    setTrainedDays((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(day)) {
        newSet.delete(day)
      } else {
        newSet.add(day)
      }
      return newSet
    })
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (scrollRef.current) {
      const todayElement = scrollRef.current.querySelector(`[data-day="${currentDay}"]`)
      if (todayElement) {
        todayElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      }
    }
  }, [currentDay])

  const trainedCount = trainedDays.size
  const streakDays = calculateStreak(trainedDays, currentDay)
  const consistency = currentDay > 0 ? Math.round((trainedCount / currentDay) * 100) : 0

  return (
    <section id="tracker" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-balance">Did I train today?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A simple yes/no marker that removes streak pressure.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Target className="w-4 h-4 text-secondary" />
              <span className="text-2xl font-black">{trainedCount}</span>
            </div>
            <p className="text-xs text-muted-foreground">Days trained</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-2xl font-black text-orange-500">{streakDays}</span>
            </div>
            <p className="text-xs text-muted-foreground">Current streak</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <span className="text-2xl font-black text-green-500">{consistency}%</span>
            <p className="text-xs text-muted-foreground">Consistency</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex items-center">
            {/* Left scroll button */}
            <button
              onClick={() => scroll("left")}
              className="flex-shrink-0 w-10 h-full flex items-center justify-center hover:bg-card/80 border-r border-border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Scrollable area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Grid container for perfect alignment */}
              <div className="inline-grid" style={{ gridTemplateColumns: `80px repeat(${days.length}, 48px)` }}>
                {/* Header row: Label + Day names */}
                <div className="h-12 flex items-center justify-center border-b border-r border-border bg-card sticky left-0 z-10" />
                {days.map((day) => (
                  <div
                    key={`header-${day}`}
                    data-day={day}
                    className={`h-12 flex flex-col items-center justify-center border-b border-r border-border/50 ${
                      day === currentDay ? "bg-green-500/10" : ""
                    }`}
                  >
                    <span className="text-[10px] text-muted-foreground uppercase leading-none">{getDayName(day)}</span>
                    <span
                      className={`text-xs font-semibold leading-none mt-1 ${day === currentDay ? "text-green-500" : "text-foreground/70"}`}
                    >
                      {day}
                    </span>
                  </div>
                ))}

                {/* GYM row: Label + Checkboxes */}
                <div className="h-14 flex items-center gap-2 px-3 border-r border-border bg-card sticky left-0 z-10">
                  <span className="font-bold text-sm">GYM</span>
                </div>
                {days.map((day) => {
                  const isTrained = trainedDays.has(day)
                  const isToday = day === currentDay
                  const isFuture = day > currentDay

                  return (
                    <div
                      key={`gym-${day}`}
                      className={`h-14 flex items-center justify-center border-r border-border/50 ${
                        isToday ? "bg-green-500/10" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(day)}
                        disabled={isFuture}
                        className={`
                          w-9 h-9 rounded-md flex items-center justify-center transition-all duration-200
                          ${
                            isFuture
                              ? "bg-card border border-border/30 cursor-not-allowed opacity-30"
                              : isTrained
                                ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                                : "bg-card border border-border hover:border-green-500/50"
                          }
                          ${isToday && isTrained ? "ring-2 ring-green-400 ring-offset-2 ring-offset-card" : ""}
                        `}
                        aria-label={`${isTrained ? "Unmark" : "Mark"} day ${day}`}
                      >
                        {isTrained && <Check className="w-5 h-5" strokeWidth={3} />}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right scroll button */}
            <button
              onClick={() => scroll("right")}
              className="flex-shrink-0 w-10 h-full flex items-center justify-center hover:bg-card/80 border-l border-border"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {currentMonth} {currentYear} • Click any past day to mark your training
        </p>
      </div>
    </section>
  )
}

function calculateStreak(trainedDays: Set<number>, currentDay: number): number {
  let streak = 0
  for (let day = currentDay; day >= 1; day--) {
    if (trainedDays.has(day)) {
      streak++
    } else {
      break
    }
  }
  return streak
}
