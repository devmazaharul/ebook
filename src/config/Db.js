const mongoose=require("mongoose")

mongoose.connect(process.env.db_url).then(()=>{
    console.log("Db connected")
}).catch(()=>{
    console.log("Db not connected")
})