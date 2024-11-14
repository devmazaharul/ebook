const mongoose =require("mongoose")

const orderSchima=new mongoose.Schema({
    

},{timestamps:true})

const orderModel=mongoose.model("order",orderSchima)
module.exports={orderModel}