require("dotenv").config()
const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./src/config/Db')
const cors=require("cors")
const { admin } = require("./src/routes/admin.route")
app.use(cors())
app.use(admin)

module.exports={app}

