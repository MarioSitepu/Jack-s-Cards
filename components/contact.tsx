'use client'

import { useInView } from 'react-intersection-observer'

interface ContactProps {
  onSectionChange: (section: string) => void
}

export default function Contact({ onSectionChange }: ContactProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      ref={ref}
      onClick={() => onSectionChange('contact')}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About This Showcase</h2>
          <p className="text-foreground/60 text-lg mb-6">
            Website ini menampilkan koleksi project HTML/CSS yang di-generate secara otomatis oleh AI menggunakan Google Gemini Flash 2.0. Setiap project dibuat dengan spesifikasi yang sama untuk menghasilkan variasi design yang unik.
          </p>
          
          <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 mb-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">🔧 Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-foreground/60 mb-1">AI Model</p>
                <p className="font-semibold text-foreground">Google Gemini 2.5 Flash / 2.0 Flash</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Temperature</p>
                <p className="font-semibold text-foreground">0.7 (Creative Mode)</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Max Output Tokens</p>
                <p className="font-semibold text-foreground">4,000 tokens</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Generation Interval</p>
                <p className="font-semibold text-foreground">Every 30 minutes</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Default Theme</p>
                <p className="font-semibold text-foreground">Modern</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Default Style</p>
                <p className="font-semibold text-foreground">Gradient</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Output Format</p>
                <p className="font-semibold text-foreground">HTML + CSS (Separated)</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Responsive</p>
                <p className="font-semibold text-foreground">Yes (Mobile-first)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Semua project di-generate menggunakan AI Worker yang berjalan secara otomatis. 
              Setiap generate menghasilkan design yang berbeda-beda dengan tema dan style yang unik.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/MarioSitepu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm font-medium hover:bg-purple-500/20 transition-colors"
              >
                👤 GitHub Profile
              </a>
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-lg text-sm font-medium hover:bg-pink-500/20 transition-colors"
              >
                🌐 Gemini AI Studio
              </a>
              <a
                href="mailto:stinart123@gmail.com"
                className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors"
              >
                📧 Contact Me
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
