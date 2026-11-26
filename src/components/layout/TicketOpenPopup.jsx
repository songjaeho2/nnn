import { useEffect } from 'react'
import { FiArrowUpRight, FiX } from 'react-icons/fi'

const TICKET_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc1L4lbxl3IklaHbGa3pZRZM9KMJvOgcWhy4aJrwAWpqk-DUw/viewform'

function TicketOpenPopup({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="ticket-open-popup" role="presentation" onMouseDown={onClose}>
      <section
        className="ticket-open-popup__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ticket-open-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="ticket-open-popup__close" type="button" onClick={onClose} aria-label="알림 닫기">
          <FiX />
        </button>

        <div className="ticket-open-popup__visual">
          <img src="/data/포스터/12일 포스터.JPG" alt="nnn과 TWLV GOOD FRIENDS 단독 콘서트" />
          <span className="ticket-open-popup__badge">NOW BOOKING</span>
        </div>

        <div className="ticket-open-popup__body">
          <p className="ticket-open-popup__date">2026 12.12 (sat) 6PM SengGi Studio</p>
          <h2 id="ticket-open-title">TWLV DAYS</h2>
          <p className="ticket-open-popup__copy">LINE UP
            TWLV x nnn x 87 Dance x Meloh x James Keys <br /></p>
        </div>
        <a className="ticket-open-popup__cta" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
          예매하기 <FiArrowUpRight />
        </a>
        <button className="ticket-open-popup__later" type="button" onClick={onClose}>닫기</button>
      </section>
    </div>
  )
}

export default TicketOpenPopup
