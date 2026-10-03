import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_DESCRIPTION, getPageMeta } from '../data/navigation'

function upsertTag(selector, create, attribute, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = create()
    document.head.appendChild(tag)
  }
  tag.setAttribute(attribute, value)
}

export default function usePageTitle(title, description) {
  const { pathname } = useLocation()
  const meta = getPageMeta(pathname)
  const text = description ?? meta.description ?? DEFAULT_DESCRIPTION
  const notFound = Boolean(meta.notFound)

  useEffect(() => {
    document.title = title ? `${title} | Fredy García` : 'Fredy García | Full-Stack Developer'
    upsertTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', text)
    upsertTag('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' }), 'content', notFound ? 'noindex' : 'index, follow')
    const path = pathname.replace(/\/+$/, '')
    upsertTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', `${window.location.origin}${path || '/'}`)
  }, [title, text, notFound, pathname])
}
