import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    // Handle both sync and async params (Next.js 15+ uses Promise)
    const resolvedParams = params instanceof Promise ? await params : params
    const projectId = resolvedParams.id
    
    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 })
    }
    
    // In production (Vercel), files in public/ are served as static files
    // We need to try reading from file system first (for local dev and if files are in projects/)
    // Then fallback to fetching from static URL (for Vercel production)
    
    // Check both public/projects and projects (root)
    const publicProjectDir = path.join(process.cwd(), 'public', 'projects', projectId)
    const rootProjectDir = path.join(process.cwd(), 'projects', projectId)
    const publicHtmlPath = path.join(publicProjectDir, 'index.html')
    const publicCssPath = path.join(publicProjectDir, 'style.css')
    const rootHtmlPath = path.join(rootProjectDir, 'index.html')
    const rootCssPath = path.join(rootProjectDir, 'style.css')
    
    let html = ''
    let css = ''
    
    // Try public first (for production/Vercel)
    if (fs.existsSync(publicHtmlPath)) {
      html = fs.readFileSync(publicHtmlPath, 'utf-8')
      if (fs.existsSync(publicCssPath)) {
        css = fs.readFileSync(publicCssPath, 'utf-8')
      }
    } else if (fs.existsSync(rootHtmlPath)) {
      // Fallback to root projects (for local development)
      html = fs.readFileSync(rootHtmlPath, 'utf-8')
      if (fs.existsSync(rootCssPath)) {
        css = fs.readFileSync(rootCssPath, 'utf-8')
      }
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

