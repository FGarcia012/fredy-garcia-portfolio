import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Values() {
  usePageTitle('Professional Values')
  return (
    <>
      <PageHeader command="cat values.json" title="Professional Values" />
      <p className="text-secondary">This page is built in Phase 3.</p>
    </>
  )
}
