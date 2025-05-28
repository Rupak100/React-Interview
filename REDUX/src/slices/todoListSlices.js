import { createSlice } from "@reduxjs/toolkit";

const todoList =createSlice({
    name:"todolist",
    initialState:[],
    reducers:{
      addTodo:(state,action)=>{
        state.push(
            {
                id:Date.now(),
                data:action.payload,
                completed:false
            }
        )
      },
      deleteTodo:(state,action)=>{
       return state.filter((t)=>t.id!==action.payload)
      },
      toggleTodo:(state,action) =>{
         const todo = state.find((f)=>f.id===action.payload);
         todo.completed = !todo.completed;
      }
    }
});

export const {addTodo,deleteTodo,toggleTodo
} = todoList.actions;
export default todoList.reducer;
