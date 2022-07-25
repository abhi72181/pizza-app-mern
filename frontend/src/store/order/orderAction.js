import axios from "axios"
import { store } from "../store"
import {PLACEORDER_REQUEST,PLACEORDER_SUCCESS,PLACEORDER_ERROR} from "./orderType"
export const placeOrderAction=(token,subTotal)=>async(dispatch)=>{
 dispatch({type:PLACEORDER_REQUEST})
 const currentUser=store.getState().userLoginReducer.currentuser
 const cartItems=store.getState().addToCart.cartItems

 try {
    const res=await axios.post("/api/orders/placeorder",{token,subTotal,currentUser,cartItems})
    dispatch({type:PLACEORDER_SUCCESS})
   //  console.log(res,"res")
 } catch (error) {
    dispatch({type:PLACEORDER_ERROR})
    console.log(error)
 }

}