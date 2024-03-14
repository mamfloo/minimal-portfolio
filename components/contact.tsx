import { Github, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsDiscord } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className='flex mt-36 pb-20 pt-20 w-full bg-footerColor justify-center' id='contact'>
        <div className='flex flex-col justify-center w-full px-14 lg:w-2/3 xl:w-1/2 lg:px-0 gap-14 xl:flex-row'>
            <div className=' xl:w-7/12'>
                <h1 className='text-5xl mb-7'>Available for opportunities</h1>
                <p className='text-lg'>Have an exciting project you need help with? Send me an email or contact me via discord so we can discuss it!</p>
            </div>
            <div>
                <Link href={"mailto:info@nickbubuioc.dev"} className='text-3xl '>
                    info@nickbubuioc.dev
                </Link>
                <div className='flex gap-2 justify-start'>
                    <Link href={"#"} className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                        <Github />
                    </Link>
                    <Link href={"#"} className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                        <BsDiscord size={25} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
