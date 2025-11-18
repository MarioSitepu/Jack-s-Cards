'use client'

import { useInView } from 'react-intersection-observer'

interface AboutProps {
  onSectionChange: (section: string) => void
}

export default function About({ onSectionChange }: AboutProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      onClick={() => onSectionChange('about')}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Gemini Flash 2.0
              </span>
            </h2>

            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              Semua project di showcase ini di-generate secara otomatis menggunakan Google Gemini Flash 2.0, model AI terbaru yang menghasilkan HTML/CSS unik dengan design modern dan responsif.
            </p>

            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Setiap 30 menit, AI worker akan generate project baru dengan tema, style, dan konten yang berbeda-beda, menciptakan koleksi website yang terus berkembang.
            </p>

            <div className="mb-8 p-6 bg-foreground/5 rounded-xl border border-foreground/10">
              <h3 className="text-xl font-bold mb-4 text-foreground">⚙️ Spesifikasi Generate</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-foreground/60 mb-1">AI Model</p>
                  <p className="font-semibold">Gemini 2.5 Flash / 2.0 Flash</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Temperature</p>
                  <p className="font-semibold">0.7 (Creative)</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Max Tokens</p>
                  <p className="font-semibold">4,000 tokens</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Generate Interval</p>
                  <p className="font-semibold">30 menit</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Default Theme</p>
                  <p className="font-semibold">Modern</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Default Style</p>
                  <p className="font-semibold">Gradient</p>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {['AI-Powered Generation', 'Unique Designs Every Time', 'Responsive & Modern', 'Auto-Updated Showcase'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Column - Visual */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-foreground/60 font-semibold mb-2">Google Gemini Flash 2.0</p>
                <p className="text-foreground/50 text-sm">AI-Powered HTML/CSS Generation</p>
              </div>
              <div className="w-full max-w-xs space-y-2 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Model:</span>
                  <span className="text-foreground font-medium">gemini-2.5-flash</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Temperature:</span>
                  <span className="text-foreground font-medium">0.7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Max Tokens:</span>
                  <span className="text-foreground font-medium">4,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Output:</span>
                  <span className="text-foreground font-medium">HTML + CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
