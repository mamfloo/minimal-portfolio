import prisma from "@/prisma/dbConnect";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const projects = await prisma.project.findMany();
        return NextResponse.json(projects, {status: 200});
    } catch(e) {
        return NextResponse.json({message: "There was an error while fetching data!"}, {status: 500})
    }
    
}