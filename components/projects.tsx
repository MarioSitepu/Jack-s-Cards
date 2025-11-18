'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './project-card'

interface ProjectsProps {
  onSectionChange: (section: string) => void
}

interface Project {
  id: string
  name: string
  date: string
  displayDate: string
  path: string
  htmlPath: string
  cssPath: string
  title?: string
  description?: string
  preview?: string
}

export default function Projects({ onSectionChange }: ProjectsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data.projects || [])
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Generate color gradient based on index
  const getColorGradient = (index: number) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-pink-500 to-red-500',
      'from-red-500 to-orange-500',
      'from-orange-500 to-yellow-500',
      'from-yellow-500 to-green-500',
      'from-green-500 to-blue-500',
      'from-blue-500 to-indigo-500',
      'from-indigo-500 to-purple-500',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section
      id="projects"
      ref={ref}
      onClick={() => onSectionChange('projects')}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/2"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg">
            Explore AI-generated websites and see how we bring ideas to life
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
            <p className="mt-4 text-foreground/60">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-foreground/60 text-lg">No projects found. Projects will appear here once generated.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transform transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
              >
                <ProjectCard 
                  project={{
                    ...project,
                    category: 'AI Generated',
                    tags: ['HTML', 'CSS', 'AI'],
                    color: getColorGradient(index),
                  }} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
