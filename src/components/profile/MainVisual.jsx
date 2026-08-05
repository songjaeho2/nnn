import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiHeart, FiShare2 } from 'react-icons/fi'

function MainVisual() {
  const [liked, setLiked] = useState(() => localStorage.getItem('nnn-profile-liked') === 'true')

  function toggleLike() {
    setLiked((current) => {
      const next = !current
      localStorage.setItem('nnn-profile-liked', String(next))
      return next
    })
  }

  async function shareProfile() {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'nnn', url: window.location.href })
      } else {
        await navigator.clipboard?.writeText(window.location.href)
      }
    } catch (error) {
      if (error.name !== 'AbortError') console.error('공유에 실패했습니다.', error)
    }
  }

  return (
    <section className="hero">
      <img src="/data/image/nnn커버4.jpg" alt="아티스트 nnn 메인 비주얼" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="hero__label">OFFICIAL ARTIST</span>
        <h1>nnn</h1>

        <div className="hero__actions">
          <button className={liked ? 'is-liked' : ''} type="button" aria-pressed={liked} onClick={toggleLike}>
            <FiHeart /><span>{liked ? '좋아요 완료' : '좋아요'}</span>
          </button>
          <button type="button" onClick={shareProfile}>
            <FiShare2 /><span>공유</span>
          </button>
          <Link to="/schedule">
            <FiCalendar /><span>공연 일정</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MainVisual
