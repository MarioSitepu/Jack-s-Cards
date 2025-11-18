'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const [html, setHtml] = useState<string>('')
  const [css, setCss] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProject() {
      try {
        // Try API route first
        let html = ''
        let css = ''
        
        try {
          const response = await fetch(`/api/projects/${projectId}`)
          if (response.ok) {
            const data = await response.json()
            if (data.html) {
              html = data.html
              css = data.css || ''
            }
          }
        } catch (apiError) {
          console.warn('API route failed, trying static files:', apiError)
        }
        
        // If API route failed, try fetching directly from static files
        if (!html) {
          try {
            const [htmlResponse, cssResponse] = await Promise.all([
              fetch(`/projects/${projectId}/index.html`).catch(() => null),
              fetch(`/projects/${projectId}/style.css`).catch(() => null)
            ])
            
            if (htmlResponse && htmlResponse.ok) {
              html = await htmlResponse.text()
            }
            
            if (cssResponse && cssResponse.ok) {
              css = await cssResponse.text()
            }
          } catch (staticError) {
            console.error('Error fetching static files:', staticError)
          }
        }
        
        if (!html) {
          throw new Error('Project not found. Make sure the project exists in public/projects/')
        }
        
        setHtml(html)
        setCss(css)
      } catch (err) {
        console.error('Error loading project:', err)
        setError(err instanceof Error ? err.message : 'Failed to load project')
      } finally {
        setLoading(false)
      }
    }

    if (projectId) {
      loadProject()
    }
  }, [projectId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mb-4"></div>
          <p className="text-foreground/60">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-foreground/60 mb-2">{error}</p>
          <p className="text-sm text-foreground/40 mb-6">
            Project ID: <code className="bg-muted px-2 py-1 rounded">{projectId}</code>
          </p>
          <div className="bg-muted/50 p-4 rounded-lg mb-6 text-left text-sm">
            <p className="font-semibold mb-2">Troubleshooting:</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>Pastikan file project ada di <code>public/projects/{projectId}/</code></li>
              <li>Pastikan file sudah di-commit dan push ke GitHub</li>
              <li>Pastikan Vercel sudah melakukan deployment terbaru</li>
              <li>Cek console browser untuk detail error</li>
            </ul>
          </div>
          <Link
            href="/#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all inline-block"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  // Process HTML to inject CSS and fix external links
  // ALWAYS ensure CSS is injected, even if empty
  let htmlWithCss = html
  
  // Remove external CSS link and inject CSS as inline style
  htmlWithCss = htmlWithCss.replace(
    /<link[^>]*rel=["']stylesheet["'][^>]*>/gi,
    ''
  )
  
  // ALWAYS inject CSS into head - ensure CSS is always present
  const cssContent = css || '/* No CSS available */'
  if (htmlWithCss.includes('</head>')) {
    // If head exists, inject CSS before closing head tag
    htmlWithCss = htmlWithCss.replace(
      '</head>',
      `<style>${cssContent}</style></head>`
    )
  } else if (htmlWithCss.includes('<head>')) {
    // If head tag exists but no closing tag, add it
    htmlWithCss = htmlWithCss.replace(
      '<head>',
      `<head><style>${cssContent}</style>`
    )
  } else {
    // If no head tag, create one with CSS
    if (htmlWithCss.includes('<!DOCTYPE html>') || htmlWithCss.includes('<html')) {
      htmlWithCss = htmlWithCss.replace(
        /(<html[^>]*>)/i,
        `$1<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${cssContent}</style></head>`
      )
    } else {
      // No HTML structure, wrap everything
      htmlWithCss = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${cssContent}</style>
</head>
<body>
${htmlWithCss}
</body>
</html>`
    }
  }
  
  // Fix relative paths for assets (if any) - convert to absolute paths
  // This handles cases where HTML references images or other assets
  const baseUrl = `/projects/${projectId}/`
  htmlWithCss = htmlWithCss.replace(
    /(src|href)=["']([^"']+)["']/gi,
    (match, attr, url) => {
      // Skip if already absolute URL
      if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//') || url.startsWith('#')) {
        return match
      }
      // Convert relative paths to absolute
      if (url.startsWith('./')) {
        return `${attr}="${baseUrl}${url.substring(2)}"`
      }
      if (!url.startsWith('/')) {
        return `${attr}="${baseUrl}${url}"`
      }
      return match
    }
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection="projects" />
      
      {/* Header with Back Button and Actions */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-foreground/60">{projectId}</span>
              <a
                href={`/projects/${projectId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="w-full relative">
        <iframe
          srcDoc={htmlWithCss}
          className="w-full border-0"
          style={{ 
            minHeight: 'calc(100vh - 80px)',
            display: 'block'
          }}
          title={`Project ${projectId}`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  )
}

