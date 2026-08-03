/*
 * 이 파일에서 앨범 페이지의 콘텐츠를 관리합니다.
 * - youtubeUrl: 일반 YouTube 링크 하나만 작성하면 썸네일과 내부 플레이어 주소가 자동 생성됩니다.
 * - musicVideoThumbnail: 직접 만든 썸네일을 사용하고 싶을 때만 선택적으로 작성합니다.
 * - musicVideoOrder: HOME 뮤직비디오 슬라이드 순서입니다. 작은 숫자가 먼저 표시됩니다.
 * - 기존 youtubeEmbedUrl도 계속 지원하지만 새 데이터에는 youtubeUrl 사용을 권장합니다.
 * - 뮤직비디오가 없으면 YouTube 관련 필드를 모두 생략하세요.
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
        musicVideoOrder: 1,
      },
      { title: '마지막이란 걸 알아 (inst)', duration: '04:50' },

    ],
    streamingLinks: [
      { label: 'Spotify', url: 'https://open.spotify.com/track/7icd1Dj7Lf3O0VBvI1VosH?si=ccbc1d182fb44b70' },
      { label: 'Apple Music', url: 'https://music.apple.com/kr/song/마지막이란-걸-알아/6777918931' },
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=RFUJedP_KWY' },
      { label: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_mCey82BlV_vscVo6eYClQZurkABJjMkL8' },
      { label: 'Melon', url: 'https://www.melon.com/song/detail.htm?songId=602195326' },
    ],
  },


  
  {
    id: 'asymmetry',
    title: 'Asymmetry',
    type: 'EP',
    releaseDate: '2025.08.24',
    cover: '/data/image/ep.png',
    description: '사랑의 비대칭성과 이별 이후 남겨지는 감정의 균열을 다섯 곡에 담아낸 nnn의 EP.',
    tracks: [
      { title: 'Marionettes', duration: '02:17' },
      { title: '여우비', duration: '03:16' },
      {
        title: '나방',
        duration: '03:51',
        youtubeUrl: 'https://www.youtube.com/watch?v=XtNt_OUh9-c',
        musicVideoOrder: 3,
      },
      { title: '미안', duration: '03:42' },
      {
        title: 'One more',
        duration: '04:31',
        youtubeUrl: 'https://www.youtube.com/watch?v=zjU2ei8SP6k',
        musicVideoOrder: 2,
      },

    ],
    streamingLinks: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/1bLpC6NAnQOasHaBdUfdMa' },
      { label: 'Apple Music', url: 'https://music.apple.com/kr/album/asymmetry-ep/1834595201' },
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=zjU2ei8SP6k' },
      { label: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=OLAK5uy_k-dq3hp4DIF8MvvgqPf1LAwDJtIc0uldY' },
      { label: 'Melon', url: 'https://www.melon.com/artist/timeline.htm?artistId=3940933' },
    ],
  },



]
