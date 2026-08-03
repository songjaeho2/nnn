import { FiPlay } from 'react-icons/fi'

function MusicVideoCard({ track, artist = 'nnn' }) {
  if (!track?.youtubeUrl) return null

  return (
    <a
      className="video-feature image-fallback"
      href={track.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${track.title} 뮤직비디오 YouTube에서 보기`}
    >
      <img src={track.musicVideoThumbnail} alt={`${track.title} 뮤직비디오 썸네일`} loading="lazy" />
      <span className="video-feature__play"><FiPlay /></span>
      <div className="video-feature__caption">
        <small>OFFICIAL MUSIC VIDEO</small>
        <strong>{artist} — {track.title}</strong>
      </div>
    </a>
  )
}

export default MusicVideoCard
