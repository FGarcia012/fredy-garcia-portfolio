import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/session'

// Counts from 0 up to `target` when `active` becomes true (ease-out curve)
export default function useCountUp(target, { active = true, duration = 900 } = {}) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))

  useEffect(() => {
    if (!active || prefersReducedMotion()) return undefined

    const start = performance.now()
    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * (1 - (1 - progress) ** 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}
