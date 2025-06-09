import { Card } from "@repo/ui/card"

export const TransactionsCard = ({transactions}:{
    transactions:{
        timestamp: Date,
        amount:number,
        // TODO: Can the type of `status` be more specific?
        toUser: string
    }[]
})=>{
    if (!transactions) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Transactions">
            <div >
                {transactions.map(t => <div key={`${t.timestamp.toISOString()}-${t.amount}`} className="flex justify-between mt-4">
                <div>
                    <div className="text-sm">
                        Sent INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.timestamp.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
            </div>
    </Card>
}