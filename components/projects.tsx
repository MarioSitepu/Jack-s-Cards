'use client'

import { useInView } from 'react-intersection-observer'
import ProjectCard from './project-card'

interface ProjectsProps {
  onSectionChange: (section: string) => void
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern shopping platform with real-time inventory and seamless checkout',
    category: 'E-Commerce',
    tags: ['React', 'TypeScript', 'Next.js'],
    image: '/modern-ecommerce-interface.png',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with interactive charts and real-time data visualization',
    category: 'Dashboard',
    tags: ['Next.js', 'Tailwind', 'Chart.js'],
    image: '/analytics-dashboard.png',
    color: 'from-pink-500 to-red-500',
  },
  {
    id: 3,
    title: 'Social Network',
    description: 'Community platform enabling users to connect, share, and collaborate',
    category: 'Social',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: '/social-media-interface-design.jpg',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 4,
    title: 'Content Management',
    description: 'Powerful CMS for managing digital content with advanced workflows',
    category: 'CMS',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    image: '/cms-interface.png',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 5,
    title: 'Mobile App Landing',
    description: 'Captivating landing page for a revolutionary mobile application',
    category: 'Landing',
    tags: ['React', 'Animation', 'Responsive'],
    image: '/mobile-app-landing-page.jpg',
    color: 'from-yellow-500 to-green-500',
  },
  {
    id: 6,
    title: 'AI Chat Interface',
    description: 'Intuitive AI-powered chatbot interface with natural language processing',
    category: 'AI/ML',
    tags: ['React', 'OpenAI', 'TypeScript'],
    image: '/ai-chatbot-interface.png',
    color: 'from-green-500 to-blue-500',
  },
]

export default function Projects({ onSectionChange }: ProjectsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Explore our latest work and see how we bring ideas to life
          </p>
        </div>

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
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
