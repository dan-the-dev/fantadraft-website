import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import FantadraftHead from '../components/fantadraftHead'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <FantadraftHead />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
