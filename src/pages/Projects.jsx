import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Projects() {
  usePageTitle('Projects')
  return (
    <>
      <PageHeader command="ls ~/projects" title="Projects" />
      <p className="text-secondary">This page is built in Phase 4.</p>
    </>
  )
}
