import { Card } from 'react-bootstrap'

// On hover, a small label types itself (pure CSS, decorative only)
export default function ValueCard({ value, number }) {
  const { title, Icon, practice } = value
  return (
    <Card className="value-card h-100">
      <Card.Body>
        <div className="icon-box">
          <Icon aria-hidden="true" />
        </div>
        <Card.Title as="h2" className="h5">{title}</Card.Title>
        <Card.Text className="text-secondary">{practice}</Card.Text>
        <span className="value-tag" aria-hidden="true">{`// value_0${number}`}</span>
      </Card.Body>
    </Card>
  )
}
