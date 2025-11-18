import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

export async function GET(request: Request) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '6', 10)
    
    // Check both public/projects and projects (root)
    const publicProjectsDir = path.join(process.cwd(), 'public', 'projects')
    const rootProjectsDir = path.join(process.cwd(), 'projects')
    const projectsDir = fs.existsSync(rootProjectsDir) ? rootProjectsDir : publicProjectsDir
    
    // Check if projects directory exists
    if (!fs.existsSync(projectsDir)) {
      return NextResponse.json({ 
        projects: [],
        pagination: {
          page: 1,
          limit,
          total: 0,
          totalPages: 0
        }
      })
    }

    const projects: Project[] = []
    const folders = fs.readdirSync(projectsDir, { withFileTypes: true })

    for (const folder of folders) {
      if (folder.isDirectory()) {
        const projectPath = path.join(projectsDir, folder.name)
        const htmlPath = path.join(projectPath, 'index.html')
        const cssPath = path.join(projectPath, 'style.css')

        // Check if HTML file exists
        if (fs.existsSync(htmlPath)) {
          // Parse date from folder name (format: YYYY-MM-DD-HH-MM)
          const folderName = folder.name
          let displayDate = folderName
          let date = new Date()

          try {
            const parts = folderName.split('-')
            if (parts.length >= 3) {
              const year = parseInt(parts[0])
              const month = parseInt(parts[1]) - 1 // Month is 0-indexed
              const day = parseInt(parts[2])
              const hour = parts.length >= 4 ? parseInt(parts[3]) : 0
              const minute = parts.length >= 5 ? parseInt(parts[4]) : 0
              
              date = new Date(year, month, day, hour, minute)
              
              // Format display date
              displayDate = date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            }
          } catch (e) {
            // Keep folder name as display date if parsing fails
          }

          // Read HTML to extract title and description
          let title = folderName
          let description = 'AI Generated Project'
          let preview = ''

          try {
            const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
            
            // Extract title from <title> tag or <h1>
            const titleMatch = htmlContent.match(/<title[^>]*>([^<]+)<\/title>/i) ||
                              htmlContent.match(/<h1[^>]*>([^<]+)<\/h1>/i)
            if (titleMatch) {
              title = titleMatch[1].trim()
            }

            // Extract description from meta description or first <p>
            const metaDescMatch = htmlContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
            const pMatch = htmlContent.match(/<p[^>]*>([^<]+)<\/p>/i)
            
            if (metaDescMatch) {
              description = metaDescMatch[1].trim()
            } else if (pMatch) {
              description = pMatch[1].trim().substring(0, 150)
            }

            // Extract preview (first 200 chars of body text)
            const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
            if (bodyMatch) {
              const bodyText = bodyMatch[1]
                .replace(/<[^>]+>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .substring(0, 200)
              preview = bodyText
            }
          } catch (e) {
            // Use defaults if reading fails
          }

          projects.push({
            id: folder.name,
            name: folder.name,
            date: date.toISOString(),
            displayDate,
            path: `/api/projects/${folder.name}`,
            htmlPath: fs.existsSync(rootProjectsDir) 
              ? `/api/projects/${folder.name}` 
              : `/api/projects/${folder.name}`,
            cssPath: fs.existsSync(rootProjectsDir)
              ? `/api/projects/${folder.name}`
              : `/api/projects/${folder.name}`,
            title,
            description,
            preview
          })
        }
      }
    }

    // Sort by date (newest first) - Page 1 starts with newest
    projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Calculate pagination
    const total = projects.length
    const totalPages = Math.ceil(total / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProjects = projects.slice(startIndex, endIndex)

    return NextResponse.json({ 
      projects: paginatedProjects,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    })
  } catch (error) {
    console.error('Error reading projects:', error)
    return NextResponse.json(
      { 
        error: 'Failed to read projects', 
        projects: [],
        pagination: {
          page: 1,
          limit: 6,
          total: 0,
          totalPages: 0
        }
      },
      { status: 500 }
    )
  }
}

