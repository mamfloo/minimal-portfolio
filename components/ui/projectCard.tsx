import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import img from '@/public/web.webp'
import Image from 'next/image'
import { Badge } from "./badge"
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex flex-col items-center p-1">
        <Image width={300} src={img} alt="project-image" className="mb-3 rounded-md"/>
        <CardTitle className="mt-8">Open MU Web</CardTitle>
        <CardDescription className="text-primary">Mu Online CMS for Mu Online servers</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-2 p-1">
        <Badge variant="outline">NextJS</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Prisma</Badge>
        <Badge variant="outline">Tailwind</Badge>
      </CardContent>
      <CardFooter className="flex justify-center gap-3 mt-2">
        <Link href={"#"} className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
          <ExternalLink />
        </Link>
        <Link href={"#"} className="text-muted-foreground hover:text-primary hover:scale-100 scale-90">
          <Github />
        </Link>
      </CardFooter>
    </Card>
  )
}
