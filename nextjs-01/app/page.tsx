import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // full screen div
  <div className="flex justify-center items-center"> 

{/* box---- */}
    <div className="border p-4 w-2xl m-12 rounded flex-row justify-center items-center">

{/* header--> app title + text */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl m-2">Second BrAIn</div>
        <div>A semantic memory for your digital life.</div>
      </div>


      <div className="flex flex-row m-12 justify-evenly items-center">
        <Link className="border text-xl rounded p-2 hover:bg-gray-800" href="/signup" ><button className="cursor-pointer">SignUp</button></Link>
        <Link className="border text-xl rounded p-2 hover:bg-gray-800" href="/signin" ><button className="cursor-pointer">SignIn</button></Link>
      </div>
      

    </div>
  
  </div>
  );
}
