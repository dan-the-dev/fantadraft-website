import { useRouter } from "next/router"

type PostListElementProps = {
  title: string,
  date: string,
  incipit: string,
  mins: number,
  imgurl: string,
  url: string,
  position: number
}

const PostListElement = (props: PostListElementProps) => {
  const router = useRouter()
  return (
    <>
      <section className={"text-black " + (props.position%2 === 1 ? 'bg-white' : 'bg-gray-100')}>
            <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                <div className="flex flex-col items-center sm:px-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96 cursor-pointer" src={props.imgurl} onClick={() => {router.push(props.url)}}/>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-primary cursor-pointer" onClick={() => {router.push(props.url)}}>{props.title}</h1>
                            <p className="pt-2 text-sm font-medium text-primary"><span className="mx-1">{props.date}</span> · <span className="mx-1">Tempo di lettura:{props.mins} min.</span></p>
                            <p className="pt-2 text-xs">{props.incipit}</p>
                        </div>
                        <div className="flex h-full w-full pt-5 md:pl-10 lg:pl-16">
                            <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary" onClick={() => {router.push(props.url)}}>Leggi tutto l'articolo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PostListElement
