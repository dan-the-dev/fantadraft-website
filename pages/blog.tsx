import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import PostListElement from '../components/postListElement'

const Blog: NextPage = () => {
    const router = useRouter()

  return (
    <div>

        <section className="py-3 bg-white">
            <div className="px-8 mx-auto max-w-7xl lg:px-16">
                <h1 className="mb-4 text-3xl font-bold text-black md:text-3xl text-center">Blog</h1>
            </div>
        </section>

        <div className="divide-y">
            <PostListElement 
                title={router.locale === 'it' ? "Fantadraft: la rivoluzione del Fantacalcio." : "Fantadraft: Fantasy Football revolution"}
                date={router.locale === 'it' ? "30 Maggio 2022" : "30th May, 2022"}
                incipit={router.locale === 'it' ? 
                'Con Fantadraft vogliamo creare una esperienza di gioco fantacalcistica totalmente nuova, che permetta ogni settimana di divertirsi con il Draft, la formazione, le partite, i voti; ma anche di vincere premi e competere con gli amici! Scopri di più!'
                : 'With Fantadraft we want to create a totally new fantasy football game experience, which allows you to have fun every week with the Draft, the lineup, the matches, the votes; but also to win prizes and compete with your friends! Find out more!'
                }
                readingTime={router.locale === 'it' ? 'Tempo di lettura: 2 min' : 'Reading time: 2 min'}
                imgurl='/blog/cos-e-fantadraft-la-rivoluzione-del-fantacalcio.jpg'
                url='/blog/cos-e-fantadraft-la-rivoluzione-del-fantacalcio'
                position={1}
            />
        </div>

    </div>
  )
}

export default Blog
