import { NavLink } from 'react-router-dom'

// One "file" in the explorer. NavLink adds the "active" class for the current page.
export default function FileLink({ item, collapsed = false, onNavigate }) {
  const { Icon } = item
  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      className="sidebar-link"
      onClick={onNavigate}
      title={collapsed ? item.file : undefined}
    >
      <Icon className="file-icon" aria-hidden="true" />
      {/* Hidden visually when collapsed, but still read by screen readers */}
      <span className={collapsed ? 'visually-hidden' : ''}>{item.file}</span>
    </NavLink>
  )
}
