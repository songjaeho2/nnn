import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

function AlbumCard({ album }) {
  return (
    <Link className="album-card" to={`/music/${album.id}`}>
      <div className="album-card__cover image-fallback">
        <img src={album.cover} alt="" loading="lazy" />
      </div>
      <div>
        <span>{album.type} · {album.releaseDate}</span>
        <h2>{album.title}</h2>
        <p>{album.description}</p>
      </div>
      <FiArrowUpRight className="album-card__arrow" />
    </Link>
  )
}

export default AlbumCard
