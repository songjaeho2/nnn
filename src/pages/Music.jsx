import AlbumCard from '../components/music/AlbumCard'
import { albums } from '../data/music'

function Music() {
  return (
    <div className="page inner-page">
      <header className="page-title">
        <span>DISCOGRAPHY</span>
        <h1>Music</h1>
        <p>nnn의 음악과 그 안에 담긴 이야기를 만나보세요.</p>
      </header>
      <section className="album-list" aria-label="앨범 목록">
        {albums.map((album) => <AlbumCard key={album.id} album={album} />)}
      </section>
    </div>
  )
}

export default Music
