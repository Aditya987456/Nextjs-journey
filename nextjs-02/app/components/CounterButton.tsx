"use client"
import { useState } from "react"


export default function CounterButton() {
    
    const [count, setCount ]=useState(0)

    return <div>
        <button
        className="border p-2 rounded-2xl m-4"
        onClick={()=>{setCount(c=>c+1)}}
        
        >Click me! {count} </button>
    </div>
}