'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { SimpleMovie } from '@/stores/movies'
import styles from './MovieItem.module.scss'
import Button from '@/components/Button'

export default function MovieItem({ movie }: { movie: SimpleMovie }) {
  const router = useRouter()
  return (
    <li className={styles.movieItem}>
      <Button
        circle
        onClick={() => router.push(`/poster/${movie.imdbID}`)}>
        👀
      </Button>
      <Link
        prefetch
        href={`/movies/${movie.imdbID}`}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width="200"
          height="300"
        />
        <div className={styles.info}>
          <p>{movie.Year}</p>
          <h3>{movie.Title}</h3>
        </div>
      </Link>
    </li>
  )
}
