import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'

function AlbumFeature({ album }) {
  return (
    <article className="album-feature">
      <Link className="album-feature__cover image-fallback" to={`/music/${album.id}`}>
        <img src={album.cover} alt={`${album.title} 앨범 커버`} loading="lazy" />
        <span><FiPlay /></span>
      </Link>
      <div className="album-feature__info">
        <span>{album.type} · {album.releaseDate}</span>
        <h3>{album.title}</h3>
        <p>{album.description}</p>
        <Link className="primary-button" to={`/music/${album.id}`}>
          Listen <FiArrowUpRight />
        </Link>
      </div>
    </article>
  )
}

export default AlbumFeature
