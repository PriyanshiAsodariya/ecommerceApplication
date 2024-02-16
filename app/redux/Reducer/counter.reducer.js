import { INCREMENT_COUNTER } from "../actiontype";

const intializeState = {
    count :0
}

export const counterReducer = (state=intializeState, action) =>{
    console.log(action);
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,  
                count : state.count + 1
            }
            default:
                return state
    }
}