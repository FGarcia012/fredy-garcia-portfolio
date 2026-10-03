import { Card } from 'react-bootstrap'
import useCountUp from '../hooks/useCountUp'
import useReveal from '../hooks/useReveal'

export default function StatCard({ value, label, delay = 0 }) {
  const [ref, visible] = useReveal()
  const isNumber = typeof value === 'number'
  const count = useCountUp(isNumber ? value : 0, { active: visible })

  return (
    <Card
      ref={ref}
      className={`stat-card h-100 reveal ${visible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <Card.Body>
        <div className="stat-value">
          <span className="visually-hidden">{value}</span>
          <span aria-hidden="true">{isNumber ? count : value}</span>
        </div>
        <div className="stat-label">{label}</div>
      </Card.Body>
    </Card>
  )
}
