const mongoose =require("mongoose")

const userSchima=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true,
        enum:["male","female","others"]
    },
    isVerified:{
        type:Boolean,
        require:true,
        default:false
    },
    password:{
        type:String,
        require:true
    },
},{timestamps:true})

const userModel=mongoose.model("users",userSchima)
module.exports={userModel}