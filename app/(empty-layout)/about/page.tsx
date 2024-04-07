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

async function getMe(): Promise<Whoami> {
  const res = await fetch('https://api.heropy.dev/v0/whoami', {
    cache: 'no-store' // 캐시 사용 금지
    // next: { revalidate: 1 * 60 * 60 * 24 } // 24시간마다 재검증
  })
  return await res.json()
}

export async function generateMetadata() {
  const me = await getMe()
  const title = me.name.ko
  const description = me.resumeHighlights.join(' / ')
  return {
    title,
    description,
    openGraph: {
      title,
      type: 'website',
      images: me.image.photo,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      description,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: 'ko_KR'
    }
  }
}

export default async function AboutPage() {
  const me = await getMe()
  return (
    <div className={styles.about}>
      <Image
        src={me.image.logo}
        alt="User"
        width="230"
        height="230"
      />
      <h1>
        {me.name.ko}
        <span>({me.name.alias})</span>
      </h1>
      <section>
        {me.resumeHighlights.map(h => (
          <p key={h}>{h}</p>
        ))}
      </section>
      <section>
        {Object.keys(me.contact).map(c => (
          <p key={c}>
            <a
              href={me.contact[c as keyof Contact]}
              target="_blank">
              {c}
            </a>
          </p>
        ))}
      </section>
    </div>
  )
}
