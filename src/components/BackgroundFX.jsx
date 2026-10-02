import { useEffect, useRef } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

// Decorative background: a dot grid that drifts slowly, a soft glow that follows the mouse,
// and optional scanlines (CRT look). Motion and glow run only with a mouse (fine pointer)
// and when the visitor has NOT asked for reduced motion. Phones get a still grid.
export default function BackgroundFX({ scanlines }) {
  const layerRef = useRef(null)
  const hasMouse = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const effects = hasMouse && !reduceMotion

  useEffect(() => {
    const layer = layerRef.current
    if (!effects || !layer) return undefined

    // requestAnimationFrame: at most one update per screen frame, even if the mouse sends more
    let frame = 0
    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        layer.style.setProperty('--mx', `${event.clientX}px`)
        layer.style.setProperty('--my', `${event.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [effects])

  return (
    <>
      <div ref={layerRef} className={`bg-fx ${effects ? 'has-effects' : ''}`} aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow" />
      </div>
      {/* Scanlines sit above everything, but let every click pass through */}
      {effects && scanlines && <div className="bg-scanlines" aria-hidden="true" />}
    </>
  )
}
