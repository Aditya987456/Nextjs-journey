import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {

    //here how req.body???  --> using nextrequest.

    const data=await req.json();
    console.log(data)
    console.log('backend msg-----------------------------'+ data.user)


    return NextResponse.json({
        message:'You have signed up successfully !'
    })
    
}