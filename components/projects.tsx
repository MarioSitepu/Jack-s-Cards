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
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProjects, setTotalProjects] = useState(0)
  const projectsPerPage = 6

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const response = await fetch(`/api/projects?page=${currentPage}&limit=${projectsPerPage}`)
        const data = await response.json()
        setProjects(data.projects || [])
        setTotalPages(data.pagination?.totalPages || 1)
        setTotalProjects(data.pagination?.total || 0)
        
        // Scroll to top of projects section when page changes
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [currentPage])

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
          <p className="text-foreground/60 text-lg mb-4">
            Koleksi website HTML/CSS yang di-generate otomatis oleh Gemini Flash 2.0. Setiap project memiliki design unik dan modern.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
              🤖 Powered by Gemini Flash 2.0
            </span>
            <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full">
              ⚡ Auto-Generated Every 30 Minutes
            </span>
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              🎨 Unique Designs
            </span>
          </div>
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
          <>
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <span>
                    Showing {((currentPage - 1) * projectsPerPage) + 1} to {Math.min(currentPage * projectsPerPage, totalProjects)} of {totalProjects} projects
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      currentPage === 1
                        ? 'bg-foreground/10 text-foreground/30 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      // Show first page, last page, current page, and pages around current
                      const showPage = 
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                      
                      if (!showPage) {
                        // Show ellipsis
                        if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                          return (
                            <span key={pageNum} className="px-2 text-foreground/40">
                              ...
                            </span>
                          )
                        }
                        return null
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                            currentPage === pageNum
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110'
                              : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20 hover:scale-105'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      currentPage === totalPages
                        ? 'bg-foreground/10 text-foreground/30 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
