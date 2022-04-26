import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="w-full px-3 antialiased bg-white lg:px-6">
        <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
            <div className="relative flex flex-wrap items-center justify-center w-full h-24 mx-auto font-medium md:justify-center">
              <Image src={'/logo.jpg'} width={'240'} height={'80'}/>
            </div>
        </nav>
      </section>

      <section className="w-full px-3 antialiased bg-primary lg:px-6">
          <div className="mx-auto max-w-7xl md:grid md:grid-cols-5">

            <div className="mockup-phone border-yellow-50 h-fit col-span-2 mt-10 shadow-2xl shadow-black">
              <div className="camera"></div> 
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <Image src={'/screen1.png'} width={'320'} height={'580'} />
                </div>
              </div>
            </div>

            <div className="container py-16 md:py-36 mx-auto text-center sm:px-4 col-span-3">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-secondary sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Scopri un fantacalcio</span> <span className="relative inline-block mt-3 text-secondary">tutto nuovo</span></h1>
                <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-3xl md:text-lg xl:text-xl">Stanco del solito Fantacalcio? Scopri Fantadraft! Aggiungendo le dinamiche del Draft stile Magic abbiamo creato un esperienza di gioco inedita e divertentissima!</div>
                <div className="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center">
                    <input type="text" name="email" placeholder="Email" className="w-full h-12 px-6 py-2 font-medium text-primary focus:outline-none rounded-l-full" />
                    <span className="relative top-0 right-0 block">
                        <button type="button" className="inline-flex items-center w-40 md:w-56 h-12 px-8 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary">
                            Resta aggiornato
                        </button>
                    </span>
                </div>
                <div className="mt-8 text-sm text-white">Iscrivendoti accetti di ricevere via email gli aggiornamenti sul progetto.</div>
            </div>

          </div>
      </section>

      <section className="py-24 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
              <h2 className="mb-4 text-xl font-bold text-black md:text-3xl">Domande frequenti</h2>
              <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Cos'é Fantadraft</h5>
                      <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Posso provarlo?</h5>
                      <p>Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your account.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Come si gioca?</h5>
                      <p>
                          You can upgrade your account by visiting <a href="https://devdojo.com/pro" className="text-primary underline">The Pro Upgrade Page</a>. You will also gain access to many other applications and sections of the site.
                          <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">here</a>.
                      </p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Come funziona il draft?</h5>
                      <p>
                          You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                          <a href="https://paddle.com" target="_blank">Paddle</a> for processing payments.
                      </p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Come funziona il Mantra?</h5>
                      <p>
                          You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                          <a href="https://paddle.com" target="_blank">Paddle</a> for processing payments.
                      </p>
                  </div>
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Quando sarà disponibile?</h5>
                      <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Quando comincerà la campagna Kickstarter?</h5>
                      <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                      <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                      <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" className="text-primary underline">question section</a>.
                      </p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                      <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" className="text-primary underline">question section</a>.
                      </p>
                  </div>
              </div>
          </div>
      </section>


        <section className="bg-primary text-gray-200">
            <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

                <div className="flex flex-col items-center sm:px-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <a href="#_" className="block">
                            <img className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg" />
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <div className="bg-secondary text-primary flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase">
                                <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span>ULTIMA NEWS</span>
                            </div>
                            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Cos'è Fantadraft: la rivoluzione del fantacalcio.</a></h1>
                            <p className="pt-2 text-sm font-medium text-secondary">by <a href="#_" className="mr-1 underline">Dan the dev</a> · <span className="mx-1">May 30th, 2022</span> · <span className="mx-1">5 min. read</span></p>
                        </div>
                        <div className="flex h-full w-full px-16 pt-14">
                            <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary">Leggi tutto l'articolo</button>
                            <button className="btn bg-primary border-white text-white hover:bg-primary hover:text-secondary hover:border-secondary">Vedi tutti gli update sul progetto</button>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>


      <section className="text-gray-200 bg-white body-font">
          <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
              <Image src={'/logo.jpg'} width={'200'} height={'60'}/>
              <p className="mt-4 text-sm text-primary sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2022 Fantadraft - made with love by Dan the dev
              </p>
              <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a href="#" className="text-primary hover:text-secondary">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                      <span className="sr-only">GitHub</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary">
                      <span className="sr-only">Dribbble</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </span>
          </div>
      </section>

    </div>
  )
}

export default Home
