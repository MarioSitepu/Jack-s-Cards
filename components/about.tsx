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
              We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Digital Magic
              </span>
            </h2>

            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              Our team combines strategic thinking with creative excellence. We specialize in building beautiful, responsive websites and applications that solve real problems.
            </p>

            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              From sleek landing pages to complex applications, we deliver solutions that exceed expectations and drive measurable results.
            </p>

            <ul className="space-y-3">
              {['Responsive Design', 'Performance Optimized', 'SEO Friendly', 'User Focused'].map(
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-foreground/60">Web Development Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
