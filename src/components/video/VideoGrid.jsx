import { memo } from 'react'
import VideoCard from './VideoCard'

function VideoGrid({ videos }) {
  return (
    <section className="video-grid">
      {videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </section>
  )
}

export default memo(VideoGrid)
