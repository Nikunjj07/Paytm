import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"

export default async()=>{
    const session = await getServerSession(authOptions);//
    const user = session.user.name || session.user.email || "User";
    return(
        <div className="">
            
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Hello,&nbsp;
                </span>
                {user}
            </h1>

        </div>
    )
}