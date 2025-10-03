
export default async function Blogspage({params}:{
    params:Promise<{
        blogId:string
    }>
}) {
    const blogidArray = (await params).blogId    //is await in params really need????

    return <div>
        {/* blogid -->  here will be array therefore stringify */}
        Blog route array for catch all segment is : { JSON.stringify(blogidArray) }
    </div>
    
}