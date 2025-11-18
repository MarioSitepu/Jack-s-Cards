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
      return new NextResponse('Project ID is required', { status: 400 })
    }
    
    console.log(`[projects/${projectId}] Loading project...`)
    
    // Check both public/projects and projects (root)
    // Priority: public/projects first (for Vercel deployment)
    const publicProjectDir = path.join(process.cwd(), 'public', 'projects', projectId)
    const rootProjectDir = path.join(process.cwd(), 'projects', projectId)
    
    let html = ''
    let css = ''
    let htmlPath = ''
    let cssPath = ''
    
    // Try public first (for production/Vercel)
    htmlPath = path.join(publicProjectDir, 'index.html')
    cssPath = path.join(publicProjectDir, 'style.css')
    
    console.log(`[projects/${projectId}] Checking public path: ${htmlPath}`)
    if (fs.existsSync(htmlPath)) {
      console.log(`[projects/${projectId}] Found in public/projects/`)
      html = fs.readFileSync(htmlPath, 'utf-8')
      if (fs.existsSync(cssPath)) {
        css = fs.readFileSync(cssPath, 'utf-8')
        console.log(`[projects/${projectId}] CSS loaded: ${css.length} chars`)
      } else {
        console.warn(`[projects/${projectId}] CSS file not found at: ${cssPath}`)
      }
    } else {
      // Fallback to root projects (for local development)
      htmlPath = path.join(rootProjectDir, 'index.html')
      cssPath = path.join(rootProjectDir, 'style.css')
      
      console.log(`[projects/${projectId}] Checking root path: ${htmlPath}`)
      if (fs.existsSync(htmlPath)) {
        console.log(`[projects/${projectId}] Found in projects/`)
        html = fs.readFileSync(htmlPath, 'utf-8')
        if (fs.existsSync(cssPath)) {
          css = fs.readFileSync(cssPath, 'utf-8')
          console.log(`[projects/${projectId}] CSS loaded: ${css.length} chars`)
        } else {
          console.warn(`[projects/${projectId}] CSS file not found at: ${cssPath}`)
        }
      } else {
        console.warn(`[projects/${projectId}] HTML file not found in both locations`)
      }
    }

    if (!html) {
      // If file system read failed, try fetching from static URL (for Vercel production)
      try {
        const url = new URL(request.url)
        const baseUrl = `${url.protocol}//${url.host}`
        const htmlUrl = `${baseUrl}/projects/${projectId}/index.html`
        const cssUrl = `${baseUrl}/projects/${projectId}/style.css`
        
        const [htmlResponse, cssResponse] = await Promise.all([
          fetch(htmlUrl).catch(() => null),
          fetch(cssUrl).catch(() => null)
        ])
        
        if (htmlResponse && htmlResponse.ok) {
          html = await htmlResponse.text()
          if (cssResponse && cssResponse.ok) {
            css = await cssResponse.text()
          }
        }
      } catch (fetchError) {
        console.error('Error fetching from static URL:', fetchError)
      }
      
      // If still no HTML, return error
      if (!html) {
        console.error(`Project not found: ${projectId}`)
        console.error(`Checked paths:`)
        console.error(`  - ${publicProjectDir}`)
        console.error(`  - ${rootProjectDir}`)
        console.error(`  - Static URL: /projects/${projectId}/index.html`)
        return new NextResponse(
          `Project not found: ${projectId}\n\nChecked paths:\n- ${publicProjectDir}\n- ${rootProjectDir}\n- Static URL: /projects/${projectId}/index.html`,
          { 
            status: 404,
            headers: {
              'Content-Type': 'text/plain; charset=utf-8',
            }
          }
        )
      }
    }

    // Remove external CSS link and inject CSS as inline style
    html = html.replace(
      /<link[^>]*rel=["']stylesheet["'][^>]*>/gi,
      ''
    )

    // ALWAYS inject CSS into head - ensure CSS is always present
    if (html.includes('</head>')) {
      // If head exists, inject CSS before closing head tag
      html = html.replace(
        '</head>',
        `<style>${css || '/* No CSS file found */'}</style></head>`
      )
    } else if (html.includes('<head>')) {
      // If head tag exists but no closing tag, add it
      html = html.replace(
        '<head>',
        `<head><style>${css || '/* No CSS file found */'}</style>`
      )
    } else {
      // If no head tag, create one with CSS
      if (html.includes('<!DOCTYPE html>') || html.includes('<html')) {
        html = html.replace(
          /(<html[^>]*>)/i,
          `$1<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${css || '/* No CSS file found */'}</style></head>`
        )
      } else {
        // No HTML structure, wrap everything
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${css || '/* No CSS file found */'}</style>
</head>
<body>
${html}
</body>
</html>`
      }
    }

    // Return as HTML response
    console.log(`[projects/${projectId}] Returning HTML (${html.length} chars) with CSS (${css.length} chars)`)
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('Error reading project:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined
    
    // Try to get project ID from params
    let projectId = 'unknown'
    try {
      const resolvedParams = params instanceof Promise ? await params : params
      projectId = resolvedParams?.id || 'unknown'
    } catch {
      // Ignore error getting params
    }
    
    // Try to return a helpful error page
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Error - Project Not Found</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; text-align: center; }
    h1 { color: #e74c3c; }
    pre { background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: left; max-width: 800px; margin: 20px auto; }
  </style>
</head>
<body>
  <h1>Failed to read project</h1>
  <p>Project ID: <strong>${projectId}</strong></p>
  <pre>Error: ${errorMessage}${errorStack ? '\n\n' + errorStack : ''}</pre>
</body>
</html>`,
      { 
        status: 500,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        }
      }
    )
  }
}

