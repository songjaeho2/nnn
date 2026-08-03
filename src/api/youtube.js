import axios from 'axios'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const DEFAULT_VIDEO_OPTIONS = {
  maxResults: 12,
  regionCode: 'KR',
}

let videosCache = null

const youtubeClient = axios.create({
  baseURL: BASE_URL,
})

function formatViewCount(value) {
  const count = Number(value ?? 0)

  if (count >= 100000000) return `조회수 ${Math.floor(count / 100000000)}억회`
  if (count >= 10000) return `조회수 ${Math.floor(count / 10000)}만회`
  if (count >= 1000) return `조회수 ${(count / 1000).toFixed(1)}천회`

  return `조회수 ${count.toLocaleString('ko-KR')}회`
}

function formatPublishedDate(value) {
  if (!value) return ''

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}

function getBestThumbnail(thumbnails = {}) {
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    ''
  )
}

function createChannelMap(channels = []) {
  return new Map(channels.map((channel) => [channel.id, channel]))
}

function mapVideoItem(video, channelMap) {
  const channel = channelMap.get(video.snippet.channelId)
  const channelTitle = video.snippet.channelTitle

  return {
    id: video.id,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: getBestThumbnail(video.snippet.thumbnails),
    title: video.snippet.title,
    channel: channelTitle,
    views: formatViewCount(video.statistics?.viewCount),
    published: formatPublishedDate(video.snippet.publishedAt),
    duration: '',
    avatar: channelTitle.slice(0, 2).toUpperCase(),
    avatarColor: '#200404',
    avatarImage: channel?.snippet?.thumbnails?.default?.url || '',
    verified: false,
    category: 'All',
  }
}

async function fetchPopularVideos({ maxResults, regionCode, signal }) {
  const { data } = await youtubeClient.get('/videos', {
    signal,
    params: {
      key: API_KEY,
      part: 'snippet,statistics',
      chart: 'mostPopular',
      maxResults,
      regionCode,
    },
  })

  return data.items ?? []
}

async function fetchChannels(channelIds, signal) {
  if (channelIds.length === 0) return []

  const { data } = await youtubeClient.get('/channels', {
    signal,
    params: {
      key: API_KEY,
      part: 'snippet',
      id: channelIds.join(','),
    },
  })

  return data.items ?? []
}

export async function getVideos(options = {}) {
  if (!API_KEY) {
    throw new Error('VITE_YOUTUBE_API_KEY가 .env에 설정되어 있지 않습니다.')
  }

  if (videosCache) return videosCache

  const requestOptions = {
    ...DEFAULT_VIDEO_OPTIONS,
    ...options,
  }

  const videos = await fetchPopularVideos(requestOptions)
  const channelIds = [...new Set(videos.map((video) => video.snippet.channelId))]
  const channels = await fetchChannels(channelIds, requestOptions.signal)
  const channelMap = createChannelMap(channels)

  videosCache = videos.map((video) => mapVideoItem(video, channelMap))

  return videosCache
}

export const videoCategories = ['All', 'Music', 'MV', 'Video', 'Recently uploaded']
