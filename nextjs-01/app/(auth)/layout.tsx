
export default function AuthLayout( {children}: Readonly<{
  children: React.ReactNode;
}>){

    return(
        
  <div className="flex">
        <div className="p-4 top-0 left-0  h-screen w-24 bg-gray-700 border">
          auth sidebar
        </div>

        {children}
        
     </div>
        
    )
}