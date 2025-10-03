"use client"


import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { json } from "stream/consumers";


export default async function Home() {
  const session = await getServerSession();
  
  return (
    // <SessionProvider>

    //   <div className="text-4xl m-4">------------------ Learning NextAuth ----------------</div>
    // <SessionTrack/>


    // </SessionProvider>


    <div>

      {JSON.stringify(session)}

    </div>


    
  );
}



// function SessionTrack(){
//   const session = useSession();

//   return <div>
//     {session.status == "authenticated" && <button
//     onClick={ ()=>{signOut()}}
//     className="p-2 m-4 border"
//     > Sign Out</button>}

//     {session.status == "unauthenticated" && <button
//     onClick={ ()=>{signIn()}}
//     className="p-2 m-4 border"
//     > Sign In</button>}

//   </div>
// }



