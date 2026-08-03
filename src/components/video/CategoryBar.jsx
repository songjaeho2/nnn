import { memo } from 'react'

function CategoryBar({ categories, activeCategory, onChange }) {
  return (
    <div className="category-bar" aria-label="영상 카테고리">
      {categories.map((category) => (
        <button
          className={`category-chip${category === activeCategory ? ' category-chip--active' : ''}`}
          key={category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default memo(CategoryBar)
