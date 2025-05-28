import {configureStore} from "@reduxjs/toolkit"
import todos from "../../slices/todoListSlices"
const store =configureStore({
  reducer:{
    todo:todos
  }
});
export default store;