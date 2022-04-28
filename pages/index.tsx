import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ItHomepage from '../components/localizedPages/homepage/it'
import EnHomepage from '../components/localizedPages/homepage/en'

const Home: NextPage = () => {
    const router = useRouter()

  return (
    router.locale === 'it' ? <ItHomepage /> : <EnHomepage />
  )
}

export default Home
