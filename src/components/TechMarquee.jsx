import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaPause, FaPlay } from 'react-icons/fa'
import { skills } from '../data/skills'

// One copy of the technology list
function Group({ hidden = false }) {
  return (
    <ul className="marquee-group list-unstyled" aria-hidden={hidden || undefined}>
      {skills.map(({ name, Icon, letters, color }) => (
        <li key={name} className="marquee-item" style={{ '--skill-color': color }}>
          {Icon ? (
            <Icon className="skill-icon" aria-hidden="true" />
          ) : (
            <span className="skill-icon skill-letters" aria-hidden="true">
              {letters}
            </span>
          )}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}

// Slow infinite scroll of the technology icons. The list is rendered twice and moved by -50%,
// so the loop has no jump. It pauses on hover and focus, and has a pause button (WCAG 2.2.2).
export default function TechMarquee() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="marquee-wrap">
      <div className={`marquee ${paused ? 'is-paused' : ''}`}>
        <div className="marquee-track">
          <Group />
          {/* The second copy is only for the loop: screen readers skip it */}
          <Group hidden />
        </div>
      </div>
      <Button
        size="sm"
        variant="outline-secondary"
        className="marquee-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}{' '}
        {paused ? 'Play' : 'Pause'} scrolling
      </Button>
    </div>
  )
}
