import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { methodologies, skills } from '../data/skills'
import useReveal from '../hooks/useReveal'

export default function SkillsGrid() {
  const [ref, visible] = useReveal()

  return (
    <>
      <ul ref={ref} className={`skills-grid ${visible ? 'is-visible' : ''}`} aria-label="Technologies">
        {skills.map(({ name, Icon, letters, color, hint }, index) => (
          <OverlayTrigger
            key={name}
            placement="top"
            overlay={<Tooltip id={`skill-tip-${index}`}>{hint ?? `$ use ${name}`}</Tooltip>}
          >
            <li className="skill-tile" tabIndex={0} style={{ '--skill-color': color, '--i': index }}>
              {Icon ? (
                <Icon className="skill-icon" aria-hidden="true" />
              ) : (
                <span className="skill-icon skill-letters" aria-hidden="true">
                  {letters}
                </span>
              )}
              <span className="skill-name">{name}</span>
            </li>
          </OverlayTrigger>
        ))}
      </ul>

      <h3 className="skills-subtitle">Methodologies</h3>
      <ul className="list-unstyled d-flex flex-wrap gap-2 m-0" aria-label="Methodologies">
        {methodologies.map((method) => (
          <li key={method}>
            <Badge bg="primary" className="method-badge">
              {method}
            </Badge>
          </li>
        ))}
      </ul>
    </>
  )
}
