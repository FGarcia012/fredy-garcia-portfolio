import { skills } from '../data/skills'

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

export default function TechMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Group />
        {/* The second copy is only for the loop: screen readers skip it */}
        <Group hidden />
      </div>
    </div>
  )
}
