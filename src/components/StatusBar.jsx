import { getPageMeta } from '../data/navigation'
import { profile } from '../data/profile'

// Bottom bar like VS Code. Items hide on small screens so it stays on one line.
export default function StatusBar({ pathname }) {
  const { file } = getPageMeta(pathname)

  return (
    <footer className="status-bar">
      <div className="status-group">
        <span className="status-item">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </span>
        <span className="status-item d-none d-md-inline-flex">
          {profile.location} <span role="img" aria-label="Guatemala flag">🇬🇹</span>
        </span>
      </div>
      <div className="status-group">
        <span className="status-item d-none d-sm-inline-flex">{profile.methodology}</span>
        <span className="status-item d-none d-md-inline-flex">UTF-8</span>
        <span className="status-item text-truncate">{file}</span>
      </div>
    </footer>
  )
}
