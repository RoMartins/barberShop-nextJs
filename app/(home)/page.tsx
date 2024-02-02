import { ptBR } from 'date-fns/locale'
import { Header } from '../components/header'
import { format } from 'date-fns'
import { Search } from './_components/search'

export default function Home() {
    return (
        <>
            <Header />
            <div className='px-5 py-5'>
                <h2 className='text-xl font-bold'>Olá, Rodrigo!</h2>
                <p className='capitalize text-sm '>{format(new Date, "EEEE ',' dd 'de' MMMM ", {
                locale: ptBR
                     } )}
                </p>
            </div>

            <div className='px-5'>
                <Search />
            </div>
        </>  
    )
}
