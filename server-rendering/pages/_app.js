import Layout from '../components/Layout'
import '../styles/sass/app.sass'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
