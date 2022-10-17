import Head from 'next/head'
import Content from '../components/Content'
import Newsletter from '../components/Newsletter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bagagge | Home</title>
      </Head>
      <Content />
      <Newsletter />
    </div>
  )
}
