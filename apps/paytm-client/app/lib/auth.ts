import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import db from "@repo/db/client"

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                phone: { label: "Phone number", type: "text", placeholder: "1234567890", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials:any){
                const hashedPassword = await bcrypt.hash(credentials.password,10);
                const existingUser = await db.user.findFirst({})
            }
        })
    ]
}