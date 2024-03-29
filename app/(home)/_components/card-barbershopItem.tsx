'use client'

import { Barbershop } from '@prisma/client'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'

interface cardProps {
  barbershop : Barbershop
}
export default function CardBarbershopItem ({barbershop}:cardProps) {
    const router = useRouter()

    const handleBarbershopDetails = () => {
        router.push(`/barbershops/${barbershop.id}`)
    }

    return (
        <Card className='min-w-[167px] max-w-[167px] rounded-2xl'>
            <CardContent className='p-1'>
                <div className='w-full h-[159px] relative'>
                    <div className='absolute z-50 top-2 left-2 '>
                        <Badge variant='secondary' className='items-center flex opacity-90 gap-1'>
                            <StarIcon className='fill-primary text-primary' size={12}/>
                            <span>5.0</span>
                        </Badge>
                    </div>
                   
                    <Image 
                        className='rounded-2xl'
                        fill
                        style={{
                            objectFit: 'cover'
                        }}
                        alt={barbershop.name}
                        src={barbershop.imageUrl}
                    />
                </div>

                <div className='px-2 pb-3'>
                    <h2 className='overflow-hidden text-ellipsis text-nowrap font-bold mt-2'>{barbershop.name}</h2>
                    <p className=' overflow-hidden text-ellipsis text-nowrap text-gray-400 text-sm ' >{barbershop.address}</p>

                    <Button className='w-full mt-3' variant='secondary' onClick={handleBarbershopDetails}>
                    Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}