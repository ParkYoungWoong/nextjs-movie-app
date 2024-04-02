import { create } from 'zustand'

export type Movies = SimpleMovie[]
export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

const defaultMessage = 'Search for the movie title!'

export const useMoviesStore = create<{
  searchText: string
  movies: Movies
  loading: boolean
  message: string
  setSearchText: (text: string) => void
  searchMovies: () => Promise<void>
  resetMovies: () => void
}>((set, get) => ({
  searchText: '',
  movies: [] as Movies,
  loading: false,
  message: defaultMessage,
  setSearchText: (text: string) => set({ searchText: text }),
  searchMovies: async () => {
    const { searchText, loading } = get()
    if (!searchText.trim()) {
      set({ searchText: '' })
      return
    }
    if (loading) return

    set({ loading: true })
    const res = await fetch(`/api/movies?title=${searchText}`)
    const { data } = await res.json()
    const { Response, Error, Search } = data
    console.log(data)
    if (Response === 'False') {
      set({
        movies: [],
        loading: false,
        message: Error
      })
      return
    }
    set({
      movies: Search,
      loading: false,
      message: ''
    })
  },
  resetMovies: () =>
    set({
      searchText: '',
      movies: [] as Movies,
      loading: false,
      message: defaultMessage
    })
}))
