import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AppBar from './AppBar'
import CategoryNav from './CategoryNav'
import TicketOpenPopup from './TicketOpenPopup'

function MobileLayout() {
  const { pathname } = useLocation()
  const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="mobile-shell">
      {isTicketPopupOpen && <TicketOpenPopup onClose={() => setIsTicketPopupOpen(false)} />}
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
