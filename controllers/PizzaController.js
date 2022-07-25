const express=require("express")

const router=express.Router()

const Pizza=require("../models/PizzaModel")

router.get("/getAllPizzas",async (req,res)=>{
    try {
        const pizzas = await Pizza.find({})
         res.send(pizzas)
         console.log(pizzas)
    } catch (error) {
         res.json({message:error})
         console.log(error)
    }
})

module.exports=router