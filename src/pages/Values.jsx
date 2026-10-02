import { Col, Row } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ValueCard from '../components/ValueCard'
import { values } from '../data/values'
import usePageTitle from '../hooks/usePageTitle'

export default function Values() {
  usePageTitle('Professional Values')
  return (
    <>
      <PageHeader command="cat values.json" title="Professional Values" />
      <p className="text-secondary mb-4">The principles that guide how I learn, build and work with others.</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {values.map((value, index) => (
          <Col key={value.title}>
            <Reveal delay={index * 100} className="h-100">
              <ValueCard value={value} number={index + 1} />
            </Reveal>
          </Col>
        ))}
      </Row>
    </>
  )
}
