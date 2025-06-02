import express from "express";
import db from "@repo/db/client"

const app = express();

app.post('/hdfcWebHook', (req,res)=>{
    const paymentInformatin = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try{
        db.$transaction([
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