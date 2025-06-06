import {configureStore} from "@reduxjs/toolkit"
import Counter from "./counterSlice"

const store = configureStore({
    reducer:{
        counter:Counter
    }
});

export default store;