import styles from './Headline.module.scss'
import { oswald } from '@/styles/fonts'

export default function Headline() {
  return (
    <section className={styles.headline}>
      <h1 className={oswald.className}>
        <span>OMDb API</span>
        <br />
        THE OPEN
        <br />
        MOVIE DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, all
        content and images on the site are contributed and maintained by our
        users. If you find this service useful, please consider making a
        one-time donation or become a patron.
      </p>
    </section>
  )
}
