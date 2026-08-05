import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { albums } from '../data/music'
import { albumDetails } from '../data/albumDetails'

function AlbumCredits() {
  const { albumId } = useParams()
  const album = albums.find(({ id }) => id === albumId)
  const credits = album ? albumDetails[album.id]?.credits : null

  if (!album) {
    return <div className="page empty-state"><h1>Album not found</h1><Link to="/music">음악 목록으로</Link></div>
  }

  return (
    <article className="page album-credits">
      <Link className="back-link" to={`/music/${encodeURIComponent(album.id)}`}>
        <FiArrowLeft /> 앨범으로 돌아가기
      </Link>
      <figure className="album-credits__cover image-fallback">
        <img src={album.cover} alt={`${album.title} 앨범 커버`} />
      </figure>
      <span>CREDITS</span>
      <h1>{album.title}</h1>
      {credits ? <p>{credits}</p> : <p>등록된 크레딧이 없습니다.</p>}
    </article>
  )
}

export default AlbumCredits
