import { FiArrowUpRight, FiClock, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ScheduleCard({ schedule, compact = false }) {
  const [year, month, day] = schedule.date.split('-')
  const formattedDate = `${month.padStart(2, '0')}.${day.padStart(2, '0')}`
  const isEventEnded = schedule.status === 'ended'
  const isTicketComingSoon = schedule.ticketStatus === 'coming-soon' || !schedule.ticketUrl

  return (
    <article className={`schedule-card${compact ? ' schedule-card--compact' : ''}`}>
      <time className="schedule-card__date" dateTime={schedule.date}>
        <span>{year}</span>
        <strong>{formattedDate}</strong>
      </time>
      <div className="schedule-card__content">
        <span className="schedule-card__type">{schedule.type}</span>
        <h2>{schedule.title}</h2>
        <p><FiMapPin /> {schedule.venue}</p>
        <p><FiClock /> {schedule.time}</p>
        {!compact && (
          <p className="schedule-card__description">
            {schedule.summary || schedule.description}
          </p>
        )}
      </div>
      {isEventEnded ? (
        <span className="ticket-button ticket-button--disabled ticket-button--ended" aria-label="공연 종료">
          공연 종료
        </span>
      ) : isTicketComingSoon ? (
        <span className="ticket-button ticket-button--disabled" aria-label="티켓 오픈 예정">
          오픈 예정
        </span>
      ) : (
        <a className="ticket-button" href={schedule.ticketUrl} target="_blank" rel="noopener noreferrer">
          {compact ? <FiArrowUpRight /> : 'TICKET'}
        </a>
      )}
      <Link className="schedule-card__detail-link" to={`/schedule/${schedule.id}`} aria-label={`${schedule.title} 상세 정보 보기`} />
    </article>
  )
}

export default ScheduleCard
