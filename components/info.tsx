import { Github, Mail } from 'lucide-react'
import { BsDiscord } from "react-icons/bs";
import Link from 'next/link'
import React from 'react'
import { fredoka } from '@/app/layout';

export default function Info() {
  return (
    <section className='h-screen flex justify-center items-center' id='info'>
        <div className='flex flex-col'>
            <h1 className={`${fredoka.className} text-6xl font-semibold mb-2`}>nick bubuioc</h1>
            <div className='flex gap-2 justify-start'>
                <Link href={"mailto:info@nickbubuioc.dev"} target='_blank' className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                    <Mail />
                </Link>
                <Link href={"https://github.com/mamfloo"} target='_blank' className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                    <Github />
                </Link>
                <Link href={"https://discordapp.com/users/254951048437956610"} target='_blank' className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                    <BsDiscord size={25} />
                </Link>
            </div>
        </div>
    </section>
  )
}
