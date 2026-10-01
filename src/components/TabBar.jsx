import { getPageMeta } from '../data/navigation'

// Editor tab + breadcrumb path (desktop only)
export default function TabBar({ pathname }) {
  const { file, Icon, crumbs } = getPageMeta(pathname)

  return (
    <div className="tabbar d-none d-lg-block">
      {/* The tab is decorative: the breadcrumb below gives screen readers the same info */}
      <div className="editor-tab" aria-hidden="true">
        <Icon className="file-icon" />
        <span>{file}</span>
      </div>
      <nav aria-label="Breadcrumb" className="breadcrumb-bar">
        <ol className="breadcrumb mb-0">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            return (
              <li
                key={crumb}
                className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {crumb}
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
