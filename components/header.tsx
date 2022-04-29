import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const changeLocale = (locale: 'it' | 'en', withClick: boolean) => {
    if (!withClick){
      return
    }
    router.push(router.asPath, router.asPath, { locale: locale })
    router.reload()
  }

  const itFlag = (withClick: boolean = true) => <><Image src={'/flags/it.png'} width={'25'} height={'20'} onClick={() => {changeLocale('it', withClick)}} className='cursor-pointer'/></>
  const enFlag = (withClick: boolean = true) => <><Image src={'/flags/en.png'} width={'25'} height={'20'} onClick={() => {changeLocale('en', withClick)}} className='cursor-pointer'/></>

  const active = () => {
    return router.locale === 'it' ? itFlag(false) : enFlag(false)
  }

  const inactive = () => {
    return router.locale === 'it' ? enFlag() : itFlag()
  }

  return (
    <>
      <section className="w-full px-3 antialiased bg-white lg:px-6">
        <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
            <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <Image src={'/logo.jpg'} width={'240'} height={'80'} onClick={() => {router.push('/')}} className='cursor-pointer'/>
                <div className="dropdown dropdown-end bg-transparent border-none">
                  <label tabIndex={0} className="btn m-1 bg-transparent border-none">{active()}</label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-16">
                    <li><a>{inactive()}</a></li>
                  </ul>
                </div>
            </div>
        </nav>
      </section>
    </>
  )
}

export default Header
