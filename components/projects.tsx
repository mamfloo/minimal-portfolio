import React from 'react'
import ProjectCard from './ui/projectCard'
import prisma from '@/prisma/dbConnect'


export default async function Projects() {

  const projects = await prisma.project.findMany({
    orderBy: {
      relevance: "asc"
    }
  }
  );

  return (
    <section className="grid grid-cols-1 w-full px-14 lg:w-4/6 2xl:w-2/5 lg:px-0 lg:grid-cols-2 justify-center gap-10" id="projects">
      {
        projects.map((p, i) => (
              <ProjectCard project={p} key={i}></ProjectCard>
            )
          )
        }
    </section>
  )
}
