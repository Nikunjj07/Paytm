import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

async function main(){

    const alice = await prisma.user.upsert({
        where:{
            number:"123456789"
        },
        update:{},
        create:{
            number:"123456789",
            password: await bcrypt.hash("alice",10),
            name:"alice",
            Balance:{
                create:{
                    amount:20000,
                    locked:100
                }
            },
            OnRampTransaction:{
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "122",
                    provider: "HDFC Bank",
                },
            },
        },
        
    })

    const bob = await prisma.user.upsert({
        where: { number: '9999999998' },
        update: {},
        create: {
            number: '9999999998',
            password: await bcrypt.hash("bob",10),
            name: 'bob',
            Balance:{
                create:{
                    amount:15000,
                    locked:200
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "123",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    console.log(alice); 
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})