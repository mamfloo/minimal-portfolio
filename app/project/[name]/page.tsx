import Link from 'next/link'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import ProjectCarousel from '@/components/ui/projectCarousel'
import { IoMdArrowRoundBack } from "react-icons/io";
import prisma from '@/prisma/dbConnect';

export default async function Project({params}: {params: {name: string}}) {

  const project = await prisma.project.findFirst({
    where: {
      name: params.name
    }
  })

  return (
    <div className='flex flex-col pt-32 items-center justify-center'>
      <div className='w-full p-4 gap-10 flex flex-col lg:w-3/6 md:w-4/6 relative'>
        <div className='w-10 h-10 hidden -left-14 top-3 rounded-full bg-background border-primary border-2 xl:flex items-center justify-center xl:absolute'>
          <Link href={'/#projects'}>
            <IoMdArrowRoundBack  size={30}/>
          </Link>
        </div>
        <div>
            <p className='mb-4'>{project?.category}</p>
            <h1 className='text-6xl font-semibold'>{project?.descriptionName}</h1>
        </div>
        <div className='flex flex-col gap-5 mt-14 mb-14 2xl:flex-row'>
          <div className='w-full 2xl:w-3/5'>
              <p>{project?.description} </p>
          </div>
          <div className='h-max flex items-center gap-2'>
            {project?.techstack.map((ts, i) => <Badge variant="outline" key={i}>{ts}</Badge>)}
          </div>
        </div>
        <div className='h-full'>
            <ProjectCarousel name={project!.name}></ProjectCarousel>
        </div>
      </div>
    </div>
  )
}
