'use client'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import SideMenu from './side-menu'



export function Header() {
    
    return (

        <Card>
            <CardContent className="py-6 px-5 flex justify-between items-center">
                <Image src='/logo.png' alt="logo" width={120} height={22}/>
                <Sheet>
                    <SheetTrigger>
                        <Button variant='outline' size='icon' className='h-8 w-8'> 
                            <MenuIcon size={16}/>
                        </Button>
                    </SheetTrigger>
                    
                    <SheetContent className='p-0'>
                        <SheetHeader  className=' text-left border-b border-solid border-secondary p-5'>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <SideMenu />
                    </SheetContent>
                   
                </Sheet>
            </CardContent>
        </Card>
    )
}