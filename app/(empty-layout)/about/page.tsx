import Image from 'next/image'
import styles from './page.module.scss'

export interface Whoami {
  name: Name
  contact: Contact
  job: Job
  image: Image
  resumeHighlights: string[]
}
export interface Name {
  ko: string
  en: string
  alias: string
}
export interface Contact {
  email: string
  website: string
  github: string
  youtube: string
}
export interface Job {
  company: string
  homepage: string
  position: string
  role: string
}
export interface Image {
  logo: string
  photo: string
}

export async function generateMetadata() {
  const res = await fetch('https://api.heropy.dev/v0/whoami', {
    cache: 'no-store'
  })
  const data: Whoami = await res.json()
  const title = data.name.ko
  const description = data.resumeHighlights.join(' / ')
  return {
    title,
    description,
    openGraph: {
      title,
      type: 'website',
      images: data.image.photo,
      url: 'https://nextjs-movie-app-steel.vercel.app/about',
      description,
      siteName: 'Nextjs Movie App',
      locale: 'ko_KR'
    }
  }
}

export default async function AboutPage() {
  const res = await fetch('https://api.heropy.dev/v0/whoami', {
    cache: 'no-store'
  })
  const data: Whoami = await res.json()
  return (
    <div className={styles.about}>
      <Image
        src={data.image.logo}
        alt="User"
        width="230"
        height="230"
      />
      <h1>
        {data.name.ko}
        <span>({data.name.alias})</span>
      </h1>
      <section>
        {data.resumeHighlights.map(h => (
          <p key={h}>{h}</p>
        ))}
      </section>
      <section>
        {Object.keys(data.contact).map(c => (
          <p key={c}>
            <a
              href={data.contact[c as keyof Contact]}
              target="_blank">
              {c}
            </a>
          </p>
        ))}
      </section>
    </div>
  )
}
