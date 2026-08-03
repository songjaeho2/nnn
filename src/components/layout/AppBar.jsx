import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

function AppBar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  return (
    <header className="app-bar" ref={menuRef}>
      <Link className="wordmark" to="/" aria-label="nnn 홈">n<span>n</span>n</Link>
      <div className="app-bar__actions">
        <button type="button" aria-label="검색"><FiSearch /></button>
        <Link className="app-bar__avatar" to="/" aria-label="프로필">
          <img src="/images/profile.jpg" alt="" />
        </Link>
        <button
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <nav className="app-menu" aria-label="전체 메뉴">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/music" onClick={() => setIsOpen(false)}>Music</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule</Link>
        </nav>
      )}
    </header>
  )
}

export default AppBar
