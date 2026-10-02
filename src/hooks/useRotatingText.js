import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/session'

const SEPARATOR = '\u0000'

// Types a phrase, waits, deletes it and moves to the next one, forever.
// `active` lets us wait until another animation finishes.
// With prefers-reduced-motion it just shows the first phrase.
export default function useRotatingText(
  phrases,
  { active = true, typeSpeed = 55, deleteSpeed = 30, hold = 1600 } = {},
) {
  const key = phrases.join(SEPARATOR)
  const [text, setText] = useState(() => (prefersReducedMotion() ? phrases[0] : ''))

  useEffect(() => {
    if (!active || prefersReducedMotion()) return undefined

    const list = key.split(SEPARATOR)
    let index = 0
    let length = 0
    let deleting = false
    let timer

    const step = () => {
      const phrase = list[index]
      if (!deleting) {
        length += 1
        setText(phrase.slice(0, length))
        if (length === phrase.length) {
          deleting = true
          timer = setTimeout(step, hold)
        } else {
          timer = setTimeout(step, typeSpeed + Math.random() * 25)
        }
      } else {
        length -= 1
        setText(phrase.slice(0, length))
        if (length === 0) {
          deleting = false
          index = (index + 1) % list.length
          timer = setTimeout(step, 350)
        } else {
          timer = setTimeout(step, deleteSpeed)
        }
      }
    }

    timer = setTimeout(step, 300)
    return () => clearTimeout(timer)
  }, [key, active, typeSpeed, deleteSpeed, hold])

  return text
}
