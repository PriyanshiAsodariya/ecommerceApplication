import { INCREMENT_COUNTER } from "../actiontype"


export const increment = ()=>(dispatch)=>{
    dispatch({type : INCREMENT_COUNTER})
}
