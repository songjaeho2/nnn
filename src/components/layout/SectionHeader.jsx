function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action && <div className="section-header__action">{action}</div>}
    </div>
  )
}

export default SectionHeader
