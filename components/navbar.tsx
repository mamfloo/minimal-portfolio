"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ui/modeToggle'
import Link from 'next/link';

export default function Navbar() {
  const[hovered, setHovered] = useState(-1);
  const[isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if(show !== isScrolled ) {
        setIsScrolled(show);
      } 
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolled])


  return (
    <div className={`flex gap-14 w-full justify-center pl-24 z-10 ${isScrolled ? 'fixed backdrop-blur-lg py-4' : 'absolute pt-8 pb-5'}`}>
      <div onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(-1)}>
        <Link href={`/#info`} className={`hover:no-underline p-2 text-2xl ${(hovered !== 1 && hovered !== -1) ? "text-muted-foreground" : ""}`}>info</Link>
      </div>
      <div onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(-1)}>
        <Link href={"/#projects"} className={`hover:no-underline p-2 text-2xl ${hovered !== 0 && hovered !== -1 ? "text-muted-foreground" : ""} `}>projects</Link>
      </div>
      <div onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(-1)}>
        <Link href={"/#contact"} className={`hover:no-underline p-2 text-2xl ${(hovered !== 2 && hovered !== -1) ? "text-muted-foreground" : ""}`}>contact</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  )
}
