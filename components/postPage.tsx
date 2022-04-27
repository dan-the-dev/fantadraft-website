import { useRouter } from 'next/router'

type PostPageProps = {
  title: string,
  date: string,
  mins: number,
  imgurl: string,
  children?: any
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()

  return (
    <>
      <div>

        <section className="py-3 bg-white">
            <div className="px-8 mx-auto max-w-7xl lg:px-16">
                <h1 className="mb-4 text-3xl font-bold text-black md:text-3xl text-center">{props.title}</h1>
            </div>
        </section>


        <section className="bg-white text-black">
            <div className="w-full px-5 py-3 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                <div className="flex flex-col items-center sm:px-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src={props.imgurl} />
                    </div>
                    <p className="pt-2 text-sm font-medium text-primary"><span className="mx-1">{props.date}</span> · <span className="mx-1">Tempo di lettura:{props.mins} min.</span></p>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <p className="pt-2 text-base">
                              {props.children}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-5 py-3 bg-white flex justify-between">
            <button className="btn bg-primary border-white text-white hover:bg-primary hover:text-secondary hover:border-secondary grow" onClick={()=>{router.push('/blog')}}>Vedi tutti</button>
            <button className="btn bg-white text-primary border-primary border hover:bg-white hover:text-secondary hover:border-secondary grow" onClick={()=>{router.push('/')}}>Torna alla home</button>
        </section>

      </div>
    </>
  )
}

export default PostPage
