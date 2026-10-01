import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  const { pathname } = useLocation()
  usePageTitle('Command not found')
  return (
    <>
      <PageHeader command={`cd ${pathname}`} title="Command not found" />
      <p className="font-mono text-secondary">bash: cd: {pathname}: No such file or directory</p>
      <Link to="/" className="btn btn-primary">cd ~</Link>
    </>
  )
}
