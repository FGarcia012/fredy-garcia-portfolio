import { useEffect } from 'react'
import useTypewriter from '../hooks/useTypewriter'

export default function Typewriter({ lines, id, as: Tag = 'div', className, srText, onDone, ...options }) {
  const items = lines.map((line) => (typeof line === 'string' ? { text: line } : line))
  const { typed, done, activeLine } = useTypewriter(
    items.map((item) => item.text),
    { id, ...options },
  )

  useEffect(() => {
    if (done) onDone?.()
  }, [done, onDone])

  return (
    <Tag className={className}>
      <span className="visually-hidden">{srText ?? items.map((item) => item.text).join(' ')}</span>
      <span aria-hidden="true">
        {items.map((item, index) => {
          const started = done || index <= activeLine
          if (!started) return null
          return (
            <span key={item.text} className={`tw-line ${item.className ?? ''}`}>
              {item.prompt && <span className="prompt">{item.prompt} </span>}
              {typed[index]}
              {index === activeLine && <span className="tw-cursor">▍</span>}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
