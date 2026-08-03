import { FiMenu } from 'react-icons/fi'
import Logo from '../common/Logo'

function Header({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="icon-button" onClick={onMenuClick} aria-label="메뉴 열기">
        <FiMenu />
      </button>
      <Logo />
    </header>
  )
}

export default Header
