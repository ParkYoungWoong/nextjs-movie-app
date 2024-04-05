import type { DetailedMovie } from '@/stores/movies'
import PosterModal from './PosterModal'

export default async function Poster({
  params: { id }
}: {
  params: { id: string }
}) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`
  )
  const movie: DetailedMovie = await res.json()
  return <PosterModal movie={movie} />
}
