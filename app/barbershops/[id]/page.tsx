import { db } from '@/app/lib/prisma'
import BarbershopInfo from '../_components/barbershop-info'
import { Footer } from '@/app/components/ui/footer'
import ServiceItem from '../_components/service-item'

interface BarberShopsDetailParams {
  params: {
    id?:string
  }
  
}

const BarberShopDetails = async ({params} : BarberShopsDetailParams) => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            Service:true
        }
    })

    if(!barbershop) {
        return null
    }

    return (
        <>
            <BarbershopInfo barbershop = {barbershop}/>
            <div>
                {barbershop.Service.map((service) => {
                    return (
                        <div className='flex flex-col px-5 mt-3'>
                            <ServiceItem service={service}/>

                        </div>
                    )
                })}                
            </div>
            <Footer />
        </>
    )
}

export default BarberShopDetails