import { FiArrowUpRight, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'

function FeaturedConcert({ schedule }) {
  if (!schedule) return null

  return (
    <section className="featured-concert" aria-labelledby="featured-concert-title">
      <div className="featured-concert__topline">
        <span>LIVE AT ROLLING HALL</span>
        <span className="featured-concert__status">TICKET OPEN</span>
      </div>

      <div className="featured-concert__date" aria-hidden="true">
        <strong>11</strong><i /> <strong>13</strong>
      </div>

      <p className="featured-concert__year">2026 CONCERT</p>
      <h2 id="featured-concert-title">TWLV <span>×</span> nnn<br />GOOD FRIENDS</h2>

      <div className="featured-concert__info">
        <span><FiCalendar /> 2026. 11. 13</span>
        <span><FiClock /> 20:00</span>
        <span><FiMapPin /> 롤링홀, SEOUL</span>
      </div>

      <a href={schedule.ticketUrl} target="_blank" rel="noopener noreferrer">
        지금 예매하기 <FiArrowUpRight />
      </a>
    </section>
  )
}

export default FeaturedConcert
