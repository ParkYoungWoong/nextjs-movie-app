'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './Modal.module.scss'

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={() => router.back()}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={styles.content}>
        {children}
      </motion.div>
    </div>
  )
}
