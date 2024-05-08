"use client"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

type Props={
    label:string,
    iconSource:string, 
    href:string,
}

export const SidebarItem= ({label, iconSource, href}:Props)=>{
    const pathname = usePathname();
    const active = pathname===href;
    // console.log(active);
    return(
        <div>
            <Button variant={active?"primary":"primaryOutline"} className="justify-start h-[52px] w-full "  asChild>
                <Link href={href}>
                    <Image src={iconSource} width={32} height={32} alt={label} className="mr-5"/>
                    {label}
                </Link>
            </Button>
        </div>
    )
}