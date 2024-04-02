import Link from 'next/link'
import styles from './layout.module.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">🏠 HOME</Link>
      </header>
      <main className="container">{children}</main>
    </>
  )
}
