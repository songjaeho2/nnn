/*
 * 티켓 판매 전인 일정은 ticketStatus: 'coming-soon'으로 설정하고
 * ticketUrl을 생략하면 비활성화된 '오픈 예정' 버튼으로 표시됩니다.
 */
export const schedules = [
  {
    id: 'nnn-live-seoul', date: '2026-08-1', type: 'CONCERT', title: 'TWLV & nnn A GOOD Friend OF Yours',
    venue: '모래내 극락 LIVE HALL, SEOUL', time: '20:00 - 23:30',
    description: 'TWLV와 친구들 그리고 nnn이 다시한번 뭉쳤다! .',
    ticketUrl: 'https://lnkpie.com/product/concert/82/',
  },
  {
    id: 'busan-festival', date: '2026-11-13', type: 'CONCERT', title: 'nnn & TWLV CONCERT',
    venue: '롤링홀 SEOUL', time: '20:00 - ',
    description: 'nnn의 첫 단독콘서트 nnn & TWLV .',
    ticketStatus: 'coming-soon',
  },

]
