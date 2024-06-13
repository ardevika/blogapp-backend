const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const bcryptjs=require("bcryptjs")
const {blogmodel} = require("./models/blog.js")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ardevika:devutty6801@cluster0.zcokhip.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0")
const generateHashedPassword=async(password)=>{
    const salt=await bcryptjs.genSalt(10)
    return bcryptjs.hash(password,salt)

}

app.post("/signup",async(req,res)=>{
    let input =req.body
    let hashedpassword=await generateHashedPassword(input.password)
    console.log(hashedpassword)
    res.json({"status":"success"})
})

app.listen(8081,()=>{
    console.log("server started")
})