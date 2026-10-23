import { useEffect } from 'react'
import { FiArrowUpRight, FiX } from 'react-icons/fi'

const TICKET_URL = 'https://ticket.melon.com/performance/index.htm?prodId=214031'

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
          <img src="/data/포스터/롤링홀 캐러피.png" alt="nnn과 TWLV GOOD FRIENDS 단독 콘서트" />
          <span className="ticket-open-popup__badge">NOW BOOKING</span>
        </div>

        <div className="ticket-open-popup__body">
          <p className="ticket-open-popup__date">2026. 11. 13 · 8PM · ROLLING HALL</p>
          <h2 id="ticket-open-title">GOOD FRIENDS</h2>
          <p className="ticket-open-popup__copy">nnn × TWLV 첫 단독 콘서트<br />좋은 친구들과 함께할 단 하루의 밤.</p>
        </div>
        <a className="ticket-open-popup__cta" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
          남은 좌석 예매하기 <FiArrowUpRight />
        </a>
        <button className="ticket-open-popup__later" type="button" onClick={onClose}>닫기</button>
      </section>
    </div>
  )
}

export default TicketOpenPopup
