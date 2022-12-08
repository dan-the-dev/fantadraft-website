import Image from "next/image"
import { useRouter } from "next/router"

const ItHomepage = () => {
    const router = useRouter()

  return (
    <div>

      <section className="w-full px-3 antialiased bg-primary lg:px-6">
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-center py-4">

            <div className="flex justify-center mt-5 md:mt-10">
                <Image src={'/screen1.png'} width={'300px'} height={'550px'} layout={'fixed'}/>
            </div>

            <div className="container py-10 mx-auto text-center sm:px-4 col-span-3">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-secondary sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Scopri un Fantacalcio</span> <span className="relative inline-block mt-3 text-secondary">tutto nuovo</span></h1>
                <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-3xl md:text-lg xl:text-xl">Stanco del solito Fantacalcio? Scopri Fantadraft! Aggiungendo le dinamiche del Draft stile Magic abbiamo creato un esperienza di gioco inedita e divertentissima!</div>
                <form action="/api/subscribe" className="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="w-full h-12 px-6 py-2 font-medium text-primary focus:outline-none rounded-l-full"/><br />
                    <input type="text" id="locale" name="locale" value={'it'} hidden readOnly/>
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Rimani aggiornato" className="inline-flex items-center w-52 md:w-56 h-12 px-8 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
                <div className="mt-8 text-sm text-white">Iscrivendoti, accetti di ricevere via email gli aggiornamenti sul progetto.</div>
            </div>

          </div>
      </section>

      <section className="pt-10 pb-20 bg-gray-200">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
              <h2 className="mb-4 text-xl font-bold text-black md:text-3xl">Domande frequenti</h2>
              <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Cos'é Fantadraft</h5>
                      <p>Fantadraft sarà un applicazione mobile, un gioco che mixa il Fantacalcio in modalità Mantra con le dinamiche del Draft Magic, per creare una esperienza di gioco unica: competi in leghe pubbliche e private, creando ogni settimana la formazione migliore tramite il meccanismo del Draft.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Che cosa è un "Draft"?</h5>
                      <p>Il Draft e' una modalita di gioco ispirata da Magic Arena, nella quale devi costruire una rosa di giocatori scegliendone uno alla volta in un gruppo di 6 giocatori casuali: ogni scelta si chiama <b>pick</b>. In seguito, potrai decidere il modulo e schierare il miglior 11 possibile scegliendo tra le pick precedenti per vincere i premi messi in palio!</p>
                  </div>
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Quando sarà disponibile?</h5>
                      <p>Il gioco ancora non esiste: stiamo lavorando per crearlo e speriamo di farvi vedere una prima versione entro la fine del campionato di Serie A 2022/2023 - l'obiettivo è lanciare poi le competizioni per la stagione 2023/2024.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Cosa si vince?</h5>
                      <p>Ci saranno a disposizione competizioni globali a cui partecipare per vincere premi in buoni Amazon, ma non solo. Si potranno anche creare leghe private in cui competere con gli amici!</p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  )
}

export default ItHomepage
