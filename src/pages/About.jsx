import { Badge, Card, Col, Row } from 'react-bootstrap'
import ProfilePhoto from '../components/ProfilePhoto'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ScrumCycle from '../components/ScrumCycle'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHeader command="cat about.md" title="About me" />

      <Reveal as="section" aria-label="Introduction">
        <Row className="g-4 align-items-center">
          <Col xs={12} md="auto" className="d-flex justify-content-center">
            <ProfilePhoto />
          </Col>
          <Col>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="about-text">{paragraph}</p>
            ))}
          </Col>
        </Row>
      </Reveal>

      <Row className="g-4 mt-3">
        <Col lg={7}>
          <Reveal as="section" className="h-100">
            <Card className="h-100">
              <Card.Body>
                <SectionTitle>How I work</SectionTitle>
                <p>
                  I work with the <strong>Scrum</strong> methodology: sprint planning, daily stand-ups,
                  backlog management, sprint reviews and retrospectives.
                </p>
                <ScrumCycle />
              </Card.Body>
            </Card>
          </Reveal>
        </Col>
        <Col lg={5}>
          <Reveal as="section" delay={120} className="h-100">
            <Card className="h-100">
              <Card.Body>
                <SectionTitle>Currently</SectionTitle>
                <dl className="currently-list">
                  {profile.currently.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}:</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card.Body>
            </Card>
          </Reveal>
        </Col>
      </Row>

      <Reveal as="section" className="mt-5">
        <SectionTitle>Soft skills</SectionTitle>
        <ul className="list-unstyled d-flex flex-wrap gap-2 m-0">
          {profile.softSkills.map((skill) => (
            <li key={skill}>
              <Badge bg={null} className="tech-badge soft-badge">{skill}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  )
}
