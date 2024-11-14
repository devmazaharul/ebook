export const signUpvalidation=(state)=>{
const {name,email,gender,address,password}=state
  
    try {
        var result={
            message:"",
            status:""
        }
        if(name.length!=="" && email!=="" && gender!=="" && address!==""&&password!==""){
           result={
            
            status:200,
            message:"Successfully"
           }
       
        }else{
           result.message="fild"
           result.status=201
      
        }
        return result
    } catch (error) {
        result.message="connection error"
        result.status=500
        return result
    }
    
}

export const bookAddvalidation=(state)=>{
    const {title,desc,publish_date,price,pages,catagory,author}=state

    const result={}
    if(title && desc &&publish_date&&price&&pages&&catagory&&author){
       if(title.length>6 && title.length<39){
        result.message="success"
        result.statusCode=200
       }else{
        result.message="Titile min 6 and max 30 charcter"
        result.statusCode=201
       }
    }else{
        result.message="not ok"
        result.statusCode=202
    }
    return result
}