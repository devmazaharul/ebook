const { adminModel } = require("../models/admin.model")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")

 const registerAdmin=async(req,res)=>{
try {
    
    // const {phone,password}=req.body
    const chekAdmin=await adminModel.findOne({phone:'01797575933'})
    if(chekAdmin){
        return res.status(201).json({message:"Allready have an account"})
    }else{
        const hashPass=await bcrypt.hash('maza123',10)
       const newAdmin=new adminModel({
        name:"mazahrul islam",
        phone:"01797575932",
        email:"expertmaazaharul@gmail.com",
        password:hashPass,
        isVerified:true
       })
       const saveAdmin=await newAdmin.save()
       if(saveAdmin){
        return res.status(200).json({message:"successfully create account"})
       }else{
        return res.status(202).json({message:"Something went wrong"})
       }
    }



} catch (error) {
    return res.status(500).json({message:"Server error"})
}
}


const loginAdmin=async(req,res)=>{
    try {

        const {phone,password}=req.body
     
        const chekAdmin=await adminModel.findOne({phone:'01797575932'})
        const comparePass=bcrypt.compareSync(password,chekAdmin.password)
        if(chekAdmin && comparePass ){  
            const gensign=jwt.sign({email:chekAdmin.email}, "amarsonar")
    
           res.status(200).json({message:"successfully login",token:gensign})

        }else{
            res.status(201).json({message:"invlidn credintials"})
        }

    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}


module.exports={registerAdmin,loginAdmin}