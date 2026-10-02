import { Card, ProgressBar } from 'react-bootstrap'
import useCountUp from '../hooks/useCountUp'
import useReveal from '../hooks/useReveal'

const BAR_SIZE = 10

// One MCI goal: key results, a terminal-style bar like [██████░░░░] 60%,
// and a Bootstrap ProgressBar so assistive technology gets a real progressbar.
export default function GoalCard({ goal, delay = 0 }) {
  const { title, Icon, deadline, progress, keyResults } = goal
  const [ref, visible] = useReveal()
  const shown = useCountUp(progress, { active: visible })
  const filled = Math.round((shown / 100) * BAR_SIZE)

  return (
    <Card
      ref={ref}
      className={`goal-card h-100 reveal ${visible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <Card.Body>
        <div className="d-flex align-items-start gap-3 mb-3">
          <div className="icon-box">
            <Icon aria-hidden="true" />
          </div>
          <div>
            <Card.Title as="h2" className="h5 mb-1">{title}</Card.Title>
            <div className="goal-deadline">Deadline: {deadline ?? 'to be defined'}</div>
          </div>
        </div>

        <ul className="check-list list-unstyled">
          {keyResults.map((result) => (
            <li key={result.text}>
              <span aria-hidden="true">{result.done ? '[x]' : '[ ]'}</span>
              <span className="visually-hidden">{result.done ? 'Done: ' : 'Not done: '}</span>
              <span>{result.text}</span>
            </li>
          ))}
        </ul>

        <div className="terminal-bar" aria-hidden="true">
          [{'█'.repeat(filled)}
          {'░'.repeat(BAR_SIZE - filled)}] {shown}%
        </div>
        <ProgressBar now={shown} label={`${title}: ${progress}% complete`} visuallyHidden className="goal-progress" />
      </Card.Body>
    </Card>
  )
}
