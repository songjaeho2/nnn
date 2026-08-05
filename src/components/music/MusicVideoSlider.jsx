import { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import MusicVideoCard from './MusicVideoCard'

function MusicVideoSlider({ videos, onPlayVideo }) {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function moveTo(index) {
    const nextIndex = Math.max(0, Math.min(index, videos.length - 1))
    const slider = sliderRef.current

    if (!slider) return

    slider.scrollTo({ left: slider.clientWidth * nextIndex, behavior: 'smooth' })
    setActiveIndex(nextIndex)
  }

  function handleScroll() {
    const slider = sliderRef.current
    if (!slider?.clientWidth) return

    setActiveIndex(Math.round(slider.scrollLeft / slider.clientWidth))
  }

  if (videos.length === 0) return null

  return (
    <div className="music-video-slider">
      <div className="music-video-slider__viewport" ref={sliderRef} onScroll={handleScroll}>
        {videos.map((video) => (
          <div className="music-video-slider__slide" key={video.youtubeUrl || video.youtubeEmbedUrl}>
            <MusicVideoCard track={video} onPlay={onPlayVideo} />
          </div>
        ))}
      </div>

      {videos.length > 1 && (
        <div className="music-video-slider__controls">
          <button type="button" onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="이전 뮤직비디오">
            <FiChevronLeft />
          </button>
          <div className="music-video-slider__dots" aria-label="뮤직비디오 슬라이드 선택">
            {videos.map((video, index) => (
              <button
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => moveTo(index)}
                aria-label={`${index + 1}번째 뮤직비디오`}
                aria-current={index === activeIndex ? 'true' : undefined}
                key={video.youtubeUrl || video.youtubeEmbedUrl}
              />
            ))}
          </div>
          <button type="button" onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === videos.length - 1} aria-label="다음 뮤직비디오">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default MusicVideoSlider
