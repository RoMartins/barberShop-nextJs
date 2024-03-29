import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export function BookingItem() {
    return(
        <Card>
            <CardContent className="px-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5 ">
                    <Badge className="bg-[#221C3D] hover:bg-[#221C3D] w-fit text-primary">
          Confirmado
                    </Badge>
                    <h2 className="font-bold">Corte de cabelo</h2>

                    <div className="flex items-center gap-2 ">
                        <Avatar >
                            <AvatarImage src= "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"/>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>

                <div className="flex flex-col justify-center px-3 items-center border-l border-solid border-secondary">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>


      
            </CardContent>
        </Card>
    )
}