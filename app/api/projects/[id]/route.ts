import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const projectId = params.id
    // Check both public/projects and projects (root)
    // Priority: public/projects first (for Vercel deployment)
    const publicProjectDir = path.join(process.cwd(), 'public', 'projects', projectId)
    const rootProjectDir = path.join(process.cwd(), 'projects', projectId)
    
    // Try public first (for production/Vercel)
    let projectDir = publicProjectDir
    let htmlPath = path.join(projectDir, 'index.html')
    
    if (!fs.existsSync(htmlPath)) {
      // Fallback to root projects (for local development)
      projectDir = rootProjectDir
      htmlPath = path.join(projectDir, 'index.html')
    }
    
    const cssPath = path.join(projectDir, 'style.css')

    if (!fs.existsSync(htmlPath)) {
      console.error(`Project not found: ${projectId}`)
      console.error(`Checked paths:`)
      console.error(`  - ${publicProjectDir}`)
      console.error(`  - ${rootProjectDir}`)
      return NextResponse.json(
        { 
          error: 'Project not found',
          projectId,
          checkedPaths: [publicProjectDir, rootProjectDir]
        },
        { status: 404 }
      )
    }

    const html = fs.readFileSync(htmlPath, 'utf-8')
    const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf-8') : ''

    return NextResponse.json({
      id: projectId,
      html,
      css
    })
  } catch (error) {
    console.error('Error reading project:', error)
    return NextResponse.json(
      { error: 'Failed to read project', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

