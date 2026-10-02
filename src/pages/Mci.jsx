import { Col, Row } from 'react-bootstrap'
import GoalCard from '../components/GoalCard'
import PageHeader from '../components/PageHeader'
import { goals } from '../data/goals'
import usePageTitle from '../hooks/usePageTitle'

export default function Mci() {
  usePageTitle('MCI Goals')
  return (
    <>
      <PageHeader command="cat mci.yml" title="Crucially Important Goals" />
      <p className="text-secondary mb-4">
        These are the goals that will have the greatest impact on my professional growth.
      </p>
      <Row xs={1} lg={2} className="g-4">
        {goals.map((goal, index) => (
          <Col key={goal.id}>
            <GoalCard goal={goal} delay={index * 100} />
          </Col>
        ))}
      </Row>
    </>
  )
}
