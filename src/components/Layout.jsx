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

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)
  const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false)
  const [scanlines, setScanlines] = useLocalStorage('scanlines', true)

  const [booting, setBooting] = useState(() => !prefersReducedMotion() && !hasSeen('boot'))
  const finishBoot = useCallback(() => setBooting(false), [])

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    mainRef.current?.scrollTo({ top: 0 })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

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
