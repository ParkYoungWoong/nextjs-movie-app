import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
  posterModal
}: Readonly<{
  children: React.ReactNode
  posterModal: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      {posterModal}
    </>
  )
}
