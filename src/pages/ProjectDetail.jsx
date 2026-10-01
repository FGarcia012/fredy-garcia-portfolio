import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function ProjectDetail() {
  const { slug } = useParams()
  usePageTitle(`Project: ${slug}`)
  return (
    <>
      <PageHeader command={`cat projects/${slug}.md`} title={slug} />
      <p className="text-secondary">README-style project pages are built in Phase 4.</p>
      <Link to="/projects" className="btn btn-outline-primary">&larr; Back to projects</Link>
    </>
  )
}
