import ScheduleCard from '../components/schedule/ScheduleCard'
import { schedules } from '../data/schedules'

function Schedule() {
  return (
    <div className="page inner-page">
      <header className="page-title">
        <span>LIVE & EVENTS</span>
        <h1>Schedule</h1>
        <p>공연과 방송, nnn을 직접 만날 수 있는 일정입니다.</p>
      </header>
      <section className="schedule-list" aria-label="공연 일정">
        {schedules.map((schedule) => <ScheduleCard key={schedule.id} schedule={schedule} />)}
      </section>
    </div>
  )
}

export default Schedule
