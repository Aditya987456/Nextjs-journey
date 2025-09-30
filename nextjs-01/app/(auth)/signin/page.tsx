"use client"


import axios from "axios"
import { useRef } from "react"

export default function Signin() {

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    
    return(
           // full screen div
  <div className="flex justify-center items-center"> 

{/* box---- */}
    <div className="border p-4 w-2xl m-12 rounded flex-row justify-center items-center">

{/* header--> app title + text */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl m-2">Second BrAIn</div>
        <div>A semantic memory for your digital life.</div>
      </div>

      <div className="p-2 text-3xl mt-10 flex justify-center items-center">SIGNIN</div>


      <div className="flex flex-col mt-8 justify-center items-center w-full">
        
        <div><input ref={email} className="border p-2 m-2" type="text" placeholder="EmailId..." /></div>
        <div><input ref={password} className="border p-2 m-2" type="text" placeholder="Password..." /></div>
      </div>

      <div className="mt-8 flex justify-center items-center"><button className="border-2 p-2 bg-purple-950 rounded-full cursor-pointer"
      onClick={ async ()=>{
        //alert('your sinin name and pass --'+ email.current?.value + " " + password.current?.value)
     
        try {
            
            await axios.post(`http://localhost:3000/api/v1/user`, {
                email,
                password

            })
        } catch (error) {
            console.log('Error in signing in ---->> '+ error)
        }



     } }
      >Sign-in</button></div>
      

    </div>
  
  </div>
    )
}