'use client'
import { useMoviesStore } from '@/stores/movies'
import styles from './SearchBar.module.scss'
import Button from '@/components/Button'

export default function SearchBar() {
  const moviesStore = useMoviesStore()
  async function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      await moviesStore.searchMovies()
    }
  }
  return (
    <section className={styles.search}>
      <input
        type="text"
        value={moviesStore.searchText}
        onChange={e => moviesStore.setSearchText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <Button onClick={() => moviesStore.resetMovies()}>Reset</Button>
      <Button
        style={{ width: '150px' }}
        color="primary"
        loading={moviesStore.loading}
        loadingColor="dark"
        onClick={() => moviesStore.searchMovies()}>
        Search
      </Button>
    </section>
  )
}
