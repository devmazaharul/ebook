const mongoose =require("mongoose")


const bookschima=new mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    avatar:{
        require:true,
        type:String
    },
    author:{
        require:true,
        type:String
    },
    price:{
        require:true,
        type:Number,
        default:0
    },
    catagory:{
        require:true,
        type:String
    },
    stock:{
        require:true,
        type:Number,
        default:0
    },
    discount:{
        require:true,
        type:String,
        default:0
    },
    desc:{
        type:String,
        require:true
    },
    publish_date:String,
    upload_date:String,
    pages:String



},{timestamps:true})

const bookModel=mongoose.model("book",bookschima)
module.exports={bookModel}