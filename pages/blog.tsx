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
                date='30 Maggio 2022'
                incipit='Lorem ipsum dolor sit amet, consectetur adipiscing elit, praesent non varius erat, ut viverra orci. Sed nec odio libero. Maecenas at malesuada leo. Nulla sed lectus convallis, euismod libero eu, vehicula massa.'
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
