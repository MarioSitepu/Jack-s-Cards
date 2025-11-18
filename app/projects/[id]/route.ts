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
      return new NextResponse('Project not found', { status: 404 })
    }

    let html = fs.readFileSync(htmlPath, 'utf-8')
    const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf-8') : ''

    // Remove external CSS link and inject CSS as inline style
    html = html.replace(
      /<link[^>]*rel=["']stylesheet["'][^>]*>/gi,
      ''
    )

    // Inject CSS into head
    if (css) {
      if (html.includes('</head>')) {
        html = html.replace(
          '</head>',
          `<style>${css}</style></head>`
        )
      } else {
        // If no head tag, add it
        html = `<head><style>${css}</style></head>${html}`
      }
    }

    // Return as HTML response
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('Error reading project:', error)
    return new NextResponse('Failed to read project', { status: 500 })
  }
}

