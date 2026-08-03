import { FiBell, FiHeart, FiShare2 } from 'react-icons/fi'

const actions = [
  { label: '좋아요', icon: FiHeart },
  { label: '공유', icon: FiShare2 },
  { label: '알림 받기', icon: FiBell },
]

function MainVisual() {
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
          {actions.map(({ label, icon: Icon }) => (
            <button key={label} type="button" onClick={label === '공유' ? shareProfile : undefined}>
              <Icon /><span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainVisual
