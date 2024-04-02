import Loader from '@/components/Loader'

export default function MovieDetailLoading() {
  return (
    <section
      style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
      <Loader size={60} />
    </section>
  )
}
