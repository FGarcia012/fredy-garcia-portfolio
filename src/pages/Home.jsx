import { Badge, Button, Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle('')
  return (
    <>
      <PageHeader command="whoami" title="Fredy García" />
      <p className="text-secondary">The real Home page (typing effect, terminal) is built in Phase 2.</p>

      {/* Temporary card: lets you check that Bootstrap uses our palette. Removed in Phase 2. */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title as="h2" className="h5">Theme check</Card.Title>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Button variant="primary">Primary</Button>
            <Button variant="outline-primary">Outline</Button>
            <Button as={Link} to="/about" variant="outline-secondary">Link button</Button>
          </div>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Badge bg="primary">React</Badge>
            <Badge bg="info">Bootstrap</Badge>
            <Badge bg="warning" text="dark">Scrum</Badge>
          </div>
          <ProgressBar now={60} label="60%" aria-label="Example progress" />
        </Card.Body>
      </Card>
    </>
  )
}
