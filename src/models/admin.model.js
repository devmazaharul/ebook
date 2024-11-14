const mongoose=require("mongoose")

const adminSchima=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    isVerified:{
        type:Boolean,
        default:false
    },
    password:String,
})

const adminModel=mongoose.model("admintable",adminSchima)
module.exports={adminModel}