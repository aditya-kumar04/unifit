"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, ThumbsUp, ThumbsDown, CheckCircle, Mail } from "lucide-react"

export default function FeedbackRequest() {
  const [rating, setRating] = useState<"up" | "down" | null>(null)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with feedback data
    const subject = encodeURIComponent("UNIFIT Website Feedback")
    const body = encodeURIComponent(`Rating: ${rating ? (rating === 'up' ? 'Useful' : 'Needs Work') : 'No rating provided'}\n\nFeedback:\n${feedback}`)
    const mailtoLink = `mailto:shivarathorecse@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show thank you message
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border border-green-500/30 p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              Your feedback helps us build a better platform for college students like you.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              If your email client didn't open automatically, please click the button below:
            </p>
            <Button 
              onClick={() => {
                const subject = encodeURIComponent("UNIFIT Website Feedback")
                const body = encodeURIComponent(`Rating: ${rating ? (rating === 'up' ? 'Useful' : 'Needs Work') : 'No rating provided'}\n\nFeedback:\n${feedback}`)
                window.location.href = `mailto:shivarathorecse@gmail.com?subject=${subject}&body=${body}`
              }}
              className="mt-2"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Feedback via Email
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
            <MessageSquare className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Help Us Improve</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We're building UNIFIT for students, by listening to students. Your honest feedback shapes what we build
            next.
          </p>
        </div>

        {/* Feedback Form */}
        <Card className="bg-card border border-border p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Quick Rating */}
            <div className="space-y-3">
              <label className="text-sm font-medium">How useful is this website to you?</label>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant={rating === "up" ? "default" : "outline"}
                  className={`flex-1 py-6 ${rating === "up" ? "bg-green-500 hover:bg-green-600 border-green-500" : ""}`}
                  onClick={() => setRating("up")}
                >
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Useful
                </Button>
                <Button
                  type="button"
                  variant={rating === "down" ? "default" : "outline"}
                  className={`flex-1 py-6 ${rating === "down" ? "bg-secondary hover:bg-secondary/90" : ""}`}
                  onClick={() => setRating("down")}
                >
                  <ThumbsDown className="w-5 h-5 mr-2" />
                  Needs Work
                </Button>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div className="space-y-3">
              <label className="text-sm font-medium">What would make this more helpful for you?</label>
              <Textarea
                placeholder="Tell us what features you'd love to see, what's confusing, or what's working well..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="resize-none bg-background"
              />
            </div>

            {/* Suggestions */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground">Quick suggestions (click to add)</label>
              <div className="flex flex-wrap gap-2">
                {[
                  "More exercises",
                  "Video tutorials",
                  "Diet plans",
                  "Progress photos feature",
                  "Mobile app",
                  "Community forum",
                  "Workout timer",
                  "Calorie tracker",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setFeedback((prev) => (prev ? `${prev}, ${suggestion}` : `I'd like: ${suggestion}`))}
                    className="px-3 py-1.5 text-xs bg-background border border-border rounded-full hover:border-secondary/50 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-semibold"
              disabled={!rating && !feedback}
            >
              <Send className="w-5 h-5 mr-2" />
              Send Feedback
            </Button>
          </form>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          All feedback is sent directly to our founder's email and helps improve UNIFIT for everyone.
        </p>
      </div>
    </section>
  )
}