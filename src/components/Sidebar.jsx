import { VscChevronDown, VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import { navItems } from '../data/navigation'
import FileLink from './FileLink'

// Desktop file explorer (hidden below 992px, where MobileNav takes over)
export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside
      className={`sidebar d-none d-lg-flex ${collapsed ? 'is-collapsed' : ''}`}
      aria-label="File explorer"
    >
      <div className="sidebar-header">
        {!collapsed && <span>Explorer</span>}
        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
        >
          {collapsed ? <VscChevronRight /> : <VscChevronLeft />}
        </button>
      </div>

      <nav aria-label="Main navigation">
        {!collapsed && (
          <p className="sidebar-root">
            <VscChevronDown aria-hidden="true" /> FREDY-GARCIA
          </p>
        )}
        <ul className="list-unstyled m-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <FileLink item={item} collapsed={collapsed} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
