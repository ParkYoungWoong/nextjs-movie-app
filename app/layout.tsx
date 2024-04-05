import type { Metadata } from 'next'
import { roboto } from '@/styles/fonts'
import '@/styles/reset.css'
import '@/styles/global.scss'

const title = process.env.NEXT_PUBLIC_SITE_NAME
const description =
  'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. If you find this service useful, please consider making a one-time donation or become a patron.'
export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title
  },
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/main.jpg`,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
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
