import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
// export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzasReducer } from "./getData/pizzaReducer"
import { addCartReducer } from "./addData/AddCartReducer"
import { userRegisterReducer } from "./userRegister/registerReducer"
import { userLoginReducer } from "./userRegister/registerReducer"
import {orderReducer} from "./order/orderReducer"

const rootReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer,
    addToCart:addCartReducer,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    orderReducer:orderReducer
  
})
const cartItems=JSON.parse(localStorage.getItem("cartData")) || []
const currentuser=JSON.parse(localStorage.getItem("currentUser")) || []
const initialState={
addToCart:{
    cartItems:cartItems  
},
userLoginReducer:{
    currentuser:currentuser
}
}
export const store=legacy_createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))