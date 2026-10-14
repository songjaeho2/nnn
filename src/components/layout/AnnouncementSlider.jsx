import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const announcements = [
  {
    tag: 'TICKET OPEN',
    text: '11.13 nnn & TWLV 콘서트 예매하기',
    link: 'https://ticket.melon.com/performance/index.htm?prodId=214031',
  },
]

function AnnouncementSlider() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(null)
  const suppressClick = useRef(false)
  const announcement = announcements[active]
  const isExternalLink = announcement.link.startsWith('http')

  function moveSlide(direction) {
    setActive((current) => (current + direction + announcements.length) % announcements.length)
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 45) return

    suppressClick.current = true
    moveSlide(distance < 0 ? 1 : -1)
    window.setTimeout(() => { suppressClick.current = false }, 350)
  }

  function handleClickCapture(event) {
    if (!suppressClick.current) return
    event.preventDefault()
    event.stopPropagation()
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      className="notice-slider"
      aria-label="공지사항"
      aria-live="polite"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClickCapture={handleClickCapture}
    >
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
