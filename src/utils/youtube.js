export function getYouTubeVideoId(url = '') {
  if (!url) return ''

  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace('www.', '')

    if (hostname === 'youtu.be') return parsedUrl.pathname.split('/').filter(Boolean)[0] || ''

    const queryVideoId = parsedUrl.searchParams.get('v')
    if (queryVideoId) return queryVideoId

    const segments = parsedUrl.pathname.split('/').filter(Boolean)
    const videoTypeIndex = segments.findIndex((segment) => ['embed', 'shorts', 'live'].includes(segment))

    if (videoTypeIndex >= 0) return segments[videoTypeIndex + 1] || ''
  } catch {
    return ''
  }

  return ''
}

export function getYouTubeWatchUrl(url) {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : ''
}

export function getYouTubeEmbedUrl(url) {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
}

export function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''
}
