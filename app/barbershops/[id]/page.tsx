import { db } from '@/app/lib/prisma'
import BarbershopInfo from '../_components/barbershop-info'

interface BarberShopsDetailParams {
  params: {
    id?:string
  }
  
}

const BarberShopDetails = async ({params} : BarberShopsDetailParams) => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })

    if(!barbershop) {
        return null
    }

    return (
        <BarbershopInfo barbershop = {barbershop}/>
    )
}

export default BarberShopDetails