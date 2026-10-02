import { useEffect, useState } from 'react'
import { markSeen } from '../utils/session'

const LINES = [
  'Loading profile...',
  'Mounting projects...',
  'Compiling skills...',
  'Starting portfolio v1.0 — Welcome!',
]

// Fake "computer starting" screen: about 2 seconds, skippable with any key or click
export default function BootScreen({ onDone }) {
  const [count, setCount] = useState(0)

  // Show one more line every 380 ms, then finish
  useEffect(() => {
    const finish = () => {
      markSeen('boot')
      onDone()
    }
    const timer =
      count < LINES.length ? setTimeout(() => setCount(count + 1), 380) : setTimeout(finish, 450)
    return () => clearTimeout(timer)
  }, [count, onDone])

  useEffect(() => {
    const skip = () => {
      markSeen('boot')
      onDone()
    }
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [onDone])

  return (
    <div className="boot-screen" role="status" aria-label="Loading portfolio">
      <div className="boot-log">
        {LINES.slice(0, count).map((line) => (
          <p key={line}>
            <span className="boot-ok">[ OK ]</span> {line}
          </p>
        ))}
        <span className="tw-cursor" aria-hidden="true">▍</span>
      </div>
      <p className="boot-hint">Press any key or click to skip</p>
    </div>
  )
}
