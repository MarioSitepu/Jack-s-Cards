'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: string
    title?: string
    name: string
    description?: string
    preview?: string
    category: string
    tags: string[]
    path: string
    htmlPath: string
    displayDate?: string
    color: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [previewHtml, setPreviewHtml] = useState<string>('')
  const [previewCss, setPreviewCss] = useState<string>('')
  const [previewLoaded, setPreviewLoaded] = useState(false)

  useEffect(() => {
    // Load preview from API - ensure CSS is always loaded
    if (project.id) {
      // Try API route first
      fetch(`/api/projects/${project.id}`)
        .then(res => {
          if (!res.ok) throw new Error(`API returned ${res.status}`)
          return res.json()
        })
        .then(data => {
          if (data.html) {
            // Ensure CSS is always present
            const css = data.css || ''
            console.log(`✅ Loaded preview for project ${project.id}`, { 
              htmlLength: data.html.length, 
              cssLength: css.length,
              hasCss: css.length > 0
            })
            setPreviewHtml(data.html)
            setPreviewCss(css) // Always set CSS, even if empty
            setPreviewLoaded(true)
          } else {
            console.warn(`No HTML content for project ${project.id}`)
          }
        })
        .catch((error) => {
          console.warn(`API route failed for ${project.id}, trying static files:`, error)
          // If API fails, try fetching from static files
          Promise.all([
            fetch(`/projects/${project.id}/index.html`).catch(() => null),
            fetch(`/projects/${project.id}/style.css`).catch(() => null)
          ]).then(([htmlRes, cssRes]) => {
            if (htmlRes && htmlRes.ok) {
              htmlRes.text().then(html => {
                // Always try to get CSS
                let css = ''
                if (cssRes && cssRes.ok) {
                  cssRes.text().then(cssText => {
                    css = cssText
                    console.log(`✅ Loaded preview from static files for project ${project.id}`, { 
                      htmlLength: html.length,
                      cssLength: css.length,
                      hasCss: css.length > 0
                    })
                    setPreviewHtml(html)
                    setPreviewCss(css)
                    setPreviewLoaded(true)
                  }).catch(() => {
                    // CSS fetch failed, but continue with HTML
                    console.warn(`CSS fetch failed for ${project.id}, continuing without CSS`)
                    setPreviewHtml(html)
                    setPreviewCss('')
                    setPreviewLoaded(true)
                  })
                } else {
                  // No CSS response, but continue with HTML
                  console.warn(`No CSS file for ${project.id}, continuing without CSS`)
                  setPreviewHtml(html)
                  setPreviewCss('')
                  setPreviewLoaded(true)
                }
              })
            } else {
              console.warn(`Failed to load static files for ${project.id}`)
            }
          })
        })
    }
  }, [project.id])

  const title = project.title || project.name
  const description = project.description || project.preview || 'AI Generated Project'

  return (
    <Link href={`/project/${project.id}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-card to-card border border-border transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
      >
        {/* Preview Background - Render website preview */}
        <div className="relative w-full h-full overflow-hidden bg-background">
          {previewLoaded && previewHtml ? (
            <div className="absolute inset-0 w-full h-full">
              <iframe
                srcDoc={(() => {
                  // Process HTML to inject CSS
                  let htmlWithCss = previewHtml
                  
                  // Remove external CSS link
                  htmlWithCss = htmlWithCss.replace(
                    /<link[^>]*rel=["']stylesheet["'][^>]*>/gi,
                    ''
                  )
                  
                  // Extract body content
                  const bodyMatch = htmlWithCss.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
                  const bodyContent = bodyMatch ? bodyMatch[1] : htmlWithCss
                  
                  // Create complete HTML with CSS - ALWAYS include CSS
                  // Ensure CSS is always present, even if empty
                  const cssContent = previewCss || '/* No CSS available */'
                  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; }
    ${cssContent}
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`
                  
                  return fullHtml
                })()}
                className="absolute top-0 left-0 border-0 pointer-events-none"
                style={{
                  transform: 'scale(0.35)',
                  transformOrigin: 'top left',
                  width: '285%',
                  height: '285%',
                  minWidth: '100%',
                  minHeight: '100%',
                  backgroundColor: 'transparent',
                }}
                title={`Preview of ${project.name}`}
                sandbox="allow-same-origin"
                loading="lazy"
                onLoad={() => {
                  console.log(`✅ Iframe loaded for project ${project.id}`)
                }}
                onError={(e) => {
                  console.error(`❌ Iframe error for project ${project.id}:`, e)
                }}
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
              <div className="text-6xl opacity-50 animate-pulse">🎨</div>
              {!previewLoaded && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 text-xs text-foreground/40">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Gradient overlay for better text readability - less opaque to show preview */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none z-10" />
        </div>

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 flex flex-col justify-end p-6 transition-all duration-300 z-20 ${
            isHovered ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground line-clamp-1">{title}</h3>
                {project.displayDate && (
                  <p className="text-xs text-foreground/50 mt-1">{project.displayDate}</p>
                )}
              </div>
            </div>

            <p className={`text-foreground/70 text-sm leading-relaxed transition-all duration-300 ${
              isHovered ? 'line-clamp-3' : 'line-clamp-2'
            }`}>
              {description}
            </p>

            <div className={`flex flex-wrap gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-foreground/10 text-foreground/70 rounded-md border border-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className={`w-full mt-4 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              View Project
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
