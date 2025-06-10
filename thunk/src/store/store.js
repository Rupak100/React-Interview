
import {configureStore} from "@reduxjs/toolkit";
import todos from "../thunkSlice/todoSlice";
 const store = configureStore({
  reducer:{
    todo:todos
  },
  middleware:(getDefaultMiddleware)=>{
   return  getDefaultMiddleware()
  }
});

export default store;



