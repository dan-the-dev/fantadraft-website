import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const Blog: NextPage = () => {
    const router = useRouter()

    const itContent = () => {
        return <>
            <p>
                Fantadraft è un gioco totalmente nuovo, mai visto prima. Ci siamo immaginati un nuovo Fantacalcio, nel quale ogni settimana sia possibile fare la propria strategia per creare la propria formazione e cercare di ottenere più punti possibili per vincere i premi (e vantartene con gli amici!).
            </p>
            <br />
            <h2 className="text-lg font-bold">Fantacalcio + Draft</h2>
            <p>
                Il Fantacalcio è davvero speciale grazie all'asta: un momento sociale unico ed inimitabile. Allo stesso tempo, l'asta è anche il più grande limite del gioco: se quel giorno qualcosa va storto, lo pagherai per tutto l'anno.
            </p>
            <br />
            <p>
                Spesso, molte leghe chiudono il mercato fino a Febbraio, dopo il calciomercato di riparazione, ma a quel punto per quanto tu possa sistemare le cose spesso è troppo tardi per vincere.
            </p>
            <br />
            <p>
                Questo crea un problema: tanti partecipanti dopo 2/3 mesi sono così lontani dalla zona premi da perdere stimoli nel fare la formazione ogni settimana. Se siamo fortunati, continuerá a giocare regolarmente, ma comunque il suo divertimento sarà molto basso. Ci sono tanti fantallenatori che vivono solo per l'asta, praticamente!
            </p>
            <br />
            <p>
                Con Fantadraft vogliamo creare un gioco che sia divertente sempre, per tutti, ogni singola giornata del campionato di calcio, fino all'ultimo. Un gioco dove ogni settimana sia divertente scegliere i convocati e la formazione definitiva. Rinunciando all'asta, distribuiamo il divertimento di quelle 6 ore (se va bene!) lungo tutte le giornate di gioco.
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/kickstarter.png'} width={'300px'} height={'100px'} layout={'fixed'}/>
            </div>
            <p>
                Per dare luce a questo sogno, stiamo preparando una campagna Kickstarter per finanziare lo sviluppo del gioco, prevista per l'autunno/inverno del 2022: lasciaci la tua email per entrare a far parte dei Drafters, sostenere il nostro sogno ed essere il primo a sapere quando la campagna sarà pronta!
            </p>
            <div className="flex justify-center">
                <form action="/api/subscribe" className="flex items-center mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="h-12 px-2 py-2 font-medium text-primary focus:outline-none rounded-l-full border border-gray-300"/><br />
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Rimani aggiornato" className="inline-flex items-center h-12 px-2 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full border-secondary hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
            </div>
            <div className="mt-8 text-sm text-primary text-center">Iscrivendoti, accetti di ricevere via email gli aggiornamenti sul progetto.</div>
        </>
    }

    const enContent = () => {
        return <>
            <p>
                Fantadraft is a totally new game, never seen before. We imagined a new fantasy soccer, in which every week you can make your own strategy to create your formation and try to get as many points as possible to win prizes (and brag about it to your friends!).
            </p>
            <br />
            <h2 className="text-lg font-bold">Fantacalcio + Draft</h2>
            <p>
                Fantasy soccer is really special thanks to the auction: a unique and inimitable social moment. At the same time, the auction is also the biggest limitation of the game: if something goes wrong that day, you will pay for it for the whole year.
            </p>
            <br />
            <p>
                Often, many leagues close the market until February, after the repair market, but by then however much you can fix things it's often too late to win.
            </p>
            <br />
            <p>
                This creates a problem: many participants after 2/3 months are so far away from the prize zone that they lose motivation to do the training every week. If we are lucky, he will continue to play regularly, but still his enjoyment will be very low. There are many jockeys who live only for the auction, practically!
            </p>
            <br />
            <p>
            With Fantadraft we want to create a game that is always fun, for everyone, every single day of the soccer season, until the last one. A game where every week is fun to choose the players and the final lineup. By renouncing to the auction, we distribute the fun of those 6 hours (if it goes well!) along all the game days.
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/kickstarter.png'} width={'300px'} height={'100px'} layout={'fixed'}/>
            </div>
            <p>
            To give light to this dream, we are preparing a Kickstarter campaign to fund the development of the game, scheduled for fall/winter 2022: leave us your email to join the Drafters, support our dream and be the first to know when the campaign will be ready!
            </p>
            <div className="flex justify-center">
                <form action="/api/subscribe" className="flex items-center mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="h-12 px-2 lg:px-5 py-2 font-medium text-primary focus:outline-none rounded-l-full border border-gray-300"/><br />
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Stay up to date" className="inline-flex items-center h-12 px-2 lg:px-5 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full border-secondary hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
            </div>
            <div className="mt-8 text-sm text-primary text-center">By subscribing, you agree to receive updates on the project via email.</div>
        </>
    }

  return (
    <div>

        <PostPage 
            title={router.locale === 'it' ? "Fantadraft: la rivoluzione del Fantacalcio." : "Fantadraft: Fantasy Football revolution"}
            date={router.locale === 'it' ? "30 Maggio 2022" : "30th May, 2022"}
            readingTime={router.locale === 'it' ? 'Tempo di lettura: 2 min' : 'Reading time: 2 min'}
            imgurl='/blog/cos-e-fantadraft-la-rivoluzione-del-fantacalcio.jpeg'
        >
            {router.locale === 'it' ? itContent() : enContent()}
        </PostPage>

    </div>
  )
}

export default Blog
