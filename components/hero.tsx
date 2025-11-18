'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  onSectionChange: (section: string) => void
}

export default function Hero({ onSectionChange }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              AI-Generated Projects
            </span>
            <span className="block text-foreground">Powered by Gemini Flash 2.0</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Showcase koleksi website HTML/CSS yang di-generate secara otomatis menggunakan Google Gemini Flash 2.0. Setiap project dibuat dengan AI yang menghasilkan design unik dan modern setiap 30 menit.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
              🤖 Gemini Flash 2.0
            </span>
            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium">
              ⚡ Auto-Generated
            </span>
            <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-medium">
              🎨 Unique Designs
            </span>
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium">
              ⏱️ Every 30 Minutes
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              onClick={() => onSectionChange('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </a>
            <a
              href="mailto:stinart123@gmail.com"
              className="px-8 py-3 border border-foreground/20 rounded-lg font-semibold hover:bg-foreground/5 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
