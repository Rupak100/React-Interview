import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        count:0
    }
    ,
    reducers:{
        Increment:(state,action)=>{
           state.count = state.count+1
        },
        Decrement :(state,action)=>{
           state.count = state.count-1
        },
        Reset:(state,action)=>{
            state.count = 0;
        }
    }
});

export const {Increment,Decrement,Reset} = counterSlice.actions;
export default counterSlice.reducer;

