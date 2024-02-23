
import { ptBR } from 'date-fns/locale'
import { Header } from '../components/header'
import { format } from 'date-fns'
import { Search } from './_components/search'
import { BookingItem } from '../components/booking-item'
import { db } from '../lib/prisma'
import CardBarbershopItem from './_components/card-barbershopItem'
import { Footer } from '../components/ui/footer'

export default async function Home() {
    const barbershops = await db.barbershop.findMany({})

    return (
        <>
            <Header />
            <div className='px-5 py-5'>
                <h2 className='text-xl font-bold'>Olá, Rodrigo!</h2>
                <p className='capitalize text-sm '>{format(new Date, 'EEEE \',\' dd \'de\' MMMM ', {
                    locale: ptBR
                } )}
                </p>
            </div>

            <div className='px-5'>
                <Search />
            </div>

            <div className="px-5 mt-6">
                <h2 className='text-xs text-gray-400 font-bold mb-3 uppercase'>Agendamentos</h2>
                <BookingItem />
            </div>

            <div className="mt-6">
                <h2 className='text-xs px-5 text-gray-400 font-bold mb-3 uppercase'>Recomendados</h2>

                <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                    {barbershops.map((barbershop) => (
                        <CardBarbershopItem barbershop={barbershop} key={barbershop.id} />
                    ))}
                </div>
            </div>

            <div className="mt-6 mb-[4.5rem]">
                <h2 className='text-xs px-5 text-gray-400 font-bold mb-3 uppercase'>Populares</h2>

                <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                    {barbershops.map((barbershop) => (
                        <CardBarbershopItem barbershop={barbershop} key={barbershop.id} />
                    ))}
                </div>
            </div>
            <Footer />
        </>  
    )
}
