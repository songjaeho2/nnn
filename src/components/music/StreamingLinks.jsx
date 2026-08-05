import { useEffect, useState } from 'react'
import { FaMusic } from 'react-icons/fa6'
import { FiCopy, FiExternalLink, FiX } from 'react-icons/fi'
import { SiApplemusic, SiSpotify, SiYoutube, SiYoutubemusic } from 'react-icons/si'

const serviceIcons = {
  Spotify: SiSpotify,
  'Apple Music': SiApplemusic,
  YouTube: SiYoutube,
  'YouTube Music': SiYoutubemusic,
  Melon: FaMusic,
}

function StreamingLinks({ links = [], className = '' }) {
  const [selectedLink, setSelectedLink] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!selectedLink) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setSelectedLink(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selectedLink])

  function openLink() {
    window.open(selectedLink.url, '_blank', 'noopener,noreferrer')
    setSelectedLink(null)
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(selectedLink.url)
      setCopied(true)
    } catch {
      window.prompt('아래 링크를 복사해 주세요.', selectedLink.url)
    }
  }

  function closeDialog() {
    setSelectedLink(null)
    setCopied(false)
  }

  return (
    <>
      <nav className={`streaming-links${className ? ` ${className}` : ''}`} aria-label="음원 스트리밍 서비스">
        {links.map((link) => {
          const Icon = serviceIcons[link.label] || FaMusic

          return (
            <button
              key={link.label}
              type="button"
              aria-label={`${link.label}에서 듣기`}
              title={link.label}
              onClick={() => {
                setSelectedLink(link)
                setCopied(false)
              }}
            >
              <Icon aria-hidden="true" />
            </button>
          )
        })}
      </nav>

      {selectedLink && (
        <div className="streaming-dialog" role="presentation" onMouseDown={closeDialog}>
          <section
            className="streaming-dialog__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="streaming-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="streaming-dialog__close" type="button" aria-label="닫기" onClick={closeDialog}>
              <FiX />
            </button>
            <span>LISTEN ON</span>
            <h2 id="streaming-dialog-title">{selectedLink.label}에서 들으시겠어요?</h2>
            <p>음악 감상 후 뒤로 가기를 누르면 이 페이지로 돌아올 수 있어요.</p>
            <div className="streaming-dialog__actions">
              <button className="streaming-dialog__open" type="button" onClick={openLink}>
                <FiExternalLink /> {selectedLink.label} 열기
              </button>
              <button type="button" onClick={copyLink}>
                <FiCopy /> {copied ? '복사 완료' : '링크 복사'}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default StreamingLinks
