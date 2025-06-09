import express from "express";
import db from "@repo/db/client"

const app = express();
app.use(express.json())

app.post('/hdfcWebHook', async (req,res)=>{
    const body = req.body;

    const paymentInformatin:{
        token:string,
        userId:number,
        amount:number
    } = {
        token: body.token,
        userId: body.user_identifier,
        amount: body.amount
    };

    const transactionStatus = await db.onRampTransaction.findFirst({
        where:{
            token:paymentInformatin.token
        },select:{
            status: true
        }
    })

    if(transactionStatus?.status !== "Processing"){
        return res.status(409).json({
            message:"Transaction already executed"
        })
    }


    try{
        await db.$transaction([
            db.balance.update({
            where:{
                userId: paymentInformatin.userId
            },
            data: {
                amount:{
                    increment: paymentInformatin.amount
                }
            }
            }),

            db.onRampTransaction.update({
                where:{
                    token: paymentInformatin.token
                },
                data:{
                    status: "Success"
                }
            })
        ]);
        
        res.status(200).json({
            message: "captured"
        })
    }catch(e){
        res.status(411).json({
            message:"error while processing"
        })
    }
})


app.listen(3003)