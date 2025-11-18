import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const projectId = params.id
    
    // In production (Vercel), files in public/ are served as static files
    // We need to try reading from file system first (for local dev and if files are in projects/)
    // Then fallback to fetching from static URL (for Vercel production)
    
    const rootProjectDir = path.join(process.cwd(), 'projects', projectId)
    const rootHtmlPath = path.join(rootProjectDir, 'index.html')
    const rootCssPath = path.join(rootProjectDir, 'style.css')
    
    let html = ''
    let css = ''
    
    // Try reading from file system first (works in local dev and if files are in projects/)
    if (fs.existsSync(rootHtmlPath)) {
      html = fs.readFileSync(rootHtmlPath, 'utf-8')
      css = fs.existsSync(rootCssPath) ? fs.readFileSync(rootCssPath, 'utf-8') : ''
    } else {
      // In production, try to fetch from static URL
      // Get the base URL from request
      const url = new URL(request.url)
      const baseUrl = `${url.protocol}//${url.host}`
      
      try {
        // Try fetching from public/projects/ (static file)
        const htmlUrl = `${baseUrl}/projects/${projectId}/index.html`
        const cssUrl = `${baseUrl}/projects/${projectId}/style.css`
        
        const [htmlResponse, cssResponse] = await Promise.all([
          fetch(htmlUrl).catch(() => null),
          fetch(cssUrl).catch(() => null)
        ])
        
        if (htmlResponse && htmlResponse.ok) {
          html = await htmlResponse.text()
        }
        
        if (cssResponse && cssResponse.ok) {
          css = await cssResponse.text()
        }
      } catch (fetchError) {
        console.error('Error fetching from static URL:', fetchError)
      }
    }
    
    if (!html) {
      return NextResponse.json(
        { 
          error: 'Project not found',
          projectId,
          message: 'Project HTML file not found. Make sure the project exists in projects/ or public/projects/'
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      id: projectId,
      html,
      css: css || ''
    })
  } catch (error) {
    console.error('Error reading project:', error)
    return NextResponse.json(
      { 
        error: 'Failed to read project', 
        details: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

