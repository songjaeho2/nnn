import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const announcements = [

  { tag: 'CONCERT', text: '2026 11.13 - nnn 콘서트 예정', link: '/schedule/busan-festival' },
  { tag: 'CONCERT', text: '2026 8.1 공연 - 예매 종료', link: '/schedule/nnn-live-seoul' },
  { tag: 'NEW ALBUM', text: 'nnn - 마지막이란 걸 알아 발매', link: '/music/마지막이라는 걸 알아' },
]

function AnnouncementSlider() {
  const [active, setActive] = useState(0)
  const announcement = announcements[active]
  const isExternalLink = announcement.link.startsWith('http')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="notice-slider" aria-label="공지사항" aria-live="polite">
      {isExternalLink ? (
        <a key={active} className="notice-slider__link" href={announcement.link} target="_blank" rel="noopener noreferrer">
          <span className="notice-slider__content"><strong>{announcement.tag}</strong><span>{announcement.text}</span></span>
          <FiChevronRight aria-hidden="true" />
        </a>
      ) : (
        <Link key={active} className="notice-slider__link" to={announcement.link}>
          <span className="notice-slider__content"><strong>{announcement.tag}</strong><span>{announcement.text}</span></span>
          <FiChevronRight aria-hidden="true" />
        </Link>
      )}
      <div className="notice-slider__dots" aria-hidden="true">
        {announcements.map(({ text }, index) => (
          <i className={index === active ? 'is-active' : ''} key={text} />
        ))}
      </div>
    </section>
  )
}

export default AnnouncementSlider
