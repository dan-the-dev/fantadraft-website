import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Thanks: NextPage = () => {
    const router = useRouter()

  return ( <>
        <div className="w-full h-fit pt-16 pb-8 flex flex-col justify-center bg-primary text-secondary">
            <h1 className="text-center text-4xl font-bold">Benvenuto, ora sei un Drafter!</h1>
            <p className="text-center text-lg mt-5">Grazie per il supporto che ci stai dando, è davvero importante per noi!</p>
            <div className="w-full px-4 md:px-52 py-10 flex justify-center">
                <Image src={'/thanks.svg'} width={'250px'} height={'200px'} layout={'fixed'}/>
            </div>
            <div className="w-full px-4 md:px-52 py-10 md:py-2 text-center text-base text-white">
                <p>Ciao Drafter, ti diamo il benvenuto nella community di <b>Fantadraft</b>. </p>
                <p>Come promesso, ti terremo aggiornato su tutti i passi avanti del progetto: controlla la tua casella di posta, ti abbiamo inviato una email di benvenuto con le prime informazioni esclusive!</p>
            </div>
        </div>
        <section className="pb-10 bg-primary text-white">
            <div className="flex justify-center px-5 md:px-0">
                <Image src={'/kickstarter.png'} width={'600px'} height={'150px'} layout={'fixed'}/>
            </div>
            <p className="text-center text-base">La campagna Kickstarter è prevista per l'autunno/inverno 2022: appena la data sarà definitiva la ufficializzeremo: sarai il primo a saperlo!</p>
        </section>
        <section className="pb-10 bg-primary text-white flex justify-center">
            <button className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary" onClick={() => {router.push('/')}}>Torna alla HOME</button>
        </section>
     </>
  )
}

export default Thanks
