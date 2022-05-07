import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const Blog: NextPage = () => {
    const router = useRouter()

    const itContent = () => {
        return <>
            <h2 className="text-lg font-bold">Nessuna asta, nessun listone: il Draft</h2>
            <br />
            <p>
                Quando giocherete a Fantadraft, come in ogni Fantacalcio esistente, potrete partecipare sia a leghe pubbliche che private, ma in nessuna di queste avrete una vostra rosa uguale tutto l'anno.
            </p>
            <br />
            <p>
                Fantadraft nasce dall'unione del Fantacalcio con la modalità Draft (per esempio quella con carte Magic): prima di poter fare la formazione, ogni settimana dovrete fare un Draft, ovvero scegliere uno alla volta i 24 convocati per la vostra squadra.
            </p>
            <br />
            <p>
                La scelta di ogni giocatore, chiamata in gergo pick, avviene scegliendolo tra un gruppo di 6 giocatori casuali: i ruoli dei giocatori saranno casuali e diversi tra loro, ma il livello del giocatore sarà simile (calcolato su vari fattori e da un punto di vista "fantacalcistico").
            </p>
            <div className="flex justify-around py-5 px-10">
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/blog/draft1.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
                </div>
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/blog/draft2.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
                </div>
            </div>
            <p>
                Alcune cose a cui fare attenzione:
            </p>
            <ul className='list-decimal px-10'>
                <li>
                    i giocatori di livello superiore compariranno più raramente di quelli di livello più basso, quindi dovrai ponderare bene le tue scelte
                </li>
                <li>
                    assicurati di essere coperto in più ruoli possibili: il gioco ti aiuterà obbligandoti ad avere almeno un portiere (ma basterà?), il resto sta a te
                </li>
                <li>
                    se a fine draft non avrai una rosa che ti permette di fare la formazione rispettando i requisiti minimi, non potrai partecipare alla gara settimanale
                </li>
            </ul>
            <p>
                Oltre ai 24 giocatori, avrai anche due pick tra gli allenatori di Serie A... tra poco capirai a cosa serviranno!
            </p>
            <br />
            <p>
                Per tutti gli scopritori di talento li fuori: non preoccupatevi, abbiamo pensato anche a voi! Ci sarà un Draft speciale ad ogni inizio stagione, dove si potrà draftare fra le giovani promesse del campionato in arrivo e creare un pool di 4 giocatori primavera che resteranno con voi tutta la stagione!
            </p>
            <br />
            <p>
                Finora tutto abbastanza facile, no? Ecco, ora iniziamo a fare sul serio!
            </p>
            <br />
            <h2 className="text-lg font-bold">Fantacalcio si, ma Mantra!</h2>
            <br />
            <p>
                Come avrai notato, uno degli avvisi che ti ho dato é stato: "assicurati di essere coperto in più ruoli possibili".
            </p>
            <br />
            <p>
                Se sei un pò stupito, probabilmente sei abituato a giocare al Fantacalcio solo in modalità Classic, con i giocatori divisi in quattro ruoli: Portieri, Difensori, Centrocampisti, Attaccanti.
            </p>
            <br />
            <p>
                Ma noi vogliamo che Fantadraft sia un gioco semplice, divertente, alla portata di tutti ma allo stesso tempo sfidante, appassionante e che metta alla prova le vostre abilità strategiche e conoscenze calcistiche!
            </p>
            <br />
            <p>
                Per questo motivo, abbiamo scelto di basare la meccanica di Fantacalcio sulla modalità Mantra.
            </p>
            <br />
            <p>
                Il Fantacalcio Mantra é una modalità di gioco nella quale i giocatori non sono suddivisi nei classici ruoli P, D, C e A ma in ruoli più frammentati e realistici (per esempio, in difesa ci sono Difensore centrale, Terzino destro e Terzino sinistro); se non la conoscete, <a href='https://www.fantacalcio.it/regolamenti/sistema-mantra' target={'_blank'}>qui</a> trovate una bella guida ma non preoccupatevi: settimana prossima approfondiremo la questione.
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/blog/tactics.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
            </div>
            <p>
                Per questo, durante la fase di Draft dovrai fare delle scelte guidate da una strategia ed il gioco ti metterà tutte le informazioni utili per prendere le tue decisioni: ogni giocatore avrà in vista la squadra di appartenenza, la partita di interesse, le probabilità che quel giocatore vada a voto ed i suoi ruoli Mantra.
            </p>
            <br />
            <p>
                Inoltre, avrai sempre accessibili il calendario del campionato di riferimento ed il riepilogo delle pick già effettuate.
            </p>
            <br />
            <p>
                Ricorda: durante il Draft devi assicurarti che nei tuoi 24 convocati siano rispettati i requisiti minimi per poter fare la formazione con almeno una delle tattiche disponibili, altrimenti non potrai partecipare al match.
            </p>
            <br />
            <p>
                Un esempio di requisiti minimi? Beh, almeno un portiere devi schierarlo per forza (e sarà meglio per te che sia un titolare!).
            </p>
            <br />
            <h2 className="text-lg font-bold">Tattica e formazione</h2>
            <br />
            <p>
                Una volta concluso il Draft, ti rimane solo da fare la formazione: dovrai trovare la combinazione migliore con la tattica giusta per schierare in campo il miglior 11 titolare possibile, potendo scegliere anche 7 panchinari con te.
            </p>
            <br />
            <p>
                Le regole del Fantacalcio si basano sulla modalità Mantra, come dicevamo qualche riga più in alto, ed è importante specificare che per le sostituzioni useremo la modalita Master: sarà l'ordine dei panchinari a guidare le sostituzioni.
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/blog/lineup.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
            </div>
            <p>
                Infine, oltre ai calciatori, dovrai scegliere un allenatore per la tua panchina tra le due pick effettuate: entreremo nel dettaglio dei bonus speciali di Fantadraft nel prossimo paragrafo, ma é giusto anticiparvi che la scelta dell'allenatore dovrà tenere conto anche della sua tattica preferita.
            </p>
            <br />
            <p>
                Ogni allenatore é infatti associato ad una tattica preferita, la più fedele possibile a quella che utilizza nella realtà tra quelle disponibili nel gioco; riuscire a schierare la coppia allenatore-modulo ci darà accesso ad un bonus speciale!
            </p>
            <br />
            <h2 className="text-lg font-bold">Bonus speciali e potenziamenti</h2>
            <br />
            <p>
                Quando abbiamo creato il regolamento siamo partiti dai punti saldi delle due modalità che ci hanno ispirato: sia Draft che Fantacalcio hanno regolamenti più o meno standard su cui ci siamo basati.
            </p>
            <br />
            <p>
                Da qui sono derivate alcune decisioni, come per esempio quella del Mantra che a nostro avviso favorisce bilanciamento e strategia e settimana prossima sarà il momento di approfondire questo aspetto per giustificare la scelta del Mantra in modo più dettagliato.
            </p>
            <br />
            <p>
                Il gioco però si chiama Fantadraft ed é su questa fusione che ci vogliamo concentrare, quindi vogliamo che il Draft abbia un impatto non solo nelle scelte iniziali, ma anche nel calcolo dei bonus e malus.
            </p>
            <br />
            <p>
                Abbiamo quindi introdotto alcuni bonus e malus esclusivi di Fantadraft:
            </p>
            <br />
            <ul className="list-disc px-10">
                <li>Bonus Combinazione Tattica{'<->'}Allenatore - se la tattica scelta é la preferita dell'allenatore schierato, il punteggio totale della squadra verrà moltiplicato per un coefficiente di 1.05</li>
                <li>Bonus Primavera - se uno dei giocatori primavera va a voto, potrà portare dei bonus positivi in caso di bel voto (il bonus è identico a quello classico del Capitano, ma include solo la parte positiva)</li>
                <li>Malus fuori ruolo - potrai schierare e portare a voto un massimo di due giocatori fuori ruolo (solo tra ruoli Mantra compatibili), ma il giocatore fuori ruolo riceverà un malus automatico di -1 punto</li>
            </ul>
            <br />
            <p>
                Come vedete, i bonus aggiuntivi portano ulteriore valore al Draft: la capacita di incastrare le varie pick, di costruire strategicamente la miglior formazione possibile e tenersi aperte le strade per evitare il rischio dei fuori ruolo sarà il setup perfetto per sperare di vincere!
            </p>
            <br />
            <h2 className="text-lg font-bold">Tutto molto bello, ma... cosa si vince?</h2>
            <br />
            <p>
                Si, lo so.
            </p>
            <br />
            <p>
                Bello il gioco, bello tutto, divertente l'idea, simpatica, ma... cosa partecipo a fare? Cosa vinco?
            </p>
            <br />
            <p>
                <i>La vera meta è il viaggio</i>, dicono quelli bravi, ma all'arrivo deve pur esserci qualcosa: mentre per le leghe private chiaramente starà a voi gestire con i vostri amici eventuali premi e/o penitenze, nelle leghe pubbliche la situazione sarà diversa.
            </p>
            <br />
            <p>
                Fantadraft offrirà l'accesso a diversi premi sotto forma di buoni Amazon, che verranno messi in palio nelle leghe pubbliche offerte da Fantadraft ma anche "regalati" ed ogni nuovo record: non solo punteggio più alto, ma ad esempio anche "miglior Draft di sempre" e tanti altri record.
            </p>
            <br />
            <p>
                Gli utenti potranno creare le loro leghe pubbliche e/o private, che ovviamente non avranno premi offerti da Fantadraft ma tutte le leghe daranno accesso ai record e quindi alla possibilita di vincere premi globali.
            </p>


            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/kickstarter.png'} width={'300px'} height={'100px'} layout={'fixed'} />
            </div>
            <p>
                Per dare luce a questo sogno, stiamo preparando una campagna Kickstarter per finanziare lo sviluppo del gioco, prevista per l'autunno/inverno del 2022: lasciaci la tua email per entrare a far parte dei Drafters, sostenere il nostro sogno ed essere il primo a sapere quando la campagna sarà pronta!
            </p>
            <div className="flex justify-center">
                <form action="/api/subscribe" className="flex items-center mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="h-12 px-2 py-2 font-medium text-primary focus:outline-none rounded-l-full border border-gray-300" /><br />
                    <input type="text" id="locale" name="locale" value={'it'} hidden readOnly />
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
            <h2 className="text-lg font-bold">No auction, no list: the Draft</h2>
            <br />
            <p>
                When you play Fantadraft, as in any existing fantasy football, you can participate in both public and private leagues, but in none of these, you will have the same roster for all the season.
            </p>
            <br />
            <p>
                Fantadraft was born from the union of fantasy football with the Draft mode (for example the one with Magic cards): every week, before you can make the formation, you have to make a Draft to choose the 24 players for your team.
            </p>
            <br />
            <p>
            The choice of each player, called a pick, is made by choosing him from a group of 6 random players: the roles of the players will be random and different from each other, but the level of the player will be similar (calculated on various factors and from a "fantasy football" point of view).
            </p>
            <div className="flex justify-around py-5 px-10">
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/blog/draft1.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
                </div>
                <div className="flex justify-center px-5 md:px-0">
                    <Image src={'/blog/draft2.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
                </div>
            </div>
            <p>
            Some things to watch out for:
            </p>
            <ul className='list-decimal px-10'>
                <li>
                higher-level players will appear more rarely than lower-level ones, so you have to weigh your choices well
                </li>
                <li>
                make sure you are covered in as many positions as possible: the game will help you by forcing you to have at least one goalkeeper (but will it be enough?), the rest is up to you
                </li>
                <li>
                if at the end of the draft you will not have a roster that allows you to make a formation that meets the minimum requirements, you will not be able to participate in the weekly competition
                </li>
            </ul>
            <p>
            In addition to the 24 players, you will also have two picks among the coaches... you will soon understand what they will be used for!
            </p>
            <br />
            <p>
            For all the talent scouts out there: don't worry, we have thought of you too! There will be a special Draft at the beginning of every season, where you can draft among the young promises of the upcoming league and create a pool of 4 youth players that will stay with you all season long!
            </p>
            <br />
            <p>
            So far so easy, isn't it? Now let's get serious!
            </p>
            <br />
            <h2 className="text-lg font-bold">Fantasy football yes, but Mantra!</h2>
            <br />
            <p>
            As you may have noticed, one of the warnings I gave you was: "make sure you are covered in as many positions as possible".
            </p>
            <br />
            <p>
            If you're a bit surprised, you're probably used to playing fantasy football only in Classic mode, with players divided into four roles: Goalkeepers, Defenders, Midfielders, and Strikers.
            </p>
            <br />
            <p>
            We want Fantadraft to be a simple, fun, affordable game, but at the same time we want it to be challenging, and exciting, a game that will test your strategic skills and football knowledge!
            </p>
            <br />
            <p>
            For this reason, we have chosen to base the fantasy football mechanics of Fantadraft on the Mantra mode.
            </p>
            <br />
            <p>
            Mantra Fantasy Football is a game mode in which players are not divided into the classic roles but into more fragmented and realistic ones (for example, in defense there are Central Defender, Right Back, and Left Back); if you don't know it, <a href='https://www.fantacalcio.it/regolamenti/sistema-mantra' target={'_blank'}>here</a> is a nice guide (sadly, couldn't find one in english, let google translate help you... or wait next week, we will talk about this in our email!).
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/blog/tactics.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
            </div>
            <p>
            For this reason, during the Draft phase, you have to make choices guided by a strategy and the game will give you all the information you need to make your decisions: each player will show the team he belongs to, the fixture of interest, the probability that that player will get a score and his Mantra roles.
            </p>
            <br />
            <p>
            In addition, you will always have access to the calendar of the reference league and the summary of the picks already made.</p>
            <br />
            <p>
            Remember: during the Draft, you must make sure that in your 24 players you meet the minimum requirements to be able to make the formation with at least one of the available tactics, otherwise, you will not be able to participate in the match.
            </p>
            <br />
            <p>
            An example of minimum requirements? Well, at least one goalkeeper has to be in the lineup (and he better be a starter!).
            </p>
            <br />
            <h2 className="text-lg font-bold">Tactics and lineup</h2>
            <br />
            <p>
            Once the Draft is over, you only have to make your lineup: you'll have to find the best combination with the right tactics to field the best possible starting 11, and you can also choose 7 benchers with you.
            </p>
            <br />
            <p>
            The rules of Fantasy Football are based on the Mantra mode, as we said a few lines above, and it is important to specify that for substitutions we will use the Master mode: it will be the order of the bench players to guide the substitutions.
            </p>
            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/blog/lineup.jpg'} width={'300px'} height={'600px'} layout={'fixed'} />
            </div>
            <p>
            Finally, in addition to the players, you have to choose a coach for your bench between the two picks made: we will go into detail about Fantadraft special bonuses in the next paragraph, but it's fair to anticipate that the choice of the coach must also take into account his favorite tactics.
            </p>
            <br />
            <p>
            Each coach is in fact associated with a favorite tactic, the most faithful as possible to the one he uses in reality among those available in the game; being able to deploy the couple coach-module will give us access to a special bonus!
            </p>
            <br />
            <h2 className="text-lg font-bold">Special bonuses</h2>
            <br />
            <p>
            When we created the rules, we started from the solid points of the two modes that have inspired us: both Draft and Fantacalcio have more or less standard rules on which we have based ourselves.
            </p>
            <br />
            <p>
            From here we derived some decisions, such as that of the Mantra, which in our opinion favors balance and strategy, and next week will be the time to deepen this aspect to justify the choice of Mantra in more detail.
            </p>
            <br />
            <p>
            However, the game is called Fantadraft and it's on this fusion that we want to focus, so we want the Draft to have an impact not only in the initial choices but also in the calculation of bonuses and maluses.
            </p>
            <br />
            <p>
            We have therefore introduced some bonuses and maluses exclusive to Fantadraft:
            </p>
            <br />
            <ul className="list-disc px-10">
                <li>Tactics Combination Bonus{'<->'}Trainer - if the chosen tactic is the favorite of the coach, the total score of the team will be multiplied by a coefficient of 1.05</li>
                <li>Youth Bonus - if one of the youth players goes to vote, he will be able to bring positive bonuses in case of a good vote (the bonus is identical to the classic Captain bonus, but only includes the positive part)</li>
                <li>Out-of-role malus - you will be able to field and vote a maximum of two out-of-role players (only between compatible Mantra roles), but the out-of-role player will receive an automatic -1 point malus</li>
            </ul>
            <br />
            <p>
            As you can see, the additional bonuses bring additional value to the Draft: the ability to fit the various picks, to strategically build the best possible lineup and keep the roads open to avoid the risk of off-role players will be the perfect setup to win!
            </p>
            <br />
            <h2 className="text-lg font-bold">All very nice, but... what do you win?</h2>
            <br />
            <p>
                Yes, I know.
            </p>
            <br />
            <p>
            Nice game, nice everything, fun idea, nice, but... what do I participate in? What do I win?
            </p>
            <br />
            <p>
                <i>The real goal is the journey</i>, say the good ones, but at the arrival, there must be something: while the private leagues will clearly be up to you to manage with your friends any awards and/or penalties, in public leagues the situation will be different.
            </p>
            <br />
            <p>
                Fantadraft will offer access to various prizes in the form of Amazon vouchers, which will be raffled off in the public leagues offered by Fantadraft but also "given away" with each new record: not only highest score but for example "best draft ever" and many other records.
            </p>
            <br />
            <p>
                Users will be able to create their own public and/or private leagues, which obviously will not have prizes offered by Fantadraft but all leagues will give access to records and then the possibility to win global prizes.
            </p>

            <div className="flex justify-center py-5 px-5 md:px-0">
                <Image src={'/kickstarter.png'} width={'300px'} height={'100px'} layout={'fixed'} />
            </div>
            <p>
                To give light to this dream, we are preparing a Kickstarter campaign to fund the development of the game, scheduled for fall/winter 2022: leave us your email to join the Drafters, support our dream and be the first to know when the campaign will be ready!
            </p>
            <div className="flex justify-center">
                <form action="/api/subscribe" className="flex items-center mt-12 overflow-hidden text-center">
                    <label htmlFor="email" hidden>Email:</label><br />
                    <input type="email" id="email" name="email" placeholder='Email' required className="h-12 px-2 lg:px-5 py-2 font-medium text-primary focus:outline-none rounded-l-full border border-gray-300" /><br />
                    <input type="text" id="locale" name="locale" value={'en'} hidden readOnly />
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
                title={router.locale === 'it' ? "Le meccaniche di gioco" : "Game mechanics"}
                date={router.locale === 'it' ? "20 Giugno 2022" : "20th Jun, 2022"}
                readingTime={router.locale === 'it' ? 'Tempo di lettura: 10 min' : 'Reading time: 10 min'}
                imgurl='/blog/come-funziona-fantadraft.jpg'
            >
                {router.locale === 'it' ? itContent() : enContent()}
            </PostPage>

        </div>
    )
}

export default Blog
