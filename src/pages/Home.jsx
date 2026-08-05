import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import AnnouncementSlider from '../components/layout/AnnouncementSlider'
import SectionHeader from '../components/layout/SectionHeader'
import AlbumFeature from '../components/music/AlbumFeature'
import MusicVideoSlider from '../components/music/MusicVideoSlider'
import MiniPlayer from '../components/music/MiniPlayer'
import MainVisual from '../components/profile/MainVisual'
import SocialLinks from '../components/profile/SocialLinks'
import ScheduleCard from '../components/schedule/ScheduleCard'
import { albums } from '../data/music'
import { schedulesNewestFirst } from '../data/schedules'

function Home() {
  const [activeVideo, setActiveVideo] = useState(null)
  const latestAlbum = albums[0]
  const musicVideos = albums
    .flatMap((album) => album.tracks)
    .filter((track) => track.youtubeUrl || track.youtubeEmbedUrl)
    .sort((a, b) => (a.musicVideoOrder ?? Number.MAX_SAFE_INTEGER) - (b.musicVideoOrder ?? Number.MAX_SAFE_INTEGER))

  return (
    <div className={`page home-page${activeVideo ? ' home-page--player-open' : ''}`}>
      <AnnouncementSlider />
      <SocialLinks />
      <MainVisual />

      <section className="section-block">
        <SectionHeader eyebrow="NEW RELEASE" title="Latest Album" />
        <AlbumFeature album={latestAlbum} />
      </section>

      {musicVideos.length > 0 && (
        <section className="section-block">
          <SectionHeader eyebrow="WATCH" title="Music Video" />
          <MusicVideoSlider videos={musicVideos} onPlayVideo={setActiveVideo} />
        </section>
      )}

      <section className="section-block">
        <SectionHeader
          eyebrow="UP NEXT"
          title="Upcoming Schedule"
          action={<Link to="/schedule">전체 보기 <FiArrowRight /></Link>}
        />
        <div className="schedule-list schedule-list--compact">
          {schedulesNewestFirst.slice(0, 3).map((schedule) => (
            <ScheduleCard key={schedule.id} schedule={schedule} compact />
          ))}
        </div>
      </section>
      <MiniPlayer track={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  )
}

export default Home
