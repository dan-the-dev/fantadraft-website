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
                title="Cos'è Fantadraft: la rivoluzione del Fantacalcio."
                date='1 Maggio 2022'
                incipit='Con Fantadraft vogliamo creare una esperienza di gioco fantacalcistica totalmente nuova, che permetta ogni settimana di divertirsi con il Draft, la formazione, le partite, i voti; ma anche di vincere premi e competere con gli amici! Scopri di più!'
                mins={5}
                imgurl='https://cdn.devdojo.com/images/may2021/cupcakes.jpg'
                url='/blog/cos-e-fantadraft-la-rivoluzione-del-fantacalcio'
                position={1}
            />
        </div>

    </div>
  )
}

export default Blog
