import axios from "axios"



//fetching from api...
async function Gettodos() {
    
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        console.log("Todos Fetched successfully.....")
        return response.data
    }catch(err){
        console.log('error in fetching todos..... : '+ err)
    }
}



//showing o/p ----
export default async function Alltodos() {

    const getalltodos=await Gettodos();


    return(

        <div>
            {getalltodos.map( (tudu:InterfaceTodo) =>
                <Todo
                title={tudu.title} completed={tudu.completed} id={tudu.id}
                ></Todo>
            )}
        </div>
    )
}


//Todo component for showing in todos formate----


//interface of the todos types.
interface InterfaceTodo {
    title:string,
    id:number,
    completed:boolean
}


function Todo({title, id, completed}:InterfaceTodo){
    return <div>
        
        <div className={`text-black ${completed?'bg-green-300':'bg-red-400'} `}>
            <h3>{id} : {title}</h3>
        </div>

    </div>
}






//------csr on todo/[id]

// import { useRouter } from "next/router";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface InterfaceTodo {
//   title: string;
//   id: number;
//   completed: boolean;
// }

// export default function Alltodos() {
//   const router = useRouter();
//   const { no } = router.query;
//   const [todo, setTodo] = useState<InterfaceTodo | null>(null);

//   useEffect(() => {
//     if (!no) return;
//     axios
//       .get(`https://jsonplaceholder.typicode.com/todos/${no}`)
//       .then((res) => setTodo(res.data))
//       .catch(console.error);
//   }, [no]);

//   if (!todo) return <p>Loading...</p>;

//   return (
//     <Todo title={todo.title} completed={todo.completed} id={todo.id} />
//   );
// }

// function Todo({ title, id, completed }: InterfaceTodo) {
//   return (
//     <div className={`text-black ${completed ? "bg-green-300" : "bg-red-400"}`}>
//       <h3>{id} : {title}</h3>
//     </div>
//   );
// }
