import Image from "next/image"
import { useRouter } from "next/router"

const EnHomepage = () => {
    const router = useRouter()

  return (
    <div>

      <section className="w-full px-3 antialiased bg-primary lg:px-6">
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-center py-4">

            <div className="flex justify-center mt-5 md:mt-10">
                <Image src={'/screen1.png'} width={'300px'} height={'550px'} layout={'fixed'}/>
            </div>

            <div className="container py-10 mx-auto text-center sm:px-4 col-span-3">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-secondary sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">A whole new Fantasy</span> <span className="relative inline-block mt-3 text-secondary">Football experience</span></h1>
                <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-3xl md:text-lg xl:text-xl">Tired of the usual fantasy football? Discover Fantadraft! By adding the dynamics of the Magic-style Draft we have created an unprecedented and hilarious gaming experience!</div>
                <form action="/api/subscribe" className="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="w-full h-12 px-6 py-2 font-medium text-primary focus:outline-none rounded-l-full"/><br />
                    <input type="text" id="locale" name="locale" value={'en'} hidden readOnly/>
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Stay up to date" className="inline-flex items-center w-52 md:w-56 h-12 px-8 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
                <div className="mt-8 text-sm text-white">By subscribing, you agree to receive updates on the project via email.</div>
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/kickstarter.png'} width={'500px'} height={'140px'} layout={'fixed'}/>
                </div>
            </div>

          </div>
      </section>

      <section className="pt-10 pb-20 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
              <h2 className="mb-4 text-xl font-bold text-black md:text-3xl">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What actually is Fantadraft</h5>
                      <p>Fantadraft will be a mobile app, a game that mixes Fantasy Football in Mantra mode with the dynamics of Draft Magic, to create a unique gaming experience: compete in public and private leagues, creating the best line-up every week through the Draft mechanism.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is a "Draft"?</h5>
                      <p>The Draft is a game mode inspired by Magic Arena, in which you have to build a roster of players by choosing one at a time in a group of 6 random players: each choice is called <b> pick </b>. Later, you can decide the module and field the best 11 possible by choosing from the previous picks to win the prizes up for grabs!</p>
                  </div>
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">When will Fantadraft be available?</h5>
                      <p>The game does not exist yet: we are working to create it and we are organizing a Kickstarter campaign for the autumn / winter to finance the development of the application, the marketing, the legal aspects of the competitions, and everything needed to make it work at the better.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">When will the Kickstarter campaign start?</h5>
                      <p>The Kickstarter campaign is planned for September / October of 2022; as soon as we have decided on the final date, we will officially announce it. The best way to be the first to find out when the campaign will start is to subscribe to our mailing list: you will be able to stay updated step by step on the developments of the project.</p>
                  </div>
              </div>
          </div>
      </section>


        <section className="bg-primary text-gray-200">
            <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

                <div className="flex flex-col items-center sm:px-5 lg:flex-row">
                    <div className="w-full md:w-1/2">
                        <a href="#_" className="block">
                            <Image src={'/blog/come-funziona-fantadraft.jpg'} layout="responsive" width={'500'} height={'400'} onClick={() => {router.push('/en/blog/come-funziona-fantadraft')}}/>
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                            <div className="bg-secondary text-primary flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase">
                                <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span>LATEST NEWS</span>
                            </div>
                            <h1 className="cursor-pointer text-4xl font-bold leading-none lg:text-5xl xl:text-6xl" onClick={() => {router.push('/en/blog/come-funziona-fantadraft')}}>Fantadraft: Fantasy Football revolution</h1>
                            <p className="pt-2 text-sm font-medium text-secondary"><span className="mx-1">1st of May 2022</span> · <span className="mx-1">5 min. read</span></p>
                            <p className="pt-2 text-xs">
                            With Fantadraft we want to create a totally new fantasy football experience, which allows you to have fun every week with the draft, the training, the matches, the votes; but also to win prizes and compete with friends! Find out more!
                            </p>
                        </div>
                        <div className="flex h-full w-full pt-5 md:pl-10 lg:pl-16">
                            <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary" onClick={() => {router.push('/en/blog/come-funziona-fantadraft')}}>Read more</button>
                            <button className="btn bg-primary border-white text-white hover:bg-primary hover:text-secondary hover:border-secondary ml-3" onClick={()=>{router.push('/blog')}}>Previous news</button>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>

    </div>
  )
}

export default EnHomepage
