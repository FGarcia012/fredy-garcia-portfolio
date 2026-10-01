import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Cv() {
  usePageTitle('CV')
  return (
    <>
      <PageHeader command="open cv.pdf" title="Curriculum Vitae" />
      <p className="text-secondary">This page is built in Phase 4.</p>
    </>
  )
}
