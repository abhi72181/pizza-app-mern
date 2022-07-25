
import {PLACEORDER_REQUEST,PLACEORDER_SUCCESS,PLACEORDER_ERROR} from "./orderType"
const initialState={
    loading:false,
    error:false,
    success:false
}
export const orderReducer=(state=initialState,{type,payload})=>{
   switch(type){
    case PLACEORDER_REQUEST:{
        return {
            ...state,
            loading:true,
            error:false,
            success:false
        }
    }

    case PLACEORDER_SUCCESS:{
        return {
            ...state,
            loading:false,
            error:false,
            success:true
        }
    }

    case PLACEORDER_ERROR:{
        return {
            ...state,
            loading:false,
            error:payload,
            success:false
        }
    }

    default : return {...state}
   }
}