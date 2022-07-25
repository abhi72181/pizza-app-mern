const express=require("express")

const router=express.Router()

const User=require("../models/UserRegisterModel")

router.post("/register",async(req,res)=>{
  try {
    const user=await User.create(req.body)
    return res.status(200).send({success:true,message:"Register Success",user:user})

  } catch (error) {
    return res.status(500).send({message:error})
  }
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.find({email,password})
        console.log(user)
        if(user.length>0){
            const currentuser={
                name:user[0].name,
                email:user[0].email,
                password:user[0].password,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.status(200).send(currentuser)
        }
        else{
            res.status(400).send("login failed")
        }
    } catch (error) {
        return res.status(400).send({message:error})
    }
})
module.exports=router