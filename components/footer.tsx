export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Showcase
            </h3>
            <p className="text-foreground/60 text-sm mb-3">
              Showcase koleksi website HTML/CSS yang di-generate secara otomatis menggunakan Google Gemini Flash 2.0
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs">🤖 Gemini 2.0</span>
              <span className="px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded text-xs">⚡ Auto-Gen</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">AI Specifications</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Model: Gemini 2.5/2.0 Flash</li>
              <li>Temperature: 0.7</li>
              <li>Max Tokens: 4,000</li>
              <li>Interval: 30 minutes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Generation</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Theme: Modern</li>
              <li>Style: Gradient</li>
              <li>Output: HTML + CSS</li>
              <li>Format: Responsive</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Gemini AI Studio</a></li>
              <li><a href="https://github.com/MarioSitepu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub Profile</a></li>
              <li><a href="https://github.com/MarioSitepu/Jack-s-Cards" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Repository</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <div>
            <p>&copy; {currentYear} AI-Generated Projects Showcase. Powered by Google Gemini Flash 2.0</p>
            <p className="mt-2">
              Created by <a href="https://github.com/MarioSitepu" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 transition-colors font-medium">@MarioSitepu</a>
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-foreground/40">Auto-generated every 30 minutes</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
