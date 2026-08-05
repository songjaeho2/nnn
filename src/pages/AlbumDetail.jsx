import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import TrackList from '../components/music/TrackList'
import MiniPlayer from '../components/music/MiniPlayer'
import StreamingLinks from '../components/music/StreamingLinks'
import { albums } from '../data/music'
import { albumDetails } from '../data/albumDetails'

function AlbumDetail() {
  const { albumId } = useParams()
  const album = albums.find(({ id }) => id === albumId)
  const details = album ? albumDetails[album.id] : null
  const introduction = details?.introduction || album?.description
  const credits = details?.credits
  const [activeTrack, setActiveTrack] = useState(null)

  if (!album) {
    return <div className="page empty-state"><h1>Album not found</h1><Link to="/music">음악 목록으로</Link></div>
  }

  return (
    <article className={`page album-detail${activeTrack ? ' album-detail--player-open' : ''}`}>
      <Link className="back-link" to="/music"><FiArrowLeft /> DISCography</Link>
      <figure className="album-detail__cover image-fallback">
        <img
          key={album.cover}
          src={album.cover}
          alt={`${album.title} 앨범 커버`}
        />
      </figure>
      <span className="album-detail__meta">{album.type} · {album.releaseDate}</span>
      <h1>{album.title}</h1>
      <StreamingLinks links={album.streamingLinks} />
      <section className="track-section">
        <div className="section-header"><div><span>SONGS</span><h2>Track List</h2></div></div>
        <TrackList
          tracks={album.tracks}
          streamingLinks={album.streamingLinks}
          activeTrack={activeTrack}
          onPlayVideo={setActiveTrack}
        />
      </section>
      {introduction && (
        <section className="album-introduction">
          <span>ALBUM NOTE</span>
          <h2>앨범 소개</h2>
          <p>{introduction}</p>
          {credits && (
            <Link className="credits-link" to={`/music/${encodeURIComponent(album.id)}/credits`}>
              전체 크레딧 보기
            </Link>
          )}
        </section>
      )}
      <MiniPlayer track={activeTrack} onClose={() => setActiveTrack(null)} />
    </article>
  )
}

export default AlbumDetail
