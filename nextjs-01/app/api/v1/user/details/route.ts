
//### since it is a backend route so it might return obj or html so we can't name its as page.tsx 
//therefeore we use name ---> route.tsx for the backend route
//### also here no need to write tsx since we are not returning xml from backend.


//-------------- syntax for backend handling  ----------------------------
import { NextResponse } from "next/server";


//get endpoint handler-
export function GET() {
    
    return NextResponse.json({
        name:"aditya",
        email:"adityarajxdev@gmail.com"
    })
}


//Post endpoint handler-
export function POST() {
    
    return NextResponse.json({
        name:" post aditya",
        email:"adityarajxdev@gmail.com"
    })
}


//Put endpoint handler-
export function PUT() {
    
    return NextResponse.json({
        name:" put aditya",
        email:"adityarajxdev@gmail.com"
    })
}



//delete endpoint handler-
export function DELETE() {
    
    return NextResponse.json({
        name:" delete aditya",
        email:"adityarajxdev@gmail.com"
    })
}


