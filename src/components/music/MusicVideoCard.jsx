import { FiPlay } from 'react-icons/fi'
import { getYouTubeThumbnail, getYouTubeWatchUrl } from '../../utils/youtube'

function MusicVideoCard({ track, artist = 'nnn' }) {
  const sourceUrl = track?.youtubeUrl || track?.youtubeEmbedUrl
  const watchUrl = getYouTubeWatchUrl(sourceUrl)
  const thumbnail = track?.musicVideoThumbnail || getYouTubeThumbnail(sourceUrl)

  if (!watchUrl) return null

  return (
    <a
      className="video-feature image-fallback"
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${track.title} 뮤직비디오 YouTube에서 보기`}
    >
      <img src={thumbnail} alt={`${track.title} 뮤직비디오 썸네일`} loading="lazy" />
      <span className="video-feature__play"><FiPlay /></span>
      <div className="video-feature__caption">
        <small>OFFICIAL MUSIC VIDEO</small>
        <strong>{artist} — {track.title}</strong>
      </div>
    </a>
  )
}

export default MusicVideoCard
