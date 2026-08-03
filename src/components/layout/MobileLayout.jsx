import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AppBar from './AppBar'
import CategoryNav from './CategoryNav'

function MobileLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="mobile-shell">
      <AppBar />
      <CategoryNav />
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <strong>nnn</strong>
        <span>© {new Date().getFullYear()} nnn STUDIO</span>
      </footer>
    </div>
  )
}

export default MobileLayout
