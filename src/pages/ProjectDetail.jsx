import { Badge, Button, Card, Carousel } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import usePageTitle from '../hooks/usePageTitle'

// One README section: "## Title" in the editor style. Hidden when it has no content.
function ReadmeSection({ title, show = true, children }) {
  if (!show) return null
  return (
    <section className="readme-section">
      <h2 className="readme-heading">
        <span className="hash" aria-hidden="true">##</span> {title}
      </h2>
      {children}
    </section>
  )
}

const hasItems = (list) => Array.isArray(list) && list.length > 0

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  usePageTitle(project ? project.title : 'Project not found', project?.summary ?? 'This project does not exist.')

  if (!project) {
    return (
      <>
        <PageHeader command={`cat projects/${slug}.md`} title="Project not found" />
        <p className="text-secondary">
          <code>cat: projects/{slug}.md: No such file or directory</code>
        </p>
        <Button as={Link} to="/projects" variant="outline-primary">&larr; Back to projects</Button>
      </>
    )
  }

  const { title, file, stack, status, overview, role, features, architecture, challenges, screenshots, github, demo, linksNote } = project
  const hasLinks = Boolean(github || demo || linksNote)

  return (
    <>
      <PageHeader command={`cat projects/${slug}.md`} title={title} />

      <Reveal>
        <Card className="readme">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">README.md</span>
            <span className="window-title ms-auto d-none d-sm-inline">{file}</span>
          </div>
          <Card.Body className="p-3 p-md-4">
            <ReadmeSection title="Overview" show={Boolean(overview)}>
              <p>{overview}</p>
              {status && (
                <Badge bg={status === 'Completed' ? 'primary' : 'warning'} text={status === 'Completed' ? undefined : 'dark'}>
                  {status}
                </Badge>
              )}
            </ReadmeSection>

            <ReadmeSection title="My role" show={Boolean(role)}>
              <p>{role}</p>
            </ReadmeSection>

            <ReadmeSection title="Tech stack" show={hasItems(stack)}>
              <ul className="list-unstyled d-flex flex-wrap gap-2 m-0">
                {stack.map((tech) => (
                  <li key={tech}>
                    <Badge bg={null} className="tech-badge">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </ReadmeSection>

            <ReadmeSection title="Key features" show={hasItems(features)}>
              <ul className="readme-list">
                {features?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </ReadmeSection>

            <ReadmeSection title="Architecture" show={Boolean(architecture)}>
              {hasItems(architecture?.flow) && (
                <ol className="scrum-cycle list-unstyled" aria-label="Architecture flow">
                  {architecture.flow.map((step, index) => (
                    <li key={step}>
                      <span className="scrum-step">{step}</span>
                      {index < architecture.flow.length - 1 && (
                        <span className="scrum-arrow" aria-hidden="true">→</span>
                      )}
                    </li>
                  ))}
                </ol>
              )}
              {hasItems(architecture?.notes) && (
                <ul className="readme-list">
                  {architecture.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </ReadmeSection>

            <ReadmeSection title="Challenges & what I learned" show={hasItems(challenges)}>
              <ul className="readme-list">
                {challenges?.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </ReadmeSection>

            <ReadmeSection title="Screenshots" show={hasItems(screenshots)}>
              <Carousel className="readme-carousel" interval={null}>
                {screenshots?.map((shot) => (
                  <Carousel.Item key={shot.src}>
                    <img className="d-block w-100" src={shot.src} alt={shot.alt} loading="lazy" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </ReadmeSection>

            <ReadmeSection title="Links" show={hasLinks}>
              <div className="d-flex flex-wrap gap-2">
                {github && (
                  <Button href={github} target="_blank" rel="noopener noreferrer" variant="outline-primary">
                    GitHub
                  </Button>
                )}
                {demo && (
                  <Button href={demo} target="_blank" rel="noopener noreferrer" variant="outline-primary">
                    Live demo
                  </Button>
                )}
              </div>
              {linksNote && <p className="text-secondary mt-2 mb-0">{linksNote}</p>}
            </ReadmeSection>
          </Card.Body>
        </Card>
      </Reveal>

      <Button as={Link} to="/projects" variant="outline-secondary" className="mt-4">
        &larr; Back to projects
      </Button>
    </>
  )
}
