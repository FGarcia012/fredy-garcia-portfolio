import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Mci() {
  usePageTitle('MCI Goals')
  return (
    <>
      <PageHeader command="cat mci.yml" title="Crucially Important Goals" />
      <p className="text-secondary">This page is built in Phase 3.</p>
    </>
  )
}
