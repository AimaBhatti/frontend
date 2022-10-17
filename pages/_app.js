import Layout from '../components/Layout'
import '../styles/globals.css'
import '../public/css/bootstrap.css'
import '../public/css/font-awesome.css'
import '../public/css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp