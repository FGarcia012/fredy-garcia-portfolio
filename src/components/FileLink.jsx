import { NavLink } from 'react-router-dom'

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
      <span className={collapsed ? 'visually-hidden' : ''}>{item.file}</span>
    </NavLink>
  )
}
