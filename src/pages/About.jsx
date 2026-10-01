import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHeader command="cat about.md" title="About me" />
      <p className="text-secondary">This page is built in Phase 3.</p>
    </>
  )
}
