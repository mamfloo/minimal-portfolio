import prisma from "@/prisma/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse, {params}: {params: {name: string}}) {
    try {
        const name = params.name;

        const project = await prisma.project.findFirst({
            where: {
                name: name
            }
        })
        return NextResponse.json(project, {status: 200});
    } catch(e){
        return NextResponse.json({message: "There was an error while fetching data!"}, {status: 500})
    }
}