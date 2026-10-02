import { useEffect, useState } from 'react'
import { hasSeen, markSeen, prefersReducedMotion } from '../utils/session'

const SEPARATOR = '\u0000'

// Types several lines one after another, character by character.
// - `id`: once finished, the animation is skipped for the rest of the session
// - any key press or click skips it right away
// - with prefers-reduced-motion the full text shows instantly
export default function useTypewriter(
  lines,
  { id, speed = 32, jitter = 8, linePause = 380, startDelay = 250 } = {},
) {
  // `lines` is usually a new array on every render, so we compare a string version of it
  const key = lines.join(SEPARATOR)
  const instant = prefersReducedMotion() || hasSeen(id)
  const [typed, setTyped] = useState(() => (instant ? lines : lines.map(() => '')))
  const [done, setDone] = useState(instant)

  useEffect(() => {
    const target = key.split(SEPARATOR)
    const finish = () => {
      setTyped(target)
      setDone(true)
      markSeen(id)
    }

    if (prefersReducedMotion() || hasSeen(id)) {
      finish()
      return undefined
    }

    setTyped(target.map(() => ''))
    setDone(false)

    let line = 0
    let char = 0
    let timer
    const stop = () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
    function skip() {
      stop()
      finish()
    }
    // A small random jitter makes the typing feel human
    const nextDelay = () => Math.max(10, speed + (Math.random() * 2 - 1) * jitter)

    const tick = () => {
      const currentLine = line
      char += 1
      const currentChar = char
      setTyped((previous) => {
        const next = [...previous]
        next[currentLine] = target[currentLine].slice(0, currentChar)
        return next
      })

      if (currentChar < target[currentLine].length) {
        timer = setTimeout(tick, nextDelay())
      } else if (currentLine < target.length - 1) {
        line += 1
        char = 0
        timer = setTimeout(tick, linePause)
      } else {
        stop()
        setDone(true)
        markSeen(id)
      }
    }

    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    timer = setTimeout(tick, startDelay)

    return stop
  }, [key, id, speed, jitter, linePause, startDelay])

  // The line that is being typed right now (-1 when finished): the cursor goes there
  const activeLine = done
    ? -1
    : Math.max(0, typed.findIndex((text, index) => text.length < (lines[index] ?? '').length))

  return { typed, done, activeLine }
}
