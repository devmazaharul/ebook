import { getPost } from "@/action"

export  default async function page(){
   const posts= await getPost(20)
return (
    <div className="p-3 ">
    <h1>Post table</h1>
    <table className="border p-2 w-[90%] mx-auto shadow-md bg-white">
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
        </tr>
        {posts.map((list)=>{
            return (
                <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.body}</td>
            </tr>
            )
        })}
    </table>
    </div>
)




}