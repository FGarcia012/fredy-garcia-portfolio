import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// This file runs in Node, so it can only import plain data files (no JSX, no icons)
import { projects } from './src/data/projects.js'

// Public address of the site. On Vercel it is filled automatically; for a custom domain
// set the VITE_SITE_URL environment variable. When empty (local work), URL tags are removed.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = (process.env.VITE_SITE_URL || (vercelHost ? `https://${vercelHost}` : '')).replace(/\/+$/, '')

const routes = [
  '/', '/about', '/values', '/mark', '/mci', '/projects', '/cv', '/contact',
  ...projects.map((project) => `/projects/${project.slug}`),
]

// 1) fills __SITE_URL__ in index.html  2) writes robots.txt and sitemap.xml into the build
function seoFiles() {
  return {
    name: 'seo-files',
    transformIndexHtml(html) {
      return html
        .split('\n')
        .filter((line) => siteUrl || !line.includes('__SITE_URL__'))
        .join('\n')
        .replaceAll('__SITE_URL__', siteUrl)
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', ...(siteUrl ? ['', `Sitemap: ${siteUrl}/sitemap.xml`] : [])]
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` })

      if (!siteUrl) return
      const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
})
