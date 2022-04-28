import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()

  return (
    <div>

      <section className="w-full px-3 antialiased bg-primary lg:px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-center py-4">

            <div className="flex justify-center mt-5 md:mt-10">
                <Image src={'/screen1.png'} width={'300px'} height={'550px'} layout={'fixed'}/>
            </div>

            <div className="container py-10 mx-auto text-center sm:px-4 col-span-3">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-secondary sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Scopri un Fantacalcio</span> <span className="relative inline-block mt-3 text-secondary">tutto nuovo</span></h1>
                <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-3xl md:text-lg xl:text-xl">Stanco del solito Fantacalcio? Scopri Fantadraft! Aggiungendo le dinamiche del Draft stile Magic abbiamo creato un esperienza di gioco inedita e divertentissima!</div>
                <form action="/api/subscribe" className="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="w-full h-12 px-6 py-2 font-medium text-primary focus:outline-none rounded-l-full"/><br />
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Submit" className="inline-flex items-center w-40 md:w-56 h-12 px-8 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
                <div className="mt-8 text-sm text-white">Iscrivendoti accetti di ricevere via email gli aggiornamenti sul progetto.</div>
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/kickstarter.png'} width={'600px'} height={'150px'} layout={'fixed'}/>
                </div>
            </div>

          </div>
      </section>

      <section className="pt-10 pb-20 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
              <h2 className="mb-4 text-xl font-bold text-black md:text-3xl">Domande frequenti</h2>
              <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Cos'é Fantadraft</h5>
                      <p>Fantadraft sarà un appmobile, un gioco che mixa il Fantacalcio in modalità Mantra con le dinamiche del Draft Magic, per creare una esperienza di gioco unica: competi in leghe pubbliche e private, creando ogni settimana la formazione migliore tramite il meccanismo del Draft.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Cosa significa Draft?</h5>
                      <p>Il Draft e' una modalita di gioco nella quale devi costruire una rosa di 24 giocatori scegliendone uno alla volta in un gruppo di 6 giocatori casuali. Con i 24 giocatori scelti, oltre a 2 allenatori, potrai scegliere il modulo e schierare il miglior 11 possibile per vincere i premi messi in palio!</p>
                  </div>
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Quando sarà disponibile?</h5>
                      <p>Il gioco ancora non esiste: stiamo lavorando per crearlo e stiamo organizzando una campagna Kickstarter per l'autunno/inverno per finanziare lo sviluppo dell'applicazione, il marketing, gli aspetti legali dei giochi a premi, e tutto quel che serve per farlo funzionare al meglio.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Quando comincerà la campagna Kickstarter?</h5>
                      <p>La campagna Kickstarter e' pianificata per Settembre/Ottobre del 2022; non appena la data sarà definitiva la annunceremo ufficialmente. Il miglior modo per scoprirlo per primo è iscriversi alla nostra mailing list: potrai rimanere aggiornato passo passo sugli sviluppi del progetto.</p>
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
                            <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Cos'è Fantadraft: la rivoluzione del Fantacalcio.</a></h1>
                            <p className="pt-2 text-sm font-medium text-secondary"><span className="mx-1">1 Maggio 2022</span> · <span className="mx-1">5 min. read</span></p>
                            <p className="pt-2 text-xs">
                                Con Fantadraft vogliamo creare una esperienza di gioco fantacalcistica totalmente nuova, che permetta ogni settimana di divertirsi con il Draft, la formazione, le partite, i voti; ma anche di vincere premi e competere con gli amici! Scopri di più!
                            </p>
                        </div>
                        <div className="flex h-full w-full pt-5 md:pl-10 lg:pl-16">
                            <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary" onClick={() => {router.push('/blog/cos-e-fantadraft-la-rivoluzione-del-fantacalcio')}}>Leggi tutto l'articolo</button>
                            <button className="btn bg-primary border-white text-white hover:bg-primary hover:text-secondary hover:border-secondary ml-3" onClick={()=>{router.push('/blog')}}>Vedi tutti</button>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>

    </div>
  )
}

export default Home
