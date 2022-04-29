import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronDownIcon } from '@heroicons/react/outline'

type locale = 'it' | 'en'

const Header = () => {
  const router = useRouter()

  const changeLocale = (locale: locale) => {
    router.push(router.asPath, router.asPath, { locale: locale })
  }

  const flag = (locale: locale, active: boolean) => 
    <div onClick={() => {if (active) {return}; changeLocale(locale)}} >
      <span>{!active && <p>{locale === 'it' ? 'Italiano' : 'English'}</p>}</span>
      <span><Image src={'/flags/'+locale+'.png'} width={'25'} height={'20'} className="cursor-pointer" /></span>
    </div>
  const itFlag = (active: boolean) => flag('it', active)
  const enFlag = (active: boolean) => flag('en', active)

  const active = () => {
    return router.locale === 'it' ? itFlag(true) : enFlag(true)
  }

  const inactive = () => {
    return router.locale === 'it' ? enFlag(false) : itFlag(false)
  }

  return (
    <>
      <section className="w-full px-3 antialiased bg-white lg:px-6">
        <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
            <div className="relative flex flex-wrap items-center justify-start md:justify-center w-full h-24 mx-auto font-medium">
                <Image src={'/logo.jpg'} width={'240'} height={'80'} onClick={() => {router.push('/')}} className='cursor-pointer'/>
                <div className="dropdown dropdown-end bg-transparent border-none absolute right-0">
                  <label tabIndex={0} className="btn m-1 bg-transparent border-none">
                    {active()}
                    <ChevronDownIcon className='w-4 text-primary ml-1'/>  
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                    <li>{inactive()}</li>
                  </ul>
                </div>
            </div>
        </nav>
      </section>
    </>
  )
}

export default Header
