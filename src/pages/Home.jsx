import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import AnnouncementSlider from '../components/layout/AnnouncementSlider'
import SectionHeader from '../components/layout/SectionHeader'
import AlbumFeature from '../components/music/AlbumFeature'
import MusicVideoCard from '../components/music/MusicVideoCard'
import MainVisual from '../components/profile/MainVisual'
import SocialLinks from '../components/profile/SocialLinks'
import ScheduleCard from '../components/schedule/ScheduleCard'
import { albums } from '../data/music'
import { schedules } from '../data/schedules'

function Home() {
  const latestAlbum = albums[0]
  const featuredMusicVideo = latestAlbum.tracks.find((track) => track.youtubeUrl)

  return (
    <div className="page home-page">
      <AnnouncementSlider />
      <SocialLinks />
      <MainVisual />

      <section className="section-block">
        <SectionHeader eyebrow="NEW RELEASE" title="Latest Album" />
        <AlbumFeature album={latestAlbum} />
      </section>

      {featuredMusicVideo && (
        <section className="section-block">
          <SectionHeader eyebrow="WATCH" title="Music Video" />
          <MusicVideoCard track={featuredMusicVideo} />
        </section>
      )}

      <section className="section-block">
        <SectionHeader
          eyebrow="UP NEXT"
          title="Upcoming Schedule"
          action={<Link to="/schedule">전체 보기 <FiArrowRight /></Link>}
        />
        <div className="schedule-list schedule-list--compact">
          {schedules.slice(0, 3).map((schedule) => (
            <ScheduleCard key={schedule.id} schedule={schedule} compact />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
