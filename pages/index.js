import Head from 'next/head'
import Products from '../components/Products'
import Content from '../components/Content'
import Newsletter from '../components/Newsletter'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Bagagge | Home</title>
      </Head>
      <Products />
      <Content />
      <Newsletter />
    </div>
  )
}
