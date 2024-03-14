"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React, { useRef } from 'react'
import Image from 'next/image'
import { Badge } from "./badge"
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"
import { useRouter } from "next/navigation"
import { Project } from "@prisma/client"
import { motion, useScroll, useTransform } from "framer-motion"


export default function ProjectCard({project}: {project: Project}) {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1.0"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const router = useRouter()
  const image = require(`../../public/projects/${project.name}/1.png`)

  return (
    <motion.div 
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress
      }}
      >
      
        <Card className="border-0 shadow-none hover:cursor-pointer"
            onClick={() => router.push("/project/" + project.name)}>
          <CardHeader className="flex flex-col items-center p-1">
            <Image src={image} alt="project-image" className="mb-3 rounded-md"/>
            <CardTitle className="mt-8">{project.descriptionName}</CardTitle>
            <CardDescription className="text-primary">{project.description.length > 200 ? project.description.slice(0, 200).concat("...") : project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-2 p-1">
            {
              project.techstack.map((ts, i) => <Badge key={i} variant="outline">{ts}</Badge>)
            }
          </CardContent>
          <CardFooter className="flex justify-center gap-3 mt-2">
            {
              project.link !== "" &&
              <Link href={project.link} 
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                <ExternalLink />
              </Link>
            }
            {
              project.githubLink !== "" &&
              <Link href={project.githubLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
                <Github />
              </Link>
            }
          </CardFooter>
        </Card>
      </motion.div>
  )
}
