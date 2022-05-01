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
                title={router.locale === 'it' ? "Ciao! Sono Daniele, l'ideatore di Fantadraft" : "Hi! I am Daniele, the creator of Fantadraft"}
                date={router.locale === 'it' ? "06 June 2022" : "6th Jun, 2022"}
                incipit={router.locale === 'it' ? 
                'Mentre il progetto prende corpo e la campagna Kickstarter si avvicina, voglio parlarvi di me: chi sono e come è nata l\'idea del gioco?'
                : 'As the project takes shape and the Kickstarter campaign approaches, I want to tell you about myself: who am I and how did the idea for the game come about?'
                }
                readingTime={router.locale === 'it' ? 'Tempo di lettura: 8 min' : 'Reading time: 8 min'}
                imgurl='/blog/chi-sono-come-nasce-idea.jpg'
                squareImg
                url='/blog/chi-sono-come-nasce-idea'
                position={1}
            />
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
                position={2}
            />
        </div>

    </div>
  )
}

export default Blog
