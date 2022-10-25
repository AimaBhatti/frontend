import Layout from '../components/Layout'
import { useFetchUser } from '../lib/authContext'
import '../public/css/bootstrap.css'
import '../public/css/font-awesome.css'
import  '../public/css/style.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const { user, loading } = useFetchUser();

  return (
    <Layout user = {user}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp