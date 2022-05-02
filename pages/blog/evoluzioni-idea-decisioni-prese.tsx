import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const Blog: NextPage = () => {
    const router = useRouter()

    const itContent = () => {
        return <>
            <h2 className="text-lg font-bold">Gli inizi, le prime prove</h2>
            <br />
            <p>
                Come vi dicevo già settimana scorsa, avevo questa idea da un sacco di tempo. È stato peró a Dicembre 2021 che, con idee piú chiare e maggiori competenze non solo tecniche ma anche di business e marketing accumulate in questi anni, mi sono reso conto che potevo provare a pensarci seriamente, questa volta.
            </p>
            <p>
                Ho cercato strumenti che mi permettessero di creare prototipi e fare delle prove di gioco in modo ottenere il look & feel del gioco vero e cercare di capire quali criticità potesse avere. 
            </p>
            <p>
                Ho iniziato ad informarmi sulle best practice di approccio, a pensare ad un MVP, a chiedermi se fosse realistico pensare ad un crowdfunding o meno, a immaginarmi come farlo tecnicamente.
            </p>
            <br />
            <p>
                Ho iniziato a sognare, insomma.
            </p>
            <br />
            <h2 className="text-lg font-bold">Il primo prototipo</h2>
            <br />
            <p>
                A Marzo ha visto la luce il primo prototipo, sotto forma di applicazione web, con dati finti di esempio e una semplice schermata Home dalla quale si poteva far partire il Draft.
            </p>
            <p>
                Il protitpo era il più semplice che sia riuscito ad immaginare: scegli un modulo tra 4 casuali; poi un ruolo alla volta scelta di uno tra 6 giocatori casuali per creare cosi il tuo 11 titolare. Alla fine, un algoritmo casuale generava dei voti e dei bonus per dare l'effetto di risultato LIVE e risultato finale.
            </p>
            <p>
                Le regole erano quelle base del fantacalcio: portieri, difensori, centrocampisti e attaccanti, un set limitato di calciatori che avevo inserito a mano (e che infatti si ripetevano troppe volte, tra le opzioni casuali)... però funzionava allo scopo: avevo qualcosa da mandare ad amici e conoscenti e per un feedback.
            </p>
            <br />
            <h2 className="text-lg font-bold">I primi feedback e cambiamenti</h2>
            <br />
            <p>
                Dopo aver fatto girare un pò il prototipo, il sentiment generale era sempre lo stesso: bello, figo, però... mancava qualcosa.
            </p>
            <p>
                La criticità riscontrata era sempre la stessa: troppo facile!
            </p>
            <p>
                Ovviamente il fatto che fosse un prototipo lo rendeva più semplice, ma di base mancava un modo per evitare che tutti otteneressero uno squadrone con facilità.
            </p>
            <p>
                In un primo momento ho creduto che fosse sufficiente inserire delle fasce: i giocatori di prima fascia compaiono poche volte, blanciando maggiormente la squadra. Ma il problema era altrove.
            </p>
            <p>
                L'assunto di partenza era sbagliato: cominciare dal modulo rendeva le scelte successive troppo pilotate in base ai ruoli disponibili, troppo facile trovare giocatori buoni.
            </p>
            <br />
            <p>
                Qui il Draft Magic è diventato piu centrale.
            </p>
            <br />
            <p>
                Nel gioco di carte della Wizard, la modalita Draft parte dai pacchetti;: ogni giocatore ne apre uno, sceglie una carta e la passa al successivo, a rotazione, finchè non finiscono le carte. Poi si deve costruire il mazzo con le carte draftate, ma non solo con quelle: ci sono delle carte che vengono scelte liberamente, chiamate terre, e tra le carte draftate alcune saranno da scartare per restare nel limite di carte ammesso nel mazzo.
            </p>
            <p>
                Era necessario andare in quella direzione ed invertire completamente il meccanismo: prima scegliere un gruppo di una ventina di giocatori, poi far scegliere liberamente come schierarli cercando la combinazione migliore.
            </p>
            <br />
            <h2 className="text-lg font-bold">Game design e UX</h2>
            <br />
            <p>
                Da qui in avanti, prima di aggiornare il prototipo ho fatto un lavoro di Game Design che ha scaravoltato completamente il gioco, rendendolo molto più strategico, equilibrato e competitivo.
            </p>
            <p>
                Per prima cosa, draft dei giocatori: 24 convocati, per la precisione, tra cui poi scegliere i 18 da mettere in campo come formazione titolare e panchinari. 
            </p>
            <p>
                Secondo step: scelta libera della tattica e composizione della formazione, cercando di ottenere l'incastro migliore con i giocatori scelti. 
            </p>
            <p>
                Sembrava perfetto! Draftare giocatori in eccesso andava a diminuire l'impatto della fortuna, avendo 6 pick da scartare, esattamente come la scelta libera della tattica che permetteva alla propria strategia di ottenere il meglio da quello che la fortuna ci aveva offerto. 
            </p>
            <br />
            <h2 className="text-lg font-bold">Meccaniche finali</h2>
            <br />
            <p>
                Amici entusiasti, io carichissimo, nel frattempo riesco a mettermi in contatto con un Game Designer professionista, una persona che crea giochi di lavoro... e vengo smontato subito.
            </p>
            <p>
                Intendiamoci, anche il game designer ha da subito dimostrato un certo entusiasmo per il gioco, riconoscendovi un grande potenziale.
            </p>
            <p>
                Ciononostante mi ha messo davanti a vari problematiche: dal punto di vista del gioco puro, il problema principale era che le scelte rimanevano comunque ancora scontate: serviva un modo per far si che davanti ad una scelta in apparenza scontata (es: Bajrami o Vlahovic) le persone fossero portate ad avere il dubbio in qualche modo.
            </p>
            <p>
                Questo é stato l'ultimo passo per costruire la meccanica finale: il Fantacalcio Classic non era sufficiente, serviva il Mantra.
            </p>
            <br />
            <p>
                Per oggi mi fermo qui, settimana prossima scoprirete tutto: è arrivato il momento di descrivervi le meccaniche di gioco nel dettaglio!
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
                    <input type="text" id="locale" name="locale" value={'it'} hidden readOnly/>
                    <span className="relative top-0 right-0 block">
                        <input type="submit" value="Rimani aggiornato" className="cursor-pointer inline-flex items-center h-12 px-2 text-base font-bold leading-6 text-primary transition duration-150 ease-in-out bg-secondary border rounded-r-full border-secondary hover:bg-primary hover:text-secondary hover:border-secondary focus:outline-none active:bg-primary" />
                    </span>
                </form>
            </div>
            <div className="mt-8 text-sm text-primary text-center">Iscrivendoti, accetti di ricevere via email gli aggiornamenti sul progetto.</div>
        </>
    }

    const enContent = () => {
        return <>
            <p>
                Fantadraft is a totally new game, one that you've never seen before. We imagine a new fantasy football game, in which every week you can make your own strategy to create your lineup, trying to get as many points as possible to win prizes (and brag about it to your friends!).
            </p>
            <br />
            <h2 className="text-lg font-bold">Fantacalcio + Draft</h2>
            <p>
                With Fantadraft we want to create a game that is always fun, for everyone, every single day of the football season, until the last one. A game where every week is fun to choose the players and the final lineup. 
            </p>
            <br />
            <p>
                Fantasy football are great games, but maybe we can do better! Have you ever felt that the game is missing something? For example, if you make mistakes in the first choices, when you spend your budget to do the first version of the team, then you will have problem all the season, because tipically leagues limit the transfers you can do during the season! 
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
                    <input type="text" id="locale" name="locale" value={'en'} hidden readOnly/>
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
            title={router.locale === 'it' ? "Evoluzione dell'idea e decisioni già prese" : "Evolution of the idea and decisions already made"}
            date={router.locale === 'it' ? "13 Giugno 2022" : "13th Jun, 2022"}
            readingTime={router.locale === 'it' ? 'Tempo di lettura: 8 min' : 'Reading time: 8 min'}
            imgurl='/blog/evoluzioni-idea-decisioni-prese.jpg'
        >
            {router.locale === 'it' ? itContent() : enContent()}
        </PostPage>

    </div>
  )
}

export default Blog
