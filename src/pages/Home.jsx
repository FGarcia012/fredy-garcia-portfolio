import { useCallback, useState } from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import RotatingText from '../components/RotatingText'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'
import TechMarquee from '../components/TechMarquee'
import Terminal from '../components/Terminal'
import Typewriter from '../components/Typewriter'
import { certifications } from '../data/certifications'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import usePageTitle from '../hooks/usePageTitle'

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

export default function Home() {
  usePageTitle('')
  const [heroDone, setHeroDone] = useState(false)
  const handleHeroDone = useCallback(() => setHeroDone(true), [])

  const stats = [
    {
      value: certifications.length,
      label: certifications.length === 1 ? 'Cisco CCNA certification' : 'Cisco CCNA certifications',
    },
    ...(profile.projectsBuilt ? [{ value: profile.projectsBuilt, label: 'Projects built' }] : []),
    { value: profile.methodology, label: 'Methodology' },
    { value: 'ES / EN', label: 'Languages' },
  ]

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <Typewriter
          as="h1"
          id="home-hero"
          srText={profile.name}
          onDone={handleHeroDone}
          lines={[
            { text: 'whoami', className: 'hero-command', prompt: 'fredy@guatemala:~$' },
            { text: profile.name, className: 'hero-name' },
          ]}
        />
        <RotatingText phrases={profile.roles} active={heroDone} className="role-line" />
        <p className="hero-pitch">{profile.pitch}</p>

        <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-3">
          <Button as={Link} to="/projects" variant="primary">View projects</Button>
          {profile.cvFile && (
            <Button href={profile.cvFile} download variant="outline-primary">Download CV</Button>
          )}
          <Button as={Link} to="/contact" variant="outline-secondary">Contact me</Button>
        </div>
        <Badge bg="warning" text="dark" className="open-badge">
          <span className="status-dot" aria-hidden="true" /> {profile.availability}
        </Badge>
      </section>

      <section aria-label="Quick facts" className="mt-5">
        <Row className="g-3">
          {stats.map((stat, index) => (
            <Col key={stat.label} xs={6} lg={3}>
              <StatCard value={stat.value} label={stat.label} delay={index * 100} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="mt-5">
        <SectionTitle>Featured projects</SectionTitle>
        <Row className="g-4">
          {featuredProjects.map((project, index) => (
            <Col key={project.slug} md={6} xl={4}>
              <Reveal delay={index * 120} className="h-100">
                <ProjectCard project={project} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </section>

      <section className="mt-5">
        <SectionTitle>Try the terminal</SectionTitle>
        <Terminal />
      </section>

      <section className="mt-5" aria-label="Technologies">
        <SectionTitle>Technologies I use</SectionTitle>
        <TechMarquee />
      </section>

      <Reveal as="section" className="mt-5">
        <Card className="cta-card">
          <Card.Body className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 p-4">
            <div>
              <Card.Title as="h2" className="h4">Let&apos;s build something together</Card.Title>
              <Card.Text className="text-secondary mb-0">
                Looking for a junior developer who learns fast? Let&apos;s talk.
              </Card.Text>
            </div>
            <Button as={Link} to="/contact" variant="primary" className="flex-shrink-0">
              Contact me
            </Button>
          </Card.Body>
        </Card>
      </Reveal>
    </>
  )
}
