import { memo } from 'react'
import { FiCheckCircle, FiMoreVertical } from 'react-icons/fi'
import Avatar from '../common/Avatar'
import ExternalLink from '../common/ExternalLink'

function VideoCard({ video }) {
  const videoAriaLabel = `${video.title} 재생`
  const hasMeta = video.views || video.published

  return (
    <article className="video-card">
      <ExternalLink href={video.url} className="video-card__thumbnail" ariaLabel={videoAriaLabel}>
        <img src={video.thumbnail} alt="" loading="lazy" />
        {video.duration && <span>{video.duration}</span>}
      </ExternalLink>
      <div className="video-card__body">
        <Avatar
          imageUrl={video.avatarImage}
          label={`${video.channel} channel`}
          fallback={video.avatar}
          color={video.avatarColor}
        />
        <div className="video-card__info">
          <h3>
            <ExternalLink href={video.url}>{video.title}</ExternalLink>
          </h3>
          <p>{video.channel} {video.verified && <FiCheckCircle aria-label="인증됨" />}</p>
          {hasMeta && (
            <p>{[video.views, video.published].filter(Boolean).join(' · ')}</p>
          )}
        </div>
        <button className="more-button" aria-label="더보기"><FiMoreVertical /></button>
      </div>
    </article>
  )
}

export default memo(VideoCard)
