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

  useEffect(() => {
    // Load preview from API
    if (project.id) {
      fetch(`/api/projects/${project.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.html) {
            // Extract body content for preview
            const bodyMatch = data.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
            if (bodyMatch) {
              setPreviewHtml(bodyMatch[1])
            }
          }
        })
        .catch(() => {
          // Ignore errors
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
        {/* Preview Background - Render HTML preview */}
        <div className="relative w-full h-full">
          {previewHtml ? (
            <div 
              className="w-full h-full scale-150 origin-top-left pointer-events-none"
              dangerouslySetInnerHTML={{ __html: previewHtml }}
              style={{
                transform: 'scale(0.5)',
                transformOrigin: 'top left',
                width: '200%',
                height: '200%',
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-6xl opacity-50">🎨</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-background/0 to-background/95 flex flex-col justify-end p-6 transition-all duration-300 ${
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
