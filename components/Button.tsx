import Loader from '@/components/Loader'
import styles from './Button.module.scss'

export default function Button({
  children,
  color,
  loading,
  loadingColor,
  circle,
  ...restProps
}: Readonly<
  {
    children: React.ReactNode
    color?: string
    loading?: boolean
    loadingColor?: string
    circle?: boolean
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
  return (
    <button
      className={`${styles.btn} ${color ? styles[`btn-${color}`] : ''} ${circle ? styles.circle : ''}`}
      {...restProps}>
      {loading ? <Loader color={loadingColor} /> : children}
    </button>
  )
}
