import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import TrackList from '../components/music/TrackList'
import MiniPlayer from '../components/music/MiniPlayer'
import StreamingLinks from '../components/music/StreamingLinks'
import { albums } from '../data/music'

function AlbumDetail() {
  const { albumId } = useParams()
  const album = albums.find(({ id }) => id === albumId)
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
      <p className="album-detail__description">{album.description}</p>
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
      <MiniPlayer track={activeTrack} onClose={() => setActiveTrack(null)} />
    </article>
  )
}

export default AlbumDetail
