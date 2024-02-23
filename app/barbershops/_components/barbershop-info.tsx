'use client'

import { Button } from '@/app/components/ui/button'
import { Barbershop } from '@prisma/client'
import { ChevronLeftIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


interface BarberShopInfoProps {
  barbershop : Barbershop
}
const BarbershopInfo = ( {barbershop} : BarberShopInfoProps) => {
    const route = useRouter()
    const handleBack = () => {
        route.back()
    }
  
    return (
        <div>
            <div className='h-[250px] w-full relative'>
                <Button size='icon' variant='outline' className='z-50 absolute top-4 right-4'>
                    <MenuIcon />
                </Button>

                <Button onClick={handleBack} size='icon' variant='outline' className='z-50 absolute top-4 left-4'>
                    <ChevronLeftIcon/>
                </Button>
                <Image 
                    className='opacity-75'
                    src={barbershop.imageUrl} fill alt={barbershop.name} style={{
                        objectFit: 'cover'
                    }}/>
            </div>

            <div className='px-5 py-3'>
                <h1 className='text-xl font-bold'>{barbershop.name}</h1>
                <div className="flex items-center gap-2">
                
                    <p  className='text-sm'>{barbershop.address}</p>
                </div>
            </div>
        </div>
    )
}

export default BarbershopInfo