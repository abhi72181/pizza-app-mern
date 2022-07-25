 import { GET_ALL_PIZZA_LOADING } from "./pizzaTypes";
 import { GET_ALL_PIZZA_SUCCESS } from "./pizzaTypes";
 import { GET_ALL_PIZZA_ERROR } from "./pizzaTypes";

 const initialState={
    getPizza:{
        loading:false,
        error:false,
        data:[]
    }
 }

 export const getAllPizzasReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_PIZZA_LOADING:{
            return {
                ...state,
                getPizza:{
                    loading:true,
                    error:false,
                    data:[]
                }
            }
           
        }

        case GET_ALL_PIZZA_SUCCESS:{
            return {
                ...state,
                getPizza:{
                    loading:false,
                    error:false,
                    data:payload
                }
            }
           
        }

        case GET_ALL_PIZZA_ERROR:{
            return {
                ...state,
                getPizza:{
                    loading:false,
                    error:true,
                    data:payload
                }
            }
           
        }
        
        default: return {...state}
    }
 }