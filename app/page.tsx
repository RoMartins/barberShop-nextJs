import { ptBR } from 'date-fns/locale'
import { Header } from './components/header'
import { format } from 'date-fns'

export default function Home() {
    return (
        <>
            <Header />
            <h2>Olá, Rodrigo!</h2>
            <p className='capitalize'>{format(new Date, "EEEE ',' dd 'de' MMMM ", {
              locale: ptBR
            } )}</p>
        </>  
    )
}
