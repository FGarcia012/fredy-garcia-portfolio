import { Suspense, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import MobileNav from './MobileNav'
import Sidebar from './Sidebar'
import StatusBar from './StatusBar'
import TabBar from './TabBar'

// The "IDE window": sidebar + tab bar + page content + status bar
export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)
  const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false)

  // After navigating: scroll to top and move focus to the content (good for keyboard and screen readers).
  // We skip the very first load so the "Skip to content" link stays the first Tab stop.
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    mainRef.current?.scrollTo({ top: 0 })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="ide">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <MobileNav />
      <div className="ide-body">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        <div className="ide-workspace">
          <TabBar pathname={pathname} />
          <main id="main-content" ref={mainRef} tabIndex={-1} className="ide-main">
            <div key={pathname} className="ide-content page-enter">
              <Suspense fallback={<p className="font-mono text-secondary">Loading...</p>}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
      <StatusBar pathname={pathname} />
    </div>
  )
}
