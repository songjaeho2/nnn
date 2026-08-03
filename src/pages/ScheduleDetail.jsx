import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { schedules } from '../data/schedules'

function ScheduleDetail() {
  const { scheduleId } = useParams()
  const schedule = schedules.find(({ id }) => id === scheduleId)

  if (!schedule) {
    return (
      <div className="page empty-state">
        <h1>Schedule not found</h1>
        <Link to="/schedule">일정 목록으로</Link>
      </div>
    )
  }

  const [year, month, day] = schedule.date.split('-').map(Number)
  const date = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }).format(new Date(year, month - 1, day))
  const isEventEnded = schedule.status === 'ended'
  const isTicketComingSoon = schedule.ticketStatus === 'coming-soon' || !schedule.ticketUrl

  return (
    <article className="page schedule-detail">
      <Link className="back-link" to="/schedule"><FiArrowLeft /> SCHEDULE</Link>

      <header className="schedule-detail__hero">
        <span>{schedule.type}</span>
        <h1>{schedule.title}</h1>
      </header>

      <dl className="schedule-detail__info">
        <div>
          <dt><FiCalendar /> DATE</dt>
          <dd>{date}</dd>
        </div>
        <div>
          <dt><FiClock /> TIME</dt>
          <dd>{schedule.time}</dd>
        </div>
        <div>
          <dt><FiMapPin /> VENUE</dt>
          <dd>{schedule.venue}</dd>
        </div>
      </dl>

      <section className="schedule-detail__poster-section" aria-labelledby="poster-title">
        <div className="schedule-detail__section-heading">
          <span>POSTER</span>
          <h2 id="poster-title">공연 포스터</h2>
        </div>
        {schedule.poster ? (
          <figure className="schedule-detail__poster image-fallback">
            <img src={schedule.poster} alt={`${schedule.title} 공연 포스터`} />
          </figure>
        ) : (
          <div className="schedule-detail__poster-placeholder" role="img" aria-label="공연 포스터 공개 예정">
            <span>POSTER</span>
            <strong>공개 예정</strong>
            <p>공연 포스터가 공개되면 업데이트됩니다.</p>
          </div>
        )}
      </section>

      <section className="schedule-detail__description">
        <span>ABOUT</span>
        <h2>공연 안내</h2>
        <p>{schedule.detailDescription || schedule.description || schedule.summary}</p>
      </section>

      {isEventEnded ? (
        <span className="schedule-detail__ticket schedule-detail__ticket--disabled schedule-detail__ticket--ended">
          종료된 공연입니다
        </span>
      ) : isTicketComingSoon ? (
        <span className="schedule-detail__ticket schedule-detail__ticket--disabled">티켓 오픈 예정</span>
      ) : (
        <a className="schedule-detail__ticket" href={schedule.ticketUrl} target="_blank" rel="noopener noreferrer">
          티켓 예매하기
        </a>
      )}
    </article>
  )
}

export default ScheduleDetail
