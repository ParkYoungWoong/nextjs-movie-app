import { Roboto, Oswald } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'], // 폰트 집합: 영어
  weight: ['400', '700'], // 폰트 두께
  display: 'swap' // 폰트 다운로드 전까지 기본 폰트로 보여줌, 성능 최적화
})
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap'
})
export { roboto, oswald }
