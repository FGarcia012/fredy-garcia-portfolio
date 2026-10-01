import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHeader command="./contact.sh" title="Contact" />
      <p className="text-secondary">This page is built in Phase 4.</p>
    </>
  )
}
