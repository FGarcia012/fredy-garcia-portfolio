import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Project card styled like an editor window. Buttons only show when the link exists.
export default function ProjectCard({ project }) {
  const { slug, file, title, summary, stack, status, github, demo } = project

  return (
    <Card className="project-card h-100">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="window-title">{file}</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <Card.Title as="h3" className="h5 mb-0">{title}</Card.Title>
          {status && (
            <Badge bg={status === 'Completed' ? 'primary' : 'warning'} text={status === 'Completed' ? undefined : 'dark'}>
              {status}
            </Badge>
          )}
        </div>
        <Card.Text className="text-secondary">{summary}</Card.Text>
        {stack.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mb-3">
            {stack.map((tech) => (
              <Badge key={tech} bg={null} className="tech-badge">{tech}</Badge>
            ))}
          </div>
        )}
        <div className="project-actions d-flex flex-wrap gap-2 mt-auto">
          <Button as={Link} to={`/projects/${slug}`} variant="primary">Details</Button>
          {github && (
            <Button href={github} target="_blank" rel="noopener noreferrer" variant="outline-secondary">
              GitHub
            </Button>
          )}
          {demo && (
            <Button href={demo} target="_blank" rel="noopener noreferrer" variant="outline-secondary">
              Live demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
