import { memo } from 'react'
import { primaryNavigation, libraryNavigation, exploreNavigation, utilityNavigation } from '../../data/navigation'

const navigationGroups = [
  { items: primaryNavigation },
  { title: 'Caeer', items: libraryNavigation },
  { title: 'Music', items: exploreNavigation },
  { items: utilityNavigation },
]

function NavigationGroup({ title, items }) {
  return (
    <div className="nav-group">
      {title && <h2>{title}</h2>}
      <nav aria-label={title || 'Main menu'}>
        {items.map(({ label, icon: Icon, active }) => (
          <a className={`nav-item${active ? ' nav-item--active' : ''}`} href="#" key={label}>
            <Icon /><span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
        {navigationGroups.map(({ title, items }) => (
          <NavigationGroup title={title} items={items} key={title || items[0].label} />
        ))}
        <footer className="sidebar__footer">
          <p>짤 2026 Frame</p>
        </footer>
      </aside>
      {isOpen && <button className="sidebar-backdrop" onClick={onClose} aria-label="메뉴 닫기" />}
    </>
  )
}

export default memo(Sidebar)
