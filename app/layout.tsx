import type { Metadata } from 'next'
import { roboto } from '@/styles/fonts'
import '@/styles/reset.css'
import '@/styles/global.scss'

const description =
  'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. If you find this service useful, please consider making a one-time donation or become a patron.'
export const metadata: Metadata = {
  title: {
    template: '%s | Nextjs Movie App',
    default: 'Nextjs Movie App'
  },
  description,
  openGraph: {
    title: 'Nextjs Movie App',
    type: 'website',
    images: `${process.env.NEXT_PUBLIC_BASE_PATH}/main.jpg`,
    url: '',
    description,
    siteName: 'Nextjs Movie App',
    locale: 'ko_KR'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  )
}
