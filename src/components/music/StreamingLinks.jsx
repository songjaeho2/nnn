import { FaMusic } from 'react-icons/fa6'
import { SiApplemusic, SiSpotify, SiYoutube, SiYoutubemusic } from 'react-icons/si'

const serviceIcons = {
  Spotify: SiSpotify,
  'Apple Music': SiApplemusic,
  YouTube: SiYoutube,
  'YouTube Music': SiYoutubemusic,
  Melon: FaMusic,
}

function StreamingLinks({ links = [], className = '' }) {
  return (
    <nav className={`streaming-links${className ? ` ${className}` : ''}`} aria-label="음원 스트리밍 서비스">
      {links.map(({ label, url }) => {
        const Icon = serviceIcons[label] || FaMusic

        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}에서 듣기`}
            title={label}
          >
            <Icon aria-hidden="true" />
          </a>
        )
      })}
    </nav>
  )
}

export default StreamingLinks
