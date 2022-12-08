import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ItHomepage from '../components/localizedPages/homepage/it'

const Home: NextPage = () => {
    const router = useRouter()

  return (
    <ItHomepage />
  )
}

export default Home
