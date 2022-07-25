import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
// import {unstable_HistoryRouter} from "react-router-dom"
const PrivateRoute = ({isAuth,children}) => {
    // const navigate=useNavigate()
    // const isAuth=useSelector((state)=>state.userLoginReducer)
    const location=useLocation()
    // console.log("location in req",location)
   const from={
    pathname:location.pathname
   }
   
  
  if(isAuth.length<1){
    return <Navigate to={"/login"} state={from} replace/>
  
  } 
  return children
  
   
     
 
}

export default PrivateRoute