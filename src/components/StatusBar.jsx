import { FaTv } from 'react-icons/fa'
import { getPageMeta } from '../data/navigation'
import { profile } from '../data/profile'
import AccentPicker from './AccentPicker'

// Bottom bar like VS Code. Items hide on small screens so it stays on one line.
export default function StatusBar({ pathname, scanlines, onToggleScanlines }) {
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
        {/* Scanlines only exist on desktop with a mouse, so the button is desktop-only too */}
        <button
          type="button"
          className="crt-toggle d-none d-lg-inline-flex"
          aria-pressed={scanlines}
          aria-label="Scanline effect"
          title="Toggle scanline effect"
          onClick={onToggleScanlines}
        >
          <FaTv aria-hidden="true" />
        </button>
        <AccentPicker />
        <span className="status-item d-none d-sm-inline-flex">{profile.methodology}</span>
        <span className="status-item d-none d-md-inline-flex">UTF-8</span>
        <span className="status-item text-truncate">{file}</span>
      </div>
    </footer>
  )
}
