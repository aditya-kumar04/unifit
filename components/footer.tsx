"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side - Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              UNIFIT
            </Link>
            <p className="text-muted-foreground max-w-md">
              Designed for Students, Built for Life.
            </p>
          </div>

          {/* Right side - Founder section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                Hii I am Shiva building UNI Organisation
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              transforming not just my own routine but creating a proven system that works for real students, in real situations. Let's work together — To get started, have a 1:1 chat with me!
            </p>
            
            {/* Founder's note */}
            <div className="border-l-2 border-muted-foreground pl-4 py-1">
              <p className="text-sm italic text-muted-foreground">
                "Take It Easy!!"
              </p>
            </div>
            
            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:shivarathorecse@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-muted p-3 text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/shiva-rathore-2027cse"
                className="inline-flex items-center justify-center rounded-full bg-muted p-3 text-foreground hover:bg-muted/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shivarathoreee/"
                className="inline-flex items-center justify-center rounded-full bg-muted p-3 text-foreground hover:bg-muted/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UNIFIT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}