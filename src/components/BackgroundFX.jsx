import { useEffect, useRef } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default function BackgroundFX({ scanlines }) {
  const layerRef = useRef(null)
  const hasMouse = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const effects = hasMouse && !reduceMotion

  useEffect(() => {
    const layer = layerRef.current
    if (!effects || !layer) return undefined

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
      {effects && scanlines && <div className="bg-scanlines" aria-hidden="true" />}
    </>
  )
}
