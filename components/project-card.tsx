'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    tags: string[]
    image: string
    color: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-card to-card border border-border transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
    >
      {/* Image Background */}
      <div className="relative w-full h-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
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
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            </div>
          </div>

          <p className={`text-foreground/70 text-sm leading-relaxed transition-all duration-300 ${
            isHovered ? 'line-clamp-3' : 'line-clamp-2'
          }`}>
            {project.description}
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
  )
}
