import { Session } from "inspector/promises"
import { TransactionsCard } from "../../../components/TransactionsCard"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import prisma from "@repo/db/client";

async function getTransactions(){
    const session = await getServerSession(authOptions);
    const trans = await prisma.p2pTransfer.findMany({
        where:{
            fromUserId:Number(session.user.id)
        }
    })
    return trans.map(t => ({
        timestamp: t.timestamp,
        amount: t.amount,
        toUser: t.toUserId
    }))
}

export default async()=>{
    const transactions = await getTransactions();
    return(
       <div className="p-2 w-full">
            <TransactionsCard transactions={transactions}/>
       </div>
    )
}