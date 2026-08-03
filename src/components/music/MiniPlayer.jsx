import { FiMusic, FiX } from 'react-icons/fi'

function MiniPlayer({ track, onClose }) {
  if (!track) return null

  const separator = track.youtubeEmbedUrl.includes('?') ? '&' : '?'
  const playerUrl = `${track.youtubeEmbedUrl}${separator}autoplay=1&playsinline=1&rel=0`

  return (
    <aside className="mini-player" aria-label="현재 재생 중">
      <div className="mini-player__header">
        <FiMusic aria-hidden="true" />
        <div>
          <span>NOW PLAYING</span>
          <strong>{track.title}</strong>
        </div>
        <button type="button" onClick={onClose} aria-label="플레이어 닫기">
          <FiX />
        </button>
      </div>
      <div className="mini-player__video">
        <iframe
          key={track.youtubeEmbedUrl}
          src={playerUrl}
          title={`${track.title} YouTube 플레이어`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </aside>
  )
}

export default MiniPlayer
