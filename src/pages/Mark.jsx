import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Mark() {
  usePageTitle('Personal Mark')
  return (
    <>
      <PageHeader command="cat mark.md" title="Personal Mark" />
      <p className="text-secondary">This page is built in Phase 3.</p>
    </>
  )
}
