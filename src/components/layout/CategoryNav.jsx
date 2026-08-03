import { NavLink } from 'react-router-dom'

const categories = [
  { label: 'HOME', to: '/', end: true },
  { label: 'MUSIC', to: '/music' },
  { label: 'SCHEDULE', to: '/schedule' },
]

function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="주요 카테고리">
      {categories.map(({ label, to, end }) => (
        <NavLink key={to} to={to} end={end}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default CategoryNav
