export const getPost=async(len=10)=>{
 const res=await fetch("https://jsonplaceholder.typicode.com/posts")
const result=await res.json()

var newArr=[]

for (let i = 0; i <len; i++) {
newArr.push(result[i])
}
return newArr
}


