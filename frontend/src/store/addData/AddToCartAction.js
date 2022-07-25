import { store } from "../store"
import { ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, DELETE_PIZZA_SUCCESS } from "./AddCartType"
const cartLength=store.getState().addToCart.cartItems.length
// console.log(cartLength,"cartlength")
export const addPizzasToCart=(pizza,varient,quantity)=> (dispatch)=>{
    var cartItem={
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:Number(quantity),
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity
    }

    if(cartItem.quantity>10){
        alert("you can add only 10 items")
    }
    else{
        if(cartItem.quantity<1){
            dispatch({type:DELETE_PIZZA_SUCCESS,payload:pizza})
        }
       
        else{
            dispatch({type:ADD_TO_CART_LOADING})
   
            dispatch({type:ADD_TO_CART_SUCCESS,payload:cartItem})
        //  console.log(store.getState(),"getState")
        
            localStorage.setItem("cartData",JSON.stringify(store.getState().addToCart.cartItems))
        }
    }
   
}

export const deleteCart=(pizza)=>(dispatch)=>{
    dispatch({type:DELETE_PIZZA_SUCCESS,payload:pizza})
    localStorage.setItem("cartData",JSON.stringify(store.getState().addToCart.cartItems))
}

