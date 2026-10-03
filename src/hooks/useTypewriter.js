import { useEffect, useState } from 'react'
import { hasSeen, markSeen, prefersReducedMotion } from '../utils/session'

const SEPARATOR = '\u0000'

export default function useTypewriter(
  lines,
  { id, speed = 32, jitter = 8, linePause = 380, startDelay = 250 } = {},
) {
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

  const activeLine = done
    ? -1
    : Math.max(0, typed.findIndex((text, index) => text.length < (lines[index] ?? '').length))

  return { typed, done, activeLine }
}
