import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-test-renderer";

const initialState = {
    isloading : 'false',
    crud :[],
    error : null
}


const crudSlice = createSlice({
    name : 'crud',
    initialState,
    reducers :{
        adduser  : (state , action) =>{
            // console.log("AAAAAAAAAAAAAAAAAAAAAAA",action.payload);
            state.crud.push(action.payload);
        },
        deleteuser : (state , action) =>{
            // console.log("DDDDDDDDDDDDDDDDDD",action.payload);
            state.crud = state.crud.filter((v) => v.id !== action.payload)
        },
        edituser : (state , action) =>{
            console.log("edittttttttttt",action.payload);
            state.crud = state.crud.map((v)=>{
                if(v.id === action.payload.id){
                    return action.payload;
                }else{
                    return v
                }
            })
        }
    
    }
})


export const { adduser , deleteuser, edituser } = crudSlice.actions;

export default  crudSlice.reducer;