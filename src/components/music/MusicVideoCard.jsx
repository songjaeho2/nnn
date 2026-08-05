import { FiPlay } from 'react-icons/fi'
import { getYouTubeThumbnail, getYouTubeVideoId } from '../../utils/youtube'

function MusicVideoCard({ track, artist = 'nnn', onPlay }) {
  const sourceUrl = track?.youtubeUrl || track?.youtubeEmbedUrl
  const videoId = getYouTubeVideoId(sourceUrl)
  const thumbnail = track?.musicVideoThumbnail || getYouTubeThumbnail(sourceUrl)

  if (!videoId) return null

  return (
    <button
      type="button"
      className="video-feature image-fallback"
      aria-label={`${track.title} 뮤직비디오 재생`}
      onClick={() => onPlay(track)}
    >
      <img src={thumbnail} alt={`${track.title} 뮤직비디오 썸네일`} loading="lazy" />
      <span className="video-feature__play"><FiPlay /></span>
      <div className="video-feature__caption">
        <small>OFFICIAL MUSIC VIDEO</small>
        <strong>{artist} — {track.title}</strong>
      </div>
    </button>
  )
}

export default MusicVideoCard
