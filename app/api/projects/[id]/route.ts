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
    const publicProjectDir = path.join(process.cwd(), 'public', 'projects', projectId)
    const rootProjectDir = path.join(process.cwd(), 'projects', projectId)
    const projectDir = fs.existsSync(rootProjectDir) ? rootProjectDir : publicProjectDir
    const htmlPath = path.join(projectDir, 'index.html')
    const cssPath = path.join(projectDir, 'style.css')

    if (!fs.existsSync(htmlPath)) {
      return NextResponse.json(
        { error: 'Project not found' },
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
      { error: 'Failed to read project' },
      { status: 500 }
    )
  }
}

