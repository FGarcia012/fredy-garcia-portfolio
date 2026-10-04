import { Card, Col, Row } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Typewriter from '../components/Typewriter'
import { mark } from '../data/mark'
import usePageTitle from '../hooks/usePageTitle'

export default function Mark() {
  usePageTitle('Personal Mark')
  return (
    <>
      <PageHeader command="cat mark.md" title="Personal Mark" />

      <Reveal>
        <ol className="code-doc" aria-label="Personal brand statement">
          <li><span className="doc-heading"># Personal Mark</span></li>
          <li aria-hidden="true">&nbsp;</li>
          <li>
            <span className="doc-quote-mark" aria-hidden="true">&gt;</span>
            <Typewriter as="span" id="mark-tagline" className="doc-tagline" lines={[mark.tagline]} />
          </li>
          <li aria-hidden="true">&nbsp;</li>
          {mark.statement.map((sentence) => (
            <li key={sentence}><span className="doc-text">{sentence}</span></li>
          ))}
        </ol>
      </Reveal>

      <section className="mt-5">
        <SectionTitle>Three pillars</SectionTitle>
        <Row xs={1} md={3} className="g-4">
          {mark.pillars.map(({ title, Icon, text }, index) => (
            <Col key={title}>
              <Reveal delay={index * 100} className="h-100">
                <Card className="value-card h-100">
                  <Card.Body>
                    <div className="icon-box">
                      <Icon aria-hidden="true" />
                    </div>
                    <Card.Title as="h3" className="h5">{title}</Card.Title>
                    <Card.Text className="text-secondary mb-0">{text}</Card.Text>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </section>

      <Reveal as="figure" className="quote-block mt-5">
        <blockquote className="mb-2">&ldquo;{mark.quote.text}&rdquo;</blockquote>
        <figcaption>&mdash; {mark.quote.author}</figcaption>
      </Reveal>
    </>
  )
}
