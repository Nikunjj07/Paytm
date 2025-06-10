import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import { redirect } from "next/navigation";

export default async function(){
    const session = await getServerSession(authOptions);
    if(session?.user){
        redirect('/dashboard')
    }
    return <div className="p-4">
        <div className="h-screen w-3/4 p-6 bg-blue-100 rounded-4xl pt-20">
            <div className="text-6xl font-bold italic">
                <div className="p-2">
                    Fast, Safe
                </div>
                <div className="p-2">
                    Social Payments
                </div>
            </div>
            <div className="px-2 mt-10 text-lg text-gray-500">
                Pay, get paid, grow a business, and more!
            </div>
        </div>
    </div>
}