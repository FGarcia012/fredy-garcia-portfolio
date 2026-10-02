import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import { hasSeen, prefersReducedMotion } from '../utils/session'
import BackgroundFX from './BackgroundFX'
import BootScreen from './BootScreen'
import MobileNav from './MobileNav'
import Sidebar from './Sidebar'
import SiteFooter from './SiteFooter'
import StatusBar from './StatusBar'
import TabBar from './TabBar'

// The "IDE window": sidebar + tab bar + page content + status bar
export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)
  const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false)
  const [scanlines, setScanlines] = useLocalStorage('scanlines', true)

  // The boot screen shows once per session (never with reduced motion).
  // BootScreen marks itself as seen when it finishes or is skipped.
  const [booting, setBooting] = useState(() => !prefersReducedMotion() && !hasSeen('boot'))
  const finishBoot = useCallback(() => setBooting(false), [])

  // After navigating: scroll to top and move focus to the content (good for keyboard and screen readers).
  // We skip the very first load so the "Skip to content" link stays the first Tab stop.
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    mainRef.current?.scrollTo({ top: 0 })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  // While booting, only the boot screen exists. The page mounts afterwards,
  // so its typing animation starts exactly when the boot screen disappears.
  if (booting) return <BootScreen onDone={finishBoot} />

  return (
    <div className="ide">
      <BackgroundFX scanlines={scanlines} />
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
              <SiteFooter />
            </div>
          </main>
        </div>
      </div>
      <StatusBar pathname={pathname} scanlines={scanlines} onToggleScanlines={() => setScanlines((value) => !value)} />
    </div>
  )
}
