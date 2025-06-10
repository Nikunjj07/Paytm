"use client"
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react"
import updateUser from "../app/lib/actions/updateUser";

export function UpdateCard(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-row justify-center">
                <div className="p-6 border-2 rounded-xl">
                    
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Update Details
                        </span>
                    </h1>
                    <TextInput label="Name" placeholder="John Doe" onChange={(v)=>{
                        setName(v)
                    }}/>
                    <TextInput label="Email" placeholder="johndoe@email.com" onChange={(v)=>{
                        setEmail(v)
                    }}/>
                    <br />
                    <Button onClick={()=>{
                        updateUser(name,email)
                    }}>Submit</Button>
                </div>
        </div>
    </div>
}