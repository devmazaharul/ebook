const { registerAdmin, loginAdmin } = require("../middlewares/admin.controlller")

const admin=require("express").Router()

admin.post("/api/adminregister",registerAdmin)
admin.post("/api/adminlogin",loginAdmin)
admin.get("/admin",(req,res)=>{
    res.json({message:"hellow"})
})

module.exports={admin}