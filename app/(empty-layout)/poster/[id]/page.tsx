import Image from 'next/image'
import type { DetailedMovie } from '@/stores/movies'

export default async function Poster({
  params: { id }
}: {
  params: { id: string }
}) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API}&i=${id}&plot=full`
  )
  const movie: DetailedMovie = await res.json()
  return (
    <Image
      style={{ width: '100%', height: 'auto' }}
      src={movie.Poster.replace('SX300', 'SX1000')}
      alt={movie.Title}
      width="1000"
      height="1500"
    />
  )
}
