import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ParkYoungWoong/nextjs-movie-app"
        target="_blank">
        GitHub Repository
      </a>
      <a
        href="https://heropy.dev"
        target="_blank">
        @HEROPY
      </a>
    </footer>
  )
}
