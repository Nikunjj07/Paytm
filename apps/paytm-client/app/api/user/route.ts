import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../lib/auth"

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session){
        return NextResponse.json({
            user: session.user
        })
    }return NextResponse.json({
        Message: "You are not logged in!"
    },{
        status:403
    })
}