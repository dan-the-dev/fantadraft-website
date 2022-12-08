import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <>
      <section className="w-full px-3 antialiased bg-white lg:px-6">
        <nav className="flex items-center w-full h-24 select-none">
            <div className="relative flex flex-wrap items-center justify-start md:justify-center w-full h-24 mx-auto font-medium">
                <Image src={'/logo.jpg'} width={'240'} height={'80'} onClick={() => {router.push('/')}} className='cursor-pointer'/>
            </div>
        </nav>
      </section>
    </>
  )
}

export default Header
