import { USER_LOGIN_ERROR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./userRegisterTypes"

const initialState={
    loading:false,
    error:false,
    success:false

}
const initialStatelogin={
    loading:false,
    error:false,
    success:false,
   
}
export const userRegisterReducer=(state=initialState,{type,payload})=>{
switch(type){
    case USER_REGISTER_LOADING:{
        return{
            ...state,
            loading:true,
            error:false,
            success:false
        }
    }
    case USER_REGISTER_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            success:true
        }
    }
    case USER_REGISTER_ERROR:{
        return{
            ...state,
            loading:false,
            error:payload,
            success:false
        }
    }
    default:return {...state}
}
}

export const userLoginReducer=(state=initialStatelogin,{type,payload})=>{
    switch(type){
        case USER_LOGIN_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
                success:false,
               
            }
        }
        case USER_LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                success:true,
             
                currentuser:payload
            }
        }
        case USER_LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:payload,
                success:false
            }
        }
        default:return {...state}
    }
    }