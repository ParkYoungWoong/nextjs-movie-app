import Headline from '@/components/Headline'
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'

export const metadata = {
  title: 'Search'
}

export default function Home() {
  return (
    <>
      <Headline />
      <SearchBar />
      <MovieList />
    </>
  )
}
