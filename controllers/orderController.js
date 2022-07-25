const express=require("express")
const router=express.Router()
const {v4:uuidv4}=require("uuid")
const stripe = require('stripe')('sk_test_51LOl9nSH3drTIu7RVF6yA0p88TW4ANLi3XObMLsojVO6qswi8p71RoOEnpgPJnsjosk0z9ak8SX32r3L41vh2Drb00NEXHz5X6');

router.post("/placeorder",async(req,res)=>{
    const {token,subTotal,currentUser,cartItems}=req.body
    try {
        const customer=await stripe.customers.create({
            email:token.email,
            source:token.id,
        })
        const payment=await stripe.charges.create({
            amount:subTotal * 100,
            currency:"inr",
            customer:customer.id,
            receipt_email:token.email,
        },{
            idempotencyKey:uuidv4()
        })
        if(payment){
            res.send("Payment Success")
        }else{
            res.send("Payment Failed")
        }
    } catch (error) {
        res.status(400).send({message:"Something Went Wrong"})
        
        error:error.stack
    }
})

module.exports=router