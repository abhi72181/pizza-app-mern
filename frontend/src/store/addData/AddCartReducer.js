import {  ADD_TO_CART_SUCCESS, DELETE_PIZZA_SUCCESS } from "./AddCartType"

const initialState={
  
     loading:false,
     error:false,
    cartItems:[]
   
}

export const addCartReducer=(state=initialState,{type,payload})=>{
    switch(type){

       

        case ADD_TO_CART_SUCCESS:{
            const exists=state.cartItems.find((item)=> item._id===payload._id)

            if(exists){
                return {
                    ...state,
                    cartItems:state.cartItems.map((item)=>item._id===payload._id ? payload : item)
                }
            }
            else{
                return {
                    ...state,
                    loading:false,
                      error:false,
                      cartItems:[...state.cartItems,payload]
                 
                   
                }
            }
          
           
        }
        case DELETE_PIZZA_SUCCESS:{
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>item._id!==payload._id)
            }
        }

      
        default: return {...state}
    }
 }

