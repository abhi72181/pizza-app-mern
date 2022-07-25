import { GET_ALL_PIZZA_LOADING } from "./pizzaTypes";
import { GET_ALL_PIZZA_SUCCESS } from "./pizzaTypes";
import { GET_ALL_PIZZA_ERROR } from "./pizzaTypes";
import axios from "axios"
export const getAllPizzas=()=> async (dispatch)=>{
    dispatch({type:GET_ALL_PIZZA_LOADING})
    try {
        const res=await axios.get("/api/pizzas/getAllPizzas")
        // console.log(res.data)
        dispatch({type:GET_ALL_PIZZA_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_ALL_PIZZA_ERROR,payload:error})
    }
}

export const filterPizzaAction=(search,category)=>async (dispatch)=>{
    let filteredPizza
    dispatch({type:GET_ALL_PIZZA_LOADING})
    try {
        const res=await axios.get("/api/pizzas/getAllPizzas")
        filteredPizza= res.data.filter((e)=>e.name.toLowerCase().includes(search))
        // filteredPizza= res.data.filter((e)=>e.name.toLowerCase() == search) 
        // console.log(filteredPizza,"filter")
        if(category!="all"){
            filteredPizza= res.data.filter((e)=>e.category.toLowerCase()==category)
        }
        dispatch({type:GET_ALL_PIZZA_SUCCESS,payload:filteredPizza})
    } catch (error) {
        dispatch({type:GET_ALL_PIZZA_ERROR,payload:error})
    }
}
