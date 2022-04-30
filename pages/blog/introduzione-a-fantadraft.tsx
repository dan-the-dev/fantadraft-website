import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const IntroduzioneFantadraft: NextPage = () => {
    const router = useRouter()

    const itContent = () => {
        return <>
            <h2 className="text-lg font-bold">Un Fantacalcio tutto nuovo</h2>
            <p>
                Il Fantacalcio è un gioco eccezionale e appassionante: ci sono più di 6 milioni di fantallenatori in Italia. 6 milioni. Se così tanta gente si diverte con questo gioco, qualcosa vorrà pur dire, non credi?
            </p>
            <p>
                E allora, ti starai chiedendo perchè credo che serva una rivoluzione.
            </p>
            <p>
                Da appassionato e giocatore da ormai più di 12 anni, nel corso dei quali ho partecipato anche a 3/4 leghe, in alcune stagioni, posso dire di aver visto molte regole, molti partecipanti, molti contesti differenti; credo di poter affermare, quindi, che esistano alcune problematiche comuni a tutte le leghe che con la struttura del gioco è molto difficile risolvere.
            </p>
            <br />
            <h2 className="text-lg font-bold">1. L'asta</h2>
            <p>
                Il momento principale dell'anno è sicuramente l'asta: il fattore sociale di questo momento è enorme, e ve lo dice uno che quando si è trasferito a Milano da Modena, ogni anno tornava a casa il weekend dell'asta per poterla fare in presenza, quindi potete stare certi che ne riconosco la potenza. L'asta è un momento magico ed affascinante, sia da un punto di vista umano che ludico. 
            </p>
            <p>
                Ma finita l'asta? 
            </p>
            <p>
                Molti partecipanti ad un fantacalcio devono tutto il loro entusiamo all'asta, dopo quella rimane solo fare la formazione, che spesso è visto come una cosa quasi fastidiosa. 
            </p>
            <p>
                Il momento piú bello del gioco si consuma tutto in quella serata: l'elemento di maggiore forza del gioco è anche il suo più grande punto debole.
            </p>
            <br />
            <h2 className="text-lg font-bold">2. I voti</h2>
            <p>
                Altro punto dolente: i voti dei giornalisti!
            </p>
            <p>
                Si perché, come saprete benissimo, il calcolo dei punteggi della giornata dipendono dalle prestazioni dei giocatori in campo; nello specifico, il valore numerico utilizzato é tipicamente quello del voto che i giornalisti sportivi hanno dato al giocatore stesso, a cui poi andremo a sommare e sottrarre i vari bonus e malus.
            </p>
            <p>
                I voti però sono per definizione un opinione, ed infatti ogni settimana i social sono tempestati delle polemiche causate da uno o l'altro voto. La verità è che non esiste una soluzione: quando si è nel campo delle opinioni, senza elementi oggettivi, impossibile dare ragione a qualcuno.
            </p>
            <br />
            <h2 className="text-lg font-bold">3. I partecipanti sfiduciati</h2>
            <p>
                Infine, un problema che davvero tutte le leghe hanno é quello dei partecipanti sfiduciati, un problema collegato strettamente ai limiti dell'asta del punto 1: se all'asta abbiamo commesso errori o se semplicemente la sfortuna si accanisce su di noi con qualche infortunio grave su giocatori chiave, il rischio di essere giá fuori dai giochi per la vittoria a Dicembre è reale e concreto. 
            </p>
            <p>
                Questo purtroppo può portare.i giocatori a perdere interesse e non inserire la formazione in modo tempestivo, o farlo in modo disattento, causando ripercussioni sulle partite a cui partecipa e sugli avversari, che sostanzialmente si troveranno davanti un incognita molto maggiore. 
            </p>
            <br />
            <h2 className="text-lg font-bold">Conclusioni</h2>
            <p>
                Il gioco del Fantacalcio è una tradizione italiana che appassiona milioni di italiani, queste problematiche nonostante esistano (e non siano le uniche!) non sminuiscono affatto il grande valore ludico del gioco ed anzi: il fatto che sia cosi giocato nonostante questi problemi la dice lunga su quanto sia divertente.
            </p>
            <p>
                Negli ultimi anni sono giá nate tante piattaforme digitali su cui é possibile non solo gestire il proprio fantacalcio automatizzando il tutto (sicuramente i più famosi sono quelli di fantacalcio.it)  ma anche vedere statistiche (fantaculo.it) o giocare in modalità differenti volte a rendere il gioco un esperienza differente (Kickest). 
            </p>
            <p>
                Fantadraft vuole inserirsi in questa famiglia: resta con noi per sapere quando e come supportare la nascita di questa nuova declinazione di fantacalcio.
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
            <h2 className="text-lg font-bold">A brand new Fantasy Football</h2>
            <p>
                Fantasy soccer is an exceptional and exciting game: there are more than 8 million fantasy footballers subscribed to Premier League Fantasy Football. 8 million. If so many people enjoy this game, it must mean something, don't you think?
            </p>
            <p>
                So, you may be wondering why I think a revolution is needed.
            </p>
            <p>
                As a fan and player for more than 12 years, during which I have participated in 3/4 leagues in some seasons, I can say that I have seen many rules, many participants, many different contexts, I think I can say, therefore, that there are some problems common to all leagues that with the structure of the game is very difficult to solve.
            </p>
            <br />
            <h2 className="text-lg font-bold">1. The starting squad</h2>
            <p>
                The main moment of the season is definitely when you subscribe to the league and create your squad with 15/20 players. Typically, to avoid participants to create teams with only players from Manchester City and Liverpool and create more balance, you have a budget and a limit of players allowed from the same team.
            </p>
            <p>
                Many participants in the game owe all their enthusiasm to the squad creation, after that it remains only to make the weekly lineup, which is often seen as annoying.
            </p>
            <p>
                Molti partecipanti ad un fantacalcio devono tutto il loro entusiamo all'asta, dopo quella rimane solo fare la formazione, che spesso è visto come una cosa quasi fastidiosa. 
            </p>
            <p>
                The most beautiful moment of the game is all consumed in that moment: the element of the greatest strength of the game is also its greatest weakness.
            </p>
            <br />
            <h2 className="text-lg font-bold">2. The transfers</h2>
            <p>
                The point 1 will lead you straight to this number 2: transfers windows are typically limited during the season, either from a period perspective or the number of changes allowed, or both.
            </p>
            <p>
                While this makes totally sense, in order to preserve the centrality of the first squad created, your ability to create the best one with the given limits and your knowledge of real football, this turns again the greatest strength of the game to be a weakness: your chances to fix mistakes is very limited!
            </p>
            <p>
                If you pick a player that performs badly or gets injured, you may still fix the situation; if you pick 2/3 of them, you are probably out of the game for the big prizes.
            </p>
            <br />
            <h2 className="text-lg font-bold">3. Losing interest</h2>
            <p>
                The "fantasy football troubles" trip we are having together lands in the last spot: as a consequence of the first two points, if we made mistakes or simply had bad luck with some serious injuries on key players, the risk of being already out of the games for the victory in December is real and concrete.
            </p>
            <p>
                This will lead players to lose interest and not enter the formation in a timely manner, or do it carelessly, causing repercussions on the games. 
            </p>
            <p>
                If the league was free for subscriptions, this is simply a waste of time, otherwise, it can also be perceived as a waste of money.
            </p>
            <p>
                In both cases, the game failed: the purpose of the game must be to allow each player, in each moment, to feel that he can win thanks to his abilities, his knowledge, AND a bit of luck. 
            </p>
            <p>
                If the game has session period, is totally acceptable that if you start bad you have to wait the next period to go back in track and try to win something, but if this period is a year-long, it's quite problematic.
            </p>
            <br />
            <h2 className="text-lg font-bold">Conclusions</h2>
            <p>
                The game of Fantasy Football was born in Italy and today it fascinates millions of Italians and European players, even with these problems (and they are not the only ones!): this is because of the great value of the game in terms of fun, competition and entertainment.
            </p>
            <p>
                In the last few years, many digital platforms have been created on which you can not only manage your fantasy soccer by automating everything but also see statistics or play in different ways to make the game a different experience (Fantasy Premier League, Kickest).
            </p>
            <p>
                Fantadraft wants to be part of this family: stay with us to know when and how to support the birth of this new declination of fantasy soccer.
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
            title={router.locale === 'it' ? "Un introduzione a Fantadraft" : "An introduction to Fantadraft"}
            date={router.locale === 'it' ? "30 Maggio 2022" : "30th May, 2022"}
            readingTime={router.locale === 'it' ? 'Tempo di lettura: 5 min' : 'Reading time: 5 min'}
            imgurl='/blog/introduzione-a-fantadraft.jpg'
        >
            {router.locale === 'it' ? itContent() : enContent()}
        </PostPage>

    </div>
  )
}

export default IntroduzioneFantadraft
