import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@/app/generated/prisma';


const prismaClient = new PrismaClient();    //instance of prisma client.
export async function POST(req:NextRequest) {

    //here how req.body???  --> using nextrequest.

    const data=await req.json();
   // console.log(data)
   // console.log('backend msg-----------------------------'+ data.user)

   await prismaClient.user.create({
    data:{
        username: data.user,
        email:data.ema,
        password:data.pass
    }
   })

    return NextResponse.json({
        message:'You have signed up successfully !'
    })
    
}