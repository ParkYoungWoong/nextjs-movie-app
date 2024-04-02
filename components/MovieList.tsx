'use client'
import { useMoviesStore } from '@/stores/movies'
import MovieItem from '@/components/MovieItem'
import styles from './MovieList.module.scss'

export default function MovieList() {
  const moviesStore = useMoviesStore()
  return (
    <div className={styles.movieListContainer}>
      {moviesStore.message ? (
        <p className={styles.message}>{moviesStore.message}</p>
      ) : (
        <ul className={styles.movieList}>
          {moviesStore.movies.map(movie => (
            <MovieItem
              key={`/movies/${movie.imdbID}`}
              movie={movie}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
