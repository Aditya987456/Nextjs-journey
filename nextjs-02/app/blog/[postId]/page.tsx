import axios from "axios";




async function gettodo(postNo:string) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postNo}`)
        return response.data
    } catch (error) {
        console.log('Error in fetching blog.')
    }
}


//?????????????? what is type promise here??? ????????
export default async function Blogpost({params}:{
    params:Promise<{
        postId:string
    }>
}) {

// ###### params is a promise we have to await this
    const postNo=(await params).postId
    const postcontent= await gettodo(postNo)



    return <div>
        <div>Blog post - {postNo}</div>
        <div>
            <span>Title : {postcontent.title}</span>
            <br />
            <span>Status : {postcontent.completed ? <span>True</span> : <span>False</span>} </span>
        </div>
    </div>
    
}