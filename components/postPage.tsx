import Image from 'next/image'
import { useRouter } from 'next/router'

type PostPageProps = {
  title: string,
  date: string,
  readingTime: string,
  imgurl: string,
  children?: any
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()

  return (
    <>
      <div className='bg-white text-primary'>

        <section className="py-2">
            <div className="px-8 mx-auto max-w-7xl lg:px-16">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl text-center">{props.title}</h1>
            </div>
        </section>

        <section className="py-1">
            <div className="w-full px-5 py-3 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                <div className="flex flex-col items-center sm:px-5">
                    <div className="w-full md:w-1/2">
                        <Image src={props.imgurl} layout="responsive" width={'500'} height={'400'} />
                    </div>
                    <p className="pt-2 text-sm font-medium text-primary"><span className="mx-1">{props.date}</span> · <span className="mx-1">{props.readingTime}</span></p>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <p className="pt-2 text-base">
                              {props.children}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-5 py-3 bg-white flex justify-between md:justify-center">
            <button className="btn bg-primary border-white text-white hover:bg-primary hover:text-secondary hover:border-secondary grow md:grow-0" onClick={()=>{router.push('/blog')}}>
              {router.locale === 'it' ? 'Vedi tutti' : 'Previous news'}
            </button>
            <button className="btn bg-white text-primary border-primary border hover:bg-white hover:text-secondary hover:border-secondary grow md:grow-0" onClick={()=>{router.push('/')}}>
              {router.locale === 'it' ? 'Torna alla home' : 'Back Home'}
            </button>
        </section>

      </div>
    </>
  )
}

export default PostPage
