import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export function Header() {
  return (
    <Card>
      <CardContent className="py-6 px-5 flex justify-between items-center">
        <Image src='/logo.png' alt="logo" width={120} height={22}/>
        <Button variant='outline' size='icon'>
          <MenuIcon  size={18}/>
        </Button>
      </CardContent>
    </Card>
  )
}