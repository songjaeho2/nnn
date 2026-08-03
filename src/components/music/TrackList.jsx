import { useState } from 'react'
import { FiChevronUp, FiPlay, FiVideo, FiVolume2 } from 'react-icons/fi'
import StreamingLinks from './StreamingLinks'

function TrackList({ tracks, streamingLinks, activeTrack, onPlayVideo }) {
  const [openTrackTitle, setOpenTrackTitle] = useState(null)

  function toggleOptions(trackTitle) {
    setOpenTrackTitle((current) => current === trackTitle ? null : trackTitle)
  }

  return (
    <ol className="track-list">
      {tracks.map((track, index) => {
        const isOpen = openTrackTitle === track.title
        const isPlaying = activeTrack?.title === track.title
        const trackStreamingLinks = track.streamingLinks ?? streamingLinks
        const hasStreamingLinks = trackStreamingLinks?.length > 0
        const hasMusicVideo = Boolean(track.youtubeUrl || track.youtubeEmbedUrl)
        const hasListenOptions = hasStreamingLinks || hasMusicVideo

        return (
          <li className={`${isPlaying ? 'is-playing ' : ''}${isOpen ? 'is-open' : ''}`.trim()} key={track.title}>
            <div className="track-list__row">
              <span className="track-list__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="track-list__info">
                <strong>{track.title}</strong>
                {track.feature && <small>feat. {track.feature}</small>}
              </div>
              <time>{track.duration}</time>
              <button
                type="button"
                aria-label={hasListenOptions ? `${track.title} 듣기 옵션 ${isOpen ? '닫기' : '열기'}` : `${track.title}은 현재 제공되는 듣기 링크가 없습니다`}
                aria-expanded={isOpen}
                disabled={!hasListenOptions}
                onClick={() => toggleOptions(track.title)}
              >
                {isOpen ? <FiChevronUp /> : isPlaying ? <FiVolume2 /> : <FiPlay />}
              </button>
            </div>

            {isOpen && (
              <div className="track-options">
                <span>LISTEN ON</span>
                <div className="track-options__actions">
                  {hasStreamingLinks && (
                    <StreamingLinks links={trackStreamingLinks} className="streaming-links--track" />
                  )}
                  {hasMusicVideo && (
                    <button className="music-video-button" type="button" onClick={() => onPlayVideo(track)}>
                      <FiVideo />
                      <span>MUSIC VIDEO</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default TrackList
