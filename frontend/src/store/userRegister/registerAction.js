import axios from "axios"
import { USER_LOGIN_ERROR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./userRegisterTypes"

export const userRegisterAction=(user)=>async(dispatch)=>{
  dispatch({type:USER_REGISTER_LOADING})
  try {
    const res=await axios.post("/api/users/register",user)
    dispatch({type:USER_REGISTER_SUCCESS})
    window.location.href="/login"
  } catch (error) {
    dispatch({type:USER_REGISTER_ERROR,payload:error})
  }
}

export const userLoginAction=(user)=>async(dispatch)=>{
    dispatch({type:USER_LOGIN_LOADING})
    try {
      const res=await axios.post("/api/users/login",user)
      dispatch({type:USER_LOGIN_SUCCESS,payload:res.data})
      localStorage.setItem("currentUser",JSON.stringify(res.data))
      window.location.href="/"
    } catch (error) {
      dispatch({type:USER_LOGIN_ERROR,payload:error})
    }
  }

  export const logoutUser=()=>(dispatch)=>{
    localStorage.removeItem("currentUser")
    localStorage.removeItem("cartData")
    window.location.href="/login"
  }