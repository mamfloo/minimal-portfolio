'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import img from '@/public/projects/guess-game/1.png'

export default function ProjectCarousel({name}: {name: string}) {
    const plugin = React.useRef(
        Autoplay({delay: 3000, stopOnInteraction: true})
    ) 

    // return (
    //     <Carousel
    //     plugins={[plugin.current]}
    //     className="w-full h-96"
    //     onMouseEnter={plugin.current.stop}
    //     onMouseLeave={plugin.current.reset}
    //     >
    //     <CarouselContent className="h-96">
    //         {Array.from({ length: 5 }).map((_, i) => (
    //             <CarouselItem>
    //                     <Image 
    //                         className=""
    //                         src={img} layout='fill' alt='project_image'></Image>
    //             </CarouselItem>
    //         ))}
    //     </CarouselContent>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //     </Carousel>
    // )

    return (
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                <Image 
                             className=""
                             src={`/projects/${name}/${i+1}.png`} layout="responsive" width={500} height={100} alt='project_image'></Image>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
}
  