import { useEffect, useState } from 'react'

const announcements = [
  { tag: 'NEW ALBUM', text: 'nnn - 마지막이란 걸 알아 발매' },
  { tag: 'CONCERT', text: '2026 8.1 공연 - 예매 종료' },
  { tag: 'CONCERT', text: '2026 11.13 - 공연 확정' },
]

function AnnouncementSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="notice-slider" aria-label="공지사항" aria-live="polite">
      <div key={active} className="notice-slider__content">
        <strong>{announcements[active].tag}</strong>
        <span>{announcements[active].text}</span>
      </div>
      <div className="notice-slider__dots" aria-hidden="true">
        {announcements.map(({ tag }, index) => (
          <i className={index === active ? 'is-active' : ''} key={tag} />
        ))}
      </div>
    </section>
  )
}

export default AnnouncementSlider
