import { FiArrowUpRight, FiClock, FiMapPin } from 'react-icons/fi'

function ScheduleCard({ schedule, compact = false }) {
  const [year, month, day] = schedule.date.split('-')
  const isTicketComingSoon = schedule.ticketStatus === 'coming-soon' || !schedule.ticketUrl

  return (
    <article className={`schedule-card${compact ? ' schedule-card--compact' : ''}`}>
      <time className="schedule-card__date" dateTime={schedule.date}>
        <span>{year}.{month}</span><strong>{day}</strong>
      </time>
      <div className="schedule-card__content">
        <span className="schedule-card__type">{schedule.type}</span>
        <h2>{schedule.title}</h2>
        <p><FiMapPin /> {schedule.venue}</p>
        <p><FiClock /> {schedule.time}</p>
        {!compact && <p className="schedule-card__description">{schedule.description}</p>}
      </div>
      {isTicketComingSoon ? (
        <span className="ticket-button ticket-button--disabled" aria-label="티켓 오픈 예정">
          오픈 예정
        </span>
      ) : (
        <a className="ticket-button" href={schedule.ticketUrl} target="_blank" rel="noopener noreferrer">
          {compact ? <FiArrowUpRight /> : 'TICKET'}
        </a>
      )}
    </article>
  )
}

export default ScheduleCard
