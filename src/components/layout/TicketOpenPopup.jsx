import { useEffect } from 'react'
import { FiArrowUpRight, FiBell, FiX } from 'react-icons/fi'

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

        <div className="ticket-open-popup__badge"><FiBell /> TICKET OPEN</div>
        <p className="ticket-open-popup__date">2026. 11. 13 · ROLLING HALL</p>
        <h2 id="ticket-open-title">nnn &amp; TWLV<br />GOOD Friends</h2>

        <div className="ticket-open-popup__time">
          <span>10.14</span>
          <strong>8:00</strong>
          <small>PM</small>
        </div>

        <p className="ticket-open-popup__copy">멜론티켓에서 예매가 시작됩니다.<br />오픈 시간을 놓치지 마세요.</p>
        <a className="ticket-open-popup__cta" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
          멜론티켓 바로가기 <FiArrowUpRight />
        </a>
        <button className="ticket-open-popup__later" type="button" onClick={onClose}>닫기</button>
      </section>
    </div>
  )
}

export default TicketOpenPopup
