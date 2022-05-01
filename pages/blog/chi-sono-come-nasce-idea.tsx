import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const Blog: NextPage = () => {
    const router = useRouter()

    const itContent = () => {
        return <>
            <h2 className="text-lg font-bold">Programmazione e calcio</h2>
            <p>
            Ciao, sono Daniele Scillia, programmatore da piu di 10 anni, attivo nella community dei developer nell'organizzazione eventi tramite PUGMI - Programming User Group MIlano, ma anche creazione di contenuti con i miei canali Youtube e Podcast a tema programmazione. 
            </p>
            <p>
            Ma c'è molto più di questo: sono un grandissimo appassionato di calcio e fantacalcio, con alle spalle 25 anni di calcio a livello semi-professionistico / dilettantistico e almeno 13 stagioni di Fantacalcio, tra Classic e mantra.
            </p>
            <p>
            Il calcio e la programmazione sono da sempre le mie due passioni piu grandi, due anime che da sempre cerco di far convivere: il mio desiderio e’ da sempre unirle in un prodotto.
            </p>
            <h2 className="text-lg font-bold">I problemi del Fantacalcio</h2>
            <p>
            L'idea di Fantadraft cova nella mia mente da almeno un paio d'anni, anche se solo nelle ultime settimane sono riuscito a dargli finalmente una vera forma e rendere il progetto concreto.
            </p>
            <p>
            Tutto parte dai vari problemi avuti negli anni in tutte le leghe di Fantacalcio a cui ho partecipato: le discussioni sui voti dati ai giocatori, la difficoltà a mantenere alta la partecipazione di chi si ritrova lontano dalle posizioni a premio, la noia quando le regole non cambiano mai, i dubbi quando le regole cambiano troppo.
            </p>
            <p>
            Uno dei problemi principali che ho sempre percepito, comunque, è che nel Fantacalcio vale decisamente la regola 80/20: l'80% della preparazione dei partecipanti e del divertimento percepito risiede nell'asta iniziale, ed il restante 20% viene distribuito nel resto della stagione.
            </p>
            <p>
            Ovviamente sto esagerando, ma serve a darvi un idea di quel che voglio dire e che sono sicuro condividerete con me: l'asta è la parte principale del gioco, ma è un picco che dura solo mezza giornata (se siete fortunati!) che non verrà mai nemmeno minimamente avvicinato da nessun altro momento durante la stagione e, inoltre, avrà ripercussioni e conseguenze decisive sui risultati dei 10 mesi successivi.
            </p>
            <h2 className="text-lg font-bold">L'idea e la particolarità</h2>
            <p>
            Da qui nasce l'idea di creare un gioco che cerca di distribuire il divertimento in modo più equo durante tutto l'arco della stagione, pur dovendo rinunciare al piccolo garantito dall'asta.
            </p>
            <p>
            Un gioco nel quale fosse possibile adottare una strategia settimanale, di giornata in giornata, anche stravolgendo la propria formazione in funzione delle partite della settimana e quindi della strategia scelta per cercare di ottenere più bonus possibili.
            </p>
            <p>
            Ma... c'e un ma.
            </p>
            <p>
            Creare un gioco non é semplice, bisogna bilanciare in modo calibrato tutte le regole per renderlo non solo divertente, ma anche avvincente, sfidante. Ma prima ancora di pensare a delle meccaniche di gioco definitive, al game design e al regolamento, mancava qualcosa.
            </p>
            <p>
            Un elemento distintivo che rendesse il gioco unico, riconoscibile e divertente.
            </p>
            <p>
            In quel periodo, mi sono appassionato di giochi di carte, in particolare del Trading Card Game di carte Pokémon, ma per curiosità ho iniziato a vedere video di vari giochi nella speranza di trovarne altri che mi divertissero.
            </p>
            <p>
            Sarò sincero, nessuno di questi mi ha appassionato nello stesso modo, ma uno di questi è stato comunque illuminante: le carte Magic ed in particolare la modalità Draft. Non è ancora il momento di parlarne con voi nel dettaglio (ma potete facilmente informarvi online, se siete curiosi!), per ora è importante che sappiate che in quell'istante è iniziato un processo mentale che mi ha portato verso l'idea definitiva.
            </p>
            <p>
            Ho studiato il Draft di Magic ma non solo, anche vari altri giochi con modalità Draft declinata in vari modi (Fifa FUT, ad esempio). Ho fatto ricerche, chiesto feedback, costruito un prototipo... e tante altre cose che, per il momento, sarebbero uno spoiler sulle prossime email!
            </p>
            <h2 className="text-lg font-bold">Dall'idea al concreto</h2>
            <p>
            Ma quindi, come funziona Fantadraft?
            </p>
            <p>
            Avremo modo di approfondire le meccaniche e tutte le varia possibilità con delle email future, ma mi sembra giusto darvi una piccola anticipazione.
            </p>
            <p>
            Ogni settimana si potrà fare un Draft per creare una rosa di 24 convocati piú 2 allenatori. Da questo gruppo di convocati si potrà fare la formazione, scegliendo il modulo, gli 11 titolari e 7 panchinari.
            </p>
            <p>
            Dopodichè, come in un fantacalcio normale, si accumuleranno punti tramite i voti dei giocatori e le loro prestazioni, che porteranno bonus e malus andando a comporre il punteggio finale di squadra.
            </p>
            <p>
            Si potranno creare leghe pubbliche e private, ma anche partecipare alle competizioni organizzate da Fantadraft stessa, nelle quali si potranno vincere tantissimi premi!
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
            <h2 className="text-lg font-bold">Programming and Football</h2>
            <p>
            Hi, I'm Daniele Scillia, 10 years of experienced programmer, active in the developer community in the organization of events through PUGMI - Programming User Group Milano, but also content creation with my Youtube channels and Podcasts on programming.
            </p>
            <p>
            But there is much more than that: I'm a big fan of Football (soccer, of course!) and Fantasy Football, with 25 years as a football player at a semi-professional/amateur level and at least 13 seasons of fantasy football, including Classic and mantra.
            </p>
            <p>
            Football and programming have always been my two greatest passions, two souls that I have always tried to bring together: my desire is to unite them into a product.
            </p>
            <h2 className="text-lg font-bold">The problems of Fantasy Football</h2>
            <p>
            The idea of Fantadraft has been brooding in my mind for at least a couple of years, although only in recent weeks have I finally managed to give it a real shape and make the project concrete.
            </p>
            <p>
            Everything starts from the various problems I've had over the years in all the fantasy football leagues I've participated in: the discussions on the votes given to the players, the difficulty in maintaining high participation of those who find themselves far from the prize positions, the boredom when the rules never change, the doubts when the rules change too much.
            </p>
            <p>
            One of the main problems I have always perceived, however, is that in Fantasy Football the 80/20 rule is definitely valid: 80% of the participants' preparation and perceived fun resides in the initial auction, and the remaining 20% is distributed over the rest of the season.
            </p>
            <p>
            Obviously, I'm exaggerating, but it's to give you an idea of what I mean and that I'm sure you'll share with me: the auction is the main part of the game, but it's a peak that lasts only half a day (if you're lucky!) that will never be even minimally approached by any other moment during the season and, moreover, will have repercussions and decisive consequences on the results of the next 10 months.
            </p>
            <h2 className="text-lg font-bold">The idea and the particularity</h2>
            <p>
            Hence the idea of creating a game that tries to distribute the fun in a more equitable way throughout the season, while having to give up the small guaranteed by the auction.
            </p>
            <p>
            A game in which it would be possible to adopt a weekly strategy, from day to day, even changing one's formation according to the matches of the week and therefore to the strategy chosen to try to get as many bonuses as possible.
            </p>
            <p>
            But... there is a but.
            </p>
            <p>
            Creating a game is not easy, you have to balance in a calibrated way all the rules to make it not only fun but also exciting, and challenging. But even before thinking about the final game mechanics, game design, and rules, something was missing.
            </p>
            <p>
            A distinctive element that would make the game unique, recognizable, and fun.
            </p>
            <p>
            Around that time, I got hooked on card games, particularly the Pokémon Trading Card Game, but out of curiosity, I started watching videos of various games in hopes of finding others that I could enjoy.
            </p>
            <p>
            I'll be honest, none of them have fascinated me in the same way, but one of them has been enlightening nonetheless: Magic cards and in particular Draft mode. It's not the time to talk about it with you in detail yet (but you can easily find out about it online if you're curious!), for now, it's important that you know that in that instant a mental process began that led me towards the final idea.
            </p>
            <p>
            I studied the Magic Draft but not only, also various other games with Draft mode declined in various ways (Fifa FUT, for example). I did research, asked for feedback, built a prototype... and many other things that, for the moment, would be a spoiler on the next emails!
            </p>
            <h2 className="text-lg font-bold">From idea to reality</h2>
            <p>
            But then, how does Fantadraft work?
            </p>
            <p>
            We will deepen the mechanics and all the various possibilities with future emails, but it seems right to give you a little preview.
            </p>
            <p>
            Every week you can make a draft to create a roster of 24 players plus 2 coaches. From this group of players, you will be able to make the formation, choosing the module, the 11 starters, and 7 bench players.
            </p>
            <p>
            After that, as in normal fantasy football, you will accumulate points through the votes of the players and their performance, which will bring bonuses and maluses to compose the final score of the team.
            </p>
            <p>
            You will be able to create public and private leagues, but also participate in competitions organized by Fantadraft itself, in which you can win lots of prizes!
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
            title={router.locale === 'it' ? "Ciao! Sono Daniele, l'ideatore di Fantadraft" : "Fantadraft: Fantasy Football revolution"}
            date={router.locale === 'it' ? "06 Giugno 2022" : "06th Jun, 2022"}
            readingTime={router.locale === 'it' ? 'Tempo di lettura: 8 min' : 'Reading time: 8 min'}
            imgurl='/blog/chi-sono-come-nasce-idea.jpg'
            squareImg
        >
            {router.locale === 'it' ? itContent() : enContent()}
        </PostPage>

    </div>
  )
}

export default Blog
