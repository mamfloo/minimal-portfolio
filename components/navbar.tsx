"use client"
import React, { useState } from 'react'
import { ModeToggle } from './ui/modeToggle'
import Link from 'next/link';

export default function Navbar() {
  const[hovered, setHovered] = useState(-1);

  return (
    <div className='flex gap-14 w-full justify-center pt-8 pl-10'>
      <div onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(-1)}>
        <Link href={"#info"} className={`hover:no-underline p-2 text-2xl ${(hovered !== 1 && hovered !== -1) ? "text-muted-foreground" : ""}`}>info</Link>
      </div>
      <div onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(-1)}>
        <Link href={"#projects"} className={`hover:no-underline p-2 text-2xl ${hovered !== 0 && hovered !== -1 ? "text-muted-foreground" : ""} `}>projects</Link>
      </div>
      <div onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(-1)}>
        <Link href={"#contact"} className={`hover:no-underline p-2 text-2xl ${(hovered !== 2 && hovered !== -1) ? "text-muted-foreground" : ""}`}>contact</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  )
}
