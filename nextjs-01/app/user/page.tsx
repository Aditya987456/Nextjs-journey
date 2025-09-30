//whenever we have to use things like usestate , useeffect..and more like things then we have to convert page to client component.
//because server component cannot use the usestate, useeffect like things.

// "use client"

 import axios from "axios";
// import { useEffect, useState } from "react"


// export default function User() {

//     const [loader, setLoader ]=useState(true)

//     const [data, setData ]=useState();

// //************************************************ imp************************************** */
// //--###### Note- but this is not the right way to fetch data from server it is client side rendering again which is same as react.

// //this useeffect running on clent.
//    useEffect( ()=>{

    
//     const fetchdata = async () => {
//         try {
//             const response = await axios.get(`https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details`)
//             setData(response.data)
//             console.log('user data fetched successfully '+response.data)

//         }catch (error) {
//             console.log('Error in fetching user data'+error)
//         }finally{
//             setLoader(false)
//         }
//     }

//     fetchdata();  //calling function

//    }, [] )


//     if(loader){
//     return <div>
//         Loading...
//     </div>
//    }




//     return(
//         <div>

//             <div className="p-4 border-2 flex-row justify-center items-center bg-gray-600 shadow-2xl">
//                 <div>User fetched data</div>
//                 <div>Name:{data.name}</div>
//                 <div>Email:{data.email}</div>
//             </div>

//         </div>
//     )
// }





//--******************** now using nextjs for fetching correct way for SSR  **********************
//## now it is server component because it not use useeffect, usestate.....like things.

export default async function User() {

    const response=await axios.get(`http://localhost:3000/api/v1/user/details`)
    
    //######  creates a Promise that resolves after 5 seconds.--> that it stops the even async function for 5 sec then go to next line ----
    //if only promise no await then next line gets executed not wait for 5 sec.
//await new Promise( r => setTimeout(r, 5000))

    const data = response.data
    console.log('this is runnug on server')

    return(
        <div>

            <div className="p-4 border-2 flex-row justify-center items-center bg-gray-600 shadow-2xl">
                <div>User fetched data</div>
                <div>Name:{data.name}</div>
                <div>Email:{data.email}</div>
            </div>

        </div>
    )
}