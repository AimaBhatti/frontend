import Layout from '../components/Layout'
import '../styles/globals.css'
import '../public/css/bootstrap.css'
import '../public/css/font-awesome.css'
import '../public/css/style.css'
import { useFetchUser } from '../lib/authContext'

function MyApp({ Component, pageProps }) {
  
  const { user, loading } = useFetchUser();

  return (
    <Layout user = {user}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp