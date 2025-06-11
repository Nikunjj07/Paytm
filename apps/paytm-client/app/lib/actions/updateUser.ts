'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export default async function updateUser(name:string,email:string){
    const session = await getServerSession(authOptions);
    console.log(session)
    if(!session.user){
        return NextResponse.json({
            message: "not logged in"
        })
    }
    
    await prisma.user.update({
        where: {
            id: Number(session.user.id)
        },
        data:{
            name:name,
            email:email
        }
    })
    
    console.log(session.user)
    return NextResponse.json({
        message:"user updated successfully"
    })
}