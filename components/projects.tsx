import React from 'react'
import ProjectCard from './ui/projectCard'

export default function Projects() {
  return (
    <section className="grid grid-cols-2 justify-center gap-10" id="projects">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
    </section>
  )
}
