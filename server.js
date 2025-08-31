const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const CustomerModel=require("./models/Customer")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Customer");

app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  CustomerModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }else {
        res.json("Password not correct")
      }
    } else{
      res.json("No, user found")
    }
  })
  .catch(err=>res.json(err));
})

app.post('/signup',(req,res)=>{
  CustomerModel.create(req.body)
  .then(Customer=>res.json(Customer))
  .catch(err=>res.json(err))
})

app.listen(3001,()=>{
  console.log("server is running")
})