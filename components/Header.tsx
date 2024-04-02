'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { oswald } from '@/styles/fonts'
import styles from './Header.module.scss'

export default function Header() {
  const pathname = usePathname()
  const menus = [
    {
      name: '🔍 Search',
      href: '/'
    },
    {
      name: '📽️ Sample Movie',
      href: '/movies/tt4520988'
    },
    {
      name: '😉 About',
      href: '/about'
    }
  ]
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={`${oswald.className} ${styles.logo}`}>
        <span>OMDbAPI</span>.COM
      </Link>
      <nav className={styles.nav}>
        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              className={pathname === menu.href ? styles.active : ''}>
              <Link
                prefetch={true}
                href={menu.href}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="/about"
        className={styles.user}>
        <Image
          src="https://heropy.dev/favicon.png"
          alt="User"
          width="40"
          height="40"
        />
      </Link>
    </header>
  )
}
