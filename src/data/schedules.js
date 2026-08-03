/*
 * 티켓 판매 전인 일정은 ticketStatus: 'coming-soon'으로 설정하고
 * ticketUrl을 생략하면 비활성화된 '오픈 예정' 버튼으로 표시됩니다.
 * 포스터가 공개되면 poster: '/data/image/파일명.jpg'를 추가하세요.
 * poster 필드가 없으면 상세 페이지에 '포스터 공개 예정'이 표시됩니다.
 * summary는 일정 카드에 표시할 짧은 소개입니다.
 * detailDescription은 상세 페이지에 표시할 긴 설명이며 여러 줄로 작성할 수 있습니다.
 * 종료된 공연은 status: 'ended'로 설정하면 티켓 대신 '공연 종료'가 표시됩니다.
 */
export const schedules = [
  {
    id: 'nnn-live-seoul', date: '2026-08-01', type: 'CONCERT', title: 'TWLV & nnn A GOOD Friend OF Yours',
    status: 'ended',
    venue: '모래내 극락 LIVE HALL, SEOUL', time: '20:00 - 23:30',
    summary: 'TWLV와 친구들 그리고 nnn이 다시 한번 뭉쳤다!',
    detailDescription: `TWLV와 친구들 그리고 nnn이 다시 한번 뭉쳤습니다.

알앤비/힙합을 넘어 밴드 사운드와 결합해 자신의 영역을 확장하고 있는 아티스트 트웰브. 그의 가장 개인적인 비밀들을 담은 앨범 [A Good Friend Of Yours, Kenshu?]의 발매를 기념하며 트웰브의 친구들과 nnn(@nnnprblms)이 다시 한번 뭉쳤습니다.

무더운 여름밤 하나가 되어 자유를 외치며 뛰어놀 친구들이 모입니다.

2026.8.1(토) 7PM Door Open.`,
    ticketUrl: 'https://lnkpie.com/product/concert/82/',
    poster: '/data/image/포스터1.png'
  },
  {
    id: 'busan-festival', date: '2026-11-13', type: 'CONCERT', title: 'nnn CONCERT',
    venue: '롤링홀 SEOUL', time: '20:00',
    summary: 'nnn의 첫 단독 콘서트.',
    detailDescription: `nnn의 첫 단독 콘서트입니다.

새로운 음악과 라이브 밴드 셋, 공연에서만 만날 수 있는 특별한 무대를 준비하고 있습니다.

티켓 오픈 일정과 상세 관람 안내는 추후 공개됩니다.`,
    ticketStatus: 'coming-soon',
  },

]

function getScheduleTimestamp(date) {
  const [year, month, day] = date.split('-').map(Number)
  return Date.UTC(year, month - 1, day)
}

export const schedulesNewestFirst = [...schedules].sort(
  (a, b) => getScheduleTimestamp(b.date) - getScheduleTimestamp(a.date),
)
