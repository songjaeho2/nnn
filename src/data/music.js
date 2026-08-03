/*
 * 이 파일에서 앨범 페이지의 콘텐츠를 관리합니다.
 * - youtubeUrl: HOME 뮤직비디오 카드가 이동할 일반 YouTube 영상 주소입니다.
 * - youtubeEmbedUrl: 사이트 내부 미니 플레이어용 YouTube embed 주소입니다.
 * - musicVideoThumbnail: HOME 뮤직비디오 카드의 썸네일입니다.
 *   뮤직비디오가 없는 트랙은 위 세 필드를 모두 생략하세요.
 * - streamingLinks: 앨범 공통 듣기 링크입니다.
 * - 트랙 안에 streamingLinks를 추가하면 해당 트랙에서만 앨범 공통 링크 대신 사용됩니다.
 */
export const albums = [
  {
    id: '마지막이라는 걸 알아',
    title: '마지막이라는 걸 알아',
    type: 'New Album',
    releaseDate: '2026',
    cover: '/data/image/마지막이란 걸 알아 앨범커버.jpg',
    description: '몽환적인 사운드 위에 이별의 잔상을 담아낸 nnn의 감성적인 싱글.',
    tracks: [
      {
        title: '마지막이란 걸 알아',
        duration: '04:50',
        youtubeUrl: 'https://www.youtube.com/watch?v=RFUJedP_KWY',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/RFUJedP_KWY',
        musicVideoThumbnail: '/data/image/마지막이란 걸 알아 뮤비썸네일.png',
      },
      { title: '마지막이란 걸 알아 (inst)', duration: '04:50' },

    ],
    streamingLinks: [
      { label: 'Spotify', url: 'https://open.spotify.com/track/7icd1Dj7Lf3O0VBvI1VosH?si=ccbc1d182fb44b70/' },
      { label: 'Apple Music', url: 'https://music.apple.com/kr/song/마지막이란-걸-알아/6777918931/' },
      { label: 'YouTube', url: 'https://youtu.be/RFUJedP_KWY?si=mV5Lc9pVhUOeZru5/' },
      { label: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_mCey82BlV_vscVo6eYClQZurkABJjMkL8&si=-R4WbCDLK1IgzxWr/' },
      { label: 'Melon', url: 'https://www.melon.com/song/detail.htm?songId=602195326&subType=&ref=copyurl&snsGate=Y/' },
    ],
  },


  
  {
    id: '마지막이라는 걸 알아',
    title: '마지막이라는 걸 알아',
    type: 'New Album',
    releaseDate: '2026',
    cover: '/data/image/마지막이란 걸 알아 앨범커버.jpg',
    description: '몽환적인 사운드 위에 이별의 잔상을 담아낸 nnn의 감성적인 싱글.',
    tracks: [
      { title: '마지막이란 걸 알아', duration: '04:50', youtubeEmbedUrl: 'https://www.youtube.com/embed/RFUJedP_KWY' },
      { title: '마지막이란 걸 알아 (inst)', duration: '04:50' },

    ],
    streamingLinks: [
      { label: 'Spotify', url: 'https://open.spotify.com/track/7icd1Dj7Lf3O0VBvI1VosH?si=ccbc1d182fb44b70/' },
      { label: 'Apple Music', url: 'https://music.apple.com/kr/song/마지막이란-걸-알아/6777918931/' },
      { label: 'YouTube', url: 'https://youtu.be/RFUJedP_KWY?si=mV5Lc9pVhUOeZru5/' },
      { label: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_mCey82BlV_vscVo6eYClQZurkABJjMkL8&si=-R4WbCDLK1IgzxWr/' },
      { label: 'Melon', url: 'https://www.melon.com/song/detail.htm?songId=602195326&subType=&ref=copyurl&snsGate=Y/' },
    ],
  },

  {
    id: '마지막이라는 걸 알아',
    title: '마지막이라는 걸 알아',
    type: 'New Album',
    releaseDate: '2026',
    cover: '/data/image/마지막이란 걸 알아 앨범커버.jpg',
    description: '몽환적인 사운드 위에 이별의 잔상을 담아낸 nnn의 감성적인 싱글.',
    tracks: [
      { title: '마지막이란 걸 알아', duration: '04:50', youtubeEmbedUrl: 'https://www.youtube.com/embed/RFUJedP_KWY' },
      { title: '마지막이란 걸 알아 (inst)', duration: '04:50' },

    ],
    streamingLinks: [
      { label: 'Spotify', url: 'https://open.spotify.com/track/7icd1Dj7Lf3O0VBvI1VosH?si=ccbc1d182fb44b70/' },
      { label: 'Apple Music', url: 'https://music.apple.com/kr/song/마지막이란-걸-알아/6777918931/' },
      { label: 'YouTube', url: 'https://youtu.be/RFUJedP_KWY?si=mV5Lc9pVhUOeZru5/' },
      { label: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_mCey82BlV_vscVo6eYClQZurkABJjMkL8&si=-R4WbCDLK1IgzxWr/' },
      { label: 'Melon', url: 'https://www.melon.com/song/detail.htm?songId=602195326&subType=&ref=copyurl&snsGate=Y/' },
    ],
  },

]
