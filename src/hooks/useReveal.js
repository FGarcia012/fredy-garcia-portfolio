import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/session'

export default function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined' || prefersReducedMotion(),
  )

  useEffect(() => {
    const element = ref.current
    if (!element || visible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [visible, threshold])

  return [ref, visible]
}
